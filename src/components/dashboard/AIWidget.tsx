import React, { useState, useEffect } from 'react';
import { Bot, Lightbulb, RefreshCw } from 'lucide-react';

const AIWidget: React.FC = () => {
  const [currentTip, setCurrentTip] = useState(0);
  
  const tips = [
    {
      type: 'productivity',
      title: 'Daily Productivity Tip',
      content: 'Try the Pomodoro Technique: Work for 25 minutes, then take a 5-minute break. This helps maintain focus and prevents burnout.',
      icon: '🍅',
    },
    {
      type: 'motivation',
      title: 'Motivational Quote',
      content: '"The way to get started is to quit talking and begin doing." - Walt Disney',
      icon: '💪',
    },
    {
      type: 'wellness',
      title: 'Wellness Reminder',
      content: 'Take a moment to stretch your neck and shoulders. Simple desk exercises can prevent tension and improve circulation.',
      icon: '🧘‍♀️',
    },
    {
      type: 'collaboration',
      title: 'Team Collaboration Tip',
      content: 'Schedule brief daily check-ins with your team. Regular communication prevents misunderstandings and keeps everyone aligned.',
      icon: '🤝',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [tips.length]);

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  const current = tips[currentTip];

  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg text-white overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Bot className="w-5 h-5" />
            <h3 className="font-semibold">AI Assistant</h3>
          </div>
          <button
            onClick={nextTip}
            className="p-1 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-lg">{current.icon}</span>
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-medium">{current.title}</span>
          </div>
          <p className="text-sm leading-relaxed opacity-90">
            {current.content}
          </p>
        </div>

        <div className="flex justify-center mt-3 space-x-1">
          {tips.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTip(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentTip ? 'bg-white' : 'bg-white bg-opacity-40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIWidget;