function ADD_STUDENT_TO_GROUP()
{
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
      'Age',
      'groups',
      'students',
      'student_groups'
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
                 
    html_create_lists_add_student_group(paper_inputs , paper_inputs_label , "Location_1" );

    get_student_groups_tables(All_req_obj ,quary_tables_all_status_add_student , '' , 5  , 1);

    add_new_student_group(All_req_obj,paper_inputs);
    get_student_groups_tables(All_req_obj ,quary_tables_all_paper_student_groups,create_table_student_group , 5 , 2);

    $('#search_btn').click(function (index) {  
        get_student_groups_tables(All_req_obj ,quary_tables_all_paper_student_groups,create_table_student_group_customized , 5 , 3);
        });
}

function quary_tables_all_paper_student_groups(All_table_obj , func)
{
    var create_new_tabl_rows = [];
    var col_table_rows = [];

    var row_count = 0;
    var row_count_1 = 0;
    var student_count;

    // console.log(All_table_obj.tables);
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


                // for(var index_ = 0 ; index_ < All_table_obj.tables[9].length ; index_++)
                // {
                //     if(All_table_obj.tables[8][index].age_id == All_table_obj.tables[9][index_].id)
                //     {
                //         one_col +=  All_table_obj.tables[9][index_].name;
                //         break;
                //     }
                // }
    
                for(var index_ = 0 ; index_ < All_table_obj.tables[7].length ; index_++)
                {
                    if(All_table_obj.tables[8][index].age_id == All_table_obj.tables[7][index_].id)
                    {
                        one_col += All_table_obj.tables[7][index_].name;
                        break;
                    }
                }

                for(var index_ = 0 ; index_ < All_table_obj.tables[3].length ; index_++)
                {
                    if(All_table_obj.tables[8][index].level_id == All_table_obj.tables[3][index_].id)
                    {
                        one_col += '-' + All_table_obj.tables[3][index_].name;
                        break;
                    }
                }
                one_col += '-' + All_table_obj.tables[8][index].id;

                for(var index_ = 0 ; index_ < All_table_obj.tables[5].length ; index_++)
                {
                    if(All_table_obj.tables[8][index].type_id == All_table_obj.tables[5][index_].id)
                    {
                        one_col += '  |  ' + All_table_obj.tables[5][index_].name;
                        break;
                    }
                }

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

                // for(var index_ = 0 ; index_ < All_table_obj.tables[2].length ; index_++)
                // {
                //     if(All_table_obj.tables[8][index].att_id == All_table_obj.tables[2][index_].id)
                //     {
                //         one_col += '  |  ' + All_table_obj.tables[2][index_].name;
                //         break;
                //     }
                // }
                




                // for(var index_ = 0 ; index_ < All_table_obj.tables[4].length ; index_++)
                // {
                //     if(All_table_obj.tables[8][index].track_id == All_table_obj.tables[4][index_].id)
                //     {
                //         one_col += '-' + All_table_obj.tables[4][index_].name;
                //         break;
                //     }
                // }







                one_col += '  |  ' + All_table_obj.tables[8][index].start_date;

                // for(var index_ = 0 ; index_ < All_table_obj.tables[7].length ; index_++)
                // {
                //     if(All_table_obj.tables[8][index].age_id == All_table_obj.tables[7][index_].id)
                //     {
                //         one_col += '  |  ' + All_table_obj.tables[7][index_].name;
                //         break;
                //     }
                // }


                for(var index_ = 0 ; index_ < All_table_obj.tables[1].length ; index_++)
                {
                    if(All_table_obj.tables[8][index].lan_id == All_table_obj.tables[1][index_].id)
                    {
                        one_col += '  |  ' + All_table_obj.tables[1][index_].name;
                        break;
                    }
                }







                // one_col += '  |  ' + All_table_obj.tables[8][index].end_date;

                one_col += '  |  ' + All_table_obj.tables[8][index].opend_by;


                


                // var counter__ = 0;
                // if(All_table_obj.tables[10] && All_table_obj.tables[10] !== undefined && All_table_obj.tables[10].length != 0)
                // {
                //     for(var index = 0 ; index < All_table_obj.tables[10].length ; index++)
                //     {
                //         if((All_table_obj.tables[8][index_].id == All_table_obj.tables[10][index].groups_id) && (All_table_obj.tables[10][index].status == "active"))
                //         {
                //             counter__++;
                //         }
                //     }
                // }


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

function create_table_student_group(all_tables)
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

function html_create_lists_add_student_group(paper_inputs , paper_inputs_label  , location_)
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

function quary_tables_all_status_add_student(All_table_obj , func)
{
    var seached_rows = [];
    
    if(All_table_obj.tables[8] && All_table_obj.tables[8] !== undefined && All_table_obj.tables[8].length != 0){
                                            

        for(var index_ = 0 ; index_ < All_table_obj.tables[8].length ; index_++)
        {
            var seached_cols = [];
            var counter = 0;
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



            if(counter__ < 6)
            {
                $('#group_input').append(`<option value="${seached_cols[0]}"
                > ${seached_cols[9]}-${seached_cols[5]}-`+All_table_obj.tables[8][index_].id+` | ${seached_cols[8]}-${seached_cols[2]} | ${seached_cols[7]}-${seached_cols[3]} | `+counter__+`-St </option>`);  

                $('#student_number').append(`<option value="${seached_cols[0]}">`+counter__+`  </option>`);  
            }

        }

        if(All_table_obj.tables[9] && All_table_obj.tables[9] !== undefined && All_table_obj.tables[9].length != 0){

            for(var index_ = 0 ; index_ < All_table_obj.tables[9].length ; index_++)
            {
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


                $('#student_input').append(`<option value="${All_table_obj.tables[9][index_].id}"
                >${All_table_obj.tables[9][index_].id} - ${All_table_obj.tables[9][index_].std_id} - ${All_table_obj.tables[9][index_].name} - ${group_id_search}   </option>`);  
            }
        }

    }





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