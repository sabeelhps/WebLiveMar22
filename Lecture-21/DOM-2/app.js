const btn = document.getElementById('btn');
const h1 = document.querySelector('h1');
const addBtn = document.getElementById('add-btn');
const inp = document.getElementById('inp');
const list = document.getElementById('list');


btn.onclick = function () {
    h1.classList.toggle('headline');
}


addBtn.onclick = function () {
    const li = document.createElement('li');

    li.onclick = function () {
        li.remove();
        return;
    }

    li.innerText = inp.value;
    list.append(li);
}