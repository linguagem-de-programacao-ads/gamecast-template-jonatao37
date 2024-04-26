
async function buscar() {
    console.log("Passei por aqui");

    const resposta = await fetch("https://660f44af356b87a55c510d7a.mockapi.io/agendas");
    const respostaDadosAgenda = await resposta.json();

    console.log("Resposta:", respostaDadosAgenda);

    const cards = document.getElementById("cards_games");

    cards.innerHTML = respostaDadosAgenda.map((agenda) =>{
        var dataAgenda = new Date(agenda.dataJogo);
        return `
        <div class="cardItem">
                <div class="dataGame"> 
                    <img src="../imagens/calendar-solid.svg" alt="">${dataAgenda.getDay()}/${dataAgenda.getMonth()}/${dataAgenda.getFullYear()}
                </div>
                <img class="img-background" src="${agenda.urlImagem}" alt="">
                <div class="descricao">
                    <p> <strong>${agenda.nome}</strong> </p>
                    <p>${agenda.descricao}</p>
                    <p><strong>Gamers: </strong></p>

                    <div class="gamers">
                           ${
                            agenda.gamers.map((gamerItem) =>{
                                return `<div class="gamerItem">${gamerItem}</div>`
                            }).join('')
                           }
                    </div>

                  
                </div>  
                <div class="assistir">
                        <a class="assistirItem"> <img src="../imagens/youtube.svg" alt=""> Assistir </a>
                </div>
            </div>
        `
    }
    
    ).join('');

}

console.log("antes de buscar")
buscar();
console.log("Depois de buscar")
