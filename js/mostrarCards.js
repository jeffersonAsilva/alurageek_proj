import { conectaApi } from "./conectaApi.js";

const lista=document.querySelector("[data-lista]");

export default function constroiCard(descricao,imagem,icone,preco){
    
                const video=document.createElement('li');
                video.innerHTML=`<div class="card">
                <img  src="${imagem}" alt="storm" class="img">
                <h2>${descricao}</h2>
                <div class="descricao">
                    <p class="preco">${preco}</p>
                    <img src="${icone}" alt="lixeira" class="icone">
                    
                </div>
              </div> `;
             
    return video;
}

async function listaVideos(){

    try{
    const listaApi=await conectaApi.listaVideos();
    listaApi.forEach(elemento =>lista.appendChild(
        constroiCard(elemento.descricao,elemento.imagem,elemento.icone,elemento.preco)) );
    }catch{
        lista.innerHTML=`<h2 class="mensagem__titulo">Não foi possível acessar a lista de produtos.</h2>`
    }
}

listaVideos()
