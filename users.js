// ambil user dari localStorage
let USERS = JSON.parse(localStorage.getItem("USERS")) || [];

// admin (hardcode)
const ADMINS = [
  {
    id: "ADMIN-1",
    username: "winz",
    password: "001"
  }
];

// simpan user
function saveUsers() {
  localStorage.setItem("USERS", JSON.stringify(USERS));
}

// generate ID otomatis
function generateUserId() {
  return "USR-" + Date.now();
}
