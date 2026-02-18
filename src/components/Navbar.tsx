import React from 'react';

interface INavbarProps {
    logo?: string;
    title?: string;
}

const Navbar = ({ logo}: INavbarProps) => {
    const [mobileMenu, setMobileMenu] = React.useState(false);

    const triggerNavItem = (id: string) => {
      setMobileMenu(false);
      const element = document.querySelector(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
      <>
        {/* Desktop View for App bar */}
        <div className="container flex items-center justify-between">
          <div>
            <a href="/">
              <img src={logo || "./assets/img/logo.svg"} className="w-24 lg:w-48" alt="logo image" />
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">

              <li className="group pl-6">

                <span onClick={() => triggerNavItem('#about')}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

                <span onClick={() => triggerNavItem('#services')}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

                <span onClick={() => triggerNavItem('#portfolio')}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

                <span onClick={() => triggerNavItem('#experience')}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

                <span onClick={() => triggerNavItem('#contact')}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

            </ul>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => setMobileMenu(true)} aria-label="Open menu">
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
        {/* End of Desktop View for App bar */}

        {/* Mobile View for App bar */}
        <div
          className={`fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70 transition-opacity lg:hidden ${mobileMenu ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
          <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
            <button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileMenu(false)}>
              <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
            </button>

            <ul className="mt-8 flex flex-col">

              <li className="py-2">

                <span onClick={() => triggerNavItem('#about')}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>

              </li>

              <li className="py-2">

                <span onClick={() => triggerNavItem('#services')}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>

              </li>

              <li className="py-2">

                <span onClick={() => triggerNavItem('#portfolio')}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>

              </li>

              <li className="py-2">

                <span onClick={() => triggerNavItem('#experience')}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>

              </li>


              <li className="py-2">

                <span onClick={() => triggerNavItem('#contact')}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>

              </li>

            </ul>
          </div>
        </div>
        {/* End of Mobile View for App bar */}
      </>
    );
}

export default Navbar;