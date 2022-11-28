import React from "react";
import Image from "next/image";
import { Contact as ContactIcon, Mail as MailIcon } from "lucide-react";

import Platform from "../Platform";

export default function ContactCard() {
  const circuitBoardSvg = "/assets/circuit-board.svg";

  return (
    // TODO: Edit top margin when more content is added
    <Platform className="mt-20">
      <div id="contact" />
      <div className="block justify-between md:flex">
        <div className="mb-1 md:mb-0">
          <h1 className="font-semibold text-neutral-500">Contact</h1>
        </div>
        <div className="w-full max-w-md rounded-md bg-gradient-to-r from-blue-600 to-cyan-400 p-0.5 shadow-xl shadow-gray-200">
          <div className="rounded bg-gradient-to-r from-white via-white to-white/80 bg-repeat p-2 px-4 backdrop-blur-md">
            <h1 className="text-xl font-bold">Chad Fernandez</h1>
            <p className="text-sm text-neutral-700">(Fullstack Developer)</p>
            <p className="mt-8 text-neutral-700">
              <a href="http://chadfernandez.me">chadfernandez.me</a>
            </p>
            <p className="align-middle text-neutral-700">
              {/* <MailIcon className="inline-block h-4 w-4 stroke-neutral-500" />{" "} */}
              <a href="mailto:contact@chadfernandez.me">
                contact@chadfernandez.me
              </a>
            </p>
            {/* Use /assets/circuit-board.svg as background image */}
          </div>
        </div>
      </div>
    </Platform>
  );
}
