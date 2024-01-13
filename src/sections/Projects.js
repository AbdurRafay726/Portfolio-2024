import { useState } from "react";
import FadeInLeft from "../components/FadeInLeft";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import WildOasis from "./projectDetails/WildOasis";
import Bankist from "./projectDetails/Bankist";
import WorldWise from "./projectDetails/WorldWise";
import FastReactPizza from "./projectDetails/FastReactPizza";
import Mapty from "./projectDetails/Mapty";
import FarAway from "./projectDetails/FarAway";

const projects = [
  {
    id: 1,
    name: "The Wild Oasis",
    image: "images/The-Wild-Oasis.PNG",
    detailPoints: <WildOasis />,
  },
  {
    id: 2,
    name: "Bankist",
    image: "../images/Bankist.PNG",
    detailPoints: <Bankist />,
  },
  {
    id: 3,
    name: "World Wise",
    image: "../images/WorldWise.PNG",
    detailPoints: <WorldWise />,
  },
  {
    id: 4,
    name: "Fast React Pizza",
    image: "../images/Fast-React-Pizza.PNG",
    detailPoints: <FastReactPizza />,
  },
  {
    id: 5,
    name: "Mapty App",
    image: "../images/Mapty.PNG",
    detailPoints: <Mapty />,
  },
  {
    id: 6,
    name: "Far Away",
    image: "../images/Far-Away.PNG",
    detailPoints: <FarAway />,
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    if (selectedId === null) {
      setSelectedId(id);
    }
    if (selectedId === id) {
      setSelectedId(null);
    }
    if (selectedId !== null && selectedId !== id) {
      setSelectedId(id);
    }
  }

  return (
    <div id="projects" className="pt-12 pb-16 mb-16 max-w-screen-1200px ">
      <div className=" mx-auto max-w-screen-1200px">
        {/* Heading */}
        <div className="bg-gray-100">
          <FadeInLeft>
            <h2
              className="py-2 md:py-4 w-full md:pl-24 font-rubik text-3xl sm:text-5xl md:text-7xl font-bold  text-center md:text-left bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:translate-y-1 duration-100
          "
            >
              Some of my efforts
            </h2>
            <p className="text-center text-xs md:text-base">
              (Please click on any to see details)
            </p>
          </FadeInLeft>
        </div>
        {/* Project List */}
        <div className="overflow-x-hidden flex flex-col space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={project.id}
              className={
                "bg-gradient-to-r pt-[16px] to-gray-100 from-white duraiton-500 hover:cursor-pointer" +
                (selectedId === project.id ? " moveLeft" : "moveRight")
              }
              onClick={() => {
                handleClick(project.id);
              }}
            >
              <div className="py-8 px-6 w-full h-auto mx-auto relative">
                <div className="item-container">
                  <div className="group item z-10 mx-auto w-2/3">
                    <img
                      src={`${process.env.PUBLIC_URL}/${project.image}`}
                      alt="project 1"
                      className="mx-auto w-full h-auto duration-500  "
                    />
                    <div className="item-gradient group-hover:cursor-pointer"></div>
                    <h5>{project.name}</h5>
                  </div>
                </div>

                <span className="absolute bottom-[14%] right-[14%] xsm:bottom-[12%] xsm:right-[15%] sm:bottom-[8%] sm:right-[13%] md:right-[12%]  z-30 text-mainGray text-4xl sm:text-6xl md:text-8xl hover:text-gray-500 hover:cursor-pointer">
                  {selectedId === project.id ? (
                    <HiChevronLeft />
                  ) : (
                    <HiChevronRight />
                  )}
                </span>
                <span className="absolute top-[15%] md:top-[10%] left-[14.5%] flex items-center justify-center h-10 w-10 md:h-16 md:w-16 z-30 text-mainGray bg-mainGreen border-[1px] border-mainGray rounded-full text-2xl md:text-4xl font-semibold hover:cursor-pointer hover:scale-110 hover:bg-slate-800 hover:text-mainGreen">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>

                <div
                  id="textR"
                  className={
                    "text-2xl w-[71vw] text-justify p-2 absolute z-0 top-[1.2rem] duration-500" +
                    (selectedId === project.id
                      ? " moveTextRight"
                      : " moveTextLeft")
                  }
                >
                  <h1 className="text-[2vw] pb-[0.5vw] font-bold underline underline-offset-4">
                    {project.name}
                  </h1>
                  {/* {project.id === 1 ? (
                      <WildOasis />
                    ) : project.id === 2 ? (
                      <Bankist />
                    ) : (
                      "HEHE2"
                    )} */}
                  <div className="text-[1.7vw] leading-[1.5vw]">
                    {selectedId === project.id
                      ? project.detailPoints
                      : "Some error in loading the details."}
                  </div>
                  {/* <ul className=" list-inside my-8 space-y-3">
                      {project.detailPoints.map((detail) => (
                        <li
                          className="flex items-center"
                          key={
                            project.id +
                            project.detailPoints.map((_, index) => index)
                          }
                        >
                          <span className="mr-4">
                            <HiCode className="text-mainGreen" />
                          </span>
                          <p>{detail}</p>
                        </li>
                      ))}
                    </ul> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
