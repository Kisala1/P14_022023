import styles from './Table.module.scss';

export function Table() {
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
      <tbody>
        <tr>
          {titleList.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
        <tr>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
        </tr>
        <tr>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
        </tr>
        <tr>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
          <th>bla</th>
        </tr>
      </tbody>
    </table>
  );
}
