$(window).scroll(function() {
    var pos = $(this).scrollTop();
    if(pos > 400) $(".nav-header").addClass("nav-shrink");
    else $(".nav-header").removeClass("nav-shrink");
    
    
    var menuItem = $(".nav-collapse").find("a"),
        scrollItem = menuItem.map(function() {
        var item = $($(this).attr("href"));
        if( item.offset().top < pos)
            return item;
    });
    menuItem.parent().removeClass("active");
    var cur = scrollItem[scrollItem.length -1],
        id = cur[0].id,
        lastId;
    
    if(lastId !== id) {
        lastId = id;
        menuItem.filter("[href='#"+id+"']").parent().addClass("active");
    }
});

function main(){
    $('.nav-toggle').click(function() {
        $('.hidden').slideToggle(800);
    });
}

$(document).ready(main);