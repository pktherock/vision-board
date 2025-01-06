import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import VisionBoardCarousel from "./components/VisionBoardCarousel";
import VisionBoard from "@/components/VisionBoard";

import "./App.css";
import { useState } from "react";

function App() {
  const [changeBoardLook, setChangeBoardLook] = useState(false);

  return (
    <div className="w-full bg-slate-200">
      <div className="flex justify-between bg-orange-300 px-4 sticky top-0 z-10">
        <div>
          <h1 className="text-2xl text-center p-2 font-bold font-mono">
            Vision Board 2025
          </h1>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="switch-mode"
            checked={changeBoardLook}
            onClick={() => setChangeBoardLook(!changeBoardLook)}
          />
          <Label htmlFor="switch-mode" className="cursor-pointer">
            Switch vision board look
          </Label>
        </div>
      </div>

      {changeBoardLook ? (
        <div className="px-5 mt-5">
          <VisionBoard />
        </div>
      ) : (
        <div className="flex justify-center">
          <VisionBoardCarousel />
        </div>
      )}
    </div>
  );
}

export default App;
