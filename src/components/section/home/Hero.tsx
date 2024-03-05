import CircleButton from "../../button/CircleButton";

const Hero = () => {
  return (
    <section className={`pt-9 pb-14 space-x-8 flex-row`}>
      <div className={`space-y-2`}>
        <h1 className={`uppercase animate-text-up`}>Sanditya Sutanto</h1>
        <h3 className={`text-grey italic animate-text-up`}>
          Software Engineer <br />
          and More
        </h3>
      </div>
      <div className={`pt-4`}>
        <CircleButton
          className={`animate-text-up`}
          text="Contact Me!"
          diameter={90}
          color="orange"
        />
      </div>
    </section>
  );
};
export default Hero;
