import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
// import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <GlobalStyle />
      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        'Your phonebook is empty. Add first contact!'
      )}
      {contacts.length > 0 && <Contacts />}
    </div>
  );
}
