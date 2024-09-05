/* eslint-disable react/display-name */
import Image from "next/image";
import { memo } from "react";

type ChatLineProps = {
  content: string;
  isUser: boolean;
  showEndLine: boolean;
};

const ChatLine = memo(({ content, isUser, showEndLine }: ChatLineProps) => {
  return (
    <div className="flex flex-col">
      <div
        className={`chat-line ${
          isUser ? "user-chat" : "ai-chat"
        } p-0 sm:p-4 flex`}
      >
        <Image
          className={`${
            isUser ? "mx-3 sm:mx-6 color-gray-600" : "ml-4 sm:ml-8"
          } self-start`}
          alt="avatar"
          src={`${!isUser ? "/logo.jpg" : "/generic-user-logo.png"}`}
          width={isUser ? 50 : 100}
          height={isUser ? 50 : 100}
        />
        <div className="flex items-center">
          <p className={`${isUser ? "text-gray-600" : ""}`}>{content}</p>
        </div>
      </div>
      {showEndLine && (
        <div className="w-96 h-1 mx-auto my-4 bg-slate-50 border-0 rounded md:my-1" />
      )}
    </div>
  );
});

export default ChatLine;
