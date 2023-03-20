import styles from './Show.module.scss';
export function Show() {
  const options = ['10', '25', '50', '100'];
  return (
    <div className={styles.container}>
      <label htmlFor="entries">Show</label>
      <select className={styles.select} id="entries">
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
      <p>entries</p>
    </div>
  );
}
