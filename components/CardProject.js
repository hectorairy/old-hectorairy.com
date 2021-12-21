import React from "react";
import { TextGradient } from "./TextGradient";
import { GoGithubAction, GoMarkGithub } from "react-icons/go";

export const CardProject = ({
  image,
  title,
  description,
  technologies,
  site,
  github,
}) => {
  return (
    <div class="w-56 mb-5 bg-white rounded-xl shadow-xl">
      <img
        src={`/images/${image}`}
        class="max-h-52 h-52 object-cover rounded-t-xl"
        alt=""
      />

      <div class="px-2 py-1 text-center">
        <div class="text-lg font-semibold pb-2">{title}</div>
        <p class="pb-2 text-sm md:text-sm text-gray-400">{description}</p>
        <TextGradient size={"text-xs"} pb="pb-2">
          {technologies}
        </TextGradient>
      </div>
      <div className="flex justify-evenly pb-5">
        {site && (
          <a href="https://fingame.app/" target={"_blank"} rel="noreferrer">
            <GoGithubAction className="text-2xl text-green-400" />{" "}
          </a>
        )}
        {github && (
          <a href={github} target={"_blank"} rel="noreferrer">
            <GoMarkGithub className="text-2xl text-sky-500" />
          </a>
        )}
      </div>
    </div>
  );
};
