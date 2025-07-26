import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const CompanyNews: React.FC = () => {
  const news = [
    {
      id: 1,
      title: 'Q4 Results Exceed Expectations',
      summary: 'TechCorp announces record-breaking quarterly results with 35% growth in revenue and successful product launches.',
      author: 'Sarah Mitchell',
      role: 'CEO',
      time: '2 hours ago',
      category: 'Company Updates',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      title: 'New Remote Work Policy Updates',
      summary: 'Enhanced flexible work arrangements now available for all employees, including hybrid options and wellness benefits.',
      author: 'Michael Chen',
      role: 'HR Director',
      time: '5 hours ago',
      category: 'HR & Benefits',
      image: 'https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      title: 'Innovation Lab Grand Opening',
      summary: 'Our new state-of-the-art innovation center opens next month, featuring AI research facilities and collaborative spaces.',
      author: 'Dr. Emily Rodriguez',
      role: 'CTO',
      time: '1 day ago',
      category: 'Innovation',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Company News</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {news.map((article) => (
          <div key={article.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex space-x-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.time}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {article.summary}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">{article.author}</span>
                  <span className="mx-1">•</span>
                  <span>{article.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyNews;