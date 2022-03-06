

var all_countainer = "all_countainer";
var login_page = "login_page";
var arr_system = [
    'system_id', //1
    "add_parent", //2
    "add_student", //3
    "add_group", //4
    "add_student_invoice", //5
    "add_session_group", //6
    "add_employee" , //7
    "add_student_parent", //8
    "add_student_group", //9
    "add_student_package", //10
    "add_student_session", //11
    "calls",  //12
    "calls_assign", //13
    "calls_sales", //14
    "calls_assign_sales" //15
    
]



calls
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
    localStorage.agentname = '';
    

    var value_emp = await  GET_DATA_TABLES( database_fixed_link, 'employee');
    
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
                        for(var index_ = 0 ; index_ < value_emp.length ; index_++)
                        {
                            if(value_emp[index].password_value == $('#password').val())
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


    
    var value_emp = await  GET_DATA_TABLES( database_fixed_link, 'employee');

    

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
                        for(var index_1 = 0 ; index_1 < value_emp.length ; index_1++)
                        {
                            if(value_emp[index].password_value == pass)
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


    Show_all();
    localStorage.agentname =  user_info.name;
    localStorage.permission = user_info.permission_id;
    localStorage.userid = user_info.id;
    if(user_info.permission_id == 4)
    {
        Admin_permission();
    }
    else if(user_info.permission_id == 5)
    {
        Operation_permission();
    }
    else if(user_info.permission_id == 2)
    {
        Sales_permission();
    }
    else if(user_info.permission_id == 3)
    {
        CS_permission();
    }

    clear_all_selected();
    $('#add_parent').css('background', '#008CBA').css('color','white');
    document.getElementById("page_name").innerHTML = `<h1 style='font-style: oblique;color:rgb(72, 112, 245)'>Parents </h1><hr class="hr-primary" style="width:100%;text-align:left;margin-left:0" />`
    ADD_NEW_PARENT();

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
    Hide_Element(login_page);
    Show_Element(all_countainer);
    Hide_Element(arr_admin_fin[0]);
    Hide_Element(arr_admin_students[0]);
    Hide_Element(arr_admin_group[0]);
    Hide_Element(arr_admin_parent[0]);
}

function Show_all()
{
    Show_Element(all_countainer);
    for(var index = 0 ; index < arr_admin_fin.length ; index++)
    {
        Show_Element(arr_admin_fin[index]);
    }

    for(var index = 0 ; index < arr_admin_students.length ; index++)
    {
        Show_Element(arr_admin_students[index]);
    }

    for(var index = 0 ; index < arr_admin_group.length ; index++)
    {
        Show_Element(arr_admin_group[index]);
    }


    for(var index = 0 ; index < arr_admin_parent.length ; index++)
    {
        Show_Element(arr_admin_parent[index]);
    }


    for(var index = 0 ; index < arr_system.length ; index++)
    {
        Show_Element(arr_system[index]);
    }

}

function CS_permission()
{
    Hide_Element(login_page);
    Show_Element(all_countainer);
    Hide_Element(arr_admin_fin[0]);
    Hide_Element(arr_admin_students[0]);
    Hide_Element(arr_admin_group[0]);
    Hide_Element(arr_admin_parent[0]);
    Hide_Element(arr_system[3]);
    Hide_Element(arr_system[4]);
    Hide_Element(arr_system[5]);
    Hide_Element(arr_system[6]);
    Hide_Element(arr_system[7]);
    Hide_Element(arr_system[8]);
    Hide_Element(arr_system[9]);
    Hide_Element(arr_system[10]);
    Hide_Element(arr_system[12]);
    Hide_Element(arr_system[13]);
    Hide_Element(arr_system[14]);
}

function Sales_permission()
{
    Hide_Element(login_page);
    Show_Element(all_countainer);
    Hide_Element(arr_admin_fin[0]);
    Hide_Element(arr_admin_students[0]);
    Hide_Element(arr_admin_group[0]);
    Hide_Element(arr_admin_parent[0]);
    Hide_Element(arr_system[3]);
    Hide_Element(arr_system[4]);
    Hide_Element(arr_system[5]);
    Hide_Element(arr_system[6]);
    Hide_Element(arr_system[7]);
    Hide_Element(arr_system[8]);
    Hide_Element(arr_system[9]);
    Hide_Element(arr_system[10]);
    Hide_Element(arr_system[11]);
    Hide_Element(arr_system[12]);
    Hide_Element(arr_system[14]);

}
function Admin_permission()
{
    Hide_Element(login_page);
    Show_Element(all_countainer);
}

function Finance_permission()
{
    
}