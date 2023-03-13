import { Link } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { Table } from '../components/Table/Table';
import styles from './style/Employees-list.module.scss';

export function EmployeesList() {
  const employeeData = localStorage.getItem('employee');

  // Converts the string into a JavaScript object
  const employee = JSON.parse(employeeData);

  const firstName = employee.firstName;
  const department = employee.department;
  const dateBirth = employee.dateBirth;
  const lastName = employee.lastName;
  const startDate = employee.startDate;
  const city = employee.city;
  const states = employee.states;
  const street = employee.street;
  const zipCode = employee.zipCode;

  return (
    <MainLayout viewEmployees={true}>
      <div className={styles.container}>
        <div className={styles.containerTable}>
          <Table
            firstName={firstName}
            department={department}
            dateBirth={dateBirth}
            lastName={lastName}
            startDate={startDate}
            city={city}
            states={states}
            street={street}
            zipCode={zipCode}
          />
        </div>
        <Link to={'/'} className={styles.link}>
          Home
        </Link>
      </div>
    </MainLayout>
  );
}
