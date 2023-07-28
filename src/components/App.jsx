import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import Section from './Section/Section';
import ContactList from './ContactList/ContactList';
import { FilterBar } from './FilterContact/FilterBar';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contactsReducer';
import {
  getContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from 'redux/thunk';
import Loader from './Loader/Loader';

export const App = () => {
  const { filter } = useSelector(state => state.contacts);
  const {
    items: contacts,
    error,
    isLoading,
  } = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  const onAddContact = contactData => {
    dispatch(addContactsThunk(contactData));
  };

  const onDublicate = dublicated => {
    const dublicate = contacts.filter(contact => contact.name === dublicated);
    return dublicate.length > 0;
  };

  const onFilter = filterValue => {
    dispatch(filterContact(filterValue));
  };

  const onRemoveContact = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  const showLoader = isLoading;
  const showError = error;

  return (
    <div className="container">
      {showError && (
        <div>
          <p>Opps, some error occured... Error: {error}</p>
        </div>
      )}
      {showLoader && <Loader />}
      <Section title="Phonebook">
        <ContactForm onAddContact={onAddContact} onDublicate={onDublicate} />
      </Section>
      <Section title="Contacts">
        <FilterBar filter={filter} onFilter={onFilter} />
        <ContactList
          contacts={filteredContact}
          onRemoveContact={onRemoveContact}
        />
      </Section>
    </div>
  );
};
