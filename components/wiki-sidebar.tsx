'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Target,
  FileText,
  Receipt,
  BookOpen,
  Database,
  CheckSquare,
  FileSpreadsheet,
  Workflow,
  FolderOpen,
  Construction,
  ChevronDown,
  ChevronRight,
  Home,
  Menu,
  X,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  FileText,
  Receipt,
  BookOpen,
  Database,
  CheckSquare,
  FileSpreadsheet,
  Workflow,
  FolderOpen,
  Construction,
}

interface NavItem {
  title: string
  slug: string
  children?: NavItem[]
}

interface NavSection {
  title: string
  icon: string
  items: NavItem[]
}

// Primary navigation — mature sections
const primaryNav: NavSection[] = [
  {
    title: 'Challenge Pipeline',
    icon: 'Target',
    items: [
      { title: 'OTA Intro Call', slug: 'docs/challenge-pipeline/01-ota-intro-call', children: [
        { title: 'Create Google Drive Folder', slug: 'docs/google-drive/folder-structure' },
        { title: 'Create Copper CRM Card', slug: 'docs/copper-crm/tracking-projects' },
      ]},
      { title: 'Drafting Challenge', slug: 'docs/challenge-pipeline/02-drafting-challenge' },
      { title: 'Challenge Live', slug: 'docs/challenge-pipeline/03-challenge-live' },
      { title: 'Evaluation', slug: 'docs/challenge-pipeline/04-evaluation' },
      { title: 'Vendor Coordination', slug: 'docs/challenge-pipeline/05-vendor-coordination' },
      { title: 'Prototype Execution', slug: 'docs/challenge-pipeline/06-prototype-execution' },
      { title: 'Production Execution', slug: 'docs/challenge-pipeline/07-production-execution', children: [
        { title: 'Success Memorandum', slug: 'docs/marketplace-workflows/04-success-memorandum' },
      ]},
      { title: 'Archive', slug: 'docs/challenge-pipeline/08-archive' },
    ],
  },
  {
    title: 'Marketplace Workflows',
    icon: 'Workflow',
    items: [
      { title: 'Posting a Challenge', slug: 'docs/marketplace-workflows/01-posting-a-challenge' },
      { title: 'Challenge Closeout Package', slug: 'docs/marketplace-workflows/02-challenge-closeout-package' },
      { title: 'AI Grader', slug: 'docs/marketplace-workflows/05-ai-grader' },
    ],
  },
  {
    title: 'Copper CRM',
    icon: 'Database',
    items: [
      { title: 'Tracking Projects', slug: 'docs/copper-crm/tracking-projects' },
      { title: 'Pipeline & Status Definitions', slug: 'docs/copper-crm/pipeline-status-definitions' },
    ],
  },
  {
    title: 'Google Drive',
    icon: 'FolderOpen',
    items: [
      { title: 'Folder Structure', slug: 'docs/google-drive/folder-structure' },
      { title: 'Naming Conventions', slug: 'docs/google-drive/naming-conventions' },
    ],
  },
]

// Work in progress sections
const wipNav: NavSection[] = [
  {
    title: 'Contracts Pipeline',
    icon: 'FileText',
    items: [
      { title: 'SOW Finalization', slug: 'docs/contracts-pipeline/01-sow-finalization' },
      { title: 'Agreement Finalization', slug: 'docs/contracts-pipeline/02-agreement-finalization' },
      { title: 'Fully Executed', slug: 'docs/contracts-pipeline/03-fully-executed' },
      { title: 'Modification', slug: 'docs/contracts-pipeline/04-modification' },
      { title: 'Executing', slug: 'docs/contracts-pipeline/05-executing' },
    ],
  },
  {
    title: 'Invoices Pipeline',
    icon: 'Receipt',
    items: [
      { title: 'Invoice Anticipated', slug: 'docs/invoices-pipeline/01-invoice-anticipated' },
      { title: 'Vendor Invoice Received', slug: 'docs/invoices-pipeline/02-vendor-invoice-received' },
      { title: 'ONI Invoice Review', slug: 'docs/invoices-pipeline/03-oni-invoice-review' },
      { title: '↳ Processing an Invoice', slug: 'docs/marketplace-workflows/03-processing-an-invoice' },
      { title: 'Submitted to ACC-RI', slug: 'docs/invoices-pipeline/04-submitted-to-acc-ri' },
      { title: 'Closed', slug: 'docs/invoices-pipeline/05-closed' },
    ],
  },
  {
    title: 'Cross-Cutting Knowledge',
    icon: 'BookOpen',
    items: [
      { title: 'OTA Prototype Framing', slug: 'docs/cross-cutting/ota-prototype-framing' },
      { title: 'ACC-RI Coordination', slug: 'docs/cross-cutting/acc-ri-coordination' },
      { title: 'Vendor Management', slug: 'docs/cross-cutting/vendor-management' },
      { title: 'Escalation Paths', slug: 'docs/cross-cutting/escalation-paths' },
      { title: 'Lessons Learned', slug: 'docs/cross-cutting/lessons-learned' },
    ],
  },
  {
    title: 'Checklists',
    icon: 'CheckSquare',
    items: [
      { title: 'Post-Selection Vendor Package', slug: 'templates/checklists/post-selection-vendor-package' },
      { title: 'Invoice Intake', slug: 'templates/checklists/invoice-intake' },
      { title: 'Project Closeout', slug: 'templates/checklists/project-closeout' },
      { title: 'Challenge Pre-Flight', slug: 'templates/checklists/challenge-pre-flight' },
    ],
  },
  {
    title: 'Document Templates',
    icon: 'FileSpreadsheet',
    items: [
      { title: 'CLIN Invoice Worksheet', slug: 'templates/documents/clin-invoice-worksheet' },
      { title: 'Coordination Timeline', slug: 'templates/documents/coordination-timeline' },
    ],
  },
]

function SidebarNavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const href = `/${item.slug}`
  const active = pathname === href
  const childActive = item.children?.some((c) => pathname === `/${c.slug}`) ?? false
  const [childrenOpen, setChildrenOpen] = useState(active || childActive)

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={href}
        className={cn(
          'block px-2 py-1.5 text-[13px] rounded-md transition-colors',
          active
            ? 'bg-primary text-primary-foreground font-medium'
            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
        )}
      >
        {item.title}
      </Link>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-0.5">
        <Link
          href={href}
          className={cn(
            'flex-1 block px-2 py-1.5 text-[13px] rounded-md transition-colors',
            active
              ? 'bg-primary text-primary-foreground font-medium'
              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          )}
        >
          {item.title}
        </Link>
        <button
          onClick={() => setChildrenOpen(!childrenOpen)}
          className="p-1 rounded hover:bg-accent transition-colors"
        >
          {childrenOpen ? (
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-3 w-3 text-muted-foreground" />
          )}
        </button>
      </div>
      {childrenOpen && (
        <div className="ml-3 pl-2 border-l border-border/50 mt-0.5 space-y-0.5">
          {item.children.map((child) => {
            const childHref = `/${child.slug}`
            const childIsActive = pathname === childHref
            return (
              <Link
                key={child.slug}
                href={childHref}
                className={cn(
                  'block px-2 py-1 text-[12px] rounded-md transition-colors',
                  childIsActive
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                {child.title}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

function SidebarSection({ section, pathname }: { section: NavSection; pathname: string }) {
  const allSlugs = section.items.flatMap((item) => [
    item.slug,
    ...(item.children?.map((c) => c.slug) ?? []),
  ])
  const isActive = allSlugs.some((s) => pathname === `/${s}`)
  const [open, setOpen] = useState(isActive)
  const Icon = iconMap[section.icon] || BookOpen

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-2 w-full px-3 py-2 text-sm font-medium rounded-md transition-colors',
          'hover:bg-accent hover:text-accent-foreground',
          isActive && 'text-primary'
        )}
      >
        <Icon className="h-4 w-4 shrink-0" />
        <span className="flex-1 text-left">{section.title}</span>
        {open ? (
          <ChevronDown className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        )}
      </button>
      {open && (
        <div className="ml-4 pl-3 border-l border-border mt-1 space-y-0.5">
          {section.items.map((item) => (
            <SidebarNavItem key={item.slug} item={item} pathname={pathname} />
          ))}
        </div>
      )}
    </div>
  )
}

export function WikiSidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const sidebarContent = (
    <>
      <div className="px-4 py-5 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">ONI</span>
          </div>
          <div>
            <h1 className="font-semibold text-sm">ONI PM Wiki</h1>
            <p className="text-[11px] text-muted-foreground">Knowledge Base</p>
          </div>
        </Link>
      </div>
      <div className="p-3 flex flex-col flex-1 min-h-0">
        <Link
          href="/"
          className={cn(
            'flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors mb-2',
            pathname === '/'
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-accent hover:text-accent-foreground text-muted-foreground'
          )}
        >
          <Home className="h-4 w-4" />
          Home
        </Link>
        {primaryNav.map((section) => (
          <SidebarSection key={section.title} section={section} pathname={pathname} />
        ))}

        {/* Spacer pushes WIP to bottom */}
        <div className="flex-1" />

        {/* WIP Divider */}
        <div className="mt-4 mb-2 px-3">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
            <Construction className="h-3 w-3" />
            <span>Work in Progress</span>
            <div className="flex-1 border-t border-border/50" />
          </div>
        </div>
        <div className="opacity-75">
          {wipNav.map((section) => (
            <SidebarSection key={section.title} section={section} pathname={pathname} />
          ))}
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-md shadow-sm"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[280px] bg-card border-r border-border overflow-y-auto">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-1"
            >
              <X className="h-5 w-5" />
            </button>
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-[280px] shrink-0 border-r border-border bg-card overflow-y-auto sticky top-0 h-screen">
        {sidebarContent}
      </aside>
    </>
  )
}
