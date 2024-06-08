import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <TextField
      label="Search Breeds"
      value={searchQuery}
      onChange={handleSearch}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default SearchBar;