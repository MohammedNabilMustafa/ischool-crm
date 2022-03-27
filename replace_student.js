
async function REPLACE_STUDENT()
{

    clear_all_locations();



    var student_table_arr = await GET_DATA_TABLES(database_fixed_link , 'students');
    var att_feed_table_arr = await GET_DATA_TABLES(database_fixed_link , 'att_feed');
    var sessions_table_arr = await GET_DATA_TABLES(database_fixed_link , 'sessions');
    var groups_table_arr = await GET_DATA_TABLES(database_fixed_link , 'groups');

    var age_table_arr = await GET_DATA_TABLES(database_fixed_link , 'age');
    var level_table_arr = await GET_DATA_TABLES(database_fixed_link , 'level');
    var lan_table_arr = await GET_DATA_TABLES(database_fixed_link , 'lan');
    var slots_arr = await GET_DATA_TABLES(database_fixed_link , 'slots');
    var type_arr = await GET_DATA_TABLES(database_fixed_link , 'session_type');
    var days_arr = await GET_DATA_TABLES(database_fixed_link , 'days');


    

    student_table_arr.forEach(element_st => {
        
        element_st.filtered_sessions = [];
        element_st.filtered_sessions_count = 0;

        att_feed_table_arr.forEach(element_att => {

            if(Number(element_st.id) == Number(element_att.student_id))
            {

                sessions_table_arr.forEach(element_se => {

                    if(element_att.session_id == element_se.id)
                    {
                        groups_table_arr.forEach(element_grp => {

                            if(element_se.groups_id == element_grp.id)
                            {
                                element_grp.slot_name = '';
                                slots_arr.forEach(element_slot => {
                                    
                                    if(Number(element_grp.slot_id) == Number(element_slot.id))
                                    {
                                        element_grp.slot_name = element_slot.slot;
                                    }
                                });

                                element_grp.age_name = '';
                                age_table_arr.forEach(element_age => {
                                    if(element_grp.age_id == element_age.id)
                                    {
                                        element_grp.age_name = element_age.name;
                                    }
                                });

                                element_grp.level_name = '';
                                level_table_arr.forEach(element_lvl => {
                                    if(element_grp.level_id == element_lvl.id)
                                    {
                                        element_grp.level_name = element_lvl.name;
                                    }
                                });

                                element_grp.day_name = '';
                                days_arr.forEach(element_days => {
                                    if(element_grp.days_id == element_days.id)
                                    {
                                        element_grp.day_name = element_days.name;
                                    }
                                });
                  
                                element_grp.type_name = '';
                                type_arr.forEach(element_type => {
                                    if(element_grp.type_id == element_type.id)
                                    {
                                        element_grp.type_name = element_type.name;
                                    }
                                });
                                
                                element_grp.lan_name = '';
                                lan_table_arr.forEach(element_lan => {
                                    if(element_grp.lan_id == element_lan.id)
                                    {
                                        element_grp.lan_name = element_lan.name;
                                    }
                                });

                                element_se.groups_arr = element_grp;
                            }
                        });


                        element_att.session_arr = element_se;
                    }
                });

                element_st.filtered_sessions[element_st.filtered_sessions_count] = element_att;
                element_st.filtered_sessions_count++;

            }
        
        
        });

    });

    student_table_arr.forEach(element_st => {
        
        element_st.filtered_sessions_days = [];
        element_st.filtered_sessions_days_count = 0;

        var student_check = false ; 
        att_feed_table_arr.forEach(element_att => {

            if(Number(element_st.id) == Number(element_att.student_id))
            {

                sessions_table_arr.forEach(element_se => {

                    
                    if((Number(element_att.session_id) == Number(element_se.id) )&&( new Date(element_se.session_date) > new Date() ))
                    {
                        student_check = true;
                        groups_table_arr.forEach(element_grp => {

                            if(element_se.groups_id == element_grp.id)
                            {
                                element_grp.slot_name = '';
                                slots_arr.forEach(element_slot => {
                                    
                                    if(Number(element_grp.slot_id) == Number(element_slot.id))
                                    {
                                        element_grp.slot_name = element_slot.slot;
                                    }
                                });

                                element_grp.age_name = '';
                                age_table_arr.forEach(element_age => {
                                    if(element_grp.age_id == element_age.id)
                                    {
                                        element_grp.age_name = element_age.name;
                                    }
                                });

                                element_grp.level_name = '';
                                level_table_arr.forEach(element_lvl => {
                                    if(element_grp.level_id == element_lvl.id)
                                    {
                                        element_grp.level_name = element_lvl.name;
                                    }
                                });

                                element_grp.day_name = '';
                                days_arr.forEach(element_days => {
                                    if(element_grp.days_id == element_days.id)
                                    {
                                        element_grp.day_name = element_days.name;
                                    }
                                });
                  
                                element_grp.type_name = '';
                                type_arr.forEach(element_type => {
                                    if(element_grp.type_id == element_type.id)
                                    {
                                        element_grp.type_name = element_type.name;
                                    }
                                });
                                
                                element_grp.lan_name = '';
                                lan_table_arr.forEach(element_lan => {
                                    if(element_grp.lan_id == element_lan.id)
                                    {
                                        element_grp.lan_name = element_lan.name;
                                    }
                                });

                                element_se.groups_id = element_grp;
                            }
                        });

                        element_att.session_id = element_se;
                    }

                });

                if(student_check == true)
                {
                    element_st.filtered_sessions_days[element_st.filtered_sessions_days_count] = element_att;
                    element_st.filtered_sessions_days_count++;
                }

                    

                


            }
        
        
        });

    });

    console.log(student_table_arr);
}