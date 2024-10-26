import React, { useState } from "react";

export default function State() {
  let [btn, setBtn] = useState();
  let disp = () => {
    setBtn(!btn);
  };
  return (
    <div className="w-[600px] m-auto bg-green-600  justify-center">
      <button onClick={disp}>
        {btn ? <p>show</p> : <p className="text-danger">hide</p>}
      </button>
      <p>
        {btn ? (
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            expedita reiciendis molestiae, aperiam consectetur nihil libero
            soluta illo esse quis a, corporis minus alias inventore? Ad eos
            maiores sit quis!
          </h1>
        ) : (
          <h1></h1>
        )}
      </p>
    </div>
  );
}
