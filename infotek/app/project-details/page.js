import Layout from "@/components/layout/Layout"

export default function ProjectDetails() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Project Details">
                <section className="Project-details-section fix section-padding">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/project/details.jpg" alt="img"/>
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>ERP</h3>
                                                    <p>
                                                        Appetito is delivers daily a wide range of high quality food and
                                                        grocery products.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <h3>Project Info: </h3>
                                                    <ul>
                                                        <li>
                                                            Client:
                                                            <span>Appetito</span>
                                                        </li>
                                                        <li>
                                                            Category:
                                                            <span>Odoo ERP Backend</span>
                                                        </li>
                                                        <li>
                                                            Location:
                                                            <span>Egypt</span>
                                                        </li>
                                                        <li>
                                                            Share:
                                                            <span>
                                                                <i className="fa-brands fa-facebook-f me-3"/>
                                                                <i className="fa-brands fa-instagram me-3"/>
                                                                <i className="fa-brands fa-linkedin-in"/>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details-content pt-3">
                                            <h3>Our Challenge</h3>
                                            <p>
                                                Appetito operates in a fast-paced, high-demand environment where
                                                efficiency, scalability, and real-time visibility into operations are
                                                crucial. The challenge was to implement a robust Odoo ERP backend system
                                                that could seamlessly integrate procurement, inventory, and order
                                                management while maintaining accuracy and responsiveness. Ensuring data
                                                consistency across departments and enabling actionable insights for
                                                decision-makers were key priorities. The system also had to support
                                                daily grocery deliveries with dynamic stock levels and complex logistics
                                                workflows, making the implementation both technically challenging and
                                                business-critical.
                                            </p>
                                        </div>
                                        <div className="row g-4 pt-5">
                                            <div className="col-lg-3 col-md-6">
                                                <ul className="list">
                                                    <li>
                                                        <i className="fa-regular fa-circle-check"/>
                                                        Odoo ERP Backend Implementation
                                                    </li>
                                                    <li>
                                                        <i className="fa-regular fa-circle-check"/>
                                                        Procurement and Inventory Integration
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <ul className="list">
                                                    <li>
                                                        <i className="fa-regular fa-circle-check"/>
                                                        Order Management System
                                                    </li>
                                                    <li>
                                                        <i className="fa-regular fa-circle-check"/>
                                                        Real-time Reporting and Dashboards
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <ul className="list">
                                                    <li>
                                                        <i className="fa-regular fa-circle-check"/>
                                                        Workflow Automation
                                                    </li>
                                                    {/*<li>*/}
                                                    {/*    <i className="fa-regular fa-circle-check"/>*/}
                                                    {/*    Web site Marketing Solutions*/}
                                                    {/*</li>*/}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="details-content pt-5">
                                            <h3>The Result of Project</h3>
                                            <p>
                                                The implementation of the Odoo ERP backend provided Appetito with a
                                                unified digital backbone to manage their operations more efficiently.
                                                Procurement cycles were optimized, inventory tracking became real-time,
                                                and order fulfillment processes were streamlined—leading to a noticeable
                                                reduction in delivery errors and delays. The system enhanced
                                                coordination between departments, improved data accuracy, and empowered
                                                decision-makers with insightful dashboards. As a result, Appetito
                                                achieved better operational control, scalability to support growth, and
                                                higher customer satisfaction through faster and more reliable service.
                                            </p>
                                        </div>
                                        <div className="row g-4 pt-5">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="thumb">
                                                    <img src="/assets/img/project/details-2.jpg" alt="img"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="thumb">
                                                    <img src="/assets/img/project/details-3.jpg" alt="img"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="preview-area">
                                        <div className="preview-item">
                                            <img src="/assets/img/project/p-1.png" alt="img"/>
                                            <div className="content">
                                                <h3>Preview</h3>
                                                <p>Analytic Solutions</p>
                                            </div>
                                        </div>
                                        <div className="preview-item">
                                            <div className="content text-right">
                                                <h3>Next</h3>
                                                <p>Software Development</p>
                                            </div>
                                            <img src="/assets/img/project/p-2.png" alt="img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}