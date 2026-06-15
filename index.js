let herois = [
    {nome: "Zezinho da velocidade", level: 20000, rank: ""},
    {nome: "Maria da força", level: 1500, rank: ""},
    {nome: "João do poder", level: 100, rank: ""},
    {nome: "Ana da inteligência", level: 2200, rank: ""},
    {nome: "Carlos da resistência", level: 6789, rank: ""}
]

for (let contador = 0; contador < herois.length; contador++) {
    
    let xp = herois[contador].level
    let rank = ""

    if (xp < 1000){
        rank = "Ferro"
    }
    else if (xp < 2000){
        rank = "Bronze"
    }
    else if (xp < 5000){
        rank = "Prata"
    }
    else if (xp < 7000){
        rank = "Ouro"
    }
    else if (xp < 8000){
        rank = "Platina"
    }
    else if (xp < 9000){
        rank = "Ascendente"
    }
    else if (xp < 10000){
        rank = "Imortal"
    }
    else {
        rank = "Radiante"
    }

    console.log ("O herói de nome " + herois[contador].nome + " está no nível de " + herois[contador].level + " e tem o rank de " + rank)
}
