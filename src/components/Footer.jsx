import React from 'react'
import 'boxicons'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import ScrollTrigger from 'gsap-trial/ScrollTrigger'

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef()

  useGSAP(() => {
    gsap.to('.footer-title', {scrollTrigger :'.footer-title', x:500, duration:1 })
  }, {scope:container})

  return (
    <>
      <div className="footer w-full bg-[#101010] text-white py-[5rem] justify-center items-center overflow-hidden" ref={container}>
        <div className="footer-container w-11/12 mx-auto flex flex-col md:flex-row  md:justify-between md:items-center ">
          <div className="text-container">
            <h1 className='footer-title text-[3rem] font-bold text-center md:text-left'>Links</h1>
            <p className='text-sm md:w-8/12 font-light text-center md:text-left mb-[2rem] md:mb-[0]'>Links is a simple website for saving and organizing your favorite bookmarks.</p>
          </div>
          <div className="links-container flex justify-center md:justify-end">
          <ul className="social-links text-white flex mb-8 gap-[12px] md:gap-[24px]">
            <li>
              <a
                href="https://www.facebook.com/chrisjanbeboso"
                className=" bg-off-white border border-white p-[8px] rounded-full flex justify-center items-center hover:bg-white hover:border-off-white hover:text-black transition-all  "
                target="blank"
              >
                <box-icon
                  name="facebook-circle"
                  type="logo"
                  color="currentColor"
                  size="sm"
                ></box-icon>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/jaaannyyy_/"
                className=" bg-off-white p-[8px] rounded-full flex justify-center items-center hover:bg-white hover:border-off-white hover:text-black transition-all border border-white "
                target="blank"
              >
                <box-icon
                  name="instagram-alt"
                  type="logo"
                  color="currentColor"
                  size="sm"
                ></box-icon>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/chris-jan-beboso-3325b115a/"
                className=" bg-off-white p-[8px] rounded-full flex justify-center items-center hover:bg-white hover:border-off-white hover:text-black transition-all border border-white "
                target="blank"
              >
                <box-icon
                  name="linkedin-square"
                  type="logo"
                  color="currentColor"
                  size="sm"
                ></box-icon>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Janjanny"
                className=" bg-off-white p-[8px] rounded-full flex justify-center items-center hover:bg-white hover:border-off-white hover:text-black transition-all border border-white "
                target="blank"
              >
                <box-icon
                  name="github"
                  type="logo"
                  color="currentColor"
                  size="sm"
                ></box-icon>
              </a>
            </li>

            
          </ul>
          </div>
        </div>
      </div>
      {/* <div className="copyrights w-full bg-[#101010] text-white p-4 flex justify-center items-center font-body text-[12px] sm:text-sm font-light cursor-default">
        Copyright @2024. Designed by Chris Jan Beboso
      </div> */}
    </>
  )
}

export default Footer