import { useContent } from '../content'
import Section from '../components/Section'
import Text from '../components/Text'

export default function Problem() {
  const { problem, ui } = useContent().content
  const bars = [...problem.bars].sort((a, b) => b.value - a.value)

  return (
    <Section id="problem" tone="wash" eyebrow={problem.eyebrow} title={problem.title} intro={problem.body}>
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="lg:pt-10">
          <p className="text-6xl font-semibold tracking-tight text-crimson-700 sm:text-7xl">
            <Text>{problem.heroNumber}</Text>
          </p>
          <p className="mt-3 max-w-sm text-lg text-ink">
            <Text>{problem.heroLabel}</Text>
          </p>
        </div>

        <figure className="rounded-lg border border-line bg-paper p-6 sm:p-8">
          <figcaption id="chart-title" className="text-lg font-semibold">
            <Text>{problem.chartTitle}</Text>
          </figcaption>

          {/* Visual chart; screen readers get the table below instead. */}
          <ul aria-hidden="true" className="mt-6 space-y-5">
            {bars.map((bar) => (
              <li key={bar.label}>
                <div className="flex items-baseline justify-between gap-4 text-[15px]">
                  <span><Text>{bar.label}</Text></span>
                  <span className="shrink-0 text-muted"><Text>{bar.count}</Text></span>
                </div>
                <div className="mt-1.5 flex items-center gap-3">
                  <div className="h-3.5 flex-1 rounded-sm bg-crimson-50">
                    <div className="h-full rounded-sm bg-crimson-700" style={{ width: `${bar.value}%` }} />
                  </div>
                  <span className="w-11 shrink-0 text-right font-semibold tabular-nums"><Text>{bar.share}</Text></span>
                </div>
              </li>
            ))}
          </ul>

          <div className="sr-only">
          <table aria-labelledby="chart-title">
            <thead>
              <tr>
                <th scope="col">{ui.chartColLabel}</th>
                <th scope="col">{ui.chartColCount}</th>
                <th scope="col">{ui.chartColShare}</th>
              </tr>
            </thead>
            <tbody>
              {bars.map((bar) => (
                <tr key={bar.label}>
                  <th scope="row">{bar.label}</th>
                  <td>{bar.count}</td>
                  <td>{bar.share}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>

          <p className="mt-7 border-t border-line pt-4 text-[15px] leading-relaxed text-muted">
            <Text>{problem.source}</Text>
          </p>
        </figure>
      </div>

      <p className="mt-14 text-2xl font-semibold tracking-tight">
        <Text>{problem.closing}</Text>
      </p>
    </Section>
  )
}
