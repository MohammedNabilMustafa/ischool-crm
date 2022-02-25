
var saved_sessions_id_arr = [];
var st_ids = 0;
var saved_group_arr = []
var saved_age_arr = []
var saved_status_arr = []
var saved_parent_arr = []
var Packages_id_input = [];
var Packages_id_input = [];

var saved_student_arr = []
var saved_employee_arr = []

function ADD_NEW_STUDENT()
{
    saved_sessions_id_arr = [];
    Packages_id_input = [];
    saved_group_arr = []
    saved_age_arr = []
    saved_status_arr = []
    saved_parent_arr = []
    saved_employee_arr = []
    saved_student_arr = []
    
    
    saved_age_arr = []
    st_ids = 0;
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    document.getElementById("search-results").innerHTML = "";

    var Database_link = database_fixed_link
    var inputs_col = [
         ["name" 
         , "phone" 
         , "email" 
         , "name_2" 
         , "phone_2" 
         , "email_2" 
         , "address" 
         , "location" 
         , "job" 
         , "reg_status" 
         , "customer_agent_id" 
         , "sales_agent_id" 
          ]
          ,
         ["std_id" 
         , "parent_id" 
         , "free_session_status" 
         , "std_status" 
         , "name" 
         , "age" 
         , "birthdate" 
          ],
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
          , "student_id_1" 
          , "student_id_2" 
          , "student_id_3" 
          , "student_id_4" 
          , "student_id_5" 
          , "student_id_6" 
          ],
          ["name"],
          ["groups_id" 
          , "student_id" 
          , "status" 
          ],
          ["name"],
          ["name"],
          ["groups_id" 
        ,"employee_id" 
        ,"zoomlink" 
        ,"session_date" 
        ,"session_num" 
        ,"open_by"
        ],
        ["name" 
        , "fees" 
        , "quota" 
        , "discount" 
        , "installments" 
        , "paid_as" 
        ]
        ,
        ["student_id" 
        ,"session_id" 
        ,"attendance" 
        ,"feedback" 
      ],
      ["name" 
      , "phone" 
      , "email" 
      , "zoomlink" 
      , "username" 
      , "password" 
      , "permission_id" 
      , "department_id" 
      , "role_id" 
       ]


      ];

var called_table = [
          'parent',
          'students',
          'groups',
          'age',
          'student_groups',
          'operation_status',
          'level',
          'sessions',
          'package',
          'att_feed',
          'employee',



      ];

var paper_inputs = ['name_input' , 
          'phone_input',
          'email_input',
          'name2_input',
          'phone2_input',
          'email2_input',
          'address_input',
          'location_input',
          'job_input',
          'reg_status_input',
          'customer_input',
          'sales_input',

      ];



var paper_inputs_label = [
          'Name : ' , 
          'Phone : ',
          'Email : ',
          'Name 2 : ',
          'Phone 2 : ',
          'Email 2 : ',
          'Address : ',
          'Location : ',
          'Job : ',
          'Register Status : ',
          'Customer Agent ',
          'Sales Agent '
      ];

        const All_req_obj = {};
        All_req_obj.Database_link = Database_link
        All_req_obj.inputs_col = inputs_col
        All_req_obj.called_table = called_table
                 
    html_create_lists_parent_student(paper_inputs , paper_inputs_label , "Location_1" );

    add_new_parent_student_(All_req_obj,paper_inputs);
    get_all_data_arr(All_req_obj ,quary_tables_all_status_students_check,'' , time_out , 2);
    get_all_data_arr(All_req_obj ,quary_tables_all__student,create_paper_table_parent_students , time_out , 3);

    $('#search_btn').click(function (index) {  

        get_all_data_arr(All_req_obj ,quary_tables_all__student,create_paper_table_customized_student , time_out , 4);
    });
  
    $('#add_student_new').click(function () {  

        html_create_lists_student_num_parent(All_req_obj,paper_inputs ,"Location_2" , st_ids);
        st_ids++;
    });

}
function html_create_lists_student_num_parent(All_req_obj , paper_inputs ,location_ , st_ids_)
{
    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById(location_).innerHTML += `<label>Student ID : </label><input type='text' id='student_id`+st_ids_+`'>`;
    document.getElementById(location_).innerHTML += `<label>Name : </label><input type='text' id='name_id`+st_ids_+`'>`;

    document.getElementById(location_).innerHTML +=`</div></div>`;
    document.getElementById(location_).innerHTML += `<label>Free Session : </label><input class="largerCheckbox" type='checkbox' id='free_id`+st_ids_+`' value='yes'>`;

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    document.getElementById(location_).innerHTML += `<label>birthdate : </label><input type='date' id='bd_id`+st_ids_+`'>`;
    paper_inner_parent_1('status_id'+st_ids_ , "Status ");

    for(var index = 0 ;index < saved_status_arr.length ; index++)
    {
        $('#status_id'+st_ids_).append(`<option value="${saved_status_arr[index][0]}"
        >${saved_status_arr[index][2]} </option>`); 
    }
    document.getElementById(location_).innerHTML +=`</div></div>`;

    paper_inner_parent_1('Packages_id_input'+st_ids_ , "Packages ");
    for(var index = 0 ;index < saved_package_arr.length ; index++)
    {
        $('#Packages_id_input'+st_ids_).append(`<option value="${saved_package_arr[index][0]}"
        >${saved_package_arr[index][1]} </option>`); 
    }

    document.getElementById(location_).innerHTML +=`<label>Paid Date : </label><input type='date' id='package_data_${st_ids_}' />`;



    paper_inner_parent_1('Parent_id_input'+st_ids_ , "Parent ");

    for(var index = 0 ;index < saved_parent_arr.length ; index++)
    {
        $('#Parent_id_input'+st_ids_).append(`<option value="${saved_parent_arr[index][0]}"
        >${saved_parent_arr[index][2]} </option>`); 
    }

    paper_inner_parent_1('groups_id_input'+st_ids_ , "Groups ");

    for(var index = 0 ;index < saved_group_arr.length ; index++)
    {
        $('#groups_id_input'+st_ids_).append(`<option value="${saved_group_arr[index][0]}"
        >${saved_group_arr[index][1]} </option>`); 
    }



    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    document.getElementById(location_).innerHTML +=`<hr class="hr-primary" />`;
    document.getElementById(location_).innerHTML +=`</div></div>`;


    // saved_group_arr

}

function html_create_lists_parent_student(paper_inputs , paper_inputs_label  , location_)
{
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    document.getElementById("search-results").innerHTML = `<div class="loader" ></div>`;



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

  document.getElementById(location_).innerHTML +=`<div class='col justify-content-start'><button class='btn btn-primary' style='float:left;' id='add_student_new'>+ ADD Student</button></div><br>`;
    
  document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById(location_).innerHTML +=`<hr class="hr-primary" />`;
  document.getElementById(location_).innerHTML +=`</div></div>`;

}

function add_new_parent_student_(All_req_obj,paper_inputs )
{
    
    $(document).ready(function () {

        $('#send_group').click(function () {

            add_new_student_(All_req_obj,paper_inputs );
        
        });
    });
        
}


function add_new_student_(All_req_obj,paper_inputs , parent_id )
{
    
    var Database_link = database_fixed_link

    var inputs_col = 
    ["std_id" 
    , "parent_id" 
    , "free_session_status" 
    , "std_status" 
    , "name" 
    , "age" 
    , "birthdate" 

];
    
    var inputs_check = ["Name missing"];

    var called_table = 'students';

    if(st_ids == 0)
    {
        alert("Parent Add Successfully - No Student" , "primary");
        ADD_NEW_PARENT();
        return;
    }

    const All_data_obj = {};
    All_data_obj.table_ = called_table;
    All_data_obj.inputs_col_ = inputs_col;
    All_data_obj.inputs_check_ = inputs_check;
    All_data_obj.Database_link = Database_link;
    All_data_obj.callbackfunc;
    All_data_obj.obj;

    All_data_obj.group_id_value = [];
    All_data_obj.package_id_value = [];
    All_data_obj.student_package_date = [];
    All_data_obj.student_age_range = [];
    
    for(var index = 0 ; index < st_ids ; index++)
    {

      var arr_data = []



        var years_old = Todate(document.getElementById('bd_id'+index).value)[4];
        var years_current = Todate(new Date())[4];
        var saved_age_range = 0;
        var age_range = years_current - years_old;

        for(var i = 0 ; i < saved_age_arr.length ; i++)
        {
            if(age_range >= saved_age_arr[i][1] && age_range <= saved_age_arr[i][2])
            {
                saved_age_range = saved_age_arr[i][0];
            }
        }

        if(saved_age_range == 0){saved_age_range = 'under age';}

        for(var i = 0 ; i < st_ids ; i++)
        {
    
            var value_elments_ = [];
            value_elments_[0] = document.getElementById('student_id'+i).value;
            value_elments_[1] = document.getElementById('name_id'+i).value;
            value_elments_[2] = document.getElementById('bd_id'+i).value;
            value_elments_[3] = document.getElementById('status_id'+i).value;
            value_elments_[4] = document.getElementById('Packages_id_input'+i).value;
            value_elments_[5] = document.getElementById('package_data_'+i).value;


            var labels = ['Student Id missing' , 'Name missing' , 'Birthdate missing' , 'Status missing' , "Choose Package"]

            for(var x = 0 ; x <value_elments_.length ; x++ )
            {
                if(value_elments_[x] == '')
                {
                    alert('Students '+(i+1)+ ' ' + labels[x] , "danger");
                    return ;    
                }
            }

        }


       var value_elments = [];
            value_elments[0] = document.getElementById('student_id'+index).value;
            value_elments[1] = document.getElementById('Parent_id_input'+index).value;
            value_elments[2] = document.getElementById('free_id'+index).value;
            value_elments[3] = document.getElementById('status_id'+index).value;
            value_elments[4] = document.getElementById('name_id'+index).value;
            value_elments[5] = saved_age_range;
            value_elments[6] = document.getElementById('bd_id'+index).value;


            if(value_elments[0] == '' && index == 0)
            {
                // alert("Parent Add Successfully - No Student" , "primary");
                ADD_NEW_STUDENT();
                return;
            }


            All_data_obj.group_id_value[index] = document.getElementById('groups_id_input'+index).value;
            All_data_obj.package_id_value[index] = document.getElementById('Packages_id_input'+index).value;
            All_data_obj.student_package_date[index] = document.getElementById('package_data_'+index).value
            All_data_obj.student_age_range[index] = document.getElementById('bd_id'+index).value

            All_data_obj.callbackfunc = function(All_data_obj , response)
            {
                student_id_counter--;

                if(student_id_counter == 0)
                {

                        All_data_obj.callbackfunc = function(All_data_obj, response)
                        {
                            for(var count_index = 1 ; count_index < student_id_counter_saved+1 ; count_index++)
                            {
                                var student_id =  All_data_obj.obj[All_data_obj.obj.length-student_id_counter_saved_deduct].id;
                                student_id_counter_saved_deduct--;


                                add_student_to_group_(All_req_obj,paper_inputs , student_id , All_data_obj.group_id_value[count_index-1] , All_data_obj.student_age_range[count_index-1]);
                                add_new_student_package_parent(All_req_obj,paper_inputs , student_id , All_data_obj.package_id_value[count_index-1] , All_data_obj.student_package_date[count_index-1]);
                            }
                        };
                        get_all_data_from_database(All_data_obj);
                    
                }

            };
            add_one_data_from_database(All_data_obj , value_elments);
            student_id_counter++;
            student_id_counter_saved = student_id_counter;
            student_id_counter_saved_deduct = student_id_counter;
        }    
}


function add_new_student___(All_req_obj,paper_inputs)
{
    
    var Database_link = database_fixed_link

    var inputs_col = 
    ["std_id" 
    , "parent_id" 
    , "free_session_status" 
    , "std_status" 
    , "name" 
    , "age" 
    , "birthdate" 

];
    
    var inputs_check = ["Name missing"];

    var called_table = 'students';

    if(st_ids == 0)
    {
        alert("No Students" , "danger");
        get_all_data_arr(All_req_obj ,quary_tables_all__student,create_paper_table_parent , time_out , 5);
        return;
    }
    
    for(var index = 0 ; index < st_ids ; index++)
    {

      var arr_data = []

        const All_data_obj = {};
        All_data_obj.table_ = called_table;
        All_data_obj.inputs_col_ = inputs_col;
        All_data_obj.inputs_check_ = inputs_check;
        All_data_obj.Database_link = Database_link;
        All_data_obj.callbackfunc;
        All_data_obj.obj;


        var years_old = Todate(document.getElementById('bd_id'+index).value)[4];
        var years_current = Todate(new Date())[4];
        var saved_age_range = 0;
        var age_range = years_current - years_old;

        for(var i = 0 ; i < saved_age_arr.length ; i++)
        {
            if(age_range >= saved_age_arr[i][1] && age_range <= saved_age_arr[i][2])
            {
                saved_age_range = saved_age_arr[i][0];
            }
        }

        if(saved_age_range == 0){saved_age_range = 'under age';}





       var value_elments = [];
            value_elments[0] = document.getElementById('student_id'+index).value;
            value_elments[1] = document.getElementById('Parent_id_input'+index).value  ;
            value_elments[2] = document.getElementById('free_id'+index).value;
            value_elments[3] = document.getElementById('status_id'+index).value;
            value_elments[4] = document.getElementById('name_id'+index).value;
            value_elments[5] =  saved_age_range;
            value_elments[6] = document.getElementById('bd_id'+index).value;

            if(value_elments[0] == '' && index == 0)
            {
                alert("No Students" , "danger");
                //ADD_NEW_STUDENT();
                return;
            }

            var value_group_id = document.getElementById('groups_id_input'+index).value;


            All_data_obj.group_id_value[index] = document.getElementById('groups_id_input'+index).value;
            All_data_obj.package_id_value[index] = document.getElementById('Packages_id_input'+index).value;
            All_data_obj.student_package_date[index] = document.getElementById('package_data_'+index).value
            All_data_obj.student_age_range[index] = document.getElementById('bd_id'+index).value


            All_data_obj.callbackfunc = function(All_data_obj , response)
            {
                var value_group_id_2 = value_group_id;

                All_data_obj.callbackfunc = function(All_data_obj, response)
                {

                    if(value_group_id_2 && value_group_id_2 != "" && value_group_id_2 != 0)
                    {
                        add_new_student_to_groups(All_req_obj,paper_inputs , value_group_id_2 , All_data_obj.obj[All_data_obj.obj.length-1].id , All_data_obj.obj[All_data_obj.obj.length-1].parent_id , value_elments[6] );
                    }
                    else
                    {
                        if(All_data_obj.obj[All_data_obj.obj.length-1].parent_id == 0)
                        {
                            alert("Student Add successfully - No Parent - No group" , "primary");
                        }
                        else
                        {
                            alert("Student Add Successfully - Parent Add Successfully - No group " , "primary");
                        }
                        ADD_NEW_STUDENT();

                    }


                };
                get_all_data_from_database(All_data_obj);

            };
            add_one_data_from_database(All_data_obj , value_elments);
        }    
}

function add_new_student_to_groups(All_req_obj,paper_inputs , value_group_id , value_student_id , value_parent_id , student_age)
{
    
    var Database_link = database_fixed_link

    var inputs_col = 
    ["groups_id" 
    , "student_id" 
    , "status" 
];
    
    var inputs_check = ["Name missing"];

    var called_table = 'student_groups';


      var arr_data = []

        const All_data_obj = {};
        All_data_obj.table_ = called_table;
        All_data_obj.inputs_col_ = inputs_col;
        All_data_obj.inputs_check_ = inputs_check;
        All_data_obj.Database_link = Database_link;
        All_data_obj.callbackfunc;
        All_data_obj.obj;


        var years_old = Todate(student_age)[4];
        var years_current = Todate(new Date())[4];
        var compare = 0;
        var age_range = years_current - years_old;

        for(var i = 0 ; i < saved_age_arr.length ; i++)
        {
            if(saved_age_arr[i][0] == 'B')
            {
                compare = Number(saved_age_arr[i][1]);
            }
        }

        if(age_range < compare)
        {

            if(value_parent_id == 0)
            {
                alert("Student Add Successfully - No Parent - Student too Young to join Group" , "primary");
            }
            else{
                alert("Student Add Successfully - Parent Add Successfully - Student too Young to join Group" , "primary");
            }

            ADD_NEW_PARENT();
            return;
        }
        
        var value_elments = [];
        value_elments[0] = value_group_id;
        value_elments[1] = value_student_id;
        value_elments[2] = 'active';
        
        All_data_obj.callbackfunc = function(All_data_obj , response)
        {
            var counter_student = 0;
            for(var index = 0 ; index < All_data_obj.obj.length ; index++)
            {
                if(All_data_obj.obj[index].groups_id == value_group_id &&  All_data_obj.obj[index].status == 'active')
                {
                    counter_student++;
                }
            }

            if(counter_student >= 6)
            {
                if(value_parent_id == 0)
                {
                    alert("Student Add Successfully - No Parent - Group Full" , "primary");
                }
                else{
                    alert("Student Add Successfully - Parent Add Successfully - Group Full" , "primary");
                }
                ADD_NEW_STUDENT();

            }
            else
            {
                All_data_obj.callbackfunc = function(All_data_obj , response)
                {
                    All_data_obj.callbackfunc = function(All_data_obj, response)
                    {


                        add_student_to_student_Sessions(All_req_obj,paper_inputs , value_group_id , value_student_id , value_parent_id);

                    };
                    get_all_data_from_database(All_data_obj);
    
                };
                add_one_data_from_database(All_data_obj , value_elments);
            }

        };
        get_all_data_from_database(All_data_obj);
}



function add_student_to_student_Sessions(All_req_obj,paper_inputs , group_id_value , student_id , value_parent_id)
{
    
    var Database_link = database_fixed_link

    var inputs_col = 
    ["student_id" 
    ,"session_id" 
    ,"attendance" 
    ,"feedback" 
  ];
    
    var inputs_check = ["Name missing"];

    var called_table = 'att_feed';

      var arr_data = []

        const All_data_obj = {};
        All_data_obj.table_ = called_table;
        All_data_obj.inputs_col_ = inputs_col;
        All_data_obj.inputs_check_ = inputs_check;
        All_data_obj.Database_link = Database_link;
        All_data_obj.callbackfunc;
        All_data_obj.obj;


       for(var index = 0 ; index < saved_sessions_id_arr.length; index ++)
       {
        if(group_id_value == saved_sessions_id_arr[index].groups_id)
        {
            var value_elments = [];
            value_elments[0] = student_id;
            value_elments[1] = saved_sessions_id_arr[index].id;
            value_elments[2] = "";
            value_elments[3] = "";
            
            All_data_obj.callbackfunc = function(All_data_obj , response)
            {      
                if(value_parent_id == 0)
                {
                alert("Student Add Successfully - No Parent - Group Add Successfully  - Session Assigned Successfully" , "primary");
                }
                else{
                alert("Student Add Successfully - Parent Add Successfully - Group Add Successfully  - Session Assigned Successfully" , "success");
                }

                ADD_NEW_STUDENT();
            };
            add_one_data_from_database(All_data_obj , value_elments);
        }
       }
       



}



function get_all_data_arr(All_req_obj , func_quary,func , timeout , index_pos)
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


    counter__[index_pos] = 0;

    for(var index = 0 ; index < arr_data.length ; index++)
    {
        counter__[index_pos] ++;

        get_all_data_from_database_doAjax_arr(arr_data[index] , index_pos,   func_quary , func , All_table_obj);

    }


}

 function quary_tables_all__student(All_table_obj , func)
 {
    var create_new_tabl_rows = []
    var counter = 0;

    // 'parent',
    // 'students',
    // 'groups',
    // 'age',
    // 'student_groups',
    // 'operation_status',
    // 'level',
    // 'sessions',
    // 'package',
    // 'att_feed'


    if(All_table_obj.tables[1] && All_table_obj.tables[1] !== undefined && All_table_obj.tables[1].length != 0)
    {
        create_new_tabl_rows = All_table_obj.tables[1]

        for(var index = 0 ; index < All_table_obj.tables[1].length ; index++)
        {
            var create_new_tabl_col = [];
            var counter_col = 0;
            create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].id; counter_col++;
            create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].std_id; counter_col++;
            create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].name; counter_col++;

            var return_data = search_two_tables(All_table_obj.tables[1][index] , All_table_obj.tables[0] , 3 , 0 , 0)
            create_new_tabl_col[counter_col] = return_data;counter_col++;

            var return_data = search_two_tables(All_table_obj.tables[1][index] , All_table_obj.tables[0] , 3 , 0 , 2)
            create_new_tabl_col[counter_col] = return_data;counter_col++;

            create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].free_session_status; counter_col++;

            if(saved_status_arr && saved_status_arr !== undefined && saved_status_arr.length != 0)
            {
                for(var index___ = 0 ; index___ < saved_status_arr.length ; index___++)
                {
                    if(saved_status_arr[index___][0] == All_table_obj.tables[1][index].std_status)
                    {
                        create_new_tabl_col[counter_col] = saved_status_arr[index___][2];counter_col++;
                        break;
                    }
                }
            }

            
            // create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].std_status; counter_col++;
            create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].age; counter_col++;
            create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].birthdate; counter_col++;

            var count= 0;
            var Att= 0;
            var Abs= 0;
            var Feed= 0;
            var Non_att= 0;
            var students_sessions = [];

            if(All_table_obj.tables[9] && All_table_obj.tables[9] !== undefined && All_table_obj.tables[9].length != 0)
            {        

                for(var index_9 = 0 ; index_9 < All_table_obj.tables[9].length ; index_9++)
                {

                    if(All_table_obj.tables[1][index].id == All_table_obj.tables[9][index_9].student_id )
                    {
                        students_sessions[count] = All_table_obj.tables[9][index_9];
                        count++;
                    }

                    if(All_table_obj.tables[1][index].id == All_table_obj.tables[9][index_9].student_id  && All_table_obj.tables[9][index_9].attendance == "YES")
                    {
                        Att++;
                    }
                    else if(All_table_obj.tables[1][index].id == All_table_obj.tables[9][index_9].student_id  && All_table_obj.tables[9][index_9].attendance == "NO")
                    {
                        Abs++;
                    }
                    else
                    {
                        Non_att++;
                    }
                    if(All_table_obj.tables[1][index].id == All_table_obj.tables[9][index_9].student_id  && All_table_obj.tables[9][index_9].feedback == "")
                    {
                        Feed++;
                    }

                }

            }
            create_new_tabl_col[counter_col] = count; counter_col++;
            create_new_tabl_col[counter_col] = Att; counter_col++;
            create_new_tabl_col[counter_col] = Abs; counter_col++;

            create_new_tabl_col[counter_col] = count - (Att + Abs); counter_col++;


            create_new_tabl_col[counter_col] = Feed; counter_col++;

            if(count - (Att + Abs))
            {
                create_new_tabl_col[counter_col] = 'Not Updated Attendance';counter_col++;
            }
            else
            {
                create_new_tabl_col[counter_col] = 'Attendance Up to Date';counter_col++;
            }


            if(Feed)
            {
                create_new_tabl_col[counter_col] = 'Not Updated Feedback';counter_col++;
            }
            else
            {
                create_new_tabl_col[counter_col] = 'Feedback Up to Date';counter_col++;
            }

            create_new_tabl_col[counter_col] = students_sessions; counter_col++;

            create_new_tabl_rows[counter] = create_new_tabl_col;counter++;

        }

    }

    func(create_new_tabl_rows);
}

 function create_paper_table_parent_students(all_tables)
 {
    var inputs_names_search = [
        "ID :"
    ,"Student ID :"
    , "Student Name :"
    ,"Parent ID :" 
    , "Parent Name :" 
    , "Free Session Status :" 
    , "Student Status :" 
    , "Age :"
    , "Birthdate :"
    , "Created Sessions :"
    , "Attended Sessions :"
    , "Absence Sessions :"
    , "Remain Sessions :"
    , "Remain Feedback :"



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

    // createTable(all_tables ,All_data_obj , 'clear' , 4 , 5); 

    createTable(all_tables ,All_data_obj , 'clear' , 6 , 5 , "open" , create_view_student , all_tables[0].length-1); 

}


function create_view_student(All_data_obj , End_Index)
{
    var div = document.getElementById("search-results_1");
    div.innerHTML = '';
    for(var index = All_data_obj.Start_Index-1 ; index < End_Index ; index++)
    {
        var btn = document.getElementById(All_data_obj.view_index[index]);

        All_data_obj.saved_index = index;

        btn.onclick = function() {
            var id = this.id;
            var ret = id.replace('view_more_','');

          modal.style.display = "block";

        var data_arr = [];


        for(var index = 0 ; index < All_data_obj.obj_data[ret][16].length ; index++)
        {  
            var inner_arr = []
            var index_count = 0;

            inner_arr[index_count] =  All_data_obj.obj_data[ret][16][index].session_id;index_count++;
            inner_arr[index_count] =  All_data_obj.obj_data[ret][16][index].student_id;index_count++;

            if(saved_student_arr&& saved_student_arr!== undefined && saved_student_arr.length != 0)
            {        
                for(var index_11 = 0 ; index_11 < saved_student_arr.length ; index_11++)
                {
                    if(All_data_obj.obj_data[ret][16][index].student_id == saved_student_arr[index_11].id)
                    {
                        inner_arr[index_count] =  saved_student_arr[index_11].name;index_count++;
                        break;
                    }
                }
            }
            inner_arr[index_count] =  All_data_obj.obj_data[ret][16][index].attendance;index_count++;
            inner_arr[index_count] =  All_data_obj.obj_data[ret][16][index].feedback;index_count++;

            if(saved_sessions_id_arr&& saved_sessions_id_arr!== undefined && saved_sessions_id_arr.length != 0)
            {        
                for(var index_9 = 0 ; index_9 < saved_sessions_id_arr.length ; index_9++)
                {
                    if(All_data_obj.obj_data[ret][16][index].session_id == saved_sessions_id_arr[index_9].id)
                    {
                        if(saved_group_arr&& saved_group_arr!== undefined && saved_group_arr.length != 0)
                        {        
                            for(var index_10 = 0 ; index_10 < saved_group_arr.length ; index_10++)
                            {
                                if(saved_sessions_id_arr[index_9].groups_id == saved_group_arr[index_10][0])
                                {
                                    inner_arr[index_count] =  saved_group_arr[index_10][1];index_count++;
                                    break;
                                }
                            }
                        }

                        inner_arr[index_count] =  saved_sessions_id_arr[index_9].employee_id;index_count++;

                        inner_arr[index_count] =  saved_sessions_id_arr[index_9].open_by;index_count++;
                        inner_arr[index_count] =  saved_sessions_id_arr[index_9].session_date;index_count++;
                        inner_arr[index_count] =  saved_sessions_id_arr[index_9].session_num;index_count++;
                        inner_arr[index_count] =  saved_sessions_id_arr[index_9].zoomlink;index_count++;


                        if(saved_employee_arr&& saved_employee_arr!== undefined && saved_employee_arr.length != 0)
                        {        
                            for(var index_12 = 0 ; index_12 < saved_employee_arr.length ; index_12++)
                            {
                                if(saved_sessions_id_arr[index_9].employee_id== saved_employee_arr[index_12].id)
                                {
                                    inner_arr[index_count] =  saved_employee_arr[index_12].name;index_count++;
                                    break;
                                }
                            }
                        }

                        inner_arr[index_count] =  All_data_obj.obj_data[ret][16][index].id;index_count++;


                    }
                }
            }

            data_arr[index] = inner_arr;
        }
        createTable_pop_up_students(data_arr , null , End_Index);

        //   createTable_pop_up(All_data_obj  , ret);
        }

    }
}


function create_paper_table_customized_student(all_tables)
{



    var inputs_names_search = [
        "ID :"
    ,"Student ID :"
    , "Student Name :"
    ,"Parent ID :" 
    , "Parent Name :" 
    , "Free Session Status :" 
    , "Student Status :" 
    , "Age :"
    , "Birthdate :"
    , "Created Sessions :"
    , "Attended Sessions :"
    , "Absence Sessions :"
    , "Remain Sessions :"
    , "Remain Feedback :"



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
      createTable(all_tables ,All_data_obj , 'clear' , 6 , 5 , "open" , create_view_student , all_tables[0].length-1); 

      return;
   }

    var result = Search_for_value(all_tables , values_)
        
   createTable(result ,All_data_obj , 'clear' , 6 , 5 , "open" , create_view_student , result[0].length-1); 

}




function paper_inner_parent (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class='col-1' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}


function paper_inner_parent_1 (paper_ , title)
{
  document.getElementById("Location_2").innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class='col-1' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}

function quary_tables_all_status_students_check(All_table_obj , func)
{
    var get_group_info = [];
    var create_new_tabl_cols = [];
    var create_new_tabl_rows = [];
    var counter = 0;
    var return_search = [];
    var special_counter = 0;

    saved_parent_arr = search_value_from_table(All_table_obj.tables[0]);


    if(All_table_obj.tables[1] && All_table_obj.tables[1] !== undefined && All_table_obj.tables[1].length != 0){
        for(var index_1 = 0 ; index_1 < All_table_obj.tables[1].length ; index_1++)
        {
            saved_student_arr[index_1] = All_table_obj.tables[1][index_1];
        }
    }

    if(All_table_obj.tables[10] && All_table_obj.tables[10] !== undefined && All_table_obj.tables[10].length != 0){
        for(var index_10 = 0 ; index_10 < All_table_obj.tables[10].length ; index_10++)
        {
            saved_employee_arr[index_10] = All_table_obj.tables[10][index_10];
        }
    }


    if(All_table_obj.tables[8] && All_table_obj.tables[8] !== undefined && All_table_obj.tables[8].length != 0){
        for(var index__ = 0 ; index__ < All_table_obj.tables[8].length ; index__++)
        {
            var count_package = 0;
            var created_package = [];

            created_package[count_package] = All_table_obj.tables[8][index__].id;count_package++;
            created_package[count_package] = All_table_obj.tables[8][index__].name;count_package++;
            created_package[count_package] = All_table_obj.tables[8][index__].fees;count_package++;
            created_package[count_package] = All_table_obj.tables[8][index__].quota;count_package++;
            created_package[count_package] = All_table_obj.tables[8][index__].discount;count_package++;
            created_package[count_package] = All_table_obj.tables[8][index__].installments;count_package++;
            created_package[count_package] = All_table_obj.tables[8][index__].paid_as;count_package++;

            saved_package_arr[index__] = created_package;

        }
    }





    if(All_table_obj.tables[7] && All_table_obj.tables[7] !== undefined && All_table_obj.tables[7].length != 0)
    {
        for(var index__ = 0 ; index__ < All_table_obj.tables[7].length ; index__++)
        {
            saved_sessions_id_arr[index__] = All_table_obj.tables[7][index__];
        }
    }

    count_sessions++;
    var count_sessions = 0 ;

    if(All_table_obj.tables[3] && All_table_obj.tables[3] !== undefined && All_table_obj.tables[3].length != 0)
    {
        for(var index = 0 ; index < All_table_obj.tables[3].length ; index ++)
        {
            var saved_age_arr_rows = []
            saved_age_arr_rows[0] = All_table_obj.tables[3][index].name;
            saved_age_arr_rows[1] = All_table_obj.tables[3][index].from_age;
            saved_age_arr_rows[2] = All_table_obj.tables[3][index].to_age;
            saved_age_arr[index] = saved_age_arr_rows;
        }
    }

    saved_status_arr = search_value_from_table(All_table_obj.tables[5]);
    get_group_info = search_value_from_table(All_table_obj.tables[2]);

    for(var index = 0 ; index < get_group_info.length ; index++){

        create_new_tabl_cols = [];
        counter = 0;

        var string_collect = '';

        create_new_tabl_cols[counter] = get_group_info[index][0];counter++;

        
        return_search[index] = get_group_info[index][9];
        var test_return = [];
        test_return[0] = return_search[index];

        var return_data = search_for_data(All_table_obj.tables[3] , test_return , 0 , 2 );

        string_collect += return_data[0];return_search = [];
        string_collect += '-'

        return_search[index] = get_group_info[index][5];
        var return_data = search_for_data(All_table_obj.tables[6] , return_search , 0 , 2 );
        string_collect += return_data[0];return_search = [];
        string_collect += '-';
        string_collect += get_group_info[index][0];
        string_collect += ' | ';

        var counter__ = 0;
        if(All_table_obj.tables[4] && All_table_obj.tables[4] !== undefined && All_table_obj.tables[4].length != 0)
        {
            for(var index_ = 0 ; index_ < All_table_obj.tables[4].length ; index_++)
            {
                if((All_table_obj.tables[2][index].id == All_table_obj.tables[4][index_].groups_id) && (All_table_obj.tables[4][index_].status == "active"))
                {
                    counter__++;
                }
            }
        }

        var count_sessions = 0;

        if(All_table_obj.tables[7] && All_table_obj.tables[7] !== undefined && All_table_obj.tables[7].length != 0)
        {
            for(var index__ = 0 ; index__ < All_table_obj.tables[7].length ; index__++)
            {
                if(All_table_obj.tables[2][index].id == All_table_obj.tables[7][index__].groups_id)
                {
                    count_sessions++;
                }
            }
        }

        string_collect += counter__ + 'St';
        string_collect += ` | ` + count_sessions + 'Se';


        
        create_new_tabl_cols[counter] = string_collect;

        if(counter__ < 6)
        {
            create_new_tabl_rows[special_counter] = create_new_tabl_cols;
            special_counter++;

        }
    }

    saved_group_arr = create_new_tabl_rows;

}



function createTable_pop_up_students(All_data_obj , All_req_obj  , End_Index) {

    var dataArray = All_data_obj;

    // console.log(dataArray);

  if(dataArray && dataArray !== undefined && dataArray.length != 0){

    var result = "<table class='table' id='dtable'>"+
                 "<thead   style='white-space:nowrap' >"+
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
                        result += "<td style='white-space:nowrap' >";
                        result += `Session ID : ${dataArray[index][0]}` 
                        result += `<br>Group ID : ${dataArray[index][5]}` 
                        result += `<br>Session Date : ${dataArray[index][8]}` 
                        result += `<br>Session Num : ${dataArray[index][9]}` 
                        result +="</td>"
                        result += "<td style='white-space:nowrap' >";
                        result += `Student ID : ${dataArray[index][1]}`   
                        result += `<br>Student Name : ${dataArray[index][2]}`    
                        result += `<br>Instructor ID : ${dataArray[index][6]}`   
                        result += `<br>Instructor Name : ${dataArray[index][11]}`   
                        result +="</td>"
                        result += "<td style='white-space:nowrap' >";   
                                          
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
                        result += "<td style='white-space:nowrap' >";       
                        if(dataArray[index][4] != "")
                        result += `Feeback : <textarea id='feed_id_${index}' style='float:right' rows="4" cols="40"> ${dataArray[index][4]} </textarea> `;
                        else
                        result += `Feeback : <textarea id='feed_id_${index}' style='float:right' rows="4" cols="40"></textarea> `;


                        result +="</td>"
                        result += "<td style='white-space:nowrap' >";     
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

                update_studnet_att_students(dataArray[ret] , dataArray , All_req_obj , ret , End_Index)
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

function update_studnet_att_students(value_elments , students_arr , All_req_obj , ret , End_Index)
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
            All_data_obj_.index_num = value_elments[12];

            All_data_obj_.callbackfunc = function(All_data_obj, response)
            {
                alert(response);

                var Database_link = database_fixed_link
                var inputs_col = [
                     ["name" 
                     , "phone" 
                     , "email" 
                     , "name_2" 
                     , "phone_2" 
                     , "email_2" 
                     , "address" 
                     , "location" 
                     , "job" 
                     , "reg_status" 
                     , "customer_agent_id" 
                     , "sales_agent_id" 
                      ]
                      ,
                     ["std_id" 
                     , "parent_id" 
                     , "free_session_status" 
                     , "std_status" 
                     , "name" 
                     , "age" 
                     , "birthdate" 
                      ],
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
                      , "student_id_1" 
                      , "student_id_2" 
                      , "student_id_3" 
                      , "student_id_4" 
                      , "student_id_5" 
                      , "student_id_6" 
                      ],
                      ["name"],
                      ["groups_id" 
                      , "student_id" 
                      , "status" 
                      ],
                      ["name"],
                      ["name"],
                      ["groups_id" 
                    ,"employee_id" 
                    ,"zoomlink" 
                    ,"session_date" 
                    ,"session_num" 
                    ,"open_by"
                    ],
                    ["name" 
                    , "fees" 
                    , "quota" 
                    , "discount" 
                    , "installments" 
                    , "paid_as" 
                    ]
                    ,
                    ["student_id" 
                    ,"session_id" 
                    ,"attendance" 
                    ,"feedback" 
                  ],
                  ["name" 
                  , "phone" 
                  , "email" 
                  , "zoomlink" 
                  , "username" 
                  , "password" 
                  , "permission_id" 
                  , "department_id" 
                  , "role_id" 
                   ]          
                  ];
            
            var called_table = [
                      'parent',
                      'students',
                      'groups',
                      'age',
                      'student_groups',
                      'operation_status',
                      'level',
                      'sessions',
                      'package',
                      'att_feed',
                      'employee',
                  ];
            
                    const All_req_obj = {};
                    All_req_obj.Database_link = Database_link
                    All_req_obj.inputs_col = inputs_col
                    All_req_obj.called_table = called_table


                    get_all_data_arr(All_req_obj ,quary_tables_all_status_students_check,'' , time_out , 5);
                    get_all_data_arr(All_req_obj ,quary_tables_all__student,create_paper_table_parent_students , time_out , 6);


            };
            update_one_data_from_database(All_data_obj_ , COL_DATA)

}

