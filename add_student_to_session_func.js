
var student_sessions_arr = [];
var student__arr = [];

function ADD_STUDENT_TO_SESSION()
{
    Loading_page_set();

    clear_all_locations();


    var Database_link = database_fixed_link

    var inputs_col = [["name" , "slot" ],
    ["name"],
    ["name"],
    ["name" ],
    ["name"],
    ["name"],
    ["name"],
    ["name"],
    ["slot_id" 
    , "lan_id" 
    , "att_id" 
    , "level_id" 
    , "track_id" 
    , "type_id" 
    , "days_id" 
    , "age_id" 
    , "opend_by" 
    , "start_date" 
    , "end_date" 
    ],
    ["std_id" 
    , "group_id" 
    , "parent_id" 
    , "free_session_status" 
    , "std_status" 
    , "name" 
    , "age" 
    , "birthdate" 
    ]
    ,
    ["groups_id" 
    , "student_id" 
    , "status" 
    ],
    ["groups_id" 
    ,"employee_id" 
    ,"zoomlink" 
    ,"session_date" 
    ,"session_num" 
    ,"open_by"
  ],
  ["student_id" 
  ,"session_id" 
  ,"attendance" 
  ,"feedback" 
],
[
   "name"
  ,"phone"
  ,"email"
  ,"zoomlink"
  ,"username"
  ,"password"
  ,"permission_id"
  ,"department_id"
  ,"role_id"
]

  ];

var called_table = [
      'slots',
      'lan',
      'attend',
      'level',
      'track',
      'session_type',
      'days',
      'age',
      'groups',
      'students',
      'student_groups',
      'sessions',
      'att_feed',
      'employee',
  ];

var paper_inputs = [
    'session_input' , 
    'student_input',
  ];

var paper_inputs_label = [
    'Sessions' , 
    'Student',   
  ];
        const All_req_obj = {};
        All_req_obj.Database_link = Database_link
        All_req_obj.inputs_col = inputs_col
        All_req_obj.called_table = called_table
                 
    html_create_lists_add_student_session(paper_inputs , paper_inputs_label , "Location_1" );

    get_all_data_arr(All_req_obj ,quary_tables_all_status_add_student_sessions , '' , time_out  , 1);

    add_new_student_session(All_req_obj,paper_inputs);
    get_all_data_arr(All_req_obj ,quary_tables_all_paper_student_groups,create_table_student_sessions , time_out , 2);

    $('#search_btn').click(function (index) 
    {  
        Loading_page_set();

        get_all_data_arr(All_req_obj ,quary_tables_all_paper_student_groups,create_table_student_sessions_customized , time_out , 3);
    });
}

function html_create_lists_add_student_session(paper_inputs , paper_inputs_label  , location_)
{
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    // document.getElementById("search-results").innerHTML = "";




    //  `<div class='col justify-content-start'><button class='btn btn-danger' style='float:left;' id='add_back'>BACK</button></div>`;

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    for(var index = 0 ; index < paper_inputs.length ; index++)
    {
        paper_inner_1(paper_inputs[index] , paper_inputs_label[index]);
    }

    document.getElementById(location_).innerHTML +=`</div></div>`;

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById(location_).innerHTML +=`</div></div>`;



    document.getElementById(location_).innerHTML += `<div class='col justify-content-start'><button class='btn btn-success' style='float:right;' id='send_group'>ADD</button></div>`;


    document.getElementById(location_).innerHTML +=`<div class="input-group">
    <div class='col justify-content-start'>
      <input type="search" id="search_all" class="form-control" />
    </div>
    <div class='col justify-content-start'><button type="button" id='search_btn' class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button></div>
  </div>`;
  document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById(location_).innerHTML +=`</div></div>`;

    
    //document.getElementById(location_).innerHTML += `<div style='display:flex;justify-content:left;'><button  type="button" id='search_paper' class="btn btn-secondary"><i class="fas fa-search"></i></button></div>`;



}

function add_new_student_session(All_req_obj,paper_inputs)
{
    
    var Database_link = database_fixed_link

    var inputs_col = 
    ["student_id" 
    ,"session_id" 
    ,"attendance" 
    ,"feedback" 
  ];
    
    var inputs_check = ["Group missing" , "Student missing"];

    var called_table = 'att_feed';

      var arr_data = []

        const All_data_obj = {};
        All_data_obj.table_ = called_table;
        All_data_obj.inputs_col_ = inputs_col;
        All_data_obj.inputs_check_ = inputs_check;
        All_data_obj.Database_link = Database_link;
        All_data_obj.callbackfunc;
        All_data_obj.callbackfunc_1;
        All_data_obj.obj;

    $(document).ready(function () {

        $('#send_group').click(function () {
            Loading_page_set();

            var value_elments = [];

            var student_index = document.getElementById('student_input').value;
            var session_index = document.getElementById('session_input').value;

            if(student_sessions_arr[session_index] == undefined)
            {
                alert('Choose Session ID');
                    Loading_page_clear();

                return;
            }

            if(student__arr[student_index] == undefined)
            {
                alert('Choose Student ID');
                Loading_page_clear();

                return;
            }

            if(student__arr[student_index][3] == 'No Group')
            {
                alert('No Group for this Studnet');
                Loading_page_clear();

                return;
            }




            value_elments[0] = student__arr[student_index][0];
            value_elments[1] = student_sessions_arr[session_index][0]; 
            value_elments[2] = '';
            value_elments[3] = '';

                All_data_obj.callbackfunc = function(All_data_obj, response)
                {

                    if(All_data_obj.obj && All_data_obj.obj !== undefined && All_data_obj.obj.length != 0)
                    {
                        for(var index = 0 ; index < All_data_obj.obj.length ; index++)
                        {
                            if((All_data_obj.obj[index].session_id == value_elments[1]) && (All_data_obj.obj[index].student_id == value_elments[0]))
                            {
                                alert('Student Already in this session');
                                Loading_page_clear();

                                return;
                            }
                        }
                    }


                    All_data_obj.callbackfunc = function(All_data_obj , response)
                    {
                        alert(response );
                        ADD_STUDENT_TO_SESSION();
                    };
                    add_one_data_from_database(All_data_obj , value_elments);
                    
                };
                get_all_data_from_database(All_data_obj);

        });
    });
        
}

function quary_tables_all_status_add_student_sessions(All_table_obj , func)
{
    
                                            
        if(All_table_obj.tables[9] && All_table_obj.tables[9] !== undefined && All_table_obj.tables[9].length != 0){

            for(var index_ = 0 ; index_ < All_table_obj.tables[9].length ; index_++)
            {
                var seached_rows = [];

                var group_id_search = 'No Group';
                if(All_table_obj.tables[10] && All_table_obj.tables[10] !== undefined && All_table_obj.tables[10].length != 0)
                {
                    for(var index = 0 ; index < All_table_obj.tables[10].length ; index++)
                    {
                        if((All_table_obj.tables[9][index_].id == All_table_obj.tables[10][index].student_id) && (All_table_obj.tables[10][index].status == "active"))
                        {
                            group_id_search = All_table_obj.tables[10][index].groups_id
                        }
                    }
                }

                var counter_sessions = 0;
                if(All_table_obj.tables[12] && All_table_obj.tables[12] !== undefined && All_table_obj.tables[12].length != 0)
                {
                    for(var index__ = 0 ; index__ < All_table_obj.tables[12].length ; index__++)
                    {
                        if(All_table_obj.tables[9][index_].id == All_table_obj.tables[12][index__].student_id)
                        {
                            counter_sessions++;
                        }
                    }   
                }

                seached_rows[0] = All_table_obj.tables[9][index_].id;
                seached_rows[1] = All_table_obj.tables[9][index_].std_id;
                seached_rows[2] = All_table_obj.tables[9][index_].name;
                seached_rows[3] = group_id_search;
                
                student__arr[index_] = seached_rows;

                $('#student_input').append(`<option value="${index_}"
                >(ID: ${All_table_obj.tables[9][index_].id}) - (iSC ID: ${All_table_obj.tables[9][index_].std_id}) - (NAME: ${All_table_obj.tables[9][index_].name}) - (GP ID: ${group_id_search}) - (SES:${counter_sessions})  </option>`);  
            
            }
        }


        if(All_table_obj.tables[11] && All_table_obj.tables[11] !== undefined && All_table_obj.tables[11].length != 0){

            for(var index_ = 0 ; index_ < All_table_obj.tables[11].length ; index_++)
            {
                var seached_rows = [];

                var group_id_search = 'No Group';
                if(All_table_obj.tables[8] && All_table_obj.tables[8] !== undefined && All_table_obj.tables[8].length != 0)
                {
                    for(var index = 0 ; index < All_table_obj.tables[8].length ; index++)
                    {
                        if((All_table_obj.tables[11][index_].groups_id == All_table_obj.tables[8][index].id) )
                        {
                            var id_age = '';
                            if(All_table_obj.tables[7] && All_table_obj.tables[7] !== undefined && All_table_obj.tables[7].length != 0)
                            {
                                for(var index__ = 0 ; index__ < All_table_obj.tables[7].length ; index__++)
                                {
                                    if(All_table_obj.tables[8][index].age_id == All_table_obj.tables[7][index__].id)
                                    {
                                        id_age = All_table_obj.tables[7][index__].name;
                                        break;
                                    }
                                }

                            }

                            var id_lvl = '';
                            if(All_table_obj.tables[3] && All_table_obj.tables[3] !== undefined && All_table_obj.tables[3].length != 0)
                            {
                                for(var index__ = 0 ; index__ < All_table_obj.tables[3].length ; index__++)
                                {
                                    if(All_table_obj.tables[8][index].level_id == All_table_obj.tables[3][index__].id)
                                    {
                                        id_lvl = All_table_obj.tables[3][index__].name;
                                        break;
                                    }
                                }
                            }
                            group_id_search = `${id_age}-${id_lvl}-${All_table_obj.tables[8][index].id}`;
                        }
                    }
                }

                seached_rows[0] = All_table_obj.tables[11][index_].id;
                seached_rows[1] = All_table_obj.tables[11][index_].groups_id;
                seached_rows[2] = All_table_obj.tables[11][index_].session_date;
                seached_rows[3] = All_table_obj.tables[11][index_].session_num;
                
                student_sessions_arr[index_] = seached_rows;

                $('#session_input').append(`<option value="${index_}"
                >(ID: ${All_table_obj.tables[11][index_].id}) - (GP ID: ${group_id_search}) - (DATE: ${All_table_obj.tables[11][index_].session_date}) - (NUM: ${All_table_obj.tables[11][index_].session_num})   </option>`);  
            
            }
        }
    


        $('.select2').select2();



}

function quary_tables_all_paper_student_groups(All_table_obj , func)
{
    var create_new_tabl_rows = [];


    // console.log(All_table_obj.tables);
   if(All_table_obj.tables[12] && All_table_obj.tables[12] != undefined && All_table_obj.tables[12].length != 0)
   {
        for(var index_12 = 0 ; index_12 < All_table_obj.tables[12].length ; index_12++)
        {
            var col_table_rows = [];
            var counter = 0 ;

            col_table_rows[counter] = All_table_obj.tables[12][index_12].id;counter++;

            var counter_students = 0 ;
            if(All_table_obj.tables[9] && All_table_obj.tables[9] != undefined && All_table_obj.tables[9].length != 0)
            {
                for(var index_9 = 0 ; index_9 < All_table_obj.tables[9].length ; index_9++)
                {
                    if(All_table_obj.tables[9][index_9].id == All_table_obj.tables[12][index_12].student_id)
                    {
                        // counter_students++;
                        col_table_rows[counter] = All_table_obj.tables[9][index_9].id;counter++;
                        col_table_rows[counter] = All_table_obj.tables[9][index_9].std_id;counter++;
                        col_table_rows[counter] = All_table_obj.tables[9][index_9].name;counter++;

                    }
                }
            }

            // col_table_rows[counter] = counter_students;counter++;


            if(All_table_obj.tables[11] && All_table_obj.tables[11] != undefined && All_table_obj.tables[11].length != 0)
            {
                for(var index_11 = 0 ; index_11 < All_table_obj.tables[11].length ; index_11++)
                {
                    if(All_table_obj.tables[11][index_11].id == All_table_obj.tables[12][index_12].session_id)
                    {

                        if(All_table_obj.tables[8] && All_table_obj.tables[8] != undefined && All_table_obj.tables[8].length != 0)
                        {
                            for(var index_8 = 0 ; index_8 < All_table_obj.tables[8].length ; index_8++)
                            {
                                if(All_table_obj.tables[8][index_8].id == All_table_obj.tables[11][index_11].groups_id )
                                {

                                    var Group_id__ = '';

                                    if(All_table_obj.tables[7] && All_table_obj.tables[7] != undefined && All_table_obj.tables[7].length != 0)
                                    {
                                        for(var index_7 = 0 ; index_7 < All_table_obj.tables[7].length ; index_7++)
                                        {
                                            if(All_table_obj.tables[7][index_7].id == All_table_obj.tables[8][index_8].age_id )
                                            {
                                                Group_id__ += All_table_obj.tables[7][index_7].name;
                                                break;
                                            }
                                        }
                                    }

                                    if(All_table_obj.tables[3] && All_table_obj.tables[3] != undefined && All_table_obj.tables[3].length != 0)
                                    {
                                        for(var index_3 = 0 ; index_3 < All_table_obj.tables[3].length ; index_3++)
                                        {
                                            if(All_table_obj.tables[3][index_3].id == All_table_obj.tables[8][index_8].level_id )
                                            {
                                                Group_id__ += '-'+All_table_obj.tables[3][index_3].name;
                                                break;
                                            }
                                        }
                                    }

                                    col_table_rows[counter] = Group_id__+'-'+All_table_obj.tables[8][index_8].id;counter++;
                                    
                                    if(All_table_obj.tables[0] && All_table_obj.tables[0] != undefined && All_table_obj.tables[0].length != 0)
                                    {
                                        for(var index_0 = 0 ; index_0 < All_table_obj.tables[0].length ; index_0++)
                                        {
                                            if(All_table_obj.tables[0][index_0].id == All_table_obj.tables[8][index_8].slot_id )
                                            {
                                                col_table_rows[counter] = All_table_obj.tables[0][index_0].slot;counter++;
                                                break;
                                            }
                                        }
                                    }

                                    if(All_table_obj.tables[6] && All_table_obj.tables[6] != undefined && All_table_obj.tables[6].length != 0)
                                    {
                                        for(var index_6 = 0 ; index_6 < All_table_obj.tables[6].length ; index_6++)
                                        {
                                            if(All_table_obj.tables[6][index_6].id == All_table_obj.tables[8][index_8].days_id )
                                            {
                                                col_table_rows[counter] = All_table_obj.tables[6][index_6].name;counter++;
                                                break;
                                            }
                                        }
                                    }
                                    break;
                                }
                            }
                        }


                        if(All_table_obj.tables[13] && All_table_obj.tables[13] != undefined && All_table_obj.tables[13].length != 0)
                        {
                            for(var index_13 = 0 ; index_13 < All_table_obj.tables[13].length ; index_13++)
                            {
                                if(All_table_obj.tables[13][index_13].id == All_table_obj.tables[11][index_11].employee_id )
                                {
                                    col_table_rows[counter] = All_table_obj.tables[13][index_13].name;counter++;
                                    col_table_rows[counter] = All_table_obj.tables[13][index_13].phone;counter++;
                                    col_table_rows[counter] = All_table_obj.tables[13][index_13].email;counter++;
                                    col_table_rows[counter] = All_table_obj.tables[13][index_13].zoomlink;counter++;

                                    break;
                                }
                            }
                        }

                        col_table_rows[counter] = All_table_obj.tables[11][index_11].zoomlink;counter++;
                        col_table_rows[counter] = All_table_obj.tables[11][index_11].session_date;counter++;
                        col_table_rows[counter] = All_table_obj.tables[11][index_11].session_num;counter++;
                        col_table_rows[counter] = All_table_obj.tables[11][index_11].open_by;counter++;

                        break;
                    }
                }
            }

            create_new_tabl_rows[index_12] = col_table_rows;
        }
   }

   func( create_new_tabl_rows );

}

function create_table_student_sessions(all_tables)
{
    Loading_page_clear();

    var inputs_names_search = [
        ""
        ,"St ID : "
        ,"St iSchool ID : "
        ,"St Name : "
        ,"Grp ID : " 
        ,"Grp Slot : " 
        ,"Grp Day : " 
        ,"Inst Name : " 
        ,"Inst Phone : " 
        ,"Inst Email : " 
        ,"Inst Zoom Link : " 
        ,"Se Zoom Link : " 
        ,"Se Date : " 
        ,"Se Number : " 
        ,"Se Open By : " 
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
   All_data_obj.index_num_value = [];
   All_data_obj.obj;

   createTable(all_tables ,All_data_obj , 'clear' , 6, 4); 
}

function create_table_student_sessions_customized(all_tables)
{
    Loading_page_clear();

    var inputs_names_search = [
        ""
        ,"Student ID : "
        ,"Student iSchool ID : "
        ,"Student Name : "
        ,"Group Age : " 
        ,"Group ID : "
        ,"Group Lvl : " 
        ,"Group Slot : " 
        ,"Group Day : " 
        ,"Instructor Name : " 
        ,"Instructor Phone : " 
        ,"Instructor Email : " 
        ,"Instructor Zoom Link : " 
        ,"Session Zoom Link : " 
        ,"Session Date : " 
        ,"Session Number : " 
        ,"Open By : " 

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
   All_data_obj.index_num_value = [];
   All_data_obj.obj;


   var values_ = document.getElementById("search_all").value;

   if(values_ == "")
   {
      All_data_obj.Start_Index = 1;
      createTable(all_tables ,All_data_obj , 'clear' , 6, 4);
      return;
   }

    var result = Search_for_value(all_tables , values_)


   createTable(result ,All_data_obj , 'clear' , 6, 4); 
}







function paper_inner_1 (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class='col-4 select2' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}

/* <select id="select-state" placeholder="Pick a state..."></select> */


function paper_inner_1_hidden (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`" hidden>`+title+`:</label>
  <select class='col-4' name="`+paper_+`" id="`+paper_+`" hidden>
  <option value=""></option>
  </select>` ;
}


