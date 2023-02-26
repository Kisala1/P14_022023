import { Header } from '../Header/Header';
import styles from './MainLayout.module.scss'

export function MainLayout({ children, title, viewEmployees }) {
  return (
    <div className={styles.container} >
      <Header title={title} viewEmployees={viewEmployees} />
      {children}
    </div>
  );
}
