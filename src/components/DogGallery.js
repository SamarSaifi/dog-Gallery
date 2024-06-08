import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DogCard from './DogCard';
import SearchBar from './SearchBar';
import { Grid } from '@mui/material';

const DogGallery = () => {
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
      <Grid container spacing={3}>
        {filteredDogs.map((dog) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={dog.id}>
            <DogCard dog={dog} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DogGallery;