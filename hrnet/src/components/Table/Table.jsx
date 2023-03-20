import styles from './Table.module.scss';

export function Table({ datas }) {
  return (
    <table>
      <thead >
        <tr className={styles.headersName}>
          <th className={styles.firstName}>First Name</th>
          <th>Last Name</th>
          <th>Start Date</th>
          <th>Department</th>
          <th>Date of Birth</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
      </thead>
      {datas ? (
        <tbody>
          {datas.map((data, index) => {
            const employee = JSON.parse(data);
            return (
              <tr key={index}>
                <th className={styles.thFirstName}>{employee.firstName}</th>
                <th>{employee.lastName}</th>
                <th>{employee.startDate}</th>
                <th>{employee.department}</th>
                <th>{employee.dateBirth}</th>
                <th>{employee.street}</th>
                <th>{employee.city}</th>
                <th>{employee.states}</th>
                <th>{employee.zipCode}</th>
              </tr>
            );
          })}
        </tbody>
      ) : (
        <tbody></tbody>
      )}
    </table>
  );
}
