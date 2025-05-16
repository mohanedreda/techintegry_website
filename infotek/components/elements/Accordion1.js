'use client'
import {useState} from 'react';

export default function Accordion1() {
    const [activeItem, setActiveItem] = useState(1);

    const handleClick = (index) => {
        setActiveItem(index);
    };
    return (
        <>
            <div className="accordion" id="accordion">
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="accordion-header" onClick={() => handleClick(1)}>
                        <button className={activeItem == 1 ? "accordion-button" : "accordion-button collapsed"}
                                type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true"
                                aria-controls="faq1">
                            What industries do you serve with your ERP and digital solutions?
                        </button>
                    </h5>
                    <div id="faq1"
                         className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                         data-bs-parent="#accordion">
                        <div className="accordion-body">
                            At TechIntegry, we serve a wide range of sectors including real estate, construction,
                            manufacturing, logistics, retail, healthcare, non-profit organizations, and government
                            entities. Our solutions are customized to meet each industry's specific challenges and
                            workflows.
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                    <h5 className="accordion-header" onClick={() => handleClick(2)}>
                        <button className={activeItem == 2 ? "accordion-button" : "accordion-button collapsed"}
                                type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false"
                                aria-controls="faq2">
                            Do you provide cloud infrastructure and managed hosting for your systems?
                        </button>
                    </h5>
                    <div id="faq2"
                         className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                         data-bs-parent="#accordion">
                        <div className="accordion-body">
                            TYes. We offer fully managed cloud hosting solutions for ERP, CRM, and custom platforms. Our
                            infrastructure is secure, scalable, and optimized for high performance with ongoing
                            maintenance and backups included.
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                    <h5 className="accordion-header" onClick={() => handleClick(3)}>
                        <button className={activeItem == 3 ? "accordion-button" : "accordion-button collapsed"}
                                type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false"
                                aria-controls="faq3">
                            Can you integrate AI and automation into our existing business systems?
                        </button>
                    </h5>
                    <div id="faq3"
                         className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                         data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Absolutely. One of our core capabilities at TechIntegry is embedding AI into business
                            workflows — including smart recommendations, predictive analytics, process automation, and
                            AI agents — all tailored to enhance decision-making and operational efficiency.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
