
var saved_sessions_id_arr = [];
var st_ids = 0;
var saved_group_arr = []
var saved_age_arr = []
var saved_status_arr = []
var saved_parent_arr = []
var Packages_id_input = [];
var Packages_id_input = [];
var get_tasks_arr = [];
var get_se_task_arr = [];
var get_ans_arr = [];

var saved_student_arr = []
var saved_employee_arr = []

async function ADD_NEW_STUDENT()
{


    get_tasks_arr = await GET_DATA_TABLES(database_fixed_link , 'tasks'); 
    get_se_task_arr = await GET_DATA_TABLES(database_fixed_link , 'session_tasks'); 
    get_ans_arr = await GET_DATA_TABLES(database_fixed_link , 'students_ans'); 


    Loading_page_set();
    document.getElementById("blob_Location_1").innerHTML = ``;

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
         , "marketing_id" 
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
        Loading_page_set();

        get_all_data_arr(All_req_obj ,quary_tables_all__student,create_paper_table_parent_students , time_out , 4);
    });

    $('#reg_btn').click(function () {

        Loading_page_set();

        $('#reg_input').val("<label style='color:red'>Not Updated Attendance</label>");
        get_all_data_arr(All_req_obj ,quary_tables_all__student,create_paper_table_parent_students , time_out , 5);

    });

    $('#all_calls_btn').click(function () {
        Loading_page_set();

        get_all_data_arr(All_req_obj ,quary_tables_all__student,create_paper_table_parent_students , time_out , 7);

    });
        
    $('#not_reg_btn').click(function () {
        Loading_page_set();

        $('#not_reg_input').val("<label style='color:red'>Not Updated Feedback</label>");

        get_all_data_arr(All_req_obj ,quary_tables_all__student,create_paper_table_parent_students , time_out , 6);

    });
    
  
    $('#add_student_new').click(function () {  
        // $('.select2').clear();
        html_create_lists_student_num_parent(All_req_obj,paper_inputs ,"Location_2" , st_ids);
        $('.select2').select2();
        st_ids++;
    });

}
function html_create_lists_student_num_parent(All_req_obj , paper_inputs ,location_ , st_ids_)
{
    document.getElementById(location_).innerHTML = '';
    for(var index__ = 0 ; index__ < st_ids_+1 ; index__++)
    {

        document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

        document.getElementById(location_).innerHTML += `<label>Student ID : </label><input type='text' id='student_id`+index__+`'>`;
        document.getElementById(location_).innerHTML += `<label>Name : </label><input type='text' id='name_id`+index__+`'>`;
        paper_inner_parent_1('Parent_id_input'+index__ , "Parent ");
        
        $('#Parent_id_input'+index__).append(`<option value="">Choose Parent Later</option>`); 

        for(var index = 0 ;index < saved_parent_arr.length ; index++)
        {
            $('#Parent_id_input'+index__).append(`<option value="${saved_parent_arr[index][0]}"
            >${saved_parent_arr[index][2]} </option>`); 
        }
        document.getElementById(location_).innerHTML +=`</div></div>`;
        document.getElementById(location_).innerHTML += `<label>Free Session : </label><input class="largerCheckbox" type='checkbox' id='free_id`+index__+`' value='yes'>`;
    
        document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
        document.getElementById(location_).innerHTML += `<label>birthdate : </label><input type='date' id='bd_id`+index__+`'>`;
        paper_inner_parent_1_hidden('status_id'+index__ , "Status ");
    
        paper_inner_parent_1('groups_id_input'+index__ , "Groups ");
    
        $('#groups_id_input'+index__).empty();
        $('#groups_id_input'+index__).append(`<option value="">Select Birth Date</option>`); 
        // for(var index = 0 ;index < saved_status_arr.length ; index++)
        // {
        //     $('#status_id'+index__).append(`<option value="${saved_status_arr[index][0]}"
        //     >${saved_status_arr[index][2]} </option>`); 
        // }
        document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    
        document.getElementById(location_).innerHTML +=`</div></div>`;
    
        paper_inner_parent_1('Packages_id_input'+index__ , "Packages ");
        for(var index = 0 ;index < saved_package_arr.length ; index++)
        {
            $('#Packages_id_input'+index__).append(`<option value="${saved_package_arr[index][0]}"
            >${saved_package_arr[index][1]} </option>`); 
        }
    
        document.getElementById(location_).innerHTML +=`<label>Paid Date : </label><input type='date' id='package_data_${index__}' />`;
    
    
    

        document.getElementById(location_).innerHTML +=`</div></div>`;
    

    
    
        document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
        document.getElementById(location_).innerHTML +=`<hr class="hr-primary" />`;
        document.getElementById(location_).innerHTML +=`</div></div>`;
    }


    for(var indexx = 0 ; indexx < st_ids_+1 ; indexx++)
    {
        $("#bd_id"+indexx).change(function () {
            var id = this.id;
            var ret = id.replace('bd_id','') ;

            var kid_age =  (new Date()).getFullYear() - new Date($("#bd_id"+ret).val()).getFullYear() 
            var age_req = '';
            if(kid_age < 20)
            {
                saved_age_arr.forEach(elment =>{
                    if(kid_age >= Number(elment[1]) && kid_age <=  Number(elment[2]))
                    {
                        age_req = elment[0];
                        $('#groups_id_input'+ret).empty();

                    }
                })

                if(age_req)
                {
                    var check_av = false;
                    for(var index = 0 ;index < saved_group_arr.length ; index++)
                    {
                        if(saved_group_arr[index][0] != undefined && saved_group_arr[index][2] == age_req)
                        {
                            check_av = true;
                            $('#groups_id_input'+ret).append(`<option value="${saved_group_arr[index][0]}"
                            >${saved_group_arr[index][1]} </option>`); 
                        }
                    }
                    if(check_av == true)
                    {
                        $('#groups_id_input'+ret).append(`<option value="">Waiting List</option>`); 
                    }
                    if(check_av == false)
                    {
                        $('#groups_id_input'+ret).empty();
                        $('#groups_id_input'+ret).append(`<option value="">No groups for the age range</option>`); 
                    }
                }
                else
                {
                    $('#groups_id_input'+ret).empty();
                    $('#groups_id_input'+ret).append(`<option value="">Select Birth Date</option>`); 
                }

            }
            else
            {
                $('#groups_id_input'+ret).empty();
                $('#groups_id_input'+ret).append(`<option value="">Select Birth Date</option>`); 
            }

        });
    }

    

    // saved_group_arr

}

function html_create_lists_parent_student(paper_inputs , paper_inputs_label  , location_)
{
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    // document.getElementById("search-results").innerHTML = `<div class="loader" ></div>`;



    document.getElementById(location_).innerHTML += `<div class='col justify-content-start'><button class='btn btn-success' style='float:right;' id='send_group'>ADD</button></div>`;


    document.getElementById(location_).innerHTML +=`<div class="input-group">
    <div class='col justify-content-start'>
      <input type="search" id="search_all" class="form-control" />
    </div><div id='search_assign'> </div>
    <div class='col justify-content-start' style='z-index:0;'><button type="button" id='search_btn' class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button></div>
  </div>`;

  employee_drop_down_search('search_assign');

  document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById(location_).innerHTML +=`</div></div>`;

  document.getElementById(location_).innerHTML +=`<div class='col justify-content-start'><button class='btn btn-primary' style='float:left;' id='add_student_new'>+ ADD Student</button></div><br>`;
    
  document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

  document.getElementById(location_).innerHTML +=`<div class='col justify-content-start' style='z-index:0;'>
  <button type="button" id='all_calls_btn' class="btn btn-secondary">
  All
</button>
  <button type="button" id='reg_btn' class="btn btn-danger">
Not Updated Attendance
</button><input type='text' id='reg_input' value='' hidden/>
<button type="button" id='not_reg_btn' class="btn btn-danger">
Not Updated Feedback
</button>
</button><input type='text' id='not_reg_input' value='' hidden/>
<input id='counter_id' readonly />
</div>`;
document.getElementById(location_).innerHTML +=`</div></div>`;

  document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById(location_).innerHTML +=`<hr class="hr-primary" />`;
  document.getElementById(location_).innerHTML +=`</div></div>`;

}

function add_new_parent_student_(All_req_obj,paper_inputs )
{
    
    $(document).ready(function () {

        $('#send_group').click(function () {
            Loading_page_set();

            add_new_student_(All_req_obj,paper_inputs );
        
        });
    });
        
}


async function add_new_student_(All_req_obj,paper_inputs , parent_id )
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
        ADD_NEW_STUDENT();
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
            value_elments_[3] = 'active';

            if(document.getElementById('Packages_id_input'+i).value != '')
            {
                value_elments_[4] =  document.getElementById('package_data_'+i).value;
            }
 
            var labels = ['Student Id missing' , 'Name missing' , 'Birthdate missing' , 'Status missing' , "Set Package Date"]

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
            value_elments[3] = 'Active';
            value_elments[4] = document.getElementById('name_id'+index).value;
            value_elments[5] = saved_age_range;
            value_elments[6] = document.getElementById('bd_id'+index).value;


            if(value_elments[0] == '' && index == 0)
            {
                ADD_NEW_STUDENT();
                return;
            }




            All_data_obj.group_id_value[index] = document.getElementById('groups_id_input'+index).value;
            All_data_obj.package_id_value[index] = document.getElementById('Packages_id_input'+index).value ;
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

                                if(All_data_obj.group_id_value[count_index-1])
                                {
                                    add_student_to_group_(All_req_obj,paper_inputs , student_id , All_data_obj.group_id_value[count_index-1] , All_data_obj.student_age_range[count_index-1]);
                                }
                                if(All_data_obj.package_id_value[count_index-1])
                                {
                                    add_new_student_package_parent(All_req_obj,paper_inputs , student_id , All_data_obj.package_id_value[count_index-1] , All_data_obj.student_package_date[count_index-1] , 'true' );
                                }
                                if(All_data_obj.group_id_value[count_index-1] == '' && All_data_obj.package_id_value[count_index-1] == '')
                                {
                                    ADD_NEW_STUDENT();
                                }
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
        get_all_data_arr(All_req_obj ,quary_tables_all__student,create_paper_table_parent_students , time_out , 5);
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

            ADD_NEW_STUDENT();
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


                ADD_NEW_STUDENT();
            };
            add_one_data_from_database(All_data_obj , value_elments);
        }
       }
       



}



function get_all_data_arr(All_req_obj , func_quary,func , timeout , index_pos , paper_inputs)
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

        get_all_data_from_database_doAjax_arr(arr_data[index] , index_pos,   func_quary , func , All_table_obj , All_req_obj , paper_inputs , arr_data );

    }


}

 async function quary_tables_all__student(All_table_obj , func)
 {
    var create_new_tabl_rows = []
    var counter = 0;

    var result_value = await GET_DATA_TABLES_FULL_JOIN(database_fixed_link , 'parent' , 'students' , 'students.parent_id , parent.id ' , 'parent.id = students.parent_id' , 'parent.id');
    
    console.log(result_value[0]);

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
    // let result_ ='';


    // All_table_obj.tables[1].forEach( elment => 
    //     {
    //         console.log(All_table_obj.tables[0][elment.parent_id]);
            
    //     }

    //  )

    //  console.log(All_table_obj.tables);


    //  All_table_obj.tables[0].forEach( elment => 
    //     {
    //         console.log(elment);
    //     }

    //  )

     



    // var array1 = ["cat", "sum","fun", "run"];
    // var array2 = ["bat", "cat","dog","sun", "hut", "gut"];


    // const intersection = Object.values(All_table_obj.tables[1]).filter(element => Object.values(All_table_obj.tables[0]).includes(element[0]));



    // console.log(intersection);


    // if(All_table_obj.tables[1] && All_table_obj.tables[1] !== undefined && All_table_obj.tables[1].length != 0)
    // {
    //     create_new_tabl_rows = All_table_obj.tables[1]

    //     for(var index = 0 ; index < All_table_obj.tables[1].length ; index++)
    //     {
    //         var create_new_tabl_col = [];
    //         var counter_col = 0;
    //         create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].id; counter_col++;
    //         create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].std_id; counter_col++;
    //         create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].name; counter_col++;

    //         var return_data = search_two_tables(All_table_obj.tables[1][index] , All_table_obj.tables[0] , 3 , 0 , 0)
    //         create_new_tabl_col[counter_col] = return_data;counter_col++;

    //         var return_data = search_two_tables(All_table_obj.tables[1][index] , All_table_obj.tables[0] , 3 , 0 , 2)
    //         create_new_tabl_col[counter_col] = return_data;counter_col++;




    //         create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].free_session_status; counter_col++;

    //         var check_status = false;


    //         if(saved_status_arr && saved_status_arr !== undefined && saved_status_arr.length != 0)
    //         {
    //             for(var index___ = 0 ; index___ < saved_status_arr.length ; index___++)
    //             {
    //                 if(saved_status_arr[index___][0] == All_table_obj.tables[1][index].std_status)
    //                 {
    //                     check_status = true;
    //                     create_new_tabl_col[counter_col] = saved_status_arr[index___][2];counter_col++;
    //                     break;
    //                 }
    //             }
    //         }

    //         if(check_status == false)
    //         {
    //             create_new_tabl_col[counter_col] = 'No Status';counter_col++;
    //         }
            
    //         // create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].std_status; counter_col++;
    //         create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].age; counter_col++;
    //         create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].birthdate; counter_col++;

    //         var check_sales = false;
    //         var check_cs = false;


    //         All_table_obj.tables[0].forEach(element_pt => {
                
    //             if(All_table_obj.tables[1][index].parent_id == element_pt.id)
    //             {
    //                 All_table_obj.tables[10].forEach(element_emp => {
    //                     if(element_pt.sales_agent_id == element_emp.id)
    //                     {
    //                         create_new_tabl_col[counter_col] = element_emp.name;counter_col++;check_sales=true;
    //                         return false;
    //                     }
    //                 });
    //             }
    //         });

    //         if(check_sales == false)
    //         {
    //             create_new_tabl_col[counter_col] = "No Agent";counter_col++ 
    //         }

    //         All_table_obj.tables[0].forEach(element_pt => {
                
    //             if(All_table_obj.tables[1][index].parent_id == element_pt.id)
    //             {
    //                 All_table_obj.tables[10].forEach(element_emp => {
    //                     if(element_pt.customer_agent_id == element_emp.id)
    //                     {
    //                         create_new_tabl_col[counter_col] = element_emp.name;counter_col++;check_cs=true;
    //                         return false;
    //                     }
    //                 });
    //             }
    //         });
            
    //         if(check_cs == false)
    //         {
    //             create_new_tabl_col[counter_col] = "No Agent";counter_col++ 
    //         }

       
    //         var count_all= 0;
    //         var all_created= 0;
    //         var count_comp= 0;
    //         var count_comp= 0;
    //         var Att= 0;
    //         var Abs= 0;
    //         var Feed= 0;
    //         var Non_att= 0;
    //         var students_sessions = [];



    //         if(All_table_obj.tables[9] && All_table_obj.tables[9] !== undefined && All_table_obj.tables[9].length != 0)
    //         {        

    //             for(var index_9 = 0 ; index_9 < All_table_obj.tables[9].length ; index_9++)
    //             {
    //                 var session_date_check = 0;
    //                 for(var x = 0 ; x < saved_sessions_id_arr.length ; x++)
    //                 {
    //                     if(saved_sessions_id_arr[x].id == All_table_obj.tables[9][index_9].session_id)
    //                     {
    //                         session_date_check = saved_sessions_id_arr[x].session_date;
    //                         break;
    //                     }
    //                 }


    //                 if(All_table_obj.tables[1][index].id == All_table_obj.tables[9][index_9].student_id && new Date(session_date_check) < new Date()  )
    //                 {
    //                     students_sessions[count_comp] = All_table_obj.tables[9][index_9];
    //                     count_comp++;
    //                 }

    //                 if(All_table_obj.tables[1][index].id == All_table_obj.tables[9][index_9].student_id )
    //                 {
    //                     students_sessions[all_created] = All_table_obj.tables[9][index_9];
    //                     all_created++;
    //                 }
                

    //                 if(All_table_obj.tables[1][index].id == All_table_obj.tables[9][index_9].student_id  && All_table_obj.tables[9][index_9].attendance == "YES" && new Date(session_date_check) < new Date())
    //                 {
    //                     Att++;
    //                 }
    //                 else if(All_table_obj.tables[1][index].id == All_table_obj.tables[9][index_9].student_id  && All_table_obj.tables[9][index_9].attendance == "NO" && new Date(session_date_check) < new Date())
    //                 {
    //                     Abs++;
    //                 }
    //                 else if(All_table_obj.tables[1][index].id == All_table_obj.tables[9][index_9].student_id  && All_table_obj.tables[9][index_9].attendance == "" && new Date(session_date_check) > new Date())
    //                 {
    //                     Non_att++;
    //                 }
    //                 if(All_table_obj.tables[1][index].id == All_table_obj.tables[9][index_9].student_id  && All_table_obj.tables[9][index_9].feedback != "" && new Date(session_date_check) < new Date())
    //                 {
    //                     Feed++;
    //                 }

    //                 if(All_table_obj.tables[1][index].id == All_table_obj.tables[9][index_9].student_id)
    //                 {
                        
    //                         All_table_obj.tables[7].forEach(element_se => {
        
    //                             if(All_table_obj.tables[9][index_9].session_id == element_se.id && new Date(element_se.session_date) >= new Date() && check_lock == false)
    //                             {
    //                                 create_new_tabl_col[counter_col] = element_se.session_date; 
    //                                 create_new_tabl_col[counter_col+1] = element_se.session_num; 
    
    //                                 All_table_obj.tables[10].forEach(element_em => {
    //                                     if(element_se.employee_id == element_em.id )
    //                                     {
    //                                         create_new_tabl_col[counter_col+2] = element_em.name;
    //                                         return false;
    //                                     }
    //                                 });
    
    //                                 check_lock = true;
    //                                 return false;
    //                             }
        
    //                         })
                        
    
    //                 }

    //             }

    //         }

    //         create_new_tabl_col[counter_col] = all_created + ` - Created SE`; counter_col++;
    //         create_new_tabl_col[counter_col] = count_comp + ` - Ended SE`; counter_col++;
    //         create_new_tabl_col[counter_col] = Non_att + ` - Remains SE`; counter_col++;

    //         create_new_tabl_col[counter_col] = (Att+Abs) + ` - Completed SE`; counter_col++;
    //         create_new_tabl_col[counter_col] = Abs + ` - Absence SE`; counter_col++;
    //         create_new_tabl_col[counter_col] = Att + ` - Attended SE`; counter_col++;
    //         create_new_tabl_col[counter_col] = (Feed) + ` - Feedbacks SE`; counter_col++;



    //         if(count_comp - (Att + Abs))
    //         {
    //             create_new_tabl_col[counter_col] = `<label style='color:red'>Not Updated Attendance</label>`;counter_col++;
    //         }
    //         else
    //         {
    //             create_new_tabl_col[counter_col] = '';counter_col++;
    //         }


    //         if(Att - Feed > 0)
    //         {
    //             create_new_tabl_col[counter_col] = `<label style='color:red'>Not Updated Feedback</label>`;counter_col++;
    //         }
    //         else
    //         {
    //             create_new_tabl_col[counter_col] = '';counter_col++;
    //         }

    //         create_new_tabl_col[counter_col] = 'No Date'; 
    //         create_new_tabl_col[counter_col+1] = 'No Sessions'; 
    //         create_new_tabl_col[counter_col+2] = 'No Instructor'; 
    //         var check_lock = false;


    //         counter_col +=3;
            


    //         create_new_tabl_col[counter_col] = students_sessions; counter_col++;



    //         create_new_tabl_rows[counter] = create_new_tabl_col;counter++;

    //     }

    // }

    // func(create_new_tabl_rows);
    Loading_page_clear();

}

 async function create_paper_table_parent_students(all_tables)
 {
    Loading_page_clear();





            // for(var ret = 0 ; ret < all_tables.length ; ret++ )
            // {

            //     all_tables[ret][26] = [];
            
            //     all_tables[ret][26] = all_tables[ret][23];

            //     all_tables[ret][23] = "0 Task/s"
            //     all_tables[ret][24] = 0
            //     all_tables[ret][25] = 0


            //     all_tables[ret][27] = {};

            //     all_tables[ret][27].tasks = []
            //     all_tables[ret][27].tasks_count = 0
            //     for(var i = 0 ; i < all_tables[ret][26].length ; i++)
            //     {
    
            //         if(get_se_task_arr)
            //         {
            //             get_se_task_arr.forEach(element => {
            //                 if(Number(all_tables[ret][26][i].session_id) == Number(element.session_id) )
            //                 {
                                
            //                     get_tasks_arr.forEach(element_task => {
            //                         if(Number(element_task.id)== Number(element.task_id) )
            //                         {
    
            //                             element_task.session_id = element.session_id;
            //                             element_task.att_id = all_tables[ret][26][i].id;
            //                             element_task.st_answer = '';
            //                             element_task.st_ans_cor = '';
    
            //                             if(get_ans_arr)
            //                             {
            //                                 get_ans_arr.forEach(element_ts_att => {
            //                                     if(Number(all_tables[ret][26][i].id) == Number(element_ts_att.att_feed_id) && Number(element_task.id) ==  Number(element_ts_att.tasks_id))
            //                                     {
            //                                         element_task.st_answer = element_ts_att.answer;
            //                                         element_task.st_ans_cor = element_ts_att.correct;


            //                                         if(element_task.st_ans_cor = element_ts_att.correct == 'Right')
            //                                         {
            //                                             all_tables[ret][24]++;
            //                                         }
            //                                         else if(element_task.st_ans_cor = element_ts_att.correct == 'Wrong')
            //                                         {
            //                                             all_tables[ret][25]++;

            //                                         }
            //                                     }
            //                                 }
            //                                 )
            //                             }
                                        
            //                             all_tables[ret][27].tasks[all_tables[ret][27].tasks_count] = element_task;
            //                             all_tables[ret][27].tasks_count++;
            //                             all_tables[ret][23] = all_tables[ret][27].tasks_count + ` Task/s`;
    
            //                         }
            //                     }
            //                     )
    
    
            //                 }
            //             }
            //             )
            //         }
    
            //     }
            //     var saved_res = all_tables[ret][24] + all_tables[ret][25];

            //     if(saved_res)
            //     {
            //         var saved_per = Number(all_tables[ret][24])/ saved_res;
            //         all_tables[ret][25] = (saved_per * 100).toFixed(2) + "%";
            //     }
            //     else
            //     {
            //         all_tables[ret][25] = "0 %";

            //     }
            //     all_tables[ret][24] = saved_res + " Completed";

                
            // }



        
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
    , "Sales Agent:"
    , "CS Agent:"
    , ""
    , ""
    , ""
    , ""
    , ""
    , ""
    , ""
    , ""
    , ""
    , "Next Session Date : "
    , "Next Session Num : "
    , "Next Session Inst : "



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

    var all_tables_arr = assigned_agent_parent_page(all_tables);

    if($('#reg_input').val() != '')
    {
        
        var result__ = Search_for_value(all_tables_arr ,$('#reg_input').val() );
        all_tables_arr = [];
        all_tables_arr = result__;
        $('#reg_input').val('');
    }
    else if($('#not_reg_input').val() != '')
    {
        var result__ = Search_for_value(all_tables_arr ,$('#not_reg_input').val() );
        all_tables_arr = [];
        all_tables_arr = result__;
        $('#not_reg_input').val('');
    }
    var limit_count  = 0;

    if(all_tables_arr && all_tables_arr !== undefined && all_tables_arr.length != 0)
    {
        limit_count  = all_tables_arr[0].length-2
    }
    

    var values_ = document.getElementById("search_all").value;

    if(values_ == "")
    {
       All_data_obj.Start_Index = 1;
       $('#counter_id').val(all_tables_arr.length)

       createTable(all_tables_arr ,All_data_obj , 'clear' , 9 , 5 , "open 2" , create_view_student , limit_count); 
 
       return;
    }
 
     var result = Search_for_value(all_tables_arr , values_)
         
     $('#counter_id').val(result.length)

    createTable(result ,All_data_obj , 'clear' , 9 , 5 , "open 2" , create_view_student , result[0].length-2); 

}


function create_view_student(All_data_obj , End_Index)
{


    var div = document.getElementById("search-results_1");
    div.innerHTML = '';
    for(var index = All_data_obj.Start_Index-1 ; index < End_Index ; index++)
    {

       if(All_data_obj.obj_data[index][27].tasks_count) 
       {
            $("#view_more_2"+index).show();
       }

        $("#view_more_2"+index).click(async function() {

            Loading_page_set();


            var id = this.id;
            var ret = id.replace('view_more_2','');
            var div = document.getElementById("search-results_1");
            div.innerHTML = '';
            modal.style.display = "block";

            createTable_pop_up_tasks_st(All_data_obj.obj_data[ret][27] , All_data_obj.obj_data[ret]);


            Loading_page_clear();

        }
        )

        var btn = document.getElementById(All_data_obj.view_index[index]);

        All_data_obj.saved_index = index;

        btn.onclick = function() {
            Loading_page_set();

            var id = this.id;
            var ret = id.replace('view_more_','');

            var div = document.getElementById("search-results_1");
            div.innerHTML = '';
          modal.style.display = "block";

        var data_arr = [];

        var index_ret = 26

        if(All_data_obj.obj_data[ret][index_ret] && All_data_obj.obj_data[ret][index_ret] !== undefined && All_data_obj.obj_data[ret][index_ret].length != 0)
    {
        for(var index = 0 ; index < All_data_obj.obj_data[ret][index_ret].length ; index++)
        {  
            var inner_arr = []
            var index_count = 0;

            inner_arr[index_count] =  All_data_obj.obj_data[ret][index_ret][index].session_id;index_count++;
            inner_arr[index_count] =  All_data_obj.obj_data[ret][index_ret][index].student_id;index_count++;

            if(saved_student_arr&& saved_student_arr!== undefined && saved_student_arr.length != 0)
            {        
                for(var index_11 = 0 ; index_11 < saved_student_arr.length ; index_11++)
                {
                    if(All_data_obj.obj_data[ret][index_ret][index].student_id == saved_student_arr[index_11].id)
                    {
                        inner_arr[index_count] =  saved_student_arr[index_11].name;index_count++;
                        break;
                    }
                }
            }
            inner_arr[index_count] =  All_data_obj.obj_data[ret][index_ret][index].attendance;index_count++;
            inner_arr[index_count] =  All_data_obj.obj_data[ret][index_ret][index].feedback;index_count++;

            if(saved_sessions_id_arr&& saved_sessions_id_arr!== undefined && saved_sessions_id_arr.length != 0)
            {        
                for(var index_9 = 0 ; index_9 < saved_sessions_id_arr.length ; index_9++)
                {
                    if(All_data_obj.obj_data[ret][index_ret][index].session_id == saved_sessions_id_arr[index_9].id)
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

                        inner_arr[index_count] =  All_data_obj.obj_data[ret][index_ret][index].id;index_count++;


                    }
                }
            }

            data_arr[index] = inner_arr;
        }

        createTable_pop_up_students(data_arr , null , End_Index);
    }

    Loading_page_clear();

        }

    }
}


function create_paper_table_customized_student(all_tables)
{

    Loading_page_clear();
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
    , ""
    , ""
    , ""
    , ""
    , ""
    , ""
    , ""
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
    All_data_obj.view_index = [];
    All_data_obj.index_num_value = [];
    All_data_obj.obj;
    All_data_obj.obj_data = [];
    All_data_obj.saved_index ;

   var values_ = document.getElementById("search_all").value;

   if(values_ == "")
   {
      All_data_obj.Start_Index = 1;
      createTable(all_tables ,All_data_obj , 'clear' , 8 , 5 , "open" , create_view_student , all_tables[0].length-1); 

      return;
   }

    var result = Search_for_value(all_tables , values_)
        
   createTable(result ,All_data_obj , 'clear' , 8 , 5 , "open" , create_view_student , result[0].length-1); 

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
  <select class='col-2 select2' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}


function paper_inner_parent_1_hidden (paper_ , title)
{

  document.getElementById("Location_2").innerHTML += `<div hidden><label for="`+paper_+`">`+title+`:</label>
  <select class='col-2 select2' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select></div>` ;
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
    var saved_age_value = '';
    for(var index = 0 ; index < get_group_info.length ; index++){

        create_new_tabl_cols = [];
        counter = 0;

        var string_collect = '';

        create_new_tabl_cols[counter] = get_group_info[index][0];counter++;

        
        return_search[index] = get_group_info[index][9];
        var test_return = [];
        test_return[0] = return_search[index];

        var return_data = search_for_data(All_table_obj.tables[3] , test_return , 0 , 2 );

        string_collect += return_data[0];
        saved_age_value = return_data[0];

        return_search = [];

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


        
        create_new_tabl_cols[counter] = string_collect;counter++;
        create_new_tabl_cols[counter] = saved_age_value;

        
        if(counter__ < 6)
        {
            create_new_tabl_rows[special_counter] = create_new_tabl_cols;
            special_counter++;

        }
    }

    saved_group_arr = create_new_tabl_rows;

}



function createTable_pop_up_tasks_st(All_data_obj , All_data_obj_tasks  ) {

    var dataArray = All_data_obj;

if(Object.values(dataArray) && Object.values(dataArray) !== undefined && Object.values(dataArray).length != 0){

  if(dataArray.tasks_count){

    var result = "<table class='table' id='dtable'>"+
                 "<thead   style='white-space:wrap' >"+
                   "<tr>";                               //Change table headings to match witht he Google Sheet     
                   result +="<th scope='col'>Session </th>";
                   result +="<th scope='col'>Questions </th>";
                   result +="<th scope='col'>Action </th>";
              result += "</tr>"+
                        "</thead>";

                    for(var index = 0 ; index < dataArray.tasks.length ; index++)
                    {
                      
                        
                        result += "<tr>";

                        result += "<td >";     

                        result += `ID : ${dataArray.tasks[index].session_id} <br>`;     
                        result += `Session : ${dataArray.tasks[index].session_num} <br>`;     
                        result += `Age : ${dataArray.tasks[index].age_id} <br>`;     
                        result += `Level : ${dataArray.tasks[index].level_id} <br>`;     
                        result += `Type : ${dataArray.tasks[index].session_type_id} <br>`;     

                        result +="</td>"

                        result += "<td >";     

                        result += `Question : ${dataArray.tasks[index].question}`;

                        if(dataArray.tasks[index].st_answer == "")
                        {

                            if( dataArray.tasks[index].type  == "multi")
                            {
                                result += ` <br><br>
                                <input type="radio" id="option1_id${index}" name="option_id${index}" value="${dataArray.tasks[index].option1}">
                                <label for="${dataArray.tasks[index].option1}">${dataArray.tasks[index].option1}</label><br>
                                <input type="radio" id="option2_id${index}" name="option_id${index}" value="${dataArray.tasks[index].option2}">
                                <label for="${dataArray.tasks[index].option2}">${dataArray.tasks[index].option2}</label><br>
                                <input type="radio" id="option3_id${index}" name="option_id${index}" value="${dataArray.tasks[index].option3}">
                                <label for="${dataArray.tasks[index].option3}">${dataArray.tasks[index].option3}</label>
                                `;     
                            }
                            else if(dataArray.tasks[index].type  == "tf")
                            {
                                result += ` <br><br>
                                <input type="radio" id="option1_id${index}" name="option_id${index}" value="${dataArray.tasks[index].option1}">
                                <label for="${dataArray.tasks[index].option1}">${dataArray.tasks[index].option1}</label><br>
                                <input type="radio" id="option2_id${index}" name="option_id${index}" value="${dataArray.tasks[index].option2}">
                                <label for="${dataArray.tasks[index].option2}">${dataArray.tasks[index].option2}</label><br>
                                `;     
                            }     

                        }
                        else
                        {
                            result += `<br>Right Answer :<label style='color:green' > ${dataArray.tasks[index][dataArray.tasks[index].correct]} </label> <br>`;
                            
                            result += "</td >";     

                            result += "<td >";     

                            result += `Student Choice :<label style='color:gray' > ${dataArray.tasks[index].st_answer} </label> <br>`;
                            if(dataArray.tasks[index][dataArray.tasks[index].correct] == dataArray.tasks[index].st_answer)
                            {
                                result += `Answer Status :<label style='color:green' > Right</label>`;
                            }
                            else if(dataArray.tasks[index][dataArray.tasks[index].correct] != dataArray.tasks[index].st_answer)
                            {
                                result += `Answer Status :<label style='color:red' > Wrong</label> <br><br>`;
                            }

                        }


                        
                        result +="</td>"

                        if(dataArray.tasks[index].st_answer == "")
                        {
                            result += "<td >";     
                        }
                        result += `<button  type="button" id='send_att_feed${index}' class="btn btn-light" style='float:center;display:none'><i class="fa-solid fa-circle-arrow-right"></i></button>`               
                        if(dataArray.tasks[index].st_answer == "")
                        {
                            result +="</td>"
                        }

                        result += "</tr>";

                    }
                  
            //   }
                 
    result += "</table>";
    var div = document.getElementById("search-results_1");
    div.innerHTML = result;
    for(var index = 0 ; index < dataArray.tasks.length ; index++)
    {

        if(dataArray.tasks[index].st_answer == '')
        {
            $('#send_att_feed'+index).show();
        }

        $('#send_att_feed'+index).click(async function () {  


            Loading_page_set();
            var id = this.id;
            var ret = id.replace('send_att_feed','');

            if (confirm("Updated task ?") == true) {

                if( $('input[name="option_id'+ret+'"]:checked').val() == undefined)
                {
                    alert("Please Select Value")
                    Loading_page_clear();

                    return;
                }

                var result_ans = 'Wrong'
                if($('input[name="option_id'+ret+'"]:checked').val() == All_data_obj_tasks[27].tasks[ret][All_data_obj_tasks[27].tasks[ret].correct])
                {
                    result_ans = 'Right'
                }

                await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'students_ans' , 
                [
                    'att_feed_id',
                    'tasks_id',
                    'answer',
                    'correct'
                ]
                ,
                [
                    All_data_obj_tasks[27].tasks[ret].att_id,
                    All_data_obj_tasks[27].tasks[ret].id,
                    $('input[name="option_id'+ret+'"]:checked').val(),
                    result_ans
                ]
                );

                $('#send_att_feed'+ret).hide();
                Loading_page_clear();
                ADD_NEW_STUDENT();
  

            }
            else{
                Loading_page_clear();

            }

        });
    }

  }else{
    var div = document.getElementById("search-results_1");
    div.innerHTML = "<h3 style='text-align:center;color:red;'>No Tasks<h3>";
  }
    }else{
        var div = document.getElementById("search-results_1");
        div.innerHTML = "<h3 style='text-align:center;color:green;'>No Tasks<h3>";
    }

}




function createTable_pop_up_students(All_data_obj , All_req_obj  , End_Index) {

    var dataArray = All_data_obj;


  if(dataArray && dataArray !== undefined && dataArray.length != 0){

    var result = "<table class='table' id='dtable'>"+
                 "<thead   style='white-space:wrap' >"+
                   "<tr>";                               //Change table headings to match witht he Google Sheet     
                   result +="<th scope='col'>Session ID </th>";
                   result +="<th scope='col'>Student ID </th>";
                   result +="<th scope='col'>Attendance </th>";
                   result +="<th scope='col'>Feeback </th>";
                   result +="<th scope='col'>Send button </th>";

              result += "</tr>"+
                        "</thead>";

                    for(var index = 0 ; index < dataArray.length ; index++)
                    {
                        result += "<tr>";
                        result += "<td style='white-space:wrap' >";
                        result += `Session ID : ${dataArray[index][0]}` 
                        result += `<br>Group ID : ${dataArray[index][5]}` 
                        if(new Date() > new Date(dataArray[index][8]))
                        {
                            result += `<br>Session Date : <label style='color:green'> ${dataArray[index][8]} </label>` 
                            result += `<br>Session Status : <label style='color:green'> ENDED </label>` 
                        }
                        else if(new Date() < new Date(dataArray[index][8]))
                        {
                            result += `<br>Session Date : <label style='color:red'> ${dataArray[index][8]} </label>` 
                            result += `<br>Session Status : <label style='color:red'> UPCOMING </label>`       
                        }
                        else
                        {
                            result += `<br>Session Date : <label style='color:blue'> ${dataArray[index][8]} </label>` 
                            result += `<br>Session Status : <label style='color:blue'> running today </label>`       
                        }

                        result += `<br>Session Num : ${dataArray[index][9]}` 
                        result +="</td>"
                        result += "<td style='white-space:wrap' >";
                        result += `Student ID : ${dataArray[index][1]}`   
                        result += `<br>Student Name : ${dataArray[index][2]}`    
                        result += `<br>Instructor ID : ${dataArray[index][6]}`   
                        result += `<br>Instructor Name : ${dataArray[index][11]}`   
                        result +="</td>"
                        result += "<td style='white-space:wrap' >";   
                        if(new Date() < new Date(dataArray[index][8]))
                        {


                            result += `<label style='color:red'>UPCOMING ATTENDANCE</label>`
                        }
                        else
                        {
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

                        }

                        result +="</td>"
                        result += "<td style='white-space:wrap' >";  
                        if(new Date() < new Date(dataArray[index][8]))
                        {     
                            result += `<label style='color:red'>UPCOMING FEEDBACK</label>`
                        }
                        else
                        {
                            
                            if(dataArray[index][4] != "")
                            result += `Feeback : <textarea id='feed_id_${index}' style='float:right' rows="4" cols="30"> ${dataArray[index][4]} </textarea> `;
                            else
                            result += `Feeback : <textarea id='feed_id_${index}' style='float:right' rows="4" cols="30"></textarea> `;
                        }

                        

                        result +="</td>"
                        result += "<td style='white-space:wrap' >";     
                                //  Tiger
                                if(new Date() < new Date(dataArray[index][8]))
                                {     
                                }
                                else
                                {
                                    result += `<button  type="button" id='send_att_feed${index}' class="btn btn-light" style='float:right'><i class="fa-solid fa-circle-arrow-right"></i></button>`               

                                }
                        result +="</td>"
                        result += "</tr>";

                    }
                  
            //   }
                 
    result += "</table>";
    var div = document.getElementById("search-results_1");
    div.innerHTML = result;
    for(var index = 0 ; index < dataArray.length ; index++)
    {
        $('#send_att_feed'+index).click(async function () {  

            var id = this.id;
            var ret = id.replace('send_att_feed','');

            if (confirm("Updated Student ?") == true) {
                dataArray[ret][3] = document.getElementById('att_id_'+ret).value;
                dataArray[ret][4] = document.getElementById('feed_id_'+ret).value;

                var COL_DATA =  "attendance='"+dataArray[ret][3]+"' , feedback='"+dataArray[ret][4]+"'";

                var res = await UPDATE_DATA_TABLES_ONE_COL(database_fixed_link , 'att_feed' , dataArray[ret][12]  , COL_DATA);
                ADD_NEW_STUDENT();

            }
            else{

            }

        });
    }

  }else{
    var div = document.getElementById("search-results_1");
    div.innerHTML = "<h3 style='text-align:center;color:green;'>Attendance / Feedback Uptodate<h3>";
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
                     , "marketing_id" 
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





            };
            update_one_data_from_database(All_data_obj_ , COL_DATA)

}



function add_student_to_group_(All_req_obj,paper_inputs , student_id , group_id_value , student_age  )
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

       var value_elments = [];
            value_elments[0] = group_id_value;
            value_elments[1] = student_id ;
            value_elments[2] = 'active';

            if(value_elments[0] == "")
            {
                alert("Parent Add Successfully - Student Add Successfully - No group" , "primary");
                ADD_NEW_STUDENT();
                return ;
            }

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
            
                  All_data_obj.callbackfunc = function(All_data_obj, response)
                {

                    var counter_full_check = 0;

                    if(All_data_obj.obj && All_data_obj.obj !== undefined && All_data_obj.obj.length != 0)
                    {
                        for(var index = 0 ; index < All_data_obj.obj.length ; index ++)
                        {
                            if(value_elments[0] == All_data_obj.obj[index].groups_id && 'active' == All_data_obj.obj[index].status)
                            {
                                counter_full_check++;
                            }
    
                        }
                    }
                        if(age_range < compare)
                        {
                            alert("Parent Add Successfully - Student Add Successfully - Student too Young to join Group" , "danger");
                            ADD_NEW_STUDENT();
                            return;
                        }

                        if(counter_full_check >= 6)
                        {
                            alert("Parent Add Successfully - Student Add Successfully - Group Full" , "primary");
                            ADD_NEW_STUDENT();
                            return ;
                        }

                    All_data_obj.callbackfunc = function(All_data_obj , response)
                    {
                        add_student_to_group_Sessions(All_req_obj,paper_inputs , group_id_value , student_id);

                    };
                    add_one_data_from_database(All_data_obj , value_elments);
                    
                };
                get_all_data_from_database(All_data_obj);
}

function add_student_to_group_Sessions(All_req_obj,paper_inputs , group_id_value , student_id)
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
                ADD_NEW_STUDENT();
            };
            add_one_data_from_database(All_data_obj , value_elments);
        }
       }
       



}


function add_new_student_package_parent(All_req_obj,paper_inputs , student_id , package_id_value , student_package_date , return_ , package_id_value_count )
{
    
    var Database_link = database_fixed_link

    var inputs_col = 
    [
     "student_id" 
     ,"package_id" 
    ];
    
    var inputs_check = ["Group missing" , "Student missing"];

    var called_table = 'student_package';

      var arr_data = []

        const All_data_obj = {};
        All_data_obj.table_ = called_table;
        All_data_obj.inputs_col_ = inputs_col;
        All_data_obj.inputs_check_ = inputs_check;
        All_data_obj.Database_link = Database_link;
        All_data_obj.callbackfunc;
        All_data_obj.callbackfunc_1;
        All_data_obj.obj;


             var value_elments = [];
             var check_full = false;
             var getin = false;

             value_elments[0] = student_id;
             value_elments[1] = package_id_value;


                All_data_obj.callbackfunc = async function(All_data_obj , response)
                {
                    var get_last_package_student_id = await GET_DATA_TABLES(database_fixed_link , "student_package");
                    
                    add_new_student_getpackage_parent( All_req_obj,paper_inputs , package_id_value , value_elments[0] , student_package_date , return_ , get_last_package_student_id[get_last_package_student_id.length-1].id);
                };
                add_one_data_from_database(All_data_obj , value_elments);

        
}

function add_new_student_getpackage_parent(All_req_obj,paper_inputs , package_id , st_id , student_package_date , return_ , id_st_pc)
{
    
    var Database_link = database_fixed_link

    var inputs_col = 
    [
        "name"
        ,"fees"
        ,"quota"
        ,"discount"
        ,"installments"
        ,"paid_as"
    ];
    
    var inputs_check = ["Group missing" , "Student missing"];

    var called_table = 'package';

      var arr_data = []

        const All_data_obj = {};
        All_data_obj.table_ = called_table;
        All_data_obj.inputs_col_ = inputs_col;
        All_data_obj.inputs_check_ = inputs_check;
        All_data_obj.Database_link = Database_link;
        All_data_obj.callbackfunc;
        All_data_obj.callbackfunc_1;
        All_data_obj.obj;
        All_data_obj.index_num = Number(package_id);

             var value_elments = [];
             var check_full = false;
             var getin = false;

            All_data_obj.callbackfunc = function(All_data_obj, response)
            {
                add_new_student_invoice_parent(All_req_obj,paper_inputs , All_data_obj.obj , st_id , student_package_date , return_ , id_st_pc)
            };
             get_one_data_from_database(All_data_obj);

}

function add_new_student_invoice_parent(All_req_obj,paper_inputs , All_data_obj_obj , st_id , student_package_date , return_ , id_st_pc)
{
    
    var Database_link = database_fixed_link

    var inputs_col = 
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

    ];
    
    var inputs_check = ["Group missing" , "Student missing"];

    var called_table = 'invoice';

      var arr_data = []

        const All_data_obj = {};
        All_data_obj.table_ = called_table;
        All_data_obj.inputs_col_ = inputs_col;
        All_data_obj.inputs_check_ = inputs_check;
        All_data_obj.Database_link = Database_link;
        All_data_obj.callbackfunc;
        All_data_obj.callbackfunc_1;
        All_data_obj.obj;


             var value_elments = [];

             var count = All_data_obj_obj.installments;

             var qouta = Number(All_data_obj_obj.quota) / Number(All_data_obj_obj.installments);



             value_elments[0] = st_id;
             value_elments[1] = All_data_obj_obj.fees;
             value_elments[2] = All_data_obj_obj.paid_as;
             value_elments[3] = 'done';
             value_elments[4] = student_package_date;
             value_elments[5] = student_package_date;
             value_elments[6] = 0;
             value_elments[7] = '';
             value_elments[8] = id_st_pc;
             value_elments[9] = qouta;
             value_elments[10] = 0;


             var date_day = Todate_schedule_sessions(student_package_date)[1];
             var date_Month = Todate_schedule_sessions(student_package_date)[2];
             var date_Year = Todate_schedule_sessions(student_package_date)[4];

    for(var index = 0 ; index < count ; index++)
    {
     All_data_obj.callbackfunc = function(All_data_obj , response)
        {
            if(return_)
            {
                ADD_NEW_STUDENT();
            }
            else
            {
                ADD_NEW_STUDENT();
            }

        };
     add_one_data_from_database(All_data_obj , value_elments);
     date_Month++;

     var Date_ = Todate_schedule_sessions(null , date_day , date_Month ,date_Year);
     date_day = Date_[1];
     date_Month = Date_[2];
     date_Year = Date_[4];
     
     value_elments = []
     value_elments[0] = st_id;
     value_elments[1] = 0;
     value_elments[2] = All_data_obj_obj.paid_as;
     value_elments[3] = 'waiting';
     value_elments[4] = Date_[0];
     value_elments[5] = '';
     value_elments[6] = 0;
     value_elments[7] = '';
     value_elments[8] = id_st_pc;
     value_elments[9] = qouta;
     value_elments[10] = 0;

    }
}