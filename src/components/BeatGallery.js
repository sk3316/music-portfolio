import React, { useState } from "react";

const beats = [
  { id: 1, name: "hello", src: "/path/to/beat1.mp3" },
  { id: 2, name: "Beat 2", src: "/path/to/beat2.mp3" },
  { id: 3, name: "Bets", src: "/path/to/beat3.mp3" },
  { id: 4, name: "Bate 4", src: "/path/to/beat4.mp3" },
  { id: 5, name: "Btea 5", src: "/path/to/beat5.mp3" },
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
