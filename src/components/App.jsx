import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import Section from './Section/Section';
import ContactList from './ContactList/ContactList';
import { FilterBar } from './FilterContact/FilterBar';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  filterContact,
  removeContact,
} from 'redux/contactsReducer';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onAddContact = contactData => {
    dispatch(addContact(contactData));
  };

  const onDublicate = dublicated => {
    const dublicate = contacts.filter(contact => contact.name === dublicated);
    return dublicate.length > 0;
  };

  const onFilter = filterValue => {
    dispatch(filterContact(filterValue));
  };

  const onRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  return (
    <div className="container">
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
