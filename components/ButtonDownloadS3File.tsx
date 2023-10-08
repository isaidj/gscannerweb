"use client";
import { PcIcon } from "@/assets/Icons";
// import downloadUrlFile, { getObject } from "../utils/downloadUrlFile";

export const ButtonDownloadS3File = () => {
  return (
    <button
      className="bg-zinc-900  rounded-lg flex items-center gap-2 p-1 px-2 hover:bg-zinc-800 hover:translate-y-0.5 shadow-xl transition-all duration-300 cursor-not-allowed"
      onClick={() => {
        // getObject();
        console.log("download");
      }}
    >
      <PcIcon className="w-10   h-10 p-0 m-0" />
      Download for PC (Windows)
    </button>
  );
};
export default ButtonDownloadS3File;
