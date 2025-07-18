import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

function Experience() {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex-wrap"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center ">
              <a
                href={card.view}
                target="_blank"
                className="flex lg:text-xl md:text-xs text-sm text-purple pb-2"
              >
                Check
              </a>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </div>

          </Button>
        ))}
      </div>
    </div>
  );
}

export default Experience;
