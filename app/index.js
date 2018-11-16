// Load application styles
import 'styles/index.less';

// Load tree data
import TREE_DATA from './data';

// ================================
// START YOUR APP HERE
// ================================

let body = document.getElementsByTagName('body')[0];
let h1 = document.getElementsByClassName('h1')[0];
let madeBy = document.getElementsByClassName('madeBy')[0];
let div = document.createElement('div');
let img = document.createElement('img');
let content = document.getElementsByClassName('content')[0];
let ul = document.createElement('ul');
let list = document.createElement('li');

body.style.backgroundColor = 'black';
h1.addEventListener('click', function() {
  window.location.reload();
});

h1.textContent = 'Tree Tree';
madeBy.textContent = 'Made By Beautifulife';
img.src = 'assets/images/bottom_img.png';
div.appendChild(img);
body.appendChild(div);
list.textContent = TREE_DATA.name;
ul.appendChild(list);
content.appendChild(ul);

makeTree(TREE_DATA, list);

function makeTree(data, list, open) {
  if (data.children) {
    let ul = document.createElement('ul');

    list.classList.add('folder');
    list.appendChild(addHideButton(open));
    open || ul.classList.add('hidden');
    list.appendChild(ul);

    for (let i = 0; i < data.children.length; i++) {
      let list = document.createElement('li');

      list.textContent = data.children[i].name;

      if (!data.children[i].children) {
        list.addEventListener('dblclick', changeToFolder.bind(this, data.children[i]), {once: true});
      }

      ul.appendChild(list);
      makeTree(data.children[i], list);
    }

    ul.appendChild(addFile(data));
  }
}

function addHideButton(open) {
  var div = document.createElement('div');

  if (open) {
    div.textContent = '[-]';
  } else {
    div.textContent = '[+]';
  }

  div.classList.add('hide');
  div.addEventListener('click', toggleHideButton);

  return div;
}

function addFile(data) {
  let list = document.createElement('li');

  list.textContent = '+';
  list.classList.add('add');
  list.addEventListener('click', addData.bind(this, data));

  return list;
}

function changeToFolder(saveData, ev) {
  let target = ev.currentTarget;

  ev.stopPropagation();
  saveData.children = [{name: 'new stuff'}];
  target.classList.add('folder');
  makeTree(saveData,target, true);
}

function toggleHideButton(ev) {
  let target = ev.currentTarget;

  if (target.textContent === '[+]') {
    target.nextSibling.classList.remove('hidden');
    target.textContent = '[-]';
  } else {
    target.nextSibling.classList.add('hidden');
    target.textContent = '[+]';
  }
}

function addData(saveData, ev) {
  let target = ev.currentTarget;
  let list = document.createElement('li');

  saveData.children.push({name: 'new stuff'});
  list.textContent = 'new stuff';
  list.addEventListener('dblclick', changeToFolder.bind(null, saveData.children[saveData.children.length - 1]), {once: true});
  target.parentNode.insertBefore(list, target);
}

/* DO NOT REMOVE */
module.hot.accept();
/* DO NOT REMOVE */
