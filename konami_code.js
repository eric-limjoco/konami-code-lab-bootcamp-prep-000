const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function onKeyDownHandler(e){
  const key = e.key;
  console.log(key)
  
  if(key === codes[index]){
    index++;
    if(index === codes.length){
      alert("Hurray!")
    }
    
  }
  else{
    index = 0;
  }
}

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler)
}

init()
