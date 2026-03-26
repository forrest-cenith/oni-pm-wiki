import { Building2, Shield, Briefcase, Factory } from 'lucide-react'

export type StakeholderType = 'oni' | 'gov' | 'acc-ri' | 'vendor'

export interface Stakeholder {
  type: StakeholderType
  label: string
  color: string       // Tailwind bg class
  textColor: string   // Tailwind text class
  borderColor: string // Tailwind border class
  dotColor: string    // Tailwind bg class for the dot
  icon: React.ComponentType<{ className?: string }>
}

export const stakeholders: Record<StakeholderType, Stakeholder> = {
  oni: {
    type: 'oni',
    label: 'ONI',
    color: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    dotColor: 'bg-blue-500',
    icon: Shield,
  },
  gov: {
    type: 'gov',
    label: 'Gov Customer',
    color: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    dotColor: 'bg-emerald-500',
    icon: Building2,
  },
  'acc-ri': {
    type: 'acc-ri',
    label: 'ACC-RI',
    color: 'bg-amber-50',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    dotColor: 'bg-amber-500',
    icon: Briefcase,
  },
  vendor: {
    type: 'vendor',
    label: 'Vendor',
    color: 'bg-purple-50',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-200',
    dotColor: 'bg-purple-500',
    icon: Factory,
  },
}

export interface StageStory {
  summary: string
  involved: StakeholderType[]
  keyDocuments?: string[]
  exitCriteria?: string[]
}

// Challenge pipeline stage stories
export const challengeStageStories: Record<string, StageStory> = {
  '01-ota-intro-call': {
    summary: 'ONI meets with the government customer to understand their operational need and determine if it fits the OTA marketplace. The goal is to translate their problem into challenge language and set the stage for drafting.',
    involved: ['oni', 'gov'],
    keyDocuments: ['Schedule call with Gov Customer', 'Discuss requirement', 'Discuss OTA timeline'],
    exitCriteria: ['Google Drive folder created|/docs/google-drive/folder-structure', 'Copper card created|/docs/copper-crm/tracking-projects', 'OTA Intro Call follow-up email sent|#email-followup'],
  },
  '02-drafting-challenge': {
    summary: 'ONI drafts the public-facing challenge from government source materials, keeping it broad and prototype-focused. Internal review sharpens the OTA framing, then the package goes to ACC-RI for approval before posting.',
    involved: ['oni', 'gov', 'acc-ri'],
    keyDocuments: ['Iterate challenge language', 'Iterate LOE language', 'Iterate Market Research Report', 'Send pre-challenge package to ACC-RI for approval'],
    exitCriteria: ['Gov Customer approved challenge draft', 'ACC-RI approved challenge draft'],
  },
  '03-challenge-live': {
    summary: 'The challenge is live on the marketplace. Industry discovers it and submits proposals. ONI manages the posting, routes clarification questions to government, and tracks incoming submissions.',
    involved: ['oni', 'gov', 'vendor'],
    keyDocuments: ['[Post challenge to marketplace](/docs/marketplace-workflows/01-posting-a-challenge)', 'Get signed NDAs from Gov Customer evaluators', 'Get Gov Customer to sign AOR Roles & Responsibilities', 'Save NDAs to Google Drive as they come in', 'Send NDAs and AOR to ACC-RI the day before challenge closes', 'Gov Customer completes Non-RTD&E Funding Justification (if using non-RDTE funds)', 'Route industry clarification questions to Gov Customer'],
    exitCriteria: ['Challenge live on marketplace', 'Signed NDAs collected and sent to ACC-RI', 'Signed AOR collected and sent to ACC-RI', 'Submission deadline reached'],
  },
  '04-evaluation': {
    summary: 'ONI pre-fills the Technical Evaluation document with vendor names and submission dates, then sends it to the Gov Customer to complete their evaluation and make a selection decision.',
    involved: ['oni', 'gov', 'vendor'],
    keyDocuments: ['Pre-fill Technical Evaluation with vendor names and submission dates', 'Send pre-filled evaluation doc to Gov Customer', '[Run AI Grader on submissions](/docs/marketplace-workflows/05-ai-grader)', '[Build Challenge Closeout Package](/docs/marketplace-workflows/02-challenge-closeout-package)'],
    exitCriteria: ['Gov Customer completed Technical Evaluation and Award Selection Recommendation', 'Gov Customer made vendor selection'],
  },
  '05-vendor-coordination': {
    summary: 'After selection, ONI coordinates between the vendor, government, and ACC-RI to align the proposal with the SOW and gather all documents needed for contract execution. This stage often involves multiple revision cycles.',
    involved: ['oni', 'gov', 'vendor', 'acc-ri'],
    keyDocuments: ['Notify vendor of selection', 'Get updated vendor proposal', 'Get vendor W-9 and Reps & Certs'],
    exitCriteria: ['Vendor provided Reps & Certs', 'Vendor provided updated proposal', 'Vendor provided Fair & Reasonable supporting documents', 'Package sent to ACC-RI for them to make their Project Agreement documents'],
  },
  '06-prototype-execution': {
    summary: 'The contract is executed and prototype work begins. ONI monitors milestones, coordinates between vendor and government, and ensures deliverables track to the agreement. Results are documented for transition decisions.',
    involved: ['oni', 'gov', 'vendor', 'acc-ri'],
    keyDocuments: ['Executed Agreement', 'Final SOW / LOEs', 'Milestone Tracker', 'Risk / Issue Log'],
    exitCriteria: ['Contract executed', 'Kickoff completed', 'Recurring cadence established'],
  },
  '07-production-execution': {
    summary: 'A successful prototype may transition to production. ONI organizes the transition package, coordinates with all parties on follow-on scope and funding, and ensures prototype evidence supports the production decision.',
    involved: ['oni', 'gov', 'vendor', 'acc-ri'],
    keyDocuments: ['Transition Brief', 'Performance Summary', 'Follow-On Scope / Modification'],
    exitCriteria: ['Prototype outcomes documented', 'Transition decision made', 'Follow-on path identified'],
  },
  '08-archive': {
    summary: 'The project is administratively closed. ONI confirms all deliverables and invoices are complete, archives all records, and captures lessons learned for future challenges.',
    involved: ['oni', 'gov', 'vendor', 'acc-ri'],
    keyDocuments: ['Closeout Checklist', 'Lessons Learned Summary', 'Archived Project Folder'],
    exitCriteria: ['All deliverables received', 'Final invoices closed', 'Records archived'],
  },
}

// Contracts pipeline stage stories
export const contractsStageStories: Record<string, StageStory> = {
  '01-sow-finalization': {
    summary: 'The vendor\'s proposal/SOW is being aligned to the government\'s desired scope. ONI compares documents, identifies mismatches, and drives revisions until all parties agree.',
    involved: ['oni', 'gov', 'vendor', 'acc-ri'],
  },
  '02-agreement-finalization': {
    summary: 'The full contracting package is being assembled and routed for signatures. ONI ensures all documents are present and consistent before ACC-RI processes the award.',
    involved: ['oni', 'gov', 'vendor', 'acc-ri'],
  },
  '03-fully-executed': {
    summary: 'All signatures are in place and the agreement is active. ONI notifies all parties, confirms the start date, and launches the execution cadence.',
    involved: ['oni', 'gov', 'vendor', 'acc-ri'],
  },
  '04-modification': {
    summary: 'A change to scope, funding, or terms is being developed. ONI captures the change request, gets government approval, coordinates vendor input, and routes to ACC-RI.',
    involved: ['oni', 'gov', 'vendor', 'acc-ri'],
  },
  '05-executing': {
    summary: 'The contract is active and work is underway. ONI monitors milestones, tracks deliverables and burn rate, and keeps customer-vendor communication disciplined.',
    involved: ['oni', 'gov', 'vendor', 'acc-ri'],
  },
}

// Invoices pipeline stage stories
export const invoicesStageStories: Record<string, StageStory> = {
  '01-invoice-anticipated': {
    summary: 'A vendor invoice is expected based on milestone completion or billing cadence. ONI pre-checks CLIN mapping and confirms the vendor knows billing requirements.',
    involved: ['oni', 'vendor'],
  },
  '02-vendor-invoice-received': {
    summary: 'The vendor submits their invoice to ONI. ONI logs receipt, checks it against the contract/CLINs, and routes it for internal review.',
    involved: ['oni', 'vendor'],
  },
  '03-oni-invoice-review': {
    summary: 'ONI validates the vendor invoice, maps charges to CLINs, and generates the ONI invoice for ACC-RI submission. Discrepancies are resolved with the vendor first.',
    involved: ['oni', 'vendor', 'acc-ri'],
  },
  '04-submitted-to-acc-ri': {
    summary: 'ONI\'s invoice package is sent to ACC-RI for processing. ONI tracks acknowledgment and responds to any questions promptly.',
    involved: ['oni', 'acc-ri'],
  },
  '05-closed': {
    summary: 'The invoice is fully processed. ONI updates the tracker, reconciles against the project financial status, and notes any recurring issues.',
    involved: ['oni', 'acc-ri'],
  },
}

// Marketplace workflows stage stories
export const workflowStageStories: Record<string, StageStory> = {
  '01-posting-a-challenge': {
    summary: 'ONI creates the challenge on the Colosseum Marketplace using the government-completed template, sets POCs and dates, and attaches supporting documents.',
    involved: ['oni', 'gov'],
  },
  '02-challenge-closeout-package': {
    summary: 'After evaluation, ONI organizes submissions and required documents into a closeout package and sends it to ACC-RI for processing.',
    involved: ['oni', 'acc-ri', 'vendor'],
  },
  '03-processing-an-invoice': {
    summary: 'ONI receives a vendor invoice, maps line items to contract CLINs, generates the ONI invoice, and submits it to ACC-RI.',
    involved: ['oni', 'vendor', 'acc-ri'],
  },
  '04-success-memorandum': {
    summary: 'ONI gathers evidence of successful prototype outcomes from the vendor and packages them into a success memorandum for stakeholders.',
    involved: ['oni', 'vendor', 'gov'],
  },
  '05-ai-grader': {
    summary: 'ONI uses the marketplace AI grader to score vendor submissions against challenge criteria, managing rate limits and resolving stuck statuses.',
    involved: ['oni'],
  },
  '06-requesting-updated-proposal': {
    summary: 'After selection, ONI requests an updated proposal from the vendor aligned to the government\'s scope, PoP, and funding.',
    involved: ['oni', 'vendor'],
  },
  '07-fair-and-reasonable-pricing': {
    summary: 'ONI requests a lightweight cost breakdown from the vendor to support the Fair & Reasonable price determination required for OTA awards.',
    involved: ['oni', 'vendor'],
  },
  '08-requesting-reps-and-certs': {
    summary: 'ONI requests Reps & Certs and W-9 from the vendor to prepare for award processing.',
    involved: ['oni', 'vendor'],
  },
}

export function getStageStory(slug: string[]): StageStory | null {
  if (slug.length < 3) return null
  const section = slug[1] // e.g. "challenge-pipeline"
  const file = slug[2]   // e.g. "01-ota-intro-call"

  if (section === 'challenge-pipeline') return challengeStageStories[file] || null
  if (section === 'contracts-pipeline') return contractsStageStories[file] || null
  if (section === 'invoices-pipeline') return invoicesStageStories[file] || null
  if (section === 'marketplace-workflows') return workflowStageStories[file] || null
  return null
}
