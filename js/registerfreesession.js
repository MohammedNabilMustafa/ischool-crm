$(".mobile-header .menu").click(function() {
    $(".mobile-header .menucontainer").show("blind", { direction: "right" });
})
$(".mobile-header .close").click(function() {
    $(".mobile-header .menucontainer").hide("blind", { direction: "right" });
})
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
$(".btn.signup").click(function() {
    $(".step01").hide("drop", { direction: "right" }, 300);
    setTimeout(function() {
        $(".step02").show("drop", { direction: "left" }, 300);
    }, 400)
})

$(".scheduletableitem").click(function() {
    $(".scheduletableitem").removeClass("active");
    $(".check").removeClass("active");
    $(this).addClass("active");
    Num = $(this).index();
    $(".scheduletableitem:nth-child(" + (Num + 1) + ") .check").addClass("active")
})
$(".btn.next").click(function() {
    $(".step02").hide("drop", { direction: "right" }, 300);
    setTimeout(function() {
        $(".step03").show("drop", { direction: "left" }, 300);
    }, 400)
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