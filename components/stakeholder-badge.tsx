import { stakeholders, type StakeholderType } from '@/lib/stakeholders'
import { cn } from '@/lib/utils'

export function StakeholderBadge({
  type,
  size = 'sm',
}: {
  type: StakeholderType
  size?: 'sm' | 'md' | 'lg'
}) {
  const s = stakeholders[type]
  const Icon = s.icon

  const sizes = {
    sm: { badge: 'px-2 py-0.5 text-xs gap-1.5', icon: 'h-3 w-3', dot: 'h-2 w-2' },
    md: { badge: 'px-2.5 py-1 text-sm gap-2', icon: 'h-3.5 w-3.5', dot: 'h-2.5 w-2.5' },
    lg: { badge: 'px-3 py-1.5 text-sm gap-2', icon: 'h-4 w-4', dot: 'h-3 w-3' },
  }

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border',
        s.color,
        s.textColor,
        s.borderColor,
        sizes[size].badge
      )}
    >
      <Icon className={sizes[size].icon} />
      {s.label}
    </span>
  )
}

export function StakeholderDot({ type }: { type: StakeholderType }) {
  const s = stakeholders[type]
  return (
    <span
      className={cn('inline-block h-2.5 w-2.5 rounded-full', s.dotColor)}
      title={s.label}
    />
  )
}
