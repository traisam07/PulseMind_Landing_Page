import { useContent } from '../content'
import ImageSlot from '../components/ImageSlot'
import Section from '../components/Section'
import Text from '../components/Text'

export default function Team() {
  const { team } = useContent().content

  return (
    <Section id="team" tone="wash" eyebrow={team.eyebrow} title={team.title} intro={team.intro}>
      <ImageSlot image={team.groupPhoto} className="mt-12 aspect-[21/9] w-full rounded-lg" />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.members.map((member) => (
          <li key={member.name} className="flex gap-5 rounded-lg border border-line bg-paper p-5">
            <ImageSlot image={member.photo} className="aspect-square w-24 shrink-0 rounded-md !p-1 !text-[11px]" />
            <div className="min-w-0">
              <h3 className="font-semibold leading-snug"><Text>{member.name}</Text></h3>
              <p className="text-[15px] font-medium text-crimson-700"><Text>{member.role}</Text></p>
              <p className="mt-2 text-[16px] text-muted"><Text>{member.line}</Text></p>
            </div>
          </li>
        ))}
      </ul>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {team.advisers.map((adviser) => (
          <li key={adviser.name} className="rounded-md border border-line bg-paper px-5 py-4">
            <p className="font-semibold"><Text>{adviser.name}</Text></p>
            <p className="text-[15px] text-muted"><Text>{adviser.affiliation}</Text></p>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-[16px] text-muted">
        <Text>{team.clinicalInput}</Text>
      </p>

      <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {team.strip.map((item, i) => (
          <li key={i}>
            <figure>
              <ImageSlot image={item.photo} className="aspect-[4/3] w-full rounded-md !text-xs" />
              <figcaption className="mt-2 text-[15px] text-muted"><Text>{item.caption}</Text></figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  )
}
