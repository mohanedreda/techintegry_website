
import Link from 'next/link'

export default function Service2() {
    return (
        <>
            <section className="service-section-2 fix section-padding pb-0" id="service">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="wow fadeInUp">OUR SERVICES</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            We Deliver Smart, Scalable Solutions
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-box-items style-2">
                                <div className="icon">
                                    <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/service-details">
                                            Smart ERP Systems
                                        </Link>
                                    </h4>
                                    <p>
                                        Tailored enterprise solutions for real estate, construction, and manufacturing.
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2 mt-3">
                                        read More
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-box-items style-2 active">
                                <div className="icon">
                                    <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/service-details">
                                            AI Marketing Agents
                                        </Link>
                                    </h4>
                                    <p>
                                        Automate your campaigns with intelligent agents that think, learn, and optimize.
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2 mt-3">
                                        read More
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-box-items style-2">
                                <div className="icon">
                                    <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/service-details">
                                            Workflow Automation
                                        </Link>
                                    </h4>
                                    <p>
                                        Turn repetitive tasks into silent, seamless processes across your teams.
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2 mt-3">
                                        read More
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                            <div className="service-box-items style-2">
                                <div className="icon">
                                    <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/service-details">
                                            Custom AI Solutions
                                        </Link>
                                    </h4>
                                    <p>
                                        From demand forecasting to image analysis — we build AI to match your need.
                                    </p>
                                    <Link href="/service-details" className="theme-btn-2 mt-3">
                                        read More
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
