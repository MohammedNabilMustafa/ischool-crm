
var days_arr_sessions = []
var employee_arr_sessions = []
var session_ids = []
var student_att_arr = []

var days_flag = false;

var Time_slots = [];
var lang_slots = [];
var Att_slots = [];
var Lvl_slots = [];
var Trck_slots = [];
var Type_slots = [];
var Day_slots = [];
var Age_slots = [];

function ADD_SESSION_TO_GROUP()
{
    Loading_page_set();

    document.getElementById("blob_Location_1").innerHTML = ``;

    days_flag = false;
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    document.getElementById("search-results").innerHTML = "";

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
    ]
    ,
    ["groups_id" 
    , "student_id" 
    , "status" 
    ],
    ["name" 
    , "phone" 
    , "email" 
    , "zoomlink" 
    , "username" 
    , "password" 
    , "department_id" 
    , "permission_id" 
    , "role_id" 
        ],
        [
            "groups_id"
            ,"employee_id"
            ,"zoomlink"
            ,"session_date"
            ,"session_num"
            ,"open_by"
        ],
        [
            "student_id"
            ,"session_id"
            ,"zoomlink"
            ,"attendance"
            ,"feedback"
        ],
        ["std_id"
        ,"parent_id"
        ,"free_session_status"
        ,"std_status"
        ,"name"
        ,"age"
        ,"birthdate"
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
      'student_groups',
      'employee',
      'sessions',
      'att_feed',
      'students'
  ];

var paper_inputs = [
    'group_input' , 
    'start_sessions_input' , 
    'student_input',
    'employee_input' , 

  ];

var paper_inputs_label = [
    'Group' , 
    'Student',   
    'Student',   
    'Instructor',   
  ];
        const All_req_obj = {};
        All_req_obj.Database_link = Database_link
        All_req_obj.inputs_col = inputs_col
        All_req_obj.called_table = called_table
                 
        html_create_lists_add_session_group(paper_inputs , paper_inputs_label , "Location_1" );

        get_all_data_arr(All_req_obj ,quary_tables_all_status_add_session_to_parent , '' , time_out  , 1);


    $('#search_btn_all').click(function () {  
        Loading_page_set();

        get_all_data_arr(All_req_obj ,quary_tables_all_status_add_session_to_parent , schedule_create , time_out  , 2);

    });
}


function schedule_create(All_req_obj)
{
    var div = document.getElementById("search-results");
    div.innerHTML = '';

    var result =`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    var days_count = document.getElementById('num_input').value;

    var object_data = {}

    object_data.start_from_day = days_arr_sessions[Todate_schedule(document.getElementById('date_input').value)[3]];
    object_data.start_from = document.getElementById('date_input').value;
    object_data.table_count = 0;
    object_data.table_row_count = [];
    object_data.table_col_count = [];
    object_data.table_count_save = [];

    var next_date_arr = [];

    var schedule_data = [];


    for(var index = 0 ; index < days_count ; index++)
    {
        var schedule_data_rows = [];

        for(var index_ = 0 ; index_ < employee_arr_sessions.length ; index_++)
        {
            var schedule_data_cols = [];

            schedule_data_cols[0] = [employee_arr_sessions[index_][0] ,employee_arr_sessions[index_][1]];


        if(session_ids.length)
        {
            for(index__ = 0 ; index__ < session_ids.length ; index__++)
            {
                if(session_ids[index__][2] == object_data.start_from)
                {                        
                    if(session_ids[index__][16] == employee_arr_sessions[index_][1])
                    {

                        var count_st = 0
                        var check_att = 0;
                        var check_feed = 0;

                        for(var ii = 0 ;  ii < student_att_arr.length ; ii++ )
                        {
                            
                            if(student_att_arr[ii][0] == session_ids[index__][0])
                            {
                                count_st++;
                            }

                            if(student_att_arr[ii][0] == session_ids[index__][0] && student_att_arr[ii][4] == "")
                            {
                                check_att++;

                            }
                            if(student_att_arr[ii][0] == session_ids[index__][0] && student_att_arr[ii][5] == "")
                            {
                                check_feed++;
                            }
                        }

                        if(check_att)
                        {
                            check_att = `<label style='color:red'> ${check_att} Attendance Remain </label>`;
                        }
                        else
                        {
                            check_att = '';
                        }

                        if(check_feed)
                        {
                            check_feed = `<label style='color:red'> ${check_feed} Feeback Remain </label>`;
                        }
                        else
                        {
                            check_feed = '';
                        }

                        if(check_att == "" && check_feed =="")
                        {
                            check_att = `<label style='color:Green'>Materials Up To Date </label>`;
                        }

                        var Button_view = '';
                        var today_date = new Date();
                        var compared_date = new Date(session_ids[index__][2]);
                        
                        if(today_date >=  compared_date)
                        {
                            Button_view = `<button  type="button" id='view_more_${index__}' class="btn btn-light" style='float:right'><i class="fa-solid fa-eye"></i></button>` ;
                        }
                        else
                        {
                            Button_view = '';
                            check_att = '';
                            check_feed = '';
                        }

                        var data_for_all = ['Group ID : '+session_ids[index__][5] , 'Session ID : '+session_ids[index__][0] , "Session Num : "+session_ids[index__][3] , "Lang : "+session_ids[index__][9] , "Type : "+session_ids[index__][13] , "Level : "+session_ids[index__][11] , count_st+" Students" 
                        ,check_att 
                        ,check_feed
                        ,Button_view ];

                        if(session_ids[index__][7] == 'Slot 1' && schedule_data_cols[1] == undefined )
                        {
                            schedule_data_cols[1] = data_for_all;
                            schedule_data_cols[2] = '-'}
                            // else{schedule_data_cols[1] = ['empty','2' , employee_arr_sessions[index_][0] ,object_data.start_from ]; schedule_data_cols[2] = ['empty','3' , employee_arr_sessions[index_][0] ,object_data.start_from ];}

                        if(session_ids[index__][7] == 'Slot 2' && schedule_data_cols[3] == undefined)
                        {   
                            schedule_data_cols[3] = data_for_all;
                            schedule_data_cols[4] = '-'}
                            // else{schedule_data_cols[3] = ['empty','5' , employee_arr_sessions[index_][0] ,object_data.start_from ]; schedule_data_cols[4] = ['empty','6' , employee_arr_sessions[index_][0] ,object_data.start_from ];}
                                        
                        if(session_ids[index__][7] == 'Slot 3' && schedule_data_cols[5] == undefined)
                        {
                            schedule_data_cols[5] = data_for_all;
                            schedule_data_cols[6] = '-'}
                            // else{schedule_data_cols[5] = ['empty','8' , employee_arr_sessions[index_][0] ,object_data.start_from ]; schedule_data_cols[6] = ['empty','9' , employee_arr_sessions[index_][0] ,object_data.start_from ];}

                        if(session_ids[index__][7] == 'Slot 4' && schedule_data_cols[1] == undefined)
                        {schedule_data_cols[1] = data_for_all;}
                        //  if( session_ids[index__][7] != 'Slot 4' && session_ids[index__][7] != 'Slot 1')
                        // {schedule_data_cols[1] = ['empty','2' , employee_arr_sessions[index_][0] ,object_data.start_from ]}

                            if(session_ids[index__][7] == 'Slot 5' && schedule_data_cols[2] == undefined)
                            {schedule_data_cols[2] =  data_for_all;}
                            //  if( session_ids[index__][7] != 'Slot 5' && session_ids[index__][7] != 'Slot 1')
                            // {schedule_data_cols[2] = ['empty','3' , employee_arr_sessions[index_][0] ,object_data.start_from ]}

                            if(session_ids[index__][7] == 'Slot 6' && schedule_data_cols[3] == undefined)
                            {schedule_data_cols[3] = data_for_all;}
                            //  if( session_ids[index__][7] != 'Slot 6' && session_ids[index__][7] != 'Slot 2')
                            // {schedule_data_cols[3] =['empty','5' , employee_arr_sessions[index_][0] ,object_data.start_from ]}

                            if(session_ids[index__][7] == 'Slot 7' && schedule_data_cols[4] == undefined)
                            {schedule_data_cols[4] = data_for_all;}
                            //  if( session_ids[index__][7] != 'Slot 7' && session_ids[index__][7] != 'Slot 2')
                            // {schedule_data_cols[4] =['empty','6' , employee_arr_sessions[index_][0] ,object_data.start_from ]}

                            if(session_ids[index__][7] == 'Slot 8' && schedule_data_cols[5] == undefined)
                            {schedule_data_cols[5] = data_for_all;}
                            //  if( session_ids[index__][7] != 'Slot 8' && session_ids[index__][7] != 'Slot 3')
                            // {schedule_data_cols[5] =['empty','8' , employee_arr_sessions[index_][0] ,object_data.start_from ]}

                            if(session_ids[index__][7] == 'Slot 9' && schedule_data_cols[6] == undefined)
                            {schedule_data_cols[6] = data_for_all;}
                            //  if( session_ids[index__][7] != 'Slot 9' && session_ids[index__][7] != 'Slot 3')
                            // {schedule_data_cols[6] = ['empty','9' , employee_arr_sessions[index_][0] ,object_data.start_from ]}



                        }
                        else
                        {


                        }

                }
                else
                {

                }
            }

        }
        else
        {
            schedule_data_cols[1] = ['empty','2' , employee_arr_sessions[index_][0] ,object_data.start_from ]
            schedule_data_cols[2] = ['empty','3' , employee_arr_sessions[index_][0] ,object_data.start_from  ]
            schedule_data_cols[3] = ['empty','5' , employee_arr_sessions[index_][0] ,object_data.start_from ]
            schedule_data_cols[4] = ['empty','6' , employee_arr_sessions[index_][0] ,object_data.start_from ]
            schedule_data_cols[5] = ['empty','8' , employee_arr_sessions[index_][0] ,object_data.start_from ]
            schedule_data_cols[6] = ['empty','9' , employee_arr_sessions[index_][0] ,object_data.start_from ]
        }


        schedule_data_rows[index_] = schedule_data_cols;

        }


        var scond_arr = [];
        for(var index_i = 0 ; index_i < schedule_data_rows.length ; index_i++)
        {
            var first_arr = [];

            first_arr[0] = schedule_data_rows[index_i][0];

            if(schedule_data_rows[index_i][1] == undefined) first_arr[1] = ['empty','2' , first_arr[0][0] ,object_data.start_from ];
            else first_arr[1] = schedule_data_rows[index_i][1];
            if(schedule_data_rows[index_i][2] == undefined) first_arr[2] = ['empty','3' , first_arr[0][0] ,object_data.start_from ];
            else first_arr[2] = schedule_data_rows[index_i][2];
            if(schedule_data_rows[index_i][3] == undefined) first_arr[3] = ['empty','5' , first_arr[0][0] ,object_data.start_from ];
            else first_arr[3] = schedule_data_rows[index_i][3];
            if(schedule_data_rows[index_i][4] == undefined) first_arr[4] = ['empty','6' , first_arr[0][0] ,object_data.start_from ];
            else first_arr[4] = schedule_data_rows[index_i][4];
            if(schedule_data_rows[index_i][5] == undefined) first_arr[5] = ['empty','8' , first_arr[0][0] ,object_data.start_from ];
            else first_arr[5] = schedule_data_rows[index_i][5];
            if(schedule_data_rows[index_i][6] == undefined) first_arr[6] = ['empty','9' , first_arr[0][0] ,object_data.start_from ];
            else first_arr[6] = schedule_data_rows[index_i][6];
            scond_arr[index_i] = first_arr;
        }
        schedule_data_rows = scond_arr;

        object_data.schedule_data_rows = schedule_data_rows;
        object_data.table_count = index;
        object_data.table_count_save[index] = index;


        var choose_date = document.getElementById('days_input').value;


        if(choose_date != "")
        {
            if(object_data.start_from_day != "-" && object_data.start_from_day == choose_date)
            {
                object_data.callbackfunc = function(return_data , return_data_1 ,object_data_)
                {   
                    var result = '';
                    if(object_data_.schedule_data_rows[return_data][return_data_1][0] == 'empty')
                    {
                        var return_data_res_rows = [];

                        if(object_data_.schedule_data_rows[return_data][return_data_1][1] == '2')
                        {
                            var return_data_res_cols = [];
                            
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 1' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 1' , 2 , 3)[0];
                            return_data_res_rows[0] = return_data_res_cols;

                            return_data_res_cols = [];
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 4' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 4' , 2 , 3)[0];
                            return_data_res_rows[1] = return_data_res_cols;                            
                        }
                        if (object_data_.schedule_data_rows[return_data][return_data_1][1] == '3')
                        {
                            var return_data_res_cols = [];
                            
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 5' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 5' , 2 , 3)[0];
                            return_data_res_rows[0] = return_data_res_cols;
                        }
                        

                        if(object_data_.schedule_data_rows[return_data][return_data_1][1] == '5')
                        {
                            var return_data_res_cols = [];
                            
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 2' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 2' , 2 , 3)[0];
                            return_data_res_rows[0] = return_data_res_cols;

                            return_data_res_cols = [];
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 6' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 6' , 2 , 3)[0];
                            return_data_res_rows[1] = return_data_res_cols;                            
                        }
                        if (object_data_.schedule_data_rows[return_data][return_data_1][1] == '6')
                        {
                            var return_data_res_cols = [];
                            
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 7' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 7' , 2 , 3)[0];
                            return_data_res_rows[0] = return_data_res_cols;
                        }

                        if(object_data_.schedule_data_rows[return_data][return_data_1][1] == '8')
                        {
                            var return_data_res_cols = [];
                            
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 3' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 3' , 2 , 3)[0];
                            return_data_res_rows[0] = return_data_res_cols;

                            return_data_res_cols = [];
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 8' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 8' , 2 , 3)[0];
                            return_data_res_rows[1] = return_data_res_cols;                            
                        }
                        if (object_data_.schedule_data_rows[return_data][return_data_1][1] == '9')
                        {
                            var return_data_res_cols = [];
                            
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 9' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 9' , 2 , 3)[0];
                            return_data_res_rows[0] = return_data_res_cols;
                        }

                        result += `<div style='display:flex;justify-content:left;'><button id='e${object_data_.table_count}_${return_data}_${return_data_1}' class='btn btn-light'  > <i class="fa-solid fa-angles-down"></i> </button></div>`;


                        result += `<div style='display:flex;justify-content:left;'><button style='visibility:hidden' id='back_${object_data_.table_count}_${return_data}_${return_data_1}' class='btn btn-light'  > <i class="fa-solid fa-angles-up"></i> </button></div>`;
                        result += paper_inner_session_return(`time_${object_data_.table_count}_${return_data}_${return_data_1}` , "Time Slot" , return_data_res_rows , 0 , 1);
                        result += `<br>`+ paper_inner_session_return(`lan_${object_data_.table_count}_${return_data}_${return_data_1}` , "Language" , lang_slots , 0 , 2);
                        result += `<br>`+ paper_inner_session_return(`lvl_${object_data_.table_count}_${return_data}_${return_data_1}` , "Level" , Lvl_slots , 0 , 2);
                        result += `<br>`+ paper_inner_session_return(`type_${object_data_.table_count}_${return_data}_${return_data_1}` , "Type" , Type_slots , 0 , 2);
                        result += `<br>`+ paper_inner_session_return(`age_${object_data_.table_count}_${return_data}_${return_data_1}` , "Age" , Age_slots , 0 , 2);
                        result += `<br><label id='Lnum_${object_data_.table_count}_${return_data}_${return_data_1}' style='visibility:hidden'># of Sessions : </label><input class='col-5' id='num_${object_data_.table_count}_${return_data}_${return_data_1}' type='number' style='visibility:hidden'>`
                        result += `<input id='inst_${object_data_.table_count}_${return_data}_${return_data_1}'  value='${object_data_.schedule_data_rows[return_data][return_data_1][2]}' hidden>`
                        result += `<input id='date_${object_data_.table_count}_${return_data}_${return_data_1}'  value='${object_data_.schedule_data_rows[return_data][return_data_1][3]}' hidden>`

                        result += `<div style='display:flex;justify-content:right;'><button id='${object_data_.table_count}_${return_data}_${return_data_1}' class='btn btn-light'  style='visibility:hidden'> <i class="fa-solid fa-circle-arrow-right"></i> </button></div>`;

                    }

                    return result;
                };
                result += createTable_schedule(schedule_data_rows , object_data );
            }
        }
        else
        {

        if(object_data.start_from_day != "-")
        {
                object_data.callbackfunc = function(return_data , return_data_1 ,object_data_)
                {   
                    var result = '';
                    if(object_data_.schedule_data_rows[return_data][return_data_1][0] == 'empty')
                    {
                        var return_data_res_rows = [];

                        if(object_data_.schedule_data_rows[return_data][return_data_1][1] == '2')
                        {
                            var return_data_res_cols = [];
                            
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 1' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 1' , 2 , 3)[0];
                            return_data_res_rows[0] = return_data_res_cols;

                            return_data_res_cols = [];
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 4' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 4' , 2 , 3)[0];
                            return_data_res_rows[1] = return_data_res_cols;                            
                        }
                        if (object_data_.schedule_data_rows[return_data][return_data_1][1] == '3')
                        {
                            var return_data_res_cols = [];
                            
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 5' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 5' , 2 , 3)[0];
                            return_data_res_rows[0] = return_data_res_cols;
                        }
                        

                        if(object_data_.schedule_data_rows[return_data][return_data_1][1] == '5')
                        {
                            var return_data_res_cols = [];
                            
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 2' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 2' , 2 , 3)[0];
                            return_data_res_rows[0] = return_data_res_cols;

                            return_data_res_cols = [];
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 6' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 6' , 2 , 3)[0];
                            return_data_res_rows[1] = return_data_res_cols;                            
                        }
                        if (object_data_.schedule_data_rows[return_data][return_data_1][1] == '6')
                        {
                            var return_data_res_cols = [];
                            
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 7' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 7' , 2 , 3)[0];
                            return_data_res_rows[0] = return_data_res_cols;
                        }

                        if(object_data_.schedule_data_rows[return_data][return_data_1][1] == '8')
                        {
                            var return_data_res_cols = [];
                            
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 3' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 3' , 2 , 3)[0];
                            return_data_res_rows[0] = return_data_res_cols;

                            return_data_res_cols = [];
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 8' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 8' , 2 , 3)[0];
                            return_data_res_rows[1] = return_data_res_cols;                            
                        }
                        if (object_data_.schedule_data_rows[return_data][return_data_1][1] == '9')
                        {
                            var return_data_res_cols = [];
                            
                            return_data_res_cols[0]  = search_for_data_index(Time_slots , 'Slot 9' , 2 , 0)[0];
                            return_data_res_cols[1]  = search_for_data_index(Time_slots , 'Slot 9' , 2 , 3)[0];
                            return_data_res_rows[0] = return_data_res_cols;
                        }

                        result += `<div style='display:flex;justify-content:left;'><button id='e${object_data_.table_count}_${return_data}_${return_data_1}' class='btn btn-light'  > <i class="fa-solid fa-angles-down"></i> </button></div>`;


                        result += `<div style='display:flex;justify-content:left;'><button style='visibility:hidden' id='back_${object_data_.table_count}_${return_data}_${return_data_1}' class='btn btn-light'  > <i class="fa-solid fa-angles-up"></i> </button></div>`;
                        result += paper_inner_session_return(`time_${object_data_.table_count}_${return_data}_${return_data_1}` , "Time Slot" , return_data_res_rows , 0 , 1);
                        result += `<br>`+ paper_inner_session_return(`lan_${object_data_.table_count}_${return_data}_${return_data_1}` , "Language" , lang_slots , 0 , 2);
                        result += `<br>`+ paper_inner_session_return(`lvl_${object_data_.table_count}_${return_data}_${return_data_1}` , "Level" , Lvl_slots , 0 , 2);
                        result += `<br>`+ paper_inner_session_return(`type_${object_data_.table_count}_${return_data}_${return_data_1}` , "Type" , Type_slots , 0 , 2);
                        result += `<br>`+ paper_inner_session_return(`age_${object_data_.table_count}_${return_data}_${return_data_1}` , "Age" , Age_slots , 0 , 2);
                        result += `<br><label id='Lnum_${object_data_.table_count}_${return_data}_${return_data_1}' style='visibility:hidden'># of Sessions : </label><input class='col-3' id='num_${object_data_.table_count}_${return_data}_${return_data_1}' type='number' style='visibility:hidden'>`
                        result += `<input id='inst_${object_data_.table_count}_${return_data}_${return_data_1}'  value='${object_data_.schedule_data_rows[return_data][return_data_1][2]}' hidden>`
                        result += `<input id='date_${object_data_.table_count}_${return_data}_${return_data_1}'  value='${object_data_.schedule_data_rows[return_data][return_data_1][3]}' hidden>`

                        result += `<div style='display:flex;justify-content:right;'><button id='${object_data_.table_count}_${return_data}_${return_data_1}' class='btn btn-light'  style='visibility:hidden'> <i class="fa-solid fa-circle-arrow-right"></i> </button></div>`;

                    }

                    return result;
                };
                result += createTable_schedule(schedule_data_rows , object_data );
            }
        }

        var days_value = 0;

        days_value = Todate_schedule(object_data.start_from);
        var data_count = Number(days_value[1])+1;
        next_date_arr = Todate_schedule(null , data_count , days_value[2] , days_value[4]);
        object_data.start_from_day = days_arr_sessions[Todate_schedule(next_date_arr[0])[3]];
        object_data.start_from = next_date_arr[0];

    }
    
    result +=`</div></div>`;

    var div = document.getElementById("search-results");
    div.innerHTML += result;
// Tiger

$('.select2').select2();


for(var index_se = 0 ; index_se < session_ids.length ; index_se++)
{
    $('#view_more_'+index_se).click(function () {
        var id = this.id;
        var ret = id.replace('view_more_','');
        modal.style.display = "block";

        var students_arr = [];
        var counter_student = 0;
        for(var index_view = 0 ; index_view < student_att_arr.length ; index_view++ )
        {
            var students_arr_inner = [];
            var counter_student_inner = 0;

            if(Number(session_ids[ret][0]) == Number(student_att_arr[index_view][0]))
            {
                students_arr_inner[counter_student_inner] = student_att_arr[index_view][0];counter_student_inner++;
                students_arr_inner[counter_student_inner] = student_att_arr[index_view][2];counter_student_inner++;
                students_arr_inner[counter_student_inner] = student_att_arr[index_view][3];counter_student_inner++;
                students_arr_inner[counter_student_inner] = student_att_arr[index_view][4];counter_student_inner++;
                students_arr_inner[counter_student_inner] = student_att_arr[index_view][5];counter_student_inner++;
                students_arr_inner[counter_student_inner] = student_att_arr[index_view][1];counter_student_inner++;
                students_arr[counter_student] = students_arr_inner;counter_student++;

            }

        }

        createTable_pop_up_schedule(students_arr , All_req_obj);


    });
}



    for(var i_0 = 0 ; i_0 < object_data.table_count ; i_0++)
    {
        for(var i_1 = 0 ; i_1 < object_data.table_row_count.length ; i_1++)
        {
            for(var i_2 = 0 ; i_2 < object_data.table_col_count.length ; i_2++)
            {
                var table_1 = object_data.table_count_save[i_0];
                var row_1 = object_data.table_row_count[i_1];
                var col_1 = object_data.table_col_count[i_2];

                if(table_1 == undefined || row_1 == undefined || col_1 == undefined)
                {
                }
                else
                {
                    // var values_time = ;
                    // var values_lan = document.getElementById('lan_'+table_1+'_'+row_1+'_'+col_1).value;

                        $('#'+table_1+'_'+row_1+'_'+col_1).click(function () {
                            if (confirm("You want to Add!") == true) {
                                var object_group = {}
                                object_group.slot = document.getElementById('time_'+this.id).value;
                                object_group.lang = document.getElementById('lan_'+this.id).value;
                                object_group.att = 1;
                                object_group.lvl = document.getElementById('lvl_'+this.id).value;
                                object_group.trck = 1;
                                object_group.type = document.getElementById('type_'+this.id).value;
                                object_group.days = Todate(document.getElementById('date_'+this.id).value)[3]+1;
                                object_group.age = document.getElementById('age_'+this.id).value;
                                object_group.opend_by = '';
                                object_group.date = document.getElementById('date_'+this.id).value;
                                object_group.inst = document.getElementById('inst_'+this.id).value;
                                object_group.session = document.getElementById('num_'+this.id).value;                                
                                    

                                // var Date_inc = Number(Todate_schedule_sessions(object_group.date)[1]);
                                // var Month_inc = Number(Todate_schedule_sessions(object_group.date)[2]);
                                // var Year_inc = Number(Todate_schedule_sessions(object_group.date)[4]);
                                // var newDate  = Todate_schedule_sessions(null  , Date_inc ,  Month_inc , Year_inc)
                        

                                    add_new_group_schedule(object_group , All_req_obj);
                                }
                                else
                                {
                  
                                }                                
                        });

                        $('#e'+table_1+'_'+row_1+'_'+col_1).click(function () {

                            var id = this.id;
                            var ret = id.replace('e','');

                            document.getElementById('time_'+ret).style.visibility = "visible";
                            document.getElementById('Ltime_'+ret).style.visibility = "visible";
                            document.getElementById('lan_'+ret).style.visibility = "visible";
                            document.getElementById('Llan_'+ret).style.visibility = "visible";
                            document.getElementById('lvl_'+ret).style.visibility = "visible";
                            document.getElementById('Llvl_'+ret).style.visibility = "visible";
                            document.getElementById('type_'+ret).style.visibility = "visible";
                            document.getElementById('Ltype_'+ret).style.visibility = "visible";
                            document.getElementById('age_'+ret).style.visibility = "visible";
                            document.getElementById('Lage_'+ret).style.visibility = "visible";
                            document.getElementById('num_'+ret).style.visibility = "visible";
                            document.getElementById('Lnum_'+ret).style.visibility = "visible";
                            document.getElementById(ret.toString()).style.visibility = "visible";
                            document.getElementById('back_'+ret).style.visibility = "visible";
                            document.getElementById(id).style.visibility = "hidden";
                                
                       
                        });

                        $('#back_'+table_1+'_'+row_1+'_'+col_1).click(function () {

                            var id = this.id;
                            var ret = id.replace('back_','');

                            document.getElementById('time_'+ret).style.visibility = "hidden";
                            document.getElementById('Ltime_'+ret).style.visibility = "hidden";
                            document.getElementById('lan_'+ret).style.visibility = "hidden";
                            document.getElementById('Llan_'+ret).style.visibility = "hidden";
                            document.getElementById('lvl_'+ret).style.visibility = "hidden";
                            document.getElementById('Llvl_'+ret).style.visibility = "hidden";
                            document.getElementById('type_'+ret).style.visibility = "hidden";
                            document.getElementById('Ltype_'+ret).style.visibility = "hidden";
                            document.getElementById('age_'+ret).style.visibility = "hidden";
                            document.getElementById('Lage_'+ret).style.visibility = "hidden";
                            document.getElementById('num_'+ret).style.visibility = "hidden";
                            document.getElementById('Lnum_'+ret).style.visibility = "hidden";
                            document.getElementById(ret.toString()).style.visibility = "hidden";
                            document.getElementById('back_'+ret).style.visibility = "hidden";
                            document.getElementById('e'+ret).style.visibility = "visible";
                                
                       
                        });

                }



            }
        }
    }


}

function html_create_lists_add_session_group(paper_inputs , paper_inputs_label  , location_)
{
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    // document.getElementById("search-results").innerHTML = "";

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    paper_inner_session('days_input' , 'Days ');
    document.getElementById(location_).innerHTML +=`<label>Start from :</label><input type='date' id='date_input' />`;
    document.getElementById(location_).innerHTML +=`<label># of days :</label><input type='number' id='num_input' />`;

    document.getElementById(location_).innerHTML +=`</div></div>`;
    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    document.getElementById(location_).innerHTML += `<div style='display:flex;justify-content:right;'><button  type="button" id='search_btn_all' class="btn btn-secondary"><i class="fas fa-search"></i></button></div>`;
    document.getElementById(location_).innerHTML +=`</div></div>`;





    // var div = document.getElementById("Location_1");
    // div.innerHTML = value;


}

function paper_inner_session_group (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class='col-3 select2' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}


function quary_tables_all_status_add_session_to_parent(All_table_obj , func , All_req_obj)
{
    var seached_rows = [];
    var count__ = 0;


if(All_table_obj.tables[6] && All_table_obj.tables[6] !== undefined && All_table_obj.tables[6].length != 0){

    if(days_flag == false)
    {
        days_flag = true;
        for(var index = 0 ; index < All_table_obj.tables[6].length ; index++)
        {
            days_arr_sessions[index] =  All_table_obj.tables[6][index].name;
            $('#days_input').append(`<option value="${ All_table_obj.tables[6][index].name}"
            > ${All_table_obj.tables[6][index].name}</option>`);  
        }
    }

}

if(All_table_obj.tables[10] && All_table_obj.tables[10] !== undefined && All_table_obj.tables[10].length != 0){

    var counter_index = 0
    for(var index = 0 ; index < All_table_obj.tables[10].length ; index++)
    {
        if(All_table_obj.tables[10][index].permission_id == 1)
        {
            var employee_arr_sessions_rows = [];
            employee_arr_sessions_rows[0] =  All_table_obj.tables[10][index].id;
            employee_arr_sessions_rows[1] =  All_table_obj.tables[10][index].name
            employee_arr_sessions_rows[2] =  All_table_obj.tables[10][index].zoomlink
            employee_arr_sessions[counter_index++] =  employee_arr_sessions_rows;
        }

    }
}


Time_slots = All_table_obj.tables[0];
lang_slots = All_table_obj.tables[1];
Att_slots = All_table_obj.tables[2];
Lvl_slots = All_table_obj.tables[3];
Trck_slots = All_table_obj.tables[4];
Type_slots = All_table_obj.tables[5];
Day_slots = All_table_obj.tables[6];
Age_slots = All_table_obj.tables[7];


if(All_table_obj.tables[11] && All_table_obj.tables[11] !== undefined && All_table_obj.tables[11].length != 0){

    var counter_index = 0
    var count_outer = 0;
    student_att_arr = [];

    for(var index = 0 ; index < All_table_obj.tables[11].length ; index++)
    {

        if(All_table_obj.tables[12] && All_table_obj.tables[12] !== undefined && All_table_obj.tables[12].length != 0)
        {
            for(var index_12 = 0 ; index_12 < All_table_obj.tables[12].length ; index_12++)
            {
                var inner_arr_ = []
                var counter = 0;
                if(All_table_obj.tables[11][index].id == All_table_obj.tables[12][index_12].session_id)
                {
                    inner_arr_[counter] = All_table_obj.tables[12][index_12].session_id;counter++;
                    inner_arr_[counter] = All_table_obj.tables[12][index_12].id;counter++;

                    if(All_table_obj.tables[13] && All_table_obj.tables[13] !== undefined && All_table_obj.tables[13].length != 0)
                    {
                        for(var index_13 = 0 ; index_13 < All_table_obj.tables[13].length ; index_13++)
                        {

                            if(All_table_obj.tables[12][index_12].student_id == All_table_obj.tables[13][index_13].id)
                            {
                                inner_arr_[counter] = All_table_obj.tables[13][index_13].id;counter++;
                                inner_arr_[counter] = All_table_obj.tables[13][index_13].name;counter++;
                                break;
                            }
                        }
                    }


                    inner_arr_[counter] = All_table_obj.tables[12][index_12].attendance;counter++;
                    inner_arr_[counter] = All_table_obj.tables[12][index_12].feedback;counter++;
                    student_att_arr[count_outer] = inner_arr_;count_outer++;
                    
                   

                }

            }   

        }


        

            var session_ids_rows = [];
            var counter = 0;
            var get_groups_id = [];
            var get_employee_id = 0;
            get_groups_id[0] =  All_table_obj.tables[11][index].groups_id;
            get_employee_id =  All_table_obj.tables[11][index].employee_id;

            // var return_data = []
            var return_data = search_for_data_all(All_table_obj.tables[8] , get_groups_id , 0);

            var slot_ = search_for_data_index(All_table_obj.tables[0] , return_data[0][2] , 0 , 2);
            var Time_slot_ = search_for_data_index(All_table_obj.tables[0] , return_data[0][2] , 0 , 3);
            var Lan_ = search_for_data_index(All_table_obj.tables[1] , return_data[0][3] , 0 , 2);
            var Att_ = search_for_data_index(All_table_obj.tables[2] , return_data[0][4] , 0 , 2);
            var level_ = search_for_data_index(All_table_obj.tables[3] , return_data[0][5] , 0 , 2);
            var track_ = search_for_data_index(All_table_obj.tables[4] , return_data[0][6] , 0 , 2);
            var type_ = search_for_data_index(All_table_obj.tables[5] , return_data[0][7] , 0 , 2);
            var days_ = search_for_data_index(All_table_obj.tables[6] , return_data[0][8] , 0 , 2);
            var Age_ = search_for_data_index(All_table_obj.tables[7] , return_data[0][9] , 0 , 2);


            session_ids_rows[counter]  = All_table_obj.tables[11][index].id;counter++;
            session_ids_rows[counter]  = All_table_obj.tables[11][index].zoomlink;counter++;
            session_ids_rows[counter]  = All_table_obj.tables[11][index].session_date;counter++;
            session_ids_rows[counter]  = All_table_obj.tables[11][index].session_num;counter++;
            session_ids_rows[counter]  = All_table_obj.tables[11][index].open_by;counter++;
            
            session_ids_rows[counter]  = Age_[0]+`-`+ level_[0] +`-`+get_groups_id[0];counter++;
            session_ids_rows[counter]  = get_groups_id[0];counter++;
            session_ids_rows[counter]  = slot_[0];counter++;
            session_ids_rows[counter]  = Time_slot_[0];counter++;
            session_ids_rows[counter]  = Lan_[0];counter++;
            session_ids_rows[counter]  = Att_[0];counter++;
            session_ids_rows[counter]  = level_[0];counter++;
            session_ids_rows[counter]  = track_[0];counter++;
            session_ids_rows[counter]  = type_[0];counter++;
            session_ids_rows[counter]  = days_[0];counter++;
            session_ids_rows[counter]  = Age_[0];counter++;



            for(var i = 0 ; i < employee_arr_sessions.length ; i++)
            {
                if(get_employee_id == employee_arr_sessions[i][0])
                {
                    session_ids_rows[counter]  = employee_arr_sessions[i][1];counter++;
                    session_ids_rows[counter]  = employee_arr_sessions[i][2];counter++;
                    break;
                }
            }

            session_ids[counter_index++] =  session_ids_rows;
        
    }
}

if(func)
{
    func(All_req_obj);
}

$('.select2').select2();

Loading_page_clear();

}


function createTable_schedule(dataArray , object_data) {

  
  if(dataArray && dataArray !== undefined && dataArray.length != 0){


        var result = "<table class='table' id='dtable' >"+
                    "<thead   style='white-space:wrap' >"+
                    "<tr>";                               //Change table headings to match witht he Google Sheet

                    result +="<th scope='col' colspan='7' style='text-align:center;background-color: rgb(214, 212, 212);'><label style='font-size: 25px;color: rgb(30, 53, 255);'>"+object_data.start_from+' - ' + object_data.start_from_day+"</label></th>";
                    result += "</tr><tr>";
                    result +="<th scope='col' rowspan='2' style='text-align:center;'><label style='font-size: 20px;color: rgb(62, 76, 85);'>Instructors</label></th>";
                    result +="<th scope='col' colspan='2' style='text-align:center; '><label style='font-size: 20px;color: rgb(62, 76, 85);'>01:30 - 04:00</label></th>";
                    result +="<th scope='col' colspan='2' style='text-align:center;'><label style='font-size: 20px;color: rgb(62, 76, 85);'>04:30 - 07:00</label></th>";
                    result +="<th scope='col' colspan='2' style='text-align:center;'><label style='font-size: 20px;color: rgb(62, 76, 85);'>07:30 - 10:00</label></th>";
                    result += "</tr><tr>";
                    result +="<th scope='col' colspan='1' style='text-align:center;'><label style='font-size: 20px;color: rgb(99, 56, 56);'>02:00 - 03:00</label></th>";
                    result +="<th scope='col' colspan='1' style='text-align:center;'><label style='font-size: 20px;color: rgb(99, 56, 56);'>03:00 - 04:00</label></th>";
                    result +="<th scope='col' colspan='1' style='text-align:center;'><label style='font-size: 20px;color: rgb(99, 56, 56);'>05:00 - 06:00</label></th>";
                    result +="<th scope='col' colspan='1' style='text-align:center;'><label style='font-size: 20px;color: rgb(99, 56, 56);'>06:00 - 07:00</label></th>";
                    result +="<th scope='col' colspan='1' style='text-align:center;'><label style='font-size: 20px;color: rgb(99, 56, 56);'>08:00 - 09:00</label></th>";
                    result +="<th scope='col' colspan='1' style='text-align:center;'><label style='font-size: 20px;color: rgb(99, 56, 56);'>09:00 - 10:00</label></th>";
                                      
                    
                    
                    result += "</tr></thead>";
                    var counter = 0;


                    for(var i=0; i < dataArray.length; i++) {
                    result += "<tr>";
                    counter = i;

                    result += `<td colspan='1' style='text-align:center;' >`;
                    result += `<label style='font-size: 20px;color: rgb(0, 0, 0);'>`+dataArray[i][0]+`</label>`; 
                    result +="</td>"



                    for(var index = 1 ; index < Object.values(dataArray[i]).length ; index++)
                    {
                        var counter_btn_col = index;
                        var counter_btn_rows = i;
                        var siz_col = 1;
                        if(Object.values(dataArray[i])[index+1] == '-' )
                        {
                            siz_col = 2;
                        }
                        result += `<td colspan='`+siz_col+`'style='white-space:wrap;text-align:center;font-size: 15px;' >`;
                        if(Object.values(dataArray[i])[index][0]!= 'empty')
                        {                            
                            for(var index_ = 0 ; index_ < Object.values(dataArray[i])[index].length ; index_++)
                            {
                                result += Object.values(dataArray[i])[index][index_] + "<br>"; 
                            }
                        }
                        else{
                            
                            object_data.table_row_count[counter_btn_rows] = counter_btn_rows;
                            object_data.table_col_count[counter_btn_col] = counter_btn_col;

                            result += object_data.callbackfunc(counter_btn_rows , counter_btn_col ,object_data );

                        }

                        
                        result +="</td>"
                        if(siz_col == 2)index++;

                    }
    
                    result += "</tr>";
                    
                }
    
        result += "</table>";


    }else{

    }


    return result;
}


function paper_inner_session (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class='col-1 select2' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}


function paper_inner_session_return (paper_ , title , data_slot , id_ , value_)
{
var value = '';
value += `<label id='L`+paper_+`' for="`+paper_+`" style='visibility:hidden'>`+title+`:</label>
  <select class='col-7 ' name="`+paper_+`" id="`+paper_+`" style='visibility:hidden'>`
//   value +=`<option value=""></option>`;

  for(var index = 0 ; index < Object.values(data_slot).length ; index ++)
  {
    value +=`<option value="${Object.values(data_slot[index])[id_]}">${Object.values(data_slot[index])[value_]}</option>`;

  }

  value +=`</select>` ;


  return value;
}



function add_new_group_schedule(object_group , All_req_obj)
{
    
    var Database_link = database_fixed_link
    var inputs_col = 
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
];
    var inputs_check = [
        "Slot missing"
        ,"Lan missing"
        ,"Att missing"
        ,"Lvl missing"
        ,"Track missing"
        ,"Type missing"
        ,"Day missing"
        ,"Age missing"
        ,"Strt missing"
    ];


    var called_table = 'groups';
    var arr_data = []

        const All_data_obj = {};
        All_data_obj.table_ = called_table;
        All_data_obj.inputs_col_ = inputs_col;
        All_data_obj.inputs_check_ = inputs_check;
        All_data_obj.Database_link = Database_link;
        All_data_obj.callbackfunc;
        All_data_obj.obj;

            var value_elments = [];

            value_elments[0] = object_group.slot;
            value_elments[1] = object_group.lang;
            value_elments[2] = object_group.att;
            value_elments[3] = object_group.lvl;
            value_elments[4] = object_group.trck;
            value_elments[5] = object_group.type;
            value_elments[6] = object_group.days;
            value_elments[7] = object_group.age;
            value_elments[8] = object_group.opend_by;
            value_elments[9] = object_group.date;
            value_elments[10] = object_group.date;
            

            for(var index = 0 ; index < value_elments.length ; index++)
            {
                if(index != 8 && value_elments[index] == '')
                {
                    alert('Data Missing'  , 'danger')
                    return;
                }
            }
            if(object_group.session == '')
            {
                alert('Data Missing' , 'danger' )
                return;
            }

            All_data_obj.callbackfunc = function(All_data_obj , response)
            {

                // alert(response , 'danger');
                All_data_obj.callbackfunc = function(All_data_obj, response)
                {
                    add_new_session_schedule(object_group , All_data_obj.obj[All_data_obj.obj.length-1].id , All_req_obj);
                };
                get_all_data_from_database(All_data_obj);            
            };
            add_one_data_from_database(All_data_obj , value_elments);
        

        
        
}

function add_new_session_schedule(object_group , group_id_in , All_req_obj)
{
    
    var Database_link = database_fixed_link
    var inputs_col = 
    ["groups_id" 
    , "employee_id" 
    , "zoomlink" 
    , "session_date" 
    , "session_num" 
    , "open_by" 

];
    var inputs_check = [
        "Slot missing"
        ,"Lan missing"
        ,"Att missing"
        ,"Lvl missing"
        ,"Track missing"
        ,"Type missing"
        ,"Day missing"
        ,"Age missing"
        ,"Strt missing"
    ];


    var called_table = 'sessions';
    var arr_data = []

        const All_data_obj = {};
        All_data_obj.table_ = called_table;
        All_data_obj.inputs_col_ = inputs_col;
        All_data_obj.inputs_check_ = inputs_check;
        All_data_obj.Database_link = Database_link;
        All_data_obj.callbackfunc;
        All_data_obj.obj;


        var Date_inc = Number(Todate_schedule_sessions(object_group.date)[1]);
        var Month_inc = Number(Todate_schedule_sessions(object_group.date)[2]);
        var Year_inc = Number(Todate_schedule_sessions(object_group.date)[4]);
        var newDate  = Todate_schedule_sessions(null  , Date_inc ,  Month_inc , Year_inc)[0];



            for(var index = 0 ; index < object_group.session ; index++)
            {
                var value_elments = [];

                    value_elments[0] = group_id_in;
                    value_elments[1] = object_group.inst;
                    value_elments[2] = '';
                    value_elments[3] = newDate;
                    value_elments[4] = (index+1);
                    value_elments[5] = object_group.opend_by;
                                    
                Date_inc = Number(Todate_schedule_sessions(newDate)[1])+7;
                Month_inc = Number(Todate_schedule_sessions(newDate)[2]);
                Year_inc = Number(Todate_schedule_sessions(newDate)[4]);

                newDate  = Todate_schedule_sessions(null  , Date_inc ,  Month_inc , Year_inc)[0];


                
                All_data_obj.callbackfunc = function(All_data_obj , response)
                {
                    alert(response);
                    if(All_req_obj)
                    get_all_data_arr(All_req_obj ,quary_tables_all_status_add_session_to_parent , schedule_create , time_out  , 3);

                };
                add_one_data_from_database(All_data_obj , value_elments);
        
            }
        
        
}



function createTable_pop_up_schedule(All_data_obj , All_req_obj ) {

    var dataArray = All_data_obj;


  if(dataArray && dataArray !== undefined && dataArray.length != 0){

    var result = "<table class='table' id='dtable'>"+
                 "<thead   style='white-space:wrap' >"+
                   "<tr>";                               //Change table headings to match witht he Google Sheet     
                   result +="<th scope='col'>Session ID </th>";
                   result +="<th scope='col'>Student ID </th>";
                   result +="<th scope='col'>Student Name </th>";
                   result +="<th scope='col'>Attendance </th>";
                   result +="<th scope='col'>Feeback </th>";

              result += "</tr>"+
                        "</thead>";

                    for(var index = 0 ; index < dataArray.length ; index++)
                    {
                        result += "<tr>";
                        result += "<td style='white-space:wrap' >";
                        result += `Session ID : ${dataArray[index][0]}` 
                        result +="</td>"
                        result += "<td style='white-space:wrap' >";
                        result += `Student ID : ${dataArray[index][1]}`   
                        result +="</td>"
                        result += "<td style='white-space:wrap' >";                      
                        result += `Student Name : ${dataArray[index][2]}`    
                        result +="</td>"
                        result += "<td style='white-space:wrap' >";   
                                          
                        result += `Attendance : <select id='att_id_${index}' > `

                        if(dataArray[index][3] == "YES")
                        {
                            result += `<option>YES</option> `
                            result += `<option>NO</option> `
                            result += `<option></option> `

                        }
                        else if(dataArray[index][3] == "NO")
                        {
                            result += `<option>NO</option> `
                            result += `<option>YES</option> `
                            result += `<option></option> `

                        }
                        else
                        {
                            result += `<option></option> `
                            result += `<option>YES</option> `
                            result += `<option>NO</option> `       
                        }

                        result += `</select> `

                        result +="</td>"
                        result += "<td style='white-space:wrap' >";       
                        if(dataArray[index][4] != "")
                        result += `Feeback : <textarea id='feed_id_${index}' style='float:right' rows="4" cols="25"> ${dataArray[index][4]} </textarea> `;
                        else
                        result += `Feeback : <textarea id='feed_id_${index}' style='float:right' rows="4" cols="25"></textarea> `;


                        result +="</td>"
                        result += "<td style='white-space:wrap' >";     
                                //  Tiger
                        result += `<button  type="button" id='send_att_feed${index}' class="btn btn-light" style='float:right'><i class="fa-solid fa-circle-arrow-right"></i></button>`               
                        result +="</td>"
                        result += "</tr>";

                    }
                  
            //   }
                 
    result += "</table>";
    var div = document.getElementById("search-results_1");
    div.innerHTML = result;
    for(var index = 0 ; index < dataArray.length ; index++)
    {
        $('#send_att_feed'+index).click(function () {  

            var id = this.id;
            var ret = id.replace('send_att_feed','');

            if (confirm("Updated Student ?") == true) {
                dataArray[ret][3] = document.getElementById('att_id_'+ret).value;
                dataArray[ret][4] = document.getElementById('feed_id_'+ret).value;

                update_studnet_att(dataArray[ret] , dataArray , All_req_obj)
            }
            else{

            }

        });
    }

  }else{
    var div = document.getElementById("search-results_1");
    div.innerHTML = "Data not found!";
  }
}

function update_studnet_att(value_elments , students_arr , All_req_obj)
{

    var Database_link = database_fixed_link;

    var inputs_col = 
    ["student_id" 
    , "session_id" 
    , "attendance" 
    , "feedback" 

    ]
    
    var inputs_check = ["Parent missing" , "Student missing"];

    var called_table = 'att_feed';

        const All_data_obj_ = {};
        All_data_obj_.table_ = called_table;
        All_data_obj_.inputs_col_ = inputs_col;
        All_data_obj_.inputs_check_ = inputs_check;
        All_data_obj_.Database_link = Database_link;
        All_data_obj_.callbackfunc;
        All_data_obj_.callbackfunc_1;
        All_data_obj_.obj;
        All_data_obj_.index_num = 0;

            var COL_DATA =  "attendance='"+value_elments[3]+"' , feedback='"+value_elments[4]+"'";
            All_data_obj_.index_num = value_elments[5];

            All_data_obj_.callbackfunc = function(All_data_obj, response)
            {
                alert(response);
                // get_all_data_arr(All_req_obj ,quary_tables_all_status_add_session_to_parent , '' , time_out  , 0);
                if(All_req_obj)
                get_all_data_arr(All_req_obj ,quary_tables_all_status_add_session_to_parent , schedule_create , time_out  , 4);
            };
            update_one_data_from_database(All_data_obj_ , COL_DATA)

}



