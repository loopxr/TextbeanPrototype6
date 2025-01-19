import { Send } from 'lucide-react';

export default function TelegramDemo() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center p-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
          <Send className="w-6 h-6 text-white" />
        </div>
        <div className="ml-3">
          <h2 className="text-white font-semibold">Telegram Demo</h2>
          <p className="text-sm text-gray-400">Fast, secure messaging</p>
        </div>
      </div>
      
      <div className="flex-1 p-4 space-y-4 overflow-auto">
        <div className="chat-message-received">
          Welcome to Telegram Demo! 🚀
        </div>
        <div className="chat-message-received">
          Experience the speed and security of Telegram.
        </div>
        <div className="chat-message-sent">
          This looks great!
        </div>
      </div>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Message"
            className="flex-1 bg-white/10 rounded-full px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none"
          />
          <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}