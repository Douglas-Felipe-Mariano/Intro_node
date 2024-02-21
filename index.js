console.log("Hello World!") 

let nome="Doga"; //let é uma das formas de declaração de variavel, sendo ela de varaivel "local" - Tipo de variavel: String

console.log(nome);

let idade = 25; // Tipo de variavel: Number
let altura = 1.75;

console.log('nome:' + nome + " - idade:" +idade+ ' - altura:' +altura);

let trabalha=true; // Tipo de Variavel: Bolean

console.log(trabalha); // Exibe a Varivael trabalha

console.log("trabalha: " + (trabalha == true ? "Sim" : "Não" )); // Exibe a variavel trabalha por meio de um operador ternario, ou um "if simplificado"

const sangue = "A+"; // Variavel constante, apenas obtem um valor imutavel, não tem tipo

let endereco ={ //Variavel em tipo de objeto
    "rua" : "Sergio Bevilaqua",
    "num" : "80",
    "Bairro" : "Ant. Per. Gaspar",
    "UF" : "SP",
    "mora" : true
}

console.log(endereco);

console.log(typeof (endereco));

let fruta = ["pequi","tumate","bóbora"]; // Array de uma dimensão

console.log(fruta);

console.log(fruta [0]); // Mostra o item da posição 0 do array fruta

let velha= [ // Array de duas dimensões
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

console.log(velha[2][2]);
console.log(typeof(velha)); // Demonstra o tipo de varivel "velha"

console.log((Array.isArray(velha)) ? "Array" : "Não é Array"); // Exibe a variavel trabalha por meio de um operador ternario, ou um "if simplificado"