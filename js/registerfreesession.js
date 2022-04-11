
var choosen_date_var_free = '';


$(".header .close-btn").click(function() {
    $(".header .nav").animate({
            right: "-85%",
        },
        300
    );
});
$(".header .menu-btn").click(function() {
    $(".header .nav").animate({
            right: 0,
        },
        300
    );
});
$("#countryInput1").click(function() {
    $(".country-menu").slideToggle("fast")
})
$("#countryInput1").keyup(function() {

    var filter = $(this).val();
    $(".country ul li").each(function() {
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).hide();
        } else {
            $(this).show()
        }
    });
});
$(".country ul li").click(function() {
    $("#countryInput1").val($(this).html())
})
function isEmail(email) {
    var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return EmailRegex.test(email);
  }



  const phoneInputField = document.getElementById("phonenumInput");
  const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  const error = document.getElementById("phonenumInput_error");


  function isPhone() {


            const phoneNumber = phoneInput.getNumber();

            if (phoneInput.isValidNumber()) {

                $('#phonenumInput').val(phoneNumber);
                return true;
            } else {
                return false;
            }
    
  }

$(".header .close-btn").click(function() {
    $(".header .nav").animate({
            right: "-85%",
        },
        300
    );
});
$(".header .menu-btn").click(function() {
    $(".header .nav").animate({
            right: 0,
        },
        300
    );
});

  $(".btn.signup").click(async function() {

   var check = await go_to_step02_func_free();
   Loading_page_clear();
   choosen_group = '';

   if(check == true)
   {
    $(".step01").hide("drop", { direction: "right" }, 300);
    setTimeout(function() {
        $(".step02").show("drop", { direction: "left" }, 300);
    }, 400)
   }

})

$(".scheduletableitem").click(function() {
    $(".scheduletableitem").removeClass("active");
    $(".check").removeClass("active");
    $(this).addClass("active");
    Num = $(this).index();
    $(".scheduletableitem:nth-child(" + (Num + 1) + ") .check").addClass("active")
})
$(".btn.next").click(async function() {

    var check_return = await go_to_step03_func_free();

    if(check_return)
    {        
        $(".step02").hide("drop", { direction: "right" }, 300);
        setTimeout(function() {
            $(".step03").show("drop", { direction: "left" }, 300);
        }, 400)
    }

})


$(".payment-plans-container button").click(function() {
    $(".step03").hide("drop", { direction: "right" }, 300);
    setTimeout(function() {
        $(".step04").show("drop", { direction: "left" }, 300);
    }, 400)
})
$(".payment-plans-container button").click(function() {
    $(".step03").hide("drop", { direction: "right" }, 300);
    setTimeout(function() {
        $(".step04").show("drop", { direction: "left" }, 300);
    }, 400)
})
$(".step02 .back").click(function() {
    $(".step02").hide("drop", { direction: "left" }, 300);
    setTimeout(function() {
        $(".step01").show("drop", { direction: "right" }, 300);
    }, 400)
})
$(".step03 .back").click(function() {
    $(".step03").hide("drop", { direction: "left" }, 300);
    setTimeout(function() {
        $(".step02").show("drop", { direction: "right" }, 300);
    }, 400)
})



async function go_to_step02_func_free()
{    
    Loading_page_set();
    choosen_date_var_free = '';
  
    var get_parent_arr = await GET_DATA_TABLES(database_fixed_link ,'parent');    
    var saved_age_arr  = await GET_DATA_TABLES(database_fixed_link ,'age');    
    var saved_slot_arr  = await GET_DATA_TABLES(database_fixed_link ,'slots');    
    var saved_days_arr  = await GET_DATA_TABLES(database_fixed_link ,'days');    
    var  filtered_group_id = await GET_DATA_TABLES(database_fixed_link ,'groups');    
    var  student_grp_arr = await GET_DATA_TABLES(database_fixed_link ,'student_groups');    
    var  saved_lan_arr = await GET_DATA_TABLES(database_fixed_link ,'lan');    

    var saved_group_arr =[];
    var saved_group_arr_counter = 0;

    if(filtered_group_id && filtered_group_id !== undefined && filtered_group_id.length != 0)
    {
        filtered_group_id.forEach(Element_gp=>{
        var counter_group_cap = 0;

        saved_age_arr.forEach(Element=>{

                if(Element.id == Element_gp.age_id)
                {
                    Element_gp.age_id = Element.name;
                }
        })
        saved_slot_arr.forEach(Element=>{

                if(Element.id == Element_gp.slot_id)
                {
                    Element_gp.slot_id = Element.live_slot;
                }
        })
        saved_lan_arr.forEach(Element=>{

                if(Element.id == Element_gp.lan_id)
                {
                    Element_gp.lan_id = Element.name;
                }
        })  

        
        saved_days_arr.forEach(Element=>{

                if(Element.id == Element_gp.days_id)
                {
                    Element_gp.days_id = Element.name;
                }
        })

        student_grp_arr.forEach(Element_st_gp=>{

            if(Element_st_gp.groups_id == Element_gp.id)
                {
                    counter_group_cap++;
                }
        })

        if(counter_group_cap < 6 && Number(Element_gp.type_id) == 2 && (new Date()) < new Date(Element_gp.start_date))
        {
            saved_group_arr[saved_group_arr_counter] = Element_gp ;saved_group_arr_counter++;
        }

    })
    }

            if( $('#firstnameInput').val() == "" ) {
            $('#firstnameInput_error').text('Please Set Name');
            $("#firstnameInput").addClass("error")
            return false;

        }
        else
        {
            $('#firstnameInput_error').text('');  
            $("#firstnameInput").removeClass("error")    
        }
        // choosen_date_var_free = `${$('#monthDate').val()}-${$('#dayDate').val()}-${$('#yearDate').val()}`;
        choosen_date_var_free = `${$('#yearDate').val()}-${$('#monthDate').val()}-${$('#dayDate').val()}`;

        if( choosen_date_var_free == "" || choosen_date_var_free == "--"  ) {
            $('#birthdate_error').text('Please Select Birthdate');return false;
        }
        else
        {
            $('#birthdate_error').text('');  
            $("#birthdate").removeClass("error")  
        }

        if( $('#phonenumInput').val() == "" ) {
            $('#phonenumInput_error').text('Please Set Phone Number');
            $("#phonenumInput").addClass("error")
            return false;
        }
        else
        {


            if(isPhone($('#phonenumInput').val()) == false)
            {
                $('#phonenumInput_error').text('Please Set Valid Phone');
                $("#phonenumInput").addClass("error")
                return false;
            }
            else
            {
                $('#phonenumInput_error').text(''); 
                $("#phonenumInput").removeClass("error")
            }
            
        }

        if( $('#emailInput').val() == "" ) {
            $('#emailInput_error').text('Please Set Email');
            $("#emailInput").addClass("error")
            return false;
        }
        else
        {
            if(isEmail($('#emailInput').val()) == false)
            {
                $('#emailInput_error').text('Please Set Valid Email');
                $("#emailInput").addClass("error")
                return false;
            }
            else
            {
                $('#emailInput_error').text('');
                $("#emailInput").removeClass("error")    
            }
        }

        $( ".scheduletableitem:nth-child(2)").hide();
        $( ".scheduletableitem:nth-child(3)").hide();
        $( ".scheduletableitem:nth-child(4)").hide();
        $( ".scheduletableitem:nth-child(5)").hide();
        $( ".scheduletableitem:nth-child(6)").hide();

        var kid_age =  (new Date()).getFullYear() - new Date(choosen_date_var_free).getFullYear() 
            var age_req = '';
            if(kid_age < 18)
            {
                saved_age_arr.forEach(elment =>{
                    if(kid_age >= Number(elment.from_age) && kid_age <=  Number(elment.to_age))
                    {
                        age_req = elment.name;
                    }
                })


                if(age_req)
                {
                    var check_av = false;
                    var saved_index = 1;
                    for(var index = 0 ;index < saved_group_arr.length ; index++)
                    {
                        saved_index = index+2;
                    

                        if( saved_group_arr[index].age_id == age_req)
                        {
                            check_av = true;
                            $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(1)").html(saved_group_arr[index].id);
                            $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(2)").html(saved_group_arr[index].start_date);
                            $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(3)").html(saved_group_arr[index].days_id);
                            $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(4)").html(saved_group_arr[index].slot_id);
                            $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(5)").html(saved_group_arr[index].lan_id);
                            $( ".scheduletableitem:nth-child("+saved_index+")").show();
                            if(index == 4) break;
                        }

                    }
                    saved_index++;

                    if(check_av == false)
                    {
                        alert("Sorry all groups are occupied, new groups will open soon")
                        return false;
                    }
                }
                else
                {
                    $('#birthdate_error').text('Student too young');return false;
                }

            }
            else
            {
                $('#birthdate_error').text('Student too old');return false;
            }


    return true;
}

async function go_to_step01_func_free()
{    
    Loading_page_set();
    
    var get_parent_arr = await GET_DATA_TABLES(database_fixed_link ,'parent');    
    var saved_age_arr  = await GET_DATA_TABLES(database_fixed_link ,'age');    
    var saved_slot_arr  = await GET_DATA_TABLES(database_fixed_link ,'slots');    
    var saved_days_arr  = await GET_DATA_TABLES(database_fixed_link ,'days');    
    var  filtered_group_id = await GET_DATA_TABLES(database_fixed_link ,'groups');    
    var  student_grp_arr = await GET_DATA_TABLES(database_fixed_link ,'student_groups');    
    var  saved_lan_arr = await GET_DATA_TABLES(database_fixed_link ,'lan');    

    var saved_group_arr =[];
    var saved_group_arr_counter = 0;

    if(filtered_group_id && filtered_group_id !== undefined && filtered_group_id.length != 0)
    {
        filtered_group_id.forEach(Element_gp=>{
        var counter_group_cap = 0;

        saved_age_arr.forEach(Element=>{

                if(Element.id == Element_gp.age_id)
                {
                    Element_gp.age_id = Element.name;
                }
        })
        saved_slot_arr.forEach(Element=>{

                if(Element.id == Element_gp.slot_id)
                {
                    Element_gp.slot_id = Element.live_slot;
                }
        })
        saved_lan_arr.forEach(Element=>{

                if(Element.id == Element_gp.lan_id)
                {
                    Element_gp.lan_id = Element.name;
                }
        })  

        
        saved_days_arr.forEach(Element=>{

                if(Element.id == Element_gp.days_id)
                {
                    Element_gp.days_id = Element.name;
                }
        })

        student_grp_arr.forEach(Element_st_gp=>{

            if(Element_st_gp.groups_id == Element_gp.id)
                {
                    counter_group_cap++;
                }
        })

        if(counter_group_cap < 6 && Number(Element_gp.type_id) == 2 && (new Date()) < new Date(Element_gp.start_date))
        {

            saved_group_arr[saved_group_arr_counter] = Element_gp ;saved_group_arr_counter++;
        }

    })
    }
    check_groups_free();
    $('#coontent-container_id').show();
    Loading_page_clear();
}

var choosen_group = '';
var choosen_date = '';
var choosen_day = '';
var choosen_time = '';
var choosen_lan = '';
var choosen_group_index = '';

async function go_to_step03_func_free()
{
    Loading_page_set();
    
    if(choosen_group == '')
    {
        alert("Choose Group");
        Loading_page_clear();
        return false;
    }
    if(document.getElementById('flexCheckDefault').checked == false)
    {
        Loading_page_clear();
        $('#flexCheckDefault_label').css("color", "red");
        return false;
    }

    var saved_emp_arr  = await GET_DATA_TABLES(database_fixed_link ,'employee');    
    var cs_emp = []
    var cs_emp_count = 0
    var sales_emp = []
    var sales_emp_count = 0

    saved_emp_arr.forEach(element => {
        
        if(element.permission_id == 2)
        {
            sales_emp[sales_emp_count] = element;sales_emp_count++;
        }
        if(element.permission_id == 3)
        {
            cs_emp[cs_emp_count] = element;cs_emp_count++;
        }
    })
  
    let url = window.location.href;
    let params = (new URL(url)).searchParams;
    var get_element = '';
    get_element = params.get('camp_id');

    var get_data_elements_parent_table = [];
    get_data_elements_parent_table[0] = $('#firstnameInput').val()
    get_data_elements_parent_table[1] = $('#phonenumInput').val()
    get_data_elements_parent_table[2] = $('#emailInput').val()
    get_data_elements_parent_table[3] = ''
    get_data_elements_parent_table[4] = ''
    get_data_elements_parent_table[5] = ''
    get_data_elements_parent_table[6] = ''
    get_data_elements_parent_table[7] = ''
    get_data_elements_parent_table[8] = ''
    get_data_elements_parent_table[9] = get_element;
    get_data_elements_parent_table[10] = ''
    get_data_elements_parent_table[11] = ''

    var get_all_parent_table = await GET_DATA_TABLES(database_fixed_link , 'parent')    


    if(get_data_elements_parent_table[11] == '')
    {
        if(get_all_parent_table && get_all_parent_table !== undefined &&get_all_parent_table.length != 0)
        {
            var check_agent = get_all_parent_table[get_all_parent_table.length-1].sales_agent_id;
            var check_confirm = false;

            if(sales_emp.length == 1)
            {
                get_data_elements_parent_table[11] = sales_emp[0].id;
            }
            else
            {
                sales_emp.forEach(element => {

                    if(check_confirm == true)
                    {
    
                        check_confirm = false;
                        if(element.id && element.id != "")
                        {
                            get_data_elements_parent_table[11] = element.id;
                           
                        }
                        else
                        {
                            get_data_elements_parent_table[11] = sales_emp[0].id;
                            
                        }
                    }
                    if((element.id == check_agent || Number(check_agent) == 0)  && check_confirm == false)
                    {    
                        check_confirm = true;
                    }
                })
                if(check_confirm == true)
                {
                    get_data_elements_parent_table[11] = sales_emp[0].id;
                }
            }



        }
    }

    if(get_data_elements_parent_table[10] == '')
    {
        if(get_all_parent_table && get_all_parent_table !== undefined &&get_all_parent_table.length != 0)
        {
            var check_agent = get_all_parent_table[get_all_parent_table.length-1].customer_agent_id;
            var check_confirm = false;

            if(cs_emp.length == 1)
            {
                get_data_elements_parent_table[10] = cs_emp[0].id;
            }
            else
            {
                cs_emp.forEach(element => {

                    if(check_confirm == true)
                    {
                        check_confirm = false;

                        if(element.id)
                        {
                            get_data_elements_parent_table[10] = element.id;
                           
                        }
                        else
                        {
                            get_data_elements_parent_table[10] = cs_emp[0].id;
                            
                        }
                    }
                    if((element.id == check_agent || Number(check_agent) == 0)  && check_confirm == false)
                    {

                        check_confirm = true;
                    }
                })

                if(check_confirm == true)
                {
                    get_data_elements_parent_table[10] = cs_emp[0].id;
                }
            }

        }
    }

    get_data_elements_parent_table[12] = $('#emailInput').val()
    get_data_elements_parent_table[13] = $('#phonenumInput').val()

    var parent_id = '';
    var parent_name = $('#firstnameInput').val();

    var check_email_phone = false;





    get_all_parent_table.forEach(element=>{
        if(element.email == $('#emailInput').val())
        {
            parent_id = element.id;
            check_email_phone = true;

            localStorage.username_client = element.username;
            localStorage.password_client = element.password;
            
        }
        else if(element.phone == $('#phonenumInput').val())
        {
            parent_id = element.id;
            check_email_phone = true;

            localStorage.username_client = element.username;
            localStorage.password_client = element.password;
        }
    })

    if(check_email_phone)
    {

    }
    else{
        var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'parent' , 
        ["name"
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
        ],
        get_data_elements_parent_table
        );
        var get_parent_arr_return = await GET_DATA_TABLES(database_fixed_link , 'parent');

        parent_id = get_parent_arr_return[get_parent_arr_return.length-1].id;
        localStorage.username_client = get_parent_arr_return[get_parent_arr_return.length-1].username;
        localStorage.password_client = get_parent_arr_return[get_parent_arr_return.length-1].password;
    }

    var saved_age_arr  = await GET_DATA_TABLES(database_fixed_link ,'age');    

    var kid_age =  (new Date()).getFullYear() - new Date($("#birthdate").val()).getFullYear() 
    var age_req = '';
    if(kid_age < 18)
    {
        saved_age_arr.forEach(elment =>{
            if(kid_age >= Number(elment.from_age) && kid_age <=  Number(elment.to_age))
            {
                age_req = elment.name;
            }
        })
    }

    var get_data_elements_student_table = [];
    get_data_elements_student_table[0] = '';
    get_data_elements_student_table[1] = parent_id;
    get_data_elements_student_table[2] = 'yes';
    get_data_elements_student_table[3] = 'active';
    get_data_elements_student_table[4] = $('#firstnameInput').val();
    get_data_elements_student_table[5] = age_req;
    get_data_elements_student_table[6] = choosen_date_var_free;

    var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'students' , 
    ["std_id"
    ,"parent_id"
    ,"free_session_status"
    ,"std_status"
    ,"st_name"
    ,"age"
    ,"birthdate"
    ],
    get_data_elements_student_table
    );

    var get_student_arr_return = await GET_DATA_TABLES(database_fixed_link , 'students');

    var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'student_groups' , 
    ["groups_id"
    ,"student_id"
    ,"status"
  ],
    [
        choosen_group,
        get_student_arr_return[get_student_arr_return.length-1].id,
        'active'
    ]
    );

    var get_sessions_arr_return = await GET_DATA_TABLES(database_fixed_link , 'sessions');
    var get_required_sessions_arr = [];
    var get_required_sessions_arr_count = 0;
    get_sessions_arr_return.forEach(element => {

        if(element.groups_id == choosen_group)
        {
            get_required_sessions_arr[get_required_sessions_arr_count] = element;get_required_sessions_arr_count++;
        }
    })

    for(var index = 0 ; index < get_required_sessions_arr.length ; index++ )
    {
        var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'att_feed' , 
        ["student_id" 
        ,"session_id" 
        ,"attendance" 
        ,"feedback" 
      ],
        
      [
        get_student_arr_return[get_student_arr_return.length-1].id,
        get_required_sessions_arr[index].id,
        '',
          ''
      ]
        );

    }

    var result = await GET_DATA_TABLES(database_fixed_link , 'free_session_whatsapp_temp');

    if(result)
    {
        for(var index = 0 ; index < result.length ; index++)
        {
            if(result[index].free_whats_temp_type == 'Intro_free')
            {

                // var result_link = text.link()

                var URL__ = `http://localhost/ischool-crm/dashboard?username=${$('#emailInput').val()}&password=${$('#phonenumInput').val()}`;

                var body = `Hello ${$('#firstnameInput').val()}
${result[index].free_whats_temp_body}
you can join dashboard using this link:
${URL__}

Or using username and password
USERNAME : ${$('#emailInput').val()}
PASSWORD : ${$('#phonenumInput').val()}
`
                var res = await send_whats_msg(result[index].free_whats_temp_token , result[index].free_whats_temp_instance , body ,  $('#phonenumInput').val() , parent_id , $('#firstnameInput').val() , result[index].free_whats_temp_type);
            }
        }
    }




    Loading_page_clear();

    $("#done_name").text($('#firstnameInput').val());
    $("#done_date").text(choosen_date);
    $("#done_day").text(choosen_day);
    $("#done_time").text(choosen_time);
    $("#done_lan").text(choosen_lan);

    return true;

}

function check_groups_free()
{
    $(".scheduletableitem").click(function()
    {

        var index = ($(this).index() )+1 ;
        choosen_group_index = index;

        if(index == "2")
        {
            choosen_group = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(1)").html();
            choosen_date = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(2)").html();
            choosen_day = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(3)").html();
            choosen_time = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(4)").html();
            choosen_lan = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(5)").html();
        }
        else if(index == "3")
        {
            choosen_group = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(1)").html();
            choosen_date = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(2)").html();
            choosen_day = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(3)").html();
            choosen_time = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(4)").html();
            choosen_lan = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(5)").html();        }
        else if(index == "4")
        {
            choosen_group = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(1)").html();
            choosen_date = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(2)").html();
            choosen_day = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(3)").html();
            choosen_time = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(4)").html();
            choosen_lan = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(5)").html();        }
        else if(index == "5")
        {
            choosen_group = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(1)").html();
            choosen_date = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(2)").html();
            choosen_day = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(3)").html();
            choosen_time = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(4)").html();
            choosen_lan = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(5)").html();        }
        else if(index == "6")
        {
            choosen_group = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(1)").html();
            choosen_date = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(2)").html();
            choosen_day = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(3)").html();
            choosen_time = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(4)").html();
            choosen_lan = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(5)").html();        }

    }
    );
}
$(".days-slider").hide();
var maxDays


function detectMonthdays(){
if($("#monthDate").val() === "01"||$("#monthDate").val() === "03"||$("#monthDate").val() === "05"||$("#monthDate").val() === "07"||$("#monthDate").val() === "08"||$("#monthDate").val() === "10"||$("#monthDate").val() === "12"){
    $(".mb-3.date.days .days-slider li").each(function(){
        $(this).show()
    })
    maxDays = 31;
}
else if($("#monthDate").val() === "02"){
    maxDays = 28;
    $(".mb-3.date.days .days-slider li").each(function(){
        if ($(this).index() > 27 ){
            $(this).hide();
        }
        else{
            $(this).show();
        }
    })
}
else{
    maxDays = 30;
    $(".mb-3.date.days .days-slider li").each(function(){
        if ($(this).index() > 29 ){
            $(this).hide();
        }
        else{
            $(this).show();
        }
    })
}
}

function optmizeZero(){
    $(".mb-3.date .form-control").each(function(){
        if($(this).val() === "1" ||$(this).val() === "2" ||$(this).val() === "3" ||$(this).val() === "4" ||$(this).val() === "5" ||$(this).val() === "6" ||$(this).val() === "7" ||$(this).val() === "8" ||$(this).val() === "9"){
            $(this).val(("0" + $(this).val())) 
        }
    })
}
function detectDay(){
    if($("#dayDate").val() < 1){
        $("#dayDate").val("01") 
        $(".mb-3.date.days .days-slider li").removeClass("active");
        $(".mb-3.date.days .days-slider li:first-child").addClass("active")
    }
    else if ($("#dayDate").val() > maxDays) {
        $("#dayDate").val(maxDays)
        $(".mb-3.date.days .days-slider li").removeClass("active");
        $(".mb-3.date.days .days-slider li:nth-child(" + maxDays +")").addClass("active")
    }
    else{
        $(".mb-3.date.days .days-slider li").removeClass("active");
        $(".mb-3.date.days .days-slider li:nth-child(" + $("#dayDate").val() +")").addClass("active")
    }
}
function detectMonth(){
    if($("#monthDate").val() < 1){
        $("#monthDate").val("01") 
        $(".mb-3.date.months .days-slider li").removeClass("active");
        $(".mb-3.date.months .days-slider li:first-child").addClass("active")
    }
    else if ($("#monthDate").val() > 12) {
        $("#monthDate").val("12")
        $(".mb-3.date.months .days-slider li").removeClass("active");
        $(".mb-3.date.months .days-slider li:nth-child(12)").addClass("active")
    }
    else{
        $(".mb-3.date.months .days-slider li").removeClass("active");
        $(".mb-3.date.months .days-slider li:nth-child(" + $("#monthDate").val() +")").addClass("active")
    }
}
let Yearsarr = [];
for (i = 1; i <= 13 ; i++ ){
    Yearsarr.push($(".mb-3.date.years .days-slider li:nth-child(" + i +")").text())
}
function detectyear(){
 
    if(!Yearsarr.includes($("#yearDate").val())){
        $("#yearDate").addClass("error")
    }
    else if($("#yearDate").val("")){
        $("#yearDate").addClass("error")
    }
    else{
        $("#yearDate").removeClass("error")
    }
}
genrateYears();

$("#dayDate").click(function(){
    $(".mb-3.date.days .days-slider").toggle(100);
})
$("#yearDate").click(function(){
    $(".mb-3.date.years .days-slider").toggle(100);
})
$("#dayDate").focusout(function(){
    detectMonthdays();
    optmizeZero();
    detectDay();
    detectMonth();
})
$("#monthDate").focusout(function(){
    detectMonthdays();
    optmizeZero();
    detectMonth();
    detectDay();
})
$("#yearDate").focusout(function(){
    detectMonthdays();
    optmizeZero();
    detectMonth();
    detectDay();
    detectyear();
})
$("#monthDate").click(function(){
    $(".mb-3.date.months .days-slider").toggle(100);
})


$(document).click(function() {
    var container = $(".mb-3.date.days .days-slider");
    var textb = $("#dayDate");
    if (!container.is(event.target) && !container.has(event.target).length) {
        if(!textb.is(event.target)){
            container.hide();
        } 
    }
});
$(document).click(function() {
    var container = $(".mb-3.date.months .days-slider");
    var textb = $("#monthDate");
    if (!container.is(event.target) && !container.has(event.target).length) {
        if(!textb.is(event.target)){
            container.hide();
        } 
    }
});

$(".mb-3.date.months .days-slider li").click(function(){
    $(".mb-3.date.months .days-slider li").removeClass("active")
    $(this).addClass("active")
    $("#monthDate").val($(this).html())
    $(".mb-3.date.months .days-slider").hide();
    detectMonthdays();
    detectMonth();
    detectDay();
})
$(".mb-3.date.days .days-slider li").click(function(){
    $(".mb-3.date.days .days-slider li").removeClass("active")
    $(this).addClass("active")
    $("#dayDate").val($(this).html())
    $(".mb-3.date.days .days-slider").hide();
    detectMonthdays();
    detectDay();
    detectMonth();
})
$(".mb-3.date.years .days-slider li").click(function(){
    $(".mb-3.date.years .days-slider li").removeClass("active")
    $(this).addClass("active")
    $("#yearDate").val($(this).html())
    $(".mb-3.date.years .days-slider").hide();
    detectMonthdays();
    detectDay();
    detectMonth();
})

function genrateYears(){
    var date = new Date
    for (i = Number(date.getFullYear() - 18); i <= Number(date.getFullYear() -6) ; i++ ){
        $(".mb-3.date.years .days-slider").html( $(".mb-3.date.years .days-slider").html() + "<li>" + i +"</li>" )
    } 

}
$(document).click(function() {
    var container = $(".mb-3.date.years .days-slider");
    var textb = $("#yearDate");
    if (!container.is(event.target) && !container.has(event.target).length) {
        if(!textb.is(event.target)){
            container.hide();
        } 
    }
});
