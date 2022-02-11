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

    $('#search_btn').click(function (index) {  
        get_student_groups_tables(All_req_obj ,quary_tables_all_paper_student_groups,create_table_inovice_customized , 5 , 3);
        });
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
            var saved_arr = []
            var counter = 0;
            saved_arr[counter] = All_table_obj.tables[0][index].id;counter++;

            var saved_st_id = All_table_obj.tables[0][index].student_id;
            if(All_table_obj.tables[1] && All_table_obj.tables[1] !== undefined && All_table_obj.tables[1].length != 0){

                for(var index_1 = 0 ; index_1 < All_table_obj.tables[1].length ; index_1++)
                {
                    if(All_table_obj.tables[1][index_1].id == saved_st_id)
                    {
                        saved_arr[counter] = `ST ID : `+All_table_obj.tables[1][index_1].id;counter++;
                        saved_arr[counter] = `ST iSchool  ID : `+All_table_obj.tables[1][index_1].std_id;counter++;
                        saved_arr[counter] = `ST Name : `+All_table_obj.tables[1][index_1].name;counter++;
                        saved_arr[counter] = `ST Parent ID : `+All_table_obj.tables[1][index_1].parent_id;counter++;
                        saved_arr[counter] = `ST Status : `+All_table_obj.tables[1][index_1].std_status;counter++;
                        break;
                    }
                }
        }

        var saved_pk_id = All_table_obj.tables[0][index].package_id;

        if(All_table_obj.tables[2] && All_table_obj.tables[2] !== undefined && All_table_obj.tables[2].length != 0){

            for(var index_1 = 0 ; index_1 < All_table_obj.tables[2].length ; index_1++)
            {
                if(All_table_obj.tables[2][index_1].id == saved_pk_id)
                {
                    saved_arr[counter] = `Package ID : `+All_table_obj.tables[2][index_1].id;counter++;
                    saved_arr[counter] = `Package Name : `+All_table_obj.tables[2][index_1].name;counter++;
                    saved_arr[counter] = `Package Fees : `+All_table_obj.tables[2][index_1].fees;counter++;
                    saved_arr[counter] = `Package Quota : `+All_table_obj.tables[2][index_1].quota;counter++;
                    saved_arr[counter] = `Package Installments : `+All_table_obj.tables[2][index_1].installments;counter++;
                    saved_arr[counter] = `Package Paid as : `+All_table_obj.tables[2][index_1].paid_as;counter++;
                    break;
                }
            }
    }

        saved_arr[counter] = `INV Total Fees : <input type='number' id='due_date_invoice_${index}' value='${All_table_obj.tables[0][index].fees}' readonly>`;counter++;
        saved_arr[counter] = `INV Amount : <input type='number' id='due_date_invoice_${index}' value='${All_table_obj.tables[0][index].amount}' readonly>`;counter++;
        saved_arr[counter] = `INV Payment Status : `+paper_inner_invoice('status_invoice_'+index , '' , All_table_obj.tables[0][index].status) ;counter++;
        if(All_table_obj.tables[0][index].due_date != '0000-00-00')
        {
            saved_arr[counter] = `INV Due Date : <input type='date' id='due_date_invoice_${index}' value='${All_table_obj.tables[0][index].due_date}'>`;counter++;

        }
        if(All_table_obj.tables[0][index].paid_date != '0000-00-00')
        {
        saved_arr[counter] = `INV Paid Date : <input type='date' id='paid_date_invoice_${index}' value='${All_table_obj.tables[0][index].paid_date}'>` ;counter++;
        }
        saved_arr[counter] = `INV Invoice Discount : <input type='number' id='due_date_invoice_${index}' value='${All_table_obj.tables[0][index].discount}' readonly>`;counter++;
        saved_arr[counter] = `INV Attachment : <input type='text' id='due_date_invoice_${index}' value='${All_table_obj.tables[0][index].attach}' readonly>`;counter++;




    saved_arr[counter] = `INV Quota : <input type='number' id='due_date_invoice_${index}' value='${All_table_obj.tables[0][index].qouta}' readonly>`;counter++;
    saved_arr[counter] = `INV Remain : <input type='number' id='due_date_invoice_${index}' value='${All_table_obj.tables[0][index].remain}' readonly>`;


            create_new_tabl_rows[index] = saved_arr;
        }

    }
   
           func( create_new_tabl_rows );

}

function create_table_invoice(all_tables)
{
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
   createTable_invoice(all_tables ,All_data_obj , 'clear' , 5, 5 , null , create_view_invoice); 
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
                console.log(id);
                }
                else
                {
  
                }

        //   modal.style.display = "block";
        //   createTable_pop_up(All_data_obj  , ret);
        }

    }
}


function create_table_inovice_customized(all_tables)
{

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
      createTable_invoice(all_tables ,All_data_obj , 'clear' , 5, 5 , null , create_view_invoice); 
      return;
   }

    var result = Search_for_value(all_tables , values_)


    createTable_invoice(result ,All_data_obj , 'clear' , 5, 5 , null , create_view_invoice); 
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

 result = `<label for="`+paper_+`">`+title+`</label>
  <select class='col-4' name="`+paper_+`" id="`+paper_+`">
  <option value="${value}">${value}</option>`

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
