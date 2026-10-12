import { useContent } from '../content'
import ExternalLink from './ExternalLink'
import ImageSlot from './ImageSlot'
import LanguageSwitch from './LanguageSwitch'
import Text from './Text'

const icons = {
  facebook: <path d="M14 8h2V5h-2.5C11 5 10 6.6 10 8.8V10H8v3h2v6h3v-6h2.3l.5-3H13V9c0-.6.4-1 1-1z" />,
  instagram: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.6" cy="7.4" r="1" />
    </>
  ),
}

export default function Footer() {
  const { footer, links } = useContent().content

  return (
    <footer className="bg-crimson-900 text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <ImageSlot image={footer.wordmark} className="h-9 w-52" imgClassName="object-contain object-left" />
            <p className="mt-4 text-white/90"><Text>{footer.shortLine}</Text></p>
          </div>
          <ul className="space-y-3">
            {footer.social.map((s) => (
              <li key={s.label}>
                <ExternalLink to={s.link} className="inline-flex items-center gap-2 font-medium hover:underline">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">{icons[s.icon]}</svg>
                  <Text>{s.label}</Text>
                </ExternalLink>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <a href={`mailto:${links.email}`} className="break-all font-medium underline underline-offset-4">
              {links.email}
            </a>
            <LanguageSwitch dark />
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-white/20 pt-8">
          <p className="text-white"><Text>{footer.legal}</Text></p>
          <p className="font-semibold text-white"><Text>{footer.disclaimer}</Text></p>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-[15px] text-white/85 sm:flex-row sm:justify-between">
          <p className="font-semibold tracking-[0.12em]"><Text>{footer.event}</Text></p>
          <p><Text>{footer.copyright}</Text></p>
        </div>
      </div>
    </footer>
  )
}
