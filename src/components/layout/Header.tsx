import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const navbar = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#header_list", {
        opacity: 0,
        // y: "+=20",
        stagger: 0.3,
        delay: 0.8,
        ease: "expoScale(0.5,7,none)",
      });
    }, navbar);
    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <nav
      className={`bg-light  w-full transition-all flex-col z-50`}
      ref={navbar}
    >
      <div
        className={`container flex items-center justify-center h-[8vh] w-full mx-auto`}
      >
        <div>
          <button className={`md:hidden`} onClick={handleClick}>
            <img src={`/images/${isOpened ? "cross.svg" : "hamburger.svg"}`} />
          </button>
          <div id="header_list" className={`hidden md:block`}>
            <ul className={`flex space-x-6`}>
              <li className={`hover:underline decoration-2`}>
                <a href={`/`}>
                  <h4>Projects</h4>
                </a>
              </li>
              {/* <li className={`hover:underline decoration-2`}>
                <a href={`/`}>
                  <h4>About</h4>
                </a>
              </li> */}
              {/* <li className={`hover:underline decoration-2`}>
                <a href={`/`}>
                  <h4>Resume</h4>
                </a>
              </li> */}
              <li className={`hover:underline decoration-2`}>
                <a href={`https://www.linkedin.com/in/sanditya/`}>
                  <h4>Contact</h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpened ? (
        <div
          className={`container px-3 md:hidden bg-ac-light items-center justify-between h-[40vh] w-full mx-auto py-6`}
        >
          <ul className={`flex-col space-y-8`}>
            <li
              className={`hover:underline decoration-2 border-b-[4px] border-solid border-b-ac-dark`}
            >
              <a href={`/`}>
                <h4>Projects</h4>
              </a>
            </li>
            <li
              className={`hover:underline decoration-2 border-b-[4px] border-solid border-b-ac-dark`}
            >
              <a href={`https://www.linkedin.com/in/sanditya/`}>
                <h4>Contact</h4>
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};
export default Header;
