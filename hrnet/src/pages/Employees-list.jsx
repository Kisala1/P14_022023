import { Link } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { Table } from '../components/Table/Table';
import styles from './style/Employees-list.module.scss';

export function EmployeesList() {
  const employeesData = localStorage.getItem('employees');
  const employeeData = JSON.parse(employeesData);

  return (
    <MainLayout viewEmployees={true}>
      <div className={styles.container}>
        <div className={styles.containerTable}>
          {employeeData ? <Table datas={employeeData} /> : <Table />}
        </div>
        <Link to={'/'} className={styles.link}>
          Home
        </Link>
      </div>
    </MainLayout>
  );
}
