let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let register = document.getElementById('register');
    let login = document.getElementById('login');

    register.addEventListener('click', async (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        

        let payload = { email, password }
        if (email == "" || password == "") {
            alert("Please enter all required fields")
            return;
        }
        // console.log('register')
        await fetch("http://localhost:4440/user/register", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
            .then(res => {
                if (res.msg == "Email already registered") {
                    alert("Email Already registered.");
                }
                else {
                    alert("Signup Successful");
                    
                }
            })
            .catch(err => console.log(err));


        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    })


    login.addEventListener('click', async (e) => {
        e.preventDefault();
        // console.log('login')

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let payload = { email, password }
        if (email == "" || password == "") {
            alert("Please enter all required fields")
            return;
        }
        // console.log('register')
        await fetch("http://localhost:4440/user/login", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
            .then(res => {
                if (res.msg == "Registeration first") {
                    alert("Registeration first");
                }
                else if(res.msg=="Login Successfully"){
                    alert("Login Successfully");
               
                    window.location.href="search.html" 
                }
                else{
                    alert("Wrong Credentials")
                }
            })
            .catch(err => console.log(err));


        document.getElementById('email').value = '';
        document.getElementById('password').value = '';

    });

});

