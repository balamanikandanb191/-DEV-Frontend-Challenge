import React, { useState } from 'react';
import { Search, Filter, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const TeamDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const employees = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Chief Executive Officer',
      department: 'Executive',
      email: 'sarah.mitchell@techcorp.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'online',
    },
    {
      id: 2,
      name: 'Alex Johnson',
      role: 'Senior Software Engineer',
      department: 'Engineering',
      email: 'alex.johnson@techcorp.com',
      phone: '+1 (555) 234-5678',
      location: 'Austin, TX',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'online',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Chief Technology Officer',
      department: 'Engineering',
      email: 'emily.rodriguez@techcorp.com',
      phone: '+1 (555) 345-6789',
      location: 'Seattle, WA',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'away',
    },
    {
      id: 4,
      name: 'Michael Chen',
      role: 'HR Director',
      department: 'Human Resources',
      email: 'michael.chen@techcorp.com',
      phone: '+1 (555) 456-7890',
      location: 'New York, NY',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'online',
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Marketing Manager',
      department: 'Marketing',
      email: 'lisa.park@techcorp.com',
      phone: '+1 (555) 567-8901',
      location: 'Los Angeles, CA',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'offline',
    },
    {
      id: 6,
      name: 'David Wilson',
      role: 'Product Designer',
      department: 'Design',
      email: 'david.wilson@techcorp.com',
      phone: '+1 (555) 678-9012',
      location: 'Chicago, IL',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'online',
    },
  ];

  const departments = ['all', 'Executive', 'Engineering', 'Human Resources', 'Marketing', 'Design'];

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || employee.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-400';
      case 'away': return 'bg-yellow-400';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Team Directory</h1>
        <p className="text-gray-600 mt-2">Connect with your colleagues across the organization</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <img
                  src={employee.avatar}
                  alt={employee.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${getStatusColor(employee.status)} rounded-full border-2 border-white`}></div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{employee.name}</h3>
                <p className="text-sm text-gray-600 truncate">{employee.role}</p>
                <p className="text-xs text-gray-500">{employee.department}</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="truncate">{employee.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{employee.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{employee.location}</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>Chat</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">👥</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No employees found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default TeamDirectory;