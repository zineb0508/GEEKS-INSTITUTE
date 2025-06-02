document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();

  const userData = {
    firstName: firstName,
    lastName: lastName
  };

  document.getElementById("output").textContent = JSON.stringify(userData, null, 2);
});
