import Link from 'next/link'
import { StakeholderBadge } from './stakeholder-badge'
import { stakeholders, type StageStory } from '@/lib/stakeholders'
import { ListChecks, ClipboardCheck, Check } from 'lucide-react'

function ActionItem({ text }: { text: string }) {
  // Support markdown link format: [label](href)
  const linkMatch = text.match(/^\[(.+?)\]\((.+?)\)$/)
  if (linkMatch) {
    return (
      <li className="flex items-center gap-2 text-sm">
        <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
        <Link href={linkMatch[2]} className="text-primary underline underline-offset-2 hover:opacity-80">
          {linkMatch[1]}
        </Link>
      </li>
    )
  }
  return (
    <li className="flex items-center gap-2 text-sm">
      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
      {text}
    </li>
  )
}

function ExitCriteriaItem({ criteria }: { criteria: string }) {
  // Support "label|link" format for linked exit criteria
  const pipeIndex = criteria.indexOf('|')
  if (pipeIndex === -1) {
    return (
      <li className="flex items-center gap-2 text-sm">
        <Check className="h-4 w-4 text-muted-foreground shrink-0" />
        {criteria}
      </li>
    )
  }

  const label = criteria.slice(0, pipeIndex)
  const href = criteria.slice(pipeIndex + 1)
  const isAnchor = href.startsWith('#')

  return (
    <li className="flex items-center gap-2 text-sm">
      <Check className="h-4 w-4 text-muted-foreground shrink-0" />
      {isAnchor ? (
        <a href={href} className="text-primary underline underline-offset-2 hover:opacity-80">
          {label}
        </a>
      ) : (
        <Link href={href} target="_blank" className="text-primary underline underline-offset-2 hover:opacity-80">
          {label}
        </Link>
      )}
    </li>
  )
}

export function StageIntro({ story }: { story: StageStory }) {
  const hasCards = story.keyDocuments || story.exitCriteria

  return (
    <div className="mb-8 space-y-4">
      {/* At a Glance */}
      <div className="p-4 bg-muted/50 border border-border rounded-lg">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            At a Glance
          </span>
        </div>
        <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{story.summary}</p>
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-muted-foreground mr-1">Involved:</span>
          {story.involved.map((type) => (
            <StakeholderBadge key={type} type={type} size="sm" />
          ))}
        </div>
      </div>

      {/* Action Items & Exit Criteria Cards */}
      {hasCards && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {story.keyDocuments && (
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <ListChecks className="h-4 w-4 text-muted-foreground" />
                Action Items
              </h4>
              <ul className="space-y-2">
                {story.keyDocuments.map((doc, i) => (
                  <ActionItem key={i} text={doc} />
                ))}
              </ul>
            </div>
          )}
          {story.exitCriteria && (
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
                Exit Criteria
              </h4>
              <ul className="space-y-2">
                {story.exitCriteria.map((criteria, i) => (
                  <ExitCriteriaItem key={i} criteria={criteria} />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function StakeholderLegend() {
  const allStakeholders = ['oni', 'gov', 'acc-ri', 'vendor'] as const
  return (
    <div className="border border-border rounded-lg p-5 bg-card">
      <h3 className="font-semibold mb-2">Stakeholder Color Guide</h3>
      <p className="text-sm text-muted-foreground mb-4">
        ONI&apos;s role is to <span className="font-medium text-foreground">facilitate interactions</span> between
        these parties — translating government needs into OTA language, coordinating vendor
        documentation, and routing packages through ACC-RI for contract execution.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {allStakeholders.map((type) => {
          const s = stakeholders[type]
          const Icon = s.icon
          const descriptions: Record<string, string> = {
            oni: 'Innovation facilitator — translates, coordinates, and manages the process end to end',
            gov: 'Mission owner — defines the need, evaluates solutions, makes selection and transition decisions',
            'acc-ri': 'Contracting authority — processes awards, reviews packages, manages contract administration',
            vendor: 'Solution provider — submits proposals, delivers prototypes, provides invoices and documentation',
          }
          return (
            <div
              key={type}
              className={`flex items-start gap-3 p-3 rounded-md border ${s.color} ${s.borderColor}`}
            >
              <div className={`p-1.5 rounded-md ${s.color}`}>
                <Icon className={`h-4 w-4 ${s.textColor}`} />
              </div>
              <div>
                <span className={`text-sm font-semibold ${s.textColor}`}>{s.label}</span>
                <p className="text-xs text-muted-foreground mt-0.5">{descriptions[type]}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
