
var parent_col_arr = 
[
    "id",
    "timestamp",
"name"
    ,"phone"
    ,"email"
    ,"name_2"
    ,"phone_2"
    ,"email_2"
    ,"address"
    ,"location"
    ,"job"
    ,"marketing_id"
    ,"customer_agent_id"
    ,"sales_agent_id"
    ,"username"
    ,"password"
]

var student_col_arr = 
[
    "id",
    "timestamp",
    "std_id"
    ,"parent_id"
    ,"free_session_status"
    ,"std_status"
    ,"st_name"
    ,"age"
    ,"birthdate"
]

var student_groups_col_arr = 
[
    "id",
    "timestamp",
    "groups_id"
    ,"student_id"
    ,"status"
]

var student_package_col_arr = 
[
    "id",
    "timestamp",
    "student_id"
    ,"package_id"
]

var invoice_col_arr = 
[
    "id",
    "timestamp",
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
    "id",
    "timestamp",
    "student_id" 
    ,"session_id" 
    ,"attendance" 
    ,"feedback" 
]

var cs_calls_col_arr = 
[
    "id",
    "timestamp",
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
    "id",
    "timestamp",
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

    clear_all_locations();



    document.getElementById("Location_1").innerHTML += `<button class='btn btn-info' id='check_for_all'>All</button> `;
    document.getElementById("Location_1").innerHTML += `<button class='btn btn-danger' id='check_for_not'>Not Registered</button> `;
    document.getElementById("Location_1").innerHTML += `<button class='btn btn-success' id='check_for'>Registered</button> `;
    document.getElementById("Location_1").innerHTML += `<input id='check_for_counter' readonly/>`;

    html_create_lists_delete_parent("Location_2" , []);


    Loading_page_set();

    var result_return_parent_arr = await GET_DATA_TABLES(database_fixed_link , 'parent');
    var result_return_st_arr = await GET_DATA_TABLES(database_fixed_link , 'students');
    var result_return_student_package_arr = await GET_DATA_TABLES(database_fixed_link , 'student_package');

    var list_arr = []
    var list_arr_count = 0;
    var parent_count = 0;

    if(result_return_parent_arr && result_return_parent_arr !== undefined && result_return_parent_arr.length != 0){

        result_return_parent_arr.forEach(element_pt => {

            var counter_ = 0;
            var students_a = [];
            var check_reg = false ;

            result_return_st_arr.forEach(element_st => {
                    if(element_st.parent_id == element_pt.id)
                    {
                        students_a[counter_] = element_st.id;
                        counter_++;
                        result_return_student_package_arr.forEach(element_pc => {
                            if(element_pc.student_id == element_st.id)
                            {
                                check_reg = true;
                            }
                        });

                    }


                });
                element_pt.st_count = counter_;
                element_pt.st_ids = students_a;
                element_pt.registered = check_reg;

                    list_arr[list_arr_count] = element_pt;list_arr_count++;
                    parent_count++;


        })
    }

    $("#check_for_counter").val(parent_count);

    html_create_lists_delete_parent("Location_2" , list_arr);
    Loading_page_clear();

    $('#send_group').click(async function () {
        Loading_page_set();

        if($("#parent_input").val() == "")
        {
            alert('Please Select Parent');
            Loading_page_clear();
            return;
        }
        if (confirm("You want to delete parent!") == true) {

            await delete_parent_($("#parent_input").val());
        }
        else
        {
            Loading_page_clear();

        }

        });



    

    $('#check_for_not').click(async function (index) {  
        Loading_page_set();

        var result_return_parent_arr = await GET_DATA_TABLES(database_fixed_link , 'parent');
        var result_return_st_arr = await GET_DATA_TABLES(database_fixed_link , 'students');
        var result_return_student_package_arr = await GET_DATA_TABLES(database_fixed_link , 'student_package');
    
        var list_arr = []
        var list_arr_count = 0;
        var parent_count = 0;

        if(result_return_parent_arr && result_return_parent_arr !== undefined && result_return_parent_arr.length != 0){

            result_return_parent_arr.forEach(element_pt => {
    
                var counter_ = 0;
                var students_a = [];
                var check_reg = false ;

                result_return_st_arr.forEach(element_st => {
                        if(element_st.parent_id == element_pt.id)
                        {
                            students_a[counter_] = element_st.id;
                            counter_++;

                            result_return_student_package_arr.forEach(element_pc => {
                                if(element_pc.student_id == element_st.id)
                                {
                                    check_reg = true;
                                }
                            });


                        }
                    });
                    element_pt.st_count = counter_;
                    element_pt.st_ids = students_a;
                    element_pt.registered = check_reg;

                    if(check_reg == false)
                    {
                        list_arr[list_arr_count] = element_pt;list_arr_count++;
                        parent_count++;

                    }

            })
        }

        $("#check_for_counter").val(parent_count);
        html_create_lists_delete_parent("Location_2" , list_arr);
        Loading_page_clear();
        $('#send_group').click(async function () {
            Loading_page_set();
    
            if($("#parent_input").val() == "")
            {
                alert('Please Select Parent');
                Loading_page_clear();
                return;
            }
            if (confirm("You want to delete parent!") == true) {
    
                await delete_parent_($("#parent_input").val());
            }
            else
            {
                Loading_page_clear();
    
            }
    
            });
    });

    $('#check_for').click(async function (index) {  
        Loading_page_set();

        var result_return_parent_arr = await GET_DATA_TABLES(database_fixed_link , 'parent');
        var result_return_st_arr = await GET_DATA_TABLES(database_fixed_link , 'students');
        var result_return_student_package_arr = await GET_DATA_TABLES(database_fixed_link , 'student_package');
    
        var list_arr = []
        var list_arr_count = 0;
        var parent_count = 0;

        if(result_return_parent_arr && result_return_parent_arr !== undefined && result_return_parent_arr.length != 0){

            result_return_parent_arr.forEach(element_pt => {
    
                var counter_ = 0;
                var students_a = [];
                var check_reg = false ;

                result_return_st_arr.forEach(element_st => {
                        if(element_st.parent_id == element_pt.id)
                        {
                            students_a[counter_] = element_st.id;
                            counter_++;

                            result_return_student_package_arr.forEach(element_pc => {
                                if(element_pc.student_id == element_st.id)
                                {
                                    check_reg = true;
                                }
                            });


                        }
                    });
                    element_pt.st_count = counter_;
                    element_pt.st_ids = students_a;
                    element_pt.registered = check_reg;

                    if(check_reg == true)
                    {
                        list_arr[list_arr_count] = element_pt;list_arr_count++;
                        parent_count++;

                    }


            })
        }

        $("#check_for_counter").val(parent_count);

        html_create_lists_delete_parent("Location_2" , list_arr);
        Loading_page_clear();

        $('#send_group').click(async function () {
            Loading_page_set();
    
            if($("#parent_input").val() == "")
            {
                alert('Please Select Parent');
                Loading_page_clear();
                return;
            }
            if (confirm("You want to delete parent!") == true) {
    
                await delete_parent_($("#parent_input").val());
            }
            else
            {
                Loading_page_clear();
    
            }
    
            });
    });

    $('#check_for_all').click(async function (index) {  
        Loading_page_set();

        var result_return_parent_arr = await GET_DATA_TABLES(database_fixed_link , 'parent');
        var result_return_st_arr = await GET_DATA_TABLES(database_fixed_link , 'students');
        var result_return_student_package_arr = await GET_DATA_TABLES(database_fixed_link , 'student_package');
    
        var list_arr = []
        var list_arr_count = 0;
        var parent_count = 0;

        if(result_return_parent_arr && result_return_parent_arr !== undefined && result_return_parent_arr.length != 0){

            result_return_parent_arr.forEach(element_pt => {
    
                var counter_ = 0;
                var students_a = [];
                var check_reg = false ;

                result_return_st_arr.forEach(element_st => {
                        if(element_st.parent_id == element_pt.id)
                        {
                            students_a[counter_] = element_st.id;
                            counter_++;
                            result_return_student_package_arr.forEach(element_pc => {
                                if(element_pc.student_id == element_st.id)
                                {
                                    check_reg = true;
                                }
                            });

                        }


                    });
                    element_pt.st_count = counter_;
                    element_pt.st_ids = students_a;
                    element_pt.registered = check_reg;

                        list_arr[list_arr_count] = element_pt;list_arr_count++;
                        parent_count++;


            })
        }

        $("#check_for_counter").val(parent_count);

        html_create_lists_delete_parent("Location_2" , list_arr);
        Loading_page_clear();

        $('#send_group').click(async function () {
            Loading_page_set();
    
            if($("#parent_input").val() == "")
            {
                alert('Please Select Parent');
                Loading_page_clear();
                return;
            }
            if (confirm("You want to delete parent!") == true) {
    
                await delete_parent_($("#parent_input").val());
            }
            else
            {
                Loading_page_clear();
    
            }
    
            });

    });




}

async function delete_parent_(result)
{
    var copy_result_return_student_arr = [];

    var result_return_parent_arr = await GET_DATA_TABLES(database_fixed_link , 'parent');
    var result_return_student_arr = await GET_DATA_TABLES(database_fixed_link , 'students');
    var result_return_student_group_arr = await GET_DATA_TABLES(database_fixed_link , 'student_groups');
    var result_return_student_package_arr = await GET_DATA_TABLES(database_fixed_link , 'student_package');
    var result_return_student_invoice_arr = await GET_DATA_TABLES(database_fixed_link , 'invoice');
    var result_return_student_att_feed_arr = await GET_DATA_TABLES(database_fixed_link , 'att_feed');
    var result_return_student_cs_calls_arr = await GET_DATA_TABLES(database_fixed_link , 'cs_calls');
    var result_return_student_sales_calls_arr = await GET_DATA_TABLES(database_fixed_link , 'sales_calls');

    copy_result_return_student_arr = result_return_student_arr;

    var saved_student_id = 0;
    if(result_return_student_arr && result_return_student_arr !== undefined && result_return_student_arr.length != 0){


        await result_return_student_arr.forEach(async (element_st) =>   {


            if(Number(element_st.parent_id) == Number(result) )
            {

                saved_student_id = element_st.id;

                if(result_return_student_group_arr && result_return_student_group_arr !== undefined && result_return_student_group_arr.length != 0){
                    await result_return_student_group_arr.forEach(async (element_st_gp) => {
                        if(Number(saved_student_id) == Number(element_st_gp.student_id) )
                        {

                            var saved_id = element_st_gp.id;
                            // delete element_st_gp.id; 
                            // delete element_st_gp.timestamp; 
                            var res =  await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'student_groups' , Object.values(student_groups_col_arr) , Object.values(element_st_gp) );
                            var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'student_groups' , saved_id  );
                        }
                    });
                }
            }
        }
        );

        await result_return_student_arr.forEach(async (element_st) =>   {
                saved_student_id = element_st.id;


                if(Number(element_st.parent_id) == Number(result) )
                {

                    if(result_return_student_package_arr && result_return_student_package_arr !== undefined && result_return_student_package_arr.length != 0){
                        await result_return_student_package_arr.forEach(async (element_st_pac) => {
                            if(Number(saved_student_id) == Number(element_st_pac.student_id) )
                            {

                                var saved_id = element_st_pac.id;
                                // delete element_st_pac.id; 
                                // delete element_st_pac.timestamp; 
                                var res =  await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'student_package' , Object.values(student_package_col_arr) , Object.values(element_st_pac) );
                                var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'student_package' , saved_id  );

                            }
                        });
                    }
            }

            }
            );
            await result_return_student_arr.forEach(async (element_st) =>   {

                saved_student_id = element_st.id;

                if(Number(element_st.parent_id) == Number(result) )
                {

                if(result_return_student_invoice_arr && result_return_student_invoice_arr !== undefined && result_return_student_invoice_arr.length != 0){
                    await result_return_student_invoice_arr.forEach(async (element_inv) => {
                        if(Number(saved_student_id) == Number(element_inv.student_id) )
                        {

                            var saved_id = element_inv.id;
                            // delete element_inv.id; 
                            // delete element_inv.timestamp; 
                            
                            var res = await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'invoice' , Object.values(invoice_col_arr) , Object.values(element_inv ));
                            var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'invoice' , saved_id  );

                        }
                    });
                }
            }

            }
            );

            await result_return_student_arr.forEach(async (element_st) =>   {

                saved_student_id = element_st.id;

                if(Number(element_st.parent_id) == Number(result) )
                {

                if(result_return_student_att_feed_arr && result_return_student_att_feed_arr !== undefined && result_return_student_att_feed_arr.length != 0){
                    await result_return_student_att_feed_arr.forEach(async (element_att) => {
                        if(Number(saved_student_id) == Number(element_att.student_id) )
                        {

                            var saved_id = element_att.id;
                            // delete element_att.id; 
                            // delete element_att.timestamp; 
                            var res =  await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'att_feed' , Object.values(att_feed_col_arr) , Object.values(element_att) );
                            var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'att_feed' , saved_id  );

                        }
                    });
                }
                }

            }
            );


    if(result_return_student_cs_calls_arr && result_return_student_cs_calls_arr !== undefined && result_return_student_cs_calls_arr.length != 0){
        await result_return_student_cs_calls_arr.forEach(async (element_cs) => {
            if(Number(result) == Number(element_cs.parent_id) )
            {

                var saved_id = element_cs.id;
                // delete element_cs.id; 
                // delete element_cs.timestamp; 
                var res = await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'cs_calls' , Object.values(cs_calls_col_arr) , Object.values(element_cs) );
                var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'cs_calls' , saved_id  );

            }
        });
    }


    if(result_return_student_sales_calls_arr && result_return_student_sales_calls_arr !== undefined && result_return_student_sales_calls_arr.length != 0){
        await result_return_student_sales_calls_arr.forEach(async (element_sales) => {
            if(Number(result) == Number(element_sales.parent_id) )
            {

                var saved_id = element_sales.id;
                // delete element_sales.id; 
                // delete element_sales.timestamp; 
                var res = await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'sales_calls' , Object.values(sales_calls_col_arr) , Object.values(element_sales) );
                var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'sales_calls' , saved_id  );

            }
        });
    }


    if(result_return_parent_arr && result_return_parent_arr !== undefined && result_return_parent_arr.length != 0){

        await result_return_parent_arr.forEach(async (element_pt) =>   {
            if(Number(element_pt.id) == Number(result))
            {
                
                var saved_id = element_pt.id;
                // delete element_pt.id; 
                // delete element_pt.timestamp; 
                var res =  await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'parent' , Object.values(parent_col_arr) , Object.values(element_pt) );
                var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'parent' , saved_id  );


                DELETE_PARENT();
            }

        });
    }


    await result_return_student_arr.forEach(async (element_st) =>   {


        if(Number(element_st.parent_id) == Number(result) )
        {

            // console.log(element_st);
            saved_student_id = element_st.id;
            // delete element_st.id; 
            // delete element_st.timestamp; 
            var res = await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'students' , Object.values(student_col_arr) , Object.values(element_st) );
            // console.log(res);

            var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'students' , saved_student_id  );
            // console.log(res);
        }
        }
        );
    
        }

}


async function html_create_lists_delete_parent(location_ , data_arr)
{

// document.getElementById("Location_1").innerHTML = "";
document.getElementById("Location_2").innerHTML = "";
document.getElementById("Location_3").innerHTML = "";


document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

document.getElementById(location_).innerHTML +=`</div></div>`;


document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
document.getElementById(location_).innerHTML +=`</div></div>`;

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
        result +=  `<option value="${data_arr[index].id} "> ( ID : ${data_arr[index].id} ) - ( Name : ${data_arr[index].name} ) - ( Students : ${data_arr[index].st_count} | [${data_arr[index].st_ids}] ) - ( Reg-Status : ${data_arr[index].registered}] ) </option>` 
    }
}
  result+=`</select>` ;
document.getElementById(location_).innerHTML += result


}


async function delete_student_(result)
{
    var copy_result_return_student_arr = [];

    var result_return_parent_arr = await GET_DATA_TABLES(database_fixed_link , 'parent');
    var result_return_student_arr = await GET_DATA_TABLES(database_fixed_link , 'students');
    var result_return_student_group_arr = await GET_DATA_TABLES(database_fixed_link , 'student_groups');
    var result_return_student_package_arr = await GET_DATA_TABLES(database_fixed_link , 'student_package');
    var result_return_student_invoice_arr = await GET_DATA_TABLES(database_fixed_link , 'invoice');
    var result_return_student_att_feed_arr = await GET_DATA_TABLES(database_fixed_link , 'att_feed');
    var result_return_student_cs_calls_arr = await GET_DATA_TABLES(database_fixed_link , 'cs_calls');
    var result_return_student_sales_calls_arr = await GET_DATA_TABLES(database_fixed_link , 'sales_calls');

    copy_result_return_student_arr = result_return_student_arr;

    var saved_student_id = 0;
    if(result_return_student_arr && result_return_student_arr !== undefined && result_return_student_arr.length != 0){


        await result_return_student_arr.forEach(async (element_st) =>   {


                if(result_return_student_group_arr && result_return_student_group_arr !== undefined && result_return_student_group_arr.length != 0){
                    await result_return_student_group_arr.forEach(async (element_st_gp) => {
                        if(Number(saved_student_id) == Number(element_st_gp.student_id) )
                        {

                            var saved_id = element_st_gp.id;
                            // delete element_st_gp.id; 
                            // delete element_st_gp.timestamp; 
                            var res =  await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'student_groups' , Object.values(student_groups_col_arr) , Object.values(element_st_gp) );
                            var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'student_groups' , saved_id  );
                        }
                    });
                }
            
        }
        );

        await result_return_student_arr.forEach(async (element_st) =>   {

                    if(result_return_student_package_arr && result_return_student_package_arr !== undefined && result_return_student_package_arr.length != 0){
                        await result_return_student_package_arr.forEach(async (element_st_pac) => {
                            if(Number(saved_student_id) == Number(element_st_pac.student_id) )
                            {

                                var saved_id = element_st_pac.id;
                                // delete element_st_pac.id; 
                                // delete element_st_pac.timestamp; 
                                var res =  await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'student_package' , Object.values(student_package_col_arr) , Object.values(element_st_pac) );
                                var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'student_package' , saved_id  );

                            }
                        });
                    }
            

            }
            );
            await result_return_student_arr.forEach(async (element_st) =>   {

                if(result_return_student_invoice_arr && result_return_student_invoice_arr !== undefined && result_return_student_invoice_arr.length != 0){
                    await result_return_student_invoice_arr.forEach(async (element_inv) => {
                        if(Number(saved_student_id) == Number(element_inv.student_id) )
                        {

                            var saved_id = element_inv.id;
                            // delete element_inv.id; 
                            // delete element_inv.timestamp; 
                            
                            var res = await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'invoice' , Object.values(invoice_col_arr) , Object.values(element_inv ));
                            var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'invoice' , saved_id  );

                        }
                    });
                }
            

            }
            );

            await result_return_student_arr.forEach(async (element_st) =>   {


                if(result_return_student_att_feed_arr && result_return_student_att_feed_arr !== undefined && result_return_student_att_feed_arr.length != 0){
                    await result_return_student_att_feed_arr.forEach(async (element_att) => {
                        if(Number(saved_student_id) == Number(element_att.student_id) )
                        {

                            var saved_id = element_att.id;
                            // delete element_att.id; 
                            // delete element_att.timestamp; 
                            var res =  await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'att_feed' , Object.values(att_feed_col_arr) , Object.values(element_att) );
                            var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'att_feed' , saved_id  );

                        }
                    });
                }
                

            }
            );


    if(result_return_student_cs_calls_arr && result_return_student_cs_calls_arr !== undefined && result_return_student_cs_calls_arr.length != 0){
        await result_return_student_cs_calls_arr.forEach(async (element_cs) => {
            if(Number(result) == Number(element_cs.student_id) )
            {

                var saved_id = element_cs.id;
                // delete element_cs.id; 
                // delete element_cs.timestamp; 
                var res = await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'cs_calls' , Object.values(cs_calls_col_arr) , Object.values(element_cs) );
                var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'cs_calls' , saved_id  );

            }
        });
    }


    if(result_return_student_sales_calls_arr && result_return_student_sales_calls_arr !== undefined && result_return_student_sales_calls_arr.length != 0){
        await result_return_student_sales_calls_arr.forEach(async (element_sales) => {
            if(Number(result) == Number(element_sales.student_id) )
            {

                var saved_id = element_sales.id;
                // delete element_sales.id; 
                // delete element_sales.timestamp; 
                var res = await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'sales_calls' , Object.values(sales_calls_col_arr) , Object.values(element_sales) );
                var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'sales_calls' , saved_id  );

            }
        });
    }


    if(copy_result_return_student_arr && copy_result_return_student_arr !== undefined && copy_result_return_student_arr.length != 0){

    await copy_result_return_student_arr.forEach(async (element_st) =>   {


        if(Number(element_st.id) == Number(result) )
        {

            saved_student_id = element_st.id;
            // delete element_st.id; 
            // delete element_st.timestamp; 
            var res = await ADD_DATA_TABLES_ONE_COL_FOR_DELETE(database_fixed_link_history , 'students' , Object.values(student_col_arr) , Object.values(element_st) );
            var res = await DELETE_DATA_TABLES_ONE_COL(database_fixed_link , 'students' , saved_student_id  );

        }
        }
        );
    }
        }

}