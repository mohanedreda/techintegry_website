import Link from 'next/link'
import CounterUp from '../elements/CounterUp'

export default function About2() {
    return (
        <>
            <section className="about-section section-padding fix bg-cover" id="about"
                     style={{backgroundImage: 'url("assets/img/service/service-bg-2.jpg")'}}>
                <div className="container">
                    <div className="about-wrapper style-2">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image-items">
                                    <div className="circle-shape">
                                        <img src="/assets/img/about/circle.png" alt="shape-img"/>
                                    </div>
                                    <div className="counter-shape float-bob-y">
                                        <div className="icon">
                                            <img src="/assets/img/about/icon-1.svg" alt="icon-img"/>
                                        </div>
                                        <div className="content">
                                            <h3><CounterUp count={25}/>Years</h3>
                                            <p>Of Experience</p>
                                        </div>
                                    </div>
                                    <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s"
                                         style={{backgroundImage: 'url("assets/img/about/03.png")'}}>
                                        <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                            <img src="/assets/img/about/04.jpg" alt="about-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">ABOUT INTEGRATION TECHNOLOGY</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            We Help You Build Smarter Organizations — Not Just Smarter Tools
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        We're not just here to sell technology — we're here to understand your
                                        world.<br/>
                                        We identify real challenges, bridge gaps, and deliver solutions that work for
                                        you.<br/>
                                        Solutions that simplify complexity, increase visibility, and drive meaningful
                                        results.<br/>
                                        Because real transformation isn't about tools — it's about building
                                        organizations
                                        that think faster, grow stronger, and adapt smarter.
                                    </p>

                                    <div className="about-icon-items">
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-4.svg" alt="Problem Solving Icon"/>
                                            </div>
                                            <div className="content">
                                                <h4>Problem Solving</h4>
                                                <p>
                                                    We begin with your challenges — not off-the-shelf templates.<br/>
                                                    We craft systems that solve problems — not just automate tasks.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-5.svg" alt="Mission and Vision Icon"/>
                                            </div>
                                            <div className="content">
                                                <h4>Mission &amp; Vision</h4>
                                                <p>
                                                    Our mission is to make transformation simple and
                                                    human-centered.<br/>
                                                    Our vision is to help you lead with clarity, confidence, and
                                                    sustainable growth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="about-author">
                                        <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                                            <Link href="/contact" className="theme-btn">
                                                Contact US
                                                <i className="fa-solid fa-arrow-right-long"/>
                                            </Link>
                                        </div>
                                        <div className="author-image wow fadeInUp" data-wow-delay=".7s">
                                            <img src="/assets/img/about/author.png" alt="author-img"/>
                                            <Link href="/about" className="theme-btn">
                                                About US
                                                <i className="fa-solid fa-arrow-right-long"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
