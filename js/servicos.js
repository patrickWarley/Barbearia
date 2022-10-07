
//add the onclick events to the cards

function addEventsToCards() {
  var imgEsquerda = document.getElementById("imgEsquerda");
  var imgDireita = document.getElementById("imgDireita");
  var meio = document.getElementById("imgMeio");

  var indexGen = getZindex();

  imgEsquerda.addEventListener('click', (evt) => {
    var container = evt.target.parentElement;
    container.classList.toggle('activeRight');
    container.style.zIndex = indexGen.next().value;

    setTimeout(() => container.classList.toggle('activeRight'), 3000);
  });

  imgDireita.addEventListener('click', (evt) => {
    var container = evt.target.parentElement;
    container.classList.toggle('activeLeft');
    container.style.zIndex = indexGen.next().value;

    setTimeout(() => container.classList.toggle('activeLeft'), 3000);
  });

  meio.addEventListener('click', (evt) => {
    var container = evt.target.parentElement;
    container.classList.toggle('activeMeio');
    container.style.zIndex = indexGen.next().value;

    setTimeout(() => container.classList.toggle('activeMeio'), 3000);
  });
}

//get the zindex
function* getZindex() {
  count = 1;
  while (true) {
    yield count++;
  }
}

function formAlertMessage(msg) {
  var msgbox = document.getElementById('alertMessage');

  msgbox.innerText = msg;
  msgbox.classList.toggle('show');
  setTimeout(() => {
    msgbox.classList.toggle('show');
  }, 3000);
}

function init() {

  //get the form and add an event listener
  var form = document.getElementById("agendarFormulario");

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let target = evt.target;

    let formdata = new FormData(target);

    if (validateForm(formdata, (msg) => formAlertMessage(msg))) return;

    console.log(formdata);
    formAlertMessage('Ta marcado, logo entraremos em contato com voce para confirmar!');
  });

  //add the animation events
  addEventsToCards();
}

function validateForm(formData, err) {
  //I'll let it here for later
}

init();