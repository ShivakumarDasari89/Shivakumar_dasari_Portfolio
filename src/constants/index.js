const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 35, suffix: "+", label: "Satisfied Clients" },
  { value: 6, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Shivakumar Dasari brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.jpeg",
    logoPath: "/images/exp1.jpeg",
    title: "FullSack Developer",
    date: "September 2023 - December 2024",
    responsibilities: [
      "Developed and maintained user-facing features for the Soncur Technologies website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Shivakumar Dasari's contributions to software engineering and web application development have been outstanding. He consistently approaches challenges with a strong problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/exp2.png",
    title: "Software Engineer",
    date: "August 2021 - July 2023",
    responsibilities: [
      "Led the development of scalable web applications as a Software Engineer.",
    "Collaborated with backend engineers to seamlessly integrate APIs with the frontend.",
    "Contributed to open-source projects utilized within the Docker ecosystem.",
    ],
  },
  
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

// const testimonials = [
//   {
//     name: "Esther Howard",
//     mentions: "@estherhoward",
//     review:
//       "I can’t say enough good things about Shivakumar Dasari. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
//     imgPath: "/images/client1.png",
//   },
//   {
//     name: "Wade Warren",
//     mentions: "@wadewarren",
//     review:
//       "Working with Shivakumar Dasari was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
//     imgPath: "/images/client3.png",
//   },
//   {
//     name: "Guy Hawkins",
//     mentions: "@guyhawkins",
//     review:
//       "Collaborating with Shivakumar Dasari was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Shivakumar Dasari's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Shivakumar Dasari is the ideal partner.",
//     imgPath: "/images/client2.png",
//   },
//   {
//     name: "Marvin McKinney",
//     mentions: "@marvinmckinney",
//     review:
//       "Shivakumar Dasari was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
//     imgPath: "/images/client5.png",
//   },
//   {
//     name: "Floyd Miles",
//     mentions: "@floydmiles",
//     review:
//       "Shivakumar Dasari’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
//     imgPath: "/images/client4.png",
//   },
//   {
//     name: "Albert Flores",
//     mentions: "@albertflores",
//     review:
//       "Shivakumar Dasari was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
//     imgPath: "/images/client6.png",
//   },
// ];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url:'https://www.instagram.com/dshiva_79/'
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url:''
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url:'https://www.linkedin.com/in/dasari-shivakumar-fullstack38998/'
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  // testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
