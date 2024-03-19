import CircleButton from "../../button/CircleButton";

const Hero = () => {
  return (
    <section className={`pt-9 pb-14 md:space-x-8 flex-row px-5`}>
      <div className={`space-y-2`}>
        <h1 className={`uppercase animate-text-up`}>Sanditya Sutanto</h1>
        <h4 className={`text-grey italic animate-text-up`}>
          Software Engineer <br />
          Web, IoT, and Robotics
        </h4>
      </div>
      <div className={`pt-4`}>
        <a href="https://www.linkedin.com/in/sanditya/" target="_blank">
          <CircleButton
            className={`animate-text-up`}
            text="Contact Me!"
            diameter={90}
            color="orange"
          />
        </a>
      </div>
    </section>
  );
};
export default Hero;
