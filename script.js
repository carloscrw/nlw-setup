const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const tody = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(tody);
  if (dayExists) {
    alert("Dia já incluso!🔴");
    return;
  }
  alert("Adiconado com sucesso!✅");
  nlwSetup.addDay(tody);
}
function save() {
  localStorage.setItem("NLWSetup@habtis", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habtis")) || {};
nlwSetup.setData(data);
nlwSetup.load();
