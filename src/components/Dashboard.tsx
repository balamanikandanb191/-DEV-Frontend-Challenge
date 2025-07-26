import React from 'react';
import StatsCards from './dashboard/StatsCards';
import CompanyNews from './dashboard/CompanyNews';
import QuickAnnouncements from './dashboard/QuickAnnouncements';
import UpcomingEvents from './dashboard/UpcomingEvents';
import KPIDashboard from './dashboard/KPIDashboard';
import AIWidget from './dashboard/AIWidget';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
          <p className="text-gray-600 mt-1">Here's what's happening at TechCorp today</p>
        </div>
        <div className="text-sm text-gray-500 mt-2 sm:mt-0">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CompanyNews />
          <KPIDashboard />
        </div>
        
        <div className="space-y-6">
          <AIWidget />
          <QuickAnnouncements />
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;