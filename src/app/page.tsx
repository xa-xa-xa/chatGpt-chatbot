"use client";
import Image from "next/image";
import Chat from "./components/Chat/Chat";

export default function Home() {
  return (
    <main className="App  min-h-screen">
      <div className="flex flex-col p-1 sm:p-8 mb-10 items-center justify-center">
        <div className="flex mb-8 items-center">
          <Image
            src="/logo.jpg"
            alt="chat.ai logo"
            width={50}
            height={50}
            className="mr-4 rounded-full"
          />
          <h2 className="text-2xl">
            Talk to{" "}
            <span className="text-slate-700 font-semibold">
              AI Code Master!
            </span>
          </h2>
        </div>
        <Chat />
      </div>
    </main>
  );
}
