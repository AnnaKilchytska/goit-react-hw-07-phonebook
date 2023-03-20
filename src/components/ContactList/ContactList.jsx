// import PropTypes from 'prop-types';
import { getFilteredContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactSlice';

function ContactList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} id={contact.id} className={css.contactListItem}>
            <span className={css.contactListName}>{contact.nameInput}</span>
            <span className={css.contactListNumber}>{contact.number}</span>
            <button
              className={css.deleteButton}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
