import { useLayoutEffect, useRef } from "react";
import Hero from "../section/home/Hero";
import Projects from "../section/home/Projects";
import gsap from "gsap";

function Home() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(".animate-text-up", {
        opacity: 0,
        y: "+=30",
        stagger: 0.3,
        // ease: "power4.inOut",
        ease: "expoScale(0.5,7,none)",
      })
        .from(
          "#line1",
          {
            scaleX: 0,
            duration: 1.2,
            transformOrigin: "50% 50%",
            ease: "power4.inOut",
          },
          "<0.1"
        )
        .from(
          ["#line2", "#line3"],
          {
            scaleY: 0,
            duration: 1.2,
            transformOrigin: "50% 0%",
            ease: "power4.inOut",
            // delay: -0.8,
          },
          "<0.3"
        )
        .from(
          ["#line4", "#line5"],
          {
            scaleX: 0,
            duration: 0.6,
            transformOrigin: "50% 50%",
            // ease: "power4.inOut",
            ease: "expoScale(0.5,7,none)",
          },
          "<0.6"
        )
        .from(
          "#grid",
          {
            opacity: 0,
            duration: 1.2,
            delay: 0,
            ease: "expoScale(0.5,7,none)",
          },
          "<0.45"
        );
    }, comp);

    return () => ctx.revert();
  });
  return (
    <div ref={comp}>
      <Hero />
      <Projects />
    </div>
  );
}
export default Home;
