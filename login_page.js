

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

async function login_page_check()
{
    var All_data_obj = {};
    All_data_obj.Database_link = database_fixed_link;
    All_data_obj.table_ = 'employee';

    var value_emp = JSON.parse(await get_all_data_from_database_doAjax(All_data_obj));
    
    // console.log(value_emp)
    
    Show_Element(login_page);
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

function login_success(user_info)
{
    Hide_Element(login_page);
    Show_Element(all_countainer);
    // console.log(user_info);
}

function Hide_Element(Elment_id)
{
    $("#"+Elment_id).hide();
}

function Show_Element(Elment_id)
{
    $("#"+Elment_id).show();
}

function Operation_permission()
{

}

function Admin_permission()
{
    
}

function Finance_permission()
{
    
}