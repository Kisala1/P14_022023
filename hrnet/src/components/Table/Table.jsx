import styles from './Table.module.scss';

export function Table({
  zipCode,
  firstName,
  department,
  dateBirth,
  lastName,
  startDate,
  city,
  states,
  street,
}) {
  const titleList = [
    'First Name',
    'Last Name',
    'Start Date',
    'Department',
    'Date of Birth',
    'Street',
    'City',
    'State',
    'Zip Code',
  ];
  return (
    <table>
      <thead>
        <tr>
          {titleList.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{firstName}</th>
          <th>{lastName}</th>
          <th>{startDate}</th>
          <th>{department}</th>
          <th>{dateBirth}</th>
          <th>{street}</th>
          <th>{city}</th>
          <th>{states}</th>
          <th>{zipCode}</th>
        </tr>
      </tbody>
    </table>
  );
}
