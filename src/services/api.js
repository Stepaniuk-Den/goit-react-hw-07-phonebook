import axios from 'axios';

const $instance = axios.create({
  baseURL: 'https://64c21d6bfa35860baea1349e.mockapi.io/',
});

export const fetchContacts = async () => {
  const { data } = await $instance.get('/contacts');
  return data;
};
export const addContacts = async contact => {
  const { data } = await $instance.post('/contacts', contact);
  return data;
};
export const deleteContacts = async id => {
  const { data } = await $instance.delete(`/contacts/${id}`);
  return data;
};
