document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.querySelector("input[name='username']").value.trim();
  const password = document.querySelector("input[name='password']").value.trim();

  // === CEK ADMIN ===
  const admin = ADMINS.find(
    a => a.username === username && a.password === password
  );

  if (admin) {
    localStorage.setItem("role", "admin");
    localStorage.setItem("username", username);
    location.href = "admin.html";
    return;
  }

  // === CEK USER ===
  const user = USERS.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("role", "user");
    localStorage.setItem("username", username);
    location.href = "dashboard.html";
    return;
  }

  // === GAGAL ===
  alert("Username atau password salah");
});
