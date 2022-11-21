let op1 = 0;
let op2 = 0;
let op3 = 0;
let perguntas = 0;

document.addEventListener("click", function (e) {
    const elemento = e.target;
    if ( elemento.classList.contains("questao")  ) {
        elemento.classList.toggle("selecionado")
    }   
}
)

document.getElementById("botao").addEventListener("click", function (e) {
    let secao = document.getElementById("secao");   
    let quantos = verificar(secao);
    

    if (quantos > 1) {
        alert("selecione só um")                
    } else {
        identificar(secao)
        console.log("primeiro " + op1 + " o segundo " + op2 + " o terceiro " + op3)
        //mudar para a proxima pergunta
        perguntas = proximaPerg(secao, perguntas);
        console.log(perguntas)
    }

    
    
    
})

function identificar(a) {
    let filhos = a.children;
    if (filhos[0].classList.contains("selecionado")) {
        op1 += 1;
    } else if (filhos[1].classList.contains("selecionado")) {
        op2 += 1;
    } else if (filhos[2].classList.contains("selecionado")) {
        op3 += 1;
    } 
}


function proximaPerg(pai, b) {
    let filhos = pai.children;
    filhos[2].remove();
    filhos[1].remove();
    filhos[0].remove();
    if (b == 0) {       
        let texto1 = "Sou um deus gamer";
        let texto2 = "Top 1 no cs";
        let texto3 = "Acima de mim apenas vinicius 14";
        adicionar(pai, texto1, 0);
        adicionar(pai, texto2, 1);
        adicionar(pai, texto3, 2);
        
    } else if (b == 1) {
        let texto1 = "Trabalho 27 horas por dia";
        let texto2 = "to a 2 semanas sem dormir";
        let texto3 = "hummm soninho";
        adicionar(pai, texto1, 0);
        adicionar(pai, texto2, 1);
        adicionar(pai, texto3, 2);
        
    } else {
        resultado(op1, op2, op3)
    }
    b++;
    console.log(b)
    return b;
}



function verificar(a) {
    let filhos = a.children;
    let b = 0;
    if(filhos[0].classList.contains("selecionado")) {
        b += 1
    }
    if(filhos[1].classList.contains("selecionado")) {
        b += 1
    }
    if(filhos[2].classList.contains("selecionado")) {
        b += 1
    }
    return b;
    

}
    

function adicionar(Epai, texto, posicao) {
    let filhos = Epai.children;
    let novoE = document.createElement("div");
    novoE.classList.add("questao")
    let parag = document.createElement("h2");
    parag.textContent = texto;
    novoE.appendChild(parag);
    Epai.insertBefore(novoE, filhos[posicao])
}

function resultado(primeiro, segundo, terceiro) {
    if (primeiro > segundo && primeiro > terceiro) {
        let secao = document.getElementById("secao");
        let filhos = secao.children;
        console.log(filhos)
        
        let Nome = document.createElement("p");
        Nome.textContent = "Você seria o grande william"
        Nome.classList.add("nome")
        secao.appendChild(Nome)
        let resultFinal = document.createElement("img");
        resultFinal.classList.add("fotoResult")
        resultFinal.src = "img/deusvillian.jpg";
        secao.appendChild(resultFinal); 
        document.getElementById("botao").remove();       
    } else if (segundo > primeiro && segundo > terceiro) {
        let secao = document.getElementById("secao");
        let filhos = secao.children;
        console.log(filhos)
        
        let Nome = document.createElement("p");
        Nome.textContent = "Você seria o herik profissional em cs"
        Nome.classList.add("nome")
        secao.appendChild(Nome)
        let resultFinal = document.createElement("img");
        resultFinal.classList.add("fotoResult")
        resultFinal.src = 'img/herikdocs.jpg';
        secao.appendChild(resultFinal); 

        document.getElementById("botao").remove();
    } else if (terceiro > primeiro && terceiro > segundo){
        let secao = document.getElementById("secao");
        let filhos = secao.children;
        console.log(filhos)
        
        let Nome = document.createElement("p");
        Nome.textContent = "Você seria o pedro versão faro"
        Nome.classList.add("nome")
        secao.appendChild(Nome)
        let resultFinal = document.createElement("img");
        resultFinal.classList.add("fotoResult")
        resultFinal.src = 'img/pedroversaofaro.jpg';
        secao.appendChild(resultFinal); 

        document.getElementById("botao").remove();
    } else {
        let secao = document.getElementById("secao");
        let filhos = secao.children;
        console.log(filhos)
        
        let Nome = document.createElement("p");
        Nome.textContent = "Você empatou, tente novamente"
        Nome.classList.add("nome")
        secao.appendChild(Nome)

        document.getElementById("botao").remove();
         
    }
}
