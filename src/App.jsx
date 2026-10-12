import { useEffect, useMemo, useState } from 'react'
import { ContentContext, contentByLang } from './content'
import Footer from './components/Footer'
import Header from './components/Header'
import Approach from './sections/Approach'
import Contact from './sections/Contact'
import Demo from './sections/Demo'
import Home from './sections/Home'
import Problem from './sections/Problem'
import Progress from './sections/Progress'
import Team from './sections/Team'

export default function App() {
  const [lang, setLang] = useState('en')
  const content = contentByLang[lang]

  useEffect(() => {
    document.documentElement.lang = content.meta.lang
    document.title = content.meta.title
  }, [content])

  const value = useMemo(() => ({ content, lang, setLang }), [content, lang])

  return (
    <ContentContext.Provider value={value}>
      <Header />
      <main id="main">
        <Home />
        <Problem />
        <Approach />
        <Demo />
        <Progress />
        <Team />
        <Contact />
      </main>
      <Footer />
    </ContentContext.Provider>
  )
}
