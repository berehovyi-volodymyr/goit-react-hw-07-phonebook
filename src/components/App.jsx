import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useGetContactsQuery } from '../redux/contacts/contacts-slice';

export const App = () => {
  const { data, isLoading } = useGetContactsQuery();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contact</h2>
      {!isLoading && data.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <h2>No contacts in your phonebook</h2>
      )}
    </>
  );
};
