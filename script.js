const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)

function add() {

  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  
  if(dayExists) {
    alert("Dia já incluso")
    return
  }

  nlwSetup.addDay(today)
}

//const data = {
//  run: ['01-01', '01-02', '01-03', '01-06', '01-07','01-08'],
// food: ['01-06'],
//  water: ['01-02'],
//}

//nlwSetup.setData(data)
//nlwSetup.load()