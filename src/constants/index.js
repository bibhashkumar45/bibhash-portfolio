import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  teachnook,
  threejs,
  awsPhoto,
  iit,
  hackathon,
  RentMySpace,
  school,
  Weather,
  symon,
  dog,
  working,
  selenium,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Management",
    icon: mobile,
  },
  {
    title: "Selenium Grid",
    icon: creator,
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
    name: "selenium",
    icon: selenium,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Teachnook",
    icon:teachnook,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AWS Cloud Computing Training",
    company_name: "Chandigarh University",
    icon: awsPhoto,
    iconBg: "#E6DEDD",
    date: "June 2024 -  2024",
    points: [
      "Gained hands-on experience with Amazon Web Services (AWS), including cloud infrastructure, deployment, and scaling applications.",
      "Learned to configure and manage AWS services such as EC2, S3 and Lambda for building scalable and reliable applications.",
      "Worked with cloud solutions to enhance application performance, security, and cost efficiency.",
      "Gained knowledge in cloud architecture, monitoring, and troubleshooting to ensure optimal cloud application performance.",
    ],
  },
  {
    title: "Hackathon Participant",
    company_name: " Guru Gobind Singh Indraprastha University, Delhi!",
    icon: hackathon,
    iconBg: "#E6DEDD",
    date: "December 2024",
    points: [
      "Participated in the Hackathon at Guru Gobind Singh Indraprastha University, Delhi, focusing on solving real-life challenges related to solar energy and carbon emissions.",
      "Collaborated with a team to design and implement solutions for carbon neutralization, aiming to reduce environmental impact.",
      "Showcased teamwork by coordinating tasks, sharing ideas, and delivering a comprehensive solution in a limited timeframe.",
      "Contributed to creating a high-quality, impactful product that addresses environmental issues.",
    ],
  },
  {
    title: "Multi-Core Computer Architecture",
    company_name: "IIT Guwahati",
    icon: iit,
    iconBg: "#383E56",
    date: "August 2023 - November 2023",
    points: [
      "Successfully completed the Multi-Core Computer Architecture course from IIT Guwahati under the NPTEL program.",
      "Ranked in the Top 2% of over 2500 candidates, demonstrating strong understanding of advanced computer architecture concepts.",
      "Gained hands-on experience in multi-core processing and parallel computing.",
      "Applied theoretical knowledge to real-world problems, enhancing technical proficiency in computer architecture.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "The design is great, but the navigation menu could be more intuitive. It took me a while to find what I was looking for.",
    name: "Aman Kumar",
    designation: "Web developer",
    company: "",
    image: "https://media.istockphoto.com/id/1411428110/photo/young-businessman-portrait.jpg?s=612x612&w=0&k=20&c=t4Pd4t9opr2Be1w4Zhonf75Ys2jbfKZrQbDzKnvvqeg=",
  },
  {
    testimonial:
      "The website is super easy to navigate and looks amazing! It’s one of the most user-friendly sites I’ve ever used",
    name: "Prince Kumar",
    designation: "Network Engineer",
    company: "",
    image: "https://www.brisbaneheadshots.com.au/templates/yootheme/cache/corporate-casual-businessman-e2e6893f.jpeg",
  },
  {
    testimonial:
      "It’s refreshing to see a site that works so well on mobile and desktop. Great attention to detail!",
    name: "Harsh Poonia",
    designation: "UI/UX Desiner",
    company: "",
    image: "https://img.freepik.com/premium-photo/indian-student-male-confident-portrait-generate-ai_98402-88113.jpg",
  },
];



const projects = [
  {
    name: "RentMySpace",
    description:
      "RentMySpace is a web platform where users can upload spaces for rent and others can easily book them at affordable prices, providing a convenient solution for both space owners and renters.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },

    ],
    image: RentMySpace,
    source_code_link: "https://wanderlust-tuqo.onrender.com/listings",
  },
  {
    name: "School Website(conti...)",
    description:
      "I'm building a full-stack school management system with features like student and teacher management, attendance, marks, leave, and fee tracking, offering an efficient solution for schools.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: school,
    source_code_link: "https://pooniaharsh.github.io/Adarsh/#about-us",
  },
  {
    name: "Weather_Monitoring",
    description:
      "I developed a real-time weather monitoring system that provides accurate forecasts and predicts upcoming weather conditions, helping users stay informed and prepared.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
    ],
    image: Weather,
    source_code_link: "https://bibhashkumar45.github.io/Summer/",
  },
  {
    name: "Simon Says Game",
    description:
      "A responsive Simon Says game using HTML, CSS, Bootstrap, and JavaScript, offering engaging gameplay that tests memory and focus through color sequences.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: symon,
    source_code_link: "https://bibhashkumar45.github.io/Simon-Says-Game/",
  },
  {
    name: "Web Page",
    description:
      "I created a responsive webpage showcasing the features and capabilities of Bootstrap, CSS, and HTML, highlighting modern design and functionality.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: dog,
    source_code_link: "https://bibhashkumar45.github.io/web-page/",
  },
  {
    name: "Currently Working on FullStack Project....",
    description:
      "Which includes... ",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "RestApi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "mern",
        color: "pink-text-gradient",
      },
    ],
    image: working,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };