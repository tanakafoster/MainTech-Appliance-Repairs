"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Send } from "lucide-react"
import { site } from "@/lib/site"

const services = [
  "Fridge and freezer repairs",
  "Washing machine repairs",
  "Tumble dryer repairs",
  "Dishwasher repairs",
  "Oven, stove, or hob repairs",
  "Commercial refrigeration",
  "Cold room installation or repair",
  "Air conditioner repairs",
  "Air conditioner servicing or installation",
  "Other",
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  location: string
  message: string
}

const emptyForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  location: "",
  message: "",
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [error, setError] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setError("")
    if (status !== "loading") setStatus("idle")
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.firstName.trim() || !form.lastName.trim() || !form.phone.trim() || !form.service || !form.message.trim()) {
      setStatus("error")
      setError("Fill in your name, phone number, service, and a short description of the fault.")
      return
    }
    if (!emailPattern.test(form.email.trim())) {
      setStatus("error")
      setError("Enter a valid email address.")
      return
    }

    const accessKey = process.env.NEXT_PUBLIC_FORM_KEY
    if (!accessKey) {
      setStatus("error")
      setError("The enquiry form is not configured yet.")
      return
    }

    setStatus("loading")
    setError("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Quote request: ${form.service}`,
          name: `${form.firstName.trim()} ${form.lastName.trim()}`,
          email: form.email.trim(),
          phone: form.phone.trim(),
          service: form.service,
          location: form.location.trim(),
          message: form.message.trim(),
        }),
      })
      const result = (await response.json()) as { success?: boolean; message?: string }
      if (!response.ok || !result.success) {
        setStatus("error")
        setError(result.message || "The enquiry could not be sent.")
        return
      }
      setStatus("success")
      setForm(emptyForm)
    } catch {
      setStatus("error")
      setError("The enquiry could not be sent.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-accent/10 p-8 text-center" role="status">
        <h3 className="mb-2 text-xl font-bold">Thanks, we&apos;ll be in touch shortly</h3>
        <p className="text-muted-foreground">
          Your quote request was sent to {site.name}. You can also reach us on{" "}
          <a className="font-semibold text-foreground underline" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" name="firstName" value={form.firstName} onChange={(event) => update("firstName", event.target.value)} autoComplete="given-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" name="lastName" value={form.lastName} onChange={(event) => update("lastName", event.target.value)} autoComplete="family-name" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input id="email" name="email" type="email" value={form.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone number</Label>
        <Input id="phone" name="phone" type="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service required</Label>
        <Select value={form.service} onValueChange={(value) => update("service", value)}>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Area in Gauteng</Label>
        <Input id="location" name="location" value={form.location} onChange={(event) => update("location", event.target.value)} placeholder="For example, Sandton" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">What is the fault?</Label>
        <Textarea id="message" name="message" value={form.message} onChange={(event) => update("message", event.target.value)} rows={5} required />
      </div>

      {status === "error" && (
        <div className="rounded-lg bg-destructive/10 p-4 text-sm" role="alert">
          <p>{error}</p>
          <p className="mt-2">
            You can still message us on{" "}
            <a className="font-semibold underline" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            .
          </p>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" aria-hidden="true" />
            Send request
          </>
        )}
      </Button>
    </form>
  )
}
