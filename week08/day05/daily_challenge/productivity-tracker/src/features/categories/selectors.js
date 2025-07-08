import { createSelector } from '@reduxjs/toolkit';

export const selectAllCategories = state => state.categories;

export const selectCategoryById = id =>
  createSelector([selectAllCategories], categories =>
    categories.find(category => category.id === id)
  );

