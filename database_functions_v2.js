
//------------------------------------------------------------
//------------------------------------------------------------
//---------------------Database -------------------------
//------------------------------------------------------------



async function get_all_data_from_database_doAjax(All_data_obj)
{
  let result;
  try {
    result = await $.ajax({
    url: All_data_obj.Database_link,
    type: "post",
    data: {
            status: 'Getall' ,
            table: All_data_obj.table_
          }
        });
      return result;
    }
    catch (error)
    {
      console.error(error);
    }

}

async function get_one_data_from_database_doAjax(All_data_obj)
{
  let result;
  try {
    result = await $.ajax({
      url: All_data_obj.Database_link,
      type: "post",
      data: {
              status: 'Getoneuser' ,
              table: All_data_obj.table_  ,
              index_counter: Number(All_data_obj.index_num)
            } 
    });
      return result;
    }
    catch (error)
    {
      console.error(error);
    }
}

async function update_one_data_from_database_doAjax(All_data_obj , COL_DATA)
{
  let result;
  try {
    result = await $.ajax({
      url: All_data_obj.Database_link,
      type: "post",
      data: {
              status: 'Update' ,
              table: All_data_obj.table_ ,
              index_counter:All_data_obj.index_num ,
              cols_data: COL_DATA
            } 
    });
      return result;
    }
    catch (error)
    {
      console.error(error);
    }
}


async function delete_one_data_from_database_doAjax(All_data_obj )
{
  let result;
  try {
    result = await $.ajax({
      url: All_data_obj.Database_link,
      type: "post",
      data: {
                status: 'Delete' ,
                table: All_data_obj.table_ ,
                index_counter:All_data_obj.index_num
            }
    });
      return result;
    }
    catch (error)
    {
      console.error(error);
    }
}


async function add_one_data_from_database_doAjax(All_data_obj , all_elements_value )
{
  var Cols_names = database_col_parse_add(All_data_obj.inputs_col_);

  var arr = {input1 : Todate(new Date())[0]};
  for(var index = 0 ; index < all_elements_value.length; index++)
  {
    arr["input"+(index+2)] = all_elements_value[index]
  }

  let result;
  try {
    result = await   $.ajax({
      url: All_data_obj.Database_link,
      type: "post",
      data: {
              status: 'Add' ,
              table: All_data_obj.table_ ,
              cols: Cols_names,
              cols_data: arr
                            
            }
    });
      return result;
    }
    catch (error)
    {
      console.error(error);
    }
}


async function GET_DATA_TABLES(Database_link , Table_name)
{
    const All_req_obj = {};
    All_req_obj.Database_link = Database_link;
    All_req_obj.table_ =  Table_name;

    var result = await get_all_data_from_database_doAjax(All_req_obj);

    return JSON.parse(result);

}

async function GET_DATA_TABLES_ONE_COL(Database_link , Table_name , Col_num)
{

    const All_req_obj = {};
    All_req_obj.Database_link = Database_link;
    All_req_obj.table_ =  Table_name;
    All_req_obj.index_num = Col_num;
    var result = await get_one_data_from_database_doAjax(All_req_obj);
    return JSON.parse(result);
    
}

async function UPDATE_DATA_TABLES_ONE_COL(Database_link , Table_name , Col_num , COL_DATA )
{

    const All_req_obj = {};
    All_req_obj.Database_link = Database_link;
    All_req_obj.table_ =  Table_name;
    All_req_obj.index_num = Col_num;
    var result = await update_one_data_from_database_doAjax(All_req_obj , COL_DATA);

    return result;
            
}

async function DELETE_DATA_TABLES_ONE_COL(Database_link , Table_name , Col_num )
{

    const All_req_obj = {};
    All_req_obj.Database_link = Database_link;
    All_req_obj.table_ =  Table_name;
    All_req_obj.index_num = Col_num;
    var result = await delete_one_data_from_database_doAjax(All_req_obj );

    return result;
            
}

async function ADD_DATA_TABLES_ONE_COL(Database_link , Table_name , Table_Col , Table_data )
{

    const All_req_obj = {};
    All_req_obj.Database_link = Database_link;
    All_req_obj.table_ =  Table_name;
    All_req_obj.inputs_col_ = Table_Col;
    var result = await add_one_data_from_database_doAjax(All_req_obj , Table_data);

    return result;
            
}







