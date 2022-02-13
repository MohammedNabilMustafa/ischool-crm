

function ADD_STUDENT_TO_PARENT()
{
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
    ,["std_id" 
    , "group_id" 
    , "parent_id" 
    , "free_session_status" 
    , "std_status" 
    , "name" 
    , "age" 
    , "birthdate" 
    ]

  ];

var called_table = [

      'parent',
      'students',
  ];

var paper_inputs = [
    'parent_input' , 
    'student_input',
  ];

var paper_inputs_label = [
    'Parent' , 
    'Student',   
  ];
        const All_req_obj = {};
        All_req_obj.Database_link = Database_link
        All_req_obj.inputs_col = inputs_col
        All_req_obj.called_table = called_table
                 
    html_create_lists_add_student_parent(paper_inputs , paper_inputs_label , "Location_1" );

    get_student_parent_tables(All_req_obj ,quary_tables_all_status_add_student_to_parent , '' , time_out  , 1);

     add_new_student_parent(All_req_obj,paper_inputs);
    // get_student_parent_tables(All_req_obj ,quary_tables_all_paper_student_groups,create_table_student_group , time_out , 2);

    // $('#search_btn').click(function (index) {  
    //     get_student_parent_tables(All_req_obj ,quary_tables_all_paper_student_groups,create_table_student_group_customized , time_out , 3);
    //     });
}




function html_create_lists_add_student_parent(paper_inputs , paper_inputs_label  , location_)
{
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    document.getElementById("search-results").innerHTML = "";




    //  `<div class='col justify-content-start'><button class='btn btn-danger' style='float:left;' id='add_back'>BACK</button></div>`;

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    for(var index = 0 ; index < paper_inputs.length ; index++)
    {
        paper_inner_1(paper_inputs[index] , paper_inputs_label[index]);
    }
    paper_inner_1_hidden('student_number' , 'num');

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


function get_student_parent_tables(All_req_obj , func_quary,func , timeout , index_pos , paper_inputs)
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
    again_student_group(All_table_obj , arr_data ,   func_quary , func , timeout , index_pos , All_req_obj , paper_inputs);

}


function quary_tables_all_status_add_student_to_parent(All_table_obj , func)
{
    var seached_rows = [];
                                     

        if(All_table_obj.tables[0] && All_table_obj.tables[0] !== undefined && All_table_obj.tables[0].length != 0){

            for(var index_ = 0 ; index_ < All_table_obj.tables[0].length ; index_++)
            {
                $('#parent_input').append(`<option value="${All_table_obj.tables[0][index_].id}"
                >${All_table_obj.tables[0][index_].id}  - ${All_table_obj.tables[0][index_].name}  </option>`);  
            }
        }

        if(All_table_obj.tables[1] && All_table_obj.tables[1] !== undefined && All_table_obj.tables[1].length != 0){

            for(var index_ = 0 ; index_ < All_table_obj.tables[1].length ; index_++)
            {
                $('#student_input').append(`<option value="${All_table_obj.tables[1][index_].id}"
                >${All_table_obj.tables[1][index_].id} - ${All_table_obj.tables[1][index_].std_id} - ${All_table_obj.tables[1][index_].name} - ${All_table_obj.tables[1][index_].parent_id}   </option>`);  
            }
        }

}


function add_new_student_parent(All_req_obj,paper_inputs)
{
    
    var Database_link = database_fixed_link

    var inputs_col = 
    ["std_id" 
    , "group_id" 
    , "parent_id" 
    , "free_session_status" 
    , "std_status" 
    , "name" 
    , "age" 
    , "birthdate" 
    ]
    
    var inputs_check = ["Parent missing" , "Student missing"];

    var called_table = 'students';

      var arr_data = []

        const All_data_obj = {};
        All_data_obj.table_ = called_table;
        All_data_obj.inputs_col_ = inputs_col;
        All_data_obj.inputs_check_ = inputs_check;
        All_data_obj.Database_link = Database_link;
        All_data_obj.callbackfunc;
        All_data_obj.callbackfunc_1;
        All_data_obj.obj;
        All_data_obj.obj;

    $(document).ready(function () {

        $('#send_group').click(function () {
             var value_elments = [];
             var check_full = false;
             var getin = false;

            for(var index = 0 ;index < paper_inputs.length ; index++)
            {
             value_elments[index] = document.getElementById(paper_inputs[index] ).value;
            }

            //console.log(value_elments);

            for(var index = 0 ;index <All_data_obj.inputs_check_.length ; index++)
            {
                if(value_elments[index] == "")
                {
                    alert(All_data_obj.inputs_check_[index] , "danger");
                    return;
                }
            }

            var COL_DATA =  "timestamp='"+ Todate(new Date())[0] +"', parent_id='"+value_elments[0]+"'";
            All_data_obj.index_num = value_elments[1];

            All_data_obj.callbackfunc = function(All_data_obj, response)
            {
                alert("Student Add Successfully" , "primary");
                ADD_STUDENT_TO_PARENT();
            };
            update_one_data_from_database(All_data_obj , COL_DATA)

        });
    });
        
}