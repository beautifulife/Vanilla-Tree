// Load application styles
import 'styles/index.less';

// Load tree data
import TREE_DATA from './data';

// ================================
// START YOUR APP HERE
// ================================

// =============================== 
// 수정코드
// =============================== 

// 화면 로드
var body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = 'black';
var reload = document.getElementsByClassName('h1')[0]
var madeBy = document.getElementsByClassName('madeBy')[0]
reload.addEventListener('click', function() {
  location.reload();
})
reload.textContent = 'Tree Tree';
madeBy.textContent = 'Made By Beautifulife';

var div = document.createElement('div');
var img = document.createElement('img');
img.src = 'assets/images/oegong.png'
div.appendChild(img);
body.appendChild(div);

// tree 만들기 시작
var content = document.getElementsByClassName('content')[0];

var ul1 = document.createElement('ul');
var list = document.createElement('li');
list.textContent = TREE_DATA.name;
ul1.appendChild(list);
content.appendChild(ul1);

/* ============ 실행 ============ */
zaeGui(TREE_DATA, list)
/* ============ 실행 ============ */

function zaeGui(data, list, open) {
  if(data.children) {
    list.classList.add('folder');
    list.appendChild(hide(open));
    var ul = document.createElement('ul');
    open || ul.classList.add('hidden');
    list.appendChild(ul);
    for(let i=0; i<data.children.length; i++) {
      var list = document.createElement('li');
      list.textContent = data.children[i].name;
      if(!data.children[i].children){
        changeToFolder.bind(null, data);
        list.addEventListener('dblclick', changeToFolder.bind(null, data.children[i]));
        // list.addEventListener('dblclick', changeToFolder);
      }
      ul.appendChild(list);
      zaeGui(data.children[i], list);
    }
    ul.appendChild(add(data));
  }
  // console.log(TREE_DATA);
}

function hide(open) {
  var div = document.createElement('div');
  if(open) {
    div.textContent = '[-]';
  } else {
    div.textContent = '[+]';
  }
  div.classList.add('hide');
  div.addEventListener('click', toggle);
  return div;
}

function add(data) {
  var list = document.createElement('li');
  list.textContent = '+';
  list.classList.add('add');
  list.addEventListener('click', addData.bind(null, data));
  return list;
}

function changeToFolder(saveData) {
  event.stopPropagation();
  console.log(saveData);
  saveData['children'] = [{name:'new stuff'}]; 
  var target = event.currentTarget;
  // var ul = document.createElement('ul');
  // target.appendChild(ul);
  // var list = document.createElement('li');
  // list.textContent = 'new stuff'
  target.classList.add('folder');
  // var data = {children:[{name:'new stuff'}]};
  zaeGui(saveData,target, true)
  // target.removeEventListener('dblclick', changeToFolder);
  console.log(TREE_DATA);
}

function toggle() {
  var target = event.currentTarget;
  if(target.textContent === '[+]') {
    target.nextSibling.classList.remove('hidden');
    target.textContent = '[-]';
  } else {
    target.nextSibling.classList.add('hidden');
    target.textContent = '[+]';
  }
}

function addData(saveData) {
  console.log(saveData);
  saveData.children.push({name: 'new stuff'});
  var target = event.currentTarget;
  var list = document.createElement('li');
  list.textContent = 'new stuff';
  list.addEventListener('dblclick', changeToFolder.bind(null, saveData.children[saveData.children.length-1]));
  target.parentNode.insertBefore(list, target);
  console.log(TREE_DATA);
}




// =============================== 
// 기존코드 
// =============================== 

// if(TREE_DATA.children){
//   var ul2 = document.createElement('ul');
//   list.appendChild(ul2);
//   for (let i = 0; i<TREE_DATA.children.length; i++) {
//     var list = document.createElement('li');
//     list.textContent = TREE_DATA.children[i].name
//     ul2.appendChild(list);
    
//     if (TREE_DATA.children[i].children) {
//       var ul3 = document.createElement('ul');
//       list.appendChild(ul3);
//       for (let j=0; j<TREE_DATA.children[i].children.length; j++) {
//         var list = document.createElement('li');
//         list.textContent = TREE_DATA.children[i].children[j].name;
//         ul3.appendChild(list);

//         if(TREE_DATA.children[i].children[j].children){
//           var ul4 = document.createElement('ul');
//           list.appendChild(ul4);
//           for (let k=0; k<TREE_DATA.children[i].children[j].children.length; k++) {
//             var list = document.createElement('li');
//             list.textContent = TREE_DATA.children[i].children[j].children[k].name;
//             ul4.appendChild(list);
//           }
//           var list = document.createElement('li');
//           list.textContent = '+';
//           ul4.appendChild(list);
//         }
//       }
//       var list = document.createElement('li');
//       list.textContent = '+';
//       ul3.appendChild(list);
//     }
//   }
//   var list = document.createElement('li');
//   list.textContent = '+';
//   ul2.appendChild(list);
// }

// addElement('content', TREE_DATA.name)
// addElement('Vanilla Tree', TREE_DATA.children[0].name)
// addElement('Vanilla Tree', TREE_DATA.children[1].name)


// addElement(TREE_DATA);

// function addElement(data, parent) {
//   var className= document.getElementsByClassName('content')[0];

//   //data1 = Array[3], parent1 = VanillaTree
//   if(parent) {
//     console.log(parent);
//     parent = parent.split(' ').join('');
//     var className = document.getElementsByClassName(parent);
//     className = className[className.length-1];
//   }

//   var folder = false;
//   var idName = className;
//   console.log(idName);
  
//   // 배열일 경우에 ul로 묶음
//   if(Array.isArray(data)) {
//     var ul = document.createElement('ul');
//     idName.appendChild(ul);
//     for(let i=0; i<data.length; i++) {
//       folder = !!data[i].children;
//       ul.appendChild(makeList(data[i], folder));
//       // if(data[i].children){addElement(idName,data[i].children)}
//       if(data[i].children) {
//         addElement(data[i].children, data[i].name);
//       }
//     }
//     ul.appendChild(addPlus());
//     console.log(idName);
//     // ul.classList.add(className);
//     // debugger;
//   } else {
//     folder = !!data.children;
//     idName.appendChild(makeList(data, folder));
//     if(data.children) {
//       console.log(data.name);
//       addElement(data.children, data.name); 
//     }
//   }

//   function makeList(data, folder) {
//     var li = document.createElement('li');
//     var className = data? data.name.split(' ').join('') : null; 
//     li.classList.add(className); 
//     li.textContent = data? data.name : 'new stuff';
//     if(folder){
//       li.appendChild(buttonTemplate(data));
//       // li.className = 'folder';
//     }
//     return li;
//   }

//   function addPlus() {
//     var li = document.createElement('li');
//     li.textContent = '+';
//     li.className = 'add_data';
//     li.addEventListener('click', function(e) {
//       e.currentTarget.textContent = 'new stuff';
//       var idName = e.currentTarget.parentNode;
//       idName.appendChild(addPlus(idName.parentNode));
//     })
//     return li;
//   }
// }

// function buttonTemplate(data) {
//   var div = document.createElement('div');
//   div.setAttribute('class', 'plus');
//   div.textContent = '[+]';
//   div.addEventListener('click', firstPlus);
//   function firstPlus(e) {
//     toggle(e.currentTarget, data);
//   }
//   return div;
// }

// function toggle(eventValue) {
//   var ul = eventValue.nextSibling;
//   if(eventValue.textContent ==='[+]') {
//     console.log(eventValue);
//     eventValue.textContent = '[-]';
//     ul.classList.remove('hidden');
//     eventValue.addEventListener('click', toggle);
//   } else {
//     eventValue.innerHTML = '[+]';
//     ul.classList.add('hidden');
//     console.log('done');
//   }
// }


/* DO NOT REMOVE */
module.hot.accept();
/* DO NOT REMOVE */
