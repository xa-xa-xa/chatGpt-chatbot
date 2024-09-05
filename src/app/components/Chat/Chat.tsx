import { scrollToBottom } from "@/app/utils/funcs";
import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import ChatInput from "../ChatInput/ChatInput";
import ChatLine from "../ChatLine/ChatLine";
import FinalMessages from "../FinalMessages/FinalMessages";

function Chat() {
  const { messages, handleInputChange, handleSubmit, input } = useChat({
    api: "/api/openai",
  });

  const chatContainer = useRef<HTMLDivElement>(null);
  const [streamingMessage, setSetstreamingMessage] = useState("");
  const [prevMessages, setPrevMessages] = useState(messages);
  const greatingMessage =
    "Hi! I'm the Code Master you were looking for! Ask me any code related question and I'll share my wisdom with you my little paddowan!";

  useEffect(() => {
    scrollToBottom(chatContainer);
  }, [prevMessages, streamingMessage]);

  useEffect(() => {
    if (messages.length > prevMessages.length) {
      setSetstreamingMessage(messages[messages.length - 1].content);
    }
  }, [messages]);

  useEffect(() => {
    if (messages.length > prevMessages.length) {
      const updatedPrevMessages = [
        ...prevMessages,
        ...messages.slice(prevMessages.length, messages.length - 1),
      ];

      setPrevMessages(updatedPrevMessages);
    }
  }, [messages.length]);

  return (
    <div className="w-full rounded-2xl bg-white border shadow-sm border-gray-50 overflow-hidden">
      <div
        className="h-[80vh] overflow-y-auto scroll-smooth "
        ref={chatContainer}
      >
        <div className="flex flex-col  px-12 py-4">
          {" "}
          <ChatLine
            key="greatingMessage"
            content={greatingMessage}
            isUser={false}
            showEndLine={false}
          />
          <FinalMessages messages={prevMessages} />
          {streamingMessage && (
            <ChatLine
              key="streaming"
              content={streamingMessage}
              isUser={false}
              showEndLine={false}
            />
          )}
        </div>
      </div>
      <ChatInput
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        inputValue={input}
      />
    </div>
  );
}

export default Chat;
