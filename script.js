// ============================
// LOGIN SCRIPT
// ============================

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    notify("Username dan password wajib diisi", "error");
    return;
  }

  // ===== CEK ADMIN =====
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );

  if (admin) {
    setSession("admin", admin.username);
    redirect("admin.html");
    return;
  }

  // ===== CEK USER =====
  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    setSession("user", user.username);
    redirect("dashboard.html");
    return;
  }

  // ===== GAGAL =====
  notify("Username atau password salah", "error");
}

// ============================
// DAFTAR USER (ANTI ADMIN)
// ============================

function register(username, password) {
  if (!username || !password) {
    notify("Username dan password wajib diisi", "warning");
    return;
  }

  const adminExist = ADMINS.some((a) => a.username === username);
  const userExist = USERS.some((u) => u.username === username);

  if (adminExist || userExist) {
    notify("Username sudah digunakan", "error");
    return;
  }

  USERS.push({ username, password });
  notify("Akun berhasil dibuat", "success");
}

// ============================
// SESSION & REDIRECT
// ============================

function setSession(role, username) {
  localStorage.setItem("role", role);
  localStorage.setItem("username", username);
}

function redirect(page) {
  window.location.href = page;
}

// ============================
// NOTIFIKASI (BISA SAMBUNG KE UI LU)
// ============================

function notify(message, type = "info") {
  alert(`[${type.toUpperCase()}] ${message}`);
}
