

async function add_multi_records_parent(recordes)
{
  Loading_page_set();

  for(var index = 0 ; index < recordes ; index++)
  {
    var inputs_col = 
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
  ]



    await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'parent' , inputs_col , inputs_col);
  }

    Loading_page_clear();

}

async function add_multi_records_student(recordes)
{
  Loading_page_set();

  for(var index = 0 ; index < recordes ; index++)
  {


  var inputs_col = 
  ["std_id"
  ,"parent_id"
  ,"free_session_status"
  ,"std_status"
  ,"name"
  ,"age"
  ,"birthdate"
];




var inputs_col_data = 
["std_id"
,Number(index + 151)
,"free_session_status"
,"std_status"
,"name"
,"age"
,"birthdate"
];




    await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'students' , inputs_col , inputs_col_data);
  }

    Loading_page_clear();

}

async function add_multi_records_att_feed(recordes)
{
  Loading_page_set();

  for(var index = 0 ; index < recordes ; index++)
  {
  //   var inputs_col = 
  //   ["name"
  //   ,"phone"
  //   ,"email"
  //   ,"name_2"
  //   ,"phone_2"
  //   ,"email_2"
  //   ,"address"
  //   ,"location"
  //   ,"job"
  //   ,"marketing_id"
  //   ,"customer_agent_id"
  //   ,"sales_agent_id"
  //   ,"username"
  //   ,"password"
  // ]

//   var inputs_col = 
//   ["std_id"
//   ,"parent_id"
//   ,"free_session_status"
//   ,"std_status"
//   ,"name"
//   ,"age"
//   ,"birthdate"
// ];

  var inputs_col = 
["student_id" 
,"session_id" 
,"attendance" 
,"feedback" 
]


var inputs_col_data = 
[Number(index + 151) 
,"session_id" 
,"attendance" 
,"feedback" 
]


// var inputs_col_data = 
// ["std_id"
// ,Number(index + 151)
// ,"free_session_status"
// ,"std_status"
// ,"name"
// ,"age"
// ,"birthdate"
// ];




    await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'att_feed' , inputs_col , inputs_col_data);
  }

    Loading_page_clear();

}

async function add_multi_records_sessions(recordes)
{
  Loading_page_set();

  for(var index = 0 ; index < recordes ; index++)
  {

  var inputs_col = 
  ["groups_id" 
  ,"employee_id" 
  ,"zoomlink" 
  ,"session_date" 
  ,"session_num" 
  ,"open_by"
  ,"material_id"
]


var inputs_col_data = 
[53 
,12 
,"zoomlink" 
,"session_date" 
,1 
,"open_by"
,0
]




    await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'sessions' , inputs_col , inputs_col_data);
  }

    Loading_page_clear();

}


async function add_multi_records_sessions(recordes)
{
  Loading_page_set();

  for(var index = 0 ; index < recordes ; index++)
  {

  var inputs_col = 
  ["groups_id" 
  ,"employee_id" 
  ,"zoomlink" 
  ,"session_date" 
  ,"session_num" 
  ,"open_by"
  ,"material_id"
]


var inputs_col_data = 
[53 
,12 
,"zoomlink" 
,"session_date" 
,1 
,"open_by"
,0
]




    await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'sessions' , inputs_col , inputs_col_data);
  }

    Loading_page_clear();

}



async function add_multi_records_invoice(recordes)
{
  Loading_page_set();

  for(var index = 0 ; index < recordes ; index++)
  {

  var inputs_col = 
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


var inputs_col_data = 
[
  "student_id"
  ,1000
  ,10
  ,"status"
  ,0
  ,0
  ,0
  ,"attach"
  ,10
  ,1
  ,0
]




    await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'invoice' , inputs_col , inputs_col_data);
  }

    Loading_page_clear();

}





// add_multi_records_invoice(2400);

// add_multi_records_parent(1200);
// add_multi_records_student(1200);
// add_multi_records_att_feed(1200);
// add_multi_records_att_feed(1200);
// add_multi_records_att_feed(1200);
// add_multi_records_att_feed(1200);
// add_multi_records_att_feed(1200);
// add_multi_records_att_feed(1200);

// add_multi_records_sessions(1200);
// add_multi_records_sessions(1200);
// add_multi_records_sessions(1200);
