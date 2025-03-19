import React, { useState } from "react";
import Link from "next/link";


import logo from '../../../public/logo.webp'
import Image from "next/image";
// import logo2 from '../../media/logo2.svg'
// import bed from '../../media/bedfordstation.png'


interface NavbarProps {
    links: {
        name: string,
        destination: string
        hasScroll: boolean
    }[]
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 900)

    function handleSubmenuClick() {
        setSubMenuClicked(!subMenuClicked);
    }

    function handleScroll(destination: string) {
        if (typeof window !== "undefined") {
          const element = document.getElementById(destination);
      
          if (element) {
            const offset = -100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset + offset;
      
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
      
            setSubMenuClicked(false);
          } else {
            console.warn(`Element with ID '${destination}' not found.`);
          }
        } else {
          console.warn("Window is not available. Ski")

        }
    }
      
      

    // useEffect(()=> {
    //     const handleResize = () => {
    //         if(window.innerWidth >= 1000){
    //             setSubMenuClicked(false)
    //             console.log('large screen')
    //         }

    //         setIsMobile(window.innerWidth <= 1000)

    //     }

    //         handleResize()

    //         window.addEventListener('resize',handleResize)

    //         return () => {
    //             window.removeEventListener('resize',handleResize)
    //         }
        
    // })
    
    



    return (
        <nav className={`fixed top-0 z-[200] w-screen left-0 bg-[#4D8890] h-[50px] flex 
        justify-between items-center
        transition-colors
       duration-1000 text-white `
       }
    //    style={{
    //     fontFamily:'Times, "Times New Roman", serif'
    //    }}
       >
            <div className="relative h-full flex justify-between items-center w-screen lg:w-[90vw] max-w-[1500px] lg:justify-between lg:items-stretch ml-auto mr-auto">
           <Image
           src={logo}
           alt="le logo"
           className="w-[20vw] max-w-[55px]
           rounded-2xl"
           
           />
                <div
                    className={`
                    fixed right-[0%] sm:right-[5%] top-[20px] flex flex-col justify-center items-center lg:relative lg:top-auto lg:right-auto`}
                    onClick={handleSubmenuClick}
                >
                    <div className="lg:hidden w-[140px] lg:w-auto flex flex-col justify-center items-center">
                        <div className={`h-[3px] bg-gray-200 w-[20px] mb-1`} />
                        <div className={`h-[3px] bg-gray-200  w-[20px] mb-1`} />
                        <div className={`h-[3px] bg-gray-200  w-[20px] mb-1`} />
                    </div>
                  
                </div>
                <ul
  className={`text-left 
    fixed right-[0%] top-[50px] overflow-hidden 
        transition-[height]
        bg-[#338d96] duration-[250ms]
    transition colors duration-[1500ms]
    flex flex-col items-center
    justify-center rounded-lg w-[140px]
    lg:w-auto lg:relative 
    lg:overflow-auto lg:top-auto lg:right-auto 
    lg:flex-row  lg:bg-transparent
    ${subMenuClicked  ? 'h-[200px] p-0' : 'h-[0px] p-0 lg:h-auto'}`}
>
                        {links.map((link, index) => (
                            <React.Fragment key={index}>
                                {link.hasScroll ? (
                                    <li
                                        className={`text-md lg:text-lg mb-2 pl-2 pr-2 lg:mb-0 hover:text-blue-400 cursor-pointer
                                       `}
                                        onClick={() => handleScroll(link.destination)}
                                    >
                                        {link.name}
                                    </li>
                                ) : (
                                    <Link href={link.destination}>
                                        <li className={"text-md lg:text-lg mb-2 pl-2 pr-2 lg:mb-0 hover:text-blue-400 text-black"}>
                                            {link.name}
                                        </li>
                                    </Link>
                                )}
                            </React.Fragment>
                        ))}
                        {/* <button onClick={handleLanguageClick}
                            className={`w-[70px] hover:scale-[1.1] transition-all rounded-md p-2 ${darkMode ? 'bg-slate-400 text-blue-900' : 'bg-blue-500 text-white'}`}>
                            {isFrench ? 'Anglais' : 'French'}
                        </button> */}

                        {/* <button className={`lg:pl-2  mt-2 lg:mt-0  lg:ml-3 p-2 w-[70px] hover:scale-[1.1] transition-colors transition-[transform]  rounded-md ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
                            onClick={handleDarkModeClick}
                        >
                            {darkMode ? 'Bright' : 'Dark'}
                        </button> */}
                    </ul>
            </div>
        </nav>
    );
};

export default Navbar;