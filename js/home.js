const $second = document.querySelector(".-second");//com $ é uma var gerada a partir do html;
let valorInicial = 10; // var sem $ é que ela foi gerada diretamente no js;


$second.addEventListener("click", handleClick);

function handleClick(){
    const $carrinho = document.querySelector(".-last");
    $carrinho.textContent = `Carrinho (${++valorInicial})`;
    
}

/*
-quando aperto o botão adicionar o carrinho;
-ele reflete no item de carrinho no canto direito da tela
*/ 