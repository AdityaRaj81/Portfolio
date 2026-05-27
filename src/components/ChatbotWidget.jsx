import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle, Minimize2, Maximize2 } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi there! 👋 How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickResponses = {
    'hello': 'Hey! Welcome to my portfolio! 👋 Feel free to ask me anything about my projects, services, or let\'s connect!',
    'help': 'I can help you with:\n• Project inquiries\n• Service information\n• Contact details\n• Schedule a meeting\n\nWhat would you like to know?',
    'projects': 'I\'ve worked on various projects including web development, mobile apps, and cloud solutions. Check out the Projects page to see my work! 🚀',
    'services': 'I offer:\n✓ Web Development\n✓ Mobile Apps\n✓ UI/UX Design\n✓ Cloud Solutions\n✓ Consulting\n\nWould you like to discuss a project?',
    'contact': 'You can reach me through:\n📧 Email: Connect2RajAditya@gmail.com\n📱 Phone: +91 86510 65233\n💬 Or use the Contact page form!',
    'schedule': 'I\'d love to schedule a meeting! Visit my Calendly: calendly.com/aditya or fill out the contact form.',
    'hi': 'Hello! Welcome! 😊 How can I assist you?',
    'bye': 'Thanks for chatting! Have a great day! 👋',
    'thank': 'You\'re welcome! 😊 Feel free to reach out anytime!',
    'default': 'That\'s interesting! Feel free to ask me about my projects, services, or reach out through the contact form for more detailed discussions. How else can I help? 💬'
  };

  const findResponse = (userText) => {
    const text = userText.toLowerCase().trim();

    for (const [key, response] of Object.entries(quickResponses)) {
      if (text.includes(key)) {
        return response;
      }
    }

    return quickResponses.default;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = inputValue;
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInputValue('');

    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = findResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickQuestion = (question) => {
    setMessages(prev => [...prev, { type: 'user', text: question }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = findResponse(question);
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
    }, 800);
  };

  const clearChat = () => {
    setMessages([{ type: 'bot', text: 'Hi there! 👋 How can I help you today?' }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Chat Widget */}
      {isOpen && !isMinimized && (
        <div className="bg-bg-secondary/95 backdrop-blur-[10px] rounded-2xl border border-primary-500/30 shadow-[0_10px_40px_rgba(14,165,233,0.3)] overflow-hidden flex flex-col h-[500px] w-[380px] animate-[slideInUp_0.3s_ease]">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-accent-cyan p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-text-white">Chat with me!</h3>
              <p className="text-xs text-text-white/80">Usually replies instantly</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-all duration-300"
                title="Minimize"
              >
                <Minimize2 size={16} className="text-text-white" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-all duration-300"
                title="Close"
              >
                <X size={16} className="text-text-white" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-bg-primary/30">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-[fadeInUp_0.3s_ease]`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm leading-relaxed ${msg.type === 'user'
                      ? 'bg-primary-500/30 border border-primary-500/50 text-text-primary rounded-br-none'
                      : 'bg-accent-cyan/20 border border-accent-cyan/30 text-text-primary rounded-bl-none'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && (
            <div className="border-t border-primary-500/20 p-3 space-y-2 bg-bg-primary/50">
              <p className="text-xs text-text-muted font-medium">Quick questions:</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleQuickQuestion('Tell me about your projects')}
                  className="text-xs px-2 py-1.5 bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/30 rounded-lg text-primary-400 transition-all duration-300"
                >
                  🚀 Projects
                </button>
                <button
                  onClick={() => handleQuickQuestion('What services do you offer')}
                  className="text-xs px-2 py-1.5 bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/30 rounded-lg text-primary-400 transition-all duration-300"
                >
                  ⚡ Services
                </button>
                <button
                  onClick={() => handleQuickQuestion('How can I contact you')}
                  className="text-xs px-2 py-1.5 bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/30 rounded-lg text-primary-400 transition-all duration-300"
                >
                  📧 Contact
                </button>
                <button
                  onClick={clearChat}
                  className="text-xs px-2 py-1.5 bg-accent-pink/20 hover:bg-accent-pink/30 border border-accent-pink/30 rounded-lg text-accent-pink transition-all duration-300"
                >
                  🔄 Clear
                </button>
              </div>
            </div>
          )}

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="border-t border-primary-500/20 p-3 bg-bg-primary/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 bg-bg-primary/50 border border-primary-500/30 rounded-lg text-sm text-text-white placeholder-text-muted focus:outline-none focus:border-accent-cyan transition-all duration-300"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="px-3 py-2 bg-primary-500/30 hover:bg-primary-500/50 border border-primary-500/50 rounded-lg text-primary-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                title="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Minimized State */}
      {isOpen && isMinimized && (
        <div className="bg-bg-secondary/95 backdrop-blur-[10px] rounded-2xl border border-primary-500/30 shadow-[0_10px_40px_rgba(14,165,233,0.3)] p-3 flex items-center justify-between w-[300px] animate-[slideInUp_0.3s_ease]">
          <div className="flex items-center gap-2">
            <MessageCircle size={16} className="text-primary-400" />
            <span className="text-sm font-medium text-text-white">Chat minimized</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsMinimized(false)}
              className="p-1 hover:bg-primary-500/20 rounded-lg transition-all duration-300"
              title="Maximize"
            >
              <Maximize2 size={14} className="text-primary-400" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-primary-500/20 rounded-lg transition-all duration-300"
              title="Close"
            >
              <X size={14} className="text-primary-400" />
            </button>
          </div>
        </div>
      )}

      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-text-white shadow-[0_5px_20px_rgba(14,165,233,0.4)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.5)] hover:scale-110 transition-all duration-300 animate-pulse"
          title="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatbotWidget;
