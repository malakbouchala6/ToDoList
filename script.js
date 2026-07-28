const greetingElement = document.getElementById("greeting");
    greetingElement.textContent="hello";
    const now=new Date();
    const hours= now.getHours();
    console.log(hours);
    if(hours < 12){
        mypara.textContent='Good morning Malak!' ;
    }else if(hours < 18){
        mypara.textContent=' Good afternoon, Malak!';
    }else{
        mypara.textContent='Good evening, Malak!';
    }
    document.createElement
   console.log("The message is:"+message); 
   const tasklist= document.getElementById('tasklist');
   const form= document.getElementById('taskForm');
   const titleInput=document.getElementById('taskTitle');
   const dateInput=document.getElementById('taskDate');
   const prioritySelect= document.getElementById('taskPriority');
   form.addEventListener ("submit",function(event){
    event.preventDefault();
    const title=titleInput.Value;
    const Date=dateInput.Value;
    const priority=prioritySelect.Value;
    console.log(+title+'  '+Date+' '+priority);
    const newLi=createElement('li');
    newLi.className="task";
    const checkbox= document.getElementById('input');
    checkbox.type ="checkbox";
    const spanText= document.createElement('span');
    spanText.textContent=title;
    spanText.className='task-title';
    const spanDate =document.createElement('span');
    spanDate.textContent=Date;
    spanDate.className='task-date';
    const spanPriority=document.createElement('span');
    spanPriority.textContent=priority;
    spanPriority.className='task-priority';
    const DeleteBtn=document.createElement('delete');
    DeleteBtn.textContent="Delete";
    DeleteBtn.className="delete-btn";
    theBody.appendChild(checkbox);
    theBody.appendChild(spanDate);
    theBody.appendChild(spanPriority);
    theBody.appendChild(spanText);
    theBody.appendChild(DeleteBtn);
    newLi.appendChild(checkbox);
    newLi.appendChild(spanDate);
    newLi.appendChild(spanPriority);
    newLi.appendChild(spanText);
    newLi.appendChild(DeleteBtn);
    


    
   }

   )
