import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

export default function Todos() {
  let [task, setTask] = useState("");
  let [show, setShow] = useState([]);

  let disp = () => {
    if (task.trim() !== "") {
      let store = [...show, task];
      setShow(store);
      setTask(""); // Clear the input after adding the task
    }
  };

  let getval = (event) => {
    setTask(event.target.value);
  };

  let delt = (index) => {
    let filterdata = show.filter((_, id) => id !== index);
    setShow(filterdata);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Task Manager
        </h1>
        <div className="flex mb-6">
          <input
            type="text"
            value={task}
            placeholder="Enter task"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300"
            onChange={getval}
          />
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-r-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300"
            onClick={disp}
          >
            Add
          </button>
        </div>

        {/* Displaying the tasks */}
        {show.length > 0 ? (
          <ul className="space-y-3">
            {show.map((curr, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gradient-to-r from-purple-100 to-blue-100 border border-gray-300 rounded-lg px-4 py-2 shadow-md"
              >
                <span className="text-gray-700">{curr}</span>
                <button
                  onClick={() => delt(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <FaTrashCan className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No tasks added yet.</p>
        )}
      </div>
    </div>
  );
}
