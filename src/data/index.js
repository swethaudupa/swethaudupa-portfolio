import swiggy_logo from "../assets/images/swiggy.png";
import walkin_logo from "../assets/images/first_walkin.png";
import CTS_logo from "../assets/images/cts.png";

export const workExpData = [
  {
    date: "2020-present",
    designation: "Lead Software Engineer",
    companyLogo: swiggy_logo,
    companyLink: "https://www.swiggy.com/",
    name: "Swiggy (Parent company - Crewscale Technologies)",
    experience: [
      {
        projectName: "Dineout App",
        description: [
          "Played a key role in the development of a restaurant app that connects diners to the city's restaurants, discounts, and deals.",
          "Contributed since the inception of the project, participating in Product Requirement Document (PRD) discussions, design discussions, and the creation of technical solution documents.",
          "Utilized React-native, GraphQL, and nodeJS technologies to deliver the app.",
          "Led a team of 5 frontend developers, collaborating with cross-functional teams to ensure timely and successful deliverables.",
          "Built nodejs/graphql proxy layer for the app and created a bridge between JS and native.",
          "Responsible for every Play Store release and fixing major production bugs and memory leakage issues.",
          "Generated IOS/Android builds using CI/CD pipeline.",
          "Proud to have been contributed to the success of the App, which is part of the Swiggy's customer-facing app ecosystem that has 100M+ downloads on Play Store.",
          "Received an MVP award for outstanding contributions to the project.",
        ],
      },
      {
        projectName: "Flujo Dashboard",
        description: [
          "Served as the primary frontend developer for an internal dashboard used as a fraud prevention measure.",
          "Individually contributed to the development of an internal graph explorer built using React Flow, which was used by various other teams to detect fraud.",
          "Utilized ReactJS and GraphQL technologies to deliver the dashboard.",
          "Successfully released the dashboard for internal usage.",
        ],
      },
    ],
  },
  {
    date: "2014-2019",
    designation: "Senior Software engineer",
    companyLogo: walkin_logo,
    companyLink: "https://getwalk.in/",
    name: "First Walkin Technologies",
    experience: [
      {
        projectName: "Wcore Platform",
        description: [
          "Developed a scalable, event-based platform called W-core, designed to allow company applications to reside within the enterprise applications ecosystem and share data through service interfaces.",
          "Leveraged NodeJS to build a GraphQL server for the W-core platform, gaining a deep understanding of GraphQL and the ability to define a GraphQL schema and corresponding resolver functions.",
          "Learned how to design and implement GraphQL APIs that enable flexible and efficient communication between client and server, resulting in a highly performant platform that meets business needs.",
        ],
      },
      {
        projectName: "RefineX",
        description: [
          "Oversaw the development of a customer feedback system for a company's product, designed to collect feedback from customers with context and enable swift resolution of issues by looping in the appropriate functions in the organization.",
          "Developed and implemented processes and technologies to build a scalable system, ensuring that the system was able to handle a large volume of feedback and customer interactions.",
          "Utilized Semantics UI design principles to create an intuitive and user-friendly interface for the system, enhancing the customer experience and improving satisfaction.",
          "Built the system using ReactJS framework on the client side and GraphQL on the server side, leveraging the latest technologies to create a robust and reliable system.",
        ],
      },
      {
        projectName: "Cafe Coffee Day",
        description: [
          "Developed the official mobile application for India's largest coffee chain, Cafe Coffee Day, using React Native, allowing customers to place orders and make payments via their mobile devices.",
          "Utilized React Native to build the app and gained in-depth knowledge of ReactJS core concepts",
          "Managed all phases of the project, including development, testing, deployment, and maintenance, and identified areas for improvement to enhance the user experience.",
          "Successfully identified and resolved major production issues by introducing codepush, resulting in improved app performance and customer satisfaction.",
          "Led all deployments on the Google Play Store and Apple App Store, ensuring timely and efficient delivery of new features and updates.",
          "Recognized as the 2nd best performer in the company for contributions to the project and quick transition from non-technical to technical work.",
        ],
      },
      {
        projectName: "instaVaani",
        description: [
          "Successfully managed the development and execution of more than 200 high-speed polls, including web surveys, using instaVaani, a polling technology product of the company.",
          "Collaborated with clients to understand their specific requirements and develop custom scripts for the polls, ensuring accurate and reliable results.",
          "Conducted thorough analysis of poll results using Excel sheet macros and complex formulas to provide valuable insights on audience sentiment and favorability.",
          "Conducted audio editing and ensured smooth poll execution, while ensuring the integrity and accuracy of the results.",
          "Made presentations to clients to report and interpret the results of the polls, showcasing the impact of the data on their business or organization.",
          "Demonstrated excellent communication skills in effectively liaising with clients and colleagues.",
          "Designed, developed, and maintained the instaVaani website using Wix, a website editor, to provide customers with a seamless experience.",
        ],
      },
      {
        projectName: "Election Campaign Management",
        description: [
          "Led and managed a team of over 100 volunteers during the Lok Sabha and Assembly elections in 2014 for Nandan Nilekani and Prithviraj Chavan's campaign.",
          "Successfully executed a door-to-door campaign, covering 8000+ voters and capturing their information using an in-house built voter verification app.",
          "Monitored media coverage and conducted research on AC-wise political news in Maharashtra.",
          "Managed call center operations and effectively sent bulk SMS and voice messages to Karad's population.",
          "Collaborated with the campaign team to develop and implement strategic plans for voter outreach and engagement.",
          "Coordinated with local party workers and volunteers to ensure smooth campaign operations.",
          "Maintained records and reports of the campaign's progress and outcomes.",
        ],
      },
    ],
  },
  {
    date: "2010-2011",
    designation: "Programmer Analyst",
    companyLogo: CTS_logo,
    companyLink: "https://www.cognizant.com/in/en",
    name: "Cognizant",
    experience: [
      {
        projectName: "",
        description: ["Worked on a Software testing tool called Load runner"],
      },
    ],
  },
];

export const infoTableData = [
  { name: "Residence", value: "India" },
  { name: "City", value: "Bengaluru" },
  { name: "Phone", value: "+91-8197842120" },
];

export const langSkillsData = [
  { language: "English", percentage: 90 },
  { language: "Kannada", percentage: 100 },
  { language: "Hindi", percentage: 70 },
];

export const hardSkillsData = [
  { stack: "HTML/CSS/SCSS", percentage: "95%" },
  { stack: "JS/TS", percentage: "90%" },
  { stack: "ReactJs/Redux", percentage: "95%" },
  { stack: "React Native", percentage: "95%" },
  { stack: "GraphQL/NodeJS", percentage: "90%" },
  { stack: "GIT", percentage: "95%" },
  { stack: "Figma/AI/PS", percentage: "80%" },
  { stack: "SQL", percentage: "70%" },
];
