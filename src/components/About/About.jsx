import React from 'react'
import "./About.css"


export default function About() {
  return (
    <div className="py-16 about">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src=".\src\assets\ayush_formal.jpg"
              alt="image"
              width={300}
              style={{ borderRadius: 150 }}
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <div>
              <h2 className=" text-white font-bold md:text-2xl">
                About Me
              </h2>
              <p className="mt-6 text-gray-400">
                I'am computer Science Student at University of Delhi and I have a good knowledge of Java, Python, JavaScript, Reactjs, SQL and looking forward to Full Stack Development.
              </p>
            </div>

            <div className='mt-7'>
              <h2 className=" text-white font-bold md:text-2xl">
                Contact
              </h2>

              <div className="contactAndResume">
              <div className="mt-4 text-gray-600 contact-details">
                <p> <a href="https://er-ayush-du.github.io/Responsive-Portfolio/">Ayush Tiwari</a></p>

                <p><a
                  href="https://www.google.com/maps/search/?api=1&query=110019+Kalkaji+New+Delhi" target="_blank">
                  110019 Kalkaji, New Delhi
                </a>
                </p>

                <p><a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=er.ayushtiwari@gmail.com">
                  er.ayushtiwari@gmail.com</a></p>

                <p><a href="tel:+919260932458">+91 9260932458</a></p>
              </div>

              <div className='Resume bg-gray-600 w-50 text-center p-2 rounded-2xl text-white'><a href="./src/assets/AyushTiwari_Resume.pdf" target="_blank">Download Resume</a></div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div >
  );
}