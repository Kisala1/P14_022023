import { Sort } from './Sort/Sort';
import { Show } from './Show/Show';
import { Search } from './Search/Search';
import { Buttons } from './Buttons/Buttons';
import { useState } from 'react';
import styles from './Table.module.scss';

export function Table({ datas }) {
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState('none');
  const [numEntries, setNumEntries] = useState(10);
  function handleNumEntriesChange(event) {
    setNumEntries(parseInt(event.target.value));
  }

  const handleSort = (key, direction) => {
    setSortKey(key);
    setSortDirection(direction);
  };

  const sortedData =
    datas &&
    datas.slice().sort((a, b) => {
      const employeeA = JSON.parse(a)[sortKey];
      const employeeB = JSON.parse(b)[sortKey];

      if (employeeA < employeeB) {
        return sortDirection === 'ascending' ? -1 : 1;
      }
      if (employeeA > employeeB) {
        return sortDirection === 'ascending' ? 1 : -1;
      }
      return 0;
    });

  const [filteredData, setFilteredData] = useState(datas);

  const handleSearch = (data) => {
    setFilteredData(data);
  };

  return (
    <>
      <div className={styles.containerSearch}>
        {/* <Show /> */}
        <div className={styles.dropDownValueEntries}>
          <label htmlFor="num-entries">Show</label>
          <select
            id="num-entries"
            value={numEntries}
            onChange={handleNumEntriesChange}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <p>entries</p>
        </div>
        <Search datas={datas} onSearch={handleSearch} />
      </div>
      {datas ? (
        <>
          <table>
            <thead>
              <tr className={styles.headersName}>
                <Sort sortKey="firstName" onSort={handleSort}>
                  First Name
                </Sort>
                <Sort sortKey="lastName" onSort={handleSort}>
                  Last Name
                </Sort>
                <Sort sortKey="startDate" onSort={handleSort}>
                  Start Date
                </Sort>
                <Sort sortKey="department" onSort={handleSort}>
                  Department
                </Sort>
                <Sort sortKey="dateBirth" onSort={handleSort}>
                  Date of Birth
                </Sort>
                <Sort sortKey="street" onSort={handleSort}>
                  Street
                </Sort>
                <Sort sortKey="city" onSort={handleSort}>
                  City
                </Sort>
                <Sort sortKey="states" onSort={handleSort}>
                  State
                </Sort>
                <Sort sortKey="zipCode" onSort={handleSort}>
                  Zip Code
                </Sort>
              </tr>
            </thead>

            <tbody className={styles.tbodyData}>
              {sortedData &&
                sortedData.map((data, index) => {
                  const employee = JSON.parse(data);
                  return (
                    <tr key={index}>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.startDate}</td>
                      <td>{employee.department}</td>
                      <td>{employee.dateBirth}</td>
                      <td>{employee.street}</td>
                      <td>{employee.city}</td>
                      <td>{employee.states}</td>
                      <td>{employee.zipCode}</td>
                    </tr>
                  );
                })}
              {/* {filteredData.map((item, index) => {
              const filteredEmployees = JSON.parse(item);
              return (
                <tr key={index}>
                  <td>{filteredEmployees.firstName}</td>
                  <td>{filteredEmployees.lastName}</td>
                  <td>{filteredEmployees.startDate}</td>
                  <td>{filteredEmployees.department}</td>
                  <td>{filteredEmployees.dateBirth}</td>
                  <td>{filteredEmployees.street}</td>
                  <td>{filteredEmployees.city}</td>
                  <td>{filteredEmployees.states}</td>
                  <td>{filteredEmployees.zipCode}</td>
                </tr>
              );
            })} */}
            </tbody>
          </table>
          <div className={styles.containerShowingBtn}>
            <p className={styles.numberEntries}>
              Showing 1 to {numEntries} of{' '}
              {datas.length} (total entries) entries
            </p>
            <Buttons disabled={true} />
          </div>
        </>
      ) : (
        <>
          <table>
            <thead>
              <tr className={styles.headersName}>
                <Sort sortKey="firstName" onSort={handleSort}>
                  First Name
                </Sort>
                <Sort sortKey="lastName" onSort={handleSort}>
                  Last Name
                </Sort>
                <Sort sortKey="startDate" onSort={handleSort}>
                  Start Date
                </Sort>
                <Sort sortKey="department" onSort={handleSort}>
                  Department
                </Sort>
                <Sort sortKey="dateBirth" onSort={handleSort}>
                  Date of Birth
                </Sort>
                <Sort sortKey="street" onSort={handleSort}>
                  Street
                </Sort>
                <Sort sortKey="city" onSort={handleSort}>
                  City
                </Sort>
                <Sort sortKey="states" onSort={handleSort}>
                  State
                </Sort>
                <Sort sortKey="zipCode" onSort={handleSort}>
                  Zip Code
                </Sort>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={9} className={styles.tdNoData}>
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.containerShowingBtn}>
            <p className={styles.numberEntries}>Showing 0 to {numEntries} of 0 entries</p>
            <Buttons disabled={false} />
          </div>
        </>
      )}
    </>
  );
}
