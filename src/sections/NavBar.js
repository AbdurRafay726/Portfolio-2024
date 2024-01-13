import { useState } from "react";

const navItems = [
  { title: "About", id: "/#about" },
  { title: "Projects", id: "/#projects" },
  { title: "Contact Me", id: "/#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  function openCloseHamburger() {
    const hamburgerButton = document.getElementById("menu-btn");
    const hamburgerMenu = document.getElementById("menu");
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!open) {
      setOpen(true);
      hamburgerButton.classList.add("open");
      hamburgerMenu.classList.remove("hidden");
      hamburgerMenu.classList.add("flex");
    } else {
      hamburgerButton.classList.remove("open");
      hamburgerMenu.classList.add("hidden");
      hamburgerMenu.classList.remove("flex");
      setOpen(false);
    }
  }
  return (
    <>
      <div id="top"></div>
      <nav className="p-[1.5rem] flex items-center justify-between w-screen text-lg md:text-xl fixed z-50 ">
        <div>
          <a
            href="/#"
            className={`flex items-center ${
              !open ? "text-black" : "text-white"
            }`}
          >
            <div
              className={`w-8 h-8 md:w-12 md:h-12 flex items-center justify-center font-bold border-4   rounded-full p-4 mr-4 ${
                !open ? "border-black" : "border-white"
              }`}
            >
              AR
            </div>
            <div>Abdur Rafay</div>
          </a>
        </div>
        <div className="hidden md:flex items-center mr-3 md:mr-6">
          {navItems.map((item) => (
            <a
              href={item.id}
              className="text-xl mr-4 px-3 py-1 underline underline-offset-3 hover:bg-greenHover hover:shadow-md cursor-pointer hover:no-underline hover:rounded-lg  hover:transition duration-500 md:text-2xl"
            >
              {item.title}
            </a>
          ))}
        </div>
        {/* <!-- Hamburger Button --> */}
        <div class=" md:hidden">
          <button
            id="menu-btn"
            type="button"
            onClick={openCloseHamburger}
            class="z-50 block hamburger md:hidden focus:outline-none"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        id="menu"
        class={`absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white z-99 uppercase bg-mainGray `}
      >
        {navItems.map((item) => (
          <a
            href={item.id}
            class="hover:text-mainGreen"
            onClick={openCloseHamburger}
          >
            {item.title}
          </a>
        ))}
      </div>
    </>
  );
}
