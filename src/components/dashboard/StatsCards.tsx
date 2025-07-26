import React from 'react';
import { Users, MessageCircle, CheckCircle, TrendingUp } from 'lucide-react';

const StatsCards: React.FC = () => {
  const stats = [
    {
      title: 'Active Employees',
      value: '247',
      change: '+12%',
      positive: true,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Messages Today',
      value: '1,423',
      change: '+8%',
      positive: true,
      icon: MessageCircle,
      color: 'bg-green-500',
    },
    {
      title: 'Tasks Completed',
      value: '89',
      change: '+15%',
      positive: true,
      icon: CheckCircle,
      color: 'bg-purple-500',
    },
    {
      title: 'Productivity',
      value: '94%',
      change: '+3%',
      positive: true,
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs last week</span>
                </div>
              </div>
              <div className={`${stat.color} rounded-lg p-3`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;