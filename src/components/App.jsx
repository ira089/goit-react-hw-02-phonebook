// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import { Component } from 'react';
import styles from './ContactForm/ContactForm.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './ContactList/Filter';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = contact => {
    console.log(contact);
  };

  render() {
    const { addContact } = this;
    return (
      <div className={styles.wrap}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
