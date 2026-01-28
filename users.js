// ambil user
let USERS = JSON.parse(localStorage.getItem("USERS")) || [];

// admin
const ADMINS = [
  {
    id: 7000000000,
    username: "admin",
    password: "admin123"
  }
];

// simpan
function saveUsers() {
  localStorage.setItem("USERS", JSON.stringify(USERS));
}

// generate ID:
// contoh: 7428391056
function generateUserId() {
  let id;
  do {
    // selalu mulai dari 7
    const rest = Math.floor(100000000 + Math.random() * 900000000);
    id = Number("7" + rest); // total 10 digit
  } while (USERS.some(u => u.id === id));

  return id;
}
