"use client";

import { useState, useRef, useEffect } from "react";
import ChatIcon from "./icons/chat-icon";
import { X } from "lucide-react";
// import Image from "next/image";
import { useAiChatBotMutation } from "@/services/chat-api";

type ChatMessage = {
  id: string | number;
  author: "bot" | "user";
  text: string;
  time?: string;
  avatarUrl?: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(defaultMessages);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const [aiChatBot, { isLoading }] = useAiChatBotMutation();

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const nowLabel = new Date()
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    .toLowerCase();

  async function sendMessage() {
    const text = input.trim();
    if (!text) return;

    // add user message
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        author: "user",
        text,
        time: nowLabel,
        avatarUrl: "https://i.pravatar.cc/80?img=47",
      },
    ]);
    setInput("");

    try {
      const res = await aiChatBot({ message: text }).unwrap();
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          author: "bot",
          text: res.reply ?? "⚠️ No response from server",
          time: nowLabel,
        },
      ]);
    } catch (_err) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          author: "bot",
          text: "❌ Sorry, something went wrong.",
          time: nowLabel,
        },
      ]);
    }
  }

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {open && (
        <div className="w-[360px] max-w-[92vw] shadow-2xl rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
          {/* Header */}
          <div className="bg-custom-gradient p-4 text-white flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">
                I’m G4f AI! <span>👋</span>
              </h3>
              <p className="text-sm text-white/80">How can I help you?</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="max-h-[420px] text-xs overflow-y-auto p-4 space-y-4 bg-neutral-900"
          >
            {messages.map((m) => (
              <MessageBubble key={m.id} msg={m} />
            ))}
            {isLoading && (
              <div className="text-white/60 text-sm">Bot is typing...</div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-white/10 bg-neutral-900/90 p-3 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type here..."
              className="flex-1 bg-neutral-800 text-white placeholder:text-white/40 rounded-full px-4 py-3 outline-none focus:ring-2 ring-rose-400/40"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading}
              className="p-3 rounded-full bg-custom-gradient text-white shadow-lg hover:opacity-90 disabled:opacity-50"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12L21 3L14 21L11 13L3 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full p-4 shadow-2xl bg-custom-gradient text-white"
        >
          <ChatIcon />
        </button>
      )}
    </div>
  );
}

function MessageBubble({ msg }: { msg: ChatMessage }) {
  const isUser = msg.author === "user";
  
  const formatMessage = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, i) => {
      // Check for headers (lines ending with :)
      if (line.trim().endsWith(':') && !line.startsWith('-') && !line.match(/^\d+\./)) {
        return (
          <div key={i} className="font-semibold text-white mt-3 mb-1">
            {line}
          </div>
        );
      }
      
      // Check for numbered lists
      if (line.match(/^\d+\.\s/)) {
        const content = line.replace(/^\d+\.\s/, '');
        return (
          <div key={i} className="ml-2 mb-1 flex gap-2">
            <span className="text-rose-400 font-semibold">•</span>
            <span>{formatInlineStyles(content)}</span>
          </div>
        );
      }
      
      // Check for bullet points
      if (line.startsWith('-')) {
        const content = line.replace(/^-\s*/, '');
        return (
          <div key={i} className="ml-4 mb-1 flex gap-2">
            <span className="text-rose-400 text-xs mt-1">▸</span>
            <span>{formatInlineStyles(content)}</span>
          </div>
        );
      }
      
      // Regular text
      if (line.trim()) {
        return (
          <div key={i} className="mb-2">
            {formatInlineStyles(line)}
          </div>
        );
      }
      
      return <div key={i} className="h-2" />;
    });
  };
  
  const formatInlineStyles = (text: string) => {
    // Format **bold** text
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-bold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };
  
  return (
    <div className={`flex items-start gap-2 ${isUser ? "justify-end" : ""}`}>
      {!isUser && (
        <div className="h-8 w-8 rounded-full bg-neutral-800 grid place-items-center text-white/60 border border-white/10 flex-shrink-0">
          🤖
        </div>
      )}
      <div className={`max-w-[85%] ${isUser ? "text-right" : ""}`}>
        <div
          className={
            isUser
              ? "rounded-2xl px-4 py-3 text-white bg-custom-gradient shadow-md"
              : "rounded-2xl px-4 py-3 text-white/90 bg-neutral-800 border border-white/10"
          }
        >
          {isUser ? msg.text : formatMessage(msg.text)}
        </div>
        <div className="mt-1 text-[10px] text-white/40">{msg.time}</div>
      </div>
      {/* {isUser && (
        <Image
          width={100}
          height={100}
          src={msg.avatarUrl ?? "https://i.pravatar.cc/80?img=47"}
          alt="avatar"
          className="h-8 w-8 rounded-full object-cover border border-white/10"
        />
      )} */}
    </div>
  );
}

const defaultMessages: ChatMessage[] = [
  {
    id: 1,
    author: "bot",
    text: "Hello, I'm G4f AI! 👋\nI'm your personal chat assistant. How can I help you?",
    time: "09:00pm",
  },
];
