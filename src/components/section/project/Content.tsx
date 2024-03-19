import React from "react";

type Props = {
  heading: string;
  body: string;
  img?: string;
  className?: string;
  children?: React.ReactNode;
};

const Content: React.FC<Props> = ({ heading, body, img, className }) => {
  return (
    <section className={`${className} animate-content px-3`}>
      <div className={`pt-28 pb-14 space-y-24`}>
        <div className={`grid md:grid-cols-10 grid-cols-1 gap-8`}>
          <h1 className={`col-span-4`}>{heading}</h1>
          <div className={`col-span-6`}>
            {body.split("\n").map((paragraph, index) => (
              <>
                <h3 key={index}>{paragraph}</h3>
                <br />
              </>
            ))}
          </div>
        </div>
        <img src={img} />
      </div>
    </section>
  );
};
export default Content;
