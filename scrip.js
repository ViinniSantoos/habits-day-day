const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  nlwSetup.addDay("23/01")
  nlwSetup.addDay("24/01")
  nlwSetup.addDay("25/01")
  nlwSetup.addDay("26/01")
  nlwSetup.addDay("27/01")
  nlwSetup.addDay("28/01")
  nlwSetup.addDay("29/01")
  nlwSetup.addDay("30/01")
  nlwSetup.addDay("31/01")
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
