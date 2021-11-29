var col = document.querySelectorAll('.col')
for (const iterator of col) {
    iterator.addEventListener('dragover',dragover);
    iterator.addEventListener('dragenter', dragenter);
    iterator.addEventListener('dragleave', dragleave);
    iterator.addEventListener('drop', drop);
}
function dragover(event){event.preventDefault();}
function dragenter(event){event.target.classList.add('dragenter');}
function dragleave(event){event.target.classList.remove('dragenter');}
function drop(event) { event.target.append(ii);}
////////////////////////////////////////
const item = document.querySelectorAll(".item");
var ii;
for (const it of item) {
    it.addEventListener('dragstart', dragstart)
    it.addEventListener('dragend', dragend)
}
function dragstart(event) {
    ii = event.target
    event.target.classList.add('start');
   setTimeout(() => event.target.classList.add('hide'), 0);
}
function dragend(event) {

    event.target.className = 'item';
  
}