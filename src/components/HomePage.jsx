import React from "react";
import homeImage from "./images/tech.hero.jpg";
import softWareImage from "./images/software-image1.jpeg";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <div>
        <section className=" text-black my-10 pb-10 font-serif">
          <div className="relative bottom-20">
            <img src={softWareImage} alt="tech image" />
            <h1 className="text-xl absolute top-10 right-0 z-10 text-white p-2 font-bold font-mono">
              roadmap for beginning software developers
            </h1>
          </div>
        </section>
        <main className="mt-10">
          <div className="m-2">
            <h2 className="p-2 font-bold text-2xl">
              usefull information about where to begin in your prefered tech
              feild of interest 👍😊
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3  gap-2 md:grid-cols-6 p-4">
            <div className="hover:bg-gray-200 relative text-nowrap p-16 border-2 border-gray-300 rounded-md">
              <p className="flex justify-center">frontend developer</p>

              <span className="absolute bottom-0 left-0 p-4 text-blue-600">
                <NavLink to="Frontend">more info ...</NavLink>
              </span>
            </div>
            <div className="hover:bg-gray-200 relative p-16 border-2 text-nowrap border-gray-300 rounded-md">
              <p className="flex justify-center">backend developer</p>

              <span className="absolute bottom-0 left-0 p-4 text-blue-600">
                <NavLink to="Backend">more info ...</NavLink>
              </span>
            </div>
            <div className="hover:bg-gray-200 relative text-nowrap p-16 border-2 border-gray-300 rounded-md">
              <p className="flex justify-center"> Data analyst</p>

              <span className="absolute bottom-0 left-0 p-4 text-blue-600">
                <NavLink to="DataAnalyst">more info ...</NavLink>
              </span>
            </div>
            <div className="hover:bg-gray-200 relative p-16 border-2 border-gray-300 rounded-md">
              <p className="flex text-nowrap justify-center">cloud engineer</p>

              <span className="absolute bottom-0 left-0 p-4 text-blue-600">
                <NavLink to="CloudEngineering">more info ...</NavLink>
              </span>
            </div>
            <div className="hover:bg-gray-200 relative p-16 border-2 border-gray-300 rounded-md">
              <p className="flex text-nowrap justify-center">
                cybersecurity expert
              </p>

              <span className="absolute bottom-0 left-0 p-4 text-blue-600">
                <NavLink to="Cybersecurity">more info ...</NavLink>
              </span>
            </div>
            <div className="hover:bg-gray-200 relative  p-16 border-2 border-gray-300 rounded-md">
              <p className="flex text-nowrap justify-center">ui/ux designer</p>

              <span className="absolute bottom-0 left-0 p-4 text-blue-600">
                <NavLink to="UxDesigner">more info ...</NavLink>
              </span>
            </div>
          </div>
        </main>
        <section>
          <div className="m-2 p-2">
            <img src={homeImage} alt="tech image" />
          </div>
          <ul className="grid grid-flow-row list-disc">
            <h2 className="m-4 text-3xl border-b-2 border-b-gray-200">
              key things to note as a beginner in sofware development
            </h2>
            <li className="p-2 hover:border-2 border-gray-300 m-2">
              <strong>Focus on Fundamentals:</strong>
              Start by mastering the fundamentals of programming and computer
              science. Understanding concepts like data structures, algorithms,
              and design patterns will provide a strong foundation for learning
              new technologies.
            </li>
            <li className="p-2 hover:border-2 border-gray-300 m-2">
              <strong>Identify Your Interests:</strong>
              Explore different areas of software development to identify what
              interests you the most. Whether it's web development, mobile app
              development, data science, or cybersecurity, focusing on areas
              that align with your interests will make learning more engaging.
            </li>

            <li className="p-2 hover:border-2 border-gray-300 m-2">
              <strong>Set Clear Goals:</strong>
              Define your career goals and objectives early on. This will help
              you prioritize your learning and development efforts and stay
              focused on what's important to you. Stay Updated, but Don't Chase
              Every Trend: It's essential to stay updated with the latest trends
              and technologies in the industry. However, it's equally important
              to avoid chasing every new trend. Focus on technologies that have
              long-term relevance and align with your career goals.
            </li>

            <li className="p-2 hover:border-2 border-gray-300 m-2">
              <strong>Quality Over Quantity:</strong>
              Instead of trying to consume as many tutorials and courses as
              possible, focus on the quality of learning resources. Choose
              reputable sources and invest time in deeply understanding concepts
              rather than superficially covering a wide range of topics.
            </li>

            <li className="p-2 hover:border-2 border-gray-300 m-2">
              <strong>Build Projects:</strong>
              Practice your skills by working on real-world projects. Building
              projects not only reinforces your learning but also provides
              tangible evidence of your abilities to potential employers.
            </li>

            <li className="p-2 hover:border-2 border-gray-300 m-2">
              <strong>Seek Mentorship:</strong>
              Find experienced developers who can provide guidance and
              mentorship along your journey. Learning from someone who has been
              through similar challenges can be invaluable in navigating the
              complexities of the software development industry.
            </li>

            <li className="p-2 hover:border-2 border-gray-300 m-2">
              <strong>Embrace Continuous Learning:</strong>
              Software development is a field where learning never stops.
              Embrace a mindset of continuous learning and be prepared to adapt
              to new technologies and challenges throughout your career.
            </li>
          </ul>
        </section>
      </div>

      <footer className="mt-10 p-10 py-24 bg-slate-600 static bottom-0">
        thank you for visiting
      </footer>
    </div>
  );
};

export default HomePage;
