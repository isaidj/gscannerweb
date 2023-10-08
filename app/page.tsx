import Image from "next/image";
import icon from "../public/icon.png";
import { AppStoreIcon, PcIcon, PlaystoreIcon } from "@/assets/Icons";
import Link from "next/link";
import banner from "../public/banner.png";
import ButtonDownloadS3File from "@/components/ButtonDownloadS3File";

export default function Home() {
  return (
    <main className="flex text-white min-h-screen flex-col items-center bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 md:p-24 md:bg-gradient-to-r md:from-slate-900 md:via-sky-950 md:to-slate-900 gap-4 font-roboto ">
      <div className="flex flex-col items-center  h-full z-10">
        <h1 className="text-4xl font-bold mt-8">G-Scanner</h1>
        <p className="text-lg text-center mt-4">
          Modern barcode reader, designed to speed up product scanning. Forget
          plastic scanners.
        </p>

        <div className=" flex justify-center mt-4 z-10">
          <Image src={banner} alt="desktop" className="rounded-lg w-2/3 z-10" />
        </div>

        <Link
          href="/#"
          className="mt-8 flex items-center gap-2 cursor-not-allowed"
          aria-disabled="true"
        >
          <ButtonDownloadS3File />
        </Link>
        <div className=" w-full h-px  mt-8 md:block  bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="mt-8 flex flex-col gap-4 items-center">
          <Link
            href="https://play.google.com/store/apps/details?id=com.isaidj.automatescanapp&pcampaignid=web_share"
            className="bg-zinc-900  rounded-lg flex items-center gap-2 p-1 px-2 hover:bg-zinc-800 hover:translate-y-0.5 shadow-xl transition-all duration-300 "
          >
            <PlaystoreIcon className="w-10   h-10 p-0 m-0" />
            Download on Playstore
          </Link>

          <Link
            href="/#"
            className="relative bg-zinc-900  rounded-lg flex items-center gap-2 p-1 px-2 hover:bg-zinc-800 text-gray-500"
          >
            <p
              className="absolute mr-1 right-0 top-0  w-fit"
              style={{ fontSize: "0.5rem" }}
            >
              Coming soon
            </p>
            <AppStoreIcon className="w-10   h-10 p-0 m-0" />
            Download on Appstore
          </Link>
        </div>
        <p className="mt-8 text-gray-400 text-sm">
          @2023 G-Scanner. All rights reserved.
        </p>
      </div>
      <div className="absolute bg-gradient-radial-center w-96 h-96 z-0"></div>
    </main>
  );
}
