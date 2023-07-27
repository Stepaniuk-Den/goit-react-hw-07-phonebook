import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.contacts.push(payload);
      },
      prepare: contact => {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, filterContact, removeContact } =
  contactsSlice.actions;
