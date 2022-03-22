

let x = '';
let Sessionx = '';


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

function PDF_PRINT (name , sessions)
{
  var element = document.getElementById('element-to-print');
  html2pdf().from(element).save(name + " Session "+sessions);
}


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

  await set_pack();

  $('#clientname').text(user_info.name);
  $('#clientname_2').text(user_info.name);

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
    $("#student_sector_container").show();
    $("#navg_bar").css('display',"flex");

    document.getElementById('student_sector_container').innerHTML = `
    <!-- Topbar Navbar -->

    <h1 style="display:block;margin:auto;text-align: center;">Choose student</h1>`;


    $("#sector_sea_st").show();
    
    $("#select_id_student").empty();

    for(var index = 0; index < user_info.students_count ; index ++)
    {
      document.getElementById('student_sector_container').innerHTML += `<button class='choose_name_class' id='btn_${index}'> ${user_info.students[index].name}</button>`;
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


}

async function student_choosen(parent)
{


  var get_student_pacakges = await GET_DATA_TABLES( database_fixed_link, 'student_package');
  var get_student_inv = await GET_DATA_TABLES( database_fixed_link, 'invoice');
  var get_pac = await GET_DATA_TABLES( database_fixed_link, 'package');

  // var get_student_groups = await GET_DATA_TABLES( database_fixed_link, 'student_groups');
  var get_groups = await GET_DATA_TABLES( database_fixed_link, 'groups');
  var get_slots = await GET_DATA_TABLES( database_fixed_link, 'slots');
  var get_lvl = await GET_DATA_TABLES( database_fixed_link, 'level');
  var get_student_att = await GET_DATA_TABLES( database_fixed_link, 'att_feed');
  var get_ses = await GET_DATA_TABLES( database_fixed_link, 'sessions');

  var get_student_ans = await GET_DATA_TABLES( database_fixed_link, 'students_ans');

  var get_employee = await GET_DATA_TABLES( database_fixed_link, 'employee');

  var get_cer = await GET_DATA_TABLES( database_fixed_link, 'certifications');

  var get_material = await GET_DATA_TABLES( database_fixed_link, 'material');




  $("#student_sector").hide();
  $("#student_sector_container").hide();

  $("#navg_bar").hide();

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

              if(get_groups)
              {
                for(var index_grp = 0 ; index_grp < get_groups.length ; index_grp ++)
                {
                  get_ses[index].group_arr = {};
                  if(get_groups[index_grp].id == get_ses[index].groups_id)
                  {
                    get_groups[index_grp].level_name = ''

                    if(get_lvl)
                    {
                      get_lvl.forEach(element_lvl => {
                        if(Number(element_lvl.id) == Number(get_groups[index_grp].level_id))
                        {
                          get_groups[index_grp].level_name = element_lvl.name
                        }
                        
                      });
                    }

                    get_ses[index].group_arr = get_groups[index_grp];

                    break;
                  }
                }
              }
              element.sessioninfo = get_ses[index];

              break;
              
            }

            get_ses[index].material_arr = {};

            if(get_material)
            {
              get_material.forEach(element_mat => {
                if(get_ses[index].material_id == element_mat.id)
                {
                  get_ses[index].material_arr = element_mat;
                }
              })
  
            }

          }
        }

        parent.choosen_student.sessions[parent.choosen_student.sessions_count] = element;parent.choosen_student.sessions_count++;
      }

    });
  }


  var check_date = false;
  var check_date_reg = false;
  var counter_cer = 1;

  var next_session_info = {};


  $('#insert_certificationTap').empty();

  var check_cer = false;
  var session_counter_att = 0;

  if(parent.choosen_student.sessions.length)
  {

  
  parent.choosen_student.sessions.forEach(element => {
    element.sessioninfo.session_time_start = '';
    element.session_time_end = '';


    if(element.attendance == "YES")
    {
      session_counter_att++;
    }
    if(get_groups)
    {

    get_groups.forEach(element_grp => {

      if(Number(element.sessioninfo.groups_id) == Number(element_grp.id))
      {

        if(get_cer)
        {

        
        get_cer.forEach(element_cer => {
          
            if(Number(element_cer.age_id) == Number(element_grp.age_id) &&
              Number(element_cer.level_id) == Number(element_grp.level_id) &&
             Number(element_cer.lan_id) == Number(element_grp.lan_id) &&
             Number(element_cer.session_type_id) == Number(element_grp.type_id) &&
              Number(element_cer.track_id )== Number(element_grp.track_id) &&
              Number(element_cer.session_num ) <= session_counter_att
               )
            {
              check_cer = true;

              $('#insert_certificationTap').append(`<tr id='cer_ids_${counter_cer}' class="a-full" data-bs-toggle="modal" href="#certView" role="button"><td> ${element_cer.name} <i style="margin-left: 20px;" class="fa-solid fa-eye"></i></td></tr>`);
              $(`#cer_ids_${counter_cer}`).click(function(){
                $('#imgincert').attr('src' , element_cer.cert_link);
                $('#student_cer_name').text(parent.choosen_student.name);

                $("#download_pdf").empty();
                $("#download_pdf").text('Download');

                $("#download_pdf").click(function(){
                  PDF_PRINT(parent.choosen_student.name , element_cer.session_num);
                })

              })
              counter_cer++;
            }
        });
      }
        get_slots.forEach(element_slt => {

          if(Number(element_slt.id) == Number(element_grp.slot_id))
          {
    
            element.sessioninfo.session_time_start = element_slt.from_value;
            element.sessioninfo.session_time_end = element_slt.to_value;
            
          }

        });

      }
    });
  }

  })
  }


  if(check_cer == false)
  {
    $('#insert_certificationTap').append(`<tr><td> No Certification Available</td></tr>`);

  }
  var next_time_session_start_free = '';
  var next_time_session_end_free = '';
  var next_time_session_start_reg = '';
  var next_time_session_end_reg = '';
  var session_zoom_link = '';
  var instructor_name = '';

  var ses_index = 0;
  $('#session_table_id').empty();

  if(parent.choosen_student.sessions.length)
  {

  
  parent.choosen_student.sessions.forEach(element => {

    element.ses_index = ses_index;

    if(new Date(`${element.sessioninfo.session_date} ${element.sessioninfo.session_time_end}` ) < new Date())
    {
        $('#session_table_id').append(sessions_att(element))
    }
    else
    {
      $('#session_table_id').append(sessions_upcoming(element))
    }


    $('#feed_back_btn_'+element.ses_index).click(function(){
      var id = this.id;
      var ret = id.replace('feed_back_btn_','') ;

      $('#feedback_place').html(element.feedback);
      
    })
    

    if(get_groups)
    {
      get_groups.forEach(element_grp => {

        if(element.sessioninfo.groups_id == element_grp.id)
        {
          element.sessioninfo.session_type = element_grp.type_id
        }

      })
    }



    if(new Date(`${element.sessioninfo.session_date} ${element.sessioninfo.session_time_end}` ) > new Date() && check_date == false && Number(element.sessioninfo.session_type) == 2)
    {
      next_time_session_start_free = `${element.sessioninfo.session_date} ${element.sessioninfo.session_time_start}`
      next_time_session_end_free = `${element.sessioninfo.session_date} ${element.sessioninfo.session_time_end}`
      check_date = true ;
    }
    else if(new Date(`${element.sessioninfo.session_date} ${element.sessioninfo.session_time_end}` ) > new Date() && check_date_reg == false && Number(element.sessioninfo.session_type) == 1)
    {
      next_time_session_start_reg = `${element.sessioninfo.session_date} ${element.sessioninfo.session_time_start}`
      next_time_session_end_reg = `${element.sessioninfo.session_date} ${element.sessioninfo.session_time_end}`
      check_date_reg = true ;
      next_session_info = element.sessioninfo;
    }

    get_employee.forEach(element_emp => {

      if(Number(element_emp.id) == Number(element.sessioninfo.employee_id))
      {
        session_zoom_link = element_emp.zoomlink;
        instructor_name = element_emp.name;
      }
    })
    ses_index++;
  })

}


if(ses_index == 0)
{
  $('#session_table_id').append(`<tr> <td colspan="6"> No Sessions </td> </tr>`);

}


  let countDownBox = document.querySelector(".allTime");
  let daysBox = document.querySelector(".days");
  let hrsBox = document.querySelector(".hrs");
  let minBox = document.querySelector(".min");
  let secBox = document.querySelector(".sec");

  daysBox.innerHTML = "";
  hrsBox.innerHTML =  "";
  minBox.innerHTML =  "";
  secBox.innerHTML =  "";


  let SessioncountDownBox = document.querySelector(".session-start");
  let SessiondaysBox = document.querySelector(".session-start .days");
  let SessionhrsBox = document.querySelector(".session-start .hrs");
  let SessionminBox = document.querySelector(".session-start .min");
  let SessionsecBox = document.querySelector(".session-start .sec");

  SessiondaysBox.innerHTML = "";
  SessionhrsBox.innerHTML = "";
  SessionminBox.innerHTML = "";
  SessionsecBox.innerHTML = "";


  clearInterval(x);
  clearInterval(Sessionx);


  if(next_time_session_end_free != '')
  {
    // --------------------------------------------- Free Session CountDown -------------------------------
    // ----------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------

    let countDownBox = document.querySelector(".allTime");
    let daysBox = document.querySelector(".days");
    let hrsBox = document.querySelector(".hrs");
    let minBox = document.querySelector(".min");
    let secBox = document.querySelector(".sec");

    let countDownDate = new Date(next_time_session_start_free).getTime();
    let countDownDate_end = new Date(next_time_session_end_free).getTime();

    let old_now = new Date().getTime();

    let distance_old = countDownDate - old_now;

    if(distance_old <= 0)
    {

      $(".confirmation p").text('Session Running Now');
      $(".joinnow-btn").removeClass('disabled');

        $(".joinnow-btn").prop('href' , session_zoom_link)


      x = setInterval(function () {
        // GET DATE
      let now = new Date().getTime();
        // TIME BETWEEN NOW AND DATE
      let distance = countDownDate_end - now;
        // CALCULATION TIME
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0)
      {

        student_choosen(parent);
      

        // $(".confirmation p").hide();
        $(".confirmation p").text('Session Running Now');
        $(".joinnow-btn").removeClass('disabled');

        clearInterval(x);

        // href="https://www.google.com" target="_blank"
      }

      }, 1000);

    }
    else
    {

      $(".joinnow-btn").addClass('disabled').text('Session Not Started').removeClass("btn-warning").removeClass("btn-danger").addClass("btn-primary");

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

    // COUNT DOWN FUNCTION
      x = setInterval(function () {
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


  }
  else if(next_time_session_end_reg != '')
  {
    

    // --------------------------------------------- Session CountDown -------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

let SessioncountDownBox = document.querySelector(".session-start");
let SessiondaysBox = document.querySelector(".session-start .days");
let SessionhrsBox = document.querySelector(".session-start .hrs");
let SessionminBox = document.querySelector(".session-start .min");
let SessionsecBox = document.querySelector(".session-start .sec");

let SessioncountDownDate = new Date(next_time_session_start_reg).getTime();
let SessioncountDownDate_end = new Date(next_time_session_end_reg).getTime();

let old_now = new Date().getTime();

let distance_old = SessioncountDownDate - old_now;

if(distance_old <= 0)
{

  $(".confirmation p").text('Session Running Now');
  $(".joinnow-btn").removeClass('disabled');

    $(".joinnow-btn").prop('href' , session_zoom_link)

// COUNT DOWN FUNCTION
    Sessionx = setInterval(function () {
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

    
      if(Sessiondistance < 0)
      {
    
        student_choosen(parent);
      
    
        // $(".confirmation p").hide();
        $(".confirmation p").text('Session Running Now');
        $(".joinnow-btn").removeClass('disabled');
    
        clearInterval(x);
    
        // href="https://www.google.com" target="_blank"
      }
    
    
    }, 1000);

}
else
{

  $(".joinnow-btn").addClass('disabled').text('Session Not Started').removeClass("btn-warning").removeClass("btn-danger").addClass("btn-primary");

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

// COUNT DOWN FUNCTION
Sessionx = setInterval(function () {
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

  if(Sessiondistance < 0)
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

  }


  }, 1000);


  }


  }
  else
  {
    $(".confirmation p").hide();
    $(".joinnow-btn").addClass('disabled').text('Session Expired').removeClass("btn-warning").addClass("btn-danger");
  }



  parent.choosen_student.packages = [];
  parent.choosen_student.packagescount = 0;

  parent.choosen_student.invoices = []
  parent.choosen_student.invoice_count = 0;

  get_student_pacakges.forEach(element => {
    
    if(element.student_id == parent.choosen_student.id)
    {
      element.packages_arr = {};

      get_pac.forEach(element_pac => {

        if(element.package_id == element_pac.id)
        {
          element.packages_arr = element_pac;
        }
      });

      get_student_inv.forEach(element_inv => {

        if(element_inv.package_id == element.id)
        {
          parent.choosen_student.invoices[parent.choosen_student.invoice_count] = element_inv;
          parent.choosen_student.invoice_count++;
        }

      });
      
      parent.choosen_student.packages[parent.choosen_student.packagescount] = element;

      parent.choosen_student.packagescount++;
    }

    
  });


  
  if(parent.choosen_student.packagescount == 0)
  {
    tapsReset();
    $("#student_sector").hide();
    $("#student_sector_container").hide();

    $("#dashboardSector").show();

    $("#sessioninfoTap_id").show();
    $("#sessioninfoTap").show();
    $("#overviewTap").hide();

    $("#certificationTap_id").show();
    $("#roadmapTap_id").hide();
    $("#packagesTap_id").show();
    $("#overviewTap_id").hide();
    $("#feedbackTap_id").show();
    $("#financeTap_id").hide();
    
    $("#reg_status").text('Not Registered').css('color', 'red').css('size' , '25px');
    $(".sidebar").removeClass('registerd');
    $(".nav-item").removeClass("active");
    $("#sessioninfoTap_id").addClass("active");

  }
  else
  {

  var select_agent = '';
  var Total_quota = 0;
  var att_se = 0;
  var abs_se = 0;
  var rem_se = 0;
  var pd_se = 0;
  var un_se = 0;

  get_employee.forEach(element =>
    {
      if(element.id == parent.customer_agent_id)
      {
        select_agent = element.name
      }

    })

    if(parent.choosen_student.sessions.length)
    {

    
    parent.choosen_student.sessions.forEach(element => {
      if(element.attendance == 'YES')
      {
        att_se++;
      }
      else if(element.attendance == 'NO')
      {
        abs_se++;
      }
      else
      {
        rem_se++;
      }
    })
  }


    parent.choosen_student.invoices.forEach(element => {
      if(element.status == 'done'  )
      {
        pd_se += Number(element.qouta)
      }
      else if(element.status == 'waiting')
      {
        un_se += Number(element.qouta)
      }

    })
    

    parent.choosen_student.packages.forEach(element =>
      {
        Total_quota += Number(element.packages_arr.quota)
      })



  $('#student_name_over').text(parent.choosen_student.name)



  if(parent.choosen_student.sessions.length)
  {
    if(next_session_info.length)
    {
      $('#student_grop_over').text(next_session_info.group_arr.id)

    }else{
      $('#student_grop_over').text('No Groups').css('color' , 'red')

    }
  }
  else
  {
    $('#student_grop_over').text('No Groups').css('color' , 'red')
  }


  $('#student_cs_over').text(select_agent);



  $('#mem_q_id').text(`${Total_quota} Session/s`);
  $('#mem_a_id').text(`${att_se} Session/s`).css('color','green');
  $('#mem_b_id').text(`${abs_se} Session/s`).css('color','red');
  $('#mem_r_id').text(`${rem_se} Session/s`);
  $('#mem_p_id').text(`${pd_se} Session/s`);


  if(Total_quota <= (abs_se+att_se))
  {
    $('#mem_status_id').text(`Expired`).css('color','red');
    $(".joinnow-btn").addClass('disabled').text('Membership Expired').removeClass("btn-warning").addClass("btn-dangar");

  }
  else if(pd_se <= (abs_se+att_se))
  {
    $('#mem_status_id').text(`Due Installment`).css('color','red');
    $(".joinnow-btn").addClass('disabled').text('Due Installment').removeClass("btn-warning").addClass("btn-dangar");

  }
  else if(pd_se > (abs_se+att_se))
  {
    $('#mem_status_id').text(`Valid`).css('color','green');

    if(rem_se <= 0)
    {
      $(".joinnow-btn").addClass('disabled').text('Choose Schedule').removeClass("btn-warning").removeClass("btn-dangar").addClass("btn-primary");
    }

  }
  
  if(un_se)
  {
    $('#mem_u_id').show();
    $('#unpaid_id').show();
    
    $('#mem_u_id').text(`${un_se} Session/s`);
  }
  else
  {
    $('#mem_u_id').hide();
    $('#unpaid_id').hide();

  }

  $('#action_place').hide();

  
    tapsReset();

    $(".nav-item").removeClass("active");
    $("#overviewTap_id").addClass("active");

    $("#reg_status").text('Registered').css('color', 'green').css('size' , '25px');
    $(".sidebar").addClass('registerd');

    $("#student_sector").hide();
    $("#student_sector_container").hide();

    $("#dashboardSector").show();

    $("#sessioninfoTap_id").hide();
    $("#sessioninfoTap").hide();

    $("#certificationTap_id").show();
    $("#roadmapTap_id").hide();
    $("#packagesTap_id").show();
    $("#overviewTap_id").show();
    $("#overviewTap").show();

    $("#feedbackTap_id").show();
    $("#financeTap_id").show();
  }



  Loading_page_clear();

}



async function set_pack()
{

  var get_all_pack = await  GET_DATA_TABLES(database_fixed_link ,'package');

  get_all_pack.forEach(elemnt =>{

      if(elemnt.name == 'Monthly')
      {
          var hours = 2.5 * (Number(elemnt.quota) / Number(elemnt.installments) );
          var hour_rate = Number(elemnt.paid_as) / hours;

          $('#Pack_1_paid_as').text(elemnt.paid_as);
          $('#Pack_1_hours').text(`${hours} Hours online classes`);
          $('#Pack_1_billing').text(`Billed Monthly`);
          $('#Pack_1_inst').text(`1 Year plan divided on ${elemnt.installments} payments` );
          $('#Pack_1_hour_rate').text(`${hour_rate.toFixed(2)} L.E / Hour`);
          $('#Pack_1_btn').text(`Pay ${elemnt.paid_as}`);
          $('#Pack_1_btn').val(elemnt.id);

      }

      if(elemnt.name == 'Quarterly')
      {
          var hours = 2.5 * (Number(elemnt.quota) / Number(elemnt.installments) );
          var hour_rate = Number(elemnt.paid_as) / hours;

          $('#Pack_2_paid_as').text(elemnt.paid_as);
          $('#Pack_2_hours').text(`${hours} Hours online classes`);
          $('#Pack_2_billing').text(`Billed Quarterly`);
          $('#Pack_2_inst').text(`1 Year plan divided on ${elemnt.installments} payments` );
          $('#Pack_2_hour_rate').text(`${hour_rate.toFixed(2)} L.E / Hour`);
          $('#Pack_2_btn').text(`Pay ${elemnt.paid_as}`);
          $('#Pack_2_btn').val(elemnt.id);

      }

      if(elemnt.name == 'Annually')
      {
          var hours = 2.5 * (Number(elemnt.quota) / Number(elemnt.installments) );
          var hour_rate = Number(elemnt.paid_as) / hours;

          $('#Pack_3_paid_as').text(elemnt.paid_as);
          $('#Pack_3_hours').text(`${hours} Hours online classes`);
          $('#Pack_3_billing').text(`Billed Once`);
          $('#Pack_3_inst').text(`1 Year plan divided on ${elemnt.installments} payments` );
          $('#Pack_3_hour_rate').text(`${hour_rate.toFixed(2)} L.E / Hour`);
          $('#Pack_3_btn').text(`Pay ${elemnt.paid_as}`);
          $('#Pack_3_btn').val(elemnt.id);

      }

  }
  )
}



function sessions_att(element)
{

  var result = ``;
  if(element)
  {


      result = `
      <tr>
      <td style="color: rgb(0, 0, 0)">Session ${element.sessioninfo.session_num}</td>
      <td style="color: rgb(0, 0, 0)">${element.sessioninfo.session_date}</td>
       `
    
      //  <td style="color: rgb(0, 0, 0)">${element.sessioninfo.group_arr.level_name}</td>

  if(element.attendance == 'YES')
  {
    result += `<td  style="color: green;" > <i class="fa-solid fa-square-check"></i></td>`;
    if(Number(element.sessioninfo.material_id) == 0)
    {
      result += `<td style="color: red"  ><i class="fa-solid fa-ban"></i></td>`;
    }
    else
    {
      if(element.sessioninfo.material_arr)
      {
        result += `<td class="link"> <a href="${element.sessioninfo.material_arr.video_link}" target="_blank"><i class="fa-solid fa-link"></i></a></td>`
      }
      else
      {
        result += `<td style="color: red"  ><i class="fa-solid fa-ban"></i></td>`;
      }
    }
    if(element.feedback == '')
    {
      result += `<td style="color: red"  ><i class="fa-solid fa-ban"></i></td>`;
    }
    else
    {
      result += `<td class="link"><a data-bs-toggle="modal" href="#feedbackPop" role="button" id='feed_back_btn_${element.ses_index}'><i class="fa-solid fa-eye"></i></a></td>`;
    }
  }
  else if(element.attendance == 'NO')
  {
    result += `<td  style="color: red" > <i class="fa-solid fa-square-xmark"></i></td>`;
    if(Number(element.sessioninfo.material_id) == 0)
    {
      result += `<td style="color: red"  ><i class="fa-solid fa-ban"></i></td>`;
    }
    else
    {
      if(element.sessioninfo.material_arr)
      {
        result += `<td class="link"> <a href="${element.sessioninfo.material_arr.video_link}" target="_blank"><i class="fa-solid fa-link"></i></a></td>`
      }
      else
      {
        result += `<td style="color: red"  ><i class="fa-solid fa-ban"></i></td>`;
      }
    }

    result += `<td style="color: red"  ><i class="fa-solid fa-ban"></i></td>`;

  }
  else
  {
    result += `<td  style="color:#fd7d00" colspan="3" >PENDING</i></td>`;
  }

  result +=`</tr>`;


}


  return result;
}


function sessions_upcoming(element)
{
//<td style="color: rgb(172, 172, 172)">${element.sessioninfo.group_arr.level_name}</td>
  if(element)
  {
    return `
    <tr>
    <td style="color: rgb(172, 172, 172)">Session ${element.sessioninfo.session_num}</td>
    <td style="color: rgb(172, 172, 172)">${element.sessioninfo.session_date}</td>
    
    
    <td  style="color: rgb(172, 172, 172)" colspan="3" > UPCOMMING</i></td>        
  
    </tr>
    `;
  }


}
