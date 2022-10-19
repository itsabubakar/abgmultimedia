import Head from "next/head"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Format = ({ title, children }) => {
    const headTitle = `ABGMultemedia Services Limited ${title ? title : ''}`
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{headTitle}</title>
                <link rel="icon" href="/favicon.ico" />'
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Format