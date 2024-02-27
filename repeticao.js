let entrada = require("prompt-sync")();

// let idade = entrada("Digite sua idade: ");

// if (idade < 18){
//     console.log("Menor");
// } else if ( idade === 18){
//     console.log("Tem 18");
// } else{
//     console.log("Maior");
// }


// let num = parseInt(entrada("Digite um numero para visualizar a tabuada! \n"));
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

// let cont=1;
// do{
//     let calc = num * cont;
//     console.log(num+"x"+cont+"="+calc);
//     cont = cont + 1;
// } while(cont <= 10)
// const senha = "123456";

// do {
//     if (cont == 3){
//         break;
//     }
//         cont++;
//       var senhaDig = entrada("Digite a senha para acessar: ");
// }while (senha !== senhaDig);

// if (cont >= 3){
//     console.log("'Acesso Não Autorizado'");
// }else {
//     console.log("Acesso Autorizado");
// }


// for (cont=1; cont <= 3; cont ++){
//     var senhaDig= entrada("Digite a senha para acessar: ");
// if(cont <=3 ){    
//     if (senha == senhaDig ){
//         console.log("Acesso Autorizado");
//         break;
//     }
//     if (cont ==3 ) {
//         console.log("acesso negado!");
//     }
//     }
// }

let senha ="1234";
let snCorreta = false;

for (let index =1; index <= 3; index++){
    const snDg = entrada("Digite a Senha: ");
    if (senha === snDg){
        snCorreta = true;
        break
    }
}

console.log(snCorreta ? "Acesso Autorizado" : "Acesso negado");



    



// let sn = '123456';
// let snDg = entrada ("Digite a senha para acessar o sistema: ");

// while(sn ==! snDg){
//     snDg = entrada("Digite a senha para acessar o sistema: ");
// }