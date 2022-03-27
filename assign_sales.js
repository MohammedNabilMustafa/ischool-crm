

async function ASSGIN_Sales_AGENT()
{
  Loading_page_set();

  clear_all_locations();



    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    select_func_assign_sales('parent_input_id' , 'Parent ');
    select_func_assign_sales('agent_input_id' , 'Sales Agent ');
    
    document.getElementById("Location_1").innerHTML +=`</div></div>`;

    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML +=`</div></div>`;

    document.getElementById("Location_1").innerHTML += `<div class='col justify-content-start'><button class='btn btn-primary' style='float:right;' id='send_group'>ASSIGN</button></div>`;

    document.getElementById("Location_1").innerHTML +=`<div class="input-group">
    <div class='col justify-content-start'>
      <input type="search" id="search_all" class="form-control" />
    </div>
    <div class='col justify-content-start' style='z-index:0;'><button type="button" id='search_btn' class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button></div>
  </div>`;
  document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById("Location_1").innerHTML +=`</div></div>`;


  var all_parent_arr = await GET_DATA_TABLES(database_fixed_link , 'parent');
  var all_employee_arr = await GET_DATA_TABLES(database_fixed_link , 'employee');

  all_parent_arr.forEach((element_0) => {
      
    all_employee_arr.forEach((element_1) => {
        if(element_0.sales_agent_id	== element_1.id)
        {
            element_0.name_cs = element_1.name;
        }
    });
  });

  for(var index = 0 ;index < all_parent_arr.length ; index++)
  {
          $('#parent_input_id').append(`<option value="${all_parent_arr[index].id}"
          >Pt-ID : ${all_parent_arr[index].id} | Pt-Name : ${all_parent_arr[index].name} | CS-ID : ${all_parent_arr[index].customer_agent_id} | CS-Name : ${all_parent_arr[index].name_cs} </option>`); 
  }

  for(var index = 0 ;index < all_employee_arr.length ; index++)
  {
      if(all_employee_arr[index].permission_id == 2){
        $('#agent_input_id').append(`<option value="${all_employee_arr[index].id}"
        >ID : ${all_employee_arr[index].id} | Name : ${all_employee_arr[index].name}  </option>`); 
      }

  }

  $('.select2').select2();





      $('#search_btn').click(function (index) {  
        Loading_page_set();

        var values_ = document.getElementById("search_all").value;

        if(values_ == "")
        {           
            createTable_assign_agent_sales(all_parent_arr);
           return;
        }

         var result = Search_for_value(all_parent_arr , values_)
         createTable_assign_agent_sales(result);

        });
        $('#send_group').click(async function () {


            if($('#parent_input_id').val() == "")
            {
                alert('Select Parent')
                return;
            }
            if($('#agent_input_id').val() == "")
            {
                alert('Select Agent')
                return;
            }
            Loading_page_set();

            // console.log($('#parent_input_id').val());
            // console.log($('#agent_input_id').val());
            var respose = await UPDATE_DATA_TABLES_ONE_COL(database_fixed_link , 'parent' , $('#parent_input_id').val() , `sales_agent_id = '${$('#agent_input_id').val()}'`);
            alert(respose)
            ASSGIN_Sales_AGENT();
        });

        createTable_assign_agent_sales(all_parent_arr);
  
}


function select_func_assign_sales (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class='col-5 select2' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}



function createTable_assign_agent_sales(all_tables ) {

  Loading_page_clear();

  var data_arr = [];
  var outer_counter = 0;
  all_tables.forEach((element) => 
  {
      console.log(element);
    var inner_arr = [];
    var inner_counter = 0;
    inner_arr[inner_counter] = Object.values(element)[0];inner_counter++;
    inner_arr[inner_counter] = Object.values(element)[2];inner_counter++;
    inner_arr[inner_counter] = Object.values(element)[12];inner_counter++;
    inner_arr[inner_counter] = Object.values(element)[14];
      
    data_arr[outer_counter]=inner_arr;outer_counter++

  }

  )
  
  var inputs_names_search = [
    "ID :"

  
  
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
  

  createTable(data_arr ,All_data_obj , 'clear' , 1 , 4 ); 



}


