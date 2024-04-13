// Add an event listener to the login form
document.getElementById("login-form").addEventListener("submit", function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Get the values of the username and password fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Log the username and password to the console
    console.log("Username:", username);
    console.log("Password:", password);

    // Clear the username and password fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    // Add a checkbox to show or hide the password
    var showPasswordCheckbox = document.createElement("input");
    showPasswordCheckbox.type = "checkbox";
    showPasswordCheckbox.id = "show-password";
    showPasswordCheckbox.name = "show-password";
    showPasswordCheckbox.value = "show-password";
    showPasswordCheckbox.checked = false;
    document.getElementById("login-form").appendChild(showPasswordCheckbox);

    // Add a label for the checkbox
    var showPasswordLabel = document.createElement("label");
    showPasswordLabel.htmlFor = "show-password";
    showPasswordLabel.appendChild(document.createTextNode("Show password"));
    document.getElementById("login-form").appendChild(showPasswordLabel);

    // Add an event listener to the checkbox
    showPasswordCheckbox.addEventListener("change", function() {
        if (this.checked) {
            // Show the password
            password.type = "text";
        } else {
            // Hide the password
            password.type = "password";
        }
    });
});
