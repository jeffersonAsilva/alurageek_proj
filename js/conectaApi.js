async function listaVideos(){

    const conexao=await fetch('http://localhost:3000/cards');
    const conexaoConvertida=await conexao.json();
    return conexaoConvertida ;
}

async function criaVideo(descricao,imagem,icone,preco){
    const conexao = await fetch('http://localhost:3000/cards',
       {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            
            descricao:descricao ,
            imagem:imagem,
            icone:icone,
            preco:preco,
           })

       }
      
      
    )
    if(!conexao.ok){
        throw new Error("não foi possível iniciar a conexão.")
    }
    const conexaoConvertida=await conexao.json();
    return conexaoConvertida ;
}


async function excluirProduto(ProdutoId) {
    try {
        const conexao = await fetch(`http://localhost:3000/cards/${ProdutoId}`, {
            method: "DELETE",
        });
        const data = await conexao.json();
        console.log(data); 
    } catch (error) { 
        console.error("Erro ao deletar produto:", error);
        throw error;
    }  
}


export const conectaApi={
    listaVideos,
    criaVideo,
    excluirProduto
    
}