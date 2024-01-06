import { Component } from 'react';
import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(value);
    console.log(name);
    this.setState({
      [name]: value,
    });
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const { name, number } = this.state;
    return (
      <form onSubmit={handleSubmit} className={styles.formWrap}>
        {/* <div className={styles.formItem}> */}
        <label htmlFor="" className={styles.formItem}>
          Name
          <input
            onChange={handleChange}
            value={name}
            name="name"
            required
            id=""
            placeholder="Name"
            type="text"
          ></input>
        </label>
        {/* </div> */}
        {/* <div className={styles.formItem}> */}
        <label htmlFor="" className={styles.formItem}>
          Number
          <input
            onChange={handleChange}
            value={number}
            name="number"
            id=""
            placeholder="Number"
          ></input>
        </label>
        {/* </div> */}
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
