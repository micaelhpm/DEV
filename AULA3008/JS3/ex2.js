let frase = '   Espaços em branco   '

let textoLimpo = frase.trim();

console.log(textoLimpo); 

let comecaCom = frase.startsWith('Espaços');

console.log(comecaCom);

let terminaCom = frase.endsWith('branco');

console.log(terminaCom);

 

let nome = 'João';

let sobrenome = 'Pedro';

 



let nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto); 

 



let mensagem = 'Olá, ${nome} ${sobrenome}!';

console.log(mensagem); 