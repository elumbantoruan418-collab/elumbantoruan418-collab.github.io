// ==========================
// LOGIN
// ==========================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = this.username.value.trim();
    const password = this.password.value.trim();

    if (!username || !password) {
      alert("Username & password wajib diisi");
      return;
    }

    // === CEK ADMIN ===
    const admin = ADMINS.find(
      a => a.username === username && a.password === password
    );

    if (admin) {
      localStorage.setItem("role", "admin");
      localStorage.setItem("user", JSON.stringify(admin));
      window.location.href = "admin.html";
      return;
    }

    // === CEK USER ===
    const user = USERS.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("role", "user");
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "dashboard.html";
      return;
    }

    alert("Username atau password salah");
  });
}


// ==========================
// REGISTER
// ==========================
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = this.username.value.trim();
    const password = this.password.value.trim();

    if (!username || !password) {
      alert("Username & password wajib diisi");
      return;
    }

    // username harus unik
    const exists = USERS.some(u => u.username === username);
    if (exists) {
      alert("Username sudah terdaftar");
      return;
    }

    const newUser = {
      id: generateUserId(), // angka mulai 7
      username,
      password,
      createdAt: Date.now()
    };

    USERS.push(newUser);
    saveUsers();

    alert("Daftar berhasil, silakan login");
    window.location.href = "index.html";
  });
}
