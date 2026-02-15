import type { ReactNode } from "react";
import { useState } from "react";
import { useLayout } from "../../context/LayoutContext";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface ILayout {
    children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
    const { title, icon, headerContent, footerContent } = useLayout();
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        
            <div id="main" className="relative">
                <div x-data="{
                    triggerNavItem(id) {
                        $scroll(id)
                    },
                    triggerMobileNavItem(id) {
                        mobileMenu = false;
                        this.triggerNavItem(id)
                    }
                }">

                    {/* Navbar */}
                    <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
                        <Navbar logo={icon} title={title} />
                    </div>

                    <div className="testClass">
                        {children}
                    </div>
                </div>
            </div>
        
    );
}

export default Layout;