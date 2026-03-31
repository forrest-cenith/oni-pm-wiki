import { notFound } from 'next/navigation'
import { getMarkdownContent, getNavigation, getAllSlugs } from '@/lib/wiki'
import { getStageStory } from '@/lib/stakeholders'
import { StageIntro } from '@/components/stage-intro'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

// Pages that live in marketplace-workflows/ but belong to other pipeline sections
const breadcrumbOverrides: Record<string, { section: string; parent: string }> = {
  'docs/marketplace-workflows/06-requesting-updated-proposal': {
    section: 'Challenge Pipeline',
    parent: 'Vendor Coordination',
  },
  'docs/marketplace-workflows/04-success-memorandum': {
    section: 'Challenge Pipeline',
    parent: 'Production Execution',
  },
  'docs/marketplace-workflows/03-processing-an-invoice': {
    section: 'Invoices Pipeline',
    parent: 'ONI Invoice Review',
  },
  'docs/marketplace-workflows/07-fair-and-reasonable-pricing': {
    section: 'Challenge Pipeline',
    parent: 'Vendor Coordination',
  },
  'docs/marketplace-workflows/08-requesting-reps-and-certs': {
    section: 'Challenge Pipeline',
    parent: 'Vendor Coordination',
  },
}

function prettifySlugPart(part: string) {
  return part
    .replace(/^\d+-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c: string) => c.toUpperCase())
    .replace(/\bOta\b/g, 'OTA')
    .replace(/\bSow\b/g, 'SOW')
    .replace(/\bAcc Ri\b/g, 'ACC-RI')
    .replace(/\bOni\b/g, 'ONI')
    .replace(/\bPm\b/g, 'PM')
    .replace(/\bCrm\b/g, 'CRM')
    .replace(/\bClin\b/g, 'CLIN')
}

function Breadcrumbs({ slug }: { slug: string[] }) {
  const fullSlug = slug.join('/')
  const override = breadcrumbOverrides[fullSlug]

  let parts: { label: string; isLast: boolean }[]

  if (override) {
    parts = [
      { label: override.section, isLast: false },
      { label: override.parent, isLast: false },
      { label: prettifySlugPart(slug[slug.length - 1]), isLast: true },
    ]
  } else {
    parts = slug
      .filter((part) => part !== 'docs' && part !== 'templates')
      .map((part, i, arr) => ({
        label: prettifySlugPart(part),
        isLast: i === arr.length - 1,
      }))
  }

  return (
    <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
      <Link href="/" className="hover:text-foreground transition-colors">
        <Home className="h-3.5 w-3.5" />
      </Link>
      {parts.map((part, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3 w-3" />
          <span className={part.isLast ? 'text-foreground font-medium' : ''}>{part.label}</span>
        </span>
      ))}
    </nav>
  )
}

function getAdjacentPages(slug: string[]) {
  const currentSlug = slug.join('/')
  const nav = getNavigation()
  const allPages: { title: string; slug: string }[] = []

  for (const section of nav) {
    for (const item of section.items) {
      allPages.push(item)
    }
  }

  const currentIndex = allPages.findIndex((p) => p.slug === currentSlug)
  return {
    prev: currentIndex > 0 ? allPages[currentIndex - 1] : null,
    next: currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null,
  }
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function WikiPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const content = getMarkdownContent(slug)

  if (!content) {
    notFound()
  }

  const { prev, next } = getAdjacentPages(slug)
  const stageStory = getStageStory(slug)

  // Split content: extract the H1 title from the markdown, render story intro after it
  const lines = content.split('\n')
  const titleLineIndex = lines.findIndex((l) => l.startsWith('# '))
  let titleContent = ''
  let bodyContent = content

  if (titleLineIndex !== -1) {
    titleContent = lines[titleLineIndex].replace(/^# /, '')
    bodyContent = [...lines.slice(0, titleLineIndex), ...lines.slice(titleLineIndex + 1)].join('\n')
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 lg:px-10">
      <Breadcrumbs slug={slug} />

      {/* Title */}
      {titleContent && (
        <h1 className="text-3xl font-bold mb-4 pb-3 border-b border-border">
          {titleContent}
        </h1>
      )}

      {/* Stage intro with stakeholder badges */}
      {stageStory && <StageIntro story={stageStory} />}

      {/* Main content */}
      <article className="prose">
        <MDXRemote
          source={bodyContent}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </article>

      {/* Prev/Next navigation */}
      <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
        {prev ? (
          <Link
            href={`/${prev.slug}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {prev.title}
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/${next.slug}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {next.title} →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
