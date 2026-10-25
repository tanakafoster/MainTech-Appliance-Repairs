import fs from "node:fs"
import path from "node:path"

const root = path.resolve("out")
const origin = "https://www.maintechappliancerepairs.co.za"
const banned = ["TODO", "lorem", "[e.g", "Cold Fix", "ColdFix", "070 309 6749", "0703096749", "coldfix"]

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    if (fs.statSync(full).isDirectory()) walk(full, acc)
    else acc.push(full)
  }
  return acc
}

function text(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ")
}

const htmlFiles = walk(root).filter((file) => file.endsWith(".html") && !file.endsWith("_not-found.html"))
const titles = new Map()
const descriptions = new Map()
const issues = []

function add(message) {
  issues.push(message)
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8")
  const rel = path.relative(root, file)
  const title = (html.match(/<title>([^<]*)<\/title>/i) || [])[1] || ""
  const description = (html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || ""
  const h1s = [...html.matchAll(/<h1\b/gi)]
  if (!title) add(`${rel}: missing title`)
  if (!description) add(`${rel}: missing description`)
  if (title && (title.length > 60 || !title.endsWith("| MainTech"))) add(`${rel}: title ${title.length} "${title}"`)
  if (description && (description.length < 140 || description.length > 160)) add(`${rel}: description ${description.length}`)
  if (h1s.length !== 1) add(`${rel}: h1 count ${h1s.length}`)
  if (title) {
    const list = titles.get(title) || []
    list.push(rel)
    titles.set(title, list)
  }
  if (description) {
    const list = descriptions.get(description) || []
    list.push(rel)
    descriptions.set(description, list)
  }
  const visible = text(html)
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0])
  for (const img of imgs) {
    if (!/\balt="[^"]+"/.test(img) && !/\balt='[^']+'/.test(img)) add(`${rel}: image missing alt ${img.slice(0, 80)}`)
  }
  for (const href of html.matchAll(/href="(\/[^"]*)"/g)) {
    const url = href[1].split("#")[0]
    if (!url.startsWith("/") || url.startsWith("//")) continue
    if (url.startsWith("/_next") || url.includes(".")) continue
    const target = url === "/" ? path.join(root, "index.html") : path.join(root, url.replace(/^\//, ""), "index.html")
    const flat = url === "/" ? path.join(root, "index.html") : path.join(root, `${url.replace(/^\//, "")}.html`)
    if (!fs.existsSync(target) && !fs.existsSync(flat) && !fs.existsSync(path.join(root, url.replace(/^\//, "")))) {
      add(`${rel}: broken link ${url}`)
    }
  }
  for (const pattern of [/<link rel="canonical" href="([^"]+)"/i, /<meta property="og:url" content="([^"]+)"/i]) {
    const found = html.match(pattern)
    if (found && !found[1].startsWith(origin)) add(`${rel}: bad url ${found[1]}`)
  }
  if (html.includes("application/ld+json")) {
    for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      if (/"url"\s*:\s*"(?!https:\/\/www\.maintechappliancerepairs\.co\.za)/.test(block[1])) add(`${rel}: json-ld url off domain`)
    }
  }
  const haystack = `${html}\n${visible}`
  for (const word of banned) {
    if (haystack.toLowerCase().includes(word.toLowerCase())) add(`${rel}: banned ${word}`)
  }
}

for (const [title, files] of titles) if (files.length > 1) add(`duplicate title ${title}: ${files.join(", ")}`)
for (const [description, files] of descriptions) if (files.length > 1) add(`duplicate description ${description}: ${files.join(", ")}`)

const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8")
const sitemapLine = robots.split("\n").find((line) => line.toLowerCase().startsWith("sitemap:")) || ""
if (!sitemapLine.includes(`${origin}/sitemap.xml`)) add(`robots sitemap line: ${sitemapLine}`)
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8")
if (/coldfix/i.test(sitemap)) add("sitemap contains coldfix")
for (const loc of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  if (!loc[1].startsWith(origin)) add(`sitemap loc ${loc[1]}`)
}
const redirectFile = path.resolve("vercel.json")
for (const file of walk(root)) {
  if (path.resolve(file) === redirectFile) continue
  const body = fs.readFileSync(file)
  if (file.endsWith(".html") || file.endsWith(".txt") || file.endsWith(".xml")) {
    const content = body.toString("utf8")
    if (/coldfix/i.test(content)) add(`${path.relative(root, file)}: coldfix`)
  }
}

if (issues.length) {
  console.log(issues.join("\n"))
  process.exit(1)
}
console.log("qa clean", htmlFiles.length, "html files")
