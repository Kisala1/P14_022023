import { MainLayout } from '../components/MainLayout/MainLayout';
import { Input } from '../components/Input/Input';
import styles from './style/Create-employee.module.scss';

export function CreateEmployee() {
  return (
    <MainLayout title={'HRnet'} viewEmployees={false}>
      <div className={styles.containerInputs}>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </MainLayout>
  );
}
