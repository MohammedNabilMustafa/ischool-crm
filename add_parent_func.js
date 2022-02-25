

var st_ids = 0;
var saved_group_arr = []
var saved_package_arr = []
var student_id_counter = 0;
var student_id_counter_saved = 0;
var student_id_counter_saved_deduct = 0;
var saved_age_arr = []
var saved_status_arr = []
var saved_sessions_id_arr = []
var saved_att_feed_id_arr = []

function ADD_NEW_PARENT_GROUPS()
{

     st_ids = 0;
     saved_group_arr = []
     saved_package_arr = []
     student_id_counter = 0;
     student_id_counter_saved = 0;
     student_id_counter_saved_deduct = 0;
     saved_age_arr = []
     saved_status_arr = []
     saved_sessions_id_arr = []
     saved_att_feed_id_arr = []

    var Database_link = database_fixed_link
    var inputs_col = [["name" , "slot" ],
    ["name"],
    ["name"],
    ["name"],
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
    ["name"],
    ["student_id" 
    , "package_id" 
    ],
    ["name" 
    , "fees" 
    , "quota" 
    , "discount" 
    , "installments" 
    , "paid_as" 
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
  ["student_id" 
  ,"session_id" 
  ,"attendance" 
  ,"feedback" 
],
["groups_id" 
,"employee_id" 
,"zoomlink" 
,"session_date" 
,"session_num" 
,"open_by"
]
    

  ];

var called_table = ['slots',
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
      'operation_status',
      'student_package',
      'package',
      'invoice',
      'att_feed',
      'sessions'
  ];

        const All_req_obj_ = {};
        All_req_obj_.Database_link = Database_link
        All_req_obj_.inputs_col = inputs_col
        All_req_obj_.called_table = called_table
                 
  
        get_all_data_arr(All_req_obj_ ,quary_tables_all_status_groups_check , '' , time_out  , 0);

}

function ADD_NEW_PARENT()
{
    saved_group_arr = []
    saved_age_arr = []

    st_ids = 0;
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    document.getElementById("search-results").innerHTML = "";

    var Database_link = database_fixed_link
    var inputs_col = [
        ["name"],
        ["name"],
        ["name"],
        ["name" 
        , "phone" 
        , "email" 
        , "zoomlink" 
        , "username" 
        , "password" 
        , "permission_id" 
        , "department_id" 
        , "role_id" 
         ],
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
          ["name"],
          ["name"],
          ["name"],
          ["name"],
          ["name"],
          ["name"],
          ["name"],
          ["student_id" 
          , "package_id" 
          ],
          ["name" 
          , "fees" 
          , "quota" 
          , "discount" 
          , "installments" 
          , "paid_as" 
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
        ]
      ];

var called_table = ['permission',
          'department',
          'role',
          'employee',
          'parent',
          'students',
          'groups',
          'age',
          'student_groups',
          'operation_status',
          'slots',
          'lan',
          'attend',
          'level',
          'track',
          'session_type',
          'days',
          'age',
          'student_package',
          'package',
          'invoice'
      ];

var paper_inputs = [
          'name_input' , 
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


      ADD_NEW_PARENT_GROUPS();



        const All_req_obj = {};
        All_req_obj.Database_link = Database_link
        All_req_obj.inputs_col = inputs_col
        All_req_obj.called_table = called_table
                 
    html_create_lists_parent(paper_inputs , paper_inputs_label , "Location_1" );
    // get_all_data_arr(All_req_obj ,quary_tables_all_employee , quary_tables_all_status_parent , time_out  , 0);


    add_new_parent_(All_req_obj,paper_inputs);
    get_all_data_arr(All_req_obj ,quary_tables_all_parent,create_paper_table_parent , time_out , 1);

    $('#search_btn').click(function (index) {  

        get_all_data_arr(All_req_obj ,quary_tables_all_parent,create_paper_table_customized_parent , time_out , 2);
        });
  
    $('#add_student_new').click(function () {  

        html_create_lists_student_num(All_req_obj,paper_inputs ,"Location_2" , st_ids);
        st_ids++;
    });



        // $('#send_group').click(function () {

        // ADD_PARENT_SENRIO(paper_inputs);
        // });


}

function html_create_lists_student_num(All_req_obj , paper_inputs ,location_ , st_ids_)
{
    document.getElementById(location_).innerHTML +=`<div id='add_std_${st_ids_}'>`;
    document.getElementById(location_).innerHTML +=`</div>`;


    document.getElementById('add_std_'+st_ids_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;


    document.getElementById('add_std_'+st_ids_).innerHTML += `<label>Student ID : </label><input type='text' id='student_id`+st_ids_+`'>`;
    document.getElementById('add_std_'+st_ids_).innerHTML += `<label>Name : </label><input type='text' id='name_id`+st_ids_+`'>`;

    document.getElementById('add_std_'+st_ids_).innerHTML +=`</div></div>`;
    document.getElementById('add_std_'+st_ids_).innerHTML += `<label>Free Session : </label><input class="largerCheckbox" type='checkbox' id='free_id`+st_ids_+`' value='yes'>`;
//     document.getElementById('add_std_'+st_ids_).innerHTML += `<button type="button" id='add_std_btn_${st_ids_}' class="btn btn-light" style='float:right;font-size:25px'>
//     <i class="fa-solid fa-circle-minus"></i>
//   </button>`;

    document.getElementById('add_std_'+st_ids_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    document.getElementById('add_std_'+st_ids_).innerHTML += `<label>birthdate : </label><input type='date' id='bd_id`+st_ids_+`'>`;
    paper_inner_parent_1_func('status_id'+st_ids_ , "Status " , 'add_std_'+st_ids_);

    for(var index = 0 ;index < saved_status_arr.length ; index++)
    {
        $('#status_id'+st_ids_).append(`<option value="${saved_status_arr[index][0]}"
        >${saved_status_arr[index][1]} </option>`); 
    }
    document.getElementById('add_std_'+st_ids_).innerHTML +=`</div></div>`;

    paper_inner_parent_1_func('Packages_id_input'+st_ids_ , "Packages " , 'add_std_'+st_ids_);

    for(var index = 0 ;index < saved_package_arr.length ; index++)
    {
        $('#Packages_id_input'+st_ids_).append(`<option value="${saved_package_arr[index][0]}"
        >${saved_package_arr[index][1]} </option>`); 
    }

    document.getElementById('add_std_'+st_ids_).innerHTML +=`<label>Paid Date : </label><input type='date' id='package_data_${st_ids_}' />`;


    paper_inner_parent_1_func('groups_id_input'+st_ids_ , "Groups " , 'add_std_'+st_ids_);

    for(var index = 0 ;index < saved_group_arr.length ; index++)
    {
        $('#groups_id_input'+st_ids_).append(`<option value="${saved_group_arr[index][0]}"
        >${saved_group_arr[index][1]} </option>`); 
    }




    document.getElementById('add_std_'+st_ids_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    document.getElementById('add_std_'+st_ids_).innerHTML +=`<hr class="hr-primary" />`;
    document.getElementById('add_std_'+st_ids_).innerHTML +=`</div></div>`;


    $('#add_std_btn_'+st_ids_).click(function () {  

        var id = this.id;
        var ret = id.replace('add_std_btn_','');

        // document.getElementById("add_std_"+ret).innerHTML = "";
        // st_ids--;
    });


}

function html_create_lists_parent(paper_inputs , paper_inputs_label  , location_)
{
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    document.getElementById("search-results").innerHTML = `<div class="loader" ></div>`;



    //  `<div class='col justify-content-start'><button class='btn btn-danger' style='float:left;' id='add_back'>BACK</button></div>`;
    
    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    for(var index = 0 ; index < 3 ; index++)
    {
        document.getElementById(location_).innerHTML += `<label>`+paper_inputs_label[index]+` </label><input type='text' id='`+paper_inputs[index]+`'>`;
    }
    document.getElementById(location_).innerHTML +=`</div></div>`;

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    for(var index = 3 ; index < 6 ; index++)
    {
        document.getElementById(location_).innerHTML += `<label>`+paper_inputs_label[index]+` </label><input type='text' id='`+paper_inputs[index]+`'>`;
    }
    document.getElementById(location_).innerHTML +=`</div></div>`;

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    for(var index = 6 ; index < 10 ; index++)
    {
        document.getElementById(location_).innerHTML += `<label>`+paper_inputs_label[index]+` </label><input type='text' id='`+paper_inputs[index]+`'>`;
    }
    document.getElementById(location_).innerHTML +=`</div></div>`;

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    for(var index = 10 ; index < 12 ; index++)
    {
        paper_inner_parent(paper_inputs[index] , paper_inputs_label[index]);
    }
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

  document.getElementById(location_).innerHTML +=`<div class='col justify-content-start'><button class='btn btn-primary' style='float:left;' id='add_student_new'>+ ADD Student</button></div><br>`;
    
  document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById(location_).innerHTML +=`<hr class="hr-primary" />`;
  document.getElementById(location_).innerHTML +=`</div></div>`;

}

function add_new_parent_(All_req_obj,paper_inputs )
{
    
    var Database_link = database_fixed_link

    var inputs_col = 
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
];
    
    var inputs_check = ["Name missing" , "Phone missing" , "Email missing"];

    var called_table = 'parent';


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

            for(var index = 0 ;index < 3 ; index++)
            {
                if(value_elments[index] == "")
                {
                    alert(All_data_obj.inputs_check_[index] , "danger");
                    return;
                }
            }

            if(st_ids == 0)
            {
                alert('No Student Added' , "danger");
                return ;
            }


            for(var index = 0 ; index < st_ids ; index++)
            {
        
                var value_elments_ = [];
                value_elments_[0] = document.getElementById('student_id'+index).value;
                value_elments_[1] = document.getElementById('name_id'+index).value;
                value_elments_[2] = document.getElementById('bd_id'+index).value;
                value_elments_[3] = document.getElementById('status_id'+index).value;
                value_elments_[4] = document.getElementById('Packages_id_input'+index).value;
                value_elments_[5] = document.getElementById('package_data_'+index).value;


                var labels = ['Student Id missing' , 'Name missing' , 'Birthdate missing' , 'Status missing' , "Choose Package"]

                for(var i = 0 ; i <value_elments_.length ; i++ )
                {
                    if(value_elments_[i] == '')
                    {
                        alert('Students '+(index+1)+ ' ' + labels[i] , "danger");
                        return ;    
                    }
                }

            }



            All_data_obj.callbackfunc = function(All_data_obj , response)
            {

                All_data_obj.callbackfunc = function(All_data_obj, response)
                {
                    var parent_id =  All_data_obj.obj[All_data_obj.obj.length-1].id;

                    add_new_student(All_req_obj,paper_inputs , parent_id );
                    
                };
                get_all_data_from_database(All_data_obj);


                //get_paper_tables(All_req_obj,quary_tables_all_paper, create_paper_table , 5 , 3);
            };
            add_one_data_from_database(All_data_obj , value_elments);
        
        });
    });
        
}

function add_new_student(All_req_obj,paper_inputs , parent_id )
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



       var value_elments = [];
            value_elments[0] = document.getElementById('student_id'+index).value;
            value_elments[1] = parent_id;
            value_elments[2] = document.getElementById('free_id'+index).value;
            value_elments[3] = document.getElementById('status_id'+index).value;
            value_elments[4] = document.getElementById('name_id'+index).value;
            value_elments[5] = saved_age_range;
            value_elments[6] = document.getElementById('bd_id'+index).value;


            if(value_elments[0] == '' && index == 0)
            {
                alert("Parent Add Successfully - No Student" , "primary");
                ADD_NEW_PARENT();
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
                ADD_NEW_PARENT();
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
                            ADD_NEW_PARENT();
                            return;
                        }

                        if(counter_full_check >= 6)
                        {
                            alert("Parent Add Successfully - Student Add Successfully - Group Full" , "primary");
                            ADD_NEW_PARENT();
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
                alert("Parent Add Successfully - Student Add Successfully - Group Add Successfully - Session Assigned Successfully" , "success");
                ADD_NEW_PARENT();
            };
            add_one_data_from_database(All_data_obj , value_elments);
        }
       }
       



}

function add_new_student_package_parent(All_req_obj,paper_inputs , student_id , package_id_value , student_package_date)
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


                All_data_obj.callbackfunc = function(All_data_obj , response)
                {
                    add_new_student_getpackage_parent( All_req_obj,paper_inputs , value_elments[1] , value_elments[0] , student_package_date);
                };
                add_one_data_from_database(All_data_obj , value_elments);

        
}

function add_new_student_getpackage_parent(All_req_obj,paper_inputs , package_id , st_id , student_package_date)
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
                add_new_student_invoice_parent(All_req_obj,paper_inputs , All_data_obj.obj , st_id , student_package_date)
            };
             get_one_data_from_database(All_data_obj);

}

function add_new_student_invoice_parent(All_req_obj,paper_inputs , All_data_obj_obj , st_id , student_package_date)
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
             value_elments[8] = All_data_obj_obj.id;
             value_elments[9] = qouta;
             value_elments[10] = 0;


             var date_day = Todate_schedule_sessions(student_package_date)[1];
             var date_Month = Todate_schedule_sessions(student_package_date)[2];
             var date_Year = Todate_schedule_sessions(student_package_date)[4];

    for(var index = 0 ; index < count ; index++)
    {
     All_data_obj.callbackfunc = function(All_data_obj , response)
        {
            alert('Package : '+response);
            ADD_NEW_PARENT();
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
     value_elments[8] = All_data_obj_obj.id;
     value_elments[9] = qouta;
     value_elments[10] = 0;

    }
}


 function quary_tables_all_parent(All_table_obj , func)
 {
    var create_new_tabl_rows = []
    var counter = 0;

    var create_new_tabl_rows_emp = []

    if(All_table_obj.tables[3] && All_table_obj.tables[3] !== undefined && All_table_obj.tables[3].length != 0){
    
    for(var index = 0 ; index < All_table_obj.tables[3].length ; index++)
    {
        var create_new_table_cols = []
        var counter = 0;

        create_new_table_cols[counter] = All_table_obj.tables[3][index].id;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[3][index].name;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[3][index].phone;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[3][index].email;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[3][index].zoomlink;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[3][index].username;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[3][index].password;counter++;

        for(var index_ = 0 ; index_ < All_table_obj.tables[0].length ; index_++)
        {
            if(All_table_obj.tables[3][index].permission_id == All_table_obj.tables[0][index_].id)
            {
                
                create_new_table_cols[counter] = All_table_obj.tables[0][index_].name; counter++;
            }
        }

        for(var index_ = 0 ; index_ < All_table_obj.tables[1].length ; index_++)
        {
            if(All_table_obj.tables[3][index].department_id == All_table_obj.tables[1][index_].id)
            {
                create_new_table_cols[counter] = All_table_obj.tables[1][index_].name;counter++;
            }
        }

        for(var index_ = 0 ; index_ < All_table_obj.tables[2].length ; index_++)
        {
            if(All_table_obj.tables[3][index].role_id == All_table_obj.tables[2][index_].id)
            {
                create_new_table_cols[counter] = All_table_obj.tables[2][index_].name;;
            }
        }
        create_new_tabl_rows_emp[index] = create_new_table_cols;
    }
    }
    //func( create_new_tabl_rows );



    if(All_table_obj.tables[4] && All_table_obj.tables[4] !== undefined && All_table_obj.tables[4].length != 0)
    {
        for(var index = 0 ; index < All_table_obj.tables[4].length ; index++)
        {
            counter = 0;
            var Student_id_save = 0;
            var create_new_tabl_cols = []
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].id;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].name;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].phone;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].email;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].name_2;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].phone_2;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].email_2;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].address;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].location;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].job;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].reg_status;counter++;

            var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[3] , 12 , 0 , 2)
            for(var index_ = 0 ; index_ < return_data.length ; index_++)
            {
                create_new_tabl_cols[counter] = return_data[index_];counter++;
            }

            var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[3] , 13 , 0 , 2)
            for(var index_ = 0 ; index_ < return_data.length ; index_++)
            {
                create_new_tabl_cols[counter] = return_data[index_];counter++;
            }

                    var count_arr = [];
                    var count_num = 0;
                    var student_length = 0;
                    if(All_table_obj.tables[5] && All_table_obj.tables[5] !== undefined && All_table_obj.tables[5].length != 0)
                    {

                    var return_data_id = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 0); 
                    count_arr[count_num] = return_data_id;count_num++;
                    Student_id_save = return_data_id;


                    var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 2);
                    student_length = return_data.length;
                    create_new_tabl_cols[counter] = student_length + ` Student/s` ;counter++;
                    count_arr[count_num] = return_data;count_num++;


                    var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 4)
                    count_arr[count_num] = return_data;count_num++;

                    var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 5)
                    var return_data = search_for_data(All_table_obj.tables[9] , return_data , 0 , 2 );
                    count_arr[count_num] = return_data;count_num++;


                    var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 6)
                    count_arr[count_num] = return_data;count_num++;

                    var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 7)
                    count_arr[count_num] = return_data;count_num++;

                    create_new_tabl_cols[counter] = count_arr;counter++;


                    var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 0);


                    var return_data = search_for_data_custom(All_table_obj.tables[8] , return_data , 3 , 2 );

                    var return_data_1 = search_for_data_all(All_table_obj.tables[6] , return_data , 0 , 2 );


                        var count_arr = [];
                        var count_num = 0;
                        var return_data = [];
                        // count_arr[count_num] = 'group_col';count_num++;
                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {
                                return_data[index__] = return_data_1[index__][0];
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];

                        
                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {
                                return_data[index__] = search_for_data_index(All_table_obj.tables[10] , return_data_1[index__][2] , 0 , 3 );
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];

                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {
                                return_data[index__] = search_for_data_index(All_table_obj.tables[11] , return_data_1[index__][3] , 0 , 2 );
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];
    
    
                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {
                                return_data[index__] = search_for_data_index(All_table_obj.tables[12] , return_data_1[index__][4] , 0 , 2 );

                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];

                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {
                                return_data[index__] = search_for_data_index(All_table_obj.tables[13] , return_data_1[index__][5] , 0 , 2 );
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];

                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {                        
                                return_data[index__] = search_for_data_index(All_table_obj.tables[15] , return_data_1[index__][7] , 0 , 2 );
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];

                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {    
                                return_data[index__] = search_for_data_index(All_table_obj.tables[16] , return_data_1[index__][8] , 0 , 2 );
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];
    
                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {                            
                                return_data[index__] = search_for_data_index(All_table_obj.tables[17] , return_data_1[index__][9] , 0 , 2 );
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];



                        
                    var return_data = []
                    if(All_table_obj.tables[18] && All_table_obj.tables[18] !== undefined && All_table_obj.tables[18].length != 0)
                    {
                        var counte_package = 0;
                        for(var index_1 = 0 ; index_1 < return_data_id.length; index_1 ++)
                        {
                            var all_student_package = []
                            for(var index_2 = 0 ; index_2 < All_table_obj.tables[18].length; index_2++)
                            {
                                var package_arr = [];

                                if(All_table_obj.tables[18][index_2].student_id == return_data_id[index_1])
                                {
                                    package_arr[0] = All_table_obj.tables[18][index_2].id;

                                    if(All_table_obj.tables[19] && All_table_obj.tables[19] !== undefined && All_table_obj.tables[19].length != 0)
                                    {
                                        for(var index_3 = 0 ; index_3 < All_table_obj.tables[19].length ; index_3++)
                                        {
                                            if(All_table_obj.tables[18][index_2].package_id == All_table_obj.tables[19][index_3].id )
                                            {
                                                package_arr[1] = All_table_obj.tables[19][index_3].name;
                                                package_arr[2] = All_table_obj.tables[19][index_3].quota;
                                                package_arr[3] = All_table_obj.tables[19][index_3].fees;
                                                package_arr[4] = All_table_obj.tables[19][index_3].discount;
                                                package_arr[5] = All_table_obj.tables[19][index_3].paid_as;
                                                break;
                                            }
                                        }
                                    }
                                    all_student_package[counte_package] = package_arr;
                                    counte_package++;
                                }
                            }

                            return_data[index_1] = all_student_package;
                        }

                    }
                    count_arr[count_num] = return_data;count_num++;
                create_new_tabl_cols[counter] = count_arr;counter++;

                var count_arr = [];
                var count_num = 0;



                for(var x = 0 ; x < Student_id_save.length ; x++)
                {
                    var counter_count_id = 0;
                    var counter_completed = 0;
                    var counter_Att_yes = 0;
                    var counter_Att_no = 0;
                    var counter_Feed = 0;
                    var inner_arr = [];
                    for(var i = 0 ; i < saved_att_feed_id_arr.length; i ++)
                    {
 

                            if(saved_att_feed_id_arr[i].student_id == Student_id_save[x])
                            {   
                                counter_count_id++;
                                if(saved_att_feed_id_arr[i].attendance == 'YES')
                                {
                                    counter_Att_yes++;
                                }
                                if(saved_att_feed_id_arr[i].attendance == 'NO')
                                {
                                    counter_Att_no++;
                                }
                                if(saved_att_feed_id_arr[i].feedback != '')
                                {
                                    counter_Feed++;
                                }
                            }
                        }
                        inner_arr[0] = counter_count_id;
                        inner_arr[1] = (counter_Att_yes+counter_Att_no);
                        inner_arr[2] = counter_Att_yes;
                        inner_arr[3] = counter_Att_no;
                        inner_arr[4] = counter_Feed;
                        count_arr[count_num] = inner_arr;count_num++;
                    }
                

                create_new_tabl_cols[counter] = count_arr;counter++;

            }
        
            create_new_tabl_rows[index] = create_new_tabl_cols;
        }
    }
    func(create_new_tabl_rows , create_new_tabl_rows_emp);
}

 function quary_tables_all_status_parent(create_new_tabl_rows)
 {
        for(var index_ = 0 ; index_ < create_new_tabl_rows.length ; index_++)
        {
            if(create_new_tabl_rows[index_][7] == 'Customer Support' )
            {
                $('#customer_input').append(`<option value="${create_new_tabl_rows[index_][0]}"
                >${create_new_tabl_rows[index_][1]} </option>`); 
            }

            if(create_new_tabl_rows[index_][7] == 'Sales' )
            {
                $('#sales_input').append(`<option value="${create_new_tabl_rows[index_][0]}"
                >${create_new_tabl_rows[index_][1]} </option>`); 
            }
        }

 }


 function create_paper_table_parent(all_tables , create_new_tabl_rows)
 {


    for(var index_ = 0 ; index_ < create_new_tabl_rows.length ; index_++)
    {
        if(create_new_tabl_rows[index_][7] == 'Customer Support' )
        {
            $('#customer_input').append(`<option value="${create_new_tabl_rows[index_][0]}"
            >${create_new_tabl_rows[index_][1]} </option>`); 
        }

        if(create_new_tabl_rows[index_][7] == 'Sales' )
        {
            $('#sales_input').append(`<option value="${create_new_tabl_rows[index_][0]}"
            >${create_new_tabl_rows[index_][1]} </option>`); 
        }
    }


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
    , "Customer Support Agent :"
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


    createTable(all_tables ,All_data_obj , 'clear' , 6 , 5 , "open" , create_view , 14); 
}

function create_view(All_data_obj , End_Index)
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
          createTable_pop_up(All_data_obj  , ret);
        }

    }
}

function create_paper_table_customized_parent(all_tables)
{

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
    , "Customer Support Agent :"
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
      createTable(all_tables ,All_data_obj , 'clear' , 6 , 5 , "open" , create_view , 14); ;
      return;
   }

    var result = Search_for_value(all_tables , values_)
        
   createTable(result ,All_data_obj , 'clear' , 6 , 5 , "open" , create_view , 14); 
}

function paper_inner_parent (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class='col-1' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}

function paper_inner_parent_1_func (paper_ , title , loc)
{
  document.getElementById(loc).innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class='col-1' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}

function quary_tables_all_status_groups_check(All_table_obj , func)
{
    var seached_rows = [];
    saved_group_arr = [];
    var saved_group_arr_col = [];
    var special_counter = 0;

    if(All_table_obj.tables[11] && All_table_obj.tables[11] !== undefined && All_table_obj.tables[11].length != 0){

        var saved_status_arr_row = [];
        for(var index = 0 ; index < All_table_obj.tables[11].length ; index ++)
        {
            saved_status_arr_row = [];
            saved_status_arr_row[0] = All_table_obj.tables[11][index].id;
            saved_status_arr_row[1] = All_table_obj.tables[11][index].name;
            saved_status_arr[index] = saved_status_arr_row;
        }
    }

    if(All_table_obj.tables[7] && All_table_obj.tables[7] !== undefined && All_table_obj.tables[7].length != 0)
    {
        for(var index = 0 ; index < All_table_obj.tables[7].length ; index ++)
        {
            var saved_age_arr_rows = []
            saved_age_arr_rows[0] = All_table_obj.tables[7][index].name;
            saved_age_arr_rows[1] = All_table_obj.tables[7][index].from_age;
            saved_age_arr_rows[2] = All_table_obj.tables[7][index].to_age;
            saved_age_arr[index] = saved_age_arr_rows;
        }
    }

    
    if(All_table_obj.tables[16] && All_table_obj.tables[16] !== undefined && All_table_obj.tables[16].length != 0)
    {
        for(var index__ = 0 ; index__ < All_table_obj.tables[16].length ; index__++)
        {
            saved_sessions_id_arr[index__] = All_table_obj.tables[16][index__];
        }
    }

    var count_check = 0;
    if(All_table_obj.tables[15] && All_table_obj.tables[15] !== undefined && All_table_obj.tables[15].length != 0)
    {
        for(var index___ = 0 ; index___ < All_table_obj.tables[15].length ; index___++)
        {
            saved_att_feed_id_arr[count_check] = All_table_obj.tables[15][index___];
            count_check++;
        }
    }

    


    if(All_table_obj.tables[8] && All_table_obj.tables[8] !== undefined && All_table_obj.tables[8].length != 0){
                                            
        for(var index_ = 0 ; index_ < All_table_obj.tables[8].length ; index_++)
        {
            var seached_cols = [];
            var counter = 0;
            saved_group_arr_col = [];
            seached_cols[counter] = All_table_obj.tables[8][index_].id;counter++;

            if(All_table_obj.tables[0] && All_table_obj.tables[0] !== undefined && All_table_obj.tables[0].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[0].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].slot_id == All_table_obj.tables[0][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[0][index].name;counter++
                        seached_cols[counter] = All_table_obj.tables[0][index].slot;counter++
                        break;
                    }
                }
            }

            if(All_table_obj.tables[1] && All_table_obj.tables[1] !== undefined && All_table_obj.tables[1].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[1].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].lan_id == All_table_obj.tables[1][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[1][index].name;counter++
                        break;
                    }
                }
            }
            if(All_table_obj.tables[2] && All_table_obj.tables[2] !== undefined && All_table_obj.tables[2].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[2].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].att_id == All_table_obj.tables[2][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[2][index].name;counter++
                        break;
                    }
                }
            }
            if(All_table_obj.tables[3] && All_table_obj.tables[3] !== undefined && All_table_obj.tables[3].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[3].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].level_id == All_table_obj.tables[3][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[3][index].name;counter++
                        break;
                    }
                }
            }
            if(All_table_obj.tables[4] && All_table_obj.tables[4] !== undefined && All_table_obj.tables[4].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[4].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].track_id == All_table_obj.tables[4][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[4][index].name;counter++
                        break;
                    }
                }
            }

            if(All_table_obj.tables[5] && All_table_obj.tables[5] !== undefined && All_table_obj.tables[5].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[5].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].type_id == All_table_obj.tables[5][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[5][index].name;counter++
                        break;
                    }
                }
            }
            if(All_table_obj.tables[6] && All_table_obj.tables[6] !== undefined && All_table_obj.tables[6].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[6].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].days_id == All_table_obj.tables[6][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[6][index].name;counter++
                        break;
                    }
                }
            }
            if(All_table_obj.tables[7] && All_table_obj.tables[7] !== undefined && All_table_obj.tables[7].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[7].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].age_id == All_table_obj.tables[7][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[7][index].name;counter++
                        break;
                    }
                }
            }



            
            var counter__ = 0;
            if(All_table_obj.tables[10] && All_table_obj.tables[10] !== undefined && All_table_obj.tables[10].length != 0)
            {
                for(var index = 0 ; index < All_table_obj.tables[10].length ; index++)
                {
                    if((All_table_obj.tables[8][index_].id == All_table_obj.tables[10][index].groups_id) && (All_table_obj.tables[10][index].status == "active"))
                    {
                        counter__++;
                    }
                }
            }
            var Session_counter = 0;
            for(var i = 0 ; i < saved_sessions_id_arr.length ; i++)
            {
                if(All_table_obj.tables[8][index_].id == saved_sessions_id_arr[i].groups_id)
                {
                    Session_counter++;
                }
            }

            saved_group_arr_col[0] = All_table_obj.tables[8][index_].id;
            saved_group_arr_col[1] = `${seached_cols[9]}-${seached_cols[5]}-`+All_table_obj.tables[8][index_].id+` | ${seached_cols[8]}-${seached_cols[2]} | ${seached_cols[7]}-${seached_cols[3]} | ${counter__}-St | ${Session_counter}-Se`;
            

            saved_group_arr[special_counter] = [];
            if(counter__ < 6)
            {
             saved_group_arr[special_counter] = saved_group_arr_col;
             special_counter++;
            }
        }
    }
    if(All_table_obj.tables[13] && All_table_obj.tables[13] !== undefined && All_table_obj.tables[13].length != 0){
        for(var index__ = 0 ; index__ < All_table_obj.tables[13].length ; index__++)
        {
            var count_package = 0;
            var created_package = [];

            created_package[count_package] = All_table_obj.tables[13][index__].id;count_package++;
            created_package[count_package] = All_table_obj.tables[13][index__].name;count_package++;
            created_package[count_package] = All_table_obj.tables[13][index__].fees;count_package++;
            created_package[count_package] = All_table_obj.tables[13][index__].quota;count_package++;
            created_package[count_package] = All_table_obj.tables[13][index__].discount;count_package++;
            created_package[count_package] = All_table_obj.tables[13][index__].installments;count_package++;
            created_package[count_package] = All_table_obj.tables[13][index__].paid_as;count_package++;
            
            saved_package_arr[index__] = created_package;
        }
    }


}


function createTable_pop_up(All_data_obj , index_st) {



    var dataArray = All_data_obj.obj_data;
    // var index_st = All_data_obj.saved_index;

  if(dataArray && dataArray !== undefined && dataArray.length != 0){

    var result = "<table class='table' id='dtable'>"+
                 "<thead   style='white-space:nowrap' >"+
                   "<tr>";                               //Change table headings to match witht he Google Sheet     
                   result +="<th scope='col'>Students Info </th>";
                   result +="<th scope='col'>Group Info </th>";
                   result +="<th scope='col'>Packages Info </th>";
                   result +="<th scope='col'>Sessions Info </th>";

              result += "</tr>"+
                        "</thead>";
                // for(var i=0; i<dataArray.length; i++) {

                    for(var index = All_data_obj.Start_Index-1 ; index < Object.values(dataArray[index_st])[14][0].length ; index++)
                    {
                        result += "<tr>";

                        result += "<td style='white-space:nowrap' >";

                    result += `ID : `+Object.values(dataArray[index_st])[14][0][index]; 
                    result += `<br> iSchool ID : `+Object.values(dataArray[index_st])[14][1][index]; 
                    result += `<br>Name : `+Object.values(dataArray[index_st])[14][4][index] ; 
                    result += `<br>Status : `+Object.values(dataArray[index_st])[14][3][index]; 
                    result += `<br>Age Range : `+Object.values(dataArray[index_st])[14][5][index]; 
                    result += `<br>Free Session : `+Object.values(dataArray[index_st])[14][2][index] + `<br><hr class="hr-primary" style="width:40%;text-align:left;margin-left:0" /><br>`; 

                    result +="</td>"

                    result += "<td style='white-space:nowrap' >";

                    if(Object.values(dataArray[index_st])[15][0][index] == undefined)
                    {
                        result += `<label style='color:red'><br><br>No Group Assigned</label>` ; 
                    }
                    else
                    {
                        result += `ID : `+Object.values(dataArray[index_st])[15][0][index] ; 
                        result += `<br>Slot : `+Object.values(dataArray[index_st])[15][1][index] ; 
                        result += `<br>Lang : `+Object.values(dataArray[index_st])[15][2][index]; 
                        result += `<br>Attend : `+Object.values(dataArray[index_st])[15][3][index]; 
                        result += `<br>Level : `+Object.values(dataArray[index_st])[15][4][index]; 
                        result += `<br>Status : `+Object.values(dataArray[index_st])[15][5][index]; 
                        result += `<br>Day : `+Object.values(dataArray[index_st])[15][6][index];
                        result += `<br>Age Range : `+Object.values(dataArray[index_st])[15][7][index] + `<br><hr class="hr-primary" style="width:40%;text-align:left;margin-left:0" /><br>`; 
                    }
                    result +="</td>"

                    result += "<td style='white-space:nowrap' >";



                    if(Object.values(dataArray[index_st])[15][8][index] && Object.values(dataArray[index_st])[15][8][index] !== undefined && Object.values(dataArray[index_st])[15][8][index].length != 0)
                    {
                        var count_pack = 1;
                        for(var index_pac = 0 ; index_pac < Object.values(dataArray[index_st])[15][8][index].length ; index_pac++)
                        {
                            if(Object.values(dataArray[index_st])[15][8][index][index_pac] && Object.values(dataArray[index_st])[15][8][index][index_pac] !== undefined && Object.values(dataArray[index_st])[15][8][index][index_pac].length != 0){

                                result += `<label style='color:blue'>Package  ${count_pack} </label><br>ID :`+Object.values(dataArray[index_st])[15][8][index][index_pac][0] + `<br>`; 
                                result += `Name : `+Object.values(dataArray[index_st])[15][8][index][index_pac][1] + `<br>`; 
                                result += `Quota : `+Object.values(dataArray[index_st])[15][8][index][index_pac][2] + `<br>`; 
                                result += `Fees : `+Object.values(dataArray[index_st])[15][8][index][index_pac][3] + `<br>`; 
                                result += `Discount : `+Object.values(dataArray[index_st])[15][8][index][index_pac][4] + `<br>`; 
                                result += `Paid As : `+Object.values(dataArray[index_st])[15][8][index][index_pac][5] + `<br><hr class="hr-primary" style="width:40%;text-align:left;margin-left:0" /><br>`; 
                                count_pack++;
                            }
                        }
                    }
                    else
                    {
                            result += `<label style='color:red'><br><br>No Packages</label>` ; 
                    }

                    result +="</td>"

                    result += "<td style='white-space:nowrap' >";
                    if(Object.values(dataArray[index_st])[16][index][0] )
                    {
                        result += `Created Sessions : `+Object.values(dataArray[index_st])[16][index][0] ; 
                        result += `<br>Completed Sessions : `+Object.values(dataArray[index_st])[16][index][1] ; 
                        result += `<br>Attend Sessions : `+Object.values(dataArray[index_st])[16][index][2] ; 
                        result += `<br>Absent Sessions : `+Object.values(dataArray[index_st])[16][index][3] ; 
                        result += `<br>Feedbacks : `+Object.values(dataArray[index_st])[16][index][4] ; 
                    }
                    else
                    {
                        result += `<label style='color:red'><br><br>No Sessions</label>` ; 

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


function Nodata_func(All_data_obj) {


  clear(All_data_obj.location_next);


  var result = "<table class='table' id='dtable'>"+
  "<thead   style='white-space:nowrap' >"+
    "<tr>";                               //Change table headings to match witht he Google Sheet
     
     for(var index = 0 ; index < All_data_obj.all_names.length ; index ++)
     {
     result +="<th scope='col'>"+All_data_obj.all_names[index]+"</th>";
     }
result += "</tr>"+
         "</thead>";
                  result += "<tr>";          
                  result += "<td colspan='"+All_data_obj.all_names.length+"' >No Data</td>";
                  result += "</tr>";
          
    result += "</table>";
    var div = document.getElementById(All_data_obj.table_div);
    div.innerHTML = result;
  }


function Add_Section(All_data_obj)
  {
      var values = "";
      values = `<div style='display:flex;justify-content:right;'><button id='add_user' class='btn btn-success' type='button' > Add New </button></div>`;
 


     document.getElementById(All_data_obj.location_1).innerHTML = create_values_once(All_data_obj)+values;
  
  
     $(document).ready(function () {

        $('#add_user').click(function () {
            Add_User(All_data_obj);
        });


    });


}



async function ADD_PARENT_SENRIO(paper_inputs)
{
    var data_to_send_arr_parent = [];
    for(var index = 0 ; index < paper_inputs.length ; index++)
    {
        data_to_send_arr_parent[index] = document.getElementById(paper_inputs[index]).value;
        if(data_to_send_arr_parent[index] == '')
        {
            alert('Parent Data Missing')
            return;
        }
    }

    if(st_ids == 0)
    {   
        alert('No Student Added')
        return;
    }

    for(var index = 0 ; index < st_ids ; index ++)
    {
        if(document.getElementById('student_id'+index).value == ''){alert(`Student ${(index +1)} data Missing`);return;}
        if(document.getElementById('name_id'+index).value == ''){alert(`Student ${(index +1)} data Missing`);return;}
        if(document.getElementById('bd_id'+index).value == ''){alert(`Student ${(index +1)} data Missing`);return;}
        if(document.getElementById('status_id'+index).value == ''){alert(`Student ${(index +1)} data Missing`);return;}
        if(document.getElementById('Packages_id_input'+index).value == ''){alert(`Student ${(index +1)} data Missing`);return;}
        if(document.getElementById('package_data_'+index).value == ''){alert(`Student ${(index +1)} data Missing`);return;}
        if(document.getElementById('groups_id_input'+index).value == ''){alert(`Student ${(index +1)} data Missing`);return;}
    }
    
    var get_add_data_var_parent = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'parent' ,     
    [
    "name" 
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
      , data_to_send_arr_parent);

      var get_data_var = await GET_DATA_TABLES(database_fixed_link , 'parent');

      var save_last_parent_id = get_data_var[get_data_var.length-1].id;

    for(var index = 0 ; index < st_ids ; index ++)
    {
        var data_to_send_arr_student = [];
        var counter = 0 ;
        data_to_send_arr_student[counter] = document.getElementById('student_id'+index).value;counter++;
        data_to_send_arr_student[counter] = save_last_parent_id;counter++;
        data_to_send_arr_student[counter] = document.getElementById('free_id'+index).value;counter++
        data_to_send_arr_student[counter] = document.getElementById('status_id'+index).value;counter++
        data_to_send_arr_student[counter] = document.getElementById('name_id'+index).value;counter++
        data_to_send_arr_student[counter] = '';counter++
        data_to_send_arr_student[counter] = document.getElementById('bd_id'+index).value;

    var get_add_data_var_std = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'students' ,     
    ["std_id" 
    , "parent_id" 
    , "free_session_status" 
    , "std_status" 
    , "name" 
    , "age" 
    , "birthdate" 
     ]
        , data_to_send_arr_student);



    }

}
