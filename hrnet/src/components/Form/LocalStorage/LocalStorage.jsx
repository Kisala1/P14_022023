export function LocalStorage() {
  const firstName = document.getElementById('FirstName').value;
  const lastName = document.getElementById('LastName').value;
  const dateBirth = document.getElementById('DateofBirth').value;
  const startDate = document.getElementById('StartDate').value;
  const street = document.getElementById('Street').value;
  const city = document.getElementById('City').value;
  const states = document.getElementById('States').value;
  const zipCode = document.getElementById('ZipCode').value;
  const department = document.getElementById('Department').value;

  const data = JSON.stringify({
    firstName,
    lastName,
    dateBirth,
    startDate,
    street,
    city,
    states,
    zipCode,
    department,
  });
  
  return data;
}
