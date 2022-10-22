import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Section from '../components/Section'
import SectionImage from '../components/SectionImage'
import Services from '../components/Services'
import Format from '../layout/Format'

// icons
import { MdSlowMotionVideo } from 'react-icons/md'

export default function App() {
  return (
    <div>
      <Format>
        <Hero
          title={"WEB - VIDEO - APP - PRINT - AUDIO"}
          header={"Build your next project with a talented and modern team"}
          about={"A multimedia agency specializing in website design, video production, mobile app development, graphic design, audio & voice over talent"}
          icon={<MdSlowMotionVideo size={250} />}
        />
        <Section
          title={"We will be With You From Start, Launch and Maintenance"}
          text={"Our goal is to help you and to make the development process as straightforward and clear as possible. From consultation to design, production, development, and scalability. We'll be there for you from the beginning to the end."}
        />
        <Services />
        <SectionImage
          direction={"flex-row"}
          header={"Our number one priority is your success."}
          title={"We Value Partnerships and Long-Term Relationships."}
          text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, molestias ratione, perspiciatis laboriosam odio quos dicta soluta ab sit neque unde nemo nihil? Fugit maxime officia suscipit iure similique modi!"}
        />
        <Projects />
        <Contact />
      </Format>
    </div>
  )
}
