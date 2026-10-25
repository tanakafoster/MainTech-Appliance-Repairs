import { Breadcrumbs } from "@/components/breadcrumbs"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"
// File path: app/privacy-policy/page.tsx
// Clean URL: https://www.maintechappliancerepairs.co.za/privacy-policy

import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from "lucide-react"

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Read how MainTech handles personal information under POPIA, including what we collect and how to reach us in Gauteng today. Call 065 650 8504.",
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue/25 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 pb-14 pt-4 md:pb-16">
          <Breadcrumbs variant="onDark" currentPath="/privacy-policy" items={[{ label: "Privacy policy" }]} />
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-ice">Legal</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">Privacy Policy</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-on-navy">How MainTech Appliance Repairs collects, uses and protects your personal information under POPIA.</p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-on-navy">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Effective date: 30 July 2026
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            
            {/* Introduction */}
            <div className="mb-12 rounded-xl bg-ice-tint p-8">
              <h2 className="mb-4 text-2xl font-bold">1. Introduction</h2>
              <p className="mb-4 leading-relaxed text-ink">
                MainTech Appliance Repairs (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;MainTech Appliance Repairs&quot;) is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
                <a href={site.url} className="text-blue hover:underline">
                  {site.url}
                </a>
                , use our services, or interact with us.
              </p>
              <p className="mb-6 leading-relaxed text-ink">
                This policy complies with the <strong>Protection of Personal Information Act, 2013 (POPIA)</strong> and other applicable South African data protection legislation.
              </p>

              <div className="space-y-2 rounded-lg bg-surface p-6 border border-border">
                <h3 className="mb-4 font-bold text-lg">Our Contact Details:</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-slate">Gauteng, South Africa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-slate">065 650 8504</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-slate">{site.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">2. Information We Collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">2.1 Personal Information You Provide</h3>
                  <p className="mb-4 leading-relaxed text-ink">
                    We collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="mb-4 ml-6 space-y-2 list-disc text-ink">
                    <li>Request a quote or consultation</li>
                    <li>Contact us via phone, email, or contact forms</li>
                    <li>Subscribe to our newsletter or marketing communications</li>
                    <li>Create an account on our website</li>
                    <li>Engage our services</li>
                    <li>Provide feedback or reviews</li>
                  </ul>
                  <p className="mb-3 leading-relaxed text-ink">
                    This information may include:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Full name and surname",
                      "Email address",
                      "Phone number(s)",
                      "Physical address",
                      "Company name (for commercial clients)",
                      "Property details",
                      "Service requirements and preferences",
                      "Payment information",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-slate">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">2.2 Information Automatically Collected</h3>
                  <p className="mb-4 leading-relaxed text-ink">
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "IP address",
                      "Browser type and version",
                      "Device information",
                      "Operating system",
                      "Pages visited and time spent",
                      "Referring website addresses",
                      "Geographic location data",
                      "Cookies and tracking technologies",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-slate">
                        <Eye className="h-4 w-4 text-blue flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">2.3 Information from Third Parties</h3>
                  <p className="mb-4 leading-relaxed text-ink">
                    We may receive information about you from third parties, such as:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Social media platforms (Facebook, Instagram, Pinterest)",
                      "Payment processors",
                      "Marketing partners",
                      "Publicly available sources",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-slate">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">3. How We Use Your Information</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "3.1 Service Delivery",
                    items: [
                      "Processing service requests and quotations",
                      "Scheduling appointments and site visits",
                      "Delivering air conditioning, refrigeration, and appliance repair services",
                      "Managing projects and client relationships",
                      "Communicating about your projects",
                    ],
                  },
                  {
                    title: "3.2 Business Operations",
                    items: [
                      "Processing payments and maintaining financial records",
                      "Managing customer accounts",
                      "Providing customer support",
                      "Conducting quality assurance and project follow-ups",
                      "Maintaining records for warranty and compliance purposes",
                    ],
                  },
                  {
                    title: "3.3 Marketing and Communications",
                    items: [
                      "Sending promotional materials and newsletters (with your consent)",
                      "Informing you about new services and special offers",
                      "Conducting customer satisfaction surveys",
                      "Building and maintaining customer relationships",
                    ],
                  },
                  {
                    title: "3.4 Legal and Compliance",
                    items: [
                      "Complying with legal obligations and regulations",
                      "Maintaining NHBRC, CIDB, and other certification requirements",
                      "Protecting our legal rights and preventing fraud",
                      "Responding to legal processes and government requests",
                    ],
                  },
                  {
                    title: "3.5 Website Improvement",
                    items: [
                      "Analyzing website usage and performance",
                      "Improving user experience and functionality",
                      "Developing new features and services",
                      "Conducting research and analytics",
                    ],
                  },
                ].map((section, index) => (
                  <div key={index} className="rounded-lg bg-ice-tint p-6">
                    <h3 className="mb-3 text-lg font-semibold">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue flex-shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Basis */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">4. Legal Basis for Processing (POPIA Compliance)</h2>
              <p className="mb-4 leading-relaxed text-ink">
                We process your personal information based on the following lawful grounds:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Consent",
                    description: "You have given explicit consent for specific purposes",
                  },
                  {
                    title: "Contractual Necessity",
                    description: "Processing is necessary to fulfill our service agreements",
                  },
                  {
                    title: "Legal Obligation",
                    description: "We must process your information to comply with South African law",
                  },
                  {
                    title: "Legitimate Interests",
                    description: "Processing is necessary for our legitimate business interests, provided your rights are not overridden",
                  },
                ].map((item, index) => (
                  <div key={index} className="rounded-lg bg-ice-tint p-6 border border-border">
                    <h3 className="mb-2 font-semibold text-navy">{item.title}</h3>
                    <p className="text-sm text-slate">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Share Information */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">5. How We Share Your Information</h2>
              
              <div className="mb-6 space-y-6">
                {[
                  {
                    title: "5.1 Service Providers and Contractors",
                    items: [
                      "Subcontractors and specialist tradespeople",
                      "Suppliers and material vendors",
                      "Professional consultants (engineers, architects)",
                      "Payment processors",
                    ],
                  },
                  {
                    title: "5.2 Business Partners",
                    items: [
                      "Insurance providers",
                      "Certification bodies (NHBRC, CIDB, ECSA)",
                      "Industry associations",
                    ],
                  },
                  {
                    title: "5.3 Legal and Regulatory Authorities",
                    items: [
                      "Government agencies and regulators",
                      "Law enforcement when legally required",
                      "Legal advisors and auditors",
                    ],
                  },
                  {
                    title: "5.4 Third-Party Service Providers",
                    items: [
                      "Website hosting and maintenance providers",
                      "Email service providers",
                      "Marketing and analytics platforms",
                      "Customer relationship management (CRM) systems",
                    ],
                  },
                ].map((section, index) => (
                  <div key={index}>
                    <h3 className="mb-3 text-lg font-semibold">{section.title}</h3>
                    <ul className="space-y-2 ml-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue flex-shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-ice-tint p-6 border-2 border-border">
                <p className="font-semibold text-center">
                  We do not sell your personal information to third parties.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">6. Data Security</h2>
              <p className="mb-4 leading-relaxed text-ink">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction, including:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Secure server infrastructure",
                  "Encryption of sensitive data",
                  "Regular security assessments",
                  "Access controls and authentication",
                  "Employee training on data protection",
                  "Secure payment processing systems",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-lg bg-ice-tint p-4">
                    <Lock className="h-5 w-5 text-blue flex-shrink-0" />
                    <span className="text-sm text-slate">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm italic text-ink">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">7. Data Retention</h2>
              <p className="mb-4 leading-relaxed text-ink">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="mb-6 ml-6 space-y-2 list-disc text-ink">
                <li>Fulfill the purposes outlined in this Privacy Policy</li>
                <li>Comply with legal, regulatory, and contractual obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain warranty and project records</li>
              </ul>

              <h3 className="mb-4 text-lg font-semibold">Retention Periods:</h3>
              <div className="space-y-3">
                {[
                  {
                    type: "Active client records",
                    period: "Duration of service relationship plus 5 years",
                  },
                  {
                    type: "Project documentation",
                    period: "5 years after project completion (NHBRC requirements)",
                  },
                  {
                    type: "Financial records",
                    period: "5 years (South African tax law requirements)",
                  },
                  {
                    type: "Marketing communications",
                    period: "Until you unsubscribe or withdraw consent",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 rounded-lg bg-ice-tint p-4">
                    <FileText className="h-5 w-5 text-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{item.type}</p>
                      <p className="text-sm text-slate">{item.period}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate">
                After the retention period, we securely delete or anonymize your information.
              </p>
            </div>

            {/* Your Rights Under POPIA */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">8. Your Rights Under POPIA</h2>
              <p className="mb-6 leading-relaxed text-ink">
                You have the following rights regarding your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Right to Access",
                    description: "Request access to your personal information we hold",
                  },
                  {
                    title: "Right to Correction",
                    description: "Request correction of inaccurate or incomplete information",
                  },
                  {
                    title: "Right to Deletion",
                    description: "Request deletion of your personal information (subject to legal retention requirements)",
                  },
                  {
                    title: "Right to Object",
                    description: "Object to processing of your information for certain purposes",
                  },
                  {
                    title: "Right to Restriction",
                    description: "Request restriction of processing in certain circumstances",
                  },
                  {
                    title: "Right to Data Portability",
                    description: "Receive your information in a structured, commonly used format",
                  },
                  {
                    title: "Right to Withdraw Consent",
                    description: "Withdraw consent for processing where consent was the legal basis",
                  },
                  {
                    title: "Right to Lodge a Complaint",
                    description: "Lodge a complaint with the Information Regulator of South Africa",
                  },
                ].map((right, index) => (
                  <div key={index} className="rounded-lg bg-ice-tint p-6 border border-border">
                    <h3 className="mb-2 font-semibold text-navy">{right.title}</h3>
                    <p className="text-sm text-slate">{right.description}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-ice-tint p-6 border-2 border-border">
                <h3 className="mb-4 font-bold">To exercise your rights, contact us at:</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> {site.email}</p>
                  <p><strong>Phone:</strong> 065 650 8504</p>
                  <p><strong>Location:</strong> Gauteng, South Africa</p>
                </div>
                <p className="mt-4 text-sm font-semibold">We will respond to your request within 30 days.</p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">9. Cookies and Tracking Technologies</h2>
              <p className="mb-6 leading-relaxed text-ink">
                Our website uses cookies and similar tracking technologies to enhance user experience and analyze website performance.
              </p>

              <h3 className="mb-4 text-lg font-semibold">9.1 Types of Cookies We Use</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    type: "Essential Cookies",
                    description: "Necessary for website functionality",
                  },
                  {
                    type: "Performance Cookies",
                    description: "Help us understand how visitors use our site",
                  },
                  {
                    type: "Functional Cookies",
                    description: "Remember your preferences",
                  },
                  {
                    type: "Marketing Cookies",
                    description: "Track advertising effectiveness (with consent)",
                  },
                ].map((cookie, index) => (
                  <div key={index} className="rounded-lg bg-ice-tint p-4 border border-border">
                    <h4 className="mb-2 font-semibold">{cookie.type}</h4>
                    <p className="text-sm text-slate">{cookie.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="mb-3 text-lg font-semibold">9.2 Managing Cookies</h3>
              <p className="text-sm text-slate">
                You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
              </p>
            </div>

            {/* Additional Sections */}
            <div className="space-y-12 mb-12">
              <div>
                <h2 className="mb-4 text-2xl font-bold">10. Third-Party Links</h2>
                <p className="text-ink">
                  Our website may contain links to third-party websites (social media, suppliers, partners). We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing personal information.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">11. Children&apos;s Privacy</h2>
                <p className="text-ink">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold">12. International Data Transfers</h2>
                <p className="text-ink">
                  We primarily operate within South Africa. If we transfer your information internationally, we ensure appropriate safeguards are in place to protect your data in accordance with POPIA.
                </p>
              </div>
            </div>

            {/* Marketing Communications */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">13. Marketing Communications</h2>
              
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold">13.1 Consent</h3>
                <p className="text-ink">
                  We will only send marketing communications with your explicit consent.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold">13.2 Unsubscribe</h3>
                <p className="mb-4 text-ink">
                  You can unsubscribe from marketing communications at any time by:
                </p>
                <ul className="mb-4 ml-6 space-y-2 list-disc text-ink">
                  <li>Clicking the &quot;unsubscribe&quot; link in emails</li>
                  <li>Contacting us at {site.email}</li>
                  <li>Calling us at 065 650 8504</li>
                </ul>
                <p className="text-sm italic text-ink">
                  You will continue to receive service-related communications even after unsubscribing from marketing.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">14. Changes to This Privacy Policy</h2>
              <p className="mb-4 leading-relaxed text-ink">
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or business operations. We will notify you of significant changes by:
              </p>
              <ul className="ml-6 space-y-2 list-disc text-ink">
                <li>Posting the updated policy on our website</li>
                <li>Updating the &quot;Last Updated&quot; date</li>
                <li>Sending email notifications for material changes (where appropriate)</li>
              </ul>
              <p className="mt-4 text-sm font-semibold">
                We encourage you to review this policy regularly.
              </p>
            </div>

            {/* Contact and Complaints */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">15. Contact Us and Complaints</h2>
              
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold">15.1 Information Officer</h3>
                <div className="rounded-xl bg-ice-tint p-6">
                  <p className="mb-4 text-ink">
                    Our designated Information Officer under POPIA is available to address privacy concerns:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Information Officer:</strong> MainTech Appliance Repairs Management</p>
                    <p><strong>Email:</strong> {site.email}</p>
                    <p><strong>Phone:</strong> 065 650 8504</p>
                    <p><strong>Location:</strong> Gauteng, South Africa</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold">15.2 Complaints Process</h3>
                <p className="mb-4 text-ink">
                  If you have concerns about how we handle your personal information:
                </p>
                <ol className="ml-6 space-y-2 list-decimal text-ink">
                  <li>Contact our Information Officer using the details above</li>
                  <li>We will acknowledge your complaint within 5 business days</li>
                  <li>We will investigate and respond within 30 days</li>
                  <li>If unsatisfied, you may lodge a complaint with the Information Regulator</li>
                </ol>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold">15.3 Information Regulator of South Africa</h3>
                <div className="rounded-xl bg-ice-tint p-6 border-2 border-border">
                  <p className="mb-4 font-semibold">Information Regulator (South Africa)</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Address:</strong> JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001</p>
                    <p><strong>Phone:</strong> +27 10 023 5200</p>
                    <p><strong>Email:</strong> inforeg@justice.gov.za</p>
                    <p><strong>Website:</strong>{" "}
                      <a href="https://www.justice.gov.za/inforeg/" className="text-blue hover:underline" target="_blank" rel="noopener noreferrer">
                        https://www.justice.gov.za/inforeg/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consent */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">16. Consent</h2>
              <p className="mb-4 leading-relaxed text-ink">
                By using our website and services, you consent to this Privacy Policy and our collection, use, and disclosure of your information as described herein.
              </p>
              <p className="text-sm text-slate">
                For specific processing activities, we will obtain your explicit consent where required by law.
              </p>
            </div>

            {/* Footer */}
            <div className="border-t border-border pt-8">
              <div className="rounded-xl bg-navy p-8 text-center text-white">
                <Shield className="mx-auto mb-4 h-12 w-12 text-ice" />
                <h3 className="mb-3 text-xl font-bold text-white">Your Privacy Matters to Us</h3>
                <p className="mx-auto mb-6 max-w-2xl text-on-navy">
                  We are committed to protecting your personal information and respecting your privacy rights. 
                  If you have any questions or concerns about this Privacy Policy or our data practices, 
                  please don&apos;t hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={`mailto:${site.email}`} 
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white px-6 py-3 font-semibold text-white"
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </a>
                  <a 
                    href="tel:+27656508504" 
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-amber px-6 py-3 font-semibold text-navy hover:bg-amber-hover"
                  >
                    <Phone className="h-4 w-4" />
                    Call: 065 650 8504
                  </a>
                </div>
                <p className="mt-6 text-sm text-on-navy">
                  Last Updated: July 30, 2026 | Effective Date: July 30, 2026
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
