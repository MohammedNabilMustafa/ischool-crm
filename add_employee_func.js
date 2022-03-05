


function ADD_NEW_EMPLOYEE()
{
    Loading_page_set();
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";

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
                       ]
                    ];

    var called_table = ['permission',
                        'department',
                        'role',
                        'employee',
                    ];


        const All_req_obj = {};
        All_req_obj.Database_link = Database_link
        All_req_obj.inputs_col = inputs_col
        All_req_obj.called_table = called_table
                 

        var paper_inputs = ['name_input' , 
        'phone_input',
        'email_input',
        'zoomlink_input',
        'username_input',
        'password_input',
        'permission_input',
        'department_input',
        'role_input'
    ];



var paper_inputs_label = [
        'Name : ' , 
        'Phone : ',
        'Email : ',
        'Zoom Link : ',
        'Username : ',
        'Password : ',
        'Permission  ',
        'Department  ',
        'Role  ',

    ];
    html_create_lists_employee(paper_inputs , paper_inputs_label , "Location_1" );

    get_all_data_arr(All_req_obj ,quary_tables_all_status_employee , '' , time_out  , 1);

     add_new_empolyee(All_req_obj,paper_inputs);
     get_all_data_arr(All_req_obj ,quary_tables_all_employee,create_paper_table_employee , time_out , 3);

    $('#search_btn').click(function (index) {  
        Loading_page_set();

        get_all_data_arr(All_req_obj ,quary_tables_all_employee,create_paper_table_customized_employee , time_out , 4);
        });
   

}

function html_create_lists_employee(paper_inputs , paper_inputs_label  , location_)
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

    for(var index = 6 ; index < 9 ; index++)
    {
        paper_inner_employee(paper_inputs[index] ,paper_inputs_label[index] );
    }
    document.getElementById(location_).innerHTML +=`</div></div>`;




    document.getElementById(location_).innerHTML += `<div class='col justify-content-start'><button class='btn btn-success' style='float:right;' id='send_group'>ADD</button></div>`;


    document.getElementById(location_).innerHTML +=`<div class="input-group">
    <div class='col justify-content-start'>
      <input type="search" id="search_all" class="form-control" />
    </div>
    <div class='col justify-content-start' style='z-index:0;'><button type="button" id='search_btn' class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button></div>
  </div>`;
  document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById(location_).innerHTML +=`</div></div>`;

    
    //document.getElementById(location_).innerHTML += `<div style='display:flex;justify-content:left;'><button  type="button" id='search_paper' class="btn btn-secondary"><i class="fas fa-search"></i></button></div>`;



}

function add_new_empolyee(All_req_obj,paper_inputs)
{
    
    var Database_link = database_fixed_link

    var inputs_col = 
    ["name" 
    , "phone" 
    , "email" 
    , "zoomlink" 
    , "username" 
    , "password" 
    , "permission_id" 
    , "department_id" 
    , "role_id" 

];
    
    var inputs_check = ["Name missing"];

    var called_table = 'employee';


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

            Loading_page_set();

            var value_elments = [];

            for(var index = 0 ;index < paper_inputs.length ; index++)
            {
             value_elments[index] = document.getElementById(paper_inputs[index] ).value;
            }

            for(var index = 0 ;index < 7 ; index++)
            {
                if(value_elments[index] == "")
                {
                    alert(All_data_obj.inputs_check_[index] , "danger");
                    return;
                }
            }

            All_data_obj.callbackfunc = function(All_data_obj , response)
            {
                alert(response , "success");

                get_all_data_arr(All_req_obj ,quary_tables_all_employee,create_paper_table_employee , time_out , 2);
            };
            add_one_data_from_database(All_data_obj , value_elments);
        
        });
    });
        
}



 function quary_tables_all_employee(All_table_obj , func)
 {
    var create_new_tabl_rows = []

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
        create_new_tabl_rows[index] = create_new_table_cols;
    }
    }
    func( create_new_tabl_rows );

 }

 function quary_tables_all_status_employee(All_table_obj , func)
 {
    //  console.log(All_table_obj.tables);
    if(All_table_obj.tables[0] && All_table_obj.tables[0] !== undefined && All_table_obj.tables[0].length != 0){
        if(All_table_obj.tables[1] && All_table_obj.tables[1] !== undefined && All_table_obj.tables[1].length != 0){
            if(All_table_obj.tables[2] && All_table_obj.tables[2] !== undefined && All_table_obj.tables[2].length != 0){

        for(var index_ = 0 ; index_ < All_table_obj.tables[0].length ; index_++)
        {
            $('#permission_input').append(`<option value="${All_table_obj.tables[0][index_].id}"
            >${All_table_obj.tables[0][index_].name} </option>`);  
        }
        for(var index_ = 0 ; index_ < All_table_obj.tables[1].length ; index_++)
        {
            $('#department_input').append(`<option value="${All_table_obj.tables[1][index_].id}"
            >${All_table_obj.tables[1][index_].name}  </option>`);  
        }
        for(var index_ = 0 ; index_ < All_table_obj.tables[2].length ; index_++)
        {
            $('#role_input').append(`<option value="${All_table_obj.tables[2][index_].id}"
            >${All_table_obj.tables[2][index_].name}  </option>`);
        }
    
    }
    }
    }
    

    $('.select2').select2();


 }

 function quary_tables_all_status_for_search_employee(All_table_obj , func)
 {

        
        for(var index_ = 0 ; index_ < All_table_obj.tables[1].length ; index_++)
        {
            $('#paper_type_input').append(`<option value="${All_table_obj.tables[1][index_].name} - ${All_table_obj.tables[1][index_].ton_price}"
            >${All_table_obj.tables[1][index_].name} - ${All_table_obj.tables[1][index_].ton_price} </option>`);  
        }
        for(var index_ = 0 ; index_ < All_table_obj.tables[2].length ; index_++)
        {
            $('#paper_weight_input').append(`<option value="${All_table_obj.tables[2][index_].weight}"
            >${All_table_obj.tables[2][index_].weight}  </option>`);
        }
        for(var index_ = 0 ; index_ < All_table_obj.tables[3].length ; index_++)
        {
            $('#paper_size_input').append(`<option value="${All_table_obj.tables[3][index_].len} x ${All_table_obj.tables[3][index_].width}"
            >${All_table_obj.tables[3][index_].len} x ${All_table_obj.tables[3][index_].width} </option>`);
        }
        for(var index_ = 0 ; index_ < All_table_obj.tables[4].length ; index_++)
        {
            $('#paper_country_input').append(`<option value="${All_table_obj.tables[4][index_].country}"
            >${All_table_obj.tables[4][index_].country}  </option>`);
        }

 }

 function create_paper_table_employee(all_tables)
 {

    Loading_page_clear();

    var inputs_names_search = [
    "ID :"
    ,"Name :" 
    , "Phone :" 
    , "Lang :" 
    , "Email :" 
    , "Zoom Link :"
    , "User Name :"
    , "Permission :"
    , "Department :"
    , "Role :"

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

    createTable(all_tables ,All_data_obj , 'clear' , 2 , 6); 
}

function create_paper_table_customized_employee(all_tables)
{

    Loading_page_clear();

    var inputs_names_search = [
        "ID :"
        ,"Name :" 
        , "Phone :" 
        , "Lang :" 
        , "Email :" 
        , "Zoom Link :"
        , "User Name :"
        , "Permission :"
        , "Department :"
        , "Role :"
    
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
      createTable(all_tables ,All_data_obj , 'clear' , 2 , 6);
      return;
   }

    var result = Search_for_value(all_tables , values_)
        
   createTable(result ,All_data_obj , 'clear' , 2 , 6 ); 
}

function paper_inner_employee (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class='col-2 select2' name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}

