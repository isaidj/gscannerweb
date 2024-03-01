"use client";
import { PcIcon } from "@/assets/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ButtonDownloadS3File = () => {
  const downloadUrlFile = async (url: string, filename: string) => {
    const response = await toast.promise(
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          const blobUrl = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = blobUrl;
          a.download = filename;
          a.click();
        })
        .catch((error) => {
          console.error("Error:", error);
        }),
      {
        pending: "Downloading...",
        success: "Downloaded!",
        error: "Error downloading",
      }
    );

    return response;
  };
  return (
    <>
      <button
        className="bg-zinc-900  rounded-lg flex items-center gap-2 p-1 px-2 hover:bg-zinc-800 hover:translate-y-0.5 shadow-xl transition-all duration-300 "
        onClick={() => {
          // getObject();
          downloadUrlFile(
            "https://silvia-tcherassi.s3.amazonaws.com/GScanner_Desktop.exe",
            "GScanner_Desktop.exe"
          );
        }}
      >
        <PcIcon className="w-10   h-10 p-0 m-0" />
        Download for PC (Windows)
      </button>
      <ToastContainer style={{ position: "absolute", top: "0", right: "0" }} />
    </>
  );
};
export default ButtonDownloadS3File;
