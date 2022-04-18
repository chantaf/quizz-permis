const database = require('./js/database');

function add() {

  // Add the add button click event
  // document.getElementById('add').addEventListener('click', () => {

    // Retrieve the input fields
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var adress = document.getElementById('adress');
    var tel = document.getElementById('tel');
    var score=localStorage.getItem('score');

    // Save the person in the database
    database.addPerson(firstname.value, lastname.value,adress.value, tel.value,score);



    let body ={
      firstname: firstname.value,
      lastname: lastname.value,
      adress: adress.value,
      tel: tel.value,
      score:score
    }
    fetch('http://localhost:5000/api/user/create', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

        // Reset the input fields
        firstname.value = '';
        lastname.value = '';
        adress.value = '';
        tel.value = '';



    localStorage.removeItem('score');
    localStorage.clear();
}

// Populates the persons table
function populateTable() {

  // Retrieve the persons
  database.getPersons(function(persons) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < persons.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + persons[i].firstname + '</td>';
      tableBody += '  <td>' + persons[i].lastname + '</td>';
      tableBody += '  <td>' + persons[i].adress + '</td>';
      tableBody += '  <td>' + persons[i].tel + '</td>';
      tableBody += '  <td>' + persons[i].score + '</td>';
      tableBody += '  <td><input type="button" value="Delete" onclick="deletePerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;
  });
}

// Deletes a person
function deletePerson(id) {

  // Delete the person from the database
  database.deletePerson(id);

  // Repopulate the table
  populateTable();
}
