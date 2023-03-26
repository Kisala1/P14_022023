import styles from './Search.module.scss';

export function Search({ datas }) {
  const searchData = () => {};
  return (
    <div>
      <label className={styles.label} htmlFor="search">
        Search :
      </label>
      <input type="text" id="search" onKeyUp={searchData} />
    </div>
  );
}