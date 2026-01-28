// ===== LOGIN =====
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = this.username.value.trim();
  const password = this.password.value.trim();

  if (!username || !password) {
    alert("Username & password wajib diisi");
    return;
  }

  // cek admin
  const admin = ADMINS.find(
    a => a.username === username && a.password === password
  );

  if (admin) {
    localStorage.setItem("role", "admin");
    localStorage.setItem("user", JSON.stringify(admin));
    location.href = "admin.html";
    return;
  }

  // cek user
  const user = USERS.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("role", "user");
    localStorage.setItem("user", JSON.stringify(user));
    location.href = "dashboard.html";
    return;
  }

  alert("Username atau password salah");
});


// ===== REGISTER =====
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = this.username.value.trim();
  const password = this.password.value.trim();

  if (!username || !password) {
    alert("Username & password wajib diisi");
    return;
  }

  // cek username sudah ada
  const exists = USERS.find(u => u.username === username);
  if (exists) {
    alert("Username sudah terdaftar");
    return;
  }

  const newUser = {
    id: generateUserId(),
    username,
    password,
    createdAt: new Date().toISOString()
  };

  USERS.push(newUser);
  saveUsers();

  alert("Daftar berhasil, silakan login");
  location.href = "index.html";
});
