function ADD_STUDENT_TO_PACKAGE(response)
{

    Loading_page_set();

    clear_all_locations();


    var Database_link = database_fixed_link

    var inputs_col = [
    [
    "std_id" 
    , "group_id" 
    , "parent_id" 
    , "free_session_status" 
    , "std_status" 
    , "name" 
    , "age" 
    , "birthdate" 
    ]
    ,
    [
        "name"
        ,"fees"
        ,"quota"
        ,"discount"
        ,"installments"
        ,"paid_as"
  
    ],
    [
        "student_id"
        ,"fees"
        ,"amount"
        ,"status"
        ,"due_date"
        ,"paid_date"
        ,"discount"
        ,"attach"
        ,"package_id"
        ,"qouta"
        ,"remain"

    ],
    [
        "student_id"
        ,"package_id"
    ],
    [
        "student_id" 
    ,"session_id" 
    ,"attendance" 
    ,"feedback" 
    ]
    ,
    ["std_id"
    ,"parent_id"
    ,"free_session_status"
    ,"std_status"
    ,"name"
    ,"age"
    ,"birthdate"
  ],
  [
    "name"
  ,"phone"
  ,"email"
  ,"zoomlink"
  ,"username"
  ,"password_value"
  ,"permission_id"
  ,"department_id"
  ,"role_id"
]
  ];

var called_table = [
      'students',
      'package',
      'invoice',
      "student_package",
      "att_feed",
      "parent",
      "employee"
  ];

var paper_inputs = [
    'package_input' , 
    'student_input',
  ];

var paper_inputs_label = [
    'Package' , 
    'Student',   
  ];
        const All_req_obj = {};
        All_req_obj.Database_link = Database_link
        All_req_obj.inputs_col = inputs_col
        All_req_obj.called_table = called_table
                 
        html_create_lists_add_student_package(paper_inputs , paper_inputs_label , "Location_1" );

        get_all_data_arr(All_req_obj ,quary_tables_all_status_add_student_package , '' , time_out  , 1);


        $('#send_group').click(function () {
            Loading_page_set();

            add_new_student_package(All_req_obj,paper_inputs);

        });
}

function quary_tables_all_paper_student_package(All_table_obj , func)
{
    var create_new_tabl_rows = [];
    var col_table_rows = [];

    var row_count = 0;
    var row_count_1 = 0;
    var student_count;

   if(All_table_obj.tables[8] && All_table_obj.tables[8] !== undefined && All_table_obj.tables[8].length != 0){
   
    if(All_table_obj.tables[10] && All_table_obj.tables[10] !== undefined && All_table_obj.tables[10].length != 0)
    {
 
    var flag_check = 0;

    for(var main_counter = 0 ; main_counter < All_table_obj.tables[10].length; main_counter++)
    {

        for(var index = 0 ; index <  All_table_obj.tables[9].length ; index++)
        {
            var col_table_cols = [];
            var counter_col = 0;

            if(All_table_obj.tables[9][index].id == All_table_obj.tables[10][main_counter].student_id)
            {
                col_table_cols[counter_col] = All_table_obj.tables[9][index].id;counter_col++;
                col_table_cols[counter_col] = All_table_obj.tables[9][index].std_id;
                col_table_rows[row_count] = col_table_cols;
                row_count++;
            }
        }
        for(var index = 0 ; index < All_table_obj.tables[8].length ; index++)
        {
            var create_new_table_cols = []
            var counter = 0;
            var one_col = '';


            if(All_table_obj.tables[8][index].id == All_table_obj.tables[10][main_counter].groups_id)
            {

                for(var index_ = 0 ; index_ < All_table_obj.tables[6].length ; index_++)
                {
                    if(All_table_obj.tables[8][index].days_id == All_table_obj.tables[6][index_].id)
                    {
                        one_col += '  |  ' + All_table_obj.tables[6][index_].name;
                        break;
                    }
                }

                for(var index_ = 0 ; index_ < All_table_obj.tables[0].length ; index_++)
                {
                    if(All_table_obj.tables[8][index].slot_id == All_table_obj.tables[0][index_].id)
                    {
                        one_col += '  |  ' + All_table_obj.tables[0][index_].slot;
                        break;
                    }
                }


                one_col += '  |  ' + All_table_obj.tables[8][index].start_date;

                for(var index_ = 0 ; index_ < All_table_obj.tables[7].length ; index_++)
                {
                    if(All_table_obj.tables[8][index].age_id == All_table_obj.tables[7][index_].id)
                    {
                        one_col += '  |  ' + All_table_obj.tables[7][index_].name;
                        break;
                    }
                }
                for(var index_ = 0 ; index_ < All_table_obj.tables[5].length ; index_++)
                {
                    if(All_table_obj.tables[8][index].type_id == All_table_obj.tables[5][index_].id)
                    {
                        one_col += '  |  ' + All_table_obj.tables[5][index_].name;
                        break;
                    }
                }

                for(var index_ = 0 ; index_ < All_table_obj.tables[1].length ; index_++)
                {
                    if(All_table_obj.tables[8][index].lan_id == All_table_obj.tables[1][index_].id)
                    {
                        one_col += '  |  ' + All_table_obj.tables[1][index_].name;
                        break;
                    }
                }

                for(var index_ = 0 ; index_ < All_table_obj.tables[2].length ; index_++)
                {
                    if(All_table_obj.tables[8][index].att_id == All_table_obj.tables[2][index_].id)
                    {
                        one_col += '  |  ' + All_table_obj.tables[2][index_].name;
                        break;
                    }
                }

                for(var index_ = 0 ; index_ < All_table_obj.tables[3].length ; index_++)
                {
                    if(All_table_obj.tables[8][index].level_id == All_table_obj.tables[3][index_].id)
                    {
                        one_col += '  |  ' + All_table_obj.tables[3][index_].name;
                        break;
                    }
                }

                for(var index_ = 0 ; index_ < All_table_obj.tables[4].length ; index_++)
                {
                    if(All_table_obj.tables[8][index].track_id == All_table_obj.tables[4][index_].id)
                    {
                        one_col += '  |  ' + All_table_obj.tables[4][index_].name;
                        break;
                    }
                }

                one_col += '  |  ' + All_table_obj.tables[8][index].end_date;

                one_col += '  |  ' + All_table_obj.tables[8][index].opend_by;


                
                for(var index_ = 0 ; index_ < All_table_obj.tables[9].length ; index_++)
                {
                    if(All_table_obj.tables[8][index].age_id == All_table_obj.tables[9][index_].id)
                    {
                        one_col += '  |  ' + All_table_obj.tables[9][index_].name;
                        break;
                    }
                }

                create_new_table_cols[counter] = col_table_rows[row_count_1][0];counter++;
                create_new_table_cols[counter] = col_table_rows[row_count_1][1];counter++;
                create_new_table_cols[counter] = one_col;counter++;
                create_new_table_cols[counter] = All_table_obj.tables[10][main_counter].status;counter++;
                
                create_new_tabl_rows[row_count_1] = create_new_table_cols;row_count_1++;
                
                break;
            }
        }
    }
}
   }

   func( create_new_tabl_rows );

}

function create_table_student_package(all_tables)
{
    var inputs_names_search = [
        ""
        ,"Student ID :"
        ,"" 
        ,""
        ,"" 

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

   createTable(all_tables ,All_data_obj , 'clear' , 1, 4); 
}

function create_table_student_package_customized(all_tables)
{

    var inputs_names_search = [
        ""
        ,"Student ID :"
        ,"" 
        ,""
        ,"" 

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
      createTable(all_tables ,All_data_obj , 'clear' , 1 , 4);
      return;
   }

    var result = Search_for_value(all_tables , values_)


   createTable(result ,All_data_obj , 'clear' , 1, 4); 
}

function html_create_lists_add_student_package(paper_inputs , paper_inputs_label  , location_)
{
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    // document.getElementById("search-results").innerHTML = "";




    //  `<div class='col justify-content-start'><button class='btn btn-danger' style='float:left;' id='add_back'>BACK</button></div>`;

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;


        paper_inner_1_package(paper_inputs[0] , paper_inputs_label[0]);
        paper_inner_2_package(paper_inputs[1] , paper_inputs_label[1]);
    
    document.getElementById(location_).innerHTML +=`<label>Paid Date :</label><input id='paid_date_id' type='date'/>`;

    document.getElementById(location_).innerHTML +=`</div></div>`;

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById(location_).innerHTML +=`</div></div>`;



    document.getElementById(location_).innerHTML += `<div class='col justify-content-start'><button class='btn btn-success' style='float:right;' id='send_group'>ADD</button></div>`;


    document.getElementById(location_).innerHTML +=`<div class="input-group">
    <div class='col justify-content-start'>
      <input type="search" id="search_all" class="form-control" />
    </div>
    <div class='col justify-content-start' style='z-index:0;'><button type="button" id='search_btn' class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button></div>
  </div>`;
  document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById(location_).innerHTML +=`</div></div>`;

    
    //document.getElementById(location_).innerHTML += `<div style='display:flex;justify-content:left;'><button  type="button" id='search_paper' class="btn btn-secondary"><i class="fas fa-search"></i></button></div>`;



}
async function add_new_student_package(All_req_obj,paper_inputs)
{
    Loading_page_set();

    var get_student_data = document.getElementById('student_input').value;
    var get_package_data = document.getElementById('package_input').value;
    var paid_date_data = document.getElementById('paid_date_id').value;
    var saved_date = new Date(document.getElementById('paid_date_id').value) ;

    if(get_student_data == '')
    {
        alert('Choose Student');
        return;
    }

    if(get_package_data == '')
    {
        alert('Choose Package');
        return;
    }

    if(paid_date_data == '')
    {
        alert('Select Date');
        return;
    }
    

    var result_return = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'student_package' ,
    [
        "student_id" 
        ,"package_id" 
    ] 
    ,
     [
        get_student_data,
        get_package_data
     ]);


     var getpackage_arr = await GET_DATA_TABLES_ONE_COL(database_fixed_link , 'package' , get_package_data);


     var value_elments = [];

     var count = getpackage_arr.installments;

     var qouta = Number(getpackage_arr.quota) / Number(getpackage_arr.installments);

    var get_last_package_student_id = await GET_DATA_TABLES(database_fixed_link , "student_package");


     value_elments[0] = get_student_data;
     value_elments[1] = getpackage_arr.fees;
     value_elments[2] = getpackage_arr.paid_as;
     value_elments[3] = 'done';
     value_elments[4] = paid_date_data;
     value_elments[5] = paid_date_data;
     value_elments[6] = 0;
     value_elments[7] = '';
     value_elments[8] = get_last_package_student_id[get_last_package_student_id.length-1].id;
     value_elments[9] = qouta;
     value_elments[10] = 0;


    for(var index = 0 ; index < count ; index++)
    {
        var inv_restul = await ADD_DATA_TABLES_ONE_COL( database_fixed_link , 'invoice' ,
        [
            "student_id"
            ,"fees"
            ,"amount"
            ,"status"
            ,"due_date"
            ,"paid_date"
            ,"discount"
            ,"attach"
            ,"package_id"
            ,"qouta"
            ,"remain"
        ],
        
            value_elments
        
        );


        value_elments = [];
        saved_date.setUTCDate(saved_date.getUTCDate() + 30);

        value_elments[0] = get_student_data;
        value_elments[1] = 0;
        value_elments[2] = getpackage_arr.paid_as;
        value_elments[3] = 'waiting';
        value_elments[4] = getFormattedDate(saved_date).toString();
        value_elments[5] = '';
        value_elments[6] = 0;
        value_elments[7] = '';
        value_elments[8] = get_last_package_student_id[get_last_package_student_id.length-1].id;
        value_elments[9] = qouta;
        value_elments[10] = 0;
    }

    ADD_STUDENT_TO_PACKAGE();
}



// function add_new_student_package(All_req_obj,paper_inputs)
// {
    
//     var Database_link = database_fixed_link

//     var inputs_col = 
//     [
//      "student_id" 
//      ,"package_id" 
//     ];
    
//     var inputs_check = ["Group missing" , "Student missing"];

//     var called_table = 'student_package';

//       var arr_data = []

//         const All_data_obj = {};
//         All_data_obj.table_ = called_table;
//         All_data_obj.inputs_col_ = inputs_col;
//         All_data_obj.inputs_check_ = inputs_check;
//         All_data_obj.Database_link = Database_link;
//         All_data_obj.callbackfunc;
//         All_data_obj.callbackfunc_1;
//         All_data_obj.obj;

//     $(document).ready(function () {

//         $('#send_group').click(function () {
//              var value_elments = [];
//              var check_full = false;
//              var getin = false;

//              value_elments[0] = document.getElementById('student_input').value;
//              value_elments[1] = document.getElementById('package_input').value;

//                 if(value_elments[0] == "")
//                 {
//                     alert('No Student' , "danger");
//                     return;
//                 }
            
//                 if(value_elments[1] == "")
//                 {
//                     alert('No Package' , "danger");
//                     return;
//                 }
                
//                 if(document.getElementById('paid_date_id').value == "")
//                 {
//                     alert('No Date' , "danger");
//                     return;
//                 }

//                 All_data_obj.callbackfunc = function(All_data_obj , response)
//                 {
//                     add_new_student_getpackage( All_req_obj,paper_inputs , value_elments[1] , value_elments[0]);
//                 };
//                 add_one_data_from_database(All_data_obj , value_elments);
//         });
//     });
        
// }

// function add_new_student_getpackage(All_req_obj,paper_inputs , package_id , st_id)
// {
    
//     var Database_link = database_fixed_link

//     var inputs_col = 
//     [
//         "name"
//         ,"fees"
//         ,"quota"
//         ,"discount"
//         ,"installments"
//         ,"paid_as"
//     ];
    
//     var inputs_check = ["Group missing" , "Student missing"];

//     var called_table = 'package';

//       var arr_data = []

//         const All_data_obj = {};
//         All_data_obj.table_ = called_table;
//         All_data_obj.inputs_col_ = inputs_col;
//         All_data_obj.inputs_check_ = inputs_check;
//         All_data_obj.Database_link = Database_link;
//         All_data_obj.callbackfunc;
//         All_data_obj.callbackfunc_1;
//         All_data_obj.obj;
//         All_data_obj.index_num = Number(package_id);

//              var value_elments = [];
//              var check_full = false;
//              var getin = false;

//             All_data_obj.callbackfunc = function(All_data_obj, response)
//             {
//                 add_new_student_invoice(All_req_obj,paper_inputs , All_data_obj.obj , st_id)
//             };
//              get_one_data_from_database(All_data_obj);

// }

// async function  add_new_student_invoice(All_req_obj,paper_inputs , All_data_obj_obj , st_id)
// {
    
//     var Database_link = database_fixed_link

//     var inputs_col = 
//     [
//         "student_id"
//         ,"fees"
//         ,"amount"
//         ,"status"
//         ,"due_date"
//         ,"paid_date"
//         ,"discount"
//         ,"attach"
//         ,"package_id"
//         ,"qouta"
//         ,"remain"

//     ];
    
//     var inputs_check = ["Group missing" , "Student missing"];

//     var called_table = 'invoice';

//       var arr_data = []

//         const All_data_obj = {};
//         All_data_obj.table_ = called_table;
//         All_data_obj.inputs_col_ = inputs_col;
//         All_data_obj.inputs_check_ = inputs_check;
//         All_data_obj.Database_link = Database_link;
//         All_data_obj.callbackfunc;
//         All_data_obj.callbackfunc_1;
//         All_data_obj.obj;


//              var value_elments = [];

//              var count = All_data_obj_obj.installments;

//              var qouta = Number(All_data_obj_obj.quota) / Number(All_data_obj_obj.installments);

//             var get_last_package_student_id = await GET_DATA_TABLES(database_fixed_link , "student_package");


//              value_elments[0] = st_id;
//              value_elments[1] = All_data_obj_obj.fees;
//              value_elments[2] = All_data_obj_obj.paid_as;
//              value_elments[3] = 'done';
//              value_elments[4] = document.getElementById('paid_date_id').value;
//              value_elments[5] = document.getElementById('paid_date_id').value;
//              value_elments[6] = 0;
//              value_elments[7] = '';
//              value_elments[8] = get_last_package_student_id[get_last_package_student_id.length-1].id;
//              value_elments[9] = qouta;
//              value_elments[10] = 0;


//              var date_day = Todate_schedule_sessions(document.getElementById('paid_date_id').value)[1];
//              var date_Month = Todate_schedule_sessions(document.getElementById('paid_date_id').value)[2];
//              var date_Year = Todate_schedule_sessions(document.getElementById('paid_date_id').value)[4];


             
//     for(var index = 0 ; index < count ; index++)
//     {
//      All_data_obj.callbackfunc = function(All_data_obj , response)
//         {
//             ADD_STUDENT_TO_PACKAGE(response);
//         };
//      add_one_data_from_database(All_data_obj , value_elments);
//      date_Month++;

//      var Date_ = Todate_schedule_sessions(null , date_day , date_Month ,date_Year);
//      date_day = Date_[1];
//      date_Month = Date_[2];
//      date_Year = Date_[4];
     
//      value_elments = []
//      value_elments[0] = st_id;
//      value_elments[1] = 0;
//      value_elments[2] = All_data_obj_obj.paid_as;
//      value_elments[3] = 'waiting';
//      value_elments[4] = Date_[0];
//      value_elments[5] = '';
//      value_elments[6] = 0;
//      value_elments[7] = '';
//      value_elments[8] = get_last_package_student_id[get_last_package_student_id.length-1].id;
//      value_elments[9] = qouta;
//      value_elments[10] = 0;

//     }
// }



function quary_tables_all_status_add_student_package(All_table_obj , func)
{
    var seached_rows = [];

    var filered_parent = [];
    var filered_parent_count = 0;
    
    if(localStorage.permission != 4)
    {
        if(All_table_obj.tables[5] && All_table_obj.tables[5] !== undefined && All_table_obj.tables[5].length != 0){

            All_table_obj.tables[5].forEach(element =>{

                if(localStorage.userid == element.customer_agent_id)
                {
                    filered_parent[filered_parent_count] = element;filered_parent_count++;
                }
                else if (localStorage.userid == element.sales_agent_id)
                {
                    filered_parent[filered_parent_count] = element;filered_parent_count++;
                }

            })

            filered_parent.forEach(element =>{

            if(All_table_obj.tables[0] && All_table_obj.tables[0] !== undefined && All_table_obj.tables[0].length != 0){

                All_table_obj.tables[0].forEach(element_st =>{
                    if(element.id == element_st.parent_id)
                    {
                        element_st.accepted = true;
                    }
                    if(element_st.accepted != true)
                    {
                        element_st.accepted = false;
                    }
                }
                )
            }
            })
        }
    }
    else
    {
        if(All_table_obj.tables[0] && All_table_obj.tables[0] !== undefined && All_table_obj.tables[0].length != 0){

            All_table_obj.tables[0].forEach(element_st =>{
            
                element_st.accepted = true;
            }
            )
        }
    }
                                        
        if(All_table_obj.tables[0] && All_table_obj.tables[0] !== undefined && All_table_obj.tables[0].length != 0){

            for(var index_ = 0 ; index_ < All_table_obj.tables[0].length ; index_++)
            {
                var package_id_search = 'No Package';
                var package_id_count= 0;
                if(All_table_obj.tables[3] && All_table_obj.tables[3] !== undefined && All_table_obj.tables[3].length != 0)
                {
                    for(var index = 0 ; index < All_table_obj.tables[3].length ; index++)
                    {
                        if((All_table_obj.tables[0][index_].id == All_table_obj.tables[3][index].student_id))
                        {
                            package_id_search = All_table_obj.tables[3][index].package_id;
                            package_id_count++;
                        }
                    }
                }

                var T = 0;
                var D = 0;
                var W = 0;
                var F = 0;
                var AF = 0;
                All_table_obj.tables[2].forEach(element => {
                    
                    if(All_table_obj.tables[0][index_].id ==  element.student_id)
                    {
                        T+= Number(element.qouta);
                    }
                    if(All_table_obj.tables[0][index_].id ==  element.student_id && element.status == 'done')
                    {
                        D+= Number(element.qouta);
                    }
                    if(All_table_obj.tables[0][index_].id ==  element.student_id && element.status == 'waiting')
                    {
                        W+= Number(element.qouta);
                    }
                    if(All_table_obj.tables[0][index_].id ==  element.student_id && element.status == 'refund')
                    {
                        F+= Number(element.qouta);
                    }
                    if(All_table_obj.tables[0][index_].id ==  element.student_id && element.status == 'ar-refund')
                    {
                        AF+= Number(element.qouta);
                    }
                });

                var TO = 0;
                var AT = 0;
                var AB = 0;

                All_table_obj.tables[4].forEach(element => {
                    
                    if(All_table_obj.tables[0][index_].id ==  element.student_id)
                    {
                        TO+= Number(element.qouta);
                    }
                    if(All_table_obj.tables[0][index_].id ==  element.student_id && element.attendance == 'YES')
                    {
                        AT+= Number(element.qouta);
                    }
                    if(All_table_obj.tables[0][index_].id ==  element.student_id && element.attendance == 'NO')
                    {
                        AB+= Number(element.qouta);
                    }

                });
                if(All_table_obj.tables[0][index_].accepted == true)
                {
                    $('#student_input').append(`<option value="${All_table_obj.tables[0][index_].id}"
                    >(ID:${All_table_obj.tables[0][index_].id}) - (SID${All_table_obj.tables[0][index_].std_id}) - (NM:${All_table_obj.tables[0][index_].name}) - (PAC:${package_id_search})- (${package_id_count}) - (${T}|${D}|${W}|${F}|${AF})  </option>`);  

                }
            }
        }

    
        if(All_table_obj.tables[1] && All_table_obj.tables[1] !== undefined && All_table_obj.tables[1].length != 0){

            for(var index_ = 0 ; index_ < All_table_obj.tables[1].length ; index_++)
            {
                $('#package_input').append(`<option value="${All_table_obj.tables[1][index_].id}"
                >${All_table_obj.tables[1][index_].name} - ${All_table_obj.tables[1][index_].paid_as}   </option>`);  
            }
        }



        $('.select2').select2();

        Loading_page_clear();

}

function paper_inner_1_package (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class='col-2 select2' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}

function paper_inner_2_package (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class='col-6 select2' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}
/* <select id="select-state" placeholder="Pick a state..."></select> */


function paper_inner_1_hidden_package (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`" hidden>`+title+`:</label>
  <select class='col-4 select2' name="`+paper_+`" id="`+paper_+`" hidden>
  <option value=""></option>
  </select>` ;
}


