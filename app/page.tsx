import Link from 'next/link'
import {
  Target,
  FileText,
  Receipt,
  BookOpen,
  Database,
  CheckSquare,
  Workflow,
  ArrowRight,
} from 'lucide-react'
import { StakeholderLegend } from '@/components/stage-intro'

const pipelines = [
  {
    title: 'Challenge Pipeline',
    description: 'From OTA intro call through archive — 8 stages of challenge lifecycle management.',
    icon: Target,
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    stages: [
      { name: 'OTA Intro Call', slug: 'docs/challenge-pipeline/01-ota-intro-call' },
      { name: 'Drafting Challenge', slug: 'docs/challenge-pipeline/02-drafting-challenge' },
      { name: 'Challenge Live', slug: 'docs/challenge-pipeline/03-challenge-live' },
      { name: 'Evaluation', slug: 'docs/challenge-pipeline/04-evaluation' },
      { name: 'Vendor Coordination', slug: 'docs/challenge-pipeline/05-vendor-coordination' },
      { name: 'Prototype Execution', slug: 'docs/challenge-pipeline/06-prototype-execution' },
      { name: 'Production Execution', slug: 'docs/challenge-pipeline/07-production-execution' },
      { name: 'Archive', slug: 'docs/challenge-pipeline/08-archive' },
    ],
  },
  {
    title: 'Contracts Pipeline',
    description: 'SOW alignment, agreement execution, modifications, and active contract management.',
    icon: FileText,
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    stages: [
      { name: 'SOW Finalization', slug: 'docs/contracts-pipeline/01-sow-finalization' },
      { name: 'Agreement Finalization', slug: 'docs/contracts-pipeline/02-agreement-finalization' },
      { name: 'Fully Executed', slug: 'docs/contracts-pipeline/03-fully-executed' },
      { name: 'Modification', slug: 'docs/contracts-pipeline/04-modification' },
      { name: 'Executing', slug: 'docs/contracts-pipeline/05-executing' },
    ],
  },
  {
    title: 'Invoices Pipeline',
    description: 'Vendor invoice intake, CLIN mapping, ONI review, and ACC-RI submission.',
    icon: Receipt,
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    stages: [
      { name: 'Invoice Anticipated', slug: 'docs/invoices-pipeline/01-invoice-anticipated' },
      { name: 'Vendor Invoice Received', slug: 'docs/invoices-pipeline/02-vendor-invoice-received' },
      { name: 'ONI Invoice Review', slug: 'docs/invoices-pipeline/03-oni-invoice-review' },
      { name: 'Submitted to ACC-RI', slug: 'docs/invoices-pipeline/04-submitted-to-acc-ri' },
      { name: 'Closed', slug: 'docs/invoices-pipeline/05-closed' },
    ],
  },
]

const quickLinks = [
  {
    title: 'Marketplace Workflows',
    icon: Workflow,
    links: [
      { name: 'Posting a Challenge', slug: 'docs/marketplace-workflows/01-posting-a-challenge' },
      { name: 'Challenge Closeout Package', slug: 'docs/marketplace-workflows/02-challenge-closeout-package' },
      { name: 'Processing an Invoice', slug: 'docs/marketplace-workflows/03-processing-an-invoice' },
      { name: 'AI Grader', slug: 'docs/marketplace-workflows/05-ai-grader' },
      { name: 'Requesting Updated Proposal', slug: 'docs/marketplace-workflows/06-requesting-updated-proposal' },
      { name: 'Fair & Reasonable Pricing', slug: 'docs/marketplace-workflows/07-fair-and-reasonable-pricing' },
      { name: 'Requesting Reps & Certs', slug: 'docs/marketplace-workflows/08-requesting-reps-and-certs' },
    ],
  },
  {
    title: 'Cross-Cutting Knowledge',
    icon: BookOpen,
    links: [
      { name: 'OTA Prototype Framing', slug: 'docs/cross-cutting/ota-prototype-framing' },
      { name: 'ACC-RI Coordination', slug: 'docs/cross-cutting/acc-ri-coordination' },
      { name: 'Vendor Management', slug: 'docs/cross-cutting/vendor-management' },
      { name: 'Escalation Paths', slug: 'docs/cross-cutting/escalation-paths' },
      { name: 'Lessons Learned', slug: 'docs/cross-cutting/lessons-learned' },
    ],
  },
  {
    title: 'Copper CRM',
    icon: Database,
    links: [
      { name: 'Tracking Projects', slug: 'docs/copper-crm/tracking-projects' },
      { name: 'Pipeline & Status Definitions', slug: 'docs/copper-crm/pipeline-status-definitions' },
    ],
  },
  {
    title: 'Checklists & Templates',
    icon: CheckSquare,
    links: [
      { name: 'Post-Selection Vendor Package', slug: 'templates/checklists/post-selection-vendor-package' },
      { name: 'Invoice Intake Checklist', slug: 'templates/checklists/invoice-intake' },
      { name: 'Project Closeout', slug: 'templates/checklists/project-closeout' },
      { name: 'CLIN Invoice Worksheet', slug: 'templates/documents/clin-invoice-worksheet' },
    ],
  },
]

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 lg:px-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3">ONI PM Wiki</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Program Manager knowledge base for ONI&apos;s OTA marketplace workflow — from challenge
          intake through contract execution, invoicing, and archive.
        </p>
        <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm font-medium text-primary">Core PM Principle</p>
          <p className="text-sm mt-1 text-foreground/80">
            Keep the public challenge broad, prototype-focused, and centered on the operational need
            — not a prescriptive solution. Government can specify more detail in LOEs/SOW later.
          </p>
        </div>
      </div>

      {/* Pipelines */}
      <div className="space-y-8 mb-12">
        {pipelines.map((pipeline) => {
          const Icon = pipeline.icon
          return (
            <div key={pipeline.title} className="border border-border rounded-lg overflow-hidden">
              <div className="px-5 py-4 border-b border-border bg-card">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md border ${pipeline.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">{pipeline.title}</h2>
                    <p className="text-sm text-muted-foreground">{pipeline.description}</p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 bg-background">
                <div className="flex flex-wrap items-center gap-1.5">
                  {pipeline.stages.map((stage, i) => (
                    <span key={stage.slug} className="flex items-center gap-1.5">
                      <Link
                        href={`/${stage.slug}`}
                        className="text-sm px-2.5 py-1 rounded-md hover:bg-accent transition-colors text-foreground"
                      >
                        {stage.name}
                      </Link>
                      {i < pipeline.stages.length - 1 && (
                        <ArrowRight className="h-3 w-3 text-muted-foreground shrink-0" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickLinks.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="border border-border rounded-lg p-5 bg-card">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-sm">{section.title}</h3>
              </div>
              <div className="space-y-1">
                {section.links.map((link) => (
                  <Link
                    key={link.slug}
                    href={`/${link.slug}`}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Stakeholder Legend */}
      <div className="mt-12 mb-8">
        <StakeholderLegend />
      </div>

      {/* Status Definitions */}
      <div className="mt-8 border border-border rounded-lg p-5 bg-card">
        <h3 className="font-semibold mb-3">Status Flow Quick Reference</h3>
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-medium text-blue-700">Challenge:</span>{' '}
            <span className="text-muted-foreground">
              Intake → Drafting → Gov Review → Live → Evaluating → Selection Pending → Vendor
              Coordination → Award In Progress → Executing → Archived
            </span>
          </div>
          <div>
            <span className="font-medium text-emerald-700">Contract:</span>{' '}
            <span className="text-muted-foreground">
              SOW Finalizing → Agreement Finalizing → Fully Executed → Modification In Work →
              Executing → Closed
            </span>
          </div>
          <div>
            <span className="font-medium text-amber-700">Invoice:</span>{' '}
            <span className="text-muted-foreground">
              Anticipated → Vendor Invoice Received → ONI Review → Submitted to ACC-RI → Closed
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
