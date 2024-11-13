import React, { useState } from "react";

import Future1 from  "../assets/audio/Future1.mp3";
import Kawaii from  "../assets/audio/Kawaii.mp3";
import Marshmello from  "../assets/audio/Marshmello.mp3";
import scary from  "../assets/audio/scary monster.mp3";
import Trap from  "../assets/audio/Trap.mp3";
import TB2 from  "../assets/audio/Trap Beats2 .mp3";


const beats = [
  { id: 1, name: "Future1", src: Future1 },
  { id: 2, name: "Kawaii", src: Kawaii },
  { id: 3, name: "Marshmello", src: Marshmello },
  { id: 4, name: "scary", src: scary},
  { id: 5, name: "Trap", src: Trap },
  { id: 6, name: "Trap Beats2", src: TB2 },
  // Add more beats as needed
];

function BeatGallery() {
  // State for search input and loaded beats
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleBeats, setVisibleBeats] = useState(4); // initial load count

  // Filter beats based on search term
  const filteredBeats = beats.filter(beat =>
    beat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Load more beats when "Load More" button is clicked
  const loadMoreBeats = () => {
    setVisibleBeats(prevVisible => prevVisible + 4);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-4">My Beats</h2>

      {/* Search Input */}
      <div className="text-center mb-4">
        <input
          type="text"
          placeholder="Search beats..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 w-full md:w-1/2 lg:w-1/3 rounded bg-gray-700 text-white"
        />
      </div>

      {/* Display Beats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBeats.slice(0, visibleBeats).map(beat => (
          <div key={beat.id} className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-xl mb-2">{beat.name}</h3>
            <audio controls className="w-full">
              <source src={beat.src} type="audio/mp3" />
            </audio>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleBeats < filteredBeats.length && (
        <div className="text-center mt-4">
          <button
            onClick={loadMoreBeats}
            className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default BeatGallery;
