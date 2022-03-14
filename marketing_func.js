


async function MARKETING_DASHBOARD()
{
    Loading_page_set();

    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    document.getElementById("search-results").innerHTML = "";

    var get_type_arr = await GET_DATA_TABLES(database_fixed_link , 'mrkt_type' );
    var get_conv_type_arr = await GET_DATA_TABLES(database_fixed_link , 'mrkt_conv_type' );
    var get_source_arr = await GET_DATA_TABLES(database_fixed_link , 'mrkt_source' );
    var get_other_arr = await GET_DATA_TABLES(database_fixed_link , 'mrkt_others' );
    var get_marketing_arr = await GET_DATA_TABLES(database_fixed_link , 'marketing' );


    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML +=`<label> Name : </label><input class='col-2' id='name_input' type='text'/>`;
    document.getElementById("Location_1").innerHTML +=`<label> Description : </label><input class='col-6' id='des_input' type='text'/>`;

    document.getElementById("Location_1").innerHTML +=`</div></div>`;

    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML += `<label for="type_input">Type:</label>
    <select class="col-2 select2" name="type_input" id="type_input">
    <option value=""></option></select>`

    document.getElementById("Location_1").innerHTML += `<label for="type_conv_input">Type Convertion:</label>
    <select class="col-2 select2" name="type_conv_input" id="type_conv_input">
    <option value=""></option></select>`

    document.getElementById("Location_1").innerHTML += `<label for="source_input">Type Convertion:</label>
    <select class="col-2 select2" name="source_input" id="source_input">
    <option value=""></option></select>`

    document.getElementById("Location_1").innerHTML += `<label for="other_input">Type Convertion:</label>
    <select class="col-2 select2" name="other_input" id="other_input">
    <option value=""></option></select>`


    document.getElementById("Location_1").innerHTML +=`</div></div>`;

    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML +=`<label> URL : </label><input class='col-9' id='url_input' type='text'/>`;

    document.getElementById("Location_1").innerHTML +=`</div></div>`;

    
    for(var index = 0 ; index < Object.values(get_type_arr).length ; index++)
    {
        $('#type_input').append(`<option value="${get_type_arr[index].id}">${get_type_arr[index].name} </option>`); 
    }
    for(var index = 0 ; index < Object.values(get_conv_type_arr).length ; index++)
    {
        $('#type_conv_input').append(`<option value="${get_conv_type_arr[index].id}">${get_conv_type_arr[index].name} </option>`); 
    }
    for(var index = 0 ; index < Object.values(get_source_arr).length ; index++)
    {
        $('#source_input').append(`<option value="${get_source_arr[index].id}">${get_source_arr[index].name} </option>`); 
    }
    for(var index = 0 ; index < Object.values(get_other_arr).length ; index++)
    {
        $('#other_input').append(`<option value="${get_other_arr[index].id}">${get_other_arr[index].name} </option>`); 
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


    create_table_marketing_func(get_marketing_arr);

    $('#send_group').click(async function () {
        Loading_page_set();

        var input_send_data = [];
        var input_send_data_count = 0;

        input_send_data[input_send_data_count] = $("#name_input").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#des_input").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#type_input").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#type_conv_input").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#source_input").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#other_input").val();input_send_data_count++;
        input_send_data[input_send_data_count] = $("#url_input").val();input_send_data_count++;
        

        if(input_send_data[0] == ""){alert("Set Name");Loading_page_clear();return;}
        if(input_send_data[2] == ""){alert("Please Choose type");Loading_page_clear();return;}
        if(input_send_data[3] == ""){alert("Please Choose Convertion type");Loading_page_clear();return;}
        if(input_send_data[4] == ""){alert("Please Choose Source");Loading_page_clear();return;}
        if(input_send_data[5] == ""){alert("Please Choose Other");Loading_page_clear();return;}
        if(input_send_data[6] == ""){alert("Set URL");Loading_page_clear();return;}

        var response = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'marketing' ,
        [
            "name",
            "disc",
            "mrkt_type_id",
            "mrkt_conv_type_id",
            "mrkt_source_id",
            "mrkt_others_id",
            "url_camp"
            
        ]
        ,
        input_send_data);

        alert(response);

        MARKETING_DASHBOARD();
    });

    $('#search_btn').click(async function (index) {  
        Loading_page_set();

        var get_marketing_arr_search = await GET_DATA_TABLES(database_fixed_link , 'marketing' );
        create_table_marketing_func(get_marketing_arr_search);

        });

        // Loading_page_clear();

}

 async function create_table_marketing_func(data_table)
 {


    var get_type_arr = await GET_DATA_TABLES(database_fixed_link , 'mrkt_type' );
    var get_conv_type_arr = await GET_DATA_TABLES(database_fixed_link , 'mrkt_conv_type' );
    var get_source_arr = await GET_DATA_TABLES(database_fixed_link , 'mrkt_source' );
    var get_other_arr = await GET_DATA_TABLES(database_fixed_link , 'mrkt_others' );

    if(data_table && data_table !== undefined && data_table.length != 0){
  

        data_table.forEach(element => {

            get_type_arr.forEach(element_type => {
                if(Number(element_type.id) == Number(element.mrkt_type_id))
                {
                    element.mrkt_type_id = element_type.name
                }
            })
    
            get_conv_type_arr.forEach(element_conv => {
                if(Number(element_conv.id) == Number(element.mrkt_conv_type_id))
                {
                    element.mrkt_conv_type_id = element_conv.name
                }
            })
    
            get_source_arr.forEach(element_sou => {
                if(Number(element_sou.id) == Number(element.mrkt_source_id))
                {
                    element.mrkt_source_id = element_sou.name
                }
            })
    
            get_other_arr.forEach(element_oth => {
                if(Number(element_oth.id) == Number(element.mrkt_others_id))
                {
                    element.mrkt_others_id = element_oth.name
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

       createTable_marketing( data_table ,All_data_obj ); ;
       return;
    }
    var result = [];
    if(data_table)
    {
     result = Search_for_value(data_table , values_);

        $('#counter_id').val(result.length)
     }
     createTable_marketing(result ,All_data_obj , 'clear'); 

}

async function createTable_marketing(dataArray ,All_data_obj ) {
  


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
                     result +="<th scope='col'>Info</th>";
                     result +="<th scope='col'>URL</th>";
 
                result += "</tr>"+
                          "</thead>";
                  var counter = 0;
           
               for(var index = 0 ; index < Object.values(dataArray).length; index ++)
               {
                result += "<tr>";
                result += "<td>";
                result += `ID : ${dataArray[index].id}<br>`;
                result += `Name : ${dataArray[index].name}<br>`;
                result += `Description : ${dataArray[index].disc}`;
                result += "</td>";
                result += "<td>";
                result += `Type : ${dataArray[index].mrkt_type_id}<br>`;
                result += `Convertion Type : ${dataArray[index].mrkt_conv_type_id}<br>`;
                result += `Source : ${dataArray[index].mrkt_source_id}<br>`;
                result += `Others : ${dataArray[index].mrkt_others_id}`;
                result += "</td>";
                result += "<td>";
                result += `<a href="${dataArray[index].url_camp}?camp_id=${dataArray[index].id}" target="_blank">${dataArray[index].url_camp}?camp_id=${dataArray[index].id}</a>`;
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
          createTable_marketing(dataArray ,All_data_obj )
      }
      else if( (dataArray.length - All_data_obj.Start_Index ) < 10 &&  (dataArray.length - All_data_obj.Start_Index ) > 0)
      {
        if(End_Index+1 > dataArray.length)
        {
  
        }
        else{
          All_data_obj.Start_Index = End_Index+1;
          createTable_marketing(dataArray ,All_data_obj )
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
            createTable_marketing(dataArray ,All_data_obj )
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
                      createTable_marketing(dataArray ,All_data_obj )
                  }
                  else{
                      if((value_pages_multi - dataArray.length ) < 10)
                      {
                          All_data_obj.Start_Index = value_pages_multi-9;
                          createTable_marketing(dataArray ,All_data_obj )
                      }
                  }
              }
      });
  
  });
  
  Loading_page_clear();
    return End_Index;
  }
  
