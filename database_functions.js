
//------------------------------------------------------------
//------------------------------------------------------------
//---------------------Database -------------------------
//------------------------------------------------------------


function get_all_data_from_database(All_data_obj)
{
    $.ajax({
        url: All_data_obj.Database_link,
        type: "post",
        data: {
                status: 'Getall' ,
                table: All_data_obj.table_
              } ,
        success: function (response) {
            All_data_obj.obj = jQuery.parseJSON( response );
            All_data_obj.callbackfunc(All_data_obj);
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });
}





function get_one_data_from_database(All_data_obj)
{

      $.ajax({
        url: All_data_obj.Database_link,
        type: "post",
        data: {
                status: 'Getoneuser' ,
                table: All_data_obj.table_  ,
                index_counter: Number(All_data_obj.index_num)
              } ,
        success: function (response) {
            All_data_obj.obj = jQuery.parseJSON( response );
            All_data_obj.callbackfunc(All_data_obj);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
        }
      });
}

function update_one_data_from_database(All_data_obj , COL_DATA)
{
  $.ajax({
    url: All_data_obj.Database_link,
    type: "post",
    data: {
            status: 'Update' ,
            table: All_data_obj.table_ ,
            index_counter:All_data_obj.index_num ,
            cols_data: COL_DATA

          } ,
    success: function (response) {
      All_data_obj.callbackfunc(All_data_obj , response);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });
}

function add_one_data_from_database(All_data_obj, all_elements_value )
{

  var results = database_col_parse_add(All_data_obj.inputs_col_);

var arr = [];
  for(var index = 0 ; index < all_elements_value.length; index++)
  {
    arr[index] = {input : all_elements_value[index]};
  }


  $.ajax({
    url: All_data_obj.Database_link,
    type: "post",
    data: {
            status: 'Add' ,
            table: All_data_obj.table_ ,
            cols: results,
            cols_data: {
              input1 : Todate(new Date())[0],
              input2 :all_elements_value[0] ,
              input3 :all_elements_value[1] ,
              input4 :all_elements_value[2] ,
              input5 :all_elements_value[3] ,
              input6 :all_elements_value[4] ,
              input7 :all_elements_value[5] ,
              input8 :all_elements_value[6] ,
              input9 :all_elements_value[7] ,
              input10 :all_elements_value[8] ,
              input11 :all_elements_value[9] ,
              input12 :all_elements_value[10] ,
              input13 :all_elements_value[11] ,
              input14 :all_elements_value[12] ,
              input15 :all_elements_value[13] ,
              input16 :all_elements_value[14] ,
              input17 :all_elements_value[15] ,
              input18 :all_elements_value[16] ,
              input19 :all_elements_value[17] ,
              input20 :all_elements_value[18] ,
              input21 :all_elements_value[19] ,
              input22 :all_elements_value[20] ,
              input23 :all_elements_value[21] ,
              input24 :all_elements_value[22] ,
              input25 :all_elements_value[23] ,
            }
                          
          } ,
    success: function (response) {
      All_data_obj.callbackfunc(All_data_obj , response);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });

}


function delete_one_data_from_database(All_data_obj , response )
{
  $.ajax({
    url: All_data_obj.Database_link,
    type: "post",
    data: {
              status: 'Delete' ,
              table: All_data_obj.table_ ,
              index_counter:All_data_obj.index_num
          } ,
    success: function (response) {
      All_data_obj.callbackfunc(All_data_obj);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });
}









