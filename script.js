const users = {
  "pruthvirajgaikwad17@gmail.com": "abc",
  "rajkumar@gmail.com": "def",
};
const run = document.getElementById("submit");
run.addEventListener("click", (event) => {
  var userName = document.getElementById("uname").value;
  var userPass = document.getElementById("pass").value;
  if (userName.length == 0 && userPass.length == 0) {
    document.getElementById("username-error").innerHTML =
      "* Enter your Email Id";
    document.getElementById("password-error").innerHTML =
      "* Enter your password";
  } else if (userName.length != 0 && userPass.length == 0) {
    document.getElementById("password-error").innerHTML =
      "* Enter your password";
    document.getElementById("username-error").innerHTML = "";
  } else if (userName.length == 0 && userPass.length != 0) {
    document.getElementById("username-error").innerHTML =
      "* Enter your Email Id";
    document.getElementById("password-error").innerHTML = "";
  } else if (userName.length != 0 && userPass.length != 0) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!document.getElementById("uname").value.match(mailformat)) {
      document.getElementById("username-error").innerHTML =
        "* Please Enter Valid Userame";
    }
    if (document.getElementById("uname").value.match(mailformat)) {
      document.getElementById("username-error").innerHTML = "";
      // checking if the username is present or not
      var arrUser = Object.keys(users);
      checkUser = arrUser.includes(document.getElementById("uname").value);
      if (checkUser) {
        if (
          document.getElementById("pass").value ===
          users[document.getElementById("uname").value]
        ) {
          document.getElementById("finalCheck").style.color = "green";
          document.getElementById("finalCheck").innerHTML = "Login Successful";
          console.log("correct Password");
        } else {
          document.getElementById("finalCheck").style.color = "red";
          document.getElementById("finalCheck").innerHTML =
            "* Incorrect Password";
        }
      } else {
        document.getElementById("finalCheck").style.color = "red";
        document.getElementById("finalCheck").innerHTML =
          "* Username not found";
      }
      /*users[document.getElementById("uname").value] =
        document.getElementById("pass").value;*/
      console.log(users);
    }
  }

  /*var userPass = document.getElementById("pass").value;
   */
  event.preventDefault();
});

// outfocus

let u = document.getElementById("uname");
u.addEventListener("focusout", () => {
  if (document.getElementById("uname").value.length == 0) {
    document.getElementById("username-error").innerHTML =
      "* Enter your Email Id";
  } else {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!document.getElementById("uname").value.match(mailformat)) {
      document.getElementById("username-error").innerHTML =
        "* Please Enter Valid Userame";
    } else {
      document.getElementById("username-error").innerHTML = "";
    }
  }
});

let p = document.getElementById("pass");
p.addEventListener("focusout", () => {
  if (document.getElementById("pass").value.length == 0) {
    document.getElementById("password-error").innerHTML =
      "* Enter your password";
  } else {
    document.getElementById("password-error").innerHTML = "";
  }
});
