// ===== SALDO PER USER =====
let saldo = 0;
let currentUserId = null;

// ambil user login
function getCurrentUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// load saldo user berdasarkan ID
function loadSaldo() {
  const user = getCurrentUser();
  if (!user || !user.id) {
    saldo = 0;
    return;
  }

  currentUserId = user.id;

  const allSaldo = JSON.parse(localStorage.getItem("SALDO_USERS")) || {};
  saldo = allSaldo[currentUserId] || 0;
}

// simpan saldo user
function saveSaldo() {
  if (!currentUserId) return;

  const allSaldo = JSON.parse(localStorage.getItem("SALDO_USERS")) || {};
  allSaldo[currentUserId] = saldo;

  localStorage.setItem("SALDO_USERS", JSON.stringify(allSaldo));
}

// ===== TOP UP SALDO =====
function topUpSaldo(jumlah) {
  loadSaldo();
  saldo += parseInt(jumlah);
  saveSaldo();
  return saldo;
}

// auto load saat halaman dibuka
loadSaldo();
