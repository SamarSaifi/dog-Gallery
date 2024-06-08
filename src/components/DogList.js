import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DogCard from './DogCard';
import SearchBar from './SearchBar';

const DogList = () => {
  const [dogs, setDogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await axios.get('https://api.thedogapi.com/v1/breeds');
      setDogs(response.data);
    };
    fetchDogs();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDogs = dogs.filter((dog) =>
    dog.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
      {filteredDogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </div>
  );
};

export default DogList;