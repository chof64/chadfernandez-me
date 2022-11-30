import React from "react";

import Platform from "../Platform";
import { classMerge } from "/src/utils/classMerge";

export default function ContactCard({ className }) {
  const circuitBoardSvg = "/assets/circuit-board.svg";

  return (
    // TODO: Edit top margin when more content is added
    <Platform className={classMerge("", className)}>
      <div id="contact" />
      <div className="block justify-between md:flex">
        <div className="mb-1 md:mb-0">
          <h1 className="font-semibold text-neutral-500">Contact</h1>
        </div>
        <div className="w-full max-w-md rounded-md bg-gradient-to-r from-blue-600 to-cyan-400 p-0.5 shadow-xl shadow-gray-200">
          <div className="relative rounded bg-gradient-to-r from-white via-white to-white/80 bg-repeat p-2 px-4 backdrop-blur-md">
            <h1 className="text-2xl font-bold">Chad Fernandez</h1>
            <p className="text-sm font-light text-neutral-700">
              (Fullstack Developer)
            </p>
            <div className="mt-16">
              <p className="align-middle text-neutral-700">
                {/* <MailIcon className="inline-block h-4 w-4 stroke-neutral-500" />{" "} */}
                <a href="mailto:contact@chadfernandez.me">
                  contact@chadfernandez.me
                </a>
              </p>
            </div>
            <p className="absolute bottom-0 right-2 text-xs text-neutral-700">
              <a href="http://chadfernandez.me">chadfernandez.me</a>
            </p>
          </div>
        </div>
      </div>
    </Platform>
  );
}
