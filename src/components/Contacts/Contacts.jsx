import React from 'react';
import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
// import { useState } from 'react';

export const Contacts = ({ id }) => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  // const [isDeleting, setIsDeleting] = useState(false);
  // const isLoading = useSelector(selectIsLoading);
  const handleDelete = () => {
    dispatch(deleteContacts(id));
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
