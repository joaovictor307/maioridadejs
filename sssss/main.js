let idade=0 , maior=0, menor=0, idadedigitada=0
for (let i=1;i<=3; i++) {
    prompt("informe a idade do jogador")
    idade=document.querySelector(".jogador")
    idadedigitada.textContext=idade
    if (i==1) {
        maior=idade
        menor=idade
        console.log(maior, menor)
    } else {
        if(idade>maior){
            maior=idade
        }
        if(idade<menor){
            menor=idade
        }
    }
} alert(`a idade do jogador mais velho é ${maior}, a idade do jogador menor é${menor}`)