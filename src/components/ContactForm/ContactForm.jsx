import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from './ContactForm.styled';

export const ContactForm = ({ onAddContact, onDublicate }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactData = { name: name, phone: number };
    const isDublicate = onDublicate(name);
    isDublicate
      ? alert(`Attention! Name ${name} is already!`)
      : onAddContact(contactData);
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Name
        <input
          onChange={onInputChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          onChange={onInputChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  onDublicate: PropTypes.func.isRequired,
};
