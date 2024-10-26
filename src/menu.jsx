import React, { useState } from "react";

export default function Menu() {
  let [mstatus, setMstatus] = useState(false);
  return (
    <div>
      <button onClick={() => setMstatus(!mstatus)}>
        {mstatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div
        className={`menu  h-[80vh] transition-[0.4s]  bg-yellow-300 text-left w-[80%] ${
          mstatus ? "ml-0" : "ml-[-100%]"
        }`}
      >
        <ul className="m-[20px] mt-[30px]">
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>support</li>
          <li>review</li>
        </ul>
      </div>
    </div>
  );
}
