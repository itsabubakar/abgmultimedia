import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Section from '../components/Section'
import SectionImage from '../components/SectionImage'
import Services from '../components/Services'
import Format from '../layout/Format'
import Service from '../components/Service'

// icons
import { MdSlowMotionVideo } from 'react-icons/md'
import { RiVoiceprintFill } from 'react-icons/ri'
import { BiVideoRecording } from 'react-icons/bi'
import { FaConnectdevelop } from 'react-icons/fa'
import { ImNewspaper } from 'react-icons/im'
import { FiHelpCircle } from 'react-icons/fi'


export default function App() {
  return (
    <div>
      <Format>
        <Hero
          title={"WEB - VIDEO - PRINT - AUDIO"}
          header={"Build your next project with a talented and modern team"}
          about={"A multimedia agency specializing in website design, video production, mobile app development, graphic design, audio & voice over talent"}
          icon={<MdSlowMotionVideo size={250} />}
          btn={true}
        />
        <Section
          title={"We will be With You From Start, Launch and Maintenance"}
          text={"Our goal is to help you and to make the development process as straightforward and clear as possible. From consultation to design, production, development, and scalability. We'll be there for you from the beginning to the end."}
        />
        <Services>
          <Service
            number={<FaConnectdevelop size={25} />}
            borderColor={"border-yellow-400"}
            title={"Web Design"}
            text={"Our website designers and developers are experts in e-commerce, SEO, social integration, and mobile optimization. Additionally, we can assist with hosting, SSL, domains, and more!"}
          />
          <Service
            number={<BiVideoRecording size={25} />}
            borderColor={"border-green-400"}
            title={"Video Production"}
            text={"Videos for corporate and product promotion, training, or video marketing campaigns. With years of experience, our production team can produce stunning videos of the highest caliber."}
          />
          <Service
            number={<ImNewspaper size={25} />}
            borderColor={"border-blue-400"}
            title={"Prints"}
            text={"ABGMultimedia graphic designers will produce collateral, such as business cards, brochures, vinyl banners, or print advertisements, that commands attention. Even our printing services are reasonably priced and of excellent quality."}
          />
          <Service
            number={<RiVoiceprintFill size={25} />}
            borderColor={"border-red-400"}
            title={"Audio Voiceover"}
            text={"ABGMultimedia distinguished audio team specializes in voiceovers for on-hold announcements, radio commercials, and more! Any delivery method or language can be matched with the ideal voice actor with our assistance."}
          />
          <Service
            number={<FiHelpCircle size={25} />}
            borderColor={"border-purple-400"}
            title={"Consultancy"}
            text={"ABGMultimedia provides expert advice on all multimedia business issues: how to improve sales, how to streamline management, improving network security or defining corporate strategy. Integrity is essential our field."}
            btn={true}
          />
        </Services>
        <SectionImage
          direction={"md:flex-row"}
          header={"Our number one priority is your success."}
          title={"We Value Partnerships and Long-Term Relationships."}
          text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, molestias ratione, perspiciatis laboriosam odio quos dicta soluta ab sit neque unde nemo nihil? Fugit maxime officia suscipit iure similique modi!"}
          img={"https://images.unsplash.com/photo-1627389955646-6596047473d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbm5lY3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
        />
        <Projects />
        <Contact />
      </Format>
    </div>
  )
}
