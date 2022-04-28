

async function go_to_step03_func_home()
{
    Loading_page_set();
    
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

    $("#all_struct").show();
    Loading_page_clear();


    return true;

}