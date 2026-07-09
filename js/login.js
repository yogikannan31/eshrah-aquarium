document.getElementById(
    "loginForm"
).addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        const savedUser =
            JSON.parse(
                localStorage.getItem(
                    "eshrahUser"
                )
            );

        const email =
            document.getElementById(
                "loginEmail"
            ).value;

        const password =
            document.getElementById(
                "loginPassword"
            ).value;

        if(
            savedUser &&
            savedUser.email===email &&
            savedUser.password===password
        ){

            alert("Login Successful!");

            window.location.href="home.html";

        }
        else{

            alert(
            "Invalid Email or Password"
            );

        }

});