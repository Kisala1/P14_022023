import logo from '../../img/logo.jpg';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export function Header({ viewEmployees }) {
  return (
    <>
      {/* Header for the employeeslist page */}
      {viewEmployees ? (
        <div className={styles.containerEmployee}>
          <Link to={'/'}>
            <img
              className={styles.img}
              src={logo}
              alt="logo Wealth heath"
              width="200px"
              height="180px"
            />
          </Link>
          <h1 className={styles.title}>Current employees</h1>
        </div>
      ) : (
        <>
          {/* Header for the home page */}
          <div className={styles.container}>
            <Link to={'/'}>
              <img
                className={styles.img}
                src={logo}
                alt="logo Wealth heath"
                width="200px"
                height="180px"
              />
            </Link>
            <h1 className={styles.titleCreate}>HRnet</h1>
            <Link className={styles.link} to={'/employeeslist'}>
              View Current Employees
            </Link>
          </div>
          <div className={styles.containerResponsive}>
            <Link className={styles.linkResponsive} to={'/employeeslist'}>
              View Current Employees
            </Link>
          </div>
        </>
      )}
    </>
  );
}
