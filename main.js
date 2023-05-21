// main.js

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var website = document.getElementById('website').value;
    var img = document.getElementById('img').files[0]; // Get the selected file
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var skills = [];
    var skillCheckboxes = document.querySelectorAll('input[name="skills"]:checked');
  
    skillCheckboxes.forEach(function(checkbox) {
      skills.push(checkbox.value);
    });
  
    // Create new row for the enrolled student
    var newRow = document.createElement('div');
    newRow.classList.add('result', 'row');
  
    // Create data column for student description
    var dataCol = document.createElement('div');
    dataCol.classList.add('data', 'column');
    dataCol.innerHTML = '<p>Name: ' + name + '</p><p>Email: ' + email + '</p><p>Website: ' + website + '</p><p>Gender: ' + gender + '</p><p>Skills: ' + skills.join(', ') + '</p>';
  
    // Create image column for student image
    var imageCol = document.createElement('div');
    imageCol.classList.add('image', 'column');
  
    // Create image element
    var image = document.createElement('img');
    image.setAttribute('src', URL.createObjectURL(img)); // Set the source as a blob URL
    image.setAttribute('alt', 'Student Image');
    image.setAttribute('width', '100');
  
    // Append image to the image column
    imageCol.appendChild(image);
  
    // Append columns to the new row
    newRow.appendChild(dataCol);
    newRow.appendChild(imageCol);
  
    // Append new row to the enrolled students section
    document.getElementById('std_result').appendChild(newRow);
  
    // Clear the form
    document.getElementById('myForm').reset();
  });
  