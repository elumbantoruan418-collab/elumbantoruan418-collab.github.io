function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "1234") {
    alert("Login sukses");
  } else {
    alert("Login gagal");
  }
}
