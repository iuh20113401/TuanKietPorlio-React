import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  { id: 1, icon: <HiOutlineMail />, link: "mailto:kiet5454aa@gmail.com" },
  {
    id: 2,
    icon: <RiMessengerLine />,
    link: "https://m.me/nguyen.kiet.232605/",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/deri0405/",
  },
];
