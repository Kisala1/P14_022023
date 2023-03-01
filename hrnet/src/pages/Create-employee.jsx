import { MainLayout } from '../components/MainLayout/MainLayout';
import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import styles from './style/Create-employee.module.scss';

const nameInputs = ['First Name', 'Last Name', 'Date of Birth', 'Start Date'];
const adressInputs = ['Street', 'City', 'Zip Code'];

export function CreateEmployee() {
  return (
    <MainLayout viewEmployees={false}>
      <div className={styles.container}>
        <div className={styles.containerInputs}>
          {nameInputs.map((name, index) => (
            <div key={index} className={styles.blocInput}>
              <label>{name}</label>
              <Input id={name} />
            </div>
          ))}
        </div>
        <fieldset className={styles.containerAdressInputs}>
          <legend>Adress</legend>
          {adressInputs.map((name, index) => (
            <div key={index} className={styles.blocInput}>
              <label>{name}</label>
              <Input id={name} />
            </div>
          ))}
        </fieldset>
        <Button content="Save" />
      </div>
    </MainLayout>
  );
}
