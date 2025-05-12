import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Achievement2 from "@/components/sections/Achievement2"
import Brand2 from "@/components/sections/Brand2"
// import Cta2 from "@/components/sections/Cta2"
import Faq2 from "@/components/sections/Faq2"
import Hero2 from "@/components/sections/Hero2"
import Marque2 from "@/components/sections/Marque2"
// import Marque2 from "@/components/sections/Marque2"
import News2 from "@/components/sections/News2"
// import Pricing2 from "@/components/sections/Pricing2"
import Project2 from "@/components/sections/Project2"
import Service2 from "@/components/sections/Service2"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <Hero2 />
                <Marque2 />
                <About2 />
                <Brand2 />
                <Service2 />
                <Achievement2 />
                <Project2 />
                <Marque2 />
                <Testimonial2 />
                <Team2 />
                {/*<Pricing2 />*/}
                <Faq2 />
                <News2 />
                {/*<Cta2 />*/}
            </Layout>
        </>
    )
}