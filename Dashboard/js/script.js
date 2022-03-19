
// --------------------------------------------- Session CountDown -------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
let SessioncountDownBox = document.querySelector(".session-start");
let SessiondaysBox = document.querySelector(".session-start .days");
let SessionhrsBox = document.querySelector(".session-start .hrs");
let SessionminBox = document.querySelector(".session-start .min");
let SessionsecBox = document.querySelector(".session-start .sec");
let SessioncountDownDate = new Date("Mar 20, 2022 00:01:00").getTime();
// COUNT DOWN FUNCTION
let Sessionx = setInterval(function () {
  // GET DATE
  let Sessionnow = new Date().getTime();
  // TIME BETWEEN NOW AND DATE
  let Sessiondistance = SessioncountDownDate - Sessionnow;
  // CALCULATION TIME
  let Sessiondays = Math.floor(Sessiondistance / (1000 * 60 * 60 * 24));
  let Sessionhours = Math.floor(
    (Sessiondistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let Sessionminutes = Math.floor(
    (Sessiondistance % (1000 * 60 * 60)) / (1000 * 60)
  );
  let Sessionseconds = Math.floor((Sessiondistance % (1000 * 60)) / 1000);
  SessiondaysBox.innerHTML = Sessiondays + "<span>Days</span>";
  SessionhrsBox.innerHTML = Sessionhours + "<span>Hours</span>";
  SessionminBox.innerHTML = Sessionminutes + "<span>Minutes</span>";
  SessionsecBox.innerHTML = Sessionseconds + "<span>Seconds</span>";
}, 1000);

$(".nav-item.leftside").click(function () {
  tapsReset();
  let child = $(this).index() + 1;
  let loc = $(
    ".nav-item.leftside:nth-child(" + child + ")" + " .nav-link"
  ).attr("data-id");
  $(loc).show();
  $(this).addClass("active");
});

// Foget password Click

$("#forgetPassword").click(function () {
  sectorsReset();
  $("#forgetpasswordSector").show();
});

// login button in Forgetpassword page
$("#loginBtn").click(function () {
  sectorsReset();
  $("#loginSector").show();
});


function sectorsReset() {
  $("#loginSector").hide();
  $("#forgetpasswordSector").hide();
  $("#dashboardSector").hide();
}

function tapsReset() {
  $(".nav-item").removeClass("active");
  $("#sessioninfoTap").hide();
  $("#certificationTap").hide();
  $("#roadmapTap").hide();
  $("#packagesTap").hide();
  $("#overviewTap").hide();
  $("#feedbackTap").hide();
  $("#financeTap").hide();
}



var sector_login_id = 'loginSector'
var sector_forget_id = 'forgetpasswordSector'

var sector_forget_id = 'dashboardSector'



async function login_page_check_auto(user , pass)
{
  Loading_page_set();

    var value_emp = await  GET_DATA_TABLES( database_fixed_link, 'parent');

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
                Loading_page_clear();

    
}



async function login_page_check()
{
  Loading_page_set();


    tapsReset();
    $("#loginSector").show();

    var value_emp = await  GET_DATA_TABLES( database_fixed_link, 'parent');
    
    
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

                        console.log(value_emp[index].password == $('#password').val())

                            if(value_emp[index].password == $('#password').val())
                            {
                                check_pass = true;

                                login_success(value_emp[index]);
                                // alert("login success")
                                return;
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

    Loading_page_clear();

   
}



async function login_success(user_info)
{

  user_info.students = [];
  user_info.students_count = 0;
  

  var check_students = await GET_DATA_TABLES( database_fixed_link, 'students');
  check_students.forEach(element => {

    if(Number(user_info.id) == element.parent_id)
    {
      user_info.students[user_info.students_count] = element; user_info.students_count++;
    }
    
  });

  localStorage.parent_id =  user_info.id;

  sectorsReset();
  tapsReset();
  user_info.choosen_student = {};


  if(user_info.students_count > 1)
  {
    // $("#dashboardSector").show();
    $("#student_sector").show();
    $("#navg_bar").css('display',"flex");

    document.getElementById('student_sector').innerHTML = `
    <!-- Topbar Navbar -->

    <h1>Choose student</h1>`;


    $("#sector_sea_st").show();
    
    $("#select_id_student").empty();

    for(var index = 0; index < user_info.students_count ; index ++)
    {
      document.getElementById('student_sector').innerHTML += `<button id='btn_${index}'> ${user_info.students[index].name}</button>`;
      $("#select_id_student").append(`<option value='${index}'> ${user_info.students[index].name} </option>`);

    }

    for(var index = 0; index < user_info.students_count ; index ++)
    {
      $("#btn_"+index).click(async function () {

        Loading_page_set();



        var id = this.id;
        var ret = id.replace('btn_','') ;

        $("#select_id_student").val(ret )

        user_info.choosen_student = user_info.students[ret];

        await student_choosen(user_info);

      }
      )

    }
    $("#select_id_student").change(async function () {


      if($("#select_id_student").val() != "")
      {
        Loading_page_set();

        user_info.choosen_student = user_info.students[$("#select_id_student").val()];

        await student_choosen(user_info);
      }

    }
    )
    Loading_page_clear();

  }
  else
  {
    $("#sector_sea_st").hide();

    user_info.choosen_student = user_info.students[0];
    
    await student_choosen(user_info);

  }
  // $("#student_sector").show();


  


}

async function student_choosen(parent)
{
  console.log(parent)

  var get_student_pacakges = await GET_DATA_TABLES( database_fixed_link, 'student_package');
  var get_student_inv = await GET_DATA_TABLES( database_fixed_link, 'invoice');
  var get_student_inv = await GET_DATA_TABLES( database_fixed_link, 'package');

  var get_student_groups = await GET_DATA_TABLES( database_fixed_link, 'student_groups');
  var get_groups = await GET_DATA_TABLES( database_fixed_link, 'groups');
  var get_slots = await GET_DATA_TABLES( database_fixed_link, 'slots');
  var get_student_att = await GET_DATA_TABLES( database_fixed_link, 'att_feed');
  var get_ses = await GET_DATA_TABLES( database_fixed_link, 'sessions');

  var get_student_ans = await GET_DATA_TABLES( database_fixed_link, 'students_ans');

  var get_employee = await GET_DATA_TABLES( database_fixed_link, 'employee');

  var get_cer = await GET_DATA_TABLES( database_fixed_link, 'certifications');

  $("#student_sector").hide();
  $("#navg_bar").hide();
  // $("#select_id_student").

  parent.choosen_student.sessions = [];
  parent.choosen_student.sessions_count = 0;

  if(get_student_att)
  {
    get_student_att.forEach(element => {
      if(Number(element.student_id) == Number(parent.choosen_student.id))
      {
        element.sessioninfo = {};

        if(get_ses)
        {
          for(var index = 0 ; index < get_ses.length ; index ++)
          {
            get_ses[index].next_se = 'false'
            if(element.session_id == get_ses[index].id)
            {
              element.sessioninfo = get_ses[index];
              break;
              
            }
          }
        }

        parent.choosen_student.sessions[parent.choosen_student.sessions_count] = element.sessioninfo;parent.choosen_student.sessions_count++;
      }

    });
  }

  var check_date = false;
  var counter_cer = 1;
  parent.choosen_student.sessions.forEach(element => {
    element.session_time_start = '';
    element.session_time_end = '';

    get_groups.forEach(element_grp => {

      if(Number(element.groups_id) == Number(element_grp.id))
      {

        
        get_cer.forEach(element_cer => {

            if(Number(element_cer.age_id) == Number(element_grp.age_id) &&
              Number(element_cer.level_id) == Number(element_grp.level_id) &&
             Number(element_cer.lan_id) == Number(element_grp.lan_id) &&
             Number(element_cer.session_type_id) == Number(element_grp.type_id) &&
              Number(element_cer.track_id )== Number(element_grp.track_id)
               )
            {
              $('#insert_certificationTap').append(`<tr class="a-full" data-bs-toggle="modal" href="#certView" role="button"><td>Cerfication ${counter_cer} <i style="margin-left: 20px;" class="fa-solid fa-eye"></i></td></tr>`);
              counter_cer++;
            }
        });

        get_slots.forEach(element_slt => {

          if(Number(element_slt.id) == Number(element_grp.slot_id))
          {
    
            element.session_time_start = element_slt.from_value;
            element.session_time_end = element_slt.to_value;
            
          }

        });

      }
    });


  })


  var next_time_session_start = '';
  var next_time_session_end = '';
  var session_zoom_link = '';
  var instructor_name = '';


  parent.choosen_student.sessions.forEach(element => {
    if(new Date(`${element.session_date} ${element.session_time_end}` ) > new Date() && check_date == false)
    {
      next_time_session_start = `${element.session_date} ${element.session_time_start}`
      next_time_session_end = `${element.session_date} ${element.session_time_end}`
      check_date = true ;
    }

    get_employee.forEach(element_emp => {

      if(Number(element_emp.id) == Number(element.employee_id))
      {
        session_zoom_link = element_emp.zoomlink;
        instructor_name = element_emp.name;
      }
    })
    
  })



  // --------------------------------------------- Free Session CountDown -------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
let countDownBox = document.querySelector(".allTime");
let daysBox = document.querySelector(".days");
let hrsBox = document.querySelector(".hrs");
let minBox = document.querySelector(".min");
let secBox = document.querySelector(".sec");
let countDownDate = new Date(next_time_session_start).getTime();
let countDownDate_end = new Date(next_time_session_end).getTime();

let old_now = new Date().getTime();

let distance_old = countDownDate - old_now;


if(distance_old <= 0)
{
  console.log(instructor_name);
  console.log(session_zoom_link);

  $(".confirmation p").hide();
  $(".joinnow-btn").removeClass('disabled');

    $(".joinnow-btn").prop('href' , session_zoom_link)


  let x = setInterval(function () {
    // GET DATE
    let now = new Date().getTime();

    // TIME BETWEEN NOW AND DATE
    let distance = countDownDate_end - now;

    // CALCULATION TIME
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // daysBox.innerHTML = days + "<span>Days</span>";
    // hrsBox.innerHTML = hours + "<span>Hours</span>";
    // minBox.innerHTML = minutes + "<span>Minutes</span>";
    // secBox.innerHTML = seconds + "<span>Seconds</span>";

  if(distance < 0)
  {

    // daysBox.innerHTML = "";
    // hrsBox.innerHTML = "";
    // minBox.innerHTML = "";
    // secBox.innerHTML = "";

    student_choosen(parent);
   

    $(".confirmation p").hide();
    $(".joinnow-btn").removeClass('disabled');

    clearInterval(x);

    // href="https://www.google.com" target="_blank"
  }

  }, 1000);

}
else
{

  $(".joinnow-btn").addClass('disabled');

// COUNT DOWN FUNCTION
  let x = setInterval(function () {
    // GET DATE
    let now = new Date().getTime();

    // TIME BETWEEN NOW AND DATE
    let distance = countDownDate - now;

    // CALCULATION TIME
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysBox.innerHTML = days + "<span>Days</span>";
    hrsBox.innerHTML = hours + "<span>Hours</span>";
    minBox.innerHTML = minutes + "<span>Minutes</span>";
    secBox.innerHTML = seconds + "<span>Seconds</span>";

  if(distance < 0)
  {

    daysBox.innerHTML = "";
    hrsBox.innerHTML = "";
    minBox.innerHTML = "";
    secBox.innerHTML = "";

    student_choosen(parent);

    $(".confirmation p").hide();
    $(".joinnow-btn").prop('disabled', false);
    $(".joinnow-btn").prop('href' , '')
    clearInterval(x);

    // href="https://www.google.com" target="_blank"
  }

  }, 1000);

}





  $("#student_sector").hide();
  $("#dashboardSector").show();
  $("#sessioninfoTap").show();

  Loading_page_clear();

}