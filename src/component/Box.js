// Welcome to the TypeScript Playground, this is a website
// which gimport { useEffect, useState } from "react";
//import { useEffect,useState } from "react";
import React from "react";
const Box = ({ pos, knightPos, black, changeKnightPos, possible, }) => {
    const handleClick = () => {
        changeKnightPos(pos);
    };
    return (React.createElement("div", { className: `relative w-12 h-12 
        grid place-items-center
      ${knightPos === pos
            ? "bg-blue-600"
            : `${possible
                ? "border-4 border-green-600 bg-green-400"
                : `${black ? "bg-gray-500" : "bg-gray-50"}`}`}`, onClick: handleClick }, knightPos === pos && (React.createElement("div", { className: "text-gray-50 font-bold pointer-events-none border-2 rounded-full px-2 py-1" }, "K"))));
};
export default Box;
