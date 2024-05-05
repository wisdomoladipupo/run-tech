import React from "react";
import cyberdisplay from "../images/cybersecurity2.jpg";
const Cybersecurity = () => {
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
        where to begin as an aspiring cybersecurity expert ?
      </h1>
      <div className="flex justify-center">
        <img src={cyberdisplay} alt="tech image" />
      </div>
      <div className=" m-2 p-2 grid gap-5">
        <div className="shadow-lg rounded-lg">
          <strong className="m-2">Month 1-2: Setting Up the Foundation:</strong>
          <p className="m-2">
            {" "}
            To get started on your cyber security journey, it's important to
            comprehend the terrain, show interest in the industry, examine the
            options and career routes accessible, then build a strong foundation
            of knowledge and investigate the many career possibilities. Here are
            the first actions I thought about taking: 1. Explore the Cyber
            Security Landscape: Read industry blogs and websites like Dark
            Reading, Krebs on Security, The Hacker News and SecurityWeek to
            immerse yourself in the realm of cybersecurity. Joining
            cybersecurity groups on websites like Reddit, LinkedIn, Discord and
            surfing on internet may provide offer insightful information and
            chances to interact with experts and enthusiasts.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2"> 2. Set Precise Aims:</strong>
          <p className="m-2">
            {" "}
            Define your specific area of interest within cybersecurity, whether
            it's network security, ethical hacking, or digital forensics. This
            clarity will help you focus your learning efforts and pursue
            relevant opportunities. 3. Master the Fundamentals: Know how the
            internet functions, including how user requests are handled and how
            issues are managed. Learn the fundamentals of solid computer
            networking. You can take free classes to learn about TCP/IP, network
            protocols, and data flow through networks at websites like Cisco
            Networking Academy, Cybrary, and TryHackMe. There are several
            YouTubers, like Professor Messer, Farah Hawa, The Cyber Mentor, and
            many others, who can assist you in understanding the ideas. Learn
            how operating systems function. These operating systems' free online
            guides and tutorials can provide you a firm foundation in ideas like
            file systems, permissions, and command-line interfaces. Over the
            course of your cyber security career, Linux will become your best
            friend.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">Month 3-5: Mastering the Essential</strong>
          <p className="m-2">
            {" "}
            Elements of Security. If you’ve reached this far, it surely means
            that you’ve developed a keen interest in the field of cyber
            security. These could be the most important months to accelerate
            learning. It is crucial to develop a solid foundation of knowledge
            in security concepts and technology. To create a solid
            understanding, concentrate on the following areas. Delve into the
            essential concepts of cybersecurity, including Confidentiality,
            Integrity, Availability, Authentication, Authorization and more.
            Free resources such as the "Cybersecurity Essentials" course on
            Cybrary or the "Introduction to Cybersecurity" course on
            FutureLearn, the TryHackMe platform can provide a solid foundation.
            Paid resources like TCM Security’s courses or the eLearnSecurity’s
            Penetration Testing Student Course as well as certification can be
            found immensely useful to get the kickstart to the career in cyber
            security. Dive into the fascinating realm of encryption and
            cryptography. Free resources like Cryptography tutorials on Khan
            Academy or the "Cryptography I" course offered by Stanford
            University on Coursera or even the YouTube channels can help you
            understand encryption algorithms, symmetric and asymmetric
            cryptography, and cryptographic protocols. Develop familiarity with
            crucial security technologies such as firewalls, intrusion detection
            systems (IDS), virtual private networks (VPNs), and secure web
            protocols (HTTPS). Free resources from vendors like Cisco, Palo Alto
            Networks, and Fortinet can provide documentation and tutorials. Even
            the TryHackMe provides with good quality of explanation to the
            topics mentioned. Understand common web vulnerabilities, including
            cross-site scripting (XSS), SQL injection, and CSRF attacks. Free
            resources such as the OWASP (Open Web Application Security Project)
            guides and tutorials or PortSwigger's Web Security Academy can
            deepen your knowledge. For comprehensive learning, premium course
            like "Web Application Penetration Testing" on eLearnSecurity.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">
            {" "}
            Month 6-8: Developing Technical Skills 1.
          </strong>
          <p className="m-2">
            {" "}
            Learn Programming: Start with python programming as it is commonly
            used scripting language these days. Various free resources are
            available to get the hands dirty with the python programming. 2.
            Dedicate Time and Effort to the Mastery of Ethical Hacking
            Practices: Delve into the exciting world of ethical hacking and
            penetration testing. Free resources like the Metasploit Unleashed
            project, OWASP's "WebGoat" or "Juice Shop", Vulnhub platform are
            some of the vulnerable applications and platforms which offer
            practical platforms to practice hacking techniques. Practical
            experience is invaluable in the cybersecurity field. Engage in
            Capture the Flag (CTF) challenges available on platforms like Hack
            The Box, TryHackMe, or OverTheWire's Bandit. Additionally, practice
            on deliberately vulnerable virtual machines like Metasploitable,
            OWASP BWA, or Damn Vulnerable Web Application (DVWA) to apply your
            skills in realistic scenarios. 3. Explore Defensive Security: While
            ethical hacking is essential, understanding defensive security
            measures is equally important. Free resources like "Security
            Operations" courses on Cybrary or the "Introduction to Incident
            Response" course on FutureLearn can provide insights. For
            comprehensive learning, premium courses such as "Security Operations
            and Incident Response" on Pluralsight or the "Certified Incident
            Handler (GCIH)" course offered by SANS Institute are highly
            recommended.
          </p>
        </div>

        <div className="shadow-lg rounded-lg">
          <strong className="m-2">
            {" "}
            Month 9-10: Certifications and Specialization.
          </strong>
          <p className="m-2">
            {" "}
            Once you’ve reached this far, you might be clear about the domain
            you want to work in. Next step is to purse a certification in the
            area of interest. Obtaining industryrecognized certifications not
            only validates your skills but also enhances your credibility and
            job prospects. Based on your interests and the demand in the job
            market, specialize in areas such as network security, application
            security, or digital forensics. This specialization allows you to
            tailor your learning and career path according to your goals.
            Investigate advanced courses and resources relevant to your chosen
            specialization. Platforms like Pluralsight, LinkedIn Learning,
            eLearnSecurity, CodeRed by EC-Council, TCM Security, Cybrary and
            Udemy offer a wide range of premium courses to enhance your skills
            and knowledge. Complete the specific course of your choice and opt
            for a commonly recognized certification exam. Certifications provide
            external validation of your knowledge and skills. They indicate that
            you have undergone a formal evaluation and have met the standards
            set by respected industry organizations. Month 11-12: Practical
            Experience and Networking. The final months of your journey are
            crucial for gaining practical experience, expanding your
            professional network, and showcasing your expertise.
          </p>

          <h2 className="m-2">
            also Consider the following steps: 1. Join Cybersecurity
            Communities:
          </h2>
          <p className="m-2">
            {" "}
            Engage with professionals and enthusiasts through platforms like
            Reddit, LinkedIn groups, and Discord servers. Participate in
            discussions, ask questions, and contribute to the community.
            Networking can lead to valuable connections and opportunities.
          </p>
          <h3 className="m-2"> 2. Contribute to Open-Source Projects:</h3>
          <p className="m-2">
            {" "}
            Explore security-related open-source projects on platforms like
            GitHub. Contribute code, report vulnerabilities, or assist in
            documentation. This demonstrates your skills and commitment to the
            cybersecurity community.{" "}
          </p>
          <h3 className="m-2">3. Complete Internships or Projects:</h3>
          <p className="m-2">
            {" "}
            Seek out internship opportunities or projects that allow you to
            apply your skills in real-world scenarios. LinkedIn and other job
            searching platform can help you get a good internship. One can also
            consider non-profit organizations, local businesses, or government
            initiatives for practical experience and networking opportunities.
            4. Develop a Portfolio: Showcase your projects, CTF achievements,
            and certifications in a portfolio website or GitHub repository. A
            portfolio highlights your capabilities to potential employers and
            demonstrates your dedication to continuous learning.
          </p>
          <h3 className="m-2"> 5. Update Your Resume and LinkedIn Profile:</h3>
          <p className="m-2">
            {" "}
            Tailor your resume and LinkedIn profile to highlight your
            cybersecurity skills, certifications, and practical experiences.
            Connect with professionals in the industry, participate in
            discussions, and leverage LinkedIn for networking opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;
