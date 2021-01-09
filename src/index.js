import {Projectlist} from './projectlist';
const container = document.querySelector('#container');
const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
let rightcontainer=document.createElement('div');
rightcontainer.className='right';
function Project(name,description){
    return {name,description};
}
function Todos(name,date){
    return {name,date}
}

let projectlist=Projectlist();
container.appendChild(projectlist);
container.appendChild(rightcontainer);


export {rightcontainer};


