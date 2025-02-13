const toggleForm = document.getElementById("toggleForm");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const nameField = document.getElementById("nameField");

toggleForm.addEventListener("click", function (e) {
  e.preventDefault();
  if (submitBtn.textContent === "Login") {
    formTitle.textContent = "Sign Up";
    submitBtn.textContent = "Sign Up";
    toggleForm.textContent = "Already have an account? Login";
    nameField.classList.remove("d-none");
  } else {
    formTitle.textContent = "Login";
    submitBtn.textContent = "Login";
    toggleForm.textContent = "Don't have an account? Sign up";
    nameField.classList.add("d-none");
  }
});
