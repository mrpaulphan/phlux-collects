import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'

export const Route = createFileRoute('/')({ component: Home })

type LinkItem = {
  label: string
  href: string
  icon: ReactNode
  primary?: boolean
}

// Edit this list to update the site. `primary: true` gives the gold button.
const LINKS: Array<LinkItem> = [
  {
    label: 'Shop my eBay Store',
    href: 'https://www.ebay.com/str/mrvaultz',
    primary: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 7V6a6 6 0 0 1 12 0v1h3.2l.8 13.2A2 2 0 0 1 20 22.5H4a2 2 0 0 1-2-2.3L2.8 7H6zm2 0h8V6a4 4 0 0 0-8 0v1zm-2 2v2.5a1 1 0 1 0 2 0V9h8v2.5a1 1 0 1 0 2 0V9h1.3l.7 11.5H4L4.7 9H6z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@phluxcollects',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23 12s0-3.2-.4-4.7c-.2-.9-.9-1.5-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5c-.9.2-1.6.9-1.8 1.8C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.9.9 1.5 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7zM9.7 15.3V8.7l6 3.3-6 3.3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/phluxcollects',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.4 1.1.4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.5.2-1.1.4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.4-1.1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.1 3.3c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-3.3s0-2.1-.1-3.3c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2zm6.3-8.2a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@phluxcollects',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.5 3c.3 2.2 1.6 3.9 3.8 4.1v2.5c-1.3.1-2.5-.3-3.8-1v6.2c0 4.3-3.3 6.9-7 6.2-3-.6-4.9-3.5-4.4-6.6.4-2.7 2.8-4.7 5.6-4.6.3 0 .6 0 .9.1v2.7c-.3-.1-.6-.2-1-.2-1.5 0-2.7 1.3-2.5 2.8.1 1.3 1.3 2.3 2.6 2.2 1.4-.1 2.4-1.2 2.4-2.7V3h2.8z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/PHLUXCollects',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
]

function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[420px] flex-col items-center px-5 pb-16 pt-12">
      <h1 className="flex items-baseline gap-[0.14em] whitespace-nowrap text-[clamp(1.6rem,9vw,2.1rem)] font-extrabold tracking-[0.06em]">
        <span className="text-ink">PHLUX</span>
        <span className="text-gold">COLLECTS</span>
      </h1>
      <p className="mt-3 text-sm uppercase tracking-[0.05em] text-muted">
        Trading Card Games &middot; Breaks &middot; Singles
      </p>

      <nav className="mt-9 flex w-full flex-col gap-3.5">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              'group flex items-center gap-3.5 rounded-2xl border px-[18px] py-4 text-base font-semibold transition active:scale-[0.99] ' +
              (link.primary
                ? 'border-transparent bg-gradient-to-br from-gold to-gold-soft text-[#1a1400]'
                : 'border-edge bg-card text-ink hover:border-gold hover:bg-card-hover')
            }
          >
            <span
              className={
                'flex h-6 w-6 shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-current ' +
                (link.primary ? 'text-[#1a1400]' : 'text-gold')
              }
            >
              {link.icon}
            </span>
            <span className="flex-1">{link.label}</span>
            <span
              className={
                'text-lg leading-none ' +
                (link.primary ? 'text-[#1a1400]' : 'text-muted')
              }
            >
              &rsaquo;
            </span>
          </a>
        ))}
      </nav>

      <footer className="mt-10 text-xs tracking-[0.04em] text-muted">
        &copy; {new Date().getFullYear()} PHLUX Collects
      </footer>
    </main>
  )
}
