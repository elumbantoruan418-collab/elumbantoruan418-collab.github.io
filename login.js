// login.js
function handleLogin(e) {
  e.preventDefault();

  const user = document.querySelector('input[name="username"]').value;
  const pass = document.querySelector('input[name="password"]').value;

  const found = USERS.find(u => u.username === user && u.password === pass);

  if (found) {
    localStorage.setItem("login", "true");
    showToast("ACCESS GRANTED", "success");
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1200);
  } else {
    showToast("ACCESS DENIED", "error");
  }
}
