

async function ADD_sales_call()
{
    Loading_page_set();


    document.getElementById("blob_Location_1").innerHTML = ``;
    
    var parent_arr_all = await GET_DATA_TABLES(database_fixed_link , "parent" );
    var students_arr_0 = await GET_DATA_TABLES(database_fixed_link , "students" );

    var call_status_arr = await GET_DATA_TABLES(database_fixed_link , "call_status" );
    var call_type_arr = await GET_DATA_TABLES(database_fixed_link , "call_type" );
    var cat_arr = await GET_DATA_TABLES(database_fixed_link , "cat" );
    var close_arr = await GET_DATA_TABLES(database_fixed_link , "close" );
    var customer_ser_arr_0 = await GET_DATA_TABLES(database_fixed_link , "sales_calls" );
    var employee_arr = await GET_DATA_TABLES(database_fixed_link , "employee" );


    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    document.getElementById("search-results").innerHTML = ``;

    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    students_arr_0.forEach(elment => {
        var check = false;
        parent_arr_all.forEach(elment_pt => {

                if(elment.parent_id == elment_pt.id)
                {
                    check = true;
                    elment.stid  = elment_pt.id;
                    elment.stname  = elment_pt.name;
                }
            })

            if(check == false)
            {
                elment.stid  = 0;
                elment.stname  = "No Parent";
            }
    }

    )
    document.getElementById("Location_1").innerHTML +=`</div></div>`;


    add_select_html_students_search_sales("Location_1" , "search_s" , "Search ST/PT " , students_arr_0 );

    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    var parent_arr=[]


    if(localStorage.permission == 4)
    {
        parent_arr = parent_arr_all;
    }
    else
    {
        var count_in = 0;
        parent_arr_all.forEach(element=>
            {
                if(localStorage.userid == element.sales_agent_id)
                {
                    parent_arr[count_in] = element;count_in++;
                }
            }
    
        )
    }



    add_select_html_sales("Location_1" , "call_parent_input" , "Parent " , parent_arr);
    add_select_html_students_sales("Location_1" , "call_student_input" , "Student " );


    
    document.getElementById("Location_1").innerHTML +=`</div></div>`;
    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    add_select_html_sales("Location_1" , "call_type_input" , "Type " , call_type_arr);
    add_select_html_sales("Location_1" , "call_status_input" , "Status " , call_status_arr);
    add_select_html_sales("Location_1" , "call_cat_input" , "Category " , cat_arr);
    add_select_html_sales("Location_1" , "call_closing_input" , "Closing " , close_arr);
    document.getElementById("Location_1").innerHTML +=`</div></div>`;
    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    document.getElementById("Location_1").innerHTML +=`<label> Follow Up Date : <label><input type='date' id='follow_up_date_id' />`;

    document.getElementById("Location_1").innerHTML +=`</div></div>`;
    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    document.getElementById("Location_1").innerHTML +=`<div class="row"><label> Note : <label></div>`;

    
    document.getElementById("Location_1").innerHTML +=`<div class="row col-6"><textarea style='float:right' rows="1" cols="1" id='text_area_id'></textarea ></div>`;
    document.getElementById("Location_1").innerHTML +=`</div></div>`;

    document.getElementById("Location_1").innerHTML += `<div ><button class='btn btn-success' style='float:right;' id='send_group'>ADD</button></div>`;


    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML +=`</div></div>`;
    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML +=`</div></div>`;
    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    document.getElementById("Location_1").innerHTML +=`<hr class="hr-primary" />`;
    document.getElementById("Location_1").innerHTML +=`</div></div>`;
    document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById("Location_1").innerHTML +=`</div></div>`;
    document.getElementById("Location_1").innerHTML +=`<div class="input-group">
    <div class='col justify-content-start'>
      <input type="search" id="search_all" class="form-control" />
    </div><div id='search_assign'> </div>
    <div class='col justify-content-start' style='z-index:0;'><button type="button" id='search_btn' class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button></div>
  </div>`;


    employee_drop_down_search('search_assign');
  
  document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

  document.getElementById("Location_1").innerHTML +=`<div class='col justify-content-start' style='z-index:0;'>
  <button type="button" id='all_calls_btn' class="btn btn-secondary">
  All
</button>
  <button type="button" id='closed_calls_btn' class="btn btn-success">
  All Closed
</button>
<button type="button" id='follow_up_btn' class="btn btn-danger">
All Follow Up
</button>

<label>Date Type :</label>
<select id='check_follow_type_id' >
<option value=''></option> 
<option value='eq'>Equal </option> 
<option value='co'>Compare </option> 
</select>
<input  id='follow_up_start_date' type='date' style='display:none'/>
<input id='follow_up_end_date' type='date' style='display:none'/>
<button type="button" id='follow_up_btn_date' class="btn btn-danger">
Follow Up
</button>
<label > Counter : </label><input  id='count_id' value='' readonly/>
</div> `

document.getElementById("Location_1").innerHTML +=`</div></div>`;

  document.getElementById("Location_1").innerHTML +=`</div></div>`;


  document.getElementById("Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById("Location_1").innerHTML +=`<hr class="hr-primary" />`;
  document.getElementById("Location_1").innerHTML +=`</div></div>`;

  $('.select2').select2();

  if(customer_ser_arr_0 && customer_ser_arr_0 !== undefined && customer_ser_arr_0.length != 0){

  var saved_customer_ser_arr_0 = customer_ser_arr_0;

  
  customer_ser_arr_0.forEach(element => {

    if(Number(element.call_id) == 0)
    {
        call_status_arr.forEach(Data_ => {

            if(element.call_status_id == Data_.id)
            {
                element.call_status_id = Data_.name
            }
        });
        
        call_type_arr.forEach(Data_ => {

            if(element.call_type_id == Data_.id)
            {
                element.call_type_id = Data_.name
            }
        });

        cat_arr.forEach(Data_ => {

            if(element.cat_id == Data_.id)
            {
                element.cat_id = Data_.name
            }
        });

        close_arr.forEach(Data_ => {

            if(element.close_id == Data_.id)
            {
                                              if(Data_.name == "Call Closed")
                              {
                                element.close_id = `<label style='color:green'>Call Closed</label>`;
                              }
                              else if (Data_.name == "Call Follow Up")
                              {
                                element.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                              }
            }
        });
        
        students_arr_0.forEach(Data_ => {

            if(Number(element.student_id) == 0)
            {
                element.student_name = "All"
                
            }
            if(element.student_id == Data_.id)
            {
                element.student_id = Data_.id
                if(Data_.name != "")
                element.student_name = Data_.name
                else
                element.student_name = "No Student Name"
            }
        });


        parent_arr.forEach(Data_ => {

            if(element.parent_id == Data_.id)
            {
                if(Data_.name != "")
                element.parent_name = Data_.name
                else
                element.parent_name = "No Parent Name"


                employee_arr.forEach(Data_em => {
                    if(Data_.customer_agent_id == Data_em.id)
                    {
                        element.cs_id = Data_em.id
                        if(Data_.name != "")
                        element.cs_name = Data_em.name
                        else
                        element.cs_name = "No CS-Agent Assigned"
                    }
                });
                employee_arr.forEach(Data_em => {
                    if(Data_.sales_agent_id == Data_em.id)
                    {
                        element.sales_id = Data_em.id
                        if(Data_.name != "")
                        element.sales_name = Data_em.name
                        else
                        element.sales_name = "No Sales-Agent Assigned"
                    }
                });
                


            }
        });


        var Counter_i = 0 ;

        saved_customer_ser_arr_0.forEach(Data__ => {

            if(element.id == Data__.call_id) 
            {
                Counter_i++;
            }
        })

        element.calls_count = Counter_i;

        element.related_calls = [];
        Counter_i = 0;
        saved_customer_ser_arr_0.forEach(Data__ => {
    
            if(element.id == Data__.call_id) 
            {

                    call_status_arr.forEach(Data_ => {
            
                        if(Data__.call_status_id == Data_.id)
                        {
                            Data__.call_status_id = Data_.name
                        }
                    });
                    
                    call_type_arr.forEach(Data_ => {
            
                        if(Data__.call_type_id == Data_.id)
                        {
                            Data__.call_type_id = Data_.name
                        }
                    });
            
                    cat_arr.forEach(Data_ => {
            
                        if(Data__.cat_id == Data_.id)
                        {
                            Data__.cat_id = Data_.name
                        }
                    });
            
                    close_arr.forEach(Data_ => {
            
                        if(Data__.close_id == Data_.id)
                        {
                            if(Data_.name == "Call Closed")
                            {
                                Data__.close_id = `<label style='color:green'>Call Closed</label>`;
                            }
                            else if (Data_.name == "Call Follow Up")
                            {
                                Data__.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                            }
                        }
                    });
                    
                    parent_arr.forEach(Data_ => {
            
                        if(Data__.parent_id == Data_.id)
                        {
                            Data__.parent_id = Data_.id
                            if(Data_.name != "")
                            Data__.parent_name = Data_.name
                            else
                            Data__.parent_name = "No Parent Name"
                        }
                    });
            
                    students_arr_0.forEach(Data_ => {
            
                        if(Data__.student_id == Data_.id)
                        {
                            Data__.student_id = Data_.id
                            if(Data_.name != "")
                            Data__.student_name = Data_.name
                            else
                            Data__.student_name = "No Student Name"
                        }
                    });

                    element.related_calls[Counter_i] = Data__
                    element.close_id = Data__.close_id
                    element.follow_date = Data__.follow_date
                    Counter_i++;
            }
        });
    }

  });

  customer_ser_arr_0 = customer_ser_arr_0.filter(value => value.call_id == 0);
}

create_table_sales_custom(customer_ser_arr_0 , null , null);



  $('#search_btn').click(async function (index) {  

    Loading_page_set();

    var customer_ser_arr_1 = await GET_DATA_TABLES(database_fixed_link , "sales_calls" );

    if(customer_ser_arr_1 && customer_ser_arr_1 !== undefined && customer_ser_arr_1.length != 0){

        var saved_customer_ser_arr_1 = customer_ser_arr_1;
      
        customer_ser_arr_1.forEach(element => {
      
          if(Number(element.call_id) == 0)
          {
              call_status_arr.forEach(Data_ => {
      
                  if(element.call_status_id == Data_.id)
                  {
                      element.call_status_id = Data_.name
                  }
              });
              
              call_type_arr.forEach(Data_ => {
      
                  if(element.call_type_id == Data_.id)
                  {
                      element.call_type_id = Data_.name
                  }
              });
      
              cat_arr.forEach(Data_ => {
      
                  if(element.cat_id == Data_.id)
                  {
                      element.cat_id = Data_.name
                  }
              });
      
              close_arr.forEach(Data_ => {
      
                  if(element.close_id == Data_.id)
                  {
                                                    if(Data_.name == "Call Closed")
                              {
                                element.close_id = `<label style='color:green'>Call Closed</label>`;
                              }
                              else if (Data_.name == "Call Follow Up")
                              {
                                element.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                              }
                  }
              });
              
              students_arr_0.forEach(Data_ => {
      
                  if(Number(element.student_id) == 0)
                  {
                      element.student_name = "All"
                      
                  }
                  if(element.student_id == Data_.id)
                  {
                      element.student_id = Data_.id
                      if(Data_.name != "")
                      element.student_name = Data_.name
                      else
                      element.student_name = "No Student Name"
                  }
              });
      
      
              parent_arr.forEach(Data_ => {
      
                  if(element.parent_id == Data_.id)
                  {
                      if(Data_.name != "")
                      element.parent_name = Data_.name
                      else
                      element.parent_name = "No Parent Name"
      
      
                      employee_arr.forEach(Data_em => {
                          if(Data_.customer_agent_id == Data_em.id)
                          {
                              element.cs_id = Data_em.id
                              if(Data_.name != "")
                              element.cs_name = Data_em.name
                              else
                              element.cs_name = "No CS-Agent Assigned"
                          }
                      });
                      employee_arr.forEach(Data_em => {
                          if(Data_.sales_agent_id == Data_em.id)
                          {
                              element.sales_id = Data_em.id
                              if(Data_.name != "")
                              element.sales_name = Data_em.name
                              else
                              element.sales_name = "No Sales-Agent Assigned"
                          }
                      });
                      
      
      
                  }
              });
      
      
              var Counter_i = 0 ;
      
              saved_customer_ser_arr_1.forEach(Data__ => {
      
                  if(element.id == Data__.call_id) 
                  {
                      Counter_i++;
                  }
              })
      
              element.calls_count = Counter_i;
      
              element.related_calls = [];
              Counter_i = 0;
              saved_customer_ser_arr_1.forEach(Data__ => {
          
                  if(element.id == Data__.call_id) 
                  {
      
                          call_status_arr.forEach(Data_ => {
                  
                              if(Data__.call_status_id == Data_.id)
                              {
                                  Data__.call_status_id = Data_.name
                              }
                          });
                          
                          call_type_arr.forEach(Data_ => {
                  
                              if(Data__.call_type_id == Data_.id)
                              {
                                  Data__.call_type_id = Data_.name
                              }
                          });
                  
                          cat_arr.forEach(Data_ => {
                  
                              if(Data__.cat_id == Data_.id)
                              {
                                  Data__.cat_id = Data_.name
                              }
                          });
                  
                          close_arr.forEach(Data_ => {
                  
                              if(Data__.close_id == Data_.id)
                              {
                                                              if(Data_.name == "Call Closed")
                            {
                                Data__.close_id = `<label style='color:green'>Call Closed</label>`;
                            }
                            else if (Data_.name == "Call Follow Up")
                            {
                                Data__.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                            }
                              }
                          });
                          
                          parent_arr.forEach(Data_ => {
                  
                              if(Data__.parent_id == Data_.id)
                              {
                                  Data__.parent_id = Data_.id
                                  if(Data_.name != "")
                                  Data__.parent_name = Data_.name
                                  else
                                  Data__.parent_name = "No Parent Name"
                              }
                          });
                  
                          students_arr_0.forEach(Data_ => {
                  
                              if(Data__.student_id == Data_.id)
                              {
                                  Data__.student_id = Data_.id
                                  if(Data_.name != "")
                                  Data__.student_name = Data_.name
                                  else
                                  Data__.student_name = "No Student Name"
                              }
                          });
      
                          element.related_calls[Counter_i] = Data__
                          element.close_id = Data__.close_id
                          element.follow_date = Data__.follow_date
                          Counter_i++;
                  }
              });
          }
      
        });
      
        customer_ser_arr_1 = customer_ser_arr_1.filter(value => value.call_id == 0);
      }

      create_table_sales_custom(customer_ser_arr_1 , null , null);

    });


    $('#closed_calls_btn').click(async function (index) {  

        Loading_page_set();

        var customer_ser_arr_1 = await GET_DATA_TABLES(database_fixed_link , "sales_calls" );

        if(customer_ser_arr_1 && customer_ser_arr_1 !== undefined && customer_ser_arr_1.length != 0){
    
            var saved_customer_ser_arr_1 = customer_ser_arr_1;
          
            customer_ser_arr_1.forEach(element => {
          
              if(Number(element.call_id) == 0)
              {
                  call_status_arr.forEach(Data_ => {
          
                      if(element.call_status_id == Data_.id)
                      {
                          element.call_status_id = Data_.name
                      }
                  });
                  
                  call_type_arr.forEach(Data_ => {
          
                      if(element.call_type_id == Data_.id)
                      {
                          element.call_type_id = Data_.name
                      }
                  });
          
                  cat_arr.forEach(Data_ => {
          
                      if(element.cat_id == Data_.id)
                      {
                          element.cat_id = Data_.name
                      }
                  });
          
                  close_arr.forEach(Data_ => {
          
                      if(element.close_id == Data_.id)
                      {
                                                        if(Data_.name == "Call Closed")
                              {
                                element.close_id = `<label style='color:green'>Call Closed</label>`;
                              }
                              else if (Data_.name == "Call Follow Up")
                              {
                                element.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                              }
                      }
                  });
                  
                  students_arr_0.forEach(Data_ => {
          
                      if(Number(element.student_id) == 0)
                      {
                          element.student_name = "All"
                          
                      }
                      if(element.student_id == Data_.id)
                      {
                          element.student_id = Data_.id
                          if(Data_.name != "")
                          element.student_name = Data_.name
                          else
                          element.student_name = "No Student Name"
                      }
                  });
          
          
                  parent_arr.forEach(Data_ => {
          
                      if(element.parent_id == Data_.id)
                      {
                          if(Data_.name != "")
                          element.parent_name = Data_.name
                          else
                          element.parent_name = "No Parent Name"
          
          
                          employee_arr.forEach(Data_em => {
                              if(Data_.customer_agent_id == Data_em.id)
                              {
                                  element.cs_id = Data_em.id
                                  if(Data_.name != "")
                                  element.cs_name = Data_em.name
                                  else
                                  element.cs_name = "No CS-Agent Assigned"
                              }
                          });
                          employee_arr.forEach(Data_em => {
                              if(Data_.sales_agent_id == Data_em.id)
                              {
                                  element.sales_id = Data_em.id
                                  if(Data_.name != "")
                                  element.sales_name = Data_em.name
                                  else
                                  element.sales_name = "No Sales-Agent Assigned"
                              }
                          });
                          
          
          
                      }
                  });
          
          
                  var Counter_i = 0 ;
          
                  saved_customer_ser_arr_1.forEach(Data__ => {
          
                      if(element.id == Data__.call_id) 
                      {
                          Counter_i++;
                      }
                  })
          
                  element.calls_count = Counter_i;
          
                  element.related_calls = [];
                  Counter_i = 0;
                  saved_customer_ser_arr_1.forEach(Data__ => {
              
                      if(element.id == Data__.call_id) 
                      {
          
                              call_status_arr.forEach(Data_ => {
                      
                                  if(Data__.call_status_id == Data_.id)
                                  {
                                      Data__.call_status_id = Data_.name
                                  }
                              });
                              
                              call_type_arr.forEach(Data_ => {
                      
                                  if(Data__.call_type_id == Data_.id)
                                  {
                                      Data__.call_type_id = Data_.name
                                  }
                              });
                      
                              cat_arr.forEach(Data_ => {
                      
                                  if(Data__.cat_id == Data_.id)
                                  {
                                      Data__.cat_id = Data_.name
                                  }
                              });
                      
                              close_arr.forEach(Data_ => {
                      
                                  if(Data__.close_id == Data_.id)
                                  {
                                                                  if(Data_.name == "Call Closed")
                            {
                                Data__.close_id = `<label style='color:green'>Call Closed</label>`;
                            }
                            else if (Data_.name == "Call Follow Up")
                            {
                                Data__.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                            }
                                  }
                              });
                              
                              parent_arr.forEach(Data_ => {
                      
                                  if(Data__.parent_id == Data_.id)
                                  {
                                      Data__.parent_id = Data_.id
                                      if(Data_.name != "")
                                      Data__.parent_name = Data_.name
                                      else
                                      Data__.parent_name = "No Parent Name"
                                  }
                              });
                      
                              students_arr_0.forEach(Data_ => {
                      
                                  if(Data__.student_id == Data_.id)
                                  {
                                      Data__.student_id = Data_.id
                                      if(Data_.name != "")
                                      Data__.student_name = Data_.name
                                      else
                                      Data__.student_name = "No Student Name"
                                  }
                              });
          
                              element.related_calls[Counter_i] = Data__
                              element.close_id = Data__.close_id
                              element.follow_date = Data__.follow_date
                              Counter_i++;
                      }
                  });
              }
          
            });
          
            customer_ser_arr_1 = customer_ser_arr_1.filter(value => value.call_id == 0);
          }
    
          create_table_sales_custom(customer_ser_arr_1 , `<label style='color:green'>Call Closed</label>` , null);
    });

        $('#follow_up_btn').click(async function (index) {  
            Loading_page_set();

            var customer_ser_arr_1 = await GET_DATA_TABLES(database_fixed_link , "sales_calls" );

            if(customer_ser_arr_1 && customer_ser_arr_1 !== undefined && customer_ser_arr_1.length != 0){
        
                var saved_customer_ser_arr_1 = customer_ser_arr_1;
              
                customer_ser_arr_1.forEach(element => {
              
                  if(Number(element.call_id) == 0)
                  {
                      call_status_arr.forEach(Data_ => {
              
                          if(element.call_status_id == Data_.id)
                          {
                              element.call_status_id = Data_.name
                          }
                      });
                      
                      call_type_arr.forEach(Data_ => {
              
                          if(element.call_type_id == Data_.id)
                          {
                              element.call_type_id = Data_.name
                          }
                      });
              
                      cat_arr.forEach(Data_ => {
              
                          if(element.cat_id == Data_.id)
                          {
                              element.cat_id = Data_.name
                          }
                      });
              
                      close_arr.forEach(Data_ => {
              
                          if(element.close_id == Data_.id)
                          {

                              if(Data_.name == "Call Closed")
                              {
                                element.close_id = `<label style='color:green'>Call Closed</label>`;
                              }
                              else if (Data_.name == "Call Follow Up")
                              {
                                element.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                              }


                          }
                      });
                      
                      students_arr_0.forEach(Data_ => {
              
                          if(Number(element.student_id) == 0)
                          {
                              element.student_name = "All"
                              
                          }
                          if(element.student_id == Data_.id)
                          {
                              element.student_id = Data_.id
                              if(Data_.name != "")
                              element.student_name = Data_.name
                              else
                              element.student_name = "No Student Name"
                          }
                      });
              
              
                      parent_arr.forEach(Data_ => {
              
                          if(element.parent_id == Data_.id)
                          {
                              if(Data_.name != "")
                              element.parent_name = Data_.name
                              else
                              element.parent_name = "No Parent Name"
              
              
                              employee_arr.forEach(Data_em => {
                                  if(Data_.customer_agent_id == Data_em.id)
                                  {
                                      element.cs_id = Data_em.id
                                      if(Data_.name != "")
                                      element.cs_name = Data_em.name
                                      else
                                      element.cs_name = "No CS-Agent Assigned"
                                  }
                              });
                              employee_arr.forEach(Data_em => {
                                  if(Data_.sales_agent_id == Data_em.id)
                                  {
                                      element.sales_id = Data_em.id
                                      if(Data_.name != "")
                                      element.sales_name = Data_em.name
                                      else
                                      element.sales_name = "No Sales-Agent Assigned"
                                  }
                              });
                              
              
              
                          }
                      });
              
              
                      var Counter_i = 0 ;
              
                      saved_customer_ser_arr_1.forEach(Data__ => {
              
                          if(element.id == Data__.call_id) 
                          {
                              Counter_i++;
                          }
                      })
              
                      element.calls_count = Counter_i;
              
                      element.related_calls = [];
                      Counter_i = 0;
                      saved_customer_ser_arr_1.forEach(Data__ => {
                  
                          if(element.id == Data__.call_id) 
                          {
              
                                  call_status_arr.forEach(Data_ => {
                          
                                      if(Data__.call_status_id == Data_.id)
                                      {
                                          Data__.call_status_id = Data_.name
                                      }
                                  });
                                  
                                  call_type_arr.forEach(Data_ => {
                          
                                      if(Data__.call_type_id == Data_.id)
                                      {
                                          Data__.call_type_id = Data_.name
                                      }
                                  });
                          
                                  cat_arr.forEach(Data_ => {
                          
                                      if(Data__.cat_id == Data_.id)
                                      {
                                          Data__.cat_id = Data_.name
                                      }
                                  });
                          
                                  close_arr.forEach(Data_ => {
                          
                                      if(Data__.close_id == Data_.id)
                                      {
                                 if(Data_.name == "Call Closed")
                                {
                                    Data__.close_id = `<label style='color:green'>Call Closed</label>`;
                                }
                                else if (Data_.name == "Call Follow Up")
                                {
                                    Data__.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                                }
                                      }
                                  });
                                  
                                  parent_arr.forEach(Data_ => {
                          
                                      if(Data__.parent_id == Data_.id)
                                      {
                                          Data__.parent_id = Data_.id
                                          if(Data_.name != "")
                                          Data__.parent_name = Data_.name
                                          else
                                          Data__.parent_name = "No Parent Name"
                                      }
                                  });
                          
                                  students_arr_0.forEach(Data_ => {
                          
                                      if(Data__.student_id == Data_.id)
                                      {
                                          Data__.student_id = Data_.id
                                          if(Data_.name != "")
                                          Data__.student_name = Data_.name
                                          else
                                          Data__.student_name = "No Student Name"
                                      }
                                  });
              
                                  element.related_calls[Counter_i] = Data__
                                  element.close_id = Data__.close_id
                                  element.follow_date = Data__.follow_date
                                  Counter_i++;
                          }
                      });
                  }
              
                });
              
                customer_ser_arr_1 = customer_ser_arr_1.filter(value => value.call_id == 0);
              }


              create_table_sales_custom(customer_ser_arr_1 , `<label style='color:red'>Call Follow Up</label>` , null);
    });
    $('#check_follow_type_id').change(function (index) { 
 

        if($('#check_follow_type_id').val() == "eq")
        {
            $('#follow_up_start_date').show();
            $('#follow_up_start_date').val('');
            $('#follow_up_end_date').hide();
            $('#follow_up_end_date').val('');

        }
        else if($('#check_follow_type_id').val() == "co")
        {
            $('#follow_up_start_date').val('');
            $('#follow_up_start_date').show();
            $('#follow_up_end_date').val('');
            $('#follow_up_end_date').show();
        }
        else
        {
            $('#follow_up_start_date').val('');
            $('#follow_up_end_date').val('');
            $('#follow_up_start_date').hide();
            $('#follow_up_end_date').hide();
        }
    });

    $('#follow_up_btn_date').click(async function (index) {  
        Loading_page_set();

        if( $('#check_follow_type_id').val() == "")
        {
            alert('Choose Date type');
            return;
        }

        if($('#follow_up_start_date').val() == "" && $('#check_follow_type_id').val() == "eq")
        {
            alert('Choose Start Date');
            return;
        }

        if($('#follow_up_start_date').val() == "" && $('#check_follow_type_id').val() == "co")
        {
            alert('Choose Start Date');
            return;
        }

        if($('#follow_up_end_date').val() == "" && $('#check_follow_type_id').val() == "co")
        {
            alert('Choose End Date');
            return;
        }

        var customer_ser_arr_1 = await GET_DATA_TABLES(database_fixed_link , "sales_calls" );

        if(customer_ser_arr_1 && customer_ser_arr_1 !== undefined && customer_ser_arr_1.length != 0){
    
            var saved_customer_ser_arr_1 = customer_ser_arr_1;
          
            customer_ser_arr_1.forEach(element => {
          
              if(Number(element.call_id) == 0)
              {
                  call_status_arr.forEach(Data_ => {
          
                      if(element.call_status_id == Data_.id)
                      {
                          element.call_status_id = Data_.name
                      }
                  });
                  
                  call_type_arr.forEach(Data_ => {
          
                      if(element.call_type_id == Data_.id)
                      {
                          element.call_type_id = Data_.name
                      }
                  });
          
                  cat_arr.forEach(Data_ => {
          
                      if(element.cat_id == Data_.id)
                      {
                          element.cat_id = Data_.name
                      }
                  });
          
                  close_arr.forEach(Data_ => {
          
                      if(element.close_id == Data_.id)
                      {
                                                        if(Data_.name == "Call Closed")
                              {
                                element.close_id = `<label style='color:green'>Call Closed</label>`;
                              }
                              else if (Data_.name == "Call Follow Up")
                              {
                                element.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                              }
                      }
                  });
                  
                  students_arr_0.forEach(Data_ => {
          
                      if(Number(element.student_id) == 0)
                      {
                          element.student_name = "All"
                          
                      }
                      if(element.student_id == Data_.id)
                      {
                          element.student_id = Data_.id
                          if(Data_.name != "")
                          element.student_name = Data_.name
                          else
                          element.student_name = "No Student Name"
                      }
                  });
          
          
                  parent_arr.forEach(Data_ => {
          
                      if(element.parent_id == Data_.id)
                      {
                          if(Data_.name != "")
                          element.parent_name = Data_.name
                          else
                          element.parent_name = "No Parent Name"
          
          
                          employee_arr.forEach(Data_em => {
                              if(Data_.customer_agent_id == Data_em.id)
                              {
                                  element.cs_id = Data_em.id
                                  if(Data_.name != "")
                                  element.cs_name = Data_em.name
                                  else
                                  element.cs_name = "No CS-Agent Assigned"
                              }
                          });
                          employee_arr.forEach(Data_em => {
                              if(Data_.sales_agent_id == Data_em.id)
                              {
                                  element.sales_id = Data_em.id
                                  if(Data_.name != "")
                                  element.sales_name = Data_em.name
                                  else
                                  element.sales_name = "No Sales-Agent Assigned"
                              }
                          });
                          
          
          
                      }
                  });
          
          
                  var Counter_i = 0 ;
          
                  saved_customer_ser_arr_1.forEach(Data__ => {
          
                      if(element.id == Data__.call_id) 
                      {
                          Counter_i++;
                      }
                  })
          
                  element.calls_count = Counter_i;
          
                  element.related_calls = [];
                  Counter_i = 0;
                  saved_customer_ser_arr_1.forEach(Data__ => {
              
                      if(element.id == Data__.call_id) 
                      {
          
                              call_status_arr.forEach(Data_ => {
                      
                                  if(Data__.call_status_id == Data_.id)
                                  {
                                      Data__.call_status_id = Data_.name
                                  }
                              });
                              
                              call_type_arr.forEach(Data_ => {
                      
                                  if(Data__.call_type_id == Data_.id)
                                  {
                                      Data__.call_type_id = Data_.name
                                  }
                              });
                      
                              cat_arr.forEach(Data_ => {
                      
                                  if(Data__.cat_id == Data_.id)
                                  {
                                      Data__.cat_id = Data_.name
                                  }
                              });
                      
                              close_arr.forEach(Data_ => {
                      
                                  if(Data__.close_id == Data_.id)
                                  {
                                                                  if(Data_.name == "Call Closed")
                            {
                                Data__.close_id = `<label style='color:green'>Call Closed</label>`;
                            }
                            else if (Data_.name == "Call Follow Up")
                            {
                                Data__.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                            }
                                  }
                              });
                              
                              parent_arr.forEach(Data_ => {
                      
                                  if(Data__.parent_id == Data_.id)
                                  {
                                      Data__.parent_id = Data_.id
                                      if(Data_.name != "")
                                      Data__.parent_name = Data_.name
                                      else
                                      Data__.parent_name = "No Parent Name"
                                  }
                              });
                      
                              students_arr_0.forEach(Data_ => {
                      
                                  if(Data__.student_id == Data_.id)
                                  {
                                      Data__.student_id = Data_.id
                                      if(Data_.name != "")
                                      Data__.student_name = Data_.name
                                      else
                                      Data__.student_name = "No Student Name"
                                  }
                              });
          
                              element.related_calls[Counter_i] = Data__
                              element.close_id = Data__.close_id
                              element.follow_date = Data__.follow_date
                              Counter_i++;
                      }
                  });
              }
          
            });
          
            customer_ser_arr_1 = customer_ser_arr_1.filter(value => value.call_id == 0);
          }
        
        if($('#check_follow_type_id').val() == "eq")
        {
            customer_ser_arr_1 = customer_ser_arr_1.filter(value => value.follow_date == $('#follow_up_start_date').val() );
        }
        if($('#check_follow_type_id').val() == "co")
        {
            customer_ser_arr_1 = customer_ser_arr_1.filter(value => new Date(value.follow_date) >= new Date($('#follow_up_start_date').val()) && new Date(value.follow_date) <= new Date($('#follow_up_end_date').val()) );
        }


        create_table_sales_custom(customer_ser_arr_1 , `<label style='color:red'>Call Follow Up</label>` , null);
    });

    

    $('#all_calls_btn').click(async function (index) {
        Loading_page_set();
  
        var customer_ser_arr_1 = await GET_DATA_TABLES(database_fixed_link , "sales_calls" );

        if(customer_ser_arr_1 && customer_ser_arr_1 !== undefined && customer_ser_arr_1.length != 0){
    
            var saved_customer_ser_arr_1 = customer_ser_arr_1;
          
            customer_ser_arr_1.forEach(element => {
          
              if(Number(element.call_id) == 0)
              {
                  call_status_arr.forEach(Data_ => {
          
                      if(element.call_status_id == Data_.id)
                      {
                          element.call_status_id = Data_.name
                      }
                  });
                  
                  call_type_arr.forEach(Data_ => {
          
                      if(element.call_type_id == Data_.id)
                      {
                          element.call_type_id = Data_.name
                      }
                  });
          
                  cat_arr.forEach(Data_ => {
          
                      if(element.cat_id == Data_.id)
                      {
                          element.cat_id = Data_.name
                      }
                  });
          
                  close_arr.forEach(Data_ => {
          
                      if(element.close_id == Data_.id)
                      {
                                                        if(Data_.name == "Call Closed")
                              {
                                element.close_id = `<label style='color:green'>Call Closed</label>`;
                              }
                              else if (Data_.name == "Call Follow Up")
                              {
                                element.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                              }
                      }
                  });
                  
                  students_arr_0.forEach(Data_ => {
          
                      if(Number(element.student_id) == 0)
                      {
                          element.student_name = "All"
                          
                      }
                      if(element.student_id == Data_.id)
                      {
                          element.student_id = Data_.id
                          if(Data_.name != "")
                          element.student_name = Data_.name
                          else
                          element.student_name = "No Student Name"
                      }
                  });
          
          
                  parent_arr.forEach(Data_ => {
          
                      if(element.parent_id == Data_.id)
                      {
                          if(Data_.name != "")
                          element.parent_name = Data_.name
                          else
                          element.parent_name = "No Parent Name"
          
          
                          employee_arr.forEach(Data_em => {
                              if(Data_.customer_agent_id == Data_em.id)
                              {
                                  element.cs_id = Data_em.id
                                  if(Data_.name != "")
                                  element.cs_name = Data_em.name
                                  else
                                  element.cs_name = "No CS-Agent Assigned"
                              }
                          });
                          employee_arr.forEach(Data_em => {
                              if(Data_.sales_agent_id == Data_em.id)
                              {
                                  element.sales_id = Data_em.id
                                  if(Data_.name != "")
                                  element.sales_name = Data_em.name
                                  else
                                  element.sales_name = "No Sales-Agent Assigned"
                              }
                          });
                          
          
          
                      }
                  });
          
          
                  var Counter_i = 0 ;
          
                  saved_customer_ser_arr_1.forEach(Data__ => {
          
                      if(element.id == Data__.call_id) 
                      {
                          Counter_i++;
                      }
                  })
          
                  element.calls_count = Counter_i;
          
                  element.related_calls = [];
                  Counter_i = 0;
                  saved_customer_ser_arr_1.forEach(Data__ => {
              
                      if(element.id == Data__.call_id) 
                      {
          
                              call_status_arr.forEach(Data_ => {
                      
                                  if(Data__.call_status_id == Data_.id)
                                  {
                                      Data__.call_status_id = Data_.name
                                  }
                              });
                              
                              call_type_arr.forEach(Data_ => {
                      
                                  if(Data__.call_type_id == Data_.id)
                                  {
                                      Data__.call_type_id = Data_.name
                                  }
                              });
                      
                              cat_arr.forEach(Data_ => {
                      
                                  if(Data__.cat_id == Data_.id)
                                  {
                                      Data__.cat_id = Data_.name
                                  }
                              });
                      
                              close_arr.forEach(Data_ => {
                      
                                  if(Data__.close_id == Data_.id)
                                  {
                                                                  if(Data_.name == "Call Closed")
                            {
                                Data__.close_id = `<label style='color:green'>Call Closed</label>`;
                            }
                            else if (Data_.name == "Call Follow Up")
                            {
                                Data__.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                            }
                                  }
                              });
                              
                              parent_arr.forEach(Data_ => {
                      
                                  if(Data__.parent_id == Data_.id)
                                  {
                                      Data__.parent_id = Data_.id
                                      if(Data_.name != "")
                                      Data__.parent_name = Data_.name
                                      else
                                      Data__.parent_name = "No Parent Name"
                                  }
                              });
                      
                              students_arr_0.forEach(Data_ => {
                      
                                  if(Data__.student_id == Data_.id)
                                  {
                                      Data__.student_id = Data_.id
                                      if(Data_.name != "")
                                      Data__.student_name = Data_.name
                                      else
                                      Data__.student_name = "No Student Name"
                                  }
                              });
          
                              element.related_calls[Counter_i] = Data__
                              element.close_id = Data__.close_id
                              element.follow_date = Data__.follow_date
                              Counter_i++;
                      }
                  });
              }
          
            });
          
            customer_ser_arr_1 = customer_ser_arr_1.filter(value => value.call_id == 0);
          }

          create_table_sales_custom(customer_ser_arr_1 , null , null);
    });



    $("#call_parent_input").change(async function()
    {

        var parent_id_ = $("#call_parent_input").val();
        var students_arr = await GET_DATA_TABLES(database_fixed_link , "students" );

        $('#call_student_input').empty();

        if($("#call_parent_input").val())
        {
            $('#call_student_input').append(`<option value="0">
            All </option>`); 
        }
        else{
            $('#call_student_input').append(`<option value="">
            Choose Parent </option>`);   
        }
        if(Object.values(students_arr) && Object.values(students_arr) !== undefined && Object.values(students_arr).length != 0){

            for(var index = 0 ; index < Object.values(students_arr).length ; index++)
            {
                if(Number(students_arr[index].parent_id) == Number(parent_id_))
                {

                    $('#call_student_input').append(`<option value="${students_arr[index].id}">
                    ( ID : ${students_arr[index].id} ) - ( Name : ${students_arr[index].name} )</option>`); 
                }
            }
            $('.select2').select2();
        }
    });


    $("#send_group").click(async function()
    {

        if($("#call_parent_input").val() == "")
        {
            alert("Choose Parent");
            return;
        }
        if($("#call_type_input").val() == "")
        {
            alert("Choose Type");
            return;
        }
        if($("#call_status_input").val() == "")
        {
            alert("Choose Status");
            return;
        }
        if($("#call_cat_input").val() == "")
        {
            alert("Choose Category");
            return;
        }
        if($("#call_closing_input").val() == "")
        {
            alert("Choose Closing");
            return;
        } 

        Loading_page_set();

        var data_res = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , "sales_calls"  , 
        [
            "call_type_id",
            "call_status_id",
            "cat_id",
            "close_id",
            "follow_date",
            "note",
            "call_id",
            "student_id",
            "parent_id",

        ]
        ,
        [
            $("#call_type_input").val()
            ,$("#call_status_input").val()
            ,$("#call_cat_input").val()
            ,$("#call_closing_input").val()
            ,$("#follow_up_date_id").val()
            ,$("#text_area_id").val()
            ,0
            ,$("#call_student_input").val()
            ,$("#call_parent_input").val()
        ]
        );

        alert(data_res);

        ADD_sales_call();

    });
    

    
}


function add_select_html_sales (location_, paper_ , title , data_arr)
{
  result = `<label for="`+paper_+`">`+title+`:</label>
  <select class="col-2 select2" name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>`
  if(data_arr && data_arr !== undefined && data_arr.length != 0){
    for(var index = 0 ; index < Object.values(data_arr).length ; index++)
    {
        result +=  `<option value="${data_arr[index].id} "> ( ID : ${data_arr[index].id} ) - ( Name : ${data_arr[index].name} )</option>` 
    }
}
  result+=`</select>` ;
document.getElementById(location_).innerHTML += result


}


function add_select_html_students_sales (location_, paper_ , title , data_arr)
{
  result = `<label for="`+paper_+`">`+title+`:</label>
  <select class="col-2 select2" name="`+paper_+`" id="`+paper_+`">
  <option value=""> Choose Parent</option>`
  if(data_arr && data_arr !== undefined && data_arr.length != 0){
    for(var index = 0 ; index < Object.values(data_arr).length ; index++)
    {
        result +=  `<option value="${data_arr[index].id} "> ( ID : ${data_arr[index].id} ) - ( Name : ${data_arr[index].name} )</option>` 
    }
}
  result+=`</select>` ;
document.getElementById(location_).innerHTML += result


}


function add_select_html_students_search_sales (location_, paper_ , title , data_arr)
{
  result = `<label for="`+paper_+`">`+title+`:</label>
  <select class="col-9 select2" name="`+paper_+`" id="`+paper_+`">
  <option value=""> Search for</option>`
  if(data_arr && data_arr !== undefined && data_arr.length != 0){
    for(var index = 0 ; index < Object.values(data_arr).length ; index++)
    {
        result +=  `<option value="${data_arr[index].id} "> (PT-ID : ${data_arr[index].id}) - (PT-Name : ${data_arr[index].name} ) - (ST-ID : ${data_arr[index].stid}) - (ST-Name : ${data_arr[index].stname})</option>` 
    }
}
  result+=`</select>` ;
document.getElementById(location_).innerHTML += result


}

function create_table_sales_custom(all_tables , check_val , ret_manual , index_start)
{
    Loading_page_clear();

    console.log(all_tables);
    var inputs_names_search = [
        ''
        ,'Time Stamp :'
        ,'Type :'
        ,'Status :'
        ,'Category :'
        ,'Closing :'
        ,'Date : '
        ,'Note :'
        ,'Call ID :'
        ,'Student ID :'
        ,'Parent ID :'
        ,'Student Name :'
        ,'Parent Name :'
        ,'CS ID :'
        ,'CS Name :'
        ,'Sales ID :'
        ,'Sales Name :'
        ,'Contancts :'

];

    const All_data_obj = {};
    if(index_start)
    {
        All_data_obj.Start_Index = index_start;
    }
    else
    {
        All_data_obj.Start_Index = 1;
    }
    All_data_obj.next_btn = '#btn2';
    All_data_obj.prev_btn = '#btn1';
    All_data_obj.ind_btn = '#page_index';
    All_data_obj.location_index = "Location_4";
    All_data_obj.table_div = 'search-results';
    All_data_obj.all_names = inputs_names_search;
    All_data_obj.location_next = "Location_3";
    All_data_obj.Location_2 = "Location_2";
    All_data_obj.location_1 = "Location_1";
    All_data_obj.btn_index = 'btn_index';
    All_data_obj.btn_index = 'btn_index';
    All_data_obj.edit_index = [];
    All_data_obj.delete_index = [];
    All_data_obj.view_index = [];
    All_data_obj.index_num_value = [];
    All_data_obj.obj;
    All_data_obj.obj_data = [];
    All_data_obj.saved_index ;
    All_data_obj.ret_manual = ret_manual ;
    All_data_obj.check_val = null;

    var values_ = '';
    if(check_val)
    {
        values_ = check_val;
        All_data_obj.check_val = check_val;
    }
    else{
        values_ = document.getElementById("search_all").value;
    }


   if(values_ == "")
   {

      if(all_tables && all_tables !== undefined && all_tables.length != 0)
      {
        $("#count_id").val(Object.values(assigned_agent_parent_page(all_tables)).length);

          createTable(assigned_agent_parent_page(all_tables) ,All_data_obj , 'clear' , 4 , 7 ,  "open" , create_view_sales , Object.values(all_tables[0]).length-1 , ret_manual); 
      }
      else
      {
          createTable(assigned_agent_parent_page(all_tables) ,All_data_obj , 'clear' , 4 , 7 ,  "open" , create_view_sales , 0 , ret_manual); 
      }
        return;
   }

    var result = Search_for_value(assigned_agent_parent_page(all_tables), values_)
        

    if(all_tables && all_tables !== undefined && all_tables.length != 0)
    {
        $("#count_id").val(Object.values(result).length);

        createTable(result ,All_data_obj , 'clear' , 4 , 7 ,  "open" , create_view_sales , Object.values(all_tables[0]).length-1 , ret_manual); 
    }
    else
    {
        createTable(result ,All_data_obj , 'clear' , 4 , 7 ,  "open" , create_view_sales , 0 , ret_manual); 
    }
}


async function create_view_sales(All_data_obj , End_Index , ret_manual)
{

    for(var index = All_data_obj.Start_Index-1 ; index < End_Index ; index++)
    {
        var btn = document.getElementById(All_data_obj.view_index[index]);

        All_data_obj.saved_index = index;
        
       
        btn.onclick = async function() {

            var id = this.id;
            var ret = '';

            ret = id.replace('view_more_','') ;
            

          modal.style.display = "block";

          document.getElementById("blob_Location_1").innerHTML = "";
          document.getElementById("search-results_1").innerHTML = ``;

          var all_tables = All_data_obj.obj_data[ret][All_data_obj.obj_data[ret].length-1];

          var inputs_names_search = [
            ''
            ,'Time Stamp :'
            ,'Type :'
            ,'Status :'
            ,'Category :'
            ,'Closing :'
            ,'Date:'
            ,'Note :'
            ,'Parent ID :'
            ,'Call ID :'
            ,'Student ID :'
            ,'Parent Name :'
            ,'Student Name :'
        
        ];
        
        const All_data_obj_ = {};
        All_data_obj_.Start_Index = All_data_obj.Start_Index;
        All_data_obj_.next_btn = '#btn2_';
        All_data_obj_.prev_btn = '#btn1_';
        All_data_obj_.ind_btn = '#page_index_';
        All_data_obj_.location_index = "Location_44";
        All_data_obj_.table_div = 'search-results_1';
        All_data_obj_.all_names = inputs_names_search;
        All_data_obj_.location_next = "Location_33";
        All_data_obj_.Location_2 = "Location_22";
        All_data_obj_.location_1 = "Location_11";
        All_data_obj_.btn_index = 'btn_index__';
        All_data_obj_.edit_index = [];
        All_data_obj_.delete_index = [];
        All_data_obj_.view_index = [];
        All_data_obj_.index_num_value = [];
        All_data_obj_.obj;
        All_data_obj_.obj_data = [];
        All_data_obj_.saved_index ;
        
        var call_status_arr_ = await GET_DATA_TABLES(database_fixed_link , "call_status" );
        var call_type_arr_ = await GET_DATA_TABLES(database_fixed_link , "call_type" );
        var cat_arr_ = await GET_DATA_TABLES(database_fixed_link , "cat" );
        var close_arr_ = await GET_DATA_TABLES(database_fixed_link , "close" );

          
            document.getElementById("blob_Location_1").innerHTML = "";
        
            document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

            document.getElementById("blob_Location_1").innerHTML +=`Parent ID :<input type='text' value='${All_data_obj.obj_data[ret][10]}' readonly/>`;
            document.getElementById("blob_Location_1").innerHTML +=`Parent Name :<input type='text' value='${All_data_obj.obj_data[ret][12]}' readonly/>`;

            if(Number(All_data_obj.obj_data[ret][10]) != 0)
            {
                document.getElementById("blob_Location_1").innerHTML +=`Student ID :<input type='text' value='${All_data_obj.obj_data[ret][9]}' readonly/>`;
                document.getElementById("blob_Location_1").innerHTML +=`Student Name :<input type='text' value='${All_data_obj.obj_data[ret][11]}' readonly/>`;
            }


            document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;
            document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
        
            add_select_html("blob_Location_1" , "call_type_input"+ret , "Type " , call_status_arr_);
            add_select_html("blob_Location_1" , "call_status_input"+ret , "Status " , call_type_arr_);
            add_select_html("blob_Location_1" , "call_cat_input"+ret , "Category " , cat_arr_);
            add_select_html("blob_Location_1" , "call_closing_input"+ret , "Closing " , close_arr_);
            document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;
            document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
            document.getElementById("blob_Location_1").innerHTML +=`<label> Follow Up Date : <label><input type='date' id='follow_up_date_id${ret}' />`;
        
            document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;
            document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
            document.getElementById("blob_Location_1").innerHTML +=`<div class="row"><label> Note : <label></div>`;
        
            document.getElementById("blob_Location_1").innerHTML +=`<div class="row col-6"><textarea style='float:right' rows="1" cols="1" id='text_area_id${ret}'></textarea ></div>`;
            document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;
            document.getElementById("blob_Location_1").innerHTML += `<div class='col justify-content-start'><button class='btn btn-success' style='float:right;' id='send_group${ret}'>ADD</button></div>`;

            document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
        
            document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;
            document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
            document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;

            
            document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
            document.getElementById("blob_Location_1").innerHTML +=`<hr class="hr-primary" />`;
            document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;

            $('.select2').select2();


            $("#send_group"+ret).click(async function()
                {
                    if( $("#call_type_input"+ret).val() == ""){ alert("Choose Type"); return;}
                    if( $("#call_status_input"+ret).val()== ""){ alert("Choose Status"); return;}
                    if( $("#call_cat_input"+ret).val()== ""){ alert("Choose Category"); return;}
                    if( $("#call_closing_input"+ret).val()== ""){ alert("Choose Closing"); return;}
                    if($("#follow_up_date_id"+ret).val()== ""){ alert("Choose Follow Up date"); return;}


                    await ADD_DATA_TABLES_ONE_COL(database_fixed_link , "sales_calls"  , 

                    [
                        "call_type_id",
                        "call_status_id",
                        "cat_id",
                        "close_id",
                        "follow_date",
                        "note",
                        "call_id",
                        "student_id",
                        "parent_id",
            
                    ]
                    ,
                    [
                        $("#call_type_input"+ret).val()
                        ,$("#call_status_input"+ret).val()
                        ,$("#call_cat_input"+ret).val()
                        ,$("#call_closing_input"+ret).val()
                        ,$("#follow_up_date_id"+ret).val()
                        ,$("#text_area_id"+ret).val()
                        ,All_data_obj.obj_data[ret][0]
                        ,All_data_obj.obj_data[ret][9]
                        ,All_data_obj.obj_data[ret][10]
                    ]
                    );



                    var parent_arr = await GET_DATA_TABLES(database_fixed_link , "parent" );
                    var students_arr_0 = await GET_DATA_TABLES(database_fixed_link , "students" );
                
                    var call_status_arr = await GET_DATA_TABLES(database_fixed_link , "call_status" );
                    var call_type_arr = await GET_DATA_TABLES(database_fixed_link , "call_type" );
                    var cat_arr = await GET_DATA_TABLES(database_fixed_link , "cat" );
                    var close_arr = await GET_DATA_TABLES(database_fixed_link , "close" );
                    var customer_ser_arr_0 = await GET_DATA_TABLES(database_fixed_link , "sales_calls" );
                    var employee_arr = await GET_DATA_TABLES(database_fixed_link , "employee" );



                    var customer_ser_arr_1 = await GET_DATA_TABLES(database_fixed_link , "sales_calls" );

                    if(customer_ser_arr_1 && customer_ser_arr_1 !== undefined && customer_ser_arr_1.length != 0){
                
                        var saved_customer_ser_arr_1 = customer_ser_arr_1;
                      
                        customer_ser_arr_1.forEach(element => {
                      
                          if(Number(element.call_id) == 0)
                          {
                              call_status_arr.forEach(Data_ => {
                      
                                  if(element.call_status_id == Data_.id)
                                  {
                                      element.call_status_id = Data_.name
                                  }
                              });
                              
                              call_type_arr.forEach(Data_ => {
                      
                                  if(element.call_type_id == Data_.id)
                                  {
                                      element.call_type_id = Data_.name
                                  }
                              });
                      
                              cat_arr.forEach(Data_ => {
                      
                                  if(element.cat_id == Data_.id)
                                  {
                                      element.cat_id = Data_.name
                                  }
                              });
                      
                              close_arr.forEach(Data_ => {
                      
                                  if(element.close_id == Data_.id)
                                  {
                                                                    if(Data_.name == "Call Closed")
                              {
                                element.close_id = `<label style='color:green'>Call Closed</label>`;
                              }
                              else if (Data_.name == "Call Follow Up")
                              {
                                element.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                              }
                                  }
                              });
                              
                              students_arr_0.forEach(Data_ => {
                      
                                  if(Number(element.student_id) == 0)
                                  {
                                      element.student_name = "All"
                                      
                                  }
                                  if(element.student_id == Data_.id)
                                  {
                                      element.student_id = Data_.id
                                      if(Data_.name != "")
                                      element.student_name = Data_.name
                                      else
                                      element.student_name = "No Student Name"
                                  }
                              });
                      
                      
                              parent_arr.forEach(Data_ => {
                      
                                  if(element.parent_id == Data_.id)
                                  {
                                      if(Data_.name != "")
                                      element.parent_name = Data_.name
                                      else
                                      element.parent_name = "No Parent Name"
                      
                      
                                      employee_arr.forEach(Data_em => {
                                          if(Data_.customer_agent_id == Data_em.id)
                                          {
                                              element.cs_id = Data_em.id
                                              if(Data_.name != "")
                                              element.cs_name = Data_em.name
                                              else
                                              element.cs_name = "No CS-Agent Assigned"
                                          }
                                      });
                                      employee_arr.forEach(Data_em => {
                                          if(Data_.sales_agent_id == Data_em.id)
                                          {
                                              element.sales_id = Data_em.id
                                              if(Data_.name != "")
                                              element.sales_name = Data_em.name
                                              else
                                              element.sales_name = "No Sales-Agent Assigned"
                                          }
                                      });
                                      
                      
                      
                                  }
                              });
                      
                      
                              var Counter_i = 0 ;
                      
                              saved_customer_ser_arr_1.forEach(Data__ => {
                      
                                  if(element.id == Data__.call_id) 
                                  {
                                      Counter_i++;
                                  }
                              })
                      
                              element.calls_count = Counter_i;
                      
                              element.related_calls = [];
                              Counter_i = 0;
                              saved_customer_ser_arr_1.forEach(Data__ => {
                          
                                  if(element.id == Data__.call_id) 
                                  {
                      
                                          call_status_arr.forEach(Data_ => {
                                  
                                              if(Data__.call_status_id == Data_.id)
                                              {
                                                  Data__.call_status_id = Data_.name
                                              }
                                          });
                                          
                                          call_type_arr.forEach(Data_ => {
                                  
                                              if(Data__.call_type_id == Data_.id)
                                              {
                                                  Data__.call_type_id = Data_.name
                                              }
                                          });
                                  
                                          cat_arr.forEach(Data_ => {
                                  
                                              if(Data__.cat_id == Data_.id)
                                              {
                                                  Data__.cat_id = Data_.name
                                              }
                                          });
                                  
                                          close_arr.forEach(Data_ => {
                                  
                                              if(Data__.close_id == Data_.id)
                                              {
                                                                              if(Data_.name == "Call Closed")
                            {
                                Data__.close_id = `<label style='color:green'>Call Closed</label>`;
                            }
                            else if (Data_.name == "Call Follow Up")
                            {
                                Data__.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                            }
                                              }
                                          });
                                          
                                          parent_arr.forEach(Data_ => {
                                  
                                              if(Data__.parent_id == Data_.id)
                                              {
                                                  Data__.parent_id = Data_.id
                                                  if(Data_.name != "")
                                                  Data__.parent_name = Data_.name
                                                  else
                                                  Data__.parent_name = "No Parent Name"
                                              }
                                          });
                                  
                                          students_arr_0.forEach(Data_ => {
                                  
                                              if(Data__.student_id == Data_.id)
                                              {
                                                  Data__.student_id = Data_.id
                                                  if(Data_.name != "")
                                                  Data__.student_name = Data_.name
                                                  else
                                                  Data__.student_name = "No Student Name"
                                              }
                                          });
                      
                                          element.related_calls[Counter_i] = Data__
                                          element.close_id = Data__.close_id
                                          element.follow_date = Data__.follow_date
                                          Counter_i++;
                                  }
                              });
                          }
                      
                        });
                      
                        customer_ser_arr_1 = customer_ser_arr_1.filter(value => value.call_id == 0);
                      }
            
                      var close_arr_test = await GET_DATA_TABLES(database_fixed_link , "close" );

                      var close_arr_test_val = '';


                      close_arr_test.forEach(el =>
                        {

                            if(Number(el.id) == Number($("#call_closing_input"+ret).val()))
                            {
                                close_arr_test_val = el.name;
                            }
                        })

                        console.log(All_data_obj.check_val);

                        $("#send_group"+ret).hide();
                      if(close_arr_test_val != All_data_obj.check_val  && All_data_obj.check_val != null)
                      {ret=null;}
                      

                      create_table_sales_custom(customer_ser_arr_1 , All_data_obj.check_val , ret , All_data_obj.Start_Index);

                }
            )


          if(Object.values(all_tables) && Object.values(all_tables) !== undefined && Object.values(all_tables).length != 0)
          {

            createTable_pop_up_sales(all_tables  ); 
              $('.select2').select2();
          }


        }

        if(All_data_obj.ret_manual)
        {
                ret = All_data_obj.ret_manual

    
              modal.style.display = "block";
    
              document.getElementById("blob_Location_1").innerHTML = "";
              document.getElementById("search-results_1").innerHTML = ``;
              var all_tables = All_data_obj.obj_data[ret][All_data_obj.obj_data[ret].length-1];
    
              var inputs_names_search = [
                ''
                ,'Time Stamp :'
                ,'Type :'
                ,'Status :'
                ,'Category :'
                ,'Closing :'
                ,'Date :'
                ,'Note :'
                ,'Student ID :'
                ,'Parent ID :'
                ,'Call ID :'
                ,'Parent Name :'
                ,'Student Name :'
            
            ];
            
            const All_data_obj_ = {};
            All_data_obj_.Start_Index = All_data_obj.Start_Index;
            All_data_obj_.next_btn = '#btn2_';
            All_data_obj_.prev_btn = '#btn1_';
            All_data_obj_.ind_btn = '#page_index_';
            All_data_obj_.location_index = "Location_44";
            All_data_obj_.table_div = 'search-results_1';
            All_data_obj_.all_names = inputs_names_search;
            All_data_obj_.location_next = "Location_33";
            All_data_obj_.Location_2 = "Location_22";
            All_data_obj_.location_1 = "Location_11";
            All_data_obj_.btn_index = 'btn_index__';
            All_data_obj_.edit_index = [];
            All_data_obj_.delete_index = [];
            All_data_obj_.view_index = [];
            All_data_obj_.index_num_value = [];
            All_data_obj_.obj;
            All_data_obj_.obj_data = [];
            All_data_obj_.saved_index ;
            
            var call_status_arr_ = await GET_DATA_TABLES(database_fixed_link , "call_status" );
            var call_type_arr_ = await GET_DATA_TABLES(database_fixed_link , "call_type" );
            var cat_arr_ = await GET_DATA_TABLES(database_fixed_link , "cat" );
            var close_arr_ = await GET_DATA_TABLES(database_fixed_link , "close" );
    
              
                document.getElementById("blob_Location_1").innerHTML = "";
            
                document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    
                document.getElementById("blob_Location_1").innerHTML +=`Parent ID :<input type='text' value='${All_data_obj.obj_data[ret][10]}' />`;
                document.getElementById("blob_Location_1").innerHTML +=`Parent Name :<input type='text' value='${All_data_obj.obj_data[ret][12]}' />`;
    
                if(Number(All_data_obj.obj_data[ret][10]) != 0)
                {
                    document.getElementById("blob_Location_1").innerHTML +=`Student ID :<input type='text' value='${All_data_obj.obj_data[ret][9]}' />`;
                    document.getElementById("blob_Location_1").innerHTML +=`Student Name :<input type='text' value='${All_data_obj.obj_data[ret][11]}' />`;
                }
    
    
                document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;
                document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
            
                add_select_html("blob_Location_1" , "call_type_input"+ret , "Type " , call_status_arr_);
                add_select_html("blob_Location_1" , "call_status_input"+ret , "Status " , call_type_arr_);
                add_select_html("blob_Location_1" , "call_cat_input"+ret , "Category " , cat_arr_);
                add_select_html("blob_Location_1" , "call_closing_input"+ret , "Closing " , close_arr_);
                document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;
                document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
                document.getElementById("blob_Location_1").innerHTML +=`<label> Follow Up Date : <label><input type='date' id='follow_up_date_id${ret}' />`;
            
                document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;
                document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
                document.getElementById("blob_Location_1").innerHTML +=`<div class="row"><label> Note : <label></div>`;
            
                document.getElementById("blob_Location_1").innerHTML +=`<div class="row col-6"><textarea style='float:right' rows="1" cols="1" id='text_area_id${ret}'></textarea ></div>`;
                document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;
                document.getElementById("blob_Location_1").innerHTML += `<div class='col justify-content-start'><button class='btn btn-success' style='float:right;' id='send_group${ret}'>ADD</button></div>`;
    
                document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
            
                document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;
                document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
                document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;
    
                
                document.getElementById("blob_Location_1").innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
                document.getElementById("blob_Location_1").innerHTML +=`<hr class="hr-primary" />`;
                document.getElementById("blob_Location_1").innerHTML +=`</div></div>`;
    
                $('.select2').select2();
    
                All_data_obj.ret_manual = null;

                $("#send_group"+ret).click(async function()
                    {
                        if( $("#call_type_input"+ret).val() == ""){ alert("Choose Type"); return;}
                        if( $("#call_status_input"+ret).val()== ""){ alert("Choose Status"); return;}
                        if( $("#call_cat_input"+ret).val()== ""){ alert("Choose Category"); return;}
                        if( $("#call_closing_input"+ret).val()== ""){ alert("Choose Closing"); return;}
                        if($("#follow_up_date_id"+ret).val()== ""){ alert("Choose Follow Up date"); return;}
    
    
                        await ADD_DATA_TABLES_ONE_COL(database_fixed_link , "sales_calls"  , 
                        [
                            "call_type_id",
                            "call_status_id",
                            "cat_id",
                            "close_id",
                            "follow_date",
                            "note",
                            "call_id",
                            "student_id",
                            "parent_id",
                
                        ]
                        ,
                        [
                            $("#call_type_input"+ret).val()
                            ,$("#call_status_input"+ret).val()
                            ,$("#call_cat_input"+ret).val()
                            ,$("#call_closing_input"+ret).val()
                            ,$("#follow_up_date_id"+ret).val()
                            ,$("#text_area_id"+ret).val()
                            ,All_data_obj.obj_data[ret][0]
                            ,All_data_obj.obj_data[ret][9]
                            ,All_data_obj.obj_data[ret][10]
                        ]
                        );

    
                        var parent_arr_2 = await GET_DATA_TABLES(database_fixed_link , "parent" );
                        var students_arr_0_2 = await GET_DATA_TABLES(database_fixed_link , "students" );
                        var customer_ser_arr_3 = await GET_DATA_TABLES(database_fixed_link , "sales_calls" );
                        var call_status_arr_2 = await GET_DATA_TABLES(database_fixed_link , "call_status" );
                        var call_type_arr_2 = await GET_DATA_TABLES(database_fixed_link , "call_type" );
                        var cat_arr_2 = await GET_DATA_TABLES(database_fixed_link , "cat" );
                        var close_arr_2 = await GET_DATA_TABLES(database_fixed_link , "close" );
                        
                        var saved_customer_ser_arr_3 = customer_ser_arr_3;

                
                        customer_ser_arr_3.forEach(element => {
                      
                          if(Number(element.call_id) == 0)
                          {
                            call_status_arr_2.forEach(Data_ => {
                      
                                  if(element.call_status_id == Data_.id)
                                  {
                                      element.call_status_id = Data_.name
                                  }
                              });
                              
                              call_type_arr_2.forEach(Data_ => {
                      
                                  if(element.call_type_id == Data_.id)
                                  {
                                      element.call_type_id = Data_.name
                                  }
                              });
                      
                              cat_arr_2.forEach(Data_ => {
                      
                                  if(element.cat_id == Data_.id)
                                  {
                                      element.cat_id = Data_.name
                                  }
                              });
                      
                              close_arr_2.forEach(Data_ => {
                      
                                  if(element.close_id == Data_.id)
                                  {
                                                                    if(Data_.name == "Call Closed")
                              {
                                element.close_id = `<label style='color:green'>Call Closed</label>`;
                              }
                              else if (Data_.name == "Call Follow Up")
                              {
                                element.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                              }
                                  }
                              });
                              
                              parent_arr_2.forEach(Data_ => {
                      
                                  if(element.	parent_id == Data_.id)
                                  {
                                      element.parent_id = Data_.id
                                      if(Data_.name != "")
                                      element.parent_name = Data_.name
                                      else
                                      element.parent_name = "No Parent Name"
                      
                                  }
                              });
                      
                              students_arr_0_2.forEach(Data_ => {
                      
                                  if(element.student_id == Data_.id)
                                  {
                                      element.student_id = Data_.id
                                      if(Data_.name != "")
                                      element.student_name = Data_.name
                                      else
                                      element.student_name = "No Student Name"
                                  }
                              });
                      
                              element.related_calls = [];
                              var Counter_i = 0 ;
                              saved_customer_ser_arr_3.forEach(Data__ => {
                          
                                  if(element.id == Data__.call_id) 
                                  {
                      
                                        call_status_arr_2.forEach(Data_ => {
                                  
                                              if(Data__.call_status_id == Data_.id)
                                              {
                                                  Data__.call_status_id = Data_.name
                                              }
                                          });
                                          
                                          call_type_arr_2.forEach(Data_ => {
                                  
                                              if(Data__.call_type_id == Data_.id)
                                              {
                                                  Data__.call_type_id = Data_.name
                                              }
                                          });
                                  
                                          cat_arr_2.forEach(Data_ => {
                                  
                                              if(Data__.cat_id == Data_.id)
                                              {
                                                  Data__.cat_id = Data_.name
                                              }
                                          });
                                  
                                          close_arr_2.forEach(Data_ => {
                                  
                                              if(Data__.close_id == Data_.id)
                                              {
                                                                              if(Data_.name == "Call Closed")
                            {
                                Data__.close_id = `<label style='color:green'>Call Closed</label>`;
                            }
                            else if (Data_.name == "Call Follow Up")
                            {
                                Data__.close_id = `<label style='color:red'>Call Follow Up</label>`;  
                            }
                                              }
                                          });
                                          
                                          parent_arr_2.forEach(Data_ => {
                                  
                                              if(Data__.	parent_id == Data_.id)
                                              {
                                                  Data__.parent_id = Data_.id
                                                  if(Data_.name != "")
                                                  Data__.parent_name = Data_.name
                                                  else
                                                  Data__.parent_name = "No Parent Name"
                                  
                                              }
                                          });
                                  
                                          students_arr_0_2.forEach(Data_ => {
                                  
                                              if(Data__.student_id == Data_.id)
                                              {
                                                  Data__.student_id = Data_.id
                                                  if(Data_.name != "")
                                                  Data__.student_name = Data_.name
                                                  else
                                                  Data__.student_name = "No Student Name"
                                              }
                                          });
                      
                                          element.related_calls[Counter_i] = Data__
                                          element.close_id = Data__.close_id
                                          element.follow_date = Data__.follow_date
                                          Counter_i++;
                                  }
                              });
                          }
                          else
                          {
                      
                              element = {};
                      
                          }
                        });
                
                        
                      var close_arr_test = await GET_DATA_TABLES(database_fixed_link , "close" );

                      var close_arr_test_val = '';

                      close_arr_test.forEach(el =>
                        {
                            if(Number(el.id) == Number($("#call_closing_input"+ret).val()))
                            {
                                close_arr_test_val = el.name;
                            }
                        })

                        console.log(All_data_obj.check_val);


                      if(close_arr_test_val != All_data_obj.check_val && All_data_obj.check_val != null)
                      {ret=null;
                        }
                    $("#send_group"+ret).hide();
                      
                    create_table_sales_custom(customer_ser_arr_3 , All_data_obj.check_val , ret , All_data_obj.Start_Index);
    
                       
                    }
                )
    
    
              if(Object.values(all_tables) && Object.values(all_tables) !== undefined && Object.values(all_tables).length != 0)
              {
                createTable_pop_up_sales(all_tables); 
                  $('.select2').select2();
              }

        }

    }
}



function createTable_pop_up_sales(All_data_obj ) {

    var dataArray = All_data_obj;
    // var index_st = All_data_obj.saved_index;

    // console.log(dataArray)
  if(dataArray && dataArray !== undefined && dataArray.length != 0){

    var result = "<table class='table' id='dtable'>"+
                 "<thead   style='white-space:wrap' >"+
                   "<tr>";                               //Change table headings to match witht he Google Sheet     
                   result +="<th scope='col'>Calls ID</th>";
                   result +="<th scope='col'>Call Info </th>";
                   result +="<th scope='col'>Closing Info </th>";
                   result +="<th scope='col'>Note </th>";

              result += "</tr>"+
                        "</thead>";

                        for(var index = 0 ; index < Object.values(dataArray).length ; index++)
                        {
                            result += "<tr>";
                            result += "<td>";
                            result +=  `Call ID : ${dataArray[index].id}`
                            result += "</td>";
                            result += "<td>";
                            result +=  `Call Type : ${dataArray[index].call_type_id}`
                            result +=  `<br>Call Status : ${dataArray[index].call_status_id}`
                            result +=  `<br>Call Category : ${dataArray[index].cat_id}`
                            result += "</td>";

                            result += "<td>";
                            if(dataArray[index].close_id == "Call Closed")
                            {
                                result +=  `Call Closing : <label style='color:green'>${dataArray[index].close_id}</label>`
                            }
                            else if (dataArray[index].close_id == "Call Follow Up")
                            {
                                result +=  `Call Closing : <label style='color:red'>${dataArray[index].close_id}</label>`
                            }
                            result +=  `<br>Date : ${dataArray[index].follow_date}`
 
                            result += "</td>";
                            result += "<td>";
                            result +=  `Note : ${dataArray[index].note}` 
                            result += "</td>";
                            result += "</tr>";
                        }



            //   }
                 
    result += "</table>";
    var div = document.getElementById("search-results_1");
    div.innerHTML = result;

  }else{
    var div = document.getElementById("search-results_1");
    div.innerHTML = "Data not found!";
  }

}