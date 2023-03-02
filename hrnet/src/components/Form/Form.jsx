import { Input } from '../Inputs/TextInput/Input';
import { DateInput } from '../Inputs/DateInput/DateInput';
import { NumberInput } from '../Inputs/NumberInput/NumberInput';
import { Button } from '../Button/Button';
import { DropDown } from '../Dropdown/Dropdown';
import departments from '../../data/departments.json';
import states from '../../data/states.json';
import styles from './Form.module.scss';

export function Form({ textInputs, dateInputs, adressInputs, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div>
        {textInputs.map((name, index) => (
          <div key={index} className={styles.blocInput}>
            <label>{name}</label>
            <Input id={name} />
          </div>
        ))}
      </div>
      <div>
        {dateInputs.map((name, index) => (
          <div key={index} className={styles.blocInput}>
            <label>{name}</label>
            <DateInput id={name} />
          </div>
        ))}
      </div>
      <fieldset className={styles.containerAdressInputs}>
        <legend className={styles.legend}>Adress</legend>
        {adressInputs.map((name, index) => (
          <div key={index} className={styles.blocInput}>
            <label>{name}</label>
            <Input id={name} />
          </div>
        ))}
        <DropDown name={'States'} options={states.States} />
        <div className={styles.blocInput}>
          <label>Zip Code</label>
          <NumberInput id={'Zip Code'} />
        </div>
      </fieldset>
      <div className={styles.dropdownDepartments}>
        <DropDown name={'Department'} options={departments.Departments} />
      </div>
      <Button content="Save" />
    </form>
  );
}
