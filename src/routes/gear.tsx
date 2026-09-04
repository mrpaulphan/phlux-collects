import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/gear')({ component: Gear })

type GearItem = {
  name: string
  href: string
  image: string
}

// Add gear here: name, Amazon (or other) link, product thumbnail URL.
const GEAR: Array<GearItem> = [
  {
    name: 'Post-it Flags — Assorted Pastels',
    href: 'https://a.co/d/08koB7d2',
    image: 'https://m.media-amazon.com/images/I/61D0UvHQdOL._AC_SL1500_.jpg',
  },
  {
    name: 'Card Saver 1 — Semi-Rigid Holders (200ct)',
    href: 'https://amzn.to/4hdLt0v',
    image: 'https://m.media-amazon.com/images/I/61+9PJNvZ6L._AC_SL1500_.jpg',
  },
  {
    name: 'Team Bags — Toploader/Magnetic (500ct)',
    href: 'https://amzn.to/3UWknDk',
    image: 'https://m.media-amazon.com/images/I/612PelIl+AL._AC_SL1500_.jpg',
  },
  {
    name: 'Team Bags — Slabs & Card Savers (200ct)',
    href: 'https://amzn.to/466CBoe',
    image: 'https://m.media-amazon.com/images/I/71vRWZR+PZL._AC_SL1500_.jpg',
  },
  {
    name: 'Bubble Mailers 4x8in (50ct)',
    href: 'https://amzn.to/4cuY9ym',
    image: 'https://m.media-amazon.com/images/I/71Apw3qBEWL._AC_SL1500_.jpg',
  },
  {
    name: 'Shipping Protectors 3.5x4.5in (120ct)',
    href: 'https://amzn.to/4cvMak9',
    image: 'https://m.media-amazon.com/images/I/71tLlh+YHnL._AC_SL1500_.jpg',
  },
  {
    name: 'A6 Envelopes (120ct)',
    href: 'https://amzn.to/4zVl7sx',
    image: 'https://m.media-amazon.com/images/I/51BLTWmpkcL._AC_SL1200_.jpg',
  },
]

function Gear() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col items-center px-5 pb-16 pt-10">
      <Link
        to="/"
        className="self-start text-sm font-semibold text-muted hover:text-ink"
      >
        &lsaquo; Back
      </Link>

      <h1 className="mt-4 text-2xl font-extrabold tracking-[0.04em] text-ink">
        My Gear
      </h1>

      <p className="mt-3 text-center text-xs leading-relaxed text-muted">
        Some links below are affiliate/referral links — I may earn a small
        commission on qualifying purchases at no extra cost to you.
      </p>

      <div className="mt-6 grid w-full grid-cols-2 gap-3.5">
        {GEAR.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="flex flex-col overflow-hidden rounded-2xl border border-edge bg-card shadow-sm transition hover:border-gold hover:bg-card-hover"
          >
            <div className="flex aspect-square items-center justify-center bg-white p-3">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="px-3 py-2.5 text-sm font-semibold text-ink">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </main>
  )
}
