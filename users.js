// users.js
let users = JSON.parse(localStorage.getItem("users")) || [];

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

function registerUser(username, password) {
  const id = "U" + Date.now();

  const user = {
    id: id,
    username: username,
    password: password,
    saldo: 0
  };

  users.push(user);
  saveUsers();

  // set user aktif
  localStorage.setItem("currentUser", id);

  return user;
}

function getCurrentUser() {
  const id = localStorage.getItem("currentUser");
  return users.find(u => u.id === id);
}

function updateUserSaldo(userId, newSaldo) {
  const user = users.find(u => u.id === userId);
  if (!user) return false;

  user.saldo = newSaldo;
  saveUsers();
  return true;
}
