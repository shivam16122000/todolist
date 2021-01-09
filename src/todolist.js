
function Todolist(name,description){
    let todolist=document.createElement('div');//todopage
  
   
    //Dom SELECTORS
    const form2=document.querySelector('#form2');//form2
    const title = document.querySelector('#Title');// title SELECTOR
    const date = document.querySelector('#date');//due date SELECTOR

    function createHeader(name,description){
        let header = document.createElement('header'); //create header

        //header elements
        let namediv=document.createElement('h1');// project name
        namediv.className='namediv';
        let descriptiondiv = document.createElement('h2');// project description
        descriptiondiv.className='descriptiondiv';
        let hr = document.createElement('hr');// break line
        hr.className='hr';
        let todobtn = document.createElement('button');// add task button
        todobtn.className='todobtn';
         
        // added content to header element
        namediv.textContent=name;
        descriptiondiv.textContent=description;
        todobtn.textContent='addTask';

          //added event listener to todo button
      todobtn.addEventListener('click',(e)=>{
        e.preventDefault();
        form2.setAttribute('style','display:block;');

        //added event listener to form2 submit button
        form2.addEventListener('submit',event);
      });

        //appendchild
        header.appendChild(namediv);
        header.appendChild(descriptiondiv);
        header.appendChild(todobtn);
        header.appendChild(hr);

        return header;

    }

    todolist.appendChild(createHeader(name,description));// appended header to todolist
    let main = document.createElement('main');
    todolist.appendChild(main);// appended main to todolist

    // on form submit event function
    function event(e){
        e.preventDefault(); 
        let div = document.createElement('div');
        div.className='todoelement';
        let titlediv = document.createElement('div');//to get title from form2
        titlediv.className='titlediv';
        let datediv = document.createElement('div');// to get date from form2
        datediv.className='datediv';
       
        const remove=document.createElement('button');
        remove.className='remove';
        remove.textContent='remove';

        titlediv.textContent=title.value;
        datediv.textContent=date.value;
        div.appendChild(titlediv);
        div.appendChild(datediv);
        const done=document.createElement('button');
        done.className='done';
        done.textContent='done';
        done.addEventListener('click',(e)=>{
            e.preventDefault();
                
            if(done.textContent=='done'){
                done.textContent='Undone';
                done.setAttribute('style','background-color:green');
               
    
            }else{
                done.textContent='done';
                done.setAttribute('style','background-color:red');
            }
        
            
        
        });
        div.appendChild(done);
        div.appendChild(remove);
        main.appendChild(div);// append subelement to whole container
        form2.setAttribute('style','display:none');
        form2.removeEventListener('submit',event);
        

        remove.addEventListener('click',(e)=>{
            e.preventDefault();
            div.setAttribute('style','display:none;');

        })
      
        

    }

    
    
   /* let todolist=document.createElement('div');//todopage

    const form2=document.querySelector('#form2');//form2
    const title = document.querySelector('#Title');//to do title
    const date = document.querySelector('#date');//due date
    console.log('in todo');


    let namediv=document.createElement('h1');// project name
    namediv.textContent=name;

    let descriptiondiv = document.createElement('h2');// project description
    descriptiondiv.textContent=description;

    let hr = document.createElement('hr');// break line

   let todobtn = document.createElement('button');// add task button
    todobtn.textContent='addTask';

    todolist.appendChild(namediv);
    todolist.appendChild(descriptiondiv);
    todolist.appendChild(todobtn);
    todolist.appendChild(br);

    function event(e){
        e.preventDefault(); 
        let div = document.createElement('div');
        div.className='todoelement';
        let titlediv = document.createElement('div');//to get title from form2
        let datediv = document.createElement('div');// to get date from form2
        titlediv.textContent=title.value;
        datediv.textContent=date.value;
        div.appendChild(titlediv);
        div.appendChild(datediv);
        todolist.appendChild(div);// append subelement to whole container
        form2.setAttribute('style','display:none');
        form2.removeEventListener('submit',event);
        

    }

    //added event listener to todo button
    todobtn.addEventListener('click',(e)=>{
        e.preventDefault();
        form2.setAttribute('style','display:block;');

        //added event listener to form2 submit button
        form2.addEventListener('submit',event);
         
         

        
    });*/
 
    return todolist;


}

export {Todolist}; 
