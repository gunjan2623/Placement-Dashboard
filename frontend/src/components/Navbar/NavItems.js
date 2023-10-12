import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillHome,
  AiOutlinePicLeft,
} from "react-icons/ai";
import { IoIosPaper, IoMdHelpCircle } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbUserCircle } from "react-icons/tb";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

export const NavItems = [
  {
    title: "Home",
    path: "/home",
    icon: <AiFillHome />,
    cName: "nav-links",
  },
  {
    title: "Placement Reports",
    path: "/placerep",
    icon: <AiOutlinePicLeft />,
    cName: "nav-links",
    iconClosed: <AiFillCaretRight />,
    iconOpened: <AiFillCaretLeft />,
    subNav: [
      
      {
        title: "2021",
        path: "/placerep/Y2021",
        // icon: <IoIosPaper />,
      },
      {
        title: "2020",
        path: "/placerep/Y2020",
        //  icon: <IoIosPaper />,
      },
      {
        title: "2019",
        path: "/placerep/Y2019",
        //  icon: <IoIosPaper />,
      },
      {
        title: "2018",
        path: "/placerep/Y2018",
        // icon: <IoIosPaper />,
      },
      {
        title: "2017",
        path: "/placerep/Y2017",
        // icon: <IoIosPaper />,
      },
      {
        title: "2016",
        path: "/placerep/Y2016",
        // icon: <IoIosPaper />,
      },
    ],
  },
  {
    title: "Statistics",
    path: "/statistics",
    icon: <VscGraph />,
    cName: "nav-links",
  },
  // {
  //   title: "Support",
  //   path: "/support",
  //   icon: <IoMdHelpCircle />,
  //   cName: "nav-links",
  // },
  {
    title: "About",
    path: "/about",
    icon: <TbUserCircle />,
    cName: "nav-links",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <BsFillTelephoneFill />,
    cName: "nav-links",
  },
];

export default NavItems;
