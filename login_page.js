

var all_countainer = "all_countainer";
var login_page = "login_page";
var arr_system = [
    'system_id',
    "add_student",
    "add_group",
    "add_student_invoice",
    "add_session_group",
    "add_employee" ,
    "add_student_parent",
    "add_student_group",
    "add_student_package",
    "add_student_session"
]

var arr_admin_group = [
    "admin_group_id",
    "groups",
    "sessions",
    "att_feed",
    "slots",
    "lan",
    "attend",
    "age",
    "level",
    "track",
    "session_type",
    "days"
]

var arr_admin_students = [
    "admin_student_id",
    "students",
    "student_groups",
    "student_status"
]


var arr_admin_fin = [
    "admin_fin_id",
    "package",
    "invoice",
    "invoice_status",
    "student_package",
    "employee",
    "role",
    "department",
    "permission"
]

var arr_admin_parent= [
    "admin_parent_id",
    "parent_loc",
    "cs_calls",
    "cat",
    "close",
    "call_type",
    "call_status",

]



async function login_page_check()
{

    Show_Element(login_page);
    Hide_Element(all_countainer);
    
    var All_data_obj = {};
    All_data_obj.Database_link = database_fixed_link;
    All_data_obj.table_ = 'employee';

    var value_emp = JSON.parse(await get_all_data_from_database_doAjax(All_data_obj));
    
    // console.log(value_emp)
    $('#login_id').off();
    $('#login_id').click(function (index) {  

       

        if($('#Username').val() == "")
        {
            alert("UserName Missing");
            return;
        }

        if($('#password').val() == "")
        {
             alert("Password Missing");
            return;
        }

        var check_user = false;
        var check_pass = false;
                for(var index = 0 ; index < value_emp.length ; index++)
                {
                    if(value_emp[index].username == $('#Username').val())
                    {
                        check_user = true;
                        for(var index = 0 ; index < value_emp.length ; index++)
                        {
                            if(value_emp[index].password == $('#password').val())
                            {
                                check_pass = true;
                                login_success(value_emp[index]);
                                // alert("login success")
                                return;
                            }
                        }
                    }
                }

                if(check_user == false)
                {
                    alert("Wrong Username")
                    return;
                }
                if(check_pass == false)
                {
                    alert("Wrong Password")
                    return;
                }
    });
   
}

async function login_page_check_auto(user , pass)
{

    // Show_Element(login_page);
    // Hide_Element(all_countainer);
    
    var All_data_obj = {};
    All_data_obj.Database_link = database_fixed_link;
    All_data_obj.table_ = 'employee';

    var value_emp = JSON.parse(await get_all_data_from_database_doAjax(All_data_obj));
    
    // console.log(value_emp)

        if(user == "")
        {
            //alert("UserName Missing");
            return false;
        }

        if(pass == "")
        {
             //alert("Password Missing");
            return false;
        }

        var check_user = false;
        var check_pass = false;
                for(var index = 0 ; index < value_emp.length ; index++)
                {
                    if(value_emp[index].username == user)
                    {
                        check_user = true;
                        for(var index = 0 ; index < value_emp.length ; index++)
                        {
                            if(value_emp[index].password == pass)
                            {
                                check_pass = true;
                                login_success(value_emp[index]);
                                // alert("login success")
                                return true;
                            }
                        }
                    }
                }

                if(check_user == false)
                {
                    //alert("Wrong Username")
                    return false;
                }
                if(check_pass == false)
                {
                    //alert("Wrong Password")
                    return false;
                }
   
    
}



function login_success(user_info)
{
    if(user_info.permission_id == 4)
    {
        Admin_permission();
    }
    else if(user_info.permission_id == 5)
    {
        Operation_permission();
    }
}

function Hide_Element(Elment_id)
{
    $("#"+Elment_id).hide();
}

function Show_Element(Elment_id)
{
    $("#"+Elment_id).show();
}

// var arr_system = [
//     'system_id',
//     "add_student",
//     "add_group",
//     "add_student_invoice",
//     "add_session_group",
//     "add_employee" ,
//     "add_student_parent",
//     "add_student_group",
//     "add_student_package",
//     "add_student_session"
// ]

// var arr_admin_group = [
//     "admin_group_id",
//     "groups",
//     "sessions",
//     "att_feed",
//     "slots",
//     "lan",
//     "attend",
//     "age",
//     "level",
//     "track",
//     "session_type",
//     "days"
// ]

// var arr_admin_students = [
//     "admin_student_id",
//     "students",
//     "student_groups",
//     "student_status"
// ]


// var arr_admin_fin = [
//     "admin_fin_id",
//     "package",
//     "invoice",
//     "invoice_status",
//     "student_package",
//     "employee",
//     "role",
//     "department",
//     "permission"
// ]
// var arr_admin_parent= [
//     "admin_parent_id",
//     "parent_loc",
//     "cs_calls",
//     "cat",
//     "close",
//     "call_type",
//     "call_status",

// ]
function Operation_permission()
{
    Hide_Element(login_page);
    Show_Element(all_countainer);
    Hide_Element(arr_admin_fin[0]);
    Hide_Element(arr_admin_students[0]);
    Hide_Element(arr_admin_group[0]);
    Hide_Element(arr_admin_parent[0]);
}

function Admin_permission()
{
    Hide_Element(login_page);
    Show_Element(all_countainer);
}

function Finance_permission()
{
    
}