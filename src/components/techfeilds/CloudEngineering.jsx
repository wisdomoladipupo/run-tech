import React from "react";
import clouddisplay from "../images/cloud-computing.jpg";
const CloudEngineering = () => {
  return (
    <div className="bg-slate-700 pt-5 text-white">
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
        where to start as a beginner in cloud engineering ?
      </h1>

      <div>
        <img src={clouddisplay} alt="tech image" />
      </div>
      <div className=" m-2 p-2 md:grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="shadow-lg rounded-lg col-span-2">
          <strong className="m-2">1. Cloud Computing Fundamentals:</strong>
          <p className="m-2">
            {" "}
            Cloud engineers must have a solid understanding of cloud computing
            concepts, including the different service models (IaaS, PaaS, SaaS)
            and deployment models (public, private, hybrid). They should be
            familiar with cloud architecture, scalability, fault tolerance, and
            cost optimization principles. Networking and Security: A strong
            foundation in networking is essential for cloud engineers. They
            should possess knowledge of IP addressing, subnets, routing,
            firewalls, load balancers, and VPNs. Understanding network security
            protocols and best practices is crucial to ensure the protection of
            cloud environments and data.
          </p>
        </div>

        <div className="shadow-lg rounded-lg ">
          <strong className="m-2">2. Programming and Scripting:</strong>
          <p className="m-2">
            {" "}
            Proficiency in programming languages such as Python, Java, or C# is
            valuable for cloud engineers. They should be able to write and
            maintain scripts to automate tasks and manage cloud resources
            effectively. Scripting languages like PowerShell or Bash are also
            beneficial for infrastructure automation.{" "}
          </p>
        </div>

        <div className="shadow-lg rounded-lg row-span-2 col-span-3">
          <strong className="m-2">3. Infrastructure as Code (IaC):</strong>
          <p className="m-2">
            Cloud engineers need expertise in tools like Terraform, AWS
            CloudFormation, or Azure Resource Manager to define and manage
            infrastructure resources as code. This allows for version control,
            reproducibility, and scalability of infrastructure deployments.
          </p>
        </div>

        <div className="shadow-lg rounded-lg col-span-3">
          <strong className="m-2">
            4. Containerization and Orchestration:
          </strong>
          <p className="m-2">
            {" "}
            Understanding containerization technologies like Docker and
            container orchestration platforms such as Kubernetes is crucial.
            Cloud engineers should know how to create, deploy, and manage
            containers to enable efficient application development and
            deployment.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">5. Monitoring and Troubleshooting:</strong>
          <p className="m-2">
            {" "}
            Proficiency in monitoring tools like AWS CloudWatch, Azure Monitor,
            or Google Cloud Monitoring is essential. Cloud engineers should be
            able to set up alerts, monitor system performance, and troubleshoot
            issues to ensure the smooth operation of cloud environments.
          </p>
        </div>

        <div className="shadow-lg rounded-lg col-span-2">
          <strong className="m-2">6. Automation and DevOps Practices: </strong>
          <p className="m-2">
            Cloud engineers should embrace automation and be familiar with
            DevOps practices. Knowledge of CI/CD tools like Jenkins, GitLab
            CI/CD, or AWS CodePipeline is valuable for implementing continuous
            integration and continuous deployment pipelines.
          </p>
        </div>

        <div className="shadow-lg rounded-lg col-span-2">
          <strong className="m-2">7. Database Management:</strong>
          <p className="m-2">
            Understanding database technologies and management in the cloud is
            important. Cloud engineers should be familiar with database services
            provided by cloud providers, such as AWS RDS, Azure SQL Database, or
            Google Cloud SQL, and know how to manage and optimize database
            performance.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">8.Cloud Security:</strong>
          <p className="m-2">
            {" "}
            Cloud engineers must have a strong understanding of cloud security
            best practices. This includes knowledge of identity and access
            management (IAM), encryption, network security groups, security
            groups, and compliance standards. They should be able to implement
            security measures to protect cloud resources and data.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">9. Communication and Collaboration:</strong>
          <p className="m-2">
            {" "}
            Effective communication and collaboration skills are crucial for
            cloud engineers. They often work in cross-functional teams,
            collaborating with developers, operations teams, and business
            stakeholders. Strong communication skills facilitate efficient
            problem-solving and project coordination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudEngineering;
