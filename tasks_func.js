


async function TASKS_DASHBOARD()
{
    Loading_page_set();

    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    document.getElementById("search-results").innerHTML = "";

    var get_age_arr = await GET_DATA_TABLES(database_fixed_link , 'age' );
    var get_lvl_arr = await GET_DATA_TABLES(database_fixed_link , 'level' );
    var get_lan_arr = await GET_DATA_TABLES(database_fixed_link , 'lan' );
    var get_session_type_arr = await GET_DATA_TABLES(database_fixed_link , 'session_type' );
    var get_track_arr = await GET_DATA_TABLES(database_fixed_link , 'track' );
    var get_material_arr = await GET_DATA_TABLES(database_fixed_link , 'tasks' );


    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;


    document.getElementById("Location_1").innerHTML +=`</div></div>`;

    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;


    document.getElementById("Location_1").innerHTML += `<label for="age_input">Age:</label>
    <select class="col-1 select2" name="age_input" id="age_input">
    <option value=""></option></select>`

    document.getElementById("Location_1").innerHTML += `<label for="type_input">Level:</label>
    <select class="col-1 select2" name="type_input" id="type_input">
    <option value=""></option></select>`

    document.getElementById("Location_1").innerHTML += `<label for="type_conv_input">Langauge:</label>
    <select class="col-1 select2" name="type_conv_input" id="type_conv_input">
    <option value=""></option></select>`

    document.getElementById("Location_1").innerHTML += `<label for="source_input">Type:</label>
    <select class="col-1 select2" name="source_input" id="source_input">
    <option value=""></option></select>`

    document.getElementById("Location_1").innerHTML += `<label for="other_input">Track:</label>
    <select class="col-1 select2" name="other_input" id="other_input">
    <option value=""></option></select>`

    document.getElementById("Location_1").innerHTML += `<label for="get_input">Category:</label>
    <select class="col-1 select2" name="get_input" id="get_input">
    <option value=""></option>
    <option value="multi">Multi Choose</option>
    <option value="tf">True&false</option>
    </select>`

    document.getElementById("Location_1").innerHTML +=`<label> Session Number : </label><input class='col-1' id='se_num_input' type='number'/>`;


    document.getElementById("Location_1").innerHTML +=`</div></div>`;

    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML +=`<label> Question : </label><input class='col-9' id='question_id' type='text'/>`;
    document.getElementById("Location_1").innerHTML +=`</div></div>`;
    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML +=`<label> Option 1: </label><input class='col-9' id='option1_id' type='text'/>`;
    document.getElementById("Location_1").innerHTML +=`</div></div>`;
    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML +=`<label> Option 2: </label><input class='col-9' id='option2_id' type='text'/>`;
    document.getElementById("Location_1").innerHTML +=`</div></div>`;
    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML +=`<label> Option 3: </label><input class='col-9' id='option3_id' type='text'/>`;
    document.getElementById("Location_1").innerHTML +=`</div></div>`;

    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML += `<label for="correct_id">Correct Answer:</label>
    <select class="col-1 select2" name="correct_id" id="correct_id">
    <option value=""></option>
    </select>`


    document.getElementById("Location_1").innerHTML +=`<label> Points: </label><input class='col-1' id='points_id' type='number'/>`;
    document.getElementById("Location_1").innerHTML +=`</div></div>`;

    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML +=`</div></div>`;
    
    for(var index = 0 ; index < Object.values(get_lvl_arr).length ; index++)
    {
        $('#type_input').append(`<option value="${get_lvl_arr[index].id}">${get_lvl_arr[index].name} </option>`); 
    }
    for(var index = 0 ; index < Object.values(get_lan_arr).length ; index++)
    {
        $('#type_conv_input').append(`<option value="${get_lan_arr[index].id}">${get_lan_arr[index].name} </option>`); 
    }
    for(var index = 0 ; index < Object.values(get_session_type_arr).length ; index++)
    {
        $('#source_input').append(`<option value="${get_session_type_arr[index].id}">${get_session_type_arr[index].name} </option>`); 
    }
    for(var index = 0 ; index < Object.values(get_track_arr).length ; index++)
    {
        $('#other_input').append(`<option value="${get_track_arr[index].id}">${get_track_arr[index].name} </option>`); 
    }
    for(var index = 0 ; index < Object.values(get_age_arr).length ; index++)
    {
        $('#age_input').append(`<option value="${get_age_arr[index].id}">${get_age_arr[index].name} </option>`); 
    }

    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    document.getElementById("Location_1").innerHTML += `<div class='col justify-content-start'><button class='btn btn-success' style='float:right;' id='send_group'>ADD</button></div>`;
    document.getElementById("Location_1").innerHTML +=`</div></div>`;

    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML +=`<div class="input-group">
    <div class='col justify-content-start'>
      <input type="search" id="search_all" class="form-control" />
    </div><div id='search_assign'> </div><div class='col justify-content-start' style='z-index:0;'><button type="button" id='search_btn' class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button> Count : <input id='counter_id' readonly></div>
  </div>`;

  document.getElementById("Location_1").innerHTML +=`</div></div>`;

  document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById("Location_1").innerHTML +=`</div></div>`;


    $('.select2').select2();


    create_table_task_func(get_material_arr);

    $("#option1_id").prop('disabled', true);
    $("#option2_id").prop('disabled', true);
    $("#option3_id").prop('disabled', true);


    $('#get_input').change(async function () {

        if($('#get_input').val() == "multi")
        {
            $('#correct_id').empty(); 

            $('#correct_id').append(`<option value=""></option>`); 
            $('#correct_id').append(`<option value="option1">Option 1</option>`); 
            $('#correct_id').append(`<option value="option2">Option 2</option>`); 
            $('#correct_id').append(`<option value="option3">Option 3</option>`);
            $("#option1_id").prop('disabled', false);
            $("#option2_id").prop('disabled', false);
            $("#option3_id").prop('disabled', false);
        }        
        else if ($('#get_input').val() == "tf")
        {
            $('#correct_id').empty(); 
            $('#correct_id').append(`<option value=""></option>`); 
            $('#correct_id').append(`<option value="option1">Option 1</option>`); 
            $('#correct_id').append(`<option value="option2">Option 2</option>`); 
            $("#option1_id").prop('disabled', false);
            $("#option2_id").prop('disabled', false);
            $("#option3_id").prop('disabled', true);
        
        }
        else
        {
            $('#correct_id').empty(); 
            $('#correct_id').append(`<option value=""></option>`); 
            $("#option1_id").prop('disabled', true);
            $("#option2_id").prop('disabled', true);
            $("#option3_id").prop('disabled', true);
        }

    }
    )

    $('#send_group').click(async function () {
        Loading_page_set();

        var input_send_data = [];
        var input_send_data_count = 0;


        input_send_data[input_send_data_count] = $("#type_input").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#type_conv_input").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#source_input").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#other_input").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#se_num_input").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#get_input").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#option1_id").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#option2_id").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#option3_id").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#correct_id").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#points_id").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#question_id").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#age_input").val();input_send_data_count++;
        

        

        if(input_send_data[12] == ""){alert("Please Choose Age");Loading_page_clear();return;}
        if(input_send_data[0] == ""){alert("Please Choose Level");Loading_page_clear();return;}
        if(input_send_data[1] == ""){alert("Please Choose Language");Loading_page_clear();return;}
        if(input_send_data[2] == ""){alert("Please Choose Type");Loading_page_clear();return;}
        if(input_send_data[3] == ""){alert("Please Choose Track");Loading_page_clear();return;}
        if(input_send_data[4] == ""){alert("Set Session Number");Loading_page_clear();return;}
        if(input_send_data[5] == ""){alert("Please Choose Category");Loading_page_clear();return;}
        if(input_send_data[11] == ""){alert("Please type question");Loading_page_clear();return;}
        if($("#get_input").val() == 'multi')
        {
            if(input_send_data[6] == ""){alert("Set Option 1");Loading_page_clear();return;}
            if(input_send_data[7] == ""){alert("Set Option 2");Loading_page_clear();return;}
            if(input_send_data[8] == ""){alert("Set Option 3");Loading_page_clear();return;}
        }
        else
        {
            if(input_send_data[6] == ""){alert("Set Option 1");Loading_page_clear();return;}
            if(input_send_data[7] == ""){alert("Set Option 2");Loading_page_clear();return;}
        }
        if(input_send_data[9] == ""){alert("Set Correct");Loading_page_clear();return;}
        if(input_send_data[10] == ""){alert("Set Points");Loading_page_clear();return;}



        var response = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'tasks' ,
        [
            "level_id",
            "lan_id",
            "session_type_id",
            "track_id",
            "session_num",
            "type",
            "option1",
            "option2",
            "option3",
            "correct",
            "points",
            "question",
            "age_id"
            
        ]
        ,
        input_send_data);

        alert(response);

        TASKS_DASHBOARD();
    });

    $('#search_btn').click(async function (index) {  
        Loading_page_set();

        var get_marketing_arr_search = await GET_DATA_TABLES(database_fixed_link , 'tasks' );
        create_table_task_func(get_marketing_arr_search);

        });

}

 async function create_table_task_func(data_table)
 {
    var get_lvl_arr = await GET_DATA_TABLES(database_fixed_link , 'level' );
    var get_lan_arr = await GET_DATA_TABLES(database_fixed_link , 'lan' );
    var get_session_type_arr = await GET_DATA_TABLES(database_fixed_link , 'session_type' );
    var get_track_arr = await GET_DATA_TABLES(database_fixed_link , 'track' );
    var get_age_arr = await GET_DATA_TABLES(database_fixed_link , 'age' );


    if(data_table && data_table !== undefined && data_table.length != 0){


        data_table.forEach(element => {

            get_lvl_arr.forEach(element_type => {
                if(Number(element_type.id) == Number(element.level_id))
                {
                    element.level_id = element_type.name
                }
            })
    
            get_lan_arr.forEach(element_conv => {
                if(Number(element_conv.id) == Number(element.lan_id))
                {
                    element.lan_id = element_conv.name
                }
            })
    
            get_session_type_arr.forEach(element_sou => {
                if(Number(element_sou.id) == Number(element.session_type_id	))
                {
                    element.session_type_id	 = element_sou.name
                }
            })
    
            get_track_arr.forEach(element_oth => {
                if(Number(element_oth.id) == Number(element.track_id))
                {
                    element.track_id = element_oth.name
                }
            })

            get_age_arr.forEach(element_age => {
                if(Number(element_age.id) == Number(element.age_id))
                {
                    element.age_id = element_age.name
                }
            })

        });
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
    , "CS Agent :"
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
       if(data_table)
       {
        $('#counter_id').val(data_table.length)
       }

       createTable_task( data_table ,All_data_obj ); ;
       return;
    }
    var result = [];
    if(data_table)
    {
     result = Search_for_value(data_table , values_);

        $('#counter_id').val(result.length)
     }
     createTable_task(result ,All_data_obj , 'clear'); 

}

function createTable_task(dataArray ,All_data_obj ) {

    var end_of_arr = 0;
 
      clear(All_data_obj.location_next);
      next_Section(All_data_obj.location_next);
  
  
  
    if(dataArray && dataArray !== undefined && dataArray.length != 0){

  
      All_data_obj.edit_index = [];
      All_data_obj.delete_index = [];
      All_data_obj.index_num_value = [];
  
      if(All_data_obj.Start_Index > dataArray.length)
      {
          var div = document.getElementById(All_data_obj.table_div);
          div.innerHTML = '';
          clear(All_data_obj.location_next);
          return;
      }
      var End_Index = 0;
      if( (dataArray.length - All_data_obj.Start_Index ) >= 10)
      {
          End_Index = All_data_obj.Start_Index + 9;
      }
      else{
          End_Index = dataArray.length;
      }
  
  
      document.getElementById(All_data_obj.location_index).innerHTML = `<label>`+Math.ceil(All_data_obj.Start_Index/10)+" - "+Math.ceil(dataArray.length/10)+` </label>`;
  
      var result = "<table class='table' id='dtable'>"+
                   "<thead   style='white-space:wrap' >"+
                     "<tr>";                               //Change table headings to match witht he Google Sheet
                    
                     result +="<th scope='col'>About</th>";
                     result +="<th scope='col'>Sessions</th>";
                     result +="<th scope='col'>Options</th>";
 
                result += "</tr>"+
                          "</thead>";
                  var counter = 0;
           
               for(var index = 0 ; index < Object.values(dataArray).length; index ++)
               {
                result += "<tr>";
                result += "<td>";
                result += `ID : ${dataArray[index].id}<br>`;
                result += `Age : ${dataArray[index].age_id}<br>`;
                result += `Level : ${dataArray[index].level_id}<br>`;
                result += `Language : ${dataArray[index].lan_id}<br>`;
                result += `Type : ${dataArray[index].session_type_id}<br>`;
                result += `Track : ${dataArray[index].track_id}<br>`;

                result += "</td>";

                result += "<td>";
                result += `Session Number : ${dataArray[index].session_num}<br>`;
                result += `Type : ${dataArray[index].type}<br>`;
                result += `Points : ${dataArray[index].points}<br>`;
                result += "</td>";

                result += "<td>";

                result += `Q : ${dataArray[index].question}<br>`;

                if(dataArray[index].type == 'multi')
                {
                    result += `Option 1 : ${dataArray[index].option1}<br>`;
                    result += `Option 2 : ${dataArray[index].option2}<br>`;
                    result += `Option 3 : ${dataArray[index].option3}<br>`;
                    result += `Correct Answer : <label style='color:green'>${dataArray[index].correct}</label>`;
                }
                else if(dataArray[index].type == 'tf')
                {
                    result += `Option 1 : ${dataArray[index].option1}<br>`;
                    result += `Option 2 : ${dataArray[index].option2}<br>`;
                    result += `Correct Answer : <label style='color:green'>${dataArray[index].correct}</label>`;
                }
                result += "</td>";

                result += "</tr>";
               }

      result += "</table>";
      var div = document.getElementById(All_data_obj.table_div);
      div.innerHTML = result;
  
  

    }else{
      var div = document.getElementById(All_data_obj.table_div);
      div.innerHTML = "Data not found!";
    }
  
  
    $(document).ready(function () {
      $(All_data_obj.next_btn).click(function () {
  
      if( (dataArray.length - All_data_obj.Start_Index ) > 10)
      {
  
          All_data_obj.Start_Index = End_Index+1;
          createTable_material(dataArray ,All_data_obj )
      }
      else if( (dataArray.length - All_data_obj.Start_Index ) < 10 &&  (dataArray.length - All_data_obj.Start_Index ) > 0)
      {
        if(End_Index+1 > dataArray.length)
        {
  
        }
        else{
          All_data_obj.Start_Index = End_Index+1;
          createTable_material(dataArray ,All_data_obj )
        }
  
  
      }
      else{
  
      }
      });
  
      $(All_data_obj.prev_btn).click(function () {
  
          var perv = All_data_obj.Start_Index - 10;
          
          if(perv > 0)
          {
            All_data_obj.Start_Index = perv;
            createTable_material(dataArray ,All_data_obj )
          }
  });
  $(All_data_obj.ind_btn).change(function () {
  
              var value_pages = document.getElementById('page_index').value;
              var value_pages_multi = (value_pages*10);
  
              
              if(value_pages_multi >0)
              {
  
              if( dataArray.length > value_pages_multi  )
                  {
                      All_data_obj.Start_Index = value_pages_multi-9;
                      createTable_material(dataArray ,All_data_obj )
                  }
                  else{
                      if((value_pages_multi - dataArray.length ) < 10)
                      {
                          All_data_obj.Start_Index = value_pages_multi-9;
                          createTable_material(dataArray ,All_data_obj )
                      }
                  }
              }
      });
  
  });
  
  Loading_page_clear();
    return End_Index;
  }
  
