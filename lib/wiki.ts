import fs from 'fs'
import path from 'path'

const WIKI_ROOT = path.join(process.cwd())

export interface NavItem {
  title: string
  slug: string
  path: string
}

export interface NavSection {
  title: string
  icon: string
  items: NavItem[]
}

function slugFromFilePath(filePath: string): string {
  // Remove .md extension and make relative to wiki root
  const relative = path.relative(WIKI_ROOT, filePath).replace(/\.md$/, '')
  return relative
}

function titleFromFileName(fileName: string): string {
  return fileName
    .replace(/\.md$/, '')
    .replace(/^\d+-/, '') // Remove leading number prefix like "01-"
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bOta\b/g, 'OTA')
    .replace(/\bSow\b/g, 'SOW')
    .replace(/\bAcc Ri\b/g, 'ACC-RI')
    .replace(/\bOni\b/g, 'ONI')
    .replace(/\bPm\b/g, 'PM')
    .replace(/\bCrm\b/g, 'CRM')
    .replace(/\bClin\b/g, 'CLIN')
    .replace(/\bMdx\b/g, 'MDX')
    .replace(/\bPre Flight\b/g, 'Pre-Flight')
}

export function getNavigation(): NavSection[] {
  return [
    {
      title: 'Challenge Pipeline',
      icon: 'Target',
      items: getItemsFromDir('docs/challenge-pipeline'),
    },
    {
      title: 'Contracts Pipeline',
      icon: 'FileText',
      items: getItemsFromDir('docs/contracts-pipeline'),
    },
    {
      title: 'Invoices Pipeline',
      icon: 'Receipt',
      items: getItemsFromDir('docs/invoices-pipeline'),
    },
    {
      title: 'Cross-Cutting Knowledge',
      icon: 'BookOpen',
      items: getItemsFromDir('docs/cross-cutting'),
    },
    {
      title: 'Marketplace Workflows',
      icon: 'Workflow',
      items: getItemsFromDir('docs/marketplace-workflows'),
    },
    {
      title: 'Copper CRM',
      icon: 'Database',
      items: getItemsFromDir('docs/copper-crm'),
    },
    {
      title: 'Google Drive',
      icon: 'FolderOpen',
      items: getItemsFromDir('docs/google-drive'),
    },
    {
      title: 'Checklists',
      icon: 'CheckSquare',
      items: getItemsFromDir('templates/checklists'),
    },
    {
      title: 'Document Templates',
      icon: 'FileSpreadsheet',
      items: getItemsFromDir('templates/documents'),
    },
  ]
}

function getItemsFromDir(dirRelative: string): NavItem[] {
  const dirPath = path.join(WIKI_ROOT, dirRelative)
  if (!fs.existsSync(dirPath)) return []

  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith('.md') && f !== 'README.md')
    .sort()
    .map((f) => ({
      title: titleFromFileName(f),
      slug: `${dirRelative}/${f.replace(/\.md$/, '')}`,
      path: path.join(dirPath, f),
    }))
}

export function getMarkdownContent(slug: string[]): string | null {
  const filePath = path.join(WIKI_ROOT, ...slug) + '.md'
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8')
  }
  return null
}

export function getAllSlugs(): string[][] {
  const slugs: string[][] = []
  const nav = getNavigation()
  for (const section of nav) {
    for (const item of section.items) {
      slugs.push(item.slug.split('/'))
    }
  }
  return slugs
}
