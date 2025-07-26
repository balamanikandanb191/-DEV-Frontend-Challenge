import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Plus, Filter } from 'lucide-react';

const EventsCalendar: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'All-Hands Meeting',
      description: 'Quarterly company update and strategic planning session with leadership team.',
      date: '2024-12-15',
      time: '10:00 AM - 11:30 AM',
      location: 'Conference Room A',
      attendees: 45,
      organizer: 'Sarah Mitchell',
      type: 'meeting',
      status: 'confirmed',
    },
    {
      id: 2,
      title: 'Holiday Party',
      description: 'Annual company holiday celebration with dinner, drinks, and entertainment.',
      date: '2024-12-20',
      time: '6:00 PM - 10:00 PM',
      location: 'Main Lobby',
      attendees: 120,
      organizer: 'Michael Chen',
      type: 'social',
      status: 'confirmed',
    },
    {
      id: 3,
      title: 'Product Demo Day',
      description: 'Showcase latest product features and innovations to stakeholders and clients.',
      date: '2024-12-22',
      time: '2:00 PM - 4:00 PM',
      location: 'Innovation Lab',
      attendees: 30,
      organizer: 'Emily Rodriguez',
      type: 'presentation',
      status: 'confirmed',
    },
    {
      id: 4,
      title: 'Design Workshop',
      description: 'Collaborative design thinking session for Q1 product roadmap.',
      date: '2024-12-28',
      time: '9:00 AM - 12:00 PM',
      location: 'Creative Studio',
      attendees: 15,
      organizer: 'David Wilson',
      type: 'workshop',
      status: 'tentative',
    },
    {
      id: 5,
      title: 'New Year Team Lunch',
      description: 'Welcome back lunch for the team to kick off the new year.',
      date: '2025-01-03',
      time: '12:00 PM - 2:00 PM',
      location: 'Rooftop Terrace',
      attendees: 80,
      organizer: 'Lisa Park',
      type: 'social',
      status: 'confirmed',
    },
  ];

  const eventTypes = ['all', 'meeting', 'social', 'presentation', 'workshop'];

  const filteredEvents = events.filter(event => 
    selectedFilter === 'all' || event.type === selectedFilter
  );

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'social': return 'bg-green-100 text-green-800 border-green-200';
      case 'presentation': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'workshop': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-600';
      case 'tentative': return 'text-yellow-600';
      case 'cancelled': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Events Calendar</h1>
          <p className="text-gray-600 mt-2">Stay updated with upcoming company events and meetings</p>
        </div>
        <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Create Event</span>
        </button>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-gray-400" />
          <div className="flex flex-wrap gap-2">
            {eventTypes.map(type => (
              <button
                key={type}
                onClick={() => setSelectedFilter(type)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === type
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type === 'all' ? 'All Events' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                  <span className={`text-sm font-medium ${getStatusColor(event.status)}`}>
                    • {event.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
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
                
                <div className="mt-3 text-sm text-gray-500">
                  Organized by <span className="font-medium text-gray-700">{event.organizer}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row lg:flex-col space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-0 lg:space-y-2 mt-4 lg:mt-0 lg:ml-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  RSVP
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📅</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-600">Try adjusting your filter or check back later for new events</p>
        </div>
      )}
    </div>
  );
};

export default EventsCalendar;