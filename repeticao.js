let entrada = require("prompt-sync")();

// let idade = entrada("Digite sua idade: ");

// if (idade < 18){
//     console.log("Menor");
// } else if ( idade === 18){
//     console.log("Tem 18");
// } else{
//     console.log("Maior");
// }


let num = parseInt(entrada("Digite um numero para visualizar a tabuada! \n"));
// let cont = 1;

// while (cont <= 10){
    // let calc = num * cont;
    // console.log(num+"x"+cont+"="+calc);
    // cont++;
// }

// for (cont =1 ; cont<=10; cont++){
//     let calc = num * cont;
//     console.log(num+"x"+cont+"="+calc);
// }

let cont=1;
do{
    let calc = num * cont;
    console.log(num+"x"+cont+"="+calc);
    cont = cont + 1;
} while(cont <= 10)