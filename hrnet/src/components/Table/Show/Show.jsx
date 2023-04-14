import styles from './Show.module.scss';
import { useState } from 'react';
export function Show() {
  const [numEntries, setNumEntries] = useState(10);
  function handleNumEntriesChange(event) {
    setNumEntries(parseInt(event.target.value));
  }
  return (
    <div className={styles.container}>
      <label htmlFor="num-entries">Show</label>
      <select id="num-entries" value={numEntries} onChange={handleNumEntriesChange}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <p>entries</p>
    </div>
  );
}
