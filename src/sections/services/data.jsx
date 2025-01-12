import { SiAdobexd } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai"; // Changed icon
import { HiLanguage } from "react-icons/hi2";
import { BiLineChart } from "react-icons/bi"; // Added icon for Business Analyst
import { FiFigma } from "react-icons/fi"; // Added icon for UX/UI

const data = [
  {
    id: 1,
    icon: <HiLanguage />,
    title: "English",
    desc: "Proficient in English with a TOEIC score of 915, enabling effective communication and collaboration in international contexts.",
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "Experienced in developing user-friendly and visually appealing web applications using ReactJS and NextJS, ensuring responsiveness across all devices.",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Skilled in backend technologies like Node.js and PHP, capable of building secure and robust web applications with efficient data management.",
  },
  {
    id: 4,
    icon: <AiOutlineDatabase />, // Changed title and icon
    title: "Database Management",
    desc: "Proficient in database technologies like SQL and MongoDB, ensuring data integrity and efficient retrieval for web applications.",
  },
  {
    id: 5, // Added new item
    icon: <BiLineChart />,
    title: "Business Analysis",
    desc: "Equipped with knowledge in business analysis principles gained through academic studies, enabling effective requirement gathering and project scoping.",
  },
  {
    id: 6, // Added new item
    icon: <FiFigma />,
    title: "UX/UI Design",
    desc: "Experienced in designing user-centered interfaces with a focus on usability and aesthetics, ensuring a positive user experience.",
  },
];

export default data;
