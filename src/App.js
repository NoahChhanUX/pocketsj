import React, { useState } from 'react';
import './App.css';
import Collection from './Collection';
import EventDetailPage from './EventDetailPage';

// If you don't have lucide-react installed, we'll use simple HTML/SVG elements instead
// Import statements would look like this if you have lucide-react:
// import { MapPin, User, Layers, Search, Menu, Wifi, Battery } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('events');
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // Mock data for events
  const events = [
    {
      id: 1,
      title: 'Second Harvest Food Loader',
      date: 'Sat, May 10',
      timeStart: '10:30 am',
      timeEnd: '12:30 pm',
      location: '325 Marine View Ave',
      image: '/images/ChurchPic.jpeg', // Update with your image path
      description: 'Food types found here!',
      stats: [
        { percent: '66%', color: 'bg-gray-300' },
        { percent: '30%', color: 'bg-green-500' },
        { percent: '4%', color: 'bg-purple-500' }
      ]
    },
    {
      id: 2,
      title: 'Great American Litter Pickup',
      date: 'Sat, April 19',
      timeStart: '9:00 am',
      timeEnd: '11:00 am',
      location: 'Welch Park',
      image: '/images/welchpark.jpg', // Update with your image path
      description: 'Litter types found here!',
      stats: [
        { percent: '80%', color: 'bg-gray-300' },
        { percent: '15%', color: 'bg-blue-500' },
        { percent: '4%', color: 'bg-purple-500' },
        { percent: '1%', color: 'bg-orange-500' }
      ]
    },
    {
      id: 3,
      title: 'Downtown Cleanup Initiative',
      date: 'Sun, May 25',
      timeStart: '8:00 am',
      timeEnd: '12:00 pm',
      location: 'Downtown San Jose',
      image: '/images/CityShot.jpg', // Update with your image path
      description: 'City sprites found here!',
      stats: [
        { percent: '60%', color: 'bg-gray-300' },
        { percent: '25%', color: 'bg-blue-300' },
        { percent: '10%', color: 'bg-green-500' },
        { percent: '5%', color: 'bg-yellow-500' }
      ]
    }
  ];

  // Helper function to handle event click
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };
  
  // Helper function to go back to events list
  const handleBackToEvents = () => {
    setSelectedEvent(null);
  };

  // Helper function to convert Tailwind class names to actual colors
  function getColor(colorClass) {
    const colorMap = {
      'bg-gray-300': '#d1d5db',
      'bg-green-500': '#22c55e',
      'bg-purple-500': '#a855f7',
      'bg-blue-500': '#3b82f6',
      'bg-blue-300': '#93c5fd',
      'bg-orange-500': '#f97316',
      'bg-yellow-500': '#eab308'
    };
    return colorMap[colorClass] || '#d1d5db';
  }

  // Icon components (simplified versions if lucide-react is not available)
  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12"></line>
      <line x1="4" x2="20" y1="6" y2="6"></line>
      <line x1="4" x2="20" y1="18" y2="18"></line>
    </svg>
  );

  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
    </svg>
  );

  const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const LayersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
      <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 12.5"></path>
      <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 17.5"></path>
    </svg>
  );

  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const WifiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13a10 10 0 0 1 14 0"></path>
      <path d="M8.5 16.5a5 5 0 0 1 7 0"></path>
      <path d="M2 8.82a15 15 0 0 1 20 0"></path>
      <line x1="12" x2="12.01" y1="20" y2="20"></line>
    </svg>
  );

  const BatteryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect>
      <line x1="22" x2="22" y1="11" y2="13"></line>
      <line x1="6" x2="6" y1="11" y2="13"></line>
      <line x1="10" x2="10" y1="11" y2="13"></line>
      <line x1="14" x2="14" y1="11" y2="13"></line>
    </svg>
  );

  // Styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '16px',
      backgroundColor: '#f5f5f5'
    },
    phoneFrame: {
      position: 'relative',
      borderRadius: '40px',
      overflow: 'hidden',
      border: '8px solid black',
      backgroundColor: 'black',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    dynamicIsland: {
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '25%',
      height: '32px',
      backgroundColor: 'black',
      borderBottomLeftRadius: '16px',
      borderBottomRightRadius: '16px',
      zIndex: '50'
    },
    phoneScreen: {
      display: 'flex',
      flexDirection: 'column',
      height: '852px',
      width: '393px',
      backgroundColor: '#f9fafb'
    },
    statusBar: {
      backgroundColor: 'white',
      paddingTop: '8px',
      paddingBottom: '4px',
      paddingLeft: '20px',
      paddingRight: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: '10'
    },
    statusTime: {
      fontSize: '14px',
      fontWeight: '600'
    },
    statusIcons: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    searchContainer: {
      padding: '16px',
      backgroundColor: 'white'
    },
    searchBar: {
      backgroundColor: '#e5e7eb',
      borderRadius: '9999px',
      padding: '8px',
      display: 'flex',
      alignItems: 'center'
    },
    searchInput: {
      backgroundColor: 'transparent',
      flexGrow: '1',
      outline: 'none',
      fontSize: '14px',
      paddingLeft: '8px',
      paddingRight: '8px'
    },
    eventsList: {
      flexGrow: '1',
      overflowY: 'auto',
      padding: '16px',
      height: '680px',
      paddingBottom: '16px'
    },
    eventCard: {
      marginBottom: '24px',
      backgroundColor: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      cursor: 'pointer'
    },
    eventImageContainer: {
      position: 'relative'
    },
    eventImage: {
      width: '100%',
      height: '176px',
      objectFit: 'cover'
    },
    statsContainer: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      display: 'flex',
      gap: '4px'
    },
    statBadge: (color) => ({
      backgroundColor: getColor(color),
      color: 'white',
      fontSize: '10px',
      borderRadius: '50% / 60% 60% 40% 40%', // Egg shape with narrower top
      height: '30px',
      width: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '500',
      transform: 'rotate(0deg)' // No rotation - perfectly vertical
    }),
    statText: {
      fontSize: '10px',
      fontWeight: '600'
    },
    eventContent: {
      padding: '16px'
    },
    eventTitle: {
      fontSize: '18px',
      fontWeight: 'bold'
    },
    eventDetails: {
      fontSize: '14px',
      color: '#6b7280'
    },
    eventDescription: {
      marginTop: '4px',
      fontSize: '14px',
      color: '#4b5563'
    },
    navBar: {
      backgroundColor: 'white',
      borderTop: '1px solid #e5e7eb',
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: '8px',
      paddingBottom: '8px'
    },
    navButton: (isActive) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '4px',
      paddingBottom: '4px',
      color: isActive ? '#3b82f6' : '#9ca3af'
    }),
    navLabel: {
      fontSize: '12px',
      marginTop: '4px',
      fontWeight: '500'
    },
    homeIndicator: {
      backgroundColor: 'white',
      paddingTop: '4px',
      paddingBottom: '4px',
      display: 'flex',
      justifyContent: 'center'
    },
    homeIndicatorBar: {
      height: '4px',
      width: '33.333333%',
      backgroundColor: 'black',
      borderRadius: '9999px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.phoneFrame}>
        <div style={styles.dynamicIsland}></div>
  
        <div style={styles.phoneScreen}>
          {/* Status bar */}
          <div style={styles.statusBar}>
            <div style={styles.statusTime}>9:41</div>
            <div style={styles.statusIcons}>
              <WifiIcon />
              <BatteryIcon />
            </div>
          </div>
  
          {/* Main content */}
          {selectedEvent ? (
            <EventDetailPage event={selectedEvent} onBack={handleBackToEvents} />
          ) : (
            <>
              {/* Only show search bar and events if activeTab is 'events' */}
              {activeTab === 'events' && (
                <>
                  {/* Search bar */}
                  <div style={styles.searchContainer}>
                    <div style={styles.searchBar}>
                      <div style={{ marginLeft: '8px', marginRight: '8px', color: '#6b7280' }}>
                        <MenuIcon />
                      </div>
                      <input
                        type="text"
                        placeholder="Opportunities near you..."
                        style={styles.searchInput}
                        readOnly
                      />
                      <div style={{ marginLeft: '8px', marginRight: '8px', color: '#6b7280' }}>
                        <SearchIcon />
                      </div>
                    </div>
                  </div>
  
                  {/* Events list */}
                  <div style={styles.eventsList}>
                    {events.map((event) => (
                      <div
                        key={event.id}
                        style={styles.eventCard}
                        onClick={() => handleEventClick(event)}
                      >
                        <div style={styles.eventImageContainer}>
                          <img
                            src={event.image}
                            alt={event.title}
                            style={styles.eventImage}
                          />
                          <div style={styles.statsContainer}>
                            {event.stats.map((stat, index) => (
                              <div key={index} style={styles.statBadge(stat.color)}>
                                <span style={styles.statText}>{stat.percent}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div style={styles.eventContent}>
                          <h3 style={styles.eventTitle}>{event.title}</h3>
                          <p style={styles.eventDetails}>
                            {event.date} · {event.timeStart} - {event.timeEnd} · {event.location}
                          </p>
                          <p style={styles.eventDescription}>{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
  
              {/* Only show Collection screen if activeTab is 'collection' */}
              {activeTab === 'collection' && (
                <Collection />
              )}
  
              {/* Future: Profile screen would go here if needed */}
            </>
          )}
  
          {/* Navigation bar */}
          <div style={styles.navBar}>
            <button
              style={styles.navButton(activeTab === 'events')}
              onClick={() => setActiveTab('events')}
            >
              <MapPinIcon />
              <span style={styles.navLabel}>Events</span>
            </button>
            <button
              style={styles.navButton(activeTab === 'collection')}
              onClick={() => setActiveTab('collection')}
            >
              <LayersIcon />
              <span style={styles.navLabel}>Collection</span>
            </button>
            <button
              style={styles.navButton(activeTab === 'profile')}
              onClick={() => setActiveTab('profile')}
            >
              <UserIcon />
              <span style={styles.navLabel}>Profile</span>
            </button>
          </div>
  
          {/* Home indicator */}
          <div style={styles.homeIndicator}>
            <div style={styles.homeIndicatorBar}></div>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default App;