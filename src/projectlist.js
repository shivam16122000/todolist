import {Todolist} from './todolist';
//import {container} from './index';
import {rightcontainer} from './index';
function Projectlist(){
    //const form2=document.querySelector('#form2');
    
    let listarray=[];
    let todoarray=[];
    let projectName = document.querySelector('#projectName');//project name from form
    let projectdescriptiond = document.querySelector('#pro'); //project description from form

    const mainright=document.createElement('main');
    const headerright=document.createElement('header');

    const projectlist = document.createElement('div');
    const main = createMain();


    // function to create header element
    function createHeader(){
        const form1 = document.querySelector('#form1'); //project details form
        const header = document.createElement('header'); //create header
        const h2 = document.createElement('h2'); // (Add project)title
        const addprjbtn = document.createElement('button');// created add project button
        

       

        // added text content to h2 and button;
        h2.textContent='Add Project';
        h2.setAttribute('style','font-size:40px;font-family:Garamond;');
        addprjbtn.textContent=' + ';
        addprjbtn.className='addprjbtn';

        //added eventlistener to button to display the form
        addprjbtn.addEventListener('click',(e)=>{
           e.preventDefault();
           form1.setAttribute('style','display:block;');
         });

         //add h2 and addbtn to header

         header.appendChild(h2);
         header.appendChild(addprjbtn);
         header.className='left-header';

         //return header element
         return header;
    }

     // function to create main element
    function createMain(){
         const main = document.createElement('main');
         return main;
    }
    // added header and main to projectlist
    projectlist.appendChild(createHeader());
    projectlist.appendChild(main);



    // add logic to form submit button
    form1.addEventListener('submit',(e)=>{
        e.preventDefault();
        
        const div = document.createElement('div');//single project name
        div.textContent=projectName.value;
        div.className='project-list-element';
        console.log(projectName.value);
        console.log(projectdescriptiond.value);
        
        listarray.push(div);  //push (single project name (element)) to listarray )
        todoarray.push(Todolist(projectName.value,projectdescriptiond.value));//  push corresponding todolist container to todoarray
        
        
        
        main.appendChild(div); // append single project item to main
        form1.setAttribute('style','display:none;'); // close the form
        
        // added onclick event to every element in listarray means single project item
        listarray.forEach((item,index)=>{
           // window.localStorage.setItem(index.toString(),item.innerHTML);
           // console.log(window.localStorage);
            // adding event listener to single project item
            item.addEventListener('click',()=>{
                rightcontainer.innerHTML='';
                const todochild=todoarray[index];
             /*   form2.addEventListener('submit',(e)=>{
        
                    e.preventDefault(); 
                    let div = document.createElement('div');
                    div.className='todoelement';
                    let titlediv = document.createElement('div');
                    let datediv = document.createElement('div');
                    titlediv.textContent=title.value;
                    datediv.textContent=date.value;
                    div.appendChild(titlediv);
                    div.appendChild(datediv);
                    todoarray[index].appendChild(div);
                    form2.setAttribute('style','display:none');
                    
            
            
                });*/
                rightcontainer.appendChild(todochild);

            });
        });

        
    
        
    });

  

    

    
    
  /*  let form1 =document.querySelector('#form1');
    let projectName=document.querySelector('#projectName');

    let projectlist=document.createElement('div');
    let projectdescription=document.querySelector('#description');
    const h2 = document.createElement('h2');
    h2.textContent = 'Add Project';
    let addprjbtn = document.createElement('button');
    addprjbtn.textContent='+';
    console.log('here');
    addprjbtn.addEventListener('click',(e)=>{
        e.preventDefault();
       form1.setAttribute('style','display:block;')
       
    });
    form1.addEventListener('submit',(e)=>{
        e.preventDefault();
        let list=document.createElement('div');
        list.textContent=projectName.value;
       
        console.log(projectName.value);
        projectlist.appendChild(list);
        list.addEventListener('click',()=>{
            
        let todo = Todolist(projectName.value,projectdescription.value);
        
        
        
        rightcontainer.appendChild(todo);
        });
        form1.setAttribute('style','display:none;');
        

    });
    projectlist.appendChild(h2);
    projectlist.appendChild(addprjbtn);
    projectlist.className='projectlist';*/
    projectlist.className='projectlist';
    return projectlist;

}

export {Projectlist};