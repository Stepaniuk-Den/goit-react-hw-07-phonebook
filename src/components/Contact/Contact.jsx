import React from 'react';
import PropTypes from 'prop-types';
import { StyledContact } from './Contact.styled';

const Contact = ({ contact, onRemoveContact }) => {
  return (
    <StyledContact>
      <span>
        {contact.name} : {contact.phone}
      </span>
      <button type="button" onClick={() => onRemoveContact(contact.id)}>
        Delete
      </button>
    </StyledContact>
  );
};
Contact.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
}.isRequired;
export default Contact;
