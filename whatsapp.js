
async function send_whats_msg(token , instance , body , num , parent_id , parent_name , type)
{
      let result;
      try {
        result = await $.ajax({
        async: true,
        crossDomain: true,
        url: "https://api.ultramsg.com/"+instance+"/messages/chat",
        type: "post",
        headers: {},
        data: {
                token:  token,
                to: num,
                body: body,
                priority: "1",
                referenceId: ""
              }
            });

            //console.log(result);
          
        }
        catch (error)
        {
          console.error(error);
        }


        var data_to_send_database = [];
        data_to_send_database[0] = token;
        data_to_send_database[1] = instance;
        data_to_send_database[2] = body;
        data_to_send_database[3] = num;
        data_to_send_database[4] = result.sent;
        data_to_send_database[5] = result.message;
        data_to_send_database[6] = result.id;
        data_to_send_database[7] = parent_id;
        data_to_send_database[8] = parent_name;
        data_to_send_database[9] = type;
        
        var res = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'free_session_whatsapp' , 
        [
            "free_whats_token" 
            , "free_whats_instance" 
            , "free_whats_body" 
            , "free_whats_num" 
            , "free_whats_send" 
            , "free_whats_msg" 
            , "free_whats_msg_id" 
            , "free_whats_parent_id" 
            , "free_whats_parent_name" 
            , "free_whats_parent_type"

        ]
         , data_to_send_database )


        //  console.log(res);

         return res;
}

