import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './thunk';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};

const handleRejected = (state, { error }) => {
  state.contacts.isLoading = false;
  state.contacts.error = error.message;
};

const stateArr = [getContactsThunk, addContactsThunk, deleteContactsThunk];

const handler = status => {
  return stateArr.map(item => item[status]);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(isAnyOf(...handler('rejected')), handleRejected)
      .addMatcher(isAnyOf(...handler('pending')), handlePending),
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContact } = contactsSlice.actions;
