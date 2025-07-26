import React, { useState } from 'react';
import { Bot, Send, Lightbulb, TrendingUp, Heart, Briefcase } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your Smart Office AI Assistant. I'm here to help you with productivity tips, motivational quotes, wellness advice, and workplace insights. What would you like help with today?",
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickActions = [
    { icon: Lightbulb, label: 'Productivity Tips', action: 'productivity' },
    { icon: Heart, label: 'Wellness Advice', action: 'wellness' },
    { icon: TrendingUp, label: 'Motivation', action: 'motivation' },
    { icon: Briefcase, label: 'Work-Life Balance', action: 'balance' },
  ];

  const aiResponses = {
    productivity: [
      "Here's a great productivity tip: Try the 2-minute rule - if a task takes less than 2 minutes to complete, do it immediately rather than adding it to your to-do list. This prevents small tasks from accumulating and becoming overwhelming.",
      "Consider using time-blocking in your calendar. Dedicate specific time slots to different types of work - deep focus work in the morning when you're fresh, meetings in the afternoon, and administrative tasks at the end of the day.",
      "The Eisenhower Matrix can help prioritize tasks: Urgent & Important (do first), Important but not Urgent (schedule), Urgent but not Important (delegate), Neither (eliminate)."
    ],
    wellness: [
      "Remember to take regular breaks! The 20-20-20 rule is great for eye health: every 20 minutes, look at something 20 feet away for 20 seconds. This helps reduce eye strain from screen time.",
      "Stay hydrated throughout the day. Keep a water bottle at your desk and aim for 8 glasses of water daily. Proper hydration improves focus and energy levels.",
      "Consider doing desk stretches every hour: neck rolls, shoulder shrugs, and seated spinal twists can help prevent muscle tension and improve circulation."
    ],
    motivation: [
      "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" - Winston Churchill. Remember, every expert was once a beginner!",
      "\"The only way to do great work is to love what you do.\" - Steve Jobs. Find passion in your daily tasks, even the small ones.",
      "\"Progress, not perfection.\" Focus on making small improvements each day rather than trying to be perfect. Consistency beats intensity!"
    ],
    balance: [
      "Set clear boundaries between work and personal time. When you finish work, mentally 'close the office' by taking a short walk or doing a brief meditation to transition into personal time.",
      "Learn to say 'no' to non-essential commitments that don't align with your priorities. Your time and energy are valuable resources that should be protected.",
      "Schedule personal activities like you would work meetings. Block time for exercise, hobbies, and family - these aren't luxuries, they're necessities for long-term success."
    ]
  };

  const handleQuickAction = (action: string) => {
    const responses = aiResponses[action as keyof typeof aiResponses];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: `Give me advice about ${action}`,
      timestamp: new Date(),
    };

    const aiMessage = {
      id: messages.length + 2,
      type: 'ai',
      content: randomResponse,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage, aiMessage]);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    // Simple AI response logic
    let aiResponse = "I understand you're looking for help with that. While I'm a demo AI assistant, I'd recommend speaking with your HR team or checking our company resources for specific guidance.";
    
    if (inputMessage.toLowerCase().includes('productivity')) {
      const responses = aiResponses.productivity;
      aiResponse = responses[Math.floor(Math.random() * responses.length)];
    } else if (inputMessage.toLowerCase().includes('wellness') || inputMessage.toLowerCase().includes('health')) {
      const responses = aiResponses.wellness;
      aiResponse = responses[Math.floor(Math.random() * responses.length)];
    } else if (inputMessage.toLowerCase().includes('motivation') || inputMessage.toLowerCase().includes('inspire')) {
      const responses = aiResponses.motivation;
      aiResponse = responses[Math.floor(Math.random() * responses.length)];
    } else if (inputMessage.toLowerCase().includes('balance') || inputMessage.toLowerCase().includes('stress')) {
      const responses = aiResponses.balance;
      aiResponse = responses[Math.floor(Math.random() * responses.length)];
    }

    const aiMessage = {
      id: messages.length + 2,
      type: 'ai',
      content: aiResponse,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage, aiMessage]);
    setInputMessage('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Assistant</h1>
        <p className="text-gray-600 mt-2">Get personalized tips, motivation, and workplace guidance</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-semibold">Smart Office AI</h2>
              <p className="text-sm opacity-90">Your personal workplace assistant</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-b border-gray-100">
          <p className="text-sm text-gray-600 mb-3">Quick actions:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.action)}
                  className="flex flex-col items-center space-y-1 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Icon className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-medium text-gray-700">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything about productivity, wellness, or motivation..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;