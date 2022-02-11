
function groups()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    [
      "slot_id" 
      , "lan_id" 
      , "att_id" 
      , "level_id" 
      , "track_id" 
      , "type_id" 
      , "days_id" 
      , "age_id" 
      , "opend_by" 
      , "start_date" 
      , "end_date" 

  ];

    var inputs_names_inputs = 
    [
      "Slot" 
    ,"Lang" 
    ,"Attend" 
    ,"Level" 
    ,"Track" 
    ,"Type"
    ,"Days"
    ,"Age"
    ,"Opened by"
    ,"Start Date"
    ,"End Date"

  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Slot" 
    ,"Lang" 
    ,"Attend" 
    ,"Level" 
    ,"Track" 
    ,"Type"
    ,"Days"
    ,"Age"
    ,"Opened by"
    ,"Start Date"
    ,"End Date"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Slot missing" 
  ];

    var search_ids = 
    ["Search1" 
    , "Search2" 
    , "Search3" 
    , "Search4" 
  ];

    var called_table = 'groups';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function sessions()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    ["groups_id" 
    ,"employee_id" 
    ,"zoomlink" 
    ,"session_date" 
    ,"session_num" 
    ,"open_by"
  ];

    var inputs_names_inputs = 
    ["Group ID" 
    ,"Employee ID" 
    ,"Zoomlink" 
    ,"Session Date" 
    ,"Session Num" 
    ,"Opened by"

  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Group ID" 
    ,"Employee ID" 
    ,"Zoomlink" 
    ,"Session Date" 
    ,"Session Num" 
    ,"Opened by"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Slot missing" 
  ];

    var search_ids = 
    ["Search1" 
    , "Search2" 
    , "Search3" 
    , "Search4" 
  ];

    var called_table = 'sessions';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function att_feed()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    ["student_id" 
    ,"session_id" 
    ,"attendance" 
    ,"feedback" 
  ];

    var inputs_names_inputs = 
    ["Student ID" 
    ,"Session ID" 
    ,"Attendance" 
    ,"Feedback" 
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Student ID" 
    ,"Session ID" 
    ,"Attendance" 
    ,"Feedback" 
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Slot missing" 
  ];

    var search_ids = 
    ["Search1" 
    , "Search2" 
    , "Search3" 
  ];

    var called_table = 'att_feed';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function slots()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    ["name" 
    ,"slot" 
  ];

    var inputs_names_inputs = 
    ["Name" 
    ,"Slot" 
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name" 
    ,"Slot"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Slot missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'slots';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function lan()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    ["name" 
  ];

    var inputs_names_inputs = 
    ["Name" 
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name" 
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Slot missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'lan';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function attend()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    ["name" 
  ];

    var inputs_names_inputs = 
    ["Name" 
    ,"Attendance" 
    ,"Feedback" 
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name" 
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Slot missing" 
  ];

    var search_ids = 
    ["Search1" 
  ];

    var called_table = 'attend';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function track()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    ["name" 
  ];

    var inputs_names_inputs = 
    ["Name" 
    ,"Attendance" 
    ,"Feedback" 
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name" 
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Slot missing" 
  ];

    var search_ids = 
    ["Search1" 
  ];

    var called_table = 'track';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function age()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    ["name"
    , "from_age"
    , "to_age"
  ];

    var inputs_names_inputs = 
    ["Name"
    ,"From" 
    ,"To" 
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name" 
    ,"From" 
    ,"To" 
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 
    , "Search2" 

  ];

    var called_table = 'age';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function level()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    ["name" 
  ];

    var inputs_names_inputs = 
    ["Name" 
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name" 
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Slot missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'level';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function session_type()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    ["name" 
  ];

    var inputs_names_inputs = 
    ["Name" 
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name" 
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Slot missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'session_type';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function days()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    ["name" 
  ];

    var inputs_names_inputs = 
    ["Name" 
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name" 
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Slot missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'days';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function students()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    ["std_id"
    ,"parent_id"
    ,"free_session_status"
    ,"std_status"
    ,"name"
    ,"age"
    ,"birthdate"
  ];

    var inputs_names_inputs = 
    ["Student ID"
    ,"Parent ID" 
    ,"Free Session Status" 
    ,"Status"
    ,"Name"
    ,"Age"
    ,"Birthdate" 
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Student ID"
    ,"Parent ID" 
    ,"Free Session Status" 
    ,"Status"
    ,"Name"
    ,"Age"
    ,"Birthdate"  
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["ID missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'students';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function student_groups()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    ["groups_id"
    ,"student_id"
    ,"status"
  ];

    var inputs_names_inputs = 
    [
    "Group ID" 
    ,"Student ID"
    ,"Status"
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Group ID" 
    ,"Student ID"
    ,"Status"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["ID missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'student_groups';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function parent()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

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
    ,"reg_status"
    ,"customer_agent_id"
    ,"sales_agent_id"
  ];

    var inputs_names_inputs = 
    ["Name"
    ,"Phone"
    ,"Email"
    ,"Name 2"
    ,"Phone 2"
    ,"Email 2"
    ,"Address"
    ,"Location"
    ,"Job"
    ,"Registration Status"
    ,"Customer Support Agent"
    ,"Sales Agent"
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name"
    ,"Phone"
    ,"Email"
    ,"Name 2"
    ,"Phone 2"
    ,"Email 2"
    ,"Address"
    ,"Location"
    ,"Job"
    ,"Registration Status"
    ,"Customer Support Agent"
    ,"Sales Agent"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Name missing" 
    ,"Phone missing" 
    ,"Email missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'parent';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function employee()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    [
      "name"
    ,"phone"
    ,"email"
    ,"zoomlink"
    ,"username"
    ,"password"
    ,"permission_id"
    ,"department_id"
    ,"role_id"
  ];

    var inputs_names_inputs = 
    ["Name"
    ,"Phone"
    ,"Email"
    ,"Zoom Link"
    ,"Username"
    ,"password"
    ,"Permission"
    ,"Department"
    ,"Role"

  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name"
    ,"Phone"
    ,"Email"
    ,"Zoom Link"
    ,"Username"
    ,"password"
    ,"Permission"
    ,"Department"
    ,"Role"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Name missing" 
    ,"Phone missing" 
    ,"Email missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'employee';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function permission()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    [
      "name"
  ];

    var inputs_names_inputs = 
    ["Name"

  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'permission';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function role()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    [
      "name"
  ];

    var inputs_names_inputs = 
    ["Name"

  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'role';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function department()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    [
      "name"
  ];

    var inputs_names_inputs = 
    ["Name"

  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'department';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function student_status()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    [
      "name"
  ];

    var inputs_names_inputs = 
    ["Name"

  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'operation_status';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function packages()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    [
      "name"
      ,"fees"
      ,"quota"
      ,"discount"
      ,"installments"
      ,"paid_as"

  ];

    var inputs_names_inputs = 
    [
      "Name"
      ,"Fees"
      ,"Quota"
      ,"Discount"
      ,"Installments"
      ,"Paid As"

  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name"
    ,"Fees"
    ,"Quota"
    ,"Discount"
    ,"Installments"
    ,"Paid As"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'package';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function invoice()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

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
  ];

    var inputs_names_inputs = 
    [
      "Student ID"
      ,"Fees"
      ,"Amount"
      ,"Status"
      ,"Due Date"
      ,"Paid Date"
      ,"Discount"
      ,"Attach"
      ,"Package ID"
      ,"Qouta"
      ,"Remain"
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Student ID"
    ,"Fees"
    ,"Amount"
    ,"Status"
    ,"Due Date"
    ,"Paid Date"
    ,"Discount"
    ,"Attach"
    ,"Package ID"
    ,"Qouta"
    ,"Remain"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Student ID missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'invoice';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function student_package()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    [
      "student_id"
      ,"package_id"
      
  ];

    var inputs_names_inputs = 
    [
      "Student ID"
      ,"Package ID"
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Student ID"
    ,"Package ID"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Student ID missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'student_package';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}


function invoice_status()
{
    var Saved_data = [];
    var Database_link = "http://localhost/iSchool/fetch.php"

    var inputs_col = 
    [
      "name"
      
  ];

    var inputs_names_inputs = 
    [
      "Name"
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Student ID missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'invoice_status';

  const All_data_obj = {};
  All_data_obj.Start_Index = 1;
  All_data_obj.next_btn = '#btn2';
  All_data_obj.prev_btn = '#btn1';
  All_data_obj.ind_btn = '#page_index';
  All_data_obj.location_index = "Location_4";
  All_data_obj.table_div = 'search-results';
  All_data_obj.all_names = inputs_names_search;
  All_data_obj.location_next = "Location_3";
  All_data_obj.Location_2 = "Location_2";
  All_data_obj.location_1 = "Location_1";
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}