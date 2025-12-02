import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 170) {
          navRef.current.classList.add("fixed", "top-0", "left-1/2", "-translate-x-1/2", "z-50");
          navRef.current.classList.remove("absolute", "top-[85%]");
        } else {
          navRef.current.classList.remove("fixed", "top-0", "left-1/2", "-translate-x-1/2", "z-50");
          navRef.current.classList.add("absolute", "top-[85%]");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

useEffect(() => {
  const handleScroll = () => {
    if (!navRef.current || !menuRef.current) return;

    const navHeight = navRef.current.offsetHeight;

    if (window.scrollY >= 170) {
      menuRef.current.style.position = "fixed";
      menuRef.current.style.top = `calc(${navHeight}px + 10px)`; 
    } else {
      menuRef.current.style.position = "absolute";
      menuRef.current.style.top = "";
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return <>

    <nav ref={navRef} className="bg-[#3A497B] shadow-[0_2px_12px_rgba(0,0,0,0.6)] m-auto absolute py-2 top-[85%] h-16 w-[75%] rounded-[20px] flex justify-between items-center">
      <div className="ml-4 flex items-center gap-1">
        <img className="w-10" src="../../../../src/assets/Images/logo-sm.png" alt="Logo" /> 
        <h5 className="font-medium font-nerko text-[20px] w-[178px] text-white">Game Reviews</h5>
      </div>
      <div className="mr-5 max-[975px]:hidden">
        <ul className="flex gap-4 text-white text-[15px] font-normal font-Comfortaa">
          <NavLink to={"/MMORPG"} className="hover:text-[#0099CC] transition-all duration-300 cursor-pointer">MMORPG</NavLink>
          <NavLink to={"/SHOOTER"} className="hover:text-[#0099CC] transition-all duration-300 cursor-pointer">SHOOTER</NavLink>
          <NavLink to={"/SAILING"} className="hover:text-[#0099CC] transition-all duration-300 cursor-pointer">SAILING</NavLink>
          <NavLink to={"/PERMADEATH"} className="hover:text-[#0099CC] transition-all duration-300 cursor-pointer">PERMADEATH</NavLink>
          <NavLink to={"/SUPERHERO"} className="hover:text-[#0099CC] transition-all duration-300 cursor-pointer">SUPERHERO</NavLink>
          <NavLink to={"/PIXEL"} className="hover:text-[#0099CC] transition-all duration-300 cursor-pointer">PIXEL</NavLink>
        </ul>
      </div>
      <button
          className="mr-5 hidden max-[975px]:block text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
    </nav>

    <div
        ref={menuRef}
        className={`
          absolute left-1/2 -translate-x-1/2 top-[calc(85%+70px)]
          w-[75%]
          z-50
          bg-[#3A497B]
          rounded-[20px]
          overflow-hidden
          transition-[max-height,opacity] duration-500
          ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col text-white text-[15px] font-Comfortaa p-4 gap-3">
          <NavLink onClick={() => setOpen(!open)} to={"/MMORPG"} className="hover:text-[#0099CC] duration-300">MMORPG</NavLink>
          <NavLink onClick={() => setOpen(!open)} to={"/SHOOTER"} className="hover:text-[#0099CC] duration-300">SHOOTER</NavLink>
          <NavLink onClick={() => setOpen(!open)} to={"/SAILING"} className="hover:text-[#0099CC] duration-300">SAILING</NavLink>
          <NavLink onClick={() => setOpen(!open)} to={"/PERMADEATH"} className="hover:text-[#0099CC] duration-300">PERMADEATH</NavLink>
          <NavLink onClick={() => setOpen(!open)} to={"/SUPERHERO"} className="hover:text-[#0099CC] duration-300">SUPERHERO</NavLink>
          <NavLink onClick={() => setOpen(!open)} to={"/PIXEL"} className="hover:text-[#0099CC] duration-300">PIXEL</NavLink>
        </ul>
    </div>
  </>;
};

export default Navbar;
