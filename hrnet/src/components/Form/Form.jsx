import { Input } from '../Inputs/TextInput/Input';
import { DateInput } from '../Inputs/DateInput/DateInput';
import { NumberInput } from '../Inputs/NumberInput/NumberInput';
import { Button } from '../Button/Button';
import { Dropdown } from '@kisala/hrnet-dropdown';
import { Modal } from '../Modal/Modal';
import departments from '../../data/departments.json';
import states from '../../data/states.json';
import styles from './Form.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Datas } from './Datas/Datas';
import { createLocalStorage } from '../../feature/localStorageReducer';
import { renderErrorMessage } from './Conditions/Conditions';

export function Form({ textInputs, dateInputs, adressInputs }) {
  const [formErrors, setFormErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const errors = renderErrorMessage({
      FirstName: formData.get('FirstName'),
      LastName: formData.get('LastName'),
      DateofBirth: formData.get('DateofBirth'),
      StartDate: formData.get('StartDate'),
      Street: formData.get('Street'),
      City: formData.get('City'),
      ZipCode: formData.get('ZipCode'),
    });
    setFormErrors(errors);
    //  displays the modal and sends data to localstorage
    if (Object.keys(errors).length === 0) {
      setShowModal(true);
      dispatch(createLocalStorage(Datas()));
      // if there is an error prevents sending
    } else {
      alert("Formulaire non envoyé en raison d'erreurs.");
      e.preventDefault();
    }
  };

  function renderInput(el, index, Component) {
    const elm = el.split(' ').join('');
    return (
      <div key={index} className={styles.blocInput}>
        <label htmlFor={elm}>{el}</label>
        <Component id={elm} name={elm} error={formErrors[elm]} />
      </div>
    );
  }

  const renderForm = (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div>{textInputs.map((el, index) => renderInput(el, index, Input))}</div>

      <div>
        {dateInputs.map((el, index) => renderInput(el, index, DateInput))}
      </div>

      <fieldset className={styles.containerAdressInputs}>
        <legend className={styles.legend}>Adress</legend>
        {adressInputs.map((el, index) => renderInput(el, index, Input))}
        <Dropdown
          name={'States'}
          options={states.States.map((state) => state.name)}
        />

        <div className={styles.blocInput}>
          <label>Zip Code</label>
          <NumberInput
            id={'ZipCode'}
            name={'ZipCode'}
            error={formErrors['ZipCode']}
          />
        </div>
      </fieldset>
      <div className={styles.dropdownDepartments}>
        <Dropdown
          name={'Department'}
          options={departments.Departments.map((department) => department.name)}
        />
      </div>
      <Button type="submit" content="Save" />
    </form>
  );
  return (
    <>
      {showModal ? (
        <>
          {renderForm}
          <Modal closeModal={() => setShowModal(false)} />
        </>
      ) : (
        renderForm
      )}
    </>
  );
}
