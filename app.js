let data = JSON.parse(localStorage.getItem("menuData")) || [];

function saveData() {
  const item = document.getElementById("item").value;
  const price = document.getElementById("price").value;

  if (!item || !price) return;

  data.push({ item, price });
  localStorage.setItem("menuData", JSON.stringify(data));
  document.getElementById("item").value = "";
  document.getElementById("price").value = "";
  showData();
}

function showData() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  data.forEach((d, i) => {
    list.innerHTML += `<li>${d.item} - ${d.price} টাকা</li>`;
  });
}

showData();