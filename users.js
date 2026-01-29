// =======================
// USERS DATA (DEFAULT)
// =======================
const USERS = [
  {
    id: 8427342247,
    username: "winz",
    password: "001",
    apiKey: "WINZ_8F2KA9QXW1",
    role: "USER",
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
// INIT STORAGE (JANGAN TIMPA DATA)
// =======================
(function initUsers() {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(USERS));
  }
})();
