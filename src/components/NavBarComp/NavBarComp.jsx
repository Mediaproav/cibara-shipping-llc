"use client";
import React, { useState } from "react";
import Link from "next/link";

const index = () => {
  const links = [
    {
      id: 1,

      link: "home",
    },

    {
      id: 2,

      link: "about",
    },

    {
      id: 3,

      link: "portfolio",
    },

    {
      id: 4,

      link: "experience",
    },

    {
      id: 5,

      link: "contact",
    },
  ];

  return (
    <>
      <nav className="flex items-center flex-wrap bg-green-300 p-3 ">
        <Link href="/">
          <div className="inline-flex items-center p-2 mr-4 ">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-white h-8 w-8 mr-2"
            >
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              TalwindCSS
            </span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default index;
