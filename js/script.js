// <!-- show password script -->

        checked = false
        $(".show_password").click(function(){
            if(checked === false){
                $(".show_password").html(`<svg xmlns="http://www.w3.org/2000/svg" width="27.993" height="18.144" viewBox="0 0 27.993 18.144">
                  <g id="showpassword-02" transform="translate(0 -0.084)">
                    <path id="Path_131" data-name="Path 131" d="M93.834,34.707c-3.71,3.646-7.753,6.5-13.075,7.011a12.623,12.623,0,0,1-5.258-.729c.627-.614,1.2-1.215,1.83-1.778.1-.09.4-.051.563.013A4.956,4.956,0,0,0,84.353,32.7a.715.715,0,0,1,.064-.589c.832-.883,1.689-1.74,2.559-2.61A25.6,25.6,0,0,1,93.834,34.707Z" transform="translate(-65.841 -25.653)" fill="#fd7d00"/>
                    <path id="Path_132" data-name="Path 132" d="M0,21.746c3.442-3.429,7.229-6.1,12.077-6.909a12.894,12.894,0,0,1,5.911.473c-.691.64-1.254,1.215-1.868,1.74a.7.7,0,0,1-.563.038A4.907,4.907,0,0,0,9.1,21.464a12.914,12.914,0,0,0,.2,1.83,1.136,1.136,0,0,1-.192.755c-.755.819-1.548,1.6-2.354,2.354a.7.7,0,0,1-.614.141A25.316,25.316,0,0,1,0,21.746Z" transform="translate(0 -12.73)" fill="#fd7d00"/>
                    <path id="Path_133" data-name="Path 133" d="M38.152,18.228c-.345-.294-.768-.473-.857-.768a1.308,1.308,0,0,1,.192-1.087,24.006,24.006,0,0,1,1.778-1.83Q46.231,7.577,53.21.611a2.364,2.364,0,0,1,.179-.179A1.019,1.019,0,0,1,54.873.38.968.968,0,0,1,54.8,1.852C53.159,3.5,51.509,5.14,49.871,6.79Q44.5,12.144,39.137,17.5C38.868,17.754,38.536,17.933,38.152,18.228Z" transform="translate(-32.484 0)" fill="#fd7d00"/>
                    <path id="Path_134" data-name="Path 134" d="M99.8,65.137c1.356-1.331,2.687-2.648,4.017-3.953.128-.128.269-.243.422-.384a3.35,3.35,0,0,1-.87,3.749A3.278,3.278,0,0,1,99.8,65.137Z" transform="translate(-87.032 -52.948)" fill="#fd7d00"/>
                    <path id="Path_135" data-name="Path 135" d="M86.6,43.032a2.652,2.652,0,0,1-.537.1,1.278,1.278,0,0,0-1.42,1.407.857.857,0,0,1-.141.512c-.6.652-1.228,1.292-1.945,2.034a3.462,3.462,0,0,1,3.992-4.273A1.083,1.083,0,0,0,86.6,43.032Z" transform="translate(-71.899 -37.214)" fill="#fd7d00"/>
                  </g>
                </svg>
`);
$("#password").attr("type","text");
checked = true;
            }

            else{
                $(".show_password").html(` <svg xmlns="http://www.w3.org/2000/svg" width="27.993" height="14.136" viewBox="0 0 27.993 14.136">
                <g id="showpassword-01" transform="translate(0 -0.048)">
                  <path id="Path_129" data-name="Path 129" d="M0,7.113C3.581,3.571,7.481.8,12.558.144A13.172,13.172,0,0,1,18.722.9a24.449,24.449,0,0,1,9.271,6.228c-.512.486-.972.972-1.483,1.419a23.229,23.229,0,0,1-7.66,4.757,13.857,13.857,0,0,1-9.757-.013A24.689,24.689,0,0,1,0,7.113Zm18.913-.026a4.923,4.923,0,1,0-4.885,4.949A4.925,4.925,0,0,0,18.913,7.088Z" transform="translate(0 0)" fill="#272727"/>
                  <path id="Path_130" data-name="Path 130" d="M85.791,28.3A3.472,3.472,0,1,1,82.3,31.727,3.438,3.438,0,0,1,85.791,28.3Zm1.253,1.586a1.266,1.266,0,1,0-1.24,1.279A1.283,1.283,0,0,0,87.044,29.885Z" transform="translate(-71.775 -24.639)" fill="#272727"/>
                </g>
              </svg>
`);
$("#password").attr("type","password");
checked = false;

            }


        })

//----------------------- Store_home Page


function Addrecord(All_data , startfrom , end ){

    if(end > All_data.length)
    {
        end = All_data.length;

    }
    
    else{
        $(".navigation").html(`
        <button type="button" id="back_records" class="btn btn-dark">السابق</button>
        <button type="button" id="next_records" class="btn btn-dark">التالي</button>
      
        `)
        $("#next_records").click(function(){
            Addrecord(H ,end+1, end+9  );
            droplist()
           })
     
    }

    if(startfrom-10 > 0)
    {
     $("#back_records").click(function(){
         Addrecord(H ,startfrom-10 , startfrom-1 );
         droplist()
     })   
 }  

 $("#content_container").html("")
    for(var index = startfrom-1 ; index < end ; index ++)
    {   
       

       

        $("#content_container").html( $("#content_container").html() + `
      
        <tr>
        <th scope="row">`+(index +1)+`</th>
        <td>`+ All_data[index][0] +`</td>
        <td>`+ All_data[index][1]+`</td>
        <td>`+ All_data[index][2] +`</td>
        <td>`+All_data[index][3]+`</td>
        <td>`+All_data[index][4]+`</td>
        <td>`+All_data[index][5]+`</td>
        <td><div class="dropdown">
            <a class="btn dropdown-toggle dropdown_adj" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <span>الحالة</span>  
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#">تم الصرف</a></li>
              <li><a class="dropdown-item" href="#">لا يوجد</a></li>
            </ul>
          </div></td>
      </tr>
        `)
    }

    
    
    }
    
    H = [["Ahmed2", "MOhamed2" ,"Ahmed2", "MOhamed2" ,"Ahmed2", "MOhamed2"] ,["Ahmed", "MOhamed" ,"Ahmed", "MOhamed" ,"Ahmed", "MOhamed"] , ["Ahmed", "MOhamed" ,"Ahmed", "MOhamed" ,"Ahmed", "MOhamed"] ,["Ahmed", "MOhamed" ,"Ahmed", "MOhamed" ,"Ahmed", "MOhamed"],
    ["Ahmed2", "MOhamed2" ,"Ahmed2", "MOhamed2" ,"Ahmed2", "MOhamed2"] ,["Ahmed", "MOhamed" ,"Ahmed", "MOhamed" ,"Ahmed", "MOhamed"] , ["Ahmed", "MOhamed" ,"Ahmed", "MOhamed" ,"Ahmed", "MOhamed"] ,["Ahmed", "MOhamed" ,"Ahmed", "MOhamed" ,"Ahmed", "MOhamed"],
    ["Ahmed2", "MOhamed2" ,"Ahmed2", "MOhamed2" ,"Ahmed2", "MOhamed2"] ,["Ahmed", "MOhamed" ,"Ahmed", "MOhamed" ,"Ahmed", "MOhamed"] , ["Ahmed", "MOhamed" ,"Ahmed", "MOhamed" ,"Ahmed", "MOhamed"] ,["Ahmed", "MOhamed" ,"Ahmed", "MOhamed" ,"Ahmed", "MOhamed"]]

function rest_table(){
    $("#content_container").html("")
}



//  Addrecord(H ,1, 10  );
function reset_top_nav(){
    $("#store_home_btn").attr("class","nav-link");
    $("#store_home_add_type").attr("class","nav-link");
    $("#store_home_add_qty").attr("class","nav-link");
    $("#store_home_withdraw_qty").attr("class","nav-link");
    $("#store_home_search").attr("class","nav-link");
}
function Store_Home(){
    $("#store_home_btn").fadeOut(150,function() {$(this).attr("class", "nav-link active").fadeIn("150")});
   $(".col09adj .container").html(`    <table class="table">
   <thead>
     <tr>
       <th scope="col">م</th>
       <th scope="col">إسم العميل</th>
       <th scope="col">رقم أمر التشغيل</th>
       <th scope="col">الكمية</th>
       <th scope="col">نوع الورق</th>
       <th scope="col">وزن الورق</th>
       <th scope="col">المقاس</th>
       <th scope="col">الحالة</th>
      
     </tr>
   </thead>
   <tbody id="content_container">
</tbody>
</table>
<div class="navigation">

</div>`);
}
function Store_add_type(){
    reset_top_nav();
    $("#store_home_add_type").fadeOut(150,function() {$(this).attr("class", "nav-link active").fadeIn("150")});
    
}


/// navigation top
$("#store_home_btn").click(function(){
    reset_top_nav();
    rest_table();
    Store_Home();
    Addrecord(H ,1, 10  );
})
$("#store_home_add_type").click(function(){
    Store_add_type();

})
$(".dropdown-item").click(function(){
    R = this.parent.parent.parent
    console.log(R);
})