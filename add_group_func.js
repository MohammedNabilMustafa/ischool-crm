
var get_days = []

function ADD_NEW_GROUP_FUNC()
{
    get_days = [];
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    document.getElementById("search-results").innerHTML = "";

    var Database_link = "http://localhost/iSchool/fetch.php"

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
                  ["groups_id" 
                  , "student_id" 
                ]
                ,
                ["name" 
                , "phone" 
                , "email" 
                , "zoomlink" 
                , "username" 
                , "password" 
                , "department_id" 
                , "permission_id" 
                , "role_id" 
                    ]
                    ,
                    ["groups_id" 
                    , "employee_id" 
                    , "zoomlink" 
                    , "session_date" 
                    , "session_num" 
                    , "open_by" 
                
                ]
                    ];

    var called_table = ['slots',
                        'lan',
                        'attend',
                        'level',
                        'track',
                        'session_type',
                        'days',
                        'Age',
                        'groups',
                        'student_groups',
                        'employee',
                        'sessions'
                    ];

    var paper_inputs = ['slot_input' , 
                        'lang_input',
                        'attend_input',
                        'level_input',
                        'track_input',
                        'type_input',
                        'wokring_input',
                        'age_input',
                        'open_input',
                        'start_input',
                        'end_input',
                        // 'num_input',
                        // 'emp_input'
                    ];



    var paper_inputs_label = [
                        'Slot' , 
                        'Language',
                        'Attend',
                        'Level',
                        'Track',
                        'Type',
                        'Day',
                        'Age',
                        'Opend By',
                        'Start Date',
                        'End Date',
                        // 'Num Date',
                    ];
        const All_req_obj = {};
        All_req_obj.Database_link = Database_link
        All_req_obj.inputs_col = inputs_col
        All_req_obj.called_table = called_table
                 
        html_create_lists_groups_func(paper_inputs , paper_inputs_label , "Location_1" );

        get_paper_tables_groups_func(All_req_obj ,quary_tables_all_status_groups , '' , 5  , 1);

    // add_new_Groups_func(All_req_obj,paper_inputs);
    get_paper_tables_groups_func(All_req_obj ,quary_tables_all_Groups_func,create_paper_table , 5 , 2);

    $('#search_btn_groups').click(function (index) {  

        get_paper_tables_groups_func(All_req_obj ,quary_tables_all_Groups_func,create_paper_table_customized , 5 , 3);
        });
   

}

function html_create_lists_groups_func(paper_inputs , paper_inputs_label  , location_)
{
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    document.getElementById("search-results").innerHTML = "";




    //  `<div class='col justify-content-start'><button class='btn btn-danger' style='float:left;' id='add_back'>BACK</button></div>`;

    // document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    // for(var index = 0 ; index < 8 ; index++)
    // {
    //   paper_inner(paper_inputs[index] , paper_inputs_label[index]);
    // }
    // document.getElementById(location_).innerHTML +=`</div></div>`;
    // document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    // document.getElementById(location_).innerHTML +=`</div></div>`;

    // document.getElementById(location_).innerHTML +=`<input type="hidden" type="date" id="`+paper_inputs[8]+`">`;

    // document.getElementById(location_).innerHTML +=`<label>Start:</label><input type="date" id="`+paper_inputs[9]+`" name="`+paper_inputs[9]+`">`;
    // document.getElementById(location_).innerHTML +=`<label>End:</label><input type="date" id="`+paper_inputs[10]+`" name="`+paper_inputs[10]+`">`;
    // // document.getElementById(location_).innerHTML +=`<label>Number Of Session:</label><input class='col-1' type="number" id="`+paper_inputs[11]+`" name="`+paper_inputs[11]+`">`;
    // // paper_inner('emp_input', 'Instructor');

    // document.getElementById(location_).innerHTML += `<div class='col justify-content-start'><button class='btn btn-success' style='float:right;' id='send_group'>ADD</button></div>`;

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    document.getElementById(location_).innerHTML +=`</div></div>`;

    document.getElementById(location_).innerHTML +=`<div class="input-group">
    <div class='col justify-content-start'>
      <input type="search" id="search_all" class="form-control" />
    </div>
    <div class='col justify-content-start'><button type="button" id='search_btn_groups' class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button></div>
  </div>`;
  document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById(location_).innerHTML +=`</div></div>`;

    
    //document.getElementById(location_).innerHTML += `<div style='display:flex;justify-content:left;'><button  type="button" id='search_paper' class="btn btn-secondary"><i class="fas fa-search"></i></button></div>`;



}

function add_new_Groups_func(All_req_obj,paper_inputs)
{
    
    var Database_link = "http://localhost/iSchool/fetch.php"

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
        // ,"End missing"
        // ,"Number missing"
        // ,"Instructor missing"


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
    

    $(document).ready(function () {

        $('#send_group').click(function () {


            var value_elments = [];

            for(var index = 0 ;index < paper_inputs.length ; index++)
            {
             value_elments[index] = document.getElementById(paper_inputs[index] ).value;
            }

            document.getElementById('open_input').value = 'me';

            var start_date = Todate(new Date(document.getElementById('start_input').value));


            if(get_days[document.getElementById('wokring_input').value-1] != get_days[start_date[3]])
            {
                alert('Starting day does not match with working day' , "danger");
                return;
            }

            for(var index = 0 ;index < All_data_obj.inputs_check_.length ; index++)
            {
                if(value_elments[index] == "" && index != 8)
                {
                    alert(All_data_obj.inputs_check_[index] , "danger");
                    return;
                }
            }

            All_data_obj.callbackfunc = function(All_data_obj , response)
            {
                alert(response , "success");

                get_paper_tables_groups_func(All_req_obj,quary_tables_all_Groups_func, create_paper_table , 5 , 4);
            };
            add_one_data_from_database(All_data_obj , value_elments);
        
        });
    });
        
}

let counter__ = [];

function get_paper_tables_groups_func(All_req_obj , func_quary,func , timeout , index_pos)
{

    var Database_link = All_req_obj.Database_link;
    var inputs_col = All_req_obj.inputs_col; 
    var called_table = All_req_obj.called_table;


      const All_table_obj = {};
      All_table_obj.tables= [];


      var arr_data = [];
    for(var index = 0 ; index < inputs_col.length ; index ++)
    {
        const All_data_obj = {};
        All_data_obj.table_ = called_table[index];
        All_data_obj.inputs_col_ = inputs_col[index];
        All_data_obj.Database_link = Database_link;
        All_data_obj.callbackfunc;
        All_data_obj.obj;
        All_data_obj.index = index;
        All_data_obj.length = inputs_col.length-1;
        All_data_obj.check = false;
        
        arr_data[index] = All_data_obj;
    }


    for(var index = 0 ; index < arr_data.length ; index++)
    {
        arr_data[index].callbackfunc = function(All_data_obj)
        {
            All_table_obj.tables[All_data_obj.index] = All_data_obj.obj;
            All_data_obj.check = true;
        };
        get_all_data_from_database(arr_data[index]);
    }
    counter__[index_pos] = 0;
    again(All_table_obj , arr_data ,   func_quary , func , timeout , index_pos);

}

 function again(All_table_obj , arr_data , func_quary ,  func , timeout , index_pos )
 {

    setTimeout(function () {
        
        for(var index = 0 ; index < arr_data.length ; index++)
        {
            if(arr_data[index].check == false)
            {   
                counter__[index_pos]++;
                again(All_table_obj , arr_data , func_quary ,  func , timeout , index_pos );
            }
        }
        if(func_quary)
        {
            counter__[index_pos]--;
            if(counter__[index_pos] == -1)
            {
                func_quary(All_table_obj , func)

            }

        }
    }, timeout);
 }

 function quary_tables_all_Groups_func(All_table_obj , func)
 {
    var create_new_tabl_rows = []
    var students_cols = []


    if(All_table_obj.tables[8] && All_table_obj.tables[8] !== undefined && All_table_obj.tables[8].length != 0){
    
        var saved_index = -1;


        if(All_table_obj.tables[9] && All_table_obj.tables[9] !== undefined && All_table_obj.tables[9].length != 0)
            {

                for(var index_ = 0 ; index_ < All_table_obj.tables[8].length ; index_++)
                {
                    for(var index = 0 ; index < All_table_obj.tables[9].length ; index++)
                    {

                        if(All_table_obj.tables[8][index_].id == All_table_obj.tables[9][index].groups_id)
                        {
                            saved_index = index;
                        }
                    }
                    students_cols[index_] = All_table_obj.tables[9][saved_index].student_id;

                }    
            }

    for(var index = 0 ; index < All_table_obj.tables[8].length ; index++)
    {
        var create_new_table_cols = []
        var counter = 0;

        for(var index_ = 0 ; index_ < All_table_obj.tables[0].length ; index_++)
        {
            if(All_table_obj.tables[8][index].slot_id == All_table_obj.tables[0][index_].id)
            {
                create_new_table_cols[counter] = All_table_obj.tables[8][index].id;counter++;
                create_new_table_cols[counter] = All_table_obj.tables[0][index_].name; counter++;
            }
        }

        for(var index_ = 0 ; index_ < All_table_obj.tables[0].length ; index_++)
        {
            if(All_table_obj.tables[8][index].slot_id == All_table_obj.tables[0][index_].id)
            {
                create_new_table_cols[counter] = All_table_obj.tables[0][index_].slot;counter++;
            }
        }

        for(var index_ = 0 ; index_ < All_table_obj.tables[1].length ; index_++)
        {
            if(All_table_obj.tables[8][index].lan_id == All_table_obj.tables[1][index_].id)
            {
                create_new_table_cols[counter] = All_table_obj.tables[1][index_].name;counter++;
            }
        }

        for(var index_ = 0 ; index_ < All_table_obj.tables[2].length ; index_++)
        {
            if(All_table_obj.tables[8][index].att_id == All_table_obj.tables[2][index_].id)
            {
                create_new_table_cols[counter] = All_table_obj.tables[2][index_].name;counter++;
            }
        }

        for(var index_ = 0 ; index_ < All_table_obj.tables[3].length ; index_++)
        {
            if(All_table_obj.tables[8][index].level_id == All_table_obj.tables[3][index_].id)
            {
                create_new_table_cols[counter] = All_table_obj.tables[3][index_].name;counter++;
            }
        }

        for(var index_ = 0 ; index_ < All_table_obj.tables[4].length ; index_++)
        {
            if(All_table_obj.tables[8][index].track_id == All_table_obj.tables[4][index_].id)
            {
                create_new_table_cols[counter] = All_table_obj.tables[4][index_].name;counter++;
            }
        }

        for(var index_ = 0 ; index_ < All_table_obj.tables[5].length ; index_++)
        {
            if(All_table_obj.tables[8][index].type_id == All_table_obj.tables[5][index_].id)
            {
                create_new_table_cols[counter] = All_table_obj.tables[5][index_].name;counter++;
            }
        }
        
        for(var index_ = 0 ; index_ < All_table_obj.tables[6].length ; index_++)
        {
            if(All_table_obj.tables[8][index].days_id == All_table_obj.tables[6][index_].id)
            {
                create_new_table_cols[counter] = All_table_obj.tables[6][index_].name;counter++;
            }
        }

        for(var index_ = 0 ; index_ < All_table_obj.tables[7].length ; index_++)
        {
            if(All_table_obj.tables[8][index].age_id == All_table_obj.tables[7][index_].id)
            {
                create_new_table_cols[counter] = All_table_obj.tables[7][index_].name;counter++;
            }
        }
        var counter_ = 0 ;
        if(All_table_obj.tables[9] && All_table_obj.tables[9] !== undefined && All_table_obj.tables[9].length != 0)
        {
            for(var index_ = 0 ; index_ < All_table_obj.tables[9].length ; index_++)
            {
                if((All_table_obj.tables[8][index].id == All_table_obj.tables[9][index_].groups_id) && (All_table_obj.tables[9][index_].status == "active"))
                {
                    counter_++;
                }
            }
        }

        var counter_sessions = 0 ;
        var counter_sessions_date = 0 ;
        if(All_table_obj.tables[11] && All_table_obj.tables[11] !== undefined && All_table_obj.tables[11].length != 0)
        {
            for(var index_ = 0 ; index_ < All_table_obj.tables[11].length ; index_++)
            {
                if((All_table_obj.tables[8][index].id == All_table_obj.tables[11][index_].groups_id))
                {
                    counter_sessions++;
                }

                var date = All_table_obj.tables[11][index_].session_date;
                var varDate = new Date(date); //dd-mm-YYYY
                var today = new Date();
                today.setHours(0,0,0,0);

                if((All_table_obj.tables[8][index].id == All_table_obj.tables[11][index_].groups_id && varDate <= today))
                {
                    counter_sessions_date++;
                }




            }
        }


        
        create_new_table_cols[counter] = All_table_obj.tables[8][index].opend_by;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[8][index].start_date;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[8][index].end_date;counter++;
        create_new_table_cols[counter] = counter_ + " Student/s";counter++;
        create_new_table_cols[counter] = counter_sessions + ' Created Session/s' ;counter++;
        create_new_table_cols[counter] = counter_sessions_date + ' Completed Session/s' ;counter++;

        create_new_tabl_rows[index] = create_new_table_cols;


        }

    }

    func( create_new_tabl_rows );

 }

 function quary_tables_all_status_groups(All_table_obj , func)
 {

    if(All_table_obj.tables[6] && All_table_obj.tables[6] !== undefined && All_table_obj.tables[6].length != 0){
        
        for(var index = 0 ; index < All_table_obj.tables[6].length ; index++ )
        {
            get_days[index] = All_table_obj.tables[6][index].name;
        }
    }

    if(All_table_obj.tables[10] && All_table_obj.tables[10] !== undefined && All_table_obj.tables[10].length != 0){

        var counter_index = 0
        for(var index = 0 ; index < All_table_obj.tables[10].length ; index++)
        {
            if(All_table_obj.tables[10][index].permission_id == 1)
            {
                $('#emp_input').append(`<option value="${All_table_obj.tables[10][index].id}"
                >${All_table_obj.tables[10][index].name}  </option>`);  

            }
    
        }
    }



    if(All_table_obj.tables[0] && All_table_obj.tables[0] !== undefined && All_table_obj.tables[0].length != 0){
        if(All_table_obj.tables[1] && All_table_obj.tables[1] !== undefined && All_table_obj.tables[1].length != 0){
            if(All_table_obj.tables[2] && All_table_obj.tables[2] !== undefined && All_table_obj.tables[2].length != 0){
                if(All_table_obj.tables[3] && All_table_obj.tables[3] !== undefined && All_table_obj.tables[3].length != 0){
                    if(All_table_obj.tables[4] && All_table_obj.tables[4] !== undefined && All_table_obj.tables[4].length != 0){
                        if(All_table_obj.tables[5] && All_table_obj.tables[5] !== undefined && All_table_obj.tables[5].length != 0){
                            if(All_table_obj.tables[6] && All_table_obj.tables[6] !== undefined && All_table_obj.tables[6].length != 0){
                                if(All_table_obj.tables[7] && All_table_obj.tables[7] !== undefined && All_table_obj.tables[7].length != 0){

        for(var index_ = 0 ; index_ < All_table_obj.tables[0].length ; index_++)
        {
            $('#slot_input').append(`<option value="${All_table_obj.tables[0][index_].id}"
            >${All_table_obj.tables[0][index_].name} 
            - ${All_table_obj.tables[0][index_].slot} </option>`);  
        }
        for(var index_ = 0 ; index_ < All_table_obj.tables[1].length ; index_++)
        {
            $('#lang_input').append(`<option value="${All_table_obj.tables[1][index_].id}"
            >${All_table_obj.tables[1][index_].name}  </option>`);  
        }
        for(var index_ = 0 ; index_ < All_table_obj.tables[2].length ; index_++)
        {
            $('#attend_input').append(`<option value="${All_table_obj.tables[2][index_].id}"
            >${All_table_obj.tables[2][index_].name}  </option>`);
        }
        for(var index_ = 0 ; index_ < All_table_obj.tables[3].length ; index_++)
        {
            $('#level_input').append(`<option value="${All_table_obj.tables[3][index_].id}"
            >${All_table_obj.tables[3][index_].name}  </option>`);
        }
        for(var index_ = 0 ; index_ < All_table_obj.tables[4].length ; index_++)
        {
            $('#track_input').append(`<option value="${All_table_obj.tables[4][index_].id}"
            >${All_table_obj.tables[4][index_].name}  </option>`);
        }
        for(var index_ = 0 ; index_ < All_table_obj.tables[5].length ; index_++)
        {
            $('#type_input').append(`<option value="${All_table_obj.tables[5][index_].id}"
            >${All_table_obj.tables[5][index_].name}  </option>`);
        }
        for(var index_ = 0 ; index_ < All_table_obj.tables[6].length ; index_++)
        {
            $('#wokring_input').append(`<option value="${All_table_obj.tables[6][index_].id}"
            >${All_table_obj.tables[6][index_].name}  </option>`);
        }
        for(var index_ = 0 ; index_ < All_table_obj.tables[7].length ; index_++)
        {
            $('#age_input').append(`<option value="${All_table_obj.tables[7][index_].id}"
            >${All_table_obj.tables[7][index_].name}  </option>`);
        }
    }
    }
    }
    }
    }
    }
    }
    }
 

 }



 function create_paper_table(all_tables)
 {
    var inputs_names_search = [
    "ID :"
    ,"Slots :" 
    , "Time :" 
    , "Lang :" 
    , "Attend :" 
    , "Level :"
    , "Track :"
    , "Type :"
    , "Days :"
    , "Age :"
    , "Opened by :"
    , "Start :"
    , "End :"
    , ""
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

    createTable(all_tables ,All_data_obj , 'clear' , 4 , 5); 
}

function create_paper_table_customized(all_tables)
{



    var inputs_names_search = [
        "ID :"
        ,"Slots :" 
        , "Time :" 
        , "Lang :" 
        , "Attend :" 
        , "Level :"
        , "Track :"
        , "Type :"
        , "Days :"
        , "Age :"
        , "Opened by :"
        , "Start :"
        , "End :"
        , ""
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
      createTable(all_tables ,All_data_obj , 'clear' , 4 , 5);
      return;
   }

    var result = Search_for_value(all_tables , values_)
        
   createTable(result ,All_data_obj , 'clear' , 4 , 5 ); 
}

function paper_inner (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class='col-1' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}

