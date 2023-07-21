import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  gtl,
  viztaedu,
  starbucks,
  tesla,
  shopify,
  mobileapp,
  prodely,
  shirt,
  carrent,
  jobit,
  tripguide,
  threejs,
  samuel,
  akweley
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Prompt Engineering",
    icon: creator,
  },
  {
    title: "AI",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Developer",
    company_name: "ViztaEdu Ltd",
    icon: viztaedu,
    iconBg: "#383E56",
    date: "September 2022 - Date",
    points: [
      "Developing and maintaining web applications using Next.js Material Ui.",
      "Implementing the integration of OpenAI embeddings to embed research materials provided by students into the Pinecone vector database.",
      "Managing the Pinecone vector database, including data storage, retrieval, and optimization for efficient querying and search capabilities.",
      "Developing a backend API using FastAPI in Python to connect the frontend to the database.",
      "Containerizing the web application and backend API using Docker for easy deployment and scalability.",
      "Using  Git and collaborating with the development team to manage codebase changes effectively.",
      "Staying up-to-date with the latest advancements in web development, AI embeddings, and relevant technologies to improve the application's features and performance.",
    ],
  },
  {
    title: "Mobile App Developer Incubatee",
    company_name: "Ghana Tech Lab",
    icon: gtl,
    iconBg: "#E6DEDD",
    date: "January 2022 - September 2022",
    points: [
      "Building and maintaining the mobile application using React Native to provide students access to gamified learning features and a social media-like platform for learning through question and answer interactions.",
      "Implementing gamification elements such as badges, points, and leaderboards to motivate and engage students in the learning process.",
      "Creating a user-friendly and interactive platform where students can post educational content, ask and answer questions, and interact with each other in a social media format similar to TikTok.",
      " Integrating Firebase database and Firebase Authentication for user registration, login, and data storage.",
      "Working with UX designers to implement intuitive and seamless user experiences that cater to the target audience of students.",
      "Participating in the SDG  Innovation Challenge and Ghana Startup Summits to showcase the app's achievements and gathering recognition for the team's efforts.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Akeley Abena Okai",
    designation: "CEO",
    company: "ViztaEdu Ltd",
    image: akweley,
  },
  {
    testimonial:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    name: "Samuel Kwame Sampong",
    designation: "Product Manager",
    company: "ViztaEdu",
    image: samuel,
  },
  {
    testimonial:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    name: "Caleb Yankey",
    designation: "CMO",
    company: "ViztaEdu Ltd",
    image: "",
  },
];

const projects = [
  {
    name: "3D Shirt Design",
    description:
      "Web-based platform that allows users to create unique and exclusive shirt designs with 3D customisation tool and AI prompts",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "grey-text-gradient",
      },
    ],
    image: shirt,
    source_code_link: "https://github.com/alb1nut/shirt_design_ai_frontend.git",
  },
  {
    name: "Prodely",
    description:
      "An AI-powered project virtual assistant  that enables students to search from a database of research materials with the aid of AI and provide the exact research questions needed by the students",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
      {
        name: "pinecone",
        color: "white-text-gradient",
      },
      {
        name: "openai",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
    ],
    image: prodely,
    source_code_link: "https://www.prodely.viztaedu.com/",
  },
  {
    name: "ViztaEdu Mobile App",
    description:
      "ViztaEdu is a social media-based educational mobile and web-based app for tertiary-level students to share their educational journeys, share and collaborate on projects, access gamified learning features and impact other students worldwide.​",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "gamification",
        color: "pink-text-gradient",
      },
      {
        name: "edtech",
        color: "white-text-gradient",
      },
    ],
    image: mobileapp,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.viztaedu.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
