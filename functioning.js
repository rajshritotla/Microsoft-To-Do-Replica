            var tasks= new Array();
            var task_status_flag= new Array();  //1 pending 0 completed
            var task_date=new Array();
            var task_month=new Array();
            var task_year=new Array();
            var counttasks=0;
            var first_save=new Array();
            
            $.noConflict();
            
           /* $("button").click(function(){
                addDate(parseInt(document.getElementById("task_id").value));
            });
*/
            function addDate(tid){
                task_date[tid]=document.getElementById("date").value;
                task_month[tid]=document.getElementById("month").value;
                task_year[tid]=document.getElementById("year").value;
            }
                        
            function addtasks(){
                if(tasks[counttasks]==""){       //check empty input elements
                    console.log(counttasks);
                    document.getElementById(counttasks).focus();
                }
                else{       //no empty tasks input elements
                    counttasks =counttasks+1;
                    var showDataElement= document.getElementById("show_tasks");
                    var new_entry=document.createElement("input");  
                    showDataElement.appendChild(new_entry);
                    new_entry.setAttribute("id",counttasks);
                    task_status_flag[counttasks]=1;
                    new_entry.setAttribute("onclick","taskStatus(this.id)");
                    document.getElementById(counttasks).focus();
                    first_save[counttasks]=1;   //to add sr.no
                    new_entry.setAttribute("onfocusout","saveTask(this.id)");
                    
                    //new_entry.setAttribute("onblur","saveTask(this.id)");
                    
                }
            }

            function showTask(id){
                var showDataElement= document.getElementById("show_tasks");
                var new_entry=document.createElement("input");  
                showDataElement.appendChild(new_entry);
                new_entry.setAttribute("id",id);
                new_entry.setAttribute("onclick","taskStatus(this.id)");
                new_entry.setAttribute("value",tasks[id]);
                maintainTaskStatus(id);
   
            }

            function showDate(id){
                document.getElementById("date").value = task_date[id];
                document.getElementById("month").value = task_month[id];
                document.getElementById("year").value = task_year[id];
            }

            function saveTask(id){
                if(first_save){
                    tasks[counttasks]=counttasks+". "+document.getElementById(id).value;
                    first_save[counttasks]=0;
                }else{
                    tasks[counttasks]=document.getElementById(id).value;
                }
                setTimeout(100);
                allTasks();
            }

            function taskStatus(tid){
                if(task_status_flag[tid]=='1'){        //pending task
                    task_status_flag[tid]=0;     //completed
                    document.getElementById(tid).setAttribute("style","text-decoration: line-through;")
                }
                else{
                    task_status_flag[tid]=1;     //pending
                    document.getElementById(tid).setAttribute("style","text-decoration: initial;")
                }
            }

            function maintainTaskStatus(tid){
                if(task_status_flag[tid]=='1'){   
                    document.getElementById(tid).setAttribute("style","text-decoration: initial;")
                }
                else{
                    document.getElementById(tid).setAttribute("style","text-decoration: line-through;")
                }
            }

            function today(){
                //saveTask(counttasks);
                var mainShow= document.getElementById("show_tasks");
                mainShow.innerHTML="";
                mainShow.innerHTML='<input type="text" id="inputtasks"  value="+ Add new task                 [Click tasks to mark done undone]" readonly="readonly"  onclick="addtasks()">';
                for(let i=1;i<=counttasks;i++){
                    if((task_date[i]==new Date().getDate()) && (task_month[i]==(new Date().getMonth())+1) && (task_year[i]== new Date().getFullYear())){
                        showTask(i);
                        showDate(i);
                    }
                }
            }

            function allTasks(){
                //saveTask(counttasks);
                var mainShow= document.getElementById("show_tasks");
                mainShow.innerHTML="";
                mainShow.innerHTML='<input type="text" id="inputtasks"  value="+ Add new task                 [Click tasks to mark done undone]" readonly="readonly"  onclick="addtasks()">';
                for(let i=1;i<=counttasks;i++){
                    showTask(i);
                }                
            }

            function pending(){
                //saveTask(counttasks);
                var mainShow= document.getElementById("show_tasks");
                mainShow.innerHTML="";
                mainShow.innerHTML='<input type="text" id="inputtasks"  value="+ Add new task                 [Click tasks to mark done undone]" readonly="readonly"  onclick="addtasks()">';
                for(let i=1;i<=counttasks;i++){
                    if(task_status_flag[i]=='1'){
                        showTask(i);
                    }
                }
            }

            function completed(){
                //saveTask(counttasks);
                var mainShow= document.getElementById("show_tasks");
                mainShow.innerHTML="";
                mainShow.innerHTML='<input type="text" id="inputtasks"  value="+ Add new task                 [Click tasks to mark done undone]" readonly="readonly"  onclick="addtasks()">';
                for(let i=1;i<=counttasks;i++){
                    if(task_status_flag[i]=='0'){
                        showTask(i);
                    }
                }
            }

            function searchTask(){
                let text= document.getElementById("searchbar").value;
                var mainShow= document.getElementById("show_tasks");
                mainShow.innerHTML="";
                mainShow.innerHTML='<input type="text" id="inputtasks"  value="+ Add new task                 [Click tasks to mark done undone]" readonly="readonly"  onclick="addtasks()">';
                for(let i=1;i<=counttasks;i++){
                    if(tasks[i].includes(text)){
                        showTask(i);
                    }
                }

            }
           
            $(document).ready(function(){
               
               /* $("#all_tasks").click(function(){callTasks();} );
                $("#today_tasks").click(function(){today();});
                //$("#planned_tasks").click(function(){pending();});
                $(div).click(function(){
                    $("#planned_tasks").on("click", function(){
                        pending();
                    });
                });*/
            });
          