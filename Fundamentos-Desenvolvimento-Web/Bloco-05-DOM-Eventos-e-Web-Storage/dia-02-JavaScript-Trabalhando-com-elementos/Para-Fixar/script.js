  //Acesse o elemento elementoOndeVoceEsta .

  document.getElementById('primeiroFilho').nextElementSibling

  //Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

  let dad = document.getElementById('elementoOndeVoceEsta').parentNode
  dad.style.color = 'red'

  //Acesse o primeiroFilhoDoFilho e adicione um texto a ele.

  let text = document.getElementById('elementoOndeVoceEsta').firstElementChild
  text.innerText = 'Filho do Pai do Avo da Filha'

  // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

  let atention = document.getElementById('elementoOndeVoceEsta').nextSibling

  // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

  let element = document.getElementById('elementoOndeVoceEsta').nextElementSibling

  // Agora acesse o terceiroFilho a partir de pai .

  let terciario = document.getElementById('pai').lastElementChild.previousElementSibling

  // Crie um irmão para elementoOndeVoceEsta .

  //  Não entendi pq não funcionou com
  //  let owner = document.querySelector('.pai');
  let owner = document.getElementById('pai');
  let createson = document.createElement('section');
  createson.id = 'createsonID'
  createson.innerText = 'vamo de funcionar?'
  owner.appendChild(createson)

  // Crie um filho para elementoOndeVoceEsta.

  let ownerSon = document.getElementById('elementoOndeVoceEsta');
  let createSonSon = document.createElement('section');
  createSonSon.id = 'createSonSonID'
  ownerSon.appendChild(createSonSon)

  // Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

  let ownerBOSS = document.querySelectorAll('#paiDoPai');
  for (let i = 0; i < ownerBOSS.lenght; i += 1) {
    if (ownerBOSS[i]) {

    }
  }


  console.log(ownerBOSS)