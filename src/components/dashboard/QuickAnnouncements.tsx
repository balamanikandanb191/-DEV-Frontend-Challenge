import React from 'react';
import { Megaphone, Pin } from 'lucide-react';

const QuickAnnouncements: React.FC = () => {
  const announcements = [
    {
      id: 1,
      title: 'Office Closure - Holiday',
      message: 'Offices will be closed Dec 25-26 for the holidays. Enjoy time with family!',
      priority: 'high',
      time: '10 mins ago',
      pinned: true,
    },
    {
      id: 2,
      title: 'New Parking Regulations',
      message: 'Updated parking assignments effective next Monday. Check your email for details.',
      priority: 'medium',
      time: '2 hours ago',
      pinned: false,
    },
    {
      id: 3,
      title: 'Coffee Machine Maintenance',
      message: 'Level 3 coffee station will be under maintenance tomorrow 9-11 AM.',
      priority: 'low',
      time: '4 hours ago',
      pinned: false,
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <Megaphone className="w-5 h-5 text-orange-500" />
          <h3 className="text-lg font-semibold text-gray-900">Quick Announcements</h3>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                {announcement.pinned && <Pin className="w-4 h-4 text-blue-500" />}
                <h4 className="font-medium text-gray-900 text-sm">{announcement.title}</h4>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(announcement.priority)}`}>
                {announcement.priority}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{announcement.message}</p>
            <p className="text-xs text-gray-500">{announcement.time}</p>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All Announcements
        </button>
      </div>
    </div>
  );
};

export default QuickAnnouncements;