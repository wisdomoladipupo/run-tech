import React from "react";
import bannerImage from "./images/software-image1.jpeg";
import techImage from "./images/techie.jpg";
import softWareImage from "./images/software-image.jpeg";
import softWareImage2 from "./images/learning-software3.jpeg";
import frontendImage from "./images/frontend.png";
import backendImage from "./images/backend.jpeg";
import dataImage from "./images/Dataanalyst.avif";
import cyberImage from "./images/cybersecurity.jpg";
import cloudImage from "./images/cloud-computing.jpg";
import uxImage from "./images/uxdesign.jpeg";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <div>
        <section className=" text-black my-10 pb-10 font-serif">
          <div className="relative bottom-20">
            <h1 className="text-xl absolute top-10 right-0 z-10 text-white p-2 font-bold font-mono">
              roadmap for beginning software developers
            </h1>
            <div>
              <img src={bannerImage} alt="tech image" />
            </div>
          </div>
        </section>
        <div className="m-2">
          <h2 className="p-2  text-3xl">
            usefull information about where to begin in your prefered tech feild
            of interest 👍😊
          </h2>
        </div>
        <div className=" p-4 m-10 shadow-2xl flex flex-col justify-center">
          <h2 className="font-bold text-2xl">
            confused about where to start from in your tech journey?
          </h2>
          <img
            className="w-full rounded-md"
            src={softWareImage}
            alt="tech image"
          />
          <img
            className="w-fit rounded-md"
            src={softWareImage2}
            alt="tech image"
          />
        </div>

        <main className="mt-40  grid grid-cols-1  lg:grid-cols-2">
          <h2 className="text-4xl m-2 p-2">
            get a clear roadmap from any of these unique tech feilds👩‍💻
          </h2>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 m-0  p-4">
            <div className="shadow-lg rounded-lg p-4">
              {" "}
              <div className="mx-auto pt-5 text-center max-w-[300px]  bg-green-500 rounded-md">
                <NavLink to="Frontend">
                  <div className="max-w-[50%] mx-auto pt-5">
                    <img
                      className="w-full  rounded-md"
                      src={frontendImage}
                      alt="tech image"
                    />
                  </div>
                  <div className="flex flex-col py-5 mt-2 justify-center">
                    <p>frontend developer</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="shadow-lg rounded-lg p-4">
              <div className="mx-auto text-center pt-5 max-w-[300px]  bg-blue-500 rounded-md">
                <NavLink to="backend">
                  <div className="max-w-[50%] mx-auto pt-5">
                    <img
                      className="w-full  rounded-md"
                      src={backendImage}
                      alt="tech image"
                    />
                  </div>
                  <div className="flex flex-col py-5 mt-2 justify-center">
                    <p>backend developer</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="shadow-lg rounded-lg p-4">
              <div className="mx-auto text-center pt-5 max-w-[300px]  bg-red-500 rounded-md">
                <NavLink to="DataAnalyst">
                  <div className="max-w-[50%] mx-auto pt-5">
                    <img
                      className="w-full  rounded-md"
                      src={dataImage}
                      alt="tech image"
                    />
                  </div>
                  <div className="flex flex-col py-5 mt-2 justify-center">
                    <p>data analyst</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="shadow-lg rounded-lg p-4">
              <div className="mx-auto text-center pt-5 max-w-[300px]  bg-yellow-500 rounded-md">
                <NavLink to="CloudEngineering">
                  <div className="max-w-[50%] mx-auto pt-5">
                    <img
                      className="w-full  rounded-md"
                      src={cloudImage}
                      alt="tech image"
                    />
                  </div>
                  <div className="flex flex-col py-5 mt-2 justify-center">
                    <p>cloud engineer</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="shadow-lg rounded-lg p-4">
              <div className="mx-auto text-center pt-5  max-w-[300px]  bg-green-300 rounded-md">
                <NavLink to="Cybersecurity">
                  <div className="max-w-[50%] mx-auto  pt-5">
                    <img
                      className="w-full  rounded-md"
                      src={cyberImage}
                      alt="tech image"
                    />
                  </div>
                  <div className="flex flex-col py-5 mt-2 justify-center">
                    <p>cyber security</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6  mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="shadow-lg rounded-lg p-4">
              <div className="mx-auto text-center pt-5 max-w-[350px]  bg-orange-500 rounded-md">
                <NavLink to="UxDesigner">
                  <div className="max-w-[50%] mx-auto pt-5">
                    <img
                      className="w-full  rounded-md"
                      src={uxImage}
                      alt="tech image"
                    />
                  </div>
                  <div className="flex flex-col py-5 mt-2 justify-center">
                    <p>ui/ux designer</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="mt-auto p-2">
            <img
              className="w-fit rounded-md"
              src={techImage}
              alt="tech image"
            />
            <h2 className="m-4 text-3xl border-b-2 border-b-gray-200">
              key things to note as a beginner in sofware development
            </h2>
          </div>
        </main>
        <section className="bg-slate-700 mt-5 py-16 text-white">
          <ul className="lg:grid grid-cols-3">
            <li className="p-2 shadow-lg m-2">
              <strong>Focus on Fundamentals:</strong>
              Start by mastering the fundamentals of programming and computer
              science. Understanding concepts like data structures, algorithms,
              and design patterns will provide a strong foundation for learning
              new technologies.
            </li>
            <li className="p-2 shadow-lg m-2">
              <strong>Identify Your Interests:</strong>
              Explore different areas of software development to identify what
              interests you the most. Whether it's web development, mobile app
              development, data science, or cybersecurity, focusing on areas
              that align with your interests will make learning more engaging.
            </li>

            <li className="p-2 shadow-lg m-2">
              <strong>Set Clear Goals:</strong>
              Define your career goals and objectives early on. This will help
              you prioritize your learning and development efforts and stay
              focused on what's important to you. Stay Updated, but Don't Chase
              Every Trend: It's essential to stay updated with the latest trends
              and technologies in the industry. However, it's equally important
              to avoid chasing every new trend. Focus on technologies that have
              long-term relevance and align with your career goals.
            </li>

            <li className="p-2 shadow-lg m-2">
              <strong>Quality Over Quantity:</strong>
              Instead of trying to consume as many tutorials and courses as
              possible, focus on the quality of learning resources. Choose
              reputable sources and invest time in deeply understanding concepts
              rather than superficially covering a wide range of topics.
            </li>

            <li className="p-2 shadow-lg m-2">
              <strong>Build Projects:</strong>
              Practice your skills by working on real-world projects. Building
              projects not only reinforces your learning but also provides
              tangible evidence of your abilities to potential employers.
            </li>

            <li className="p-2 shadow-lg m-2">
              <strong>Seek Mentorship:</strong>
              Find experienced developers who can provide guidance and
              mentorship along your journey. Learning from someone who has been
              through similar challenges can be invaluable in navigating the
              complexities of the software development industry.
            </li>

            <li className="p-2 shadow-lg m-2">
              <strong>Embrace Continuous Learning:</strong>
              Software development is a field where learning never stops.
              Embrace a mindset of continuous learning and be prepared to adapt
              to new technologies and challenges throughout your career.
            </li>
          </ul>
        </section>
      </div>

      <footer className=" p-10 py-24 pt-36 bg-slate-600 static bottom-0">
        thank you for visiting
      </footer>
    </div>
  );
};

export default HomePage;
