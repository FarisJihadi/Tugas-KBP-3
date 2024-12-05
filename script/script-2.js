// Event hover pada tombol
document.getElementById("hoverBtn").addEventListener("mouseover", function () {
  document.getElementById("message").textContent = "Mouse is over the button!";
});

document.getElementById("hoverBtn").addEventListener("mouseout", function () {
  document.getElementById("message").textContent = ""; // Menghapus pesan ketika mouse keluar
});
