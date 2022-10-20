import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Section from '../components/Section'
import SectionImage from '../components/SectionImage'
import Services from '../components/Services'
import Format from '../layout/Format'

export default function App() {
  return (
    <div>
      <Format>
        <Hero
          title={"WEB - VIDEO - APP - PRINT - AUDIO"}
          header={"Build your next project with a talented and modern team"}
          about={"A multimedia agency specializing in website design, video production, mobile app development, graphic design, audio & voice over talent"}
          btnText={"Schedule a Free Consultation"}
        />
        <Section
          bg={"bg-gray-100"}
          title={"We will be With You From Start, Launch and Maintenance"}
          text={"Our goal is to help you and to make the development process as straightforward and clear as possible. From consultation to design, production, development, and scalability. We'll be there for you from the beginning to the end."}
        />
        <Services />
        <SectionImage />
        <Projects />
      </Format>
    </div>
  )
}
