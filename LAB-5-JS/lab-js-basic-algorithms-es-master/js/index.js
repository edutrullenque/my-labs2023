// Iteration 1: Names and Input
//
let hackerOne = 'Eddie';
let hackerTwo = "Ernesto";
console.log("The drivers name is " + hackerOne);
console.log('The navegator name is ' + hackerTwo);

// Iteration 2: Conditionals
if (hackerOne.length > hackerTwo.length) {
    console.log("El conductor tiene el nombre más largo, tiene " + hackerOne.length + " caracteres.");
} else if (hackerOne.length < hackerTwo.length) {
    console.log("Parece que el navegante tiene el nombre más largo, tiene " + hackerTwo.length + " caracteres. ");
} else {
    console.log("¡Vaya, ambos tienen nombres igual de largos, " + hackerTwo.length + " caracteres. ");
}
// Iteration 3: Loops
let nameEddie ="";
for (let i = 0; i < hackerOne.length; i++) {
        nameEddie+= hackerOne[i].toUpperCase()+ " ";    
    }

console.log(nameEddie);
console.log(hackerTwo.split("").reverse()); 


if (hackerOne > hackerTwo) {
    console.log("El nombre del conductor va primero.");
    
} else if (hackerOne < hackerTwo) {
    console.log("Yo, el navegador va primero definitivamente.");
} else{
    console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}
//
//
// Bono 1.
let parrafos =['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nulla a enim eleifend tincidunt. Curabitur sodales, risus sed dignissim porta, lacus erat aliquam sem, convallis lacinia enim dui non eros. Morbi ipsum orci, pharetra id pretium ac, blandit eu ex. Aenean ac metus nulla. Mauris pulvinar pulvinar nisi sed tincidunt. Nullam volutpat, elit a pulvinar accumsan, dui ante mattis ex, id posuere neque tellus volutpat turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia cura; Etiam ut libero quam. Quisque eget maximus ex. Phasellus sit amet turpis sed orci hendrerit sodales. Mauris sed pharetra elit. Duis imperdiet nisi ornare tincidunt auctor. Donec varius turpis consectetur rhoncus aliquet. Praesent auctor enim hendrerit ipsum mattis, non elementum justo gravida. Aenean sodales urna in lectus luctus, sit amet imperdiet odio hendrerit. Pellentesque auctor dictum felis, id aliquam urna efficitur at. Curabitur ac risus enim. Phasellus porta tristique urna eget luctus. Nam ut diam a magna accumsan viverra. Aenean ultrices augue maximus nisl viverra molestie. Duis pulvinar tortor commodo purus scelerisque sodales. Phasellus in turpis nec odio ultrices maximus et a massa. Donec dignissim molestie velit sed imperdiet.'];
let LoremDePalabras = parrafos.map(cantidad=>{
return cantidad.length})
console.log(LoremDePalabras)

let contador = 0

for (word of LoremDePalabras) {
    if (word == "et") {
        contador = contador + 1
    }
}

console.log(contador);
console.log(`El texto loremipsum tiene ${contador} palabras "et" `);

// Bono 2.
let phrasesToCheck = [
  "Un hombre, un plan, un canal, ¡anamá!",
  "Amor, roma",
  "Coche de carreras",
  "Apilar gatos",
  "Pisar no mascotas",
  "Race car",
  "Ponlo",
  "¿Era un coche o un gato lo que vi?",
  "No hay 'x' en Nixon",
];

console.log(phrasesToCheck);
for (phrase of phrasesToCheck) {
  let phraseLowerCase = phrase.toLowerCase().replace(",", "").replace(" ", "");
  let reversePhrase = phraseLowerCase.split("").reverse().join("");
  if (phraseLowerCase == reversePhrase) {
    console.log(`${phrase} es un palindromo`);
  }
}
