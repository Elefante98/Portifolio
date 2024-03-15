window.addEventListener("scroll", function() { //Cria um evento que chama uma função toda vez que a tela é rolada 
    var h4Element = document.querySelector(".scroll"); //Uma variavel h4Element recebe uma procura no HTML por um elemento de classe scroll
    var scrollPosition = window.scrollY; //Uma variavel scrollposition recebe a posição atual da tela em relação ao eixo Y
    var newPos = Math.min(scrollPosition, window.innerWidth - 200); // Uma variavel newPos recebe a função Math.min(a, b), que retorna o menor valor entre a e b, menos 200 pixels, para que o h4 não passe mais de 200px para a direita

    h4Element.style.left = newPos + "px"; //Define a nova posição do elemento de classe scroll como newPos e especifica como pixels  
});



window.addEventListener('scroll', function() { //Cria um evento que chama uma função toda vez que a tela é rolada
    var sections = document.querySelectorAll('section'); //A variavel sections recebe todos os elementos sections do arquivo HTML
    var indicator = document.getElementById('indicator'); //A variavel indicator recebe o elemento indicator do arquivo HTML
    var scrollPosition = window.scrollY; // A variavel scrollPosition recebe a posição atual em relação ao eixo Y

    sections.forEach(function(section) { //Loop que pega cada uma das sessões da variavel sections e executa algo com base nelas
        var top = section.offsetTop; //A variavel top recebe a posição vertical (em pixels) do topo da seção em relação ao topo do documento
        var bottom = top + section.offsetHeight; //
        if (scrollPosition >= top && scrollPosition < bottom) {
            var width = (section.offsetHeight / document.body.scrollHeight) * 100;
            indicator.style.width = width + '%';
            return;
        }
    });
});

const circleContainers = document.querySelectorAll('.circle-container');

circleContainers.forEach((container) => {
    let timeoutId;

    container.addEventListener('mouseover', () => {
        const circleName = container.querySelector('.circle').dataset.circle;
        const conteudoElement = document.getElementById(`conteudo-${circleName}`);
        conteudoElement.classList.add('show');
        clearTimeout(timeoutId);
    });

    container.addEventListener('mouseout', (event) => {
        // Verifica se o mouse sai tanto do círculo quanto do conteúdo
        if (!container.contains(event.relatedTarget)) {
            const circleName = container.querySelector('.circle').dataset.circle;
            const conteudoElement = document.getElementById(`conteudo-${circleName}`);
            timeoutId = setTimeout(() => {
                conteudoElement.classList.remove('show');
            }, 500);
        }
    });
});
