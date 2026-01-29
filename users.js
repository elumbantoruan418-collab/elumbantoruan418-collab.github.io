// =======================
// USERS DATA
// =======================
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

// =======================
// SAVE USERS TO STORAGE
// =======================
function saveUsers() {
  localStorage.setItem("USERS", JSON.stringify(USERS));
}

// =======================
// LOAD USERS FROM STORAGE
// =======================
function loadUsers() {
  const storedUsers = localStorage.getItem("USERS");

  if (!storedUsers) return;

  USERS.length = 0;
  USERS.push(...JSON.parse(storedUsers));
}

// =======================
// AUTO LOAD ON PAGE OPEN
// =======================
loadUsers();
