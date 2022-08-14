// https://www.omnicalculator.com/math/cube-root

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const rootRadio = document.getElementById('rootRadio');
const numberRadio = document.getElementById('numberRadio');
const degreeoftherootRadio = document.getElementById('degreeoftherootRadio');

let root;
let number = v1;
let degreeoftheroot = v2;


// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

rootRadio.addEventListener('click', function() {
  variable1.textContent = 'Number';
  variable2.textContent = 'Degree of the root';
  number = v1;
  degreeoftheroot = v2;
  result.textContent = '';
});

numberRadio.addEventListener('click', function() {
  variable1.textContent = 'Root';
  variable2.textContent = 'Degree of the root';
  root = v1;
  degreeoftheroot = v2;
  result.textContent = '';
});

degreeoftherootRadio.addEventListener('click', function() {
  variable1.textContent = 'Root';
  variable2.textContent = 'Number';
  root = v1;
  number = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(rootRadio.checked)
    result.textContent = `Root = ${computeRoot().toFixed(2)}`;

  else if(numberRadio.checked)
    result.textContent = `Number = ${computeNumber().toFixed(2)}`;

  else if(degreeoftherootRadio.checked)
    result.textContent = `Degree of the root = ${computeDegreeoftheroot().toFixed(2)}`;
})

// calculation

function computeRoot() {
  return Math.pow(Number(number.value), 1 / Number(degreeoftheroot.value));
}

function computeNumber() {
  return Math.pow(Number(root.value), Number(degreeoftheroot.value))
}

function computeDegreeoftheroot() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}
