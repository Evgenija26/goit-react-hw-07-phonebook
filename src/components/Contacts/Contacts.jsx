import React from 'react';
import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';

export const Contacts = ({ contact }) => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(contact.id));
  };
  return (
    <ul className={css.ContactsList}>
      {contacts.map(contact => (
        <li className={css.ContactsList__item} key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button
              className={css.ContactsList__button}
              type="button"
              name="delete"
              onClick={handleDelete}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};
