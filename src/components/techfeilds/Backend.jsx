import React from "react";
import backendisplay from "../images/backend-image3.png";
const Backend = () => {
  return (
    <div className="bg-slate-800 pt-4 text-white">
      <div>
        <h2 className="p-2 m-2 font-bold">
          tech schools that offer tech courses for learning
        </h2>
        <div className="flex flex-wrap text-black">
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
      </div>
      <h1 className="text-3xl p-4">
        where to begin as an aspiring backend dev ?
      </h1>
      <div className="flex justify-center">
        <img className="w-fit" src={backendisplay} alt="tech image" />
      </div>
      <div className=" p-2 m-2 md:grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="shadow-lg rounded-lg col-span-3">
          <strong className="m-2">1. Internet Basics</strong>
          <p className="m-2">
            {" "}
            Understanding the basics of the internet is crucial for backend
            developers. This includes knowledge of how data is transmitted over
            the internet, the difference between the internet and the World Wide
            Web, how DNS (Domain Name Systems) work, and the roles of protocols
            such as HTTP and HTTPS. A solid grasp of these fundamentals allows
            backend developers to build more efficient and secure applications.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">2. Programming Languages JavaScript:</strong>
          <p className="m-2">
            JavaScript, once confined to the browser, has become one of the most
            popular languages for backend development, thanks to environments
            like Node.js. Its asynchronous nature and event-driven model make it
            suitable for developing scalable and high-performance applications.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">3. Python:</strong>
          <p className="m-2">
            {" "}
            Python is renowned for its readability and efficiency, making it an
            excellent choice for backend development. Its vast ecosystem of
            libraries and frameworks, such as Django and Flask, allows for rapid
            development of applications across various domains. And there are a
            languages commonly used for backend development such as PHP and
            Java.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">4. Git and GitHub </strong>
          <p className="m-2">
            Git is a version control system that allows developers to track and
            manage changes to their codebase. GitHub, a web-based platform,
            leverages Git, enabling developers to collaborate on projects,
            review code, and manage changes. Understanding Git and GitHub is
            essential for backend developers to maintain code integrity and
            collaborate effectively with others.
          </p>
        </div>

        <div className="shadow-lg rounded-lg col-span-2">
          <strong className="m-2">5. Relational Databases</strong>
          <p className="m-2">
            {" "}
            Relational databases store data in tables, which can be linked to
            each other through relationships. Knowledge of relational database
            management systems (RDBMS) like MySQL, PostgreSQL, or Oracle is
            vital for backend developers to design, query, and manage data
            efficiently, ensuring data integrity and performance.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">
            6. APIs Application Programming Interfaces
          </strong>
          <p className="m-2">
            (APIs) allow different software systems to communicate with each
            other. Backend developers must understand how to create, manage, and
            document APIs, as they enable the frontend to interact with the
            backend, fetch data, and perform operations. Knowledge of RESTful
            services and GraphQL is particularly valuable.{" "}
          </p>
        </div>
        <div className="shadow-lg rounded-lg">
          <strong className="m-2">7. Caching</strong>
          <p className="m-2">
            {" "}
            Caching is a technique to store copies of data in a temporary
            storage area, which helps in reducing the load on the backend
            system, decreasing latency, and improving the performance of web
            applications. Backend developers need to understand where and how to
            implement caching strategies effectively.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">8. API Security Best Practices API</strong>
          <p className="m-2">
            {" "}
            security is paramount to protect sensitive data and prevent
            unauthorized access. Backend developers should be familiar with best
            practices such as implementing authentication, authorization, data
            encryption, rate limiting, and regular security audits to safeguard
            the APIs.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">9. Testing</strong>
          <p className="m-2">
            {" "}
            Testing is critical to ensure the reliability and functionality of
            backend code. Developers should be proficient in various testing
            methodologies, including unit testing, integration testing, and
            end-to-end testing, to detect and fix bugs, improve code quality,
            and enhance the stability of the application.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">10. Software Design and Architecture</strong>
          <p className="m-2">
            {" "}
            Understanding software design and architecture is crucial for
            creating scalable, maintainable, and efficient backend systems. This
            includes knowledge of design patterns, architectural styles, and
            principles that guide the structuring of software systems for better
            performance and scalability.
          </p>
        </div>

        <div className="shadow-lg rounded-lg row-span-2">
          <strong className="m-2">11. Message Brokers</strong>
          <p className="m-2">
            {" "}
            Message brokers like RabbitMQ and Kafka facilitate communication
            between different parts of an application through a reliable,
            asynchronous messaging system. They are essential for building
            distributed systems, enabling decoupling of application components,
            enhancing scalability, and improving fault tolerance.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">
            12. Containerization - Docker / Kubernetes
          </strong>
          <p className="m-2">
            {" "}
            Containerization technologies like Docker and Kubernetes are
            essential for creating, deploying, and managing applications in an
            isolated, consistent, and scalable environment. Docker packages
            applications into containers, while Kubernetes orchestrates these
            containers, managing their lifecycle across multiple environments.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">13. Web Servers </strong>
          <p className="m-2">
            {" "}
            Nginx Nginx is a popular web server known for its high performance,
            stability, and efficient resource usage. Backend developers should
            understand how to configure Nginx to serve static files, proxy
            requests, and handle load balancing, which is crucial for building
            scalable and reliable web applications.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">14.GraphQL</strong>
          <p className="m-2">
            {" "}
            GraphQL is a query language for APIs that allows clients to request
            exactly the data they need, making it an efficient alternative to
            traditional REST APIs. Backend developers should understand how to
            implement GraphQL servers to provide flexible and efficient data
            access.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">15. MongoDB </strong>
          <p className="m-2">
            {" "}
            MongoDB is a NoSQL database that stores data in flexible, JSON-like
            documents, allowing for fluid data models and rapid development.
            It's particularly useful for applications that require scalability,
            fast querying, and the ability to handle a variety of data types.
          </p>
        </div>

        <div className="shadow-lg rounded-lg col-span-2">
          <strong className="m-2">16. Redis</strong>
          <p className="m-2">
            {" "}
            Redis is an in-memory data structure store used as a database,
            cache, and message broker. Its high performance and support for
            various data structures, such as strings, hashes, and lists, make it
            invaluable for scenarios requiring fast access to data, such as
            caching.
          </p>
        </div>

        <div className="shadow-lg rounded-lg col-span-3">
          <strong className="m-2">17. Infrastructure Knowledge</strong>
          <p className="m-2">
            {" "}
            Understanding the underlying infrastructure is crucial for backend
            developers. This includes knowledge of servers, networks, cloud
            services, and how they interconnect to deliver applications.
            Familiarity with cloud providers like AWS, Azure, or Google Cloud
            and services like virtual machines, container orchestration, and
            serverless computing can significantly enhance the efficiency and
            scalability of applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Backend;
