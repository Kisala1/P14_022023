import logo from '../../img/logo.jpg';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export function Header({ title, viewEmployees }) {
  return (
    <>
      {viewEmployees ? (
        <div className={styles.container}>
          <Link to={'/'}>
            <img className={styles.img} src={logo} alt="logo Wealth heath" />
          </Link>
          <h1>{title}</h1>
        </div>
      ) : (
        <div className={styles.container}>
          <Link to={'/'}>
            <img className={styles.img} src={logo} alt="logo Wealth heath" />
          </Link>
          <h1>{title}</h1>
          <Link className={styles.link} to={'/employeeslist'}>
            View Current Employees
          </Link>
        </div>
      )}
    </>
  );
}
