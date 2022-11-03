import { setUser } from "./setApi.js";
import { getUser } from "./getApi.js";
const form = document.querySelector("#form-section form");
const showList = document.querySelector("#form-section .show-list");
const formSection = document.querySelector(".form-section");
const tableSection = document.querySelector(".table-section");
const firstNameInput = document.querySelector("#form-section .firstname");
const firstNameError = document.querySelector("#form-section .firstname-error");
const lastNameInput = document.querySelector("#form-section .lastname");
const lastNameError = document.querySelector("#form-section .lastname-error");
const ageInput = document.querySelector("#form-section .user-age");
const ageError = document.querySelector("#form-section .age-error");
const statusValue = document.querySelector("#form-section .user-status");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
showList.addEventListener("click", () => {
  let firstNameInputCondition = false;
  let lastNameInputCondition = false;
  let ageInputCondition = false;
  if (firstNameInput.value.trim().length === 0) {
    firstNameError.innerHTML = "<i>Empty input first name* <i>";
    firstNameError.style.color = "red";
  } else {
    firstNameError.innerHTML = "<i>Correct* <i>";
    firstNameError.style.color = "green";
    firstNameInputCondition = true;
  }
  if (lastNameInput.value.trim().length === 0) {
    lastNameError.innerHTML = "<i>Empty input last name* <i>";
    lastNameError.style.color = "red";
  } else {
    lastNameError.innerHTML = "<i>Correct* <i>";
    lastNameError.style.color = "green";
    lastNameInputCondition = true;
  }
  if (ageInput.value.trim().length === 0) {
    ageError.innerHTML = "<i>Empty input age* <i>";
    ageError.style.color = "red";
  } else if (!Number(ageInput.value.trim())) {
    ageError.innerHTML = "<i>Input should be consists only digits!* <i>";
    ageError.style.color = "red";
  } else {
    ageError.innerHTML = "<i>Correct* <i>";
    ageError.style.color = "green";
    ageInputCondition = true;
  }

  if (firstNameInputCondition && lastNameInputCondition && ageInputCondition) {
    const userInfo = {
      firstname: `${firstNameInput.value}`,
      lastname: `${lastNameInput.value}`,
      age: `${ageInput.value}`,
      userStatus: `${statusValue.value}`,
    };
    const newInterval = setInterval(() => {
      tableSection.classList.remove("d-none");
      formSection.classList.add("d-none");
      getUser();
      clearInterval(newInterval);
    }, 1000);
    setUser(userInfo);
    newInterval;
  }
});
