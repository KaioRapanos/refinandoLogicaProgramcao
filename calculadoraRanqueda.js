let vitoriasDoJogador = 70;
let derrotasDoJogador = 16;
let resultadoDoJogador = saldoDoJogador(vitoriasDoJogador,derrotasDoJogador);

function saldoDoJogador ( x , y ){
    return x - y;
}

function rankDoJogador( x ){
    if( x <= 10){
        return "Ferro";
    } else if ( x <= 20){
        return "Bronze";
    } else if ( x <= 50){
        return "Prata";
    } else if ( x <= 80){
        return "Ouro";
    } else if ( x <= 90){
        return "Diamante";
    } else if ( x <= 100){
        return "Lendario";
    } else if ( x < 100){
        return "Imortal";
    }
}

console.log("O Herói tem saldo de " + resultadoDoJogador + 
    " está no rank de " + rankDoJogador(resultadoDoJogador));