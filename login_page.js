

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
    "calls_assign_sales", //15
    "marketing_dashboard", //16
    "material_dashboard", //17
    "certification_dashboard", //18
    "tasks_dashboard" //19
    
]


{/* <li><a href="#" id="material_dashboard" class="link-dark rounded">Material Dashboard</a></li>
<li><a href="#" id="certification_dashboard" class="link-dark rounded">Certifications Dashboard</a></li>
<li><a href="#" id="tasks_dashboard" class="link-dark rounded">Tasks Dashboard</a></li> */}

var del_arr_system = [
    'del_system_id', //1
    "delete_parent", //2

    
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
    "parent_loc",
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
    "cs_calls",
    "cat",
    "close",
    "call_type",
    "call_status",
    "sales_calls",
    "cat_sales",
    "close_sales",
    "call_type_sales",
    "call_status_sales",
]


var arr_admin_marketing= [
    "admin_marketing_id",
    "marketing",
    "mrkt_type",
    "mrkt_conv_type",
    "mrkt_source",
    "mrkt_others",

]


var arr_admin_content= [
    "admin_content_id",
    "material",
    "tasks",
    "certifications"

]

{/* <li class="mb-1" id="admin_content_id">
<button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#Content-collapse" aria-expanded="false">
  Admin Content
</button> 
<div class="collapse" id="Content-collapse">
  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
    <li><a href="#" id="material" class="link-dark rounded">Material</a></li>
    <li><a href="#" id="tasks" class="link-dark rounded">Student Tasks</a></li>
    <li><a href="#" id="certifications" class="link-dark rounded">Certifications</a></li>


  </ul>
</div>
</li> */}


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



async function login_success(user_info)
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
    else if(user_info.permission_id == 1)
    {
        Instructor_permission();
    }
    else if(user_info.permission_id == 7)
    {
        Marketing_permission();
    }


    clear_all_selected();
    // $('#calls').css('background', '#008CBA').css('color','white');

    // document.getElementById("page_name").innerHTML = `<h1 style='font-style: oblique;color:rgb(72, 112, 245)'>Customer Support Calls</h1><hr class="hr-primary" style="width:100%;text-align:left;margin-left:0" />`
    // ADD_Customer_call();

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
    Hide_Element(arr_admin_marketing[0]);
    Hide_Element(arr_admin_content[0]);

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

    for(var index = 0 ; index < arr_admin_marketing.length ; index++)
    {
        Show_Element(arr_admin_marketing[index]);
    }

    for(var index = 0 ; index < arr_admin_content.length ; index++)
    {
        Show_Element(arr_admin_content[index]);
    }


}

function CS_permission()
{
    Hide_Element(login_page);
    Show_Element(all_countainer);
    Hide_Element(arr_admin_fin[0]);
    Hide_Element(arr_admin_students[0]);
    Hide_Element(arr_admin_group[0]);
    Hide_Element(del_arr_system);
    Hide_Element(arr_admin_parent[0]);
    Hide_Element(arr_admin_marketing[0]);
    Hide_Element(arr_admin_content[0]);
    
    Hide_Element(arr_system[3]);
    Hide_Element(arr_system[4]);
    Hide_Element(arr_system[5]);
    Hide_Element(arr_system[6]);
    Hide_Element(arr_system[7]);
    Hide_Element(arr_system[10]);
    Hide_Element(arr_system[12]);
    Hide_Element(arr_system[13]);
    Hide_Element(arr_system[14]);
    Hide_Element(arr_system[15]);
    Hide_Element(arr_system[16]);
    Hide_Element(arr_system[17]);
    Hide_Element(arr_system[18]);

}


function Instructor_permission()
{
    Hide_Element(login_page);
    Show_Element(all_countainer);
    Hide_Element(arr_admin_fin[0]);
    Hide_Element(arr_admin_students[0]);
    Hide_Element(arr_admin_group[0]);
    Hide_Element(del_arr_system);
    Hide_Element(arr_admin_parent[0]);
    Hide_Element(arr_admin_marketing[0]);
    Hide_Element(arr_admin_content[0]);

    Hide_Element(arr_system[1]);
    Hide_Element(arr_system[3]);
    Hide_Element(arr_system[4]);
    Hide_Element(arr_system[6]);
    Hide_Element(arr_system[7]);
    Hide_Element(arr_system[8]);
    Hide_Element(arr_system[9]);
    Hide_Element(arr_system[10]);
    Hide_Element(arr_system[11]);
    Hide_Element(arr_system[12]);
    Hide_Element(arr_system[13]);
    Hide_Element(arr_system[14]);
    Hide_Element(arr_system[15]);
    Hide_Element(arr_system[16]);
    Hide_Element(arr_system[17]);
    Hide_Element(arr_system[18]);

}

function Marketing_permission()
{
    Hide_Element(login_page);
    Show_Element(all_countainer);
    Hide_Element(arr_admin_fin[0]);
    Hide_Element(arr_admin_students[0]);
    Hide_Element(arr_admin_group[0]);
    Hide_Element(del_arr_system);
    Hide_Element(arr_admin_parent[0]);
    Hide_Element(arr_admin_content[0]);

    // Hide_Element(arr_system[1]);
    Hide_Element(arr_system[2]);
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
    Hide_Element(arr_system[13]);
    Hide_Element(arr_system[14]);
    Hide_Element(arr_system[17]);
    Hide_Element(arr_system[18]);

}
function Sales_permission()
{
    Hide_Element(login_page);
    Hide_Element(del_arr_system);
    Show_Element(all_countainer);
    Hide_Element(arr_admin_fin[0]);
    Hide_Element(arr_admin_students[0]);
    Hide_Element(arr_admin_group[0]);
    Hide_Element(arr_admin_parent[0]);
    Hide_Element(arr_admin_marketing[0]);
    Hide_Element(arr_admin_content[0]);

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
    Hide_Element(arr_system[15]);
    Hide_Element(arr_system[16]);
    Hide_Element(arr_system[17]);
    Hide_Element(arr_system[18]);


}
function Admin_permission()
{
    Hide_Element(login_page);
    Show_Element(all_countainer);
}

function Finance_permission()
{
    Hide_Element(login_page);
    Hide_Element(del_arr_system);
    Show_Element(all_countainer);
    Hide_Element(arr_admin_fin[0]);
    Hide_Element(arr_admin_students[0]);
    Hide_Element(arr_admin_group[0]);
    Hide_Element(arr_admin_parent[0]);
    Hide_Element(arr_admin_marketing[0]);
    Hide_Element(arr_admin_content[0]);
}