import React from 'react';
import { ArrowLeft, Share2 } from 'lucide-react';

const EventDetailPage = ({ event, onBack }) => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with back button */}
      <div className="bg-white pt-2 pb-1 px-5 flex justify-between items-center border-b">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-2">
            <ArrowLeft size={20} />
          </button>
          <span className="text-lg font-semibold">Events</span>
        </div>
      </div>
      
      {/* Organization Logo and Title Section */}
      <div className="px-6 pt-6 pb-2 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-36 h-36 rounded-full bg-orange-400 flex items-center justify-center">
            {event.id === 1 && (
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM15.5 8C16.3 8 17 8.7 17 9.5V11H7V9.5C7 8.7 7.7 8 8.5 8H15.5Z" fill="white"/>
                <path d="M12 12C13.1 12 14 12.9 14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 10.9 12 12 12ZM15.5 18C16.3 18 17 18.7 17 19.5V21H7V19.5C7 18.7 7.7 18 8.5 18H15.5Z" fill="white"/>
              </svg>
            )}
          </div>
        </div>
        <h1 className="text-2xl text-green-900 font-bold uppercase tracking-wide">SECOND HARVEST</h1>
        <p className="text-lg text-green-900 font-medium italic">of SILICON VALLEY</p>
      </div>
      
      {/* Event Details */}
      <div className="px-6">
        <h2 className="text-xl text-green-800 font-bold mb-1">
          {event.id === 1 ? 'Food Loader - SVDP St. Mark Home Delivery' : event.title}
        </h2>
        
        {/* Date and Time */}
        <div className="flex items-start mb-2">
          <svg className="w-5 h-5 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span>
            May 10, 2025 at 10:30 AM PST — May 10, 2025 at 12:30 PM PST
          </span>
        </div>
        
        {/* Event Type Tag */}
        <div className="mb-4">
          <span className="inline-block bg-orange-400 text-white text-xs px-3 py-1 rounded-full">
            FOOD TYPE
          </span>
        </div>
        
        {/* Register Button */}
        <div className="mb-6">
          <a 
            href="#" 
            className="block bg-teal-700 text-white text-center py-3 px-4 rounded-full flex items-center justify-between"
          >
            <span className="text-lg font-medium ml-24">Register</span>
            <Share2 size={20} />
          </a>
        </div>
        
        {/* Description Section */}
        <div className="border-t pt-4">
          <h3 className="text-xl font-bold mb-3">Description</h3>
          <p className="text-gray-800 leading-relaxed">
            Food loading is a hands-on volunteer activity that involves loading pre-packed food boxes into vehicles that will deliver groceries to home delivery clients. This volunteer opportunity does not involve interacting with or delivering groceries to home delivery clients directly. This volunteer activity requires repeated lifting of heavy boxes that weigh up to 25 lbs. and is best suited for volunteers with strong mobility and no back issues. This is a fun, physical outdoor activity working alongside other volunteers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;