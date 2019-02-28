//Check off specific to do by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Hover effect, cursor becomes pointer to show that li is clickable
$("ul").on("mouseover", "li", function() {
    $(this).css("cursor", "pointer");
})

//Click on X to delete item 
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });  
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
    if(e.which === 13) {
        //taking value from the input
        var input = $(this).val();
        //creating new list item
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + input +"</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})