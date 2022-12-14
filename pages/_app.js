// import Transition from '../components/Transition'
import { motion } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return <motion.div
    key={router.route}
    initial="pageInitial"
    animate="pageAnimate"
    transition={{ duration: 1 }}
    variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      }
    }}
  >
    <Component {...pageProps} />
  </motion.div>
}

export default MyApp
