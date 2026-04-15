'use client'

import { useState, useRef } from 'react'
import { Copy, Check } from 'lucide-react'

function isStructuralLine(line: string): boolean {
  // Lines that start a new structural element (list items, numbered items)
  return /^\s*[-*]\s/.test(line) || /^\s*\d+[.)]\s/.test(line)
}

function unwrapLines(text: string): string {
  // Process line-by-line: join continuation lines to their predecessor,
  // but keep structural lines (list items, numbered items) separate.
  const lines = text.split('\n')
  const result: string[] = []

  for (const line of lines) {
    // Blank lines mark paragraph breaks
    if (line.trim() === '') {
      result.push('')
      continue
    }

    // Structural lines (list markers) always start a new line
    if (isStructuralLine(line)) {
      result.push(line)
      continue
    }

    // If there's nothing before us, or the previous line was blank,
    // this starts a new block
    if (result.length === 0 || result[result.length - 1] === '') {
      result.push(line)
      continue
    }

    // If the previous line was a structural line and this line is indented
    // continuation of it, join them
    const prev = result[result.length - 1]
    if (isStructuralLine(prev) || !isStructuralLine(prev)) {
      // Join continuation: this is a wrapped line
      result[result.length - 1] = prev + ' ' + line.trimStart()
    }
  }

  // Collapse runs of blank lines into single blank lines
  return result
    .reduce<string[]>((acc, line) => {
      if (line === '' && acc.length > 0 && acc[acc.length - 1] === '') return acc
      acc.push(line)
      return acc
    }, [])
    .join('\n')
}

export function CopyableCodeBlock({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'pre'>) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  const handleCopy = async () => {
    const raw = preRef.current?.textContent ?? ''
    const clean = unwrapLines(raw.trim())
    await navigator.clipboard.writeText(clean)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="copyable-code-wrapper">
      <pre ref={preRef} {...props}>
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className="copy-button"
        aria-label="Copy to clipboard"
        title="Copy to clipboard (clean line breaks)"
      >
        {copied ? (
          <>
            <Check size={14} /> Copied
          </>
        ) : (
          <>
            <Copy size={14} /> Copy
          </>
        )}
      </button>
    </div>
  )
}
