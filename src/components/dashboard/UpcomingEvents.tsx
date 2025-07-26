import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'All-Hands Meeting',
      date: 'Dec 15',
      time: '10:00 AM',
      location: 'Conference Room A',
      attendees: 45,
      type: 'meeting',
    },
    {
      id: 2,
      title: 'Holiday Party',
      date: 'Dec 20',
      time: '6:00 PM',
      location: 'Main Lobby',
      attendees: 120,
      type: 'social',
    },
    {
      id: 3,
      title: 'Product Demo Day',
      date: 'Dec 22',
      time: '2:00 PM',
      location: 'Innovation Lab',
      attendees: 30,
      type: 'presentation',
    },
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-800';
      case 'social': return 'bg-green-100 text-green-800';
      case 'presentation': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-blue-500" />
          <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {events.map((event) => (
          <div key={event.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-gray-900">{event.title}</h4>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEventColor(event.type)}`}>
                {event.type}
              </span>
            </div>
            
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{event.date} at {event.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{event.attendees} attending</span>
              </div>
            </div>
            
            <button className="mt-3 w-full bg-blue-50 text-blue-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
              RSVP
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;