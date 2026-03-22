// =======================
// USERS DATA (DEFAULT)
// =======================
const USERS = [
  {
    id: 8427342247,
    username: "winz",
    password: "001",
    apiKey: "WINZ_8F2KA9QXW1",
    role: "ADMIN", // Saya sarankan ADMIN untuk akun utama kamu
    createdAt: "2025-01-20"
  },
  {
    id: 7391842561,
    username: "user1",
    password: "12345",
    apiKey: "WINZ_LP29ZXM81Q",
    role: "USER",
    createdAt: "2025-01-21"
  }
];

// =======================
// INIT STORAGE
// =======================
(function initUsers() {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(USERS));
  }
})();

// =======================
// TAMBAHKAN INI (PENTING!)
// Agar register.html tidak error
// =======================
const UserDB = {
  // Fungsi ambil semua data
  getAll: function() {
    return JSON.parse(localStorage.getItem("users")) || [];
  },

  // Fungsi simpan data baru
  save: function(userData) {
    const data = this.getAll();
    data.push(userData);
    localStorage.setItem("users", JSON.stringify(data));
  },

  // Fungsi cari username (untuk cek duplikat)
  find: function(username) {
    const data = this.getAll();
    return data.find(u => u.username === username);
  }
};
