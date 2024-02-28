import CircleButton from "../../button/CircleButton";

const Hero = () => {
  return (
    <section className={`pt-9 pb-14 space-x-8 flex-row`}>
      <div className={`space-y-2`}>
        <h1 className={`uppercase`}>Sanditya Sutanto</h1>
        <h3 className={`text-grey italic`}>
          Software Engineer <br />
          and More
        </h3>
      </div>
      <div className={`pt-4`}>
        <CircleButton text="Contact Me!" diameter={90} color="orange" />
      </div>
    </section>
  );
};
export default Hero;
