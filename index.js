$(document).ready(function() {
    $("#mobile-menu-icon").click(openMenu);
    $("#mobile-menu-icon-close").click(closeMenu)
    function openMenu(){
        $(".mobile-navigation").css("display", "block");
        $(".content-container").addClass("darken");
    };
    function closeMenu(){
        $(".mobile-navigation").css("display", "none");
        $(".content-container").removeClass("darken");
    }
}); 
