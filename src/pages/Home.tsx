
interface IHomeProps {
    name?: string;
    profileImage?: string;
    backgroundImage?: string;
}
const Home = ({ name, profileImage, backgroundImage }: IHomeProps) => {
    return (
      <>
       <div className="relative bg-cover bg-center bg-no-repeat py-8"
          style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div
            className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat">
          </div>

          <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <div className="rounded-full border-8 border-primary shadow-xl">
                <img src={profileImage || "/assets/img/blog-author.jpg"} className="h-48 rounded-full sm:h-56" alt="author" />
              </div>
              <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                  Hello I'm {name || "Lenny Rose"}!
                </h1>
                <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                  <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                    <p className="font-body text-lg uppercase text-white">Let's connect</p>
                    <div className="hidden sm:block">
                      <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                    <a href="/">
                      <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                      <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                      <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                      <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                      <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-grey-50" id="about">
          <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
            <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
              <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Who am I?
              </h2>
              <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                I'm Christy Smith, a Web Designer & Photographer
              </h4>
              <p className="pt-6 font-body leading-relaxed text-grey-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                <div className="flex items-center justify-center sm:justify-start">
                  <p className="font-body text-lg font-semibold uppercase text-grey-20">
                    Connect with me
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-2xl text-primary"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <a href="/">
                    <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
              <div>
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    HTML & CSS
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{width: "85%"}}></div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">Python</h4>
                  <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{width: "70%"}}></div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    Javascript
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{width: "98%"}}></div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">Figma</h4>
                  <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div className="h-3 rounded-full bg-primary" style={{width: "91%"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of About */}
      </>
    )
}

export default Home;