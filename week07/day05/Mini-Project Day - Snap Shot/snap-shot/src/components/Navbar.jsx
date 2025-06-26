import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['Mountain', 'Beaches', 'Birds', 'Food'];

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search/${search}`);
      setSearch('');
    }
  };

  return (
    <nav style={{ padding: '1rem' }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => navigate(`/category/${cat}`)}
          style={{ marginRight: '1rem' }}
        >
          {cat}
        </button>
      ))}
      <input
        type="text"
        placeholder="Search images..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </nav>
  );
};

export default Navbar;
