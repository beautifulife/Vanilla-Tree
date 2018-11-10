// Load application styles
import 'styles/index.less';

// Load tree data
import TREE_DATA from './data';
import { __values } from 'tslib';

// ================================
// START YOUR APP HERE
// ================================

// addElement('content', TREE_DATA.name)
// addElement('Vanilla Tree', TREE_DATA.children[0].name)
// addElement('Vanilla Tree', TREE_DATA.children[1].name)

createContent(TREE_DATA);

function createContent(data, parentName, eventValue) {
  var id = document.getElementById(parentName);
  if(id){
    var idString = id.id;
  }
  addElement(idString, data, null, eventValue)
}

function checkFolder(data) {
  if(data.children && data.children.length) {
    return true;
  } else { 
    return false;
  }
}

function addElement(id, data, erase, eventValue) {
  var setId = id || 'content';
  var folder = false;
  if(eventValue) {
    var idName = eventValue;
  } else {
    var idName = document.getElementById(setId)
  }

  if(data.length > 1) {
    console.log(folder);
    var ul = document.createElement('ul');
    for(let i=0; i<data.length; i++) {
      folder = checkFolder(data[i]);
      console.log(data[i]);
      console.log(folder);
      ul.appendChild(makeList(data[i], folder));
    }
    ul.appendChild(addPlus());
    ul.className += idName.id;
    idName.appendChild(ul);
  } else {
    folder = checkFolder(data);
    idName.appendChild(makeList(data, folder));
  }

  function makeList(data, folder) {
    var li = document.createElement('li');
    li.textContent = data? data.name : 'new stuff';
    li.id = data? data.name : null; 
    if(folder){
      console.log(data);
      li.appendChild(buttonTemplate(data));
      li.className = 'folder';
    }
    return li;
  }

  function addPlus() {
    var li = document.createElement('li');
    li.textContent = '+';
    li.className = 'add_data';
    li.addEventListener('click', function(e) {
      e.currentTarget.textContent = 'new stuff';
      var idName = e.currentTarget.parentNode;
      idName.appendChild(addPlus(idName.parentNode));
    })
    return li;
  }
}


function buttonTemplate(data) {
  var div = document.createElement('div');
  div.setAttribute('class', 'plus');
  console.log(div.textContent);
  div.textContent = '[+]';
  div.addEventListener('click', firstPlus);
  function firstPlus(e) {
    createContent(data.children, data.name, e.currentTarget.parentNode);
    toggle(e.currentTarget, data);
    console.log('i know u r +');
  }
  console.log('here');
  return div;
}

function toggle(eventValue) {
  var ul = eventValue.nextSibling;
  if(eventValue.textContent ==='[+]') {
    console.log(eventValue);
    eventValue.textContent = '[-]';
    ul.classList.remove('hidden');
    eventValue.addEventListener('click', toggle);
  } else {
    eventValue.innerHTML = '[+]';
    ul.classList.add('hidden');
    console.log('done');
  }
}

/* DO NOT REMOVE */
module.hot.accept();
/* DO NOT REMOVE */



///////////////////////////////////////////////////////////sav2

// Load application styles
import 'styles/index.less';

// Load tree data
import TREE_DATA from './data';

// ================================
// START YOUR APP HERE
// ================================

// addElement('content', TREE_DATA.name)
// addElement('Vanilla Tree', TREE_DATA.children[0].name)
// addElement('Vanilla Tree', TREE_DATA.children[1].name)

createContent(TREE_DATA);

function createContent(data, parentName) {
  var id = document.getElementsByClassName(parentName)
  if(id.length>0){
    var id = id[id.length-1];
  } else {
    var id = document.getElementsByClassName('content')[0];
  }
  
  
  addElement(id, data, parentName)
  console.log(data);
  if(Array.isArray(data)){
    for(let i=0; i<data.length; i++) {
      if(!!data[i].children) {
        createContent(data[i].children, data[i].name);
      }
    }  
  }
  if(data.children) {
    console.log(data.name);
    createContent(data.children, data.name); 
  }
}

function addElement(id, data, parentName) {
  var folder = false;
  var idName = id;

  // console.log(idName);
  // console.log(data);
  console.log(data.length);
  // 배열일 경우에 ul로 묶음
  if(data.length > 1) {
    var ul = document.createElement('ul');
    for(let i=0; i<data.length; i++) {
      folder = !!data[i].children;
      ul.appendChild(makeList(data[i], folder));
      // if(data[i].children){addElement(idName,data[i].children)}
    }
    ul.appendChild(addPlus());
    console.log(idName);
    ul.classList.add('hidden');
    idName.appendChild(ul);
  } else {
    folder = !!data.children;
    idName.appendChild(makeList(data, folder));
  }

  function makeList(data, folder) {
    var li = document.createElement('li');
    li.textContent = data? data.name : 'new stuff';
    li.className = data? data.name : null; 
    if(folder){
      li.appendChild(buttonTemplate(data));
      // li.className = 'folder';
    }
    return li;
  }

  function addPlus() {
    var li = document.createElement('li');
    li.textContent = '+';
    li.className = 'add_data';
    li.addEventListener('click', function(e) {
      e.currentTarget.textContent = 'new stuff';
      var idName = e.currentTarget.parentNode;
      idName.appendChild(addPlus(idName.parentNode));
    })
    return li;
  }
}

function buttonTemplate(data) {
  var div = document.createElement('div');
  div.setAttribute('class', 'plus');
  div.textContent = '[+]';
  div.addEventListener('click', firstPlus);
  function firstPlus(e) {
    createContent(data.children, data.name, e.currentTarget.parentNode);
    toggle(e.currentTarget, data);
  }
  return div;
}

function toggle(eventValue) {
  var ul = eventValue.nextSibling;
  if(eventValue.textContent ==='[+]') {
    console.log(eventValue);
    eventValue.textContent = '[-]';
    ul.classList.remove('hidden');
    eventValue.addEventListener('click', toggle);
  } else {
    eventValue.innerHTML = '[+]';
    ul.classList.add('hidden');
    console.log('done');
  }
}


/* DO NOT REMOVE */
module.hot.accept();
/* DO NOT REMOVE */
