
var parent_col_arr = 
[
"name"
    ,"phone"
    ,"email"
    ,"name_2"
    ,"phone_2"
    ,"email_2"
    ,"address"
    ,"location"
    ,"job"
    ,"reg_status"
    ,"customer_agent_id"
    ,"sales_agent_id"
]

var student_col_arr = 
[

    "std_id"
    ,"parent_id"
    ,"free_session_status"
    ,"std_status"
    ,"name"
    ,"age"
    ,"birthdate"
]

var student_groups_col_arr = 
[

    "groups_id"
    ,"student_id"
    ,"status"
]

var student_package_col_arr = 
[

    "student_id"
    ,"package_id"
]

var invoice_col_arr = 
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
]

var att_feed_col_arr = 
[

    "student_id" 
    ,"session_id" 
    ,"attendance" 
    ,"feedback" 
]

var cs_calls_col_arr = 
[

    "call_type_id",
    "call_status_id",
    "cat_id",
    "close_id",
    "follow_date",
    "note",
    "call_id",
    "student_id",
    "parent_id"
]

var sales_calls_col_arr = 
[

    "call_type_id",
    "call_status_id",
    "cat_id",
    "close_id",
    "follow_date",
    "note",
    "call_id",
    "student_id",
    "parent_id"
]


async function DELETE_PARENT()
{
    Loading_page_set();

    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    document.getElementById("search-results").innerHTML = "";


    var result_return_parent_arr = await GET_DATA_TABLES(database_fixed_link , 'parent');
    var result_return_st_arr = await GET_DATA_TABLES(database_fixed_link , 'students');

    if(result_return_parent_arr && result_return_parent_arr !== undefined && result_return_parent_arr.length != 0){

        result_return_parent_arr.forEach(element_pt => {

            var counter_ = 0;
            var students_a = [];
            result_return_st_arr.forEach(element_st => {
                    if(element_st.parent_id == element_pt.id)
                    {
                        students_a[counter_] = element_st.id;
                        counter_++;
                    }
                });
                element_pt.st_count = counter_;
                element_pt.st_ids = students_a;

        })
    }


    html_create_lists_delete_parent("Location_1" , result_return_parent_arr);
    Loading_page_clear();

    $('#send_group').click(async function () {
        Loading_page_set();

        if($("#parent_input").val() == "")
        {
            alert('Please Select Parent');
            Loading_page_clear();
            return;
        }
            await delete_parent_($("#parent_input").val());

        });


}

async function delete_parent_(result)
{

    var result_return_parent_arr = await GET_DATA_TABLES(database_fixed_link , 'parent');
    var result_return_student_arr = await GET_DATA_TABLES(database_fixed_link , 'students');
    var result_return_student_group_arr = await GET_DATA_TABLES(database_fixed_link , 'student_groups');
    var result_return_student_package_arr = await GET_DATA_TABLES(database_fixed_link , 'student_package');
    var result_return_student_invoice_arr = await GET_DATA_TABLES(database_fixed_link , 'invoice');
    var result_return_student_att_feed_arr = await GET_DATA_TABLES(database_fixed_link , 'att_feed');
    var result_return_student_cs_calls_arr = await GET_DATA_TABLES(database_fixed_link , 'cs_calls');
    var result_return_student_sales_calls_arr = await GET_DATA_TABLES(database_fixed_link , 'sales_calls');

    var saved_student_id = 0;
    if(result_return_student_arr && result_return_student_arr !== undefined && result_return_student_arr.length != 0){


        await result_return_student_arr.forEach(async (element_st) =>   {


            console.log('Students');

            if(Number(element_st.parent_id) == Number(result) )
            {
                console.log(element_st);

                saved_student_id = element_st.id;
                // delete element_st.id; 
                // delete element_st.timestamp; 
                // var res = await ADD_DATA_TABLES_ONE_COL(database_fixed_link_history , 'students' , student_col_arr , Object.values(element_st) );
                // var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'students' , saved_student_id  );

                console.log('element_st_gp');

                if(result_return_student_group_arr && result_return_student_group_arr !== undefined && result_return_student_group_arr.length != 0){
                    await result_return_student_group_arr.forEach(async (element_st_gp) => {
                        if(Number(saved_student_id) == Number(element_st_gp.student_id) )
                        {
                            console.log(element_st_gp);


                            var saved_id = element_st_gp.id;
                            delete element_st_gp.id; 
                            delete element_st_gp.timestamp; 
                            // var res =  await ADD_DATA_TABLES_ONE_COL(database_fixed_link_history , 'student_groups' , student_groups_col_arr , Object.values(element_st_gp) );
                            // var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'student_groups' , saved_id  );

                        }
                    });
                }
            }
        }
        );

        await result_return_student_arr.forEach(async (element_st) =>   {
                saved_student_id = element_st.id;

                console.log('Students');

                if(Number(element_st.parent_id) == Number(result) )
                {
                    console.log('element_st_pac');
                    console.log(element_st);

                    if(result_return_student_package_arr && result_return_student_package_arr !== undefined && result_return_student_package_arr.length != 0){
                        await result_return_student_package_arr.forEach(async (element_st_pac) => {
                            if(Number(saved_student_id) == Number(element_st_pac.student_id) )
                            {
                                console.log(element_st_pac);

                                var saved_id = element_st_pac.id;
                                delete element_st_pac.id; 
                                delete element_st_pac.timestamp; 
                                // var res =  await ADD_DATA_TABLES_ONE_COL(database_fixed_link_history , 'student_package' , student_package_col_arr , Object.values(element_st_pac) );
                                // var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'student_package' , saved_id  );

                            }
                        });
                    }
            }

            }
            );
            await result_return_student_arr.forEach(async (element_st) =>   {

                saved_student_id = element_st.id;
                console.log('Students');

                if(Number(element_st.parent_id) == Number(result) )
                {
                    console.log('element_inv');
                    console.log(element_st);

                if(result_return_student_invoice_arr && result_return_student_invoice_arr !== undefined && result_return_student_invoice_arr.length != 0){
                    await result_return_student_invoice_arr.forEach(async (element_inv) => {
                        if(Number(saved_student_id) == Number(element_inv.student_id) )
                        {
                            console.log(element_inv);

                            var saved_id = element_inv.id;
                            delete element_inv.id; 
                            delete element_inv.timestamp; 
                            // var res = await ADD_DATA_TABLES_ONE_COL(database_fixed_link_history , 'invoice' , invoice_col_arr , Object.values(element_inv ));
                            // var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'invoice' , saved_id  );

                        }
                    });
                }
            }

            }
            );

            await result_return_student_arr.forEach(async (element_st) =>   {

                saved_student_id = element_st.id;
                console.log('Students');

                if(Number(element_st.parent_id) == Number(result) )
                {
                    console.log('element_att');
                    console.log(element_st);

                if(result_return_student_att_feed_arr && result_return_student_att_feed_arr !== undefined && result_return_student_att_feed_arr.length != 0){
                    await result_return_student_att_feed_arr.forEach(async (element_att) => {
                        if(Number(saved_student_id) == Number(element_att.student_id) )
                        {
                            console.log(element_att);

                            var saved_id = element_att.id;
                            delete element_att.id; 
                            delete element_att.timestamp; 
                            // var res =  await ADD_DATA_TABLES_ONE_COL(database_fixed_link_history , 'att_feed' , att_feed_col_arr , Object.values(element_att) );
                            // var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'att_feed' , saved_id  );

                        }
                    });
                }
                }

            }
            );


// console.log('element_cs');

    if(result_return_student_cs_calls_arr && result_return_student_cs_calls_arr !== undefined && result_return_student_cs_calls_arr.length != 0){
        await result_return_student_cs_calls_arr.forEach(async (element_cs) => {
            if(Number(result) == Number(element_cs.student_id) )
            {

                console.log(element_cs);

                var saved_id = element_cs.id;
                delete element_cs.id; 
                delete element_cs.timestamp; 
                // var res = await ADD_DATA_TABLES_ONE_COL(database_fixed_link_history , 'cs_calls' , cs_calls_col_arr , Object.values(element_cs) );
                // var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'cs_calls' , saved_id  );

            }
        });
    }

    console.log('element_sales');

    if(result_return_student_sales_calls_arr && result_return_student_sales_calls_arr !== undefined && result_return_student_sales_calls_arr.length != 0){
        await result_return_student_sales_calls_arr.forEach(async (element_sales) => {
            if(Number(result) == Number(element_sales.student_id) )
            {

                console.log(element_sales);

                var saved_id = element_sales.id;
                delete element_sales.id; 
                delete element_sales.timestamp; 
                // var res = await ADD_DATA_TABLES_ONE_COL(database_fixed_link_history , 'sales_calls' , sales_calls_col_arr , Object.values(element_sales) );
                // var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'sales_calls' , saved_id  );

            }
        });
    }

    console.log('element_pt');

    if(result_return_parent_arr && result_return_parent_arr !== undefined && result_return_parent_arr.length != 0){

        await result_return_parent_arr.forEach(async (element_pt) =>   {
            if(Number(element_pt.id) == Number(result))
            {
                
                console.log(element_pt);

                var saved_id = element_pt.id;
                // delete element_pt.id; 
                // delete element_pt.timestamp; 
                // var res =  await ADD_DATA_TABLES_ONE_COL(database_fixed_link_history , 'parent' , parent_col_arr , Object.values(element_pt) );
                // var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'parent' , saved_id  );
                // DELETE_PARENT();
            }

        });
    }

        }

}


async function html_create_lists_delete_parent(location_ , data_arr)
{

document.getElementById("Location_1").innerHTML = "";
document.getElementById("Location_2").innerHTML = "";
document.getElementById("Location_3").innerHTML = "";

document.getElementById(location_).innerHTML += `<div class='col justify-content-start'><button class='btn btn-danger' style='float:right;' id='send_group'>DELETE</button></div>`;
add_select_html_delete(location_ , "parent_input" , "Parent " , data_arr);


document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
document.getElementById(location_).innerHTML +=`<hr class="hr-primary" />`;
document.getElementById(location_).innerHTML +=`</div></div>`;


$('.select2').select2();

}



function add_select_html_delete (location_, paper_ , title , data_arr)
{
  result = `<label for="`+paper_+`">`+title+`:</label>
  <select class="col-9 select2" name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>`
  if(data_arr && data_arr !== undefined && data_arr.length != 0){
    for(var index = 0 ; index < Object.values(data_arr).length ; index++)
    {
        result +=  `<option value="${data_arr[index].id} "> ( ID : ${data_arr[index].id} ) - ( Name : ${data_arr[index].name} ) - ( Students : ${data_arr[index].st_count} | [${data_arr[index].st_ids}] ) </option>` 
    }
}
  result+=`</select>` ;
document.getElementById(location_).innerHTML += result


}

