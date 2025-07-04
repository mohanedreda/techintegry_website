import CounterUp from "../elements/CounterUp"


export default function Achievement2() {
    return (
        <>
            <section className="achievement-section-2 fix section-bg-2">
                <div className="container">
                    <div className="achievement-wrapper style-2">
                        <div className="section-title mb-0">
                            <span className="text-white wow fadeInUp">achievement</span>
                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                We Are Increasing <br /> Business Success
                            </h2>
                        </div>
                        <div className="counter-area">
                            <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/01.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUp count={80}/>+</h2>
                                    <p>ERP Systems Launched</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/02.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUp count={12000000}/>+</h2>
                                    <p>AI Interactions Automated</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/03.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUp count={700}/>+</h2>
                                    <p>Processes Fully Automated</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/04.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    {/*<h2><CounterUp count={590}/>+</h2>*/}
                                    <p>Odoo Gold Implementation Partner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
