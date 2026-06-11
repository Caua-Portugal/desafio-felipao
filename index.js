// Desafio classificador de nivel de heroi

let nomeDoHeroi = "Zezinhho da Velocidade" 
let xpDoHeroi = 7356



if (xpDoHeroi <= 1000) {
    console.log ("O herói de nome " + nomeDoHeroi + " está no nível de Ferro")
}
else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    console.log ("O herói de nome  " + nomeDoHeroi +  " está no nível de Bronze")
}
else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    console.log ("O herói de nome " + nomeDoHeroi + " está no nível de Prata")
}
else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    console.log ("O herói de nome " + nomeDoHeroi + " está no nível de Ouro") 
}
else if (xpDoHeroi >=7001 && xpDoHeroi <= 8000) {
    console.log ("O herói de nome " + nomeDoHeroi + " está no nível de Platina")
}
else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    console.log ("O herói de nome " + nomeDoHeroi + " está no nível de Ascendente")
}
else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    console.log ("O herói de nome " + nomeDoHeroi + " está no nível de Imortal")
}
else {
    console.log ("O herói de nome " + nomeDoHeroi + " está no nível de Radiante")
}