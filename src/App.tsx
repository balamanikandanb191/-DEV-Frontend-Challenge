import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TeamDirectory from './components/TeamDirectory';
import EventsCalendar from './components/EventsCalendar';
import AIAssistant from './components/AIAssistant';

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'team':
        return <TeamDirectory />;
      case 'events':
        return <EventsCalendar />;
      case 'assistant':
        return <AIAssistant />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setSidebarOpen={setSidebarOpen} />
      
      <div className="flex">
        <Sidebar 
          activeView={activeView} 
          setActiveView={setActiveView}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />
        
        <main className="flex-1 lg:ml-64 pt-16">
          <div className="p-4 sm:p-6 lg:p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;