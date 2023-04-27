import React from "react";
import Button from "../../Shared/Button/Button";

const FAQ = () => {
  return (
    <section className="bg-bgColor">
      <div className="widthClass container mx-auto grid grid-cols-1 lg:grid-cols-3  py-4 md:py-24">
        <div className="col-spam-1">
          <p className="py-3 text-blue text-sm font-bold tracking-wider  uppercase">
            Answer To
          </p>
          <h2 className=" text-4xl font-bold leading-none  sm:text-4xl">
            Frequently Asked <br /> <span>Questions</span>
          </h2>
          <p className="my-8 w-[420px]">
            There are many variation of passage of lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
          <Button btnText={"Contact Us"}></Button>
        </div>
        <div className="col-span-2 flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Optio maiores eligendi molestiae totam dolores similique?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                neque in fugiat magni, quas animi enim veritatis deleniti ex.
                Impedit.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Modi dolorem veritatis culpa quos consequuntur beatae itaque
              excepturi perspiciatis?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                aspernatur quae, eos explicabo odit minima libero veniam
                similique quibusdam doloribus facilis ipsa accusantium vel
                maiores corrupti! Libero voluptate a doloribus?
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Magni reprehenderit possimus debitis?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                voluptates aspernatur dolores in consequatur doloremque
                inventore reprehenderit, consequuntur perspiciatis architecto.
              </p>
              <p>
                Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                autem eaque unde possimus quae.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
