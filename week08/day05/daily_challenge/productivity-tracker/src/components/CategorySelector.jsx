import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../features/categories/selectors';

const CategorySelector = ({ selectedCategory, onSelect }) => {
  const categories = useSelector(selectAllCategories);

  return (
    <div>
      <label htmlFor="category-select">Select Category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
