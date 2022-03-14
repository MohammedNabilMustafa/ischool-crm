
function groups()
{
  Loading_page_set();
    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    ["name" 
    ,"slot" 
    ,"live_slot" 
  ];

    var inputs_names_inputs = 
    ["Name" 
    ,"Slot" 
    ,"Live Slot" 
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Name" 
    ,"Slot"
    ,"Live Slot" 
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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
    ,"Username"
    ,"Password"
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
    ,"Username"
    ,"Password"
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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    [
      "name"
    ,"phone"
    ,"email"
    ,"zoomlink"
    ,"username"
    ,"password_value"
    ,"permission_id"
    ,"department_id"
    ,"role_id"
  ];

    var inputs_names_inputs = 
    ["Name"
    ,"Phone"
    ,"Email"
    ,"ZoomLink"
    ,"Username"
    ,"Password"
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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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

function cs_calls()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    [
      "call_type_id",
      "call_status_id",
      "cat_id",
      "close_id",
      "follow_date",
      "note",
      "call_id",
      "student_id",
      "parent_id"

  ];

    var inputs_names_inputs = 
    [
      "Call Type ID",
      "Call Status ID",
      "Category ID",
      "Closing ID",
      "Follow Up Date",
      "Note",
      "Call ID",
      "Student ID",
      "parent ID",
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Call Type ID",
    "Call Status ID",
    "Category ID",
    "Closing ID",
    "Follow Up Date",
    "Note",
    "Call ID",
    "Student ID",
    "parent ID"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Student ID missing" 
  ];

    var search_ids = 
    ["Search1" ,"Search2" 

  ];

    var called_table = 'cs_calls';

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

function sales_calls()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    [
      "call_type_id",
      "call_status_id",
      "cat_id",
      "close_id",
      "follow_date",
      "note",
      "call_id",
      "student_id",
      "parent_id"

  ];

    var inputs_names_inputs = 
    [
      "Call Type ID",
      "Call Status ID",
      "Category ID",
      "Closing ID",
      "Follow Up Date",
      "Note",
      "Call ID",
      "Student ID",
      "parent ID",
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp"
    ,"Call Type ID",
    "Call Status ID",
    "Category ID",
    "Closing ID",
    "Follow Up Date",
    "Note",
    "Call ID",
    "Student ID",
    "parent ID"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Student ID missing" 
  ];

    var search_ids = 
    ["Search1" ,"Search2" 

  ];

    var called_table = 'sales_calls';

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

function close()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'close';

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

function cat()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'cat';

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

function call_type()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'call_type';

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

function call_status()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'call_status';

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

function call_status_sales()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'call_status_sales';

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

function call_type_sales()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'call_type_sales';

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

function cat_sales()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'cat_sales';

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

function close_sales()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'close_sales';

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

function marketing()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    [
      "name",
      "disc",
      "mrkt_type_id",
      "mrkt_conv_type_id",
      "mrkt_source_id",
      "mrkt_others_id",
      "url_camp"
      
  ];

    var inputs_names_inputs = 
    [
      "Name",
      "Discription",
      "Marketing Type",
      "Marketing Convertion Type",
      "Marketing Source",
      "Marketing Others",
      "Url"
  ];

    var inputs_names_search = 
    ["ID",
    "Timestamp",
    "Name",
    "Discription",
    "Marketing Type",
    "Marketing Convertion Type",
    "Marketing Source",
    "Marketing Others",
    "Url"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'marketing';

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

function mrkt_others()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'mrkt_others';

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

function mrkt_source()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'mrkt_source';

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

function mrkt_conv_type()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'mrkt_conv_type';

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

function mrkt_type()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

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
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'mrkt_type';

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

function material()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    [
      "level_id",
      "lan_id",
      "session_type_id",
      "track_id",
      "video_link",
      "slide"
      
  ];

    var inputs_names_inputs = 
    [
      "Level ID",
      "Lan ID",
      "Session Type ID",
      "Track ID",
      "Video Link",
      "Slide"
  ];

    var inputs_names_search = 
    ["ID",
    "Timestamp",
    "Level ID",
    "Lan ID",
    "Session Type ID",
    "Track ID",
    "Video Link",
    "Slide"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'material';

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

function tasks()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    [
      "level_id",
      "lan_id",
      "session_type_id",
      "track_id",
      "session_num",
      "type",
      "option1",
      "option2",
      "option3",
      "correct",
      "points"
      
  ];

    var inputs_names_inputs = 
    [
      "Level ID",
      "Lan ID",
      "Session Type ID",
      "Track ID",
      "Session Number",
      "Type",
      "Option 1",
      "Option 2",
      "Option 3",
      "Correct Answer",
      "Points"
  ];

    var inputs_names_search = 
    ["ID",
    "Timestamp",
    "Level ID",
    "Lan ID",
    "Session Type ID",
    "Track ID",
    "Session Number",
    "Type",
    "Option 1",
    "Option 2",
    "Option 3",
    "Correct Answer",
    "Points"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'tasks';

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

function certifications()
{
  Loading_page_set();

    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    [
      "level_id",
      "lan_id",
      "session_type_id",
      "track_id",
      "cert_link",
      "type"

      
  ];

    var inputs_names_inputs = 
    [
      "Level ID",
      "Lan ID",
      "Session Type ID",
      "Track ID",
      "Certification Link",
      "Type",

  ];

    var inputs_names_search = 
    ["ID",
    "Timestamp",
    "Level ID",
    "Lan ID",
    "Session Type ID",
    "Track ID",
    "Certification Link",
    "Type"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["Name missing" 
  ];

    var search_ids = 
    ["Search1" 

  ];

    var called_table = 'certifications';

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
