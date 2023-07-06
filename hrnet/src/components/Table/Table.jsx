import { Sort } from './Sort/Sort';
import { Show } from './Show/Show';
import { Search } from './Search/Search';
import { Showing } from './Showing/Showing';
import { Pagination } from './Pagination/Pagination';
import { useEffect, useState } from 'react';
import styles from './Table.module.scss';

const parseData = (data) => JSON.parse(data);

export function Table({ datas, sortDatas }) {
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState('none');
  const [numEntries, setNumEntries] = useState(10);
  const [filteredData, setFilteredData] = useState(datas);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    handleNumEntriesChange({ target: { value: numEntries } });
  });

  // Event handler function for changing the number of entries to be displayed per page
  const handleNumEntriesChange = (event) => {
    // Update number of entries per page
    setNumEntries(parseInt(event.target.value));
    // Update total number of pages based on the number
    // of entries per page and the number of filtered data
    setTotalPages(
      Math.ceil(filteredData.length / parseInt(event.target.value))
    );
  };

  // Event handler function for data retrieval
  const handleSearch = (data) => {
    // Update filtered data
    setFilteredData(data);
    // Update total number of pages based on the number
    // of entries per page and the number of filtered data
    setTotalPages(Math.ceil(data.length / numEntries));
    // Back to first page
    setCurrentPage(1);
  };

  // Event handler function for data sorting
  const handleSort = (key, direction) => {
    // Mettre à jour la clé de tri sélectionnée
    setSortKey(key);
    // Update the selected sort key
    setSortDirection(direction);
    // Back to first page
    setCurrentPage(1);
  };

  // Data filter based on current page and number of entries per page
  const filterDataByPage = (data) => {
    const startIndex = (currentPage - 1) * numEntries;
    const endIndex = startIndex + numEntries;
    return data.slice(startIndex, endIndex);
  };

  // Data filtered by current page
  const filteredDataByPage = filteredData
    ? // filteredDataByPage will contain only filtered data from the current page
      filterDataByPage(filteredData)
    : // will contain the sorted data of the current page
      // (without filter applied) if filterData does not exist
      filteredData && filterDataByPage();

  const renderTbody = (datas) => {
    if (datas) {
      if (filteredData) {
        return (
          <tbody className={styles.tbodyData}>
            {filteredDataByPage
              .map((data, index) => {
                const employee = parseData(data);
                return (
                  <tr key={index} className={styles.rowData}>
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
              })
              .slice()
              .sort((a, b) => {
                let employeeA = a[sortKey];
                let employeeB = b[sortKey];
                if (employeeA < employeeB) {
                  return sortDirection === 'descending' ? -1 : 1;
                }
                return sortDirection === 'ascending' ? 1 : -1;
              })
              .slice(0, numEntries)}
          </tbody>
        );
      }
    } else {
      return (
        <tbody>
          <tr>
            <td colSpan={9} className={styles.tdNoData}>
              No data available in table
            </td>
          </tr>
        </tbody>
      );
    }
  };

  return (
    <>
      <div className={styles.containerSearch}>
        <Show
          numEntries={numEntries}
          handleNumEntriesChange={handleNumEntriesChange}
        />
        <Search datas={datas} onSearch={handleSearch} />
      </div>
      <div className={styles.containerTable}>
        <table>
          <thead>
            <tr className={styles.headersName}>
              {sortDatas.map((sortData, index) => (
                <Sort
                  key={index}
                  sortKey={sortData.sortKey}
                  onSort={handleSort}
                >
                  {sortData.content}
                </Sort>
              ))}
            </tr>
          </thead>
          {renderTbody(datas)}
        </table>
      </div>
      <div className={styles.containerShowingBtn}>
        <Showing
          datas={datas}
          filteredDataByPage={filteredDataByPage}
          currentPage={currentPage}
          numEntries={numEntries}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}
