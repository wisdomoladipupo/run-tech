import React from "react";
import frontdisplay from "../images/frontend-image3.png";
const Frontend = () => {
  return (
    <div className="bg-slate-700 pt-5">
      <h2 className="p-2 m-2 font-bold">
        tech schools that offer tech courses for learning
      </h2>
      <div className="flex flex-wrap">
        {" "}
        <a
          className="hover:bg-gray-100 hover:border-black p-4 m-2 border-2 bg-gray-200 rounded-lg"
          href="https://altschoolafrica.com/"
        >
          altschool africa
        </a>
        <a
          className="hover:bg-gray-100 hover:border-black p-4 m-2 border-2 bg-gray-200 rounded-lg"
          href="https://nvit.tech/"
        >
          nvit tech
        </a>
        <a
          className="hover:bg-gray-100 hover:border-black p-4 m-2 border-2 bg-gray-200 rounded-lg"
          href="https://utiva.io/"
        >
          ultiva
        </a>
        <a
          className="hover:bg-gray-100 hover:border-black p-4 m-2 border-2 bg-gray-200 rounded-lg"
          href="https://www.coursera.org/courseraplus/"
        >
          coursera
        </a>
        <a
          className="hover:bg-gray-100 hover:border-black p-4 m-2 border-2 bg-gray-200 rounded-lg"
          href="https://tech.alxafrica.com/"
        >
          alx tech school
        </a>
        <a
          className="hover:bg-gray-100 hover:border-black p-4 m-2 border-2 bg-gray-200 rounded-lg"
          href="https://scrimba.com/"
        >
          scrimba
        </a>
        <a
          className="hover:bg-gray-100 hover:border-black p-4 m-2 border-2 bg-gray-200 rounded-lg"
          href="https://www.codesmith.io/"
        >
          codesmith
        </a>
      </div>
      <h1 className="text-3xl p-4">
        where to begin as an aspiring frontend dev ?
      </h1>
      <div className="flex justify-center">
        <img className="w-full" src={frontdisplay} alt="tech image" />
      </div>
      <div className="m-2 p-2 md:grid md:grid-cols-3 gap-2">
        <div className="shadow-lg rounded-md">
          <p className="m-2">
            <strong>1. HTML -</strong> <br />
            HyperText Markup Language HTML stands for HyperText Markup Language.
            It is used to form the “skeleton”, or the base, of any website. It
            lays out a website’s general structure and content. The elements
            that you see on the screen - buttons, images, sliders, date pickers,
            texts, lists, etc. are all added using HTML. This markup language is
            made up of tags that label or indicate what the content should
            appear as.
          </p>
        </div>

        <div className="shadow-lg rounded-md row-span-2 col-span-2">
          <strong className="m-2">2. Visual Studio Code</strong>
          <p className="m-2">
            {" "}
            In the realm of code editors, Visual Studio Code (VSCode) stands out
            as a favorite among developers. It's more than just a simple editor;
            it's a powerful tool that makes coding efficient and enjoyable.
            VSCode offers a bunch of features, including syntax highlighting, a
            range of extensions for added functionalities, and an integrated
            terminal. Its user-friendly interface and customization options have
            made it a go-to choice for many in the industry. CSS If HTML is the
            skeleton of a website, CSS, or Cascading Style Sheets, is its skin.
            It's responsible for the visual appeal of a website, dictating
            everything from colors and fonts to layouts. CSS allows developers
            to create responsive designs that adapt to different screen sizes
            and devices. It ensures that websites are not only functional but
            also aesthetically pleasing and user-friendly.
          </p>
        </div>
        <div className="shadow-lg rounded-md col-span-2">
          <strong className="m-2">3. JavaScript </strong>
          <p className="m-2">
            {" "}
            JavaScript breathes life into static web pages. It's a dynamic
            programming language that introduces interactivity, making websites
            more engaging and user-centric. From simple animations to complex
            functionalities like form validations and asynchronous data
            fetching, JavaScript plays a pivotal role. It's the magic behind the
            dynamic behavior of web applications. Prompt Engineering To maximize
            your productivity as a developer, it's important to understand how
            to use large language models, such as ChatGPT, Bard, and others. A
            knowledge of prompt engineering will help you understand how to get
            the most helpful responses from large language models. And in case
            your wondering: yes, front end developers will still be needed in
            the future, even with technologies like ChatGPT. The workflow may be
            different, but there will be a human element required for the
            foreseeable future.
          </p>
        </div>

        <div className="shadow-lg rounded-md">
          <strong className="m-2">4. Version Control: Git and GitHub</strong>
          <p className="m-2">
            {" "}
            In the world of software development, tracking and managing changes
            is crucial. This is where version control systems, particularly Git,
            come into play. Git allows developers to track changes, collaborate
            seamlessly, and revert to previous versions if needed. GitHub, on
            the other hand, is a platform that hosts Git repositories,
            facilitating collaboration, code sharing, and even deployment.
          </p>
        </div>

        <div className="shadow-lg rounded-md">
          <strong className="m-2">5. Package Managers</strong>
          <p className="m-2">
            {" "}
            As projects grow and evolve, managing software libraries and
            dependencies can become a challenge. Package managers are tools
            designed to address this challenge. Popular package managers like
            npm or yarn help developers manage, install, and update software
            libraries seamlessly. They ensure that projects have the right
            versions of dependencies, making the development process smoother.
          </p>
        </div>

        <div className="shadow-lg rounded-md row-span-3">
          <strong className="m-2">6. Bootstrap 5 and SASS</strong>
          <p className="m-2">
            {" "}
            Designing responsive and visually appealing websites can be
            streamlined with the right tools. Bootstrap is one such framework
            that has revolutionized web design. Bootstrap offers pre-designed
            components and a grid system, making responsive design a breeze.
            SASS, a CSS preprocessor, allows for advanced styling techniques,
            variables, and nested rules, enhancing the styling process.
          </p>
        </div>

        <div className="shadow-lg rounded-md">
          <strong className="m-2">
            {" "}
            7. JavaScript Frameworks (React, Vue, Angular, etc)
          </strong>
          <p className="m-2">
            Modern web applications demand efficiency, scalability, and
            maintainability. JavaScript frameworks and libraries provide
            pre-written code to support these requirements. Frameworks like
            React, Vue, and Angular have their own philosophies and
            methodologies but aim to simplify complex tasks, promote code
            reusability, and enhance performance. They play a pivotal role in
            building single-page applications and dynamic web apps.
          </p>
        </div>

        <div className="shadow-lg rounded-md">
          <strong className="m-2">8. Tailwind CSS</strong>
          <p className="m-2">
            {" "}
            Tailwind CSS has emerged as a game-changer in the world of CSS
            frameworks. It adopts a utility-first approach, allowing for rapid
            UI development. Instead of predefined components, Tailwind provides
            utility classes that can be combined to create custom designs. This
            approach promotes flexibility and reduces the need for custom CSS,
            leading to faster development cycles.
          </p>
        </div>

        <div className="shadow-lg rounded-md">
          <strong className="m-2">9. Build Tools (Vite, etc)</strong>
          <p className="m-2">
            {" "}
            As web applications become more complex, the need for efficient
            build tools becomes evident. These tools optimize, bundle, and serve
            our code, ensuring that applications run smoothly. Vite, for
            instance, is a next-generation frontend tooling solution that offers
            faster build times. Such tools handle tasks like transpilation,
            minification, and module bundling, ensuring that the code is
            optimized for production.
          </p>
        </div>

        <div className="shadow-lg rounded-md">
          <strong className="m-2">
            10. Testing JavaScript (Jest, Cypress){" "}
          </strong>
          <p className="m-2">
            Ensuring the reliability and functionality of web applications is
            paramount. This is where JavaScript testing tools come into play.
            Tools like Jest, designed for unit testing, and Cypress, tailored
            for end-to-end testing, help developers ensure that their code
            functions as intended. Regular testing minimizes bugs and enhances
            the overall quality of web applications. TypeScript While JavaScript
            is dynamic and flexible, there are scenarios where a more structured
            approach is beneficial.
          </p>
        </div>

        <div className="shadow-lg rounded-md">
          <strong className="m-2">11. Enter TypeScript,</strong>
          <p className="m-2">
            {" "}
            a superset of JavaScript that introduces static typing. TypeScript
            offers type annotations, interfaces, and enhanced tooling, leading
            to more robust code. It helps catch errors during compile-time,
            ensuring that potential issues are addressed before runtime.
          </p>
        </div>

        <div className="shadow-lg rounded-md">
          <strong className="m-2">12. Web Security</strong>
          <p className="m-2">
            {" "}
            (OWASP) In today's digital age, web security is of utmost
            importance. Protecting user data and ensuring the integrity of web
            applications is a top priority. The Open Web Application Security
            Project (OWASP) provides guidelines and best practices to ensure web
            application security. Familiarizing oneself with common
            vulnerabilities and their mitigations is essential for any frontend
            developer.
          </p>
        </div>

        <div className="shadow-lg rounded-md col-span-2">
          <strong className="m-2">13. GraphQL Traditional RESTful APIs</strong>
          <p className="m-2">
            {" "}
            come with limitations, especially when dealing with complex data
            structures. GraphQL emerges as a powerful alternative, offering more
            flexibility in querying data. GraphQL allows clients to request only
            the data they need, reducing over-fetching. It provides a more
            efficient, powerful, and flexible alternative to the traditional
            REST API.
          </p>
        </div>

        <div className="shadow-lg rounded-md col-span-3">
          <strong className="m-2">14. Next.js</strong>
          <p className="m-2">
            Building server-rendered React applications can be streamlined with
            the right framework. Next.js is a leading choice, offering features
            that enhance performance and developer experience. Next.js provides
            automatic code splitting, server-side rendering, and a rich set of
            features that make building scalable React applications a breeze.
          </p>
        </div>

        <div className="shadow-lg rounded-md col-span-2">
          <strong className="m-2">15. Astro</strong>
          <p className="m-2">
            {" "}
            In the quest for optimal performance, new frameworks like Astro are
            pushing the boundaries. Astro introduces a unique approach to
            building faster websites. Astro allows developers to deliver less
            JavaScript by default, resulting in faster load times. It offers
            partial hydration and integrates with various modern frameworks,
            ensuring flexibility and performance. Performance Best Practices A
            well-designed website is not just about aesthetics; performance
            plays a crucial role in user experience and search engine rankings.
            Adhering to best practices like optimizing images, leveraging
            browser caching, and minimizing server response times can
            significantly boost website performance. Regular audits using tools
            like Google's Lighthouse can provide insights and recommendations.
          </p>
        </div>
        <div className="shadow-lg rounded-md">
          <strong className="m-2">16. React Native </strong>
          <p className="m-2">
            {" "}
            The world is increasingly mobile, and developers need tools to build
            cross-platform mobile applications efficiently. React Native is a
            framework that allows for the development of native mobile apps
            using React. With React Native, developers can write most of their
            application's code once and run it on both iOS and Android. It
            offers a rich set of components and native modules, ensuring that
            apps feel truly native. Conclusion Front end development is a
            dynamic and ever-evolving field. As technologies emerge and best
            practices evolve, staying updated and adaptable is key. This roadmap
            provides a foundation, but the journey of learning and exploration
            is endless. Engage with the community, experiment with new tools,
            and always strive for excellence. The world of front end development
            offers endless possibilities, and with the right tools and
            knowledge, you can craft exceptional web experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
