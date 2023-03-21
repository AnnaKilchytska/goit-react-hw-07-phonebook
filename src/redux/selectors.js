import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.value;
export const getIsLoading = state => state.isLoading;

export const getFilteredContacts = createSelector(
  // Масив вхідних селекторів
  [getContacts, getFilter],
  // Функція перетворювач
  (contacts, filter) => {
    // Виконуємо обчислення та повертаємо результат
    console.log('contacts from selector', contacts);
    return contacts.filter(contact => {
      return contact.nameInput.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
