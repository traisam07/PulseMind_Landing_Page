import { useContent } from '../content'
import Section from '../components/Section'
import Text from '../components/Text'
import { secondaryButton } from '../components/buttons'

const mailto = (email, subject) => `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`

export default function Contact() {
  const { contact, links } = useContent().content

  return (
    <Section id="contact" eyebrow={contact.eyebrow} title={contact.title} intro={contact.intro}>
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {contact.cards.map((card) => (
          <li key={card.subject} className="flex flex-col rounded-lg border border-line bg-paper p-6 sm:p-7">
            <h3 className="text-xl font-semibold"><Text>{card.title}</Text></h3>
            <p className="mt-3 flex-1 text-muted"><Text>{card.body}</Text></p>
            <a href={mailto(links.email, card.subject)} className={`${secondaryButton} mt-6 self-start`}>
              <Text>{card.button}</Text>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-lg">
        <a href={mailto(links.email)} className="font-semibold text-crimson-700 underline underline-offset-4 select-all">
          {links.email}
        </a>
      </p>
    </Section>
  )
}
