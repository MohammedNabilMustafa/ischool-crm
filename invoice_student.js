var invoice_status_arr = [];
var invoice_student_arr = [];
var invoice_package_arr = [];

function INVOICE_STUDENT()
{
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    document.getElementById("search-results").innerHTML = "";

    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = [
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
    ,"fees"
    ,"quota"
    ,"discount"
    ,"installments"
    ,"paid_as"

],
["name"]

  ];

var called_table = [
      'invoice',
      'students',
      'package',
      'invoice_status'
  ];

var paper_inputs = [
    'group_input' , 
    'student_input',
  ];

var paper_inputs_label = [
    'Group' , 
    'Student',   
  ];
        const All_req_obj = {};
        All_req_obj.Database_link = Database_link
        All_req_obj.inputs_col = inputs_col
        All_req_obj.called_table = called_table
                 
    html_create_lists_add_invoice(paper_inputs , paper_inputs_label , "Location_1" );

    get_student_groups_tables(All_req_obj ,quary_tables_all_status_invoice , '' , 5  , 1);

    // add_new_student_group(All_req_obj,paper_inputs);
    get_student_groups_tables(All_req_obj ,quary_tables_all_paper_invoice,create_table_invoice , 5 , 2);

    // $('#search_btn').click(function (index) {  
    //     get_student_groups_tables(All_req_obj ,quary_tables_all_paper_student_groups,create_table_student_group_customized , 5 , 3);
    //     });
}

function html_create_lists_add_invoice(paper_inputs , paper_inputs_label  , location_)
{
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    document.getElementById("search-results").innerHTML = "";




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


function quary_tables_all_paper_invoice(All_table_obj , func)
{
    var create_new_tabl_rows = [];
    var col_table_rows = [];

    var row_count = 0;
    var row_count_1 = 0;
    var student_count;

   if(All_table_obj.tables[0] && All_table_obj.tables[0] !== undefined && All_table_obj.tables[0].length != 0){

        for(var index = 0 ; index < All_table_obj.tables[0].length ; index++)
        {

        }
  
    }
   

   func( create_new_tabl_rows );

}

function create_table_invoice(all_tables)
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

function create_table_student_group_customized(all_tables)
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


function return_func(All_table_obj , func , arr_data , All_req_obj , paper_inputs)
{
    var value_elments = document.getElementById('student_input').value;
    var check_active_flag = false;
    if(All_table_obj.tables[10] && All_table_obj.tables[10] !== undefined && All_table_obj.tables[10].length != 0)
    {

        for(var index = 0 ; index < All_table_obj.tables[10].length ; index++)
        {

            if(All_table_obj.tables[10][index].student_id == value_elments && All_table_obj.tables[10][index].status == "active" )
            {

                arr_data[10].index_num = All_table_obj.tables[10][index].id;
                var COL_DATA =  "timestamp='"+ Todate(new Date())[0] +"',status=''";

                arr_data[10].callbackfunc = function(All_data_obj , response)
                {
                    // get_paper_tables(All_req_obj ,quary_tables_all_paper_student_groups,create_table_student_group_customized , 5 , 2);
                    var value_elments = [];

                    for(var index = 0 ;index < paper_inputs.length ; index++)
                    {
                    value_elments[index] = document.getElementById(paper_inputs[index] ).value;
                    }
                    value_elments[paper_inputs.length] = 'active'
            
                    arr_data[10].callbackfunc = function(All_data_obj , response)
                    {
                        alert(response , "success");
                        ADD_STUDENT_TO_GROUP();
                    };
                    add_one_data_from_database(arr_data[10] , value_elments);
                }
                update_one_data_from_database(arr_data[10] , COL_DATA);

                check_active_flag = true;
                }
            
            }

        }

        if(check_active_flag == false)
        {
            var value_elments = [];

            for(var index = 0 ;index < paper_inputs.length ; index++)
            {
            value_elments[index] = document.getElementById(paper_inputs[index] ).value;
            }
            value_elments[paper_inputs.length] = 'active'

            arr_data[10].callbackfunc = function(All_data_obj , response)
            {
                // console.log('func_1');
                alert(response , "success");
                ADD_STUDENT_TO_GROUP();
            };
            add_one_data_from_database(arr_data[10] , value_elments);
    }

}

function add_new_student_group(All_req_obj,paper_inputs)
{
    
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    [
     "groups_id" 
     ,"student_id" 
     ,"status" 
    ];
    
    var inputs_check = ["Group missing" , "Student missing"];

    var called_table = 'student_groups';

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
             var value_elments = [];
             var check_full = false;
             var getin = false;

            for(var index = 0 ;index < paper_inputs.length-1 ; index++)
            {
             value_elments[index] = document.getElementById(paper_inputs[index] ).value;
            }

            $("#student_number option").each(function()
            {
                if(document.getElementById(paper_inputs[0]).value == $(this).val().toString() )
                {
                    getin= true;
                    if(Number($(this).text()) >= 6)
                    {
                        check_full = true
                    }
                }
            });

            if(check_full == true)
            {
                alert("Group Full" , "danger");
                return;
            }

            value_elments[paper_inputs.length-1] = 'active'


            for(var index = 0 ;index <All_data_obj.inputs_check_.length-1 ; index++)
            {
                if(value_elments[index] == "")
                {
                    alert(All_data_obj.inputs_check_[index] , "danger");
                    return;
                }
            }

            get_student_groups_tables(All_req_obj ,return_func, '' , 5 , 5 , paper_inputs);

        });
    });
        
}

function quary_tables_all_status_invoice(All_table_obj , func)
{
    
    if(All_table_obj.tables[3] && All_table_obj.tables[3] !== undefined && All_table_obj.tables[3].length != 0){
        for(var index = 0 ; index < All_table_obj.tables[3].length ; index++)
        {
            invoice_status_arr[index] =  All_table_obj.tables[3][index];
        }
    }

    if(All_table_obj.tables[1] && All_table_obj.tables[1] !== undefined && All_table_obj.tables[1].length != 0){
        for(var index = 0 ; index < All_table_obj.tables[1].length ; index++)
        {
            invoice_student_arr[index] =  All_table_obj.tables[1][index];
        }
    }

    if(All_table_obj.tables[2] && All_table_obj.tables[2] !== undefined && All_table_obj.tables[2].length != 0){
        for(var index = 0 ; index < All_table_obj.tables[2].length ; index++)
        {
            invoice_package_arr[index] =  All_table_obj.tables[2][index];
        }
    }


    // console.log(invoice_status_arr);
    // console.log(invoice_student_arr);
    // console.log(invoice_package_arr);

}

function paper_inner_1 (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class='col-4' name="`+paper_+`" id="`+paper_+`">
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
function get_student_groups_tables(All_req_obj , func_quary,func , timeout , index_pos , paper_inputs)
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

 function again_student_group(All_table_obj , arr_data , func_quary ,  func , timeout , index_pos , All_req_obj , paper_inputs )
 {

    setTimeout(function () {
        
        for(var index = 0 ; index < arr_data.length ; index++)
        {
            if(arr_data[index].check == false)
            {   
                counter__[index_pos]++;
                again_student_group(All_table_obj , arr_data , func_quary ,  func , timeout , index_pos , All_req_obj , paper_inputs );
            }
        }
        if(func_quary)
        {
            counter__[index_pos]--;
            if(counter__[index_pos] == -1)
            {
                func_quary(All_table_obj , func , arr_data , All_req_obj , paper_inputs)

            }

        }
    }, timeout);
 }