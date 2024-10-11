import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../features/chatSlice";
import { RootState } from "../app/store";
import axios from "axios";

const Chat = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messages = useSelector((state: RootState) => state.chat.messages);
  const dispatch = useDispatch();

  const sendMessage = async () => {
    if (input.trim()) {
      dispatch(addMessage({ sender: "user", text: input }));
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:4000/api/chat", {
          message: input,
        });
        dispatch(addMessage({ sender: "ai", text: response.data.message }));
      } catch (error) {
        console.error("Error fetching AI response:", error);
      }
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className=" text-white py-4  px-4 text-center shadow-md bg-purple-700 ">
        <div className="flex items-center justify-center space-x-2">
          <i className="fas fa-comments"></i>
          <h1 className="text-lg cap uppercase font-semibold">Chat with AI</h1>
        </div>
      </div>
      <div className="p-4 bg-white text-center text-gray-700">
        <p className="text-md font-medium">
          Welcome to Bharat Gold Ornaments Pvt!
        </p>
      </div>
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <span
              className={`inline-block max-w-xs p-3 rounded-xl shadow-lg ${
                msg.sender === "user"
                  ? "bg-purple-700 text-white rounded-br-none"
                  : "bg-gray-300 text-black rounded-bl-none"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
        {loading && (
          <div className="mb-4 flex justify-start">
            <span className="inline-block max-w-xs p-3 rounded-xl shadow-lg bg-gray-300 text-black rounded-bl-none">
              ...
            </span>
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="p-4 bg-white shadow-inner flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-purple-700"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-purple-700 text-white rounded-full px-5 py-2 flex items-center space-x-2 hover:bg-purple-800"
        >
          <span>Send</span>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default Chat;
