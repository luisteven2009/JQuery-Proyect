$(document).ready(function(){
    $(".sform").click(function(){
        $(".bg-modal").slideDown("slow");
    });
    $(".close").click(function(){
        $(".bg-modal").slideUp("slow");
    });
});