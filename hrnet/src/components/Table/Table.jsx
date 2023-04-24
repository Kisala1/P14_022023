import { Sort } from './Sort/Sort';
import { Show } from './Show/Show';
import { Search } from './Search/Search';
import { Pagination } from './Pagination/Pagination';
import { useState } from 'react';
import styles from './Table.module.scss';

const parseData = (data) => JSON.parse(data);

export function Table({ datas, sortDatas }) {
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState('none');
  const [numEntries, setNumEntries] = useState(10);
  const [filteredData, setFilteredData] = useState(datas);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  function handleNumEntriesChange(event) {
    setNumEntries(parseInt(event.target.value));
    setTotalPages(
      Math.ceil(filteredData.length / parseInt(event.target.value))
    );
  }

  const handleSearch = (data) => {
    setFilteredData(data);
    setTotalPages(Math.ceil(data.length / numEntries));
    setCurrentPage(1);
  };

  const handleSort = (key, direction) => {
    setSortKey(key);
    setSortDirection(direction);
    setCurrentPage(1);
  };

  const sortedData =
    datas &&
    datas
      .slice()
      .sort((a, b) => {
        let employeeA = parseData(a)[sortKey];
        let employeeB = parseData(b)[sortKey];

        // TODO appliquer le tri par firstname directement sur la page + modifier la condition
        // TODO Faire en sorte que la flèche précédente disparaisse après avoir appuyé sur un autre élément pour trier
        if (employeeA < employeeB) {
          return sortDirection === 'descending' ? -1 : 1;
        }
        return sortDirection === 'ascending' ? 1 : -1;
      })
      .slice(0, numEntries);

  const filterDataByPage = (data) => {
    const startIndex = (currentPage - 1) * numEntries;
    const endIndex = startIndex + numEntries;
    return data.slice(startIndex, endIndex);
  };
  const filteredDataByPage = filteredData
    ? filterDataByPage(filteredData)
    : filteredData && filterDataByPage(sortedData);

  const renderTbody = (datas) => {
    if (datas) {
      if (filteredData) {
        return (
          <tbody className={styles.tbodyData}>
            {filteredDataByPage.map((data, index) => {
              const employee = parseData(data);
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
          setNumEntries={setNumEntries}
          handleNumEntriesChange={handleNumEntriesChange}
        />
        <Search datas={datas} onSearch={handleSearch} />
      </div>
      <table>
        <thead>
          <tr className={styles.headersName}>
            {sortDatas.map((sortData, index) => (
              <Sort key={index} sortKey={sortData.sortKey} onSort={handleSort}>
                {sortData.content}
              </Sort>
            ))}
          </tr>
        </thead>
        {renderTbody(datas)}
      </table>
      <div className={styles.containerShowingBtn}>
        <p className={styles.numberEntries}>
          {/* TODO Showing {datas ? datas.length : 0} => datas.length incorrect doit afficher le chiffre de la 1ere entries  
          ex : Showing 1 to 10 of 16 (page 1) ; Showing 11 to 10 of 16 (page 2) */}
          Showing {datas ? datas.length : 0} to {numEntries} of{' '}
          {datas ? datas.length : 0} entries
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}
