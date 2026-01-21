// script.js

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    showNotif("error", "Login gagal", "Username atau password kosong");
    return;
  }

  const user = USERS.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    showNotif("error", "Login gagal", "Username atau password salah");
    return;
  }

  // simpan session sederhana
  localStorage.setItem("loginUser", JSON.stringify(user));

  showNotif("success", "Login berhasil", "Mengalihkan ke dashboard...");

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1200);
}
