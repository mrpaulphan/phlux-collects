import { createFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react'
import type { ReactNode } from 'react'

export const Route = createFileRoute('/')({ component: Home })

type LinkItem = {
  label: string
  href: string
  icon: ReactNode
  primary?: boolean
  sponsored?: boolean
  social?: boolean
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
    social: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23 12s0-3.2-.4-4.7c-.2-.9-.9-1.5-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5c-.9.2-1.6.9-1.8 1.8C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.9.9 1.5 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7zM9.7 15.3V8.7l6 3.3-6 3.3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/phluxcollects',
    social: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.4 1.1.4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.5.2-1.1.4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.4-1.1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.1 3.3c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-3.3s0-2.1-.1-3.3c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2zm6.3-8.2a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@phluxcollects',
    social: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.5 3c.3 2.2 1.6 3.9 3.8 4.1v2.5c-1.3.1-2.5-.3-3.8-1v6.2c0 4.3-3.3 6.9-7 6.2-3-.6-4.9-3.5-4.4-6.6.4-2.7 2.8-4.7 5.6-4.6.3 0 .6 0 .9.1v2.7c-.3-.1-.6-.2-1-.2-1.5 0-2.7 1.3-2.5 2.8.1 1.3 1.3 2.3 2.6 2.2 1.4-.1 2.4-1.2 2.4-2.7V3h2.8z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/PHLUXCollects',
    social: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: 'Sign up for Misprint — Lowest Seller Fees',
    href: 'https://www.misprint.com/why-misprint?ref=phluxcollects',
    sponsored: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.4 11.6 12.4 2.6c-.4-.4-.9-.6-1.4-.6H4a2 2 0 0 0-2 2v7c0 .5.2 1 .6 1.4l9 9a2 2 0 0 0 2.8 0l7-7a2 2 0 0 0 0-2.8zM6.5 8A1.5 1.5 0 1 1 6.5 5a1.5 1.5 0 0 1 0 3z" />
      </svg>
    ),
  },
  {
    label: 'My Gear',
    href: '/gear',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm2 0v12h12V6H6zm2 2h3v3H8V8zm5 0h3v3h-3V8zM8 13h3v3H8v-3zm5 0h3v3h-3v-3z" />
      </svg>
    ),
  },
]

function toggleTheme() {
  const root = document.documentElement
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  root.setAttribute('data-theme', next)
  try {
    localStorage.setItem('theme', next)
  } catch {
    // ignore (private browsing etc.)
  }
}

function Home() {
  const socials = LINKS.filter((l) => l.social)
  const rows = LINKS.filter((l) => !l.social)

  return (
    <main className="relative mx-auto flex min-h-dvh w-full max-w-[420px] flex-col items-center px-5 pb-16 pt-12">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle light/dark theme"
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-edge bg-card text-ink transition hover:border-gold"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="theme-icon-sun h-5 w-5 fill-current"
        >
          <path d="M12 4a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zm0 20a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zM4 13H2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm18 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zM5.6 6.9 4.2 5.5a1 1 0 0 1 1.4-1.4l1.4 1.4A1 1 0 0 1 5.6 6.9zm12.7 12.7-1.4-1.4a1 1 0 0 1 1.4-1.4l1.4 1.4a1 1 0 0 1-1.4 1.4zM6.9 18.4l-1.4 1.4a1 1 0 0 1-1.4-1.4l1.4-1.4a1 1 0 0 1 1.4 1.4zM19.8 5.5l-1.4 1.4a1 1 0 0 1-1.4-1.4l1.4-1.4a1 1 0 0 1 1.4 1.4zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="theme-icon-moon h-5 w-5 fill-current"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
        </svg>
      </button>

      <img
        src="/logo-light.png"
        alt="PHLUX Collects"
        className="logo-light w-[240px] max-w-[75vw]"
      />
      <img
        src="/logo-dark.png"
        alt="PHLUX Collects"
        className="logo-dark w-[240px] max-w-[75vw]"
      />
      <p className="mt-3 text-sm uppercase tracking-[0.05em] text-muted">
        Trading Card Games &middot; Breaks &middot; Singles
      </p>

      <nav className="mt-9 flex w-full flex-col gap-3.5">
        {rows.map((link, i) => {
          const external = link.href.startsWith('http')
          const row = (
            <a
              key={link.label}
              href={link.href}
              target={external ? '_blank' : undefined}
              rel={
                external
                  ? link.sponsored
                    ? 'sponsored noopener noreferrer'
                    : 'noopener noreferrer'
                  : undefined
              }
              className={
                'group flex items-center gap-3.5 rounded-2xl border px-[18px] py-4 text-base font-semibold shadow-sm transition active:scale-[0.99] ' +
                (link.primary
                  ? 'border-transparent bg-gradient-to-br from-gold-bright to-gold-soft text-[#241a00] hover:brightness-[1.03]'
                  : 'border-edge bg-card text-ink hover:border-gold hover:bg-card-hover')
              }
            >
              <span
                className={
                  'flex h-6 w-6 shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-current ' +
                  (link.primary ? 'text-[#241a00]' : 'text-gold')
                }
              >
                {link.icon}
              </span>
              <span className="flex-1">{link.label}</span>
              <span
                className={
                  'text-lg leading-none ' +
                  (link.primary ? 'text-[#241a00]' : 'text-muted')
                }
              >
                &rsaquo;
              </span>
            </a>
          )
          // Social icon row sits right after the primary (first) row.
          if (i !== 1) return row
          return (
            <Fragment key={link.label}>
              <div className="flex flex-wrap justify-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-edge bg-card text-gold shadow-sm transition hover:border-gold hover:bg-card-hover [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-current"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              {row}
            </Fragment>
          )
        })}
      </nav>

      <footer className="mt-10 text-xs tracking-[0.04em] text-muted">
        &copy; {new Date().getFullYear()} PHLUX Collects
      </footer>
    </main>
  )
}
