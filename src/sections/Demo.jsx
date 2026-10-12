import { useContent } from '../content'
import ExternalLink from '../components/ExternalLink'
import ImageSlot from '../components/ImageSlot'
import Section from '../components/Section'
import Text from '../components/Text'
import { primaryButton } from '../components/buttons'

export default function Demo() {
  const { demo } = useContent().content

  return (
    <Section id="demo" tone="wash" eyebrow={demo.eyebrow} title={demo.title} intro={demo.intro}>
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {demo.screens.map((screen) => (
          <li key={screen.title} className="overflow-hidden rounded-lg border border-line bg-paper">
            <ImageSlot image={screen.image} className="aspect-[16/10] w-full border-0 border-b-2" />
            <p className="p-5 text-[16px]">
              <strong className="font-semibold"><Text>{screen.title}</Text></strong> — <Text>{screen.text}</Text>
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-12 rounded-lg border border-line bg-paper p-6 sm:p-8">
        <p className="font-medium">
          <Text>{demo.hint}</Text>
        </p>
        <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-center">
          <ExternalLink to="demo" className={`${primaryButton} shrink-0`}>
            <Text>{demo.button}</Text>
          </ExternalLink>
          <p role="note" className="flex-1 rounded-md border border-amber-400 bg-amber-50 px-4 py-3 text-[16px] text-amber-950">
            <Text>{demo.warning}</Text>
          </p>
        </div>
        {demo.showDeviceNote && (
          <p className="mt-4 text-muted">
            <Text>{demo.deviceNote}</Text>
          </p>
        )}
      </div>
    </Section>
  )
}
