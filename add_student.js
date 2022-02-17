

var st_ids = 0;
var saved_group_arr = []
var saved_age_arr = []
var saved_status_arr = []
var saved_parent_arr = []


function ADD_NEW_STUDENT()
{
    saved_group_arr = []
    saved_age_arr = []
    saved_status_arr = []
    saved_parent_arr = []
    
    
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
          ["name"]



      ];

var called_table = [
          'parent',
          'students',
          'groups',
          'age',
          'student_groups',
          'operation_status',
          'level',
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
     get_paper_tables_parent(All_req_obj ,quary_tables_all_status_students_check,'' , time_out , 2);
    get_paper_tables_parent(All_req_obj ,quary_tables_all__student,create_paper_table_parent_students , time_out , 3);

    $('#search_btn').click(function (index) {  

        get_paper_tables_parent(All_req_obj ,quary_tables_all__student,create_paper_table_customized_student , time_out , 4);
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

    paper_inner_parent_1('groups_id_input'+st_ids_ , "Groups ");

    for(var index = 0 ;index < saved_group_arr.length ; index++)
    {
        $('#groups_id_input'+st_ids_).append(`<option value="${saved_group_arr[index][0]}"
        >${saved_group_arr[index][1]} </option>`); 
    }
    paper_inner_parent_1('Parent_id_input'+st_ids_ , "Parent ");

    for(var index = 0 ;index < saved_parent_arr.length ; index++)
    {
        $('#Parent_id_input'+st_ids_).append(`<option value="${saved_parent_arr[index][0]}"
        >${saved_parent_arr[index][2]} </option>`); 
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

function add_new_student_(All_req_obj,paper_inputs)
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
        get_paper_tables_parent(All_req_obj ,quary_tables_all__student,create_paper_table_parent , time_out , 5);
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

            console.log(counter_student);
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
                        if(value_parent_id == 0)
                        {
                            alert("Student Add Successfully - No Parent - Group Add Successfully" , "primary");
                        }
                        else{
                            alert("Student Add Successfully - Parent Add Successfully - Group Add Successfully" , "success");
                        }
                        ADD_NEW_STUDENT();
                    };
                    get_all_data_from_database(All_data_obj);
    
                };
                add_one_data_from_database(All_data_obj , value_elments);
            }

        };
        get_all_data_from_database(All_data_obj);
}



function get_paper_tables_parent(All_req_obj , func_quary,func , timeout , index_pos)
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
    again(All_table_obj , arr_data ,   func_quary , func , timeout , index_pos );

}

 function quary_tables_all__student(All_table_obj , func)
 {
    var create_new_tabl_rows = []
    var counter = 0;

    if(All_table_obj.tables[1] && All_table_obj.tables[1] !== undefined && All_table_obj.tables[1].length != 0)
    {
        create_new_tabl_rows = All_table_obj.tables[1]

        for(var index = 0 ; index < All_table_obj.tables[1].length ; index++)
        {
            var create_new_tabl_col = [];
            var counter_col = 0;
            create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].id; counter_col++;
            create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].std_id; counter_col++;

            var return_data = search_two_tables(All_table_obj.tables[1][index] , All_table_obj.tables[0] , 3 , 0 , 0)
            create_new_tabl_col[counter_col] = return_data;counter_col++;

            var return_data = search_two_tables(All_table_obj.tables[1][index] , All_table_obj.tables[0] , 3 , 0 , 2)
            create_new_tabl_col[counter_col] = return_data;counter_col++;

            create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].free_session_status; counter_col++;
            create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].std_status; counter_col++;
            create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].name; counter_col++;
            create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].age; counter_col++;
            create_new_tabl_col[counter_col] = All_table_obj.tables[1][index].birthdate; counter_col++;

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
    ,"Parent ID :" 
    , "Parent Name :" 
    , "Free Session Status :" 
    , "Student Status :" 
    , "Name :"
    , "Age :"
    , "Birthdate :"



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

    createTable(all_tables ,All_data_obj , 'clear' , 3 , 4); 
}

function create_paper_table_customized_student(all_tables)
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
    , "Students :"
    , "Free Se :"
    , "Status :"
    , "Names :"
    , "Ages :"
    , "Slots :"
    , "Lan :"
    , "Att :"
    , "Lvl :"
    , "Type :"
    , "Day :"
    , "Group Age :"

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
      createTable(all_tables ,All_data_obj , 'clear' , 3 , 4);
      return;
   }

    var result = Search_for_value(all_tables , values_)
        
   createTable(result ,All_data_obj , 'clear' , 3 , 4); 
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

        string_collect += counter__ + 'St';


        
        create_new_tabl_cols[counter] = string_collect;

        if(counter__ < 6)
        {
            create_new_tabl_rows[special_counter] = create_new_tabl_cols;
            special_counter++;

        }
    }

    saved_group_arr = create_new_tabl_rows;

}

