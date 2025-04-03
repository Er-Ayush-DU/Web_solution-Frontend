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
                Hey there! 👋 I'm a creative and detail-oriented freelancer with a passion for designing and developing high-quality websites that are not just visually stunning but also highly functional and user-friendly.
                With years of experience in UI/UX design, frontend development, and full-stack projects, I specialize in HTML, CSS, JavaScript, Bootstrap, React, and PHP Laravel. Whether you need a responsive website, an interactive web app, or a custom-built solution, I bring a blend of creativity and technical expertise to turn ideas into reality.
              </p>
              <h2 className='text-green-400 text-xl font-bold mt-2'>What I Offer:</h2>
              <ol class="list-decimal list-inside space-y-2 text-white mt-2">
                <li>✅ <strong>Custom Web Design & Development</strong> - Sleek, modern, and mobile-friendly designs.</li>
                <li>✅ <strong>MERN Stack Projects</strong> - Scalable and efficient full-stack applications.</li>
                <li>✅ <strong>E-commerce & Business Websites</strong> - Tailored solutions to boost your online presence.</li>
                <li>✅ <strong>SEO & Performance Optimization</strong> - Ensuring fast and search-engine-friendly websites.</li>
                <li>✅ <strong>Bug Fixing & Enhancements</strong> - Improving and maintaining existing projects.</li>
              </ol>
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