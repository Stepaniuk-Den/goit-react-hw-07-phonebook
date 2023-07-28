import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from 'services/api';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);
export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  contact => addContacts(contact)
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContacts(id)
);
