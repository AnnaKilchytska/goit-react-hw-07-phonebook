import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: { items: [] },
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      console.log(action.payload);
      state.items = [action.payload, ...state.items];
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
