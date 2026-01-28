// ===== USERS DATA =====
const USERS = [
  {
    id: 8427342247,
    username: "winz",
    password: "001",
    createdAt: "2025-01-20"
  },
  {
    id: 7391842561,
    username: "user1",
    password: "12345",
    createdAt: "2025-01-21"
  }
];

// ===== SAVE & LOAD =====
function saveUsers() {
  localStorage.setItem("USERS", JSON.stringify(USERS));
}

function loadUsers() {
  const data = localStorage.getItem("USERS");
  if (data) {
    USERS.length = 0;
    USERS.push(...JSON.parse(data));
  }
}

// auto load saat halaman dibuka
loadUsers();
