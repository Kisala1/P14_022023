import { Link } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout/MainLayout';
import Example from '../components/Table/Table';
import styles from './style/Employees-list.module.scss';

export function EmployeesList() {
  const employeesData = localStorage.getItem('employees');
  const employeeData = JSON.parse(employeesData);
  const formattedEmployeeData = employeeData.map(employee => JSON.parse(employee));
 
  return (
    <MainLayout viewEmployees={true}>
      <div className={styles.container}>
        <div className={styles.containerTable}>
          <Example datas={formattedEmployeeData} />
        </div>
        <Link to={'/'} className={styles.link}>
          Home
        </Link>
      </div>
    </MainLayout>
  );
}
