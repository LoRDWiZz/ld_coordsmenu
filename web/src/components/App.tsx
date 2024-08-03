import React, { useState } from "react";
import "./App.css";
import { debugData } from "../utils/debugData";
import { fetchNui } from "../utils/fetchNui";
import { setClipboard } from '../utils/setClipboard';

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

interface ReturnData {
  value: string;
}

const App: React.FC = () => {
  
  const copyVector2 = () => {
    fetchNui<ReturnData>("copyVector2")
    .then((retData) => {
      const coords = JSON.stringify(retData)
      const coordsWQ = coords.replace(/\"/g, "")
      setClipboard(coordsWQ);
      console.log(coordsWQ);
    })
  }

  const copyVector3 = () => {
    fetchNui<ReturnData>("copyVector3")
    .then((retData) => {
      const coords = JSON.stringify(retData)
      const coordsWQ = coords.replace(/\"/g, "")
      setClipboard(coordsWQ);
      console.log(coordsWQ);
    })
  }

  const copyVector4 = () => {
    fetchNui<ReturnData>("copyVector4")
    .then((retData) => {
      const coords = JSON.stringify(retData)
      const coordsWQ = coords.replace(/\"/g, "")
      setClipboard(coordsWQ);
      console.log(coordsWQ);
    })
  }

  const copyHeading = () => {
    fetchNui<ReturnData>("copyHeading")
    .then((retData) => {
      const coords = JSON.stringify(retData)
      const coordsWQ = coords.replace(/\"/g, "")
      setClipboard(coordsWQ);
      console.log(coordsWQ);
    })
  }

  const closeMenu = () => {
    fetchNui("closeMenu")
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-[55%] w-[55%] p-6 flex flex-col justify-between rounded-2xl bg-[#1c2328]">
        <h2 className="text-4xl font-bold dark:text-white text-center">LD Coords Menu</h2>
        <br></br>
        <hr></hr>
        <br></br>
        <h5 className="text-xl dark:text-white text-center">Choose the format in which you would like to copy the coordinates.</h5>
        <br></br>
        <div className="inline-flex items-center justify-center">
          <button onClick={copyVector2} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Vector 2
          </button>
          <button onClick={copyVector3} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
            Vector 3
          </button>
          <button onClick={copyVector4} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
            Vector 4
          </button>
          <button onClick={copyHeading} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Heading
          </button>
        </div>
        <div className="flex justify-center">
          <button onClick={closeMenu} className="w-fit mt-10 mb-0 bg-red-500 hover:bg-red-600 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            <span>Close menu</span>
          </button>
        </div>
        <br></br>
        <p className="text-gray-500 dark:text-gray-400 text-center">This menu was created by L0rDw1z | Discord: l0rdw1z</p>
      </div>
    </div>
  );
};

export default App;
