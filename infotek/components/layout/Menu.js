import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul>
                <li className="has-dropdown active menu-thumb">
                    <Link href="/">
                        Home
                        {/*<i className="fas fa-angle-down ps-1" />*/}
                    </Link>
                    {/*<ul className="submenu has-homemenu">*/}
                    {/*    <li>*/}
                    {/*        <div className="homemenu-items">*/}
                    {/*            <div className="homemenu">*/}
                    {/*                <div className="homemenu-thumb mb-15">*/}
                    {/*                    <img src="/assets/img/header/home-2.jpg" alt="img"/>*/}
                    {/*                    <div className="demo-button">*/}
                    {/*                        <Link href="/" className="theme-btn">*/}
                    {/*                            <span>Multi Page</span>*/}
                    {/*                        </Link>*/}
                    {/*                        <Link href="/" className="theme-btn">*/}
                    {/*                            <span>One Page</span>*/}
                    {/*                        </Link>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="homemenu-content text-center">*/}
                    {/*                    <h4 className="homemenu-title">*/}
                    {/*                        Home 02*/}
                    {/*                    </h4>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="homemenu">*/}
                    {/*                <div className="homemenu-thumb mb-15">*/}
                    {/*                    <img src="/assets/img/header/home-2.jpg" alt="img"/>*/}
                    {/*                    <div className="demo-button">*/}
                    {/*                        <Link href="/index-2" className="theme-btn">*/}
                    {/*                            <span>Multi Page</span>*/}
                    {/*                        </Link>*/}
                    {/*                        <Link href="/index-two-page" className="theme-btn">*/}
                    {/*                            <span>One Page</span>*/}
                    {/*                        </Link>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="homemenu-content text-center">*/}
                    {/*                    <h4 className="homemenu-title">*/}
                    {/*                        Home 02*/}
                    {/*                    </h4>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="homemenu">*/}
                    {/*                <div className="homemenu-thumb mb-15">*/}
                    {/*                    <img src="/assets/img/header/home-3.jpg" alt="img"/>*/}
                    {/*                    <div className="demo-button">*/}
                    {/*                        <Link href="/index-3" className="theme-btn">*/}
                    {/*                            <span>Multi Page</span>*/}
                    {/*                        </Link>*/}
                    {/*                        <Link href="/index-three-page" className="theme-btn">*/}
                    {/*                            <span>One Page</span>*/}
                    {/*                        </Link>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="homemenu-content text-center">*/}
                    {/*                    <h4 className="homemenu-title">*/}
                    {/*                        Home 03*/}
                    {/*                    </h4>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="homemenu">*/}
                    {/*                <div className="homemenu-thumb mb-15">*/}
                    {/*                    <img src="/assets/img/header/home-4.jpg" alt="img"/>*/}
                    {/*                    <div className="demo-button">*/}
                    {/*                        <Link href="/index-4" className="theme-btn">*/}
                    {/*                            <span>Multi Page</span>*/}
                    {/*                        </Link>*/}
                    {/*                        <Link href="/index-four-page" className="theme-btn">*/}
                    {/*                            <span>One Page</span>*/}
                    {/*                        </Link>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="homemenu-content text-center">*/}
                    {/*                    <h4 className="homemenu-title">*/}
                    {/*                        Home 04*/}
                    {/*                    </h4>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </li>

                <li>
                    <Link href="/news">
                        Services
                        <i className="fas fa-angle-down ps-1"/>
                    </Link>
                    <ul className="submenu">
                        <li><Link href="/service">Services</Link></li>
                        <li><Link href="/service-carousel">Service Carousel</Link></li>
                        <li><Link href="/service-details">Service Details</Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <Link href="/project">
                        Projects
                        <i className="fas fa-angle-down ps-1"/>
                    </Link>
                    <ul className="submenu">
                        <li><Link href="/project">Project</Link></li>
                        <li><Link href="/project-carousel">Project Carousel</Link></li>
                        <li><Link href="/project-details">Project Details</Link></li>
                    </ul>
                    <ul className="submenu">
                        <li className="has-dropdown">
                            {/*<Link href="/project">*/}
                            {/*    Projects*/}
                            {/*    <i className="fas fa-angle-down ps-1"/>*/}
                            {/*</Link>*/}
                            {/*<ul className="submenu">*/}
                            {/*    <li><Link href="/project">Project</Link></li>*/}
                            {/*    <li><Link href="/project-carousel">Project Carousel</Link></li>*/}
                            {/*    <li><Link href="/project-details">Project Details</Link></li>*/}
                            {/*</ul>*/}
                        </li>
                        <li className="has-dropdown">
                            {/*<Link href="/team">*/}
                            {/*    Team*/}
                            {/*    <i className="fas fa-angle-down ps-1" />*/}
                            {/*</Link>*/}
                            {/*<ul className="submenu">*/}
                            {/*    <li><Link href="/team">Our Team</Link></li>*/}
                            {/*    <li><Link href="/team-carousel">Team Carousel</Link></li>*/}
                            {/*    <li><Link href="/team-details">Team Details</Link></li>*/}
                            {/*</ul>*/}
                        </li>
                        {/*<li><Link href="/pricing">Pricing</Link></li>*/}
                        {/*<li><Link href="/faq">Faq's</Link></li>*/}
                        {/*<li><Link href="/404">404 Page</Link></li>*/}
                    </ul>
                </li>
                <li>
                    <Link href="/news-standard">
                        News
                    </Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </>
    )
}
