import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect, useState } from "react";
import moment from "moment-timezone";

const contact = [
  {
    name: "LinkedIn",
    icon: <IoLogoLinkedin color="white" />,
    href: "https://www.linkedin.com/in/rao-abdur-rafay-97a252186/",
  },
  {
    name: "Instagram",
    icon: <AiFillInstagram color="white" />,
    href: "/#",
  },
  {
    name: "Facebook",
    icon: <IoLogoFacebook color="white" />,
    href: "https://www.facebook.com/profile.php?id=61554898864819",
  },
  {
    name: "Email",
    icon: <SiGmail color="white" />,
    href: "abdurrafay726@gmail.com",
  },
];

export default function Footer() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  // let mytime = date.toTimeString();

  const a = moment(date).tz("Asia/Karachi");
  const localtime = a.format("hh:mm:ss A ([GMT] ZZ)");

  return (
    <div id="contact" className="bg-mainGray  text-slate-200 p-10 w-[100%]">
      <div
        className="text-center text-bold text-4xl md:text-7xl tracking-wide capitalize my-10
      py-4 md:py-6 bg-gradient-to-r to-lime-300 font-pacifico from-green-400  text-transparent bg-clip-text"
      >
        Have the one you want
      </div>
      <h2 className="text-2xl md:text-4xl text-left font-rubik  inline-block ">
        Contact Me
      </h2>
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-between text-lg md:text-2xl text-white  mx-[8rem] mt-5 mb-10 tracking-widest">
        {contact.map((item) => (
          <a
            href={item.href}
            className="border-b p-4 hover:text-white hover:cursor-pointer hover:scale-95 duration-300  relative group overflow-y-hidden"
          >
            <div className=" absolute slidein group-hover:translate-y-0 z-0 duration-300 "></div>
            <div className="relative z-10 w-[9rem] md:w-[12rem] flex items-center justify-between underline underline-white underline-offset-4">
              <p>{item.name}</p>
              <div className="mt-2">{item.icon}</div>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-24 text-xs md:text-base tracking-wide flex flex-col space-y-2 md:flex-row items-center justify-between">
        <span>
          &copy;{date.getFullYear()} | Abdur Rafay | All Rights Reserved.
        </span>
        <span>My Local Time: {localtime}</span>
      </div>
    </div>
  );
}
