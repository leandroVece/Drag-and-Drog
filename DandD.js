var destino = document.querySelectorAll('article');
var img = document.querySelectorAll('img');
var selectId;
var dropTargetId;

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
comenzar();