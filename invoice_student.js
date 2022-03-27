var invoice_status_arr = [];
var invoice_student_arr = [];
var invoice_package_arr = [];

function INVOICE_STUDENT()
{
    Loading_page_set();

    clear_all_locations();


    var Database_link = database_fixed_link

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
    ,"st_name"
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
,
[
    "student_id"
    ,"package_id"
    
]

  ];

var called_table = [
      'invoice',
      'students',
      'package',
      'invoice_status',
      'student_package'
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

    get_all_data_arr(All_req_obj ,quary_tables_all_status_invoice , '' , time_out  , 1);

    // add_new_student_group(All_req_obj,paper_inputs);
    get_all_data_arr(All_req_obj ,quary_tables_all_paper_invoice,create_table_invoice , time_out , 2);

    $('#search_btn').click(function (index) {  
        Loading_page_set();

        get_all_data_arr(All_req_obj ,quary_tables_all_paper_invoice,create_table_inovice_customized , time_out , 3);
        });
}

function html_create_lists_add_invoice(paper_inputs , paper_inputs_label  , location_)
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
            var saved_arr = []
            var counter = 0;
            saved_arr[counter] = All_table_obj.tables[0][index].id;counter++;

            var saved_st_id = All_table_obj.tables[0][index].student_id;
            if(All_table_obj.tables[1] && All_table_obj.tables[1] !== undefined && All_table_obj.tables[1].length != 0){

                for(var index_1 = 0 ; index_1 < All_table_obj.tables[1].length ; index_1++)
                {
                    if(All_table_obj.tables[1][index_1].students_id == saved_st_id)
                    {
                        saved_arr[counter] = All_table_obj.tables[1][index_1].students_id;counter++;
                        saved_arr[counter] = All_table_obj.tables[1][index_1].std_id;counter++;
                        saved_arr[counter] = All_table_obj.tables[1][index_1].st_name;counter++;
                        saved_arr[counter] = All_table_obj.tables[1][index_1].parent_id;counter++;
                        saved_arr[counter] = All_table_obj.tables[1][index_1].std_status;counter++;

                        break;
                    }
                }
        }

        var saved_pk_id = '';

        All_table_obj.tables[4].forEach(element => {
            if(All_table_obj.tables[0][index].package_id == element.id)
            {
                saved_pk_id = element.package_id;
                return;
            }
        });

        if(All_table_obj.tables[2] && All_table_obj.tables[2] !== undefined && All_table_obj.tables[2].length != 0){

            for(var index_1 = 0 ; index_1 < All_table_obj.tables[2].length ; index_1++)
            {
                if(All_table_obj.tables[2][index_1].id == saved_pk_id)
                {
                    saved_arr[counter] = All_table_obj.tables[2][index_1].id;counter++;
                    saved_arr[counter] = All_table_obj.tables[2][index_1].name;counter++;
                    saved_arr[counter] = All_table_obj.tables[2][index_1].fees;counter++;
                    saved_arr[counter] = All_table_obj.tables[2][index_1].quota;counter++;
                    saved_arr[counter] = All_table_obj.tables[2][index_1].installments;counter++;
                    saved_arr[counter] = All_table_obj.tables[2][index_1].paid_as;counter++;

                    break;
                }
            }
    }
    
        saved_arr[counter] = All_table_obj.tables[0][index].fees;counter++;
        saved_arr[counter] = All_table_obj.tables[0][index].amount;counter++;
        saved_arr[counter] = All_table_obj.tables[0][index].status;counter++;

        saved_arr[counter] = All_table_obj.tables[0][index].due_date;counter++;
 
        saved_arr[counter] = All_table_obj.tables[0][index].paid_date;counter++;

        saved_arr[counter] = All_table_obj.tables[0][index].discount;counter++;
        saved_arr[counter] = All_table_obj.tables[0][index].attach;counter++;



        saved_arr[counter] = All_table_obj.tables[0][index].qouta;counter++;
        saved_arr[counter] = All_table_obj.tables[0][index].remain;counter++;


            create_new_tabl_rows[index] = saved_arr;
        }

    }
           func( create_new_tabl_rows );

}

function change_input_layer(create_new_tabl_rows)
{

    var create_new_tabl_rows_2 = [];
    for(var index = 0 ; index < create_new_tabl_rows.length ; index++ )
    {
        var saved_arr = [];
        var counter = 0;
        saved_arr[counter] = `<div class='row'><input class="form-control" style='height:30px!important;padding-top:5px!important;width:100px!important;text-align:center;' type='number' id='id_invoice_${index}' value='${create_new_tabl_rows[index][0]}' readonly></div>`;counter++;

        saved_arr[counter] = `<div class='row'>ID : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:80px!important;text-align:center;' type='number' id='id_student_${index}' value='${create_new_tabl_rows[index][1]}' readonly></div>`;counter++;
        saved_arr[counter] = `<div class='row'>iSchool  ID : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:80px!important;text-align:center;' type='text' id='std_id_student_${index}' value='${create_new_tabl_rows[index][2]}' readonly></div>`;counter++;
        saved_arr[counter] = `<div class='row'>Name : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:150px!important;text-align:center;' type='text' id='name_student_${index}' value='${create_new_tabl_rows[index][3]}' readonly></div>`;counter++;
        saved_arr[counter] = `<div class='row'>Parent ID : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:100px!important;text-align:center;' type='number' id='parent_id_student_${index}' value='${create_new_tabl_rows[index][4]}' readonly></div>`;counter++;
        saved_arr[counter] = `<div class='row'>Status : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:100px!important;text-align:center;' type='number' id='status_student_${index}' value='${create_new_tabl_rows[index][5]}' readonly></div>`;counter++;
    
    
        saved_arr[counter] = `<div class='row'>Package ID : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:100px!important;text-align:center;' type='number' id='id_pack_${index}' value='${create_new_tabl_rows[index][6]}' readonly></div>`;counter++;
        saved_arr[counter] = `<div class='row'>Package Name : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:100px!important;text-align:center;' type='text' id='name_pack_${index}' value='${create_new_tabl_rows[index][7]}' readonly></div>`;counter++;
        saved_arr[counter] = `<div class='row'>Package Fees : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:100px!important;text-align:center;' type='number' id='fees_pack_${index}' value='${create_new_tabl_rows[index][8]}' readonly></div>`;counter++;
        saved_arr[counter] = `<div class='row'>Package Quota : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:70px!important;text-align:center;' type='number' id='quota_pack_${index}' value='${create_new_tabl_rows[index][9]}' readonly></div>`;counter++;
        saved_arr[counter] = `<div class='row'>Package Installments : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:70px!important;text-align:center;' type='number' id='inst_pack_${index}' value='${create_new_tabl_rows[index][10]}' readonly></div>`;counter++;
        saved_arr[counter] = `<div class='row'>Package Paid AS : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:100px!important;text-align:center;' type='number' id='paid_as_pack_${index}' value='${create_new_tabl_rows[index][11]}' readonly></div>`;counter++;
    
    
        saved_arr[counter] = `<div class='row'>INV Total Fees : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:100px!important;text-align:center;' type='number' id='fees_invoice_${index}' value='${create_new_tabl_rows[index][12]}' readonly></div>`;counter++;
        saved_arr[counter] = `<div class='row'>INV Amount : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:100px!important;text-align:center;' type='number' id='amount_invoice_${index}' value='${create_new_tabl_rows[index][13]}' readonly></div>`;counter++;
        saved_arr[counter] = `<div class='row'>INV Payment Status : `+paper_inner_invoice('status_invoice_'+index , '' , create_new_tabl_rows[index][14]) +`</div>`;counter++;
    
        saved_arr[counter] = `<div class='row'>INV Due Date : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:170px!important;text-align:center;' type='date' id='due_date_invoice_${index}' value='${create_new_tabl_rows[index][15]}' ></div>`;counter++;
    
        saved_arr[counter] = `<div class='row'>INV Paid Date : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:170px!important;text-align:center;' type='date' id='paid_date_invoice_${index}' value='${create_new_tabl_rows[index][16]}' ></div>`;counter++;
    
        saved_arr[counter] = `<div class='row'>INV Discount : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:100px!important;text-align:center;' type='number' id='discount_invoice_${index}' value='${create_new_tabl_rows[index][17]}' readonly></div>`;counter++;
        saved_arr[counter] = `<div class='row'>INV Attach : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:100px!important;text-align:center;' type='text' id='Attach_invoice_${index}' value='${create_new_tabl_rows[index][18]}' readonly></div>`;counter++;
    
        saved_arr[counter] = `<div class='row'>INV Quota : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:100px!important;text-align:center;' type='number' id='qouta_invoice_${index}' value='${create_new_tabl_rows[index][19]}' readonly></div>`;counter++;
        saved_arr[counter] = `<div class='row'>INV Remain : <input class="form-control" style='height:30px!important;padding-top:5px!important;width:100px!important;text-align:center;' type='number' id='remain_invoice_${index}' value='${create_new_tabl_rows[index][20]}' readonly></div>`;counter++;
        create_new_tabl_rows_2[index] = saved_arr;
    }

    return create_new_tabl_rows_2;

}

function create_table_invoice(all_tables)
{
    Loading_page_clear();

    var inputs_names_search = [
        ""
        ,""
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
   All_data_obj.view_index = [];
   All_data_obj.index_num_value = [];
   All_data_obj.obj;
   All_data_obj.obj_data = [];
   All_data_obj.saved_index ;

   var saved_table_arr = change_input_layer(all_tables);


   createTable_invoice(saved_table_arr ,All_data_obj , 'clear' , 5, 6 , null , create_view_invoice); 
}

function create_view_invoice(All_data_obj , End_Index)
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

        
            if (confirm("You want to edite!") == true) {

                var value_elments = []

                value_elments[0] = document.getElementById('id_invoice_'+ret).value
                value_elments[1] = document.getElementById('fees_invoice_'+ret).value
                value_elments[2] = document.getElementById('amount_invoice_'+ret).value
                value_elments[3] = document.getElementById('status_invoice_'+ret).value
                value_elments[4] = document.getElementById('due_date_invoice_'+ret).value
                value_elments[5] = document.getElementById('paid_date_invoice_'+ret).value
                value_elments[6] = document.getElementById('discount_invoice_'+ret).value
                value_elments[7] = document.getElementById('Attach_invoice_'+ret).value
                value_elments[8] = document.getElementById('qouta_invoice_'+ret).value
                value_elments[9] = document.getElementById('remain_invoice_'+ret).value

                update_invoice(value_elments);
                }
                else
                {
  
                }

        }

    }
}



function update_invoice(value_elments)
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
    
    var inputs_check = ["Name missing" , "Phone missing" , "Email missing"];

    var called_table = 'invoice';

        const All_data_obj = {};
        All_data_obj.table_ = called_table;
        All_data_obj.inputs_col_ = inputs_col;
        All_data_obj.inputs_check_ = inputs_check;
        All_data_obj.Database_link = Database_link;
        All_data_obj.callbackfunc;
        All_data_obj.obj;


            All_data_obj.index_num = value_elments[0];

            var COL_DATA =  "timestamp='"+ Todate(new Date())[0] +"',status='"+value_elments[3]+"',	due_date='"+value_elments[4]+"',paid_date='"+value_elments[5]+"'";

            All_data_obj.callbackfunc = function(All_data_obj , response)
            {   
                alert(response);
                INVOICE_STUDENT();
            };
            update_one_data_from_database(All_data_obj , COL_DATA);
   
}



function create_table_inovice_customized(all_tables)
{
    Loading_page_clear();

    var inputs_names_search = [
        ""
        ,""
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
    All_data_obj.view_index = [];
    All_data_obj.index_num_value = [];
    All_data_obj.obj;
    All_data_obj.obj_data = [];
    All_data_obj.saved_index ;


   var values_ = document.getElementById("search_all").value;

   if(values_ == "")
   {
      All_data_obj.Start_Index = 1;
      var saved_table_arr = change_input_layer(all_tables);
      createTable_invoice(saved_table_arr ,All_data_obj , 'clear' , 5, 6 , null , create_view_invoice); 
      return;
   }

    var result = Search_for_value(all_tables , values_)

    var saved_table_arr = change_input_layer(result);

    createTable_invoice(saved_table_arr ,All_data_obj , 'clear' , 5, 6 , null , create_view_invoice); 
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



}

function paper_inner_invoice (paper_ , title , value)
{

 result = `
  <select class="form-control" style='height:30px!important;padding-top:1px!important;width:120px!important;text-align:center;' name="`+paper_+`" id="`+paper_+`">
  <option   value="${value}">${value}</option>`

  for(var index = 0 ; index < invoice_status_arr.length ; index++)
  {
      if(invoice_status_arr[index].name !=  value)
      {
        result +=  `<option value="${invoice_status_arr[index].name}">${invoice_status_arr[index].name}</option>`
      }
  }
  result +=`</select>` ;

  return result;
}

/* <select id="select-state" placeholder="Pick a state..."></select> */
