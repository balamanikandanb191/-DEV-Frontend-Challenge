import React from 'react';
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';

const KPIDashboard: React.FC = () => {
  const kpis = [
    {
      name: 'Revenue',
      current: '$2.4M',
      target: '$2.2M',
      progress: 109,
      trend: 'up',
      change: '+12%',
    },
    {
      name: 'Customer Satisfaction',
      current: '94%',
      target: '90%',
      progress: 104,
      trend: 'up',
      change: '+4%',
    },
    {
      name: 'Project Completion',
      current: '87%',
      target: '95%',
      progress: 92,
      trend: 'down',
      change: '-3%',
    },
    {
      name: 'Employee Engagement',
      current: '91%',
      target: '85%',
      progress: 107,
      trend: 'up',
      change: '+6%',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-indigo-500" />
          <h2 className="text-xl font-bold text-gray-900">Company KPIs</h2>
        </div>
        <p className="text-gray-600 text-sm mt-1">Real-time performance metrics</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kpis.map((kpi, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">{kpi.name}</h3>
                <div className={`flex items-center space-x-1 ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{kpi.change}</span>
                </div>
              </div>
              
              <div className="flex items-end justify-between mb-2">
                <span className="text-2xl font-bold text-gray-900">{kpi.current}</span>
                <span className="text-sm text-gray-500">Target: {kpi.target}</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    kpi.progress >= 100 ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                  style={{ width: `${Math.min(kpi.progress, 100)}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">Progress</span>
                <span className={`text-xs font-medium ${kpi.progress >= 100 ? 'text-green-600' : 'text-blue-600'}`}>
                  {kpi.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KPIDashboard;