


async function SESSIONS_FUNC()
{
    Loading_page_set();
    clear_all_locations();

    var get_data_sessions = await GET_DATA_TABLES( database_fixed_link , "sessions") //
    var get_data_groups = await GET_DATA_TABLES( database_fixed_link , "groups") //
    var get_data_employee = await GET_DATA_TABLES( database_fixed_link , "employee") //
    var get_data_mat = await GET_DATA_TABLES( database_fixed_link , "material")
    var get_data_se_task = await GET_DATA_TABLES( database_fixed_link , "session_tasks")
    var get_data_task = await GET_DATA_TABLES( database_fixed_link , "tasks")
    var get_data_att = await GET_DATA_TABLES( database_fixed_link , "att_feed")
    var get_data_students = await GET_DATA_TABLES( database_fixed_link , "students")
    var get_data_students_ans = await GET_DATA_TABLES( database_fixed_link , "students_ans")

    var get_data_age = await GET_DATA_TABLES( database_fixed_link , "age")
    var get_data_track = await GET_DATA_TABLES( database_fixed_link , "track")
    var get_data_slot = await GET_DATA_TABLES( database_fixed_link , "slots")
    var get_data_lvl = await GET_DATA_TABLES( database_fixed_link , "level")
    var get_data_lan = await GET_DATA_TABLES( database_fixed_link , "lan")
    var get_data_type = await GET_DATA_TABLES( database_fixed_link , "lan")
    var get_data_day = await GET_DATA_TABLES( database_fixed_link , "days")
    var get_data_students_type = await GET_DATA_TABLES( database_fixed_link , "session_type")


    var get_data_sessions_copy = [];


    if(get_data_sessions)
    {
        get_next_prev_sessions(get_data_sessions  );


        if(Number(get_data_sessions.length) - start_index_num > 10)
        {
            ent_index = start_index_num+10;
        }
        else{
            ent_index = Number(get_data_sessions.length);

        }
        
            for(var index = start_index_num ; index < ent_index ; index ++) {
            
            get_data_sessions[index].sesssion_status = '';
            if( new Date(get_data_sessions[index].session_date) > new Date())
            {
                get_data_sessions[index].sesssion_status = 'UPCOMMING'
            }
            else if( new Date(get_data_sessions[index].session_date) < new Date())
            {
                get_data_sessions[index].sesssion_status = 'ENDED'
            }
            else
            {
                get_data_sessions[index].sesssion_status = 'TODAY'
            }

            if(get_data_groups)
            {
                get_data_groups.forEach(element_gp => {
                    if(Number(get_data_sessions[index].groups_id) == Number(element_gp.id))
                    {
                        get_data_sessions[index].age = '';
                        get_data_age.forEach(element_age => {
                            if(Number(element_age.id) == Number(element_gp.age_id))
                            {
                                get_data_sessions[index].age = element_age.name;
                            }
                        })
                        get_data_sessions[index].type = '';
                        get_data_students_type.forEach(element_type => {
                            if(Number(element_type.id) == Number(element_gp.type_id))
                            {
                                get_data_sessions[index].type = element_type.name;
                            }
                        })

                        get_data_sessions[index].days = '';
                        get_data_day.forEach(element_days => {
                            if(Number(element_days.id) == Number(element_gp.days_id))
                            {
                                get_data_sessions[index].days = element_days.name;
                            }
                        })

                        get_data_sessions[index].lvl = '';

                        get_data_lvl.forEach(element_lvl => {
                            if(Number(element_lvl.id) == Number(element_gp.level_id))
                            {
                                get_data_sessions[index].lvl = element_lvl.name;
                            }
                        })
                        get_data_sessions[index].slot = '';

                        get_data_slot.forEach(element_slot => {
                            if(Number(element_slot.id) == Number(element_gp.slot_id))
                            {
                                get_data_sessions[index].slot = element_slot.slot;
                            }
                        })
                        get_data_sessions[index].track = '';

                        get_data_track.forEach(element_track => {
                            if(Number(element_track.id) == Number(element_gp.track_id))
                            {
                                get_data_sessions[index].track = element_track.name;
                            }
                        })
                        get_data_sessions[index].lan = '';

                        get_data_lan.forEach(element_lan => {
                            if(Number(element_lan.id) == Number(element_gp.lan_id))
                            {
                                get_data_sessions[index].lan = element_lan.name;
                            }
                        })
                    }
                })
            }

            get_data_sessions[index].count_st = 0;
            get_data_sessions[index].count_st_att = 0;
            get_data_sessions[index].count_st_abs = 0;
            get_data_sessions[index].count_st_feed = 0;
            get_data_sessions[index].std_att = [];


            get_data_sessions[index].count_st_att_status = '';
            get_data_sessions[index].count_st_feed_status = '';

            if(get_data_att)
            {
                get_data_att.forEach(element_att => {
                    if(Number(element_att.session_id) == Number(get_data_sessions[index].id))
                    {

                        get_data_students.forEach(element_st => {
                            
                            if(Number(element_st.id) == Number(element_att.student_id))
                            {
                                if(get_data_sessions[index].sesssion_status == "ENDED")
                                {
                                    if(element_att.attendance == 'YES')
                                    {
                                        get_data_sessions[index].count_st_att++;
                                        if(element_att.feedback != ''  )
                                        {
                                            get_data_sessions[index].count_st_feed++
                                        }
                                        else
                                        {
                                            get_data_sessions[index].count_st_feed_status = "FEEDBACK NOT UPDATED"
                                        }
    
                                    }
                                    else if (element_att.attendance == 'NO')
                                    {
                                        get_data_sessions[index].count_st_abs++;
                                    }
                                    else{
                                        get_data_sessions[index].count_st_att_status = "ATTENDANCE NOT UPDATED"
                                    }
                                }



                                element_att.st_name = element_st.st_name;
                                element_att.tasks = [];
                                element_att.tasks_count = 0;

                                if(get_data_students_ans)
                                {
                                    get_data_students_ans.forEach(element_st_ans => {

                                        if(Number(element_att.id) == Number(element_st_ans.att_feed_id))
                                        {
                                            element_att.tasks[element_att.tasks_count] = element_st_ans;
                                            element_att.tasks_count++;
                                        }

                                    });
                                }
                                get_data_sessions[index].std_att[get_data_sessions[index].count_st] = element_att;
           
                                get_data_sessions[index].count_st++;                
                            }
                        })
                        
                    }
                });
            }

            get_data_sessions[index].count_st_att = `${get_data_sessions[index].count_st_att} Attended`;
            get_data_sessions[index].count_st_abs = `${get_data_sessions[index].count_st_abs} ABSENCE`;
            get_data_sessions[index].count_st_feed = `${get_data_sessions[index].count_st_feed} Feedback`;
            get_data_sessions[index].count_st = `${get_data_sessions[index].count_st} Student/s`;


            if(get_data_employee)
            {
                get_data_employee.forEach(element_emp => {
                    if(Number(element_emp.id) == Number(get_data_sessions[index].employee_id))
                    {
                        get_data_sessions[index].name = element_emp.emp_name;
                        get_data_sessions[index].zoom = element_emp.zoomlink;
                        get_data_sessions[index].freezoom = element_emp.zoom_free;
                    }
                });
            }

            if(get_data_mat)
            {
                get_data_mat.forEach(element_mt => {
                    get_data_sessions[index].recorded = '';
                    get_data_sessions[index].slide = '';

                    if(Number(element_mt.id) == Number(get_data_sessions[index].material_id))
                    {
                        get_data_sessions[index].recorded = element_mt.video_link;
                        get_data_sessions[index].slide = element_mt.slide;
                    }
                });
            }
            get_data_sessions[index].tasks = [];
            get_data_sessions[index].count_tsk = 0;

            if(get_data_se_task)
            {
                get_data_se_task.forEach(element_se_tsk => {
                    if(Number(element_se_tsk.session_id) == Number(get_data_sessions[index].id))
                    {
                        get_data_task.forEach(element_tsk => {
                            if(Number(element_tsk.id) == Number(element_se_tsk.task_id))
                            {
                                get_data_sessions[index].tasks[get_data_sessions[index].count_tsk] = element_tsk;get_data_sessions[index].count_tsk++;
                            }
                        });
                    }
                });
            }

            get_data_sessions[index].count_tsk = `${get_data_sessions[index].count_tsk} Task/s`;

            get_data_sessions_copy[index - start_index_num] = get_data_sessions[index];

        }

    }

    html_create_lists_session('Location_1');

    $('#search_btn_groups').click(function (index) {  
        Loading_page_set();
        create_table_sessions_func(get_data_sessions_copy);
    });


    // console.log(get_data_sessions_copy);

    create_table_sessions_func(get_data_sessions_copy);

}
function html_create_lists_session( location_)
{
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    document.getElementById(location_).innerHTML +=`</div></div>`;

    document.getElementById(location_).innerHTML +=`<div class="input-group">
    <div class='col justify-content-start'>
      <input type="search" id="search_all" class="form-control" />
    </div>
    <div class='col justify-content-start' style='z-index:0;'><button type="button" id='search_btn_groups' class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button>  <input id='counter_ids' type='number' readonly/> <input id='counter_id_id' type='number' readonly/></div>
  </div>`;
  document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById(location_).innerHTML +=`</div></div>`;

}


function createTable_sessions(dataArray ,All_data_obj ) {

    var end_of_arr = 0;
 
      clear(All_data_obj.location_next);
      next_Section(All_data_obj.location_next);
  
  
  
    if(dataArray && dataArray !== undefined && dataArray.length != 0){

  
      All_data_obj.edit_index = [];
      All_data_obj.delete_index = [];
      All_data_obj.index_num_value = [];
  
      if(All_data_obj.Start_Index > dataArray.length)
      {
          var div = document.getElementById(All_data_obj.table_div);
          div.innerHTML = '';
          clear(All_data_obj.location_next);
          return;
      }
      var End_Index = 0;
      if( (dataArray.length - All_data_obj.Start_Index ) >= 10)
      {
          End_Index = All_data_obj.Start_Index + 9;
      }
      else{
          End_Index = dataArray.length;
      }
  
  
      document.getElementById(All_data_obj.location_index).innerHTML = `<label>`+Math.ceil(All_data_obj.Start_Index/10)+" - "+Math.ceil(dataArray.length/10)+` </label>`;
  
      var result = "<table class='table' id='dtable'>"+
                   "<thead   style='white-space:wrap' >"+
                     "<tr>";                               //Change table headings to match witht he Google Sheet
                    
                     result +="<th scope='col'>About session</th>";
                     result +="<th scope='col'>About Groups</th>";
                     result +="<th scope='col'>URLs</th>";
                     result +="<th scope='col'>Counts</th>";
                     result +="<th scope='col'>View More</th>";
 
                result += "</tr>"+
                          "</thead>";
                  var counter = 0;
           
               for(var index = (All_data_obj.Start_Index-1) ; index < End_Index; index ++)
               {
                    result += "<tr>";
                    result += "<td>";
                    result += `ID : ${dataArray[index].id}<br>`;
                    result += `Date : ${dataArray[index].session_date}<br>`;
                    result += `Num : ${dataArray[index].session_num}<br>`;
                    result += `Day : ${dataArray[index].days }<br>`;
                    result += `Slot : ${dataArray[index].slot}<br>`;
                    result += `Instructor : ${dataArray[index].name}<br>`;
                    result += "</td>";

                    result += "<td>";
                    result += `GRP ID : ${dataArray[index].groups_id}<br>`;
                    result += `Age : ${dataArray[index].age}<br>`;
                    result += `Level : ${dataArray[index].lvl}<br>`;
                    result += `Language : ${dataArray[index].lan}<br>`;
                    result += `Type : ${dataArray[index].type}<br>`;
                    result += `Track : ${dataArray[index].track}<br>`;
                    result += "</td>";

                    result += "<td>";
                    if(dataArray[index].zoomlink == "") result += `Session : <label style='color:red'> No Link</label><br>`;
                    else result += `<a href="${dataArray[index].zoomlink}" target="_blank"><label style='color:black'>Session :</label>Session link</a> <br>`;                    

                    if(dataArray[index].zoom == "") result += `Normal : <label style='color:red'> No Link</label><br>`;
                    else result += `<a href="${dataArray[index].zoom}" target="_blank"><label style='color:black'>Normal : </label>Inst Session link</a> <br>`;                    

                    if(dataArray[index].freezoom == "") result += `Free : <label style='color:red'> No Link</label><br>`;
                    else result += `<a href="${dataArray[index].freezoom}" target="_blank"><label style='color:black'>Free : </label>Inst Free Session link</a> <br>`;                    
                    
                    if(dataArray[index].recorded == "") result += `Recorded : <label style='color:red'> No Link</label><br>`;
                    else result += `<a href="${dataArray[index].recorded}" target="_blank"><label style='color:black'>Recorded : </label> Recorded Session link </a> <br>`;       

                    if(dataArray[index].slide == "") result += `Slide : <label style='color:red'> No Link</label><br>`;
                    else result += `<a href="${dataArray[index].slide}" target="_blank"><label style='color:black'>Slide : </label>Session Slide link</a> <br>`;          

                    result += "</td>";


                    result += "<td>";
                    result += `${dataArray[index].count_st}<br>`;
                    result += `${dataArray[index].count_tsk}<br>`;
                    result += `${dataArray[index].count_st_att}<br>`;
                    result += `${dataArray[index].count_st_abs}<br>`;
                    result += `${dataArray[index].count_st_feed}<br>`;                    
                    if(dataArray[index].count_st_att_status == "ATTENDANCE NOT UPDATED")result += `<label style='color:red'> ${dataArray[index].count_st_att_status}</label><br>`;
                    if(dataArray[index].count_st_feed_status == "FEEDBACK NOT UPDATED")result += `<label style='color:red'> ${dataArray[index].count_st_feed_status}</label><br>`;
                    if(dataArray[index].sesssion_status == "UPCOMMING")result += `<label style='color:gray'> ${dataArray[index].sesssion_status}</label><br>`;
                    else if(dataArray[index].sesssion_status == "ENDED")result += `<label style='color:green'> ${dataArray[index].sesssion_status}</label><br>`;
                    else if(dataArray[index].sesssion_status == "TODAY")result += `<label style='color:blue'> ${dataArray[index].sesssion_status}</label><br>`;

                    result += "</td>";


                    result += "<td>";

                    result += `<br><button  type="button" id='student_view_${index}' class="btn btn-primary" style='float:center' ><i class="fa-solid fa-graduation-cap"></i></button>` ;
                    result += `<br><br><button  type="button" id='task_view_${index}' class="btn btn-danger" style='float:center;display:none' ><i class="fa-solid fa-list-check"></i></button>` ;
                    result += "</td>";

                    result += "</tr>";
               }

      result += "</table>";
      var div = document.getElementById(All_data_obj.table_div);
      div.innerHTML = result;
  
  

    }else{
      var div = document.getElementById(All_data_obj.table_div);
      div.innerHTML = "Data not found!";
    }
  
    for(var index = All_data_obj.Start_Index-1 ; index < End_Index ;index++)
    {
        $("#student_view_"+index).click(function () {
  

            var id = this.id;
            var ret = id.replace('student_view_','');
            modal.style.display = "block";

            console.log(dataArray[ret]);

            createTable_pop_up_sessions(dataArray[ret]);
        });

        if(Number(dataArray[index].count_tsk.replace(' Task/s','')) > 0)
        {
            $("#task_view_"+index).show();
        }
            $("#task_view_"+index).click(function () {
    

                var id = this.id;
                var ret = id.replace('task_view_','');
                modal.style.display = "block";

                console.log(dataArray[ret]);

                createTable_pop_up_sessions_task(dataArray[ret]);
                


            });
        

        
  
    }

    $(document).ready(function () {
      $(All_data_obj.next_btn).click(function () {
  
      if( (dataArray.length - All_data_obj.Start_Index ) > 10)
      {
  
          All_data_obj.Start_Index = End_Index+1;
          createTable_sessions(dataArray ,All_data_obj )
      }
      else if( (dataArray.length - All_data_obj.Start_Index ) < 10 &&  (dataArray.length - All_data_obj.Start_Index ) > 0)
      {
        if(End_Index+1 > dataArray.length)
        {
  
        }
        else{
          All_data_obj.Start_Index = End_Index+1;
          createTable_sessions(dataArray ,All_data_obj )
        }
  
  
      }
      else{
  
      }
      });
  
      $(All_data_obj.prev_btn).click(function () {
  
          var perv = All_data_obj.Start_Index - 10;
          
          if(perv > 0)
          {
            All_data_obj.Start_Index = perv;
            createTable_sessions(dataArray ,All_data_obj )
          }
  });
  $(All_data_obj.ind_btn).change(function () {
  
              var value_pages = document.getElementById('page_index').value;
              var value_pages_multi = (value_pages*10);
  
              
              if(value_pages_multi >0)
              {
  
              if( dataArray.length > value_pages_multi  )
                  {
                      All_data_obj.Start_Index = value_pages_multi-9;
                      createTable_sessions(dataArray ,All_data_obj )
                  }
                  else{
                      if((value_pages_multi - dataArray.length ) < 10)
                      {
                          All_data_obj.Start_Index = value_pages_multi-9;
                          createTable_sessions(dataArray ,All_data_obj )
                      }
                  }
              }
      });
  
  });
  
  Loading_page_clear();
    return End_Index;
  }
  

  async function create_table_sessions_func(data_table)
 {
    
    Loading_page_set();

    var inputs_names_search = [
        "ID :"
    ,"Name :"
    ,"Phone :" 
    , "Email :" 
    , "Name 2 :" 
    , "Phone 2 :" 
    , "Email 2 :"
    , "Address :"
    , "Location :"
    , "Job :"
    , "Reg Status :"
    , "CS Agent :"
    , "Sales Agent :"


];

    const All_data_obj = {};
    All_data_obj.Start_Index = 1;
    All_data_obj.next_btn = '#btn2';
    All_data_obj.prev_btn = '#btn1';
    All_data_obj.ind_btn = '#page_index';
    All_data_obj.location_index = "Location_4";
    All_data_obj.table_div = 'search-results';
    All_data_obj.all_names = inputs_names_search;
    All_data_obj.location_next = "Location_3";
    All_data_obj.Location_2 = "Location_2";
    All_data_obj.location_1 = "Location_1";
    All_data_obj.btn_index = 'btn_index';
    All_data_obj.btn_index = 'btn_index';
    All_data_obj.edit_index = [];
    All_data_obj.delete_index = [];
    All_data_obj.view_index = [];
    All_data_obj.index_num_value = [];
    All_data_obj.obj;
    All_data_obj.obj_data = [];
    All_data_obj.saved_index ;


    var values_ = document.getElementById("search_all").value;

    if(values_ == "")
    {
       All_data_obj.Start_Index = 1;
       if(data_table)
       {
        $('#counter_id_id').val(data_table.length)
       }

       createTable_sessions( data_table ,All_data_obj );
       return;
    }
    var result = [];
    if(data_table)
    {
     result = Search_for_value_same(data_table , values_);

        $('#counter_id_id').val(result.length)
     }
     createTable_sessions(result ,All_data_obj , 'clear'); 

}

function createTable_pop_up_sessions(All_data_obj  ) {

    var dataArray = All_data_obj;


  if(dataArray.std_att && dataArray.std_att !== undefined && dataArray.std_att.length != 0){

    var result = "<table class='table' id='dtable'>"+
                 "<thead   style='white-space:wrap' >"+
                   "<tr>";                               //Change table headings to match witht he Google Sheet     
                   result +="<th scope='col'>ID </th>";
                   result +="<th scope='col'>Name </th>";
                   result +="<th scope='col'>Attendance </th>";
                   result +="<th scope='col'>Feedback </th>";

              result += "</tr>"+
                        "</thead>";

                    for(var index = 0 ; index < dataArray.std_att.length ; index++)
                    {
                        result += "<tr>";


                        result += "<td width='50% !important'>";
                        result += `${dataArray.std_att[index].student_id} <br>` 
                        result +="</td>"

                        result += "<td>";
                        result += `${dataArray.std_att[index].st_name} <br>` 
                        result +="</td>"

                        result += "<td>";
                        if(dataArray.std_att[index].attendance == '') result += `<label style='color:red'> NONE </label><br>` 
                        else result += `${dataArray.std_att[index].attendance} <br>` 
                        result +="</td>"
                        result += "<td>";

                        if(dataArray.std_att[index].feedback == '') result += `<label style='color:red'> NONE </label><br>` 
                        else result += `${dataArray.std_att[index].feedback} <br>` 

                        result +="</td>"
                        result += "</tr>";

                    }
                  
            //   }
                 
    result += "</table>";
    var div = document.getElementById("search-results_1");
    div.innerHTML = result;

  }else{
    var div = document.getElementById("search-results_1");
    div.innerHTML = "No Students";
  }
}

function createTable_pop_up_sessions_task(All_data_obj  ) {

    var dataArray = All_data_obj;


  if(dataArray.tasks && dataArray.tasks !== undefined && dataArray.tasks.length != 0){

    var result = "<table class='table' id='dtable'>"+
                 "<thead   style='white-space:wrap' >"+
                   "<tr>";                               //Change table headings to match witht he Google Sheet     
                   result +="<th scope='col'>Questions </th>";
                   result +="<th scope='col'>Answers </th>";
                   result +="<th scope='col'>Correct & Points </th>";
                   result +="<th scope='col'>Feedback </th>";

              result += "</tr>"+
                        "</thead>";

                    for(var index = 0 ; index < dataArray.tasks.length ; index++)
                    {
                        result += "<tr>";


                        result += "<td>";
                        result += `ID : ${dataArray.tasks[index].id} <br>` 
                        result += `Q : ${dataArray.tasks[index].question} <br>` 
                        result +="</td>"

                        result += "<td>";
                        result += `Option 1 : ${dataArray.tasks[index].option1} <br>` 
                        result += `Option 2 : ${dataArray.tasks[index].option2} <br>` 
                        result += `Option 3 : ${dataArray.tasks[index].option3} <br>` 
                        result +="</td>"

                        result += "<td>";
                        result += `Correct : ${dataArray.tasks[index].correct} <br>` 
                        result += `${dataArray.tasks[index].points} Points<br>` 
                        result +="</td>"

                        result += "<td>";


                        if(dataArray.std_att && dataArray.std_att !== undefined && dataArray.std_att.length != 0){

                            for(var index_att = 0 ; index_att < dataArray.std_att.length ; index_att++ )
                            {
                                result += `${index_att+1}- ${dataArray.std_att[index_att].st_name}   |   ` 
                                var couner_count_ans = '';

                                if(dataArray.std_att[index_att].tasks && dataArray.std_att[index_att].tasks !== undefined && dataArray.std_att[index_att].tasks.length != 0){
                                    
                                    for( var index_task = 0 ;   index_task < dataArray.std_att[index_att].tasks.length ; index_task++)
                                    {
                                        if(Number(dataArray.tasks[index].id) == Number(dataArray.std_att[index_att].tasks[index_task].tasks_id))
                                        {
                                            
                                            if(dataArray.std_att[index_att].tasks[index_task].correct == 'true')
                                            {
                                                couner_count_ans = 'Right';
                                            }
                                            else if(dataArray.std_att[index_att].tasks[index_task].correct == 'false')
                                            {
                                                couner_count_ans = 'Wrong';
                                            }
                                        }
                                    }
                                }
                                if(couner_count_ans == 'Right')
                                {
                                    result += `<label style='color:green'> Right </label><br>` 
                                }
                                else if(couner_count_ans == 'Wrong')
                                {
                                    result += `<label style='color:red'> Wrong </label><br>` 
                                }
                                else
                                {
                                    result += `<label style='color:blue'>Not Answered </label> <br>` 
                                }

                            }
                        }


                        result +="</td>"

                        result += "</tr>";

                    }
                  
            //   }
                 
    result += "</table>";
    var div = document.getElementById("search-results_1");
    div.innerHTML = result;

  }else{
    var div = document.getElementById("search-results_1");
    div.innerHTML = "Data not found!";
  }
}


function get_next_prev_sessions(All_table_obj , index)
{

    // console.log(All_table_obj);
    next_Section_custom();
   $('#Location_3').hide();
    document.getElementById('Location_5').innerHTML = `<label>`+Math.ceil((start_index_num+1)/10)+" - "+Math.ceil(All_table_obj.length/10)+` </label>`;

    console.log(All_table_obj.length);

    $('#counter_ids').val(All_table_obj.length)

    $('#btn_next').empty();
    $('#btn_next').text('Next');

    $('#btn_prev').empty();
    $('#btn_prev').text('Previous');

    $('#page_index_cust').empty();



    

    $('#page_index_cust').change(function()
    {
        var get_data_ = ($('#page_index_cust').val() * 10 )-10;

        if(get_data_ < 0)
        {
            return;
        }
        if(All_table_obj.length > get_data_ )
        {
            start_index_num = get_data_;
            SESSIONS_FUNC();

        }

        
    })


    if(All_table_obj.length - start_index_num > 10)
    {
        $('#btn_next').click(function()
        {
            start_index_num+=10;
    
            SESSIONS_FUNC();
            
        })
    }

    if(start_index_num == 0)
    {

    }
    else
    {
        $('#btn_prev').click(function()
        {
            start_index_num-=10;
    
            SESSIONS_FUNC();
            
        })
    }

}