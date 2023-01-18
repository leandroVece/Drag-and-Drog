# Drag and Drog

este proyecto lo pense en un tiempo para hacer un pequelño juego, pero por las circuntancias del momento lo termine abandonado.

Para que el esfuerzo que quedara en nada, paso el sensillo codigo para que puedan estudiarlo. Espero que alguien se pueda veneficiar de el.

Para empezar me fue necesario capturar las imagenes y el destino donde iba a parar. para ello use el metodo que nos brinda Js. 

    var destino = document.querySelectorAll('article');
    var img = document.querySelectorAll('img');

con esto capture un array que contiene las imagenes y los Articulos donde destinara cada imagen.

Luego necesitaba un identidicador unico (ID), cada vez que arrastrara y soltara en su destino

    var selectId;
    var dropTargetId;

Ahora necesitaba que mis imagenes y los articulos estuvieran a la escucha de la accion de artrastar. para no estar escribiendo una por una las funciones, use un bucle para que hiciera ese trabajo por mi.

    function comenzar() {
        destino.forEach(item => {
            item.addEventListener('dragstart', dragStart);
            item.addEventListener('drop', dragDrop);
            item.addEventListener('dragover', dragOver);
        });
        img.forEach(item => {
            item.addEventListener('dragstart', dragStart);
            item.addEventListener('drop', dragDrop);
            item.addEventListener('dragover', dragOver);
        });
    }

De esta manera en mi funcion comenzar() cada elemento de mi array estaba a la escucha de una nueva funcion.

Como pueden ver en mi html cree 4 imagenes y 4 articulos. Cada uno de ellos tiene 3 funciones, es decir que pude simplificar 24 funciones de esta manera ¿Pueden notar la importancia de los bucles? seguramente si.

Ahora que cada imagen y cada articulo esta a la escucha de una funcion, es necesario crear la logica de las funciones.

    function dragStart() {
        selectId = this.id;
    }

    function dragDrop() {
        dropTargetId = this.id;
        var src = document.getElementById(selectId).src;
        document.getElementById(dropTargetId).innerHTML = "<img src='" + src + "' class='img'>";

    }

    function dragOver(ev) {
        ev.preventDefault();
    }

Pueden notar lo simple que son estas funciones. dragOver evita que la pagina se recargue.

dragStart captura el id de la img

dragDrop id del articulo usado. luego con ese id usamos el metodo innerHTML para editarlo. y por ultimo con el Id capturado de la imagen acedemos a la direccion "src" para que se visualice en el article.

Es sorprendente como cosas que parecen complicadas en realidad son bastante simple ¿veradad?