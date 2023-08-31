const words = [
  "VASARA"
];
const word = words[0].split("");
const wordContainer = document.querySelector(".word-container");
const checkButoon = document.getElementById("check");
const meesage = document.getElementById("message");

let attemptLeft = 5;


// jāizveido klucīši 
function createInputFields() {
  for (let i = 0; i < word.length; i++) {
    const inputField = document.createElement("input");
    inputField.classList.add("input-field");
    inputField.maxLength = 1;
    wordContainer.appendChild(inputField);
  }
}
// par krāsām...
function krasas(cells, colorClass){
  for(const cell of cells){
    cell.classList.add(colorClass);
  }
}


// funkcija, kura pārbauda
function checkAnswer(){
  const inputFields=document.querySelectorAll(".input-field");
  let correctCount=0;

  if(attemptLeft>0){
    attemptLeft--;

    inputFields.forEach((inputField, index)=>{
      const letter=inputField.value.toUpperCase();

      if(letter===word[index]){
        inputField.classList.add("green");
        correctCount++;
      }else if (word.includes(letter)){
          inputField.classList.add("yellow");
      }
    });
  if( correctCount===word.length){
    krasas(inputFields, "green");
    message.textContent="pareizi!"
    checkButoon.disable=true;
  }else{
    if(attemptLeft===0){
      krasas(inputFields, "yellow");
      message.textContent="Zaudējāt!";
      checkButoon.disabled=true;
     }else{
      message.textContent=`Daļēji pareizi vai nepareizi.
      Jums atlikuši ${attemptLeft} mēģinājumi`;
     }
  }
  }

}

//klausītāji
checkButoon.addEventListener("click", checkAnswer);











createInputFields();