setInterval(function() {
    $(".imageviewer .sidebar").height($(".imageviewer").height()-$(".imageviewer .topbar").height());
    $(".imageviewer .main").height($(".imageviewer .sidebar").height());
    if ($(".imageviewer").width() < 400) {
        $(".imageviewer .sidebar").hide();
        $(".imageviewer .main").css("width","100%");
    }
    else if ($(".imageviewer .sidebar").width() == 200) {
        $(".imageviewer .main").width($(".imageviewer").width()-200);
    }
    else {
        $(".imageviewer .sidebar").show();
        $(".imageviewer .main").css("width","70%");
    }
},50);
$(document).ready(function() {
    $(".menu#file").hide();
    $(".menu#edit").hide();
    $(".menu#view").hide();
    $(".menu#help").hide();
    
    $(".imageviewer .sidebar").height($(".imageviewer").height()-$(".imageviewer .topbar").height());
    $(".imageviewer .main").height($(".imageviewer .sidebar").height());
    
    var defcol = "#2d2d2d"
    var curcol = defcol;
    var hovcol = "#333333"
    $(".menubtn").click(function(event) {
        if (curcol == defcol) {
            curcol = hovcol;
        }
        else {
            curcol = defcol;
        }
        var o = event.target.clientHeight;
        var p = event.target.offsetLeft;
        var q = event.target.value;
        $(".menubtn#"+q).css("background-color",curcol);
        $(".menu#"+q).css("left", p).css("top", o).toggle().css("background-color","#333333");
    });
});
