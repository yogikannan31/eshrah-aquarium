document.getElementById(
    "registerForm"
).addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        const user = {
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            phone:document.getElementById("phone").value,
            password:document.getElementById("password").value
        };

        localStorage.setItem(
            "eshrahUser",
            JSON.stringify(user)
        );

        alert("Registration Successful!");

        window.location.href="index.html";
});