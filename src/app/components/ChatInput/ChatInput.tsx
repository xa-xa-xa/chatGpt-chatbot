type ChatInputProps = {
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
};

function ChatInput({ onSubmit, onChange, inputValue }: ChatInputProps) {
  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="flex">
        <input
          className="flex-grow mx-6 p-4 border-t-2 border-gray-50 focus:outline-none"
          type="text"
          name="input-field"
          placeholder="Enter your prompt"
          onChange={onChange}
          value={inputValue}
        />
        <button
          type="submit"
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4"
        >
          {`>`}
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
