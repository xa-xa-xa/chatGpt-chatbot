import { Message } from "ai/react";
import { memo } from "react";
import ChatLine from "../ChatLine/ChatLine";

type FinalMessagesProps = {
  messages: Message[];
};

const FinalMessages = memo(({ messages }: FinalMessagesProps) => {
  return messages.map((message: Message, index: number) => {
    const isUser = message.role === "user";
    const showEndLine = index < messages.length - 1;

    return (
      <ChatLine
        key={index}
        content={message.content}
        isUser={isUser}
        showEndLine={showEndLine}
      />
    );
  });
});

// Add the displayName for better debugging
FinalMessages.displayName = "FinalMessages";

export default FinalMessages;
