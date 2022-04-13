const button = document.querySelector("#switch-button");
const pwd1 = document.querySelector("#createPwd");
const pwd2 = document.querySelector("#confirmPwd");

const number = new RegExp("[0-9 ]");
const upperCase = new RegExp("[A-Z]");
const lowerCase = new RegExp("[a-z]");
const minPwdLength = 10;
const umlaut = /[äüöß]/;

// Click-Event to toggle in password fields and the label itself
button.addEventListener("click", () => {
  if (createPwd.type === "password" && confirmPwd.type === "password") {
    pwd1.type = "text";
    pwd2.type = "text";
    button.value = "Hide Password";
  } else {
    pwd1.type = "password";
    pwd2.type = "password";
    button.value = "Show Password";
  }
});

// execute "runAllChecks" function by Input-Event on both pwd-fields
pwd1.addEventListener("input", runAllChecks);
pwd2.addEventListener("input", runAllChecks);

// first check: if equality check fails, all checks will be failed
function runAllChecks() {
  if (checkEquality() && !checkContainsUmlaut()) {
    checkNumbers();
    checkCaseLower();
    checkCaseUpper();
    checkLength();
  } else {
    document.querySelector("#equal").innerHTML = " ❌";
    document.querySelector("#numbers").innerHTML = " ❌";
    document.querySelector("#uppercase").innerHTML = " ❌";
    document.querySelector("#lowercase").innerHTML = " ❌";
    document.querySelector("#length").innerHTML = " ❌";
  }
}

// all five needed checks plus UmlautCheck
function checkEquality() {
  if (pwd1.value === pwd2.value) {
    document.querySelector("#equal").innerHTML = " ✅";
    return true;
  } else {
    document.querySelector("#equal").innerHTML = " ❌";
    return false;
  }
}

function checkContainsUmlaut() {
  if (umlaut.test(pwd1.value) || umlaut.test(pwd2.value)) {
    alert("Achtung: Umlaute sind leider nicht erlaubt!");
    return true;
  }
  return false;
}

function checkNumbers() {
  if (number.test(pwd1.value) && number.test(pwd2.value)) {
    document.querySelector("#numbers").innerHTML = " ✅";
  } else {
    document.querySelector("#numbers").innerHTML = " ❌";
  }
}

function checkCaseUpper() {
  if (upperCase.test(pwd1.value) && upperCase.test(pwd2.value)) {
    document.querySelector("#uppercase").innerHTML = " ✅";
  } else {
    document.querySelector("#uppercase").innerHTML = " ❌";
  }
}

function checkCaseLower() {
  if (lowerCase.test(pwd1.value) && lowerCase.test(pwd2.value)) {
    document.querySelector("#lowercase").innerHTML = " ✅";
  } else {
    document.querySelector("#lowercase").innerHTML = " ❌";
  }
}

function checkLength() {
  if (pwd1.value.length >= minPwdLength && pwd2.value.length >= minPwdLength) {
    document.querySelector("#length").innerHTML = " ✅";
  } else {
    document.querySelector("#length").innerHTML = " ❌";
  }
}
