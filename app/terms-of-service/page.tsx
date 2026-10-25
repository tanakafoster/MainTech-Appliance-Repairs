import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"
// File path: app/terms-of-service/page.tsx
// Clean URL: https://www.maintechappliancerepairs.co.za/terms-of-service

import { Scale, FileText, CheckCircle, AlertTriangle, Mail, Phone, MapPin, Shield } from "lucide-react"

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "Read the MainTech terms for quotations and appliance, refrigeration and aircon work on this website. Ask us if you are unsure. Call 065 650 8504.",
  path: "/terms-of-service",
})

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Scale className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold lg:text-5xl">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">MainTech Appliance Repairs</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Effective Date: July 30, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Applies to Website & Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">

            {/* Introduction */}
            <div className="mb-12 rounded-xl bg-muted p-8">
              <h2 className="mb-4 text-2xl font-bold">1. Introduction and Acceptance</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                These Terms of Service (&quot;Terms&quot;) govern your use of the website{" "}
                <a href={site.url} className="text-primary hover:underline">
                  {site.url}
                </a>{" "}
                and any quotation, job, or service you engage MainTech Appliance Repairs (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;MainTech Appliance Repairs&quot;) to carry out. By using our website or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                For any booked work, these Terms apply alongside any separate written quotation or scope of work agreed between you and MainTech Appliance Repairs. Where a signed agreement and these Terms conflict, the signed agreement takes precedence.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">2. Our Services</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                MainTech Appliance Repairs provides air conditioning, refrigeration repairs, cold room installation and repair, commercial refrigeration, appliance repairs, HVAC maintenance contracts, emergency callouts, and related plumbing and electrical connections to residential, commercial, and industrial clients across Gauteng, South Africa. The specific scope of any job is defined in the written quotation provided to you before work begins.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We reserve the right to decline or discontinue any service request at our discretion, including where a site is unsafe, a request falls outside our expertise, or payment terms are not met.
              </p>
            </div>

            {/* Quotations */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">3. Quotations and Estimates</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Free Quotations", description: "Initial quotations are provided free of charge following a site visit or consultation." },
                  { title: "Validity Period", description: "Quotations are valid for 30 days from the date issued unless otherwise stated." },
                  { title: "Estimates vs. Fixed Price", description: "Quotations reflect the scope known at the time. Unforeseen site conditions may require a revised quotation." },
                  { title: "Written Approval", description: "Work begins only once you approve the quotation in writing (including email or WhatsApp confirmation)." },
                ].map((item, index) => (
                  <div key={index} className="rounded-lg bg-muted p-6 border border-border">
                    <h3 className="mb-2 font-semibold text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">4. Payment Terms</h2>
              <ul className="mb-4 ml-6 space-y-2 list-disc text-muted-foreground">
                <li>A deposit may be required before work commences, as specified in your quotation.</li>
                <li>Progress payments may apply for larger projects, invoiced at agreed milestones.</li>
                <li>Final payment is due on completion, unless otherwise agreed in writing.</li>
                <li>Late payments may incur interest and may pause further work until resolved.</li>
                <li>We accept EFT and other payment methods as confirmed at the time of quoting.</li>
              </ul>
              <p className="text-sm italic text-muted-foreground">
                Specific payment schedules, deposit amounts, and milestones for your project are set out in your individual quotation or contract.
              </p>
            </div>

            {/* Changes and Cancellations */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">5. Changes, Variations & Cancellations</h2>
              <div className="space-y-4">
                <div className="rounded-lg bg-muted p-6">
                  <h3 className="mb-2 text-lg font-semibold">5.1 Changes to Scope</h3>
                  <p className="text-sm text-muted-foreground">
                    Any changes to the agreed scope of work must be confirmed in writing and may result in a revised quotation and adjusted timeline.
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-6">
                  <h3 className="mb-2 text-lg font-semibold">5.2 Cancellations</h3>
                  <p className="text-sm text-muted-foreground">
                    You may cancel a project before work begins. Deposits already paid may be non-refundable where materials have been ordered or labor scheduled on your behalf. Cancellation once work has started may require payment for work completed and materials committed.
                  </p>
                </div>
              </div>
            </div>

            {/* Warranties */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">6. Warranties and Guarantees</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                We stand behind the quality of our workmanship. Warranty terms (including duration and coverage) are specific to the type of work performed and will be detailed in your project documentation. Warranties generally do not cover:
              </p>
              <ul className="ml-6 space-y-2 list-disc text-muted-foreground">
                <li>Damage caused by misuse, neglect, or lack of maintenance</li>
                <li>Normal wear and tear</li>
                <li>Work or alterations carried out by third parties after project completion</li>
                <li>Pre-existing defects not identified as part of the original scope</li>
              </ul>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Manufacturer warranties on materials and fixtures (e.g. geysers, tiles, fittings) are passed through to you as provided by the manufacturer or supplier.
              </p>
            </div>

            {/* Client Obligations */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">7. Client Responsibilities</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">To help us deliver your project safely and on schedule, you agree to:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Provide safe and reasonable site access",
                  "Disclose known site hazards or structural issues",
                  "Obtain any required body corporate or landlord approvals",
                  "Respond to requests for decisions or approvals promptly",
                  "Ensure utilities (water, electricity) are available where needed",
                  "Settle invoices according to the agreed payment terms",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Liability */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">8. Limitation of Liability</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                While we carry appropriate insurance and take reasonable care in all work performed, the liability of MainTech Appliance Repairs for any claim arising from our services is limited to the value of the relevant job, except where liability cannot be excluded or limited under South African law (including gross negligence or willful misconduct).
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We are not liable for delays or failures caused by circumstances beyond our reasonable control, including extreme weather, load shedding, supplier delays, or municipal service interruptions.
              </p>
            </div>

            {/* Insurance */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">9. Insurance</h2>
              <p className="leading-relaxed text-muted-foreground">
                MainTech Appliance Repairs maintains insurance cover appropriate to the work we perform. Details of specific coverage can be provided on request. We recommend clients maintain their own homeowner&apos;s or business insurance covering the property during any installation or repair work.
              </p>
            </div>

            {/* Website Use */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">10. Website Use and Intellectual Property</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                All content on this website, including text, images, logos, and design, is the property of MainTech Appliance Repairs or its licensors and may not be copied, reproduced, or used without our prior written consent.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                You agree not to use this website for any unlawful purpose or in a way that could damage, disable, or impair its functionality.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">11. Dispute Resolution</h2>
              <p className="leading-relaxed text-muted-foreground">
                If a dispute arises regarding our services, we encourage you to contact us directly so we can resolve the matter promptly. If a resolution cannot be reached informally, disputes will be handled in accordance with South African law and, where applicable, referred to mediation or arbitration before formal legal proceedings.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">12. Governing Law</h2>
              <div className="rounded-lg bg-muted p-6 flex items-start gap-4">
                <Scale className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  These Terms are governed by the laws of the Republic of South Africa. Any disputes not resolved through mediation will be subject to the exclusive jurisdiction of the South African courts.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">13. Changes to These Terms</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                We may update these Terms from time to time to reflect changes in our services or legal requirements. Updates will be posted on this page with a revised effective date. Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms.
              </p>
              <div className="flex items-start gap-3 rounded-lg bg-primary/10 p-4 border border-primary/20">
                <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  For active projects, the Terms in effect at the time your quotation was accepted will continue to apply to that project.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">14. Contact Us</h2>
              <div className="rounded-xl bg-muted p-6">
                <p className="mb-4 text-muted-foreground">
                  Questions about these Terms of Service can be directed to:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{site.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">065 650 8504</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Gauteng, South Africa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border pt-8">
              <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
                <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Questions About Our Terms?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We&apos;re happy to walk through anything in these Terms before you commit to a project.
                  Reach out any time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </a>
                  <a
                    href="tel:+27656508504"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call: 065 650 8504
                  </a>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
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
