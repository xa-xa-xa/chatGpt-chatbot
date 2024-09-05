import { RefObject } from "react";

export const scrollToBottom = (container: RefObject<HTMLDivElement> | null) => {
  if (container) {
    const { scrollHeight, offsetHeight, scrollTop } =
      container.current as HTMLDivElement;
    if (scrollHeight >= scrollTop + offsetHeight) {
      container.current?.scrollTo(0, scrollHeight + 200);
    }
  }
};
