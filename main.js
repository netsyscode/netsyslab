var panels = ['home', 'publications', 'research', 'service', 'funds'];

function showPanel(index) {
    for (var i = 0; i < panels.length; i++) {
        if (i == index) {
            $('#' + panels[i]).show();
        }
        else {
            $('#' + panels[i]).hide();
        }
    }
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); 
    return null;
}
        
$(document).ready(function () {
    panel = parseInt(getUrlParam("panel"));
    if(panel>=0&&panel<5){
        showPanel(panel);
    }
    else{
        showPanel(defaultPanel);
    }
    $('#morenews').hide();
});

$('#morebtn').click(function (e) {
    $('#morenews').slideToggle();
    if ($('#morebtn').html() == 'More...') {
        $('#morebtn').html('Less');
    }
    else {
        $('#morebtn').html('More...');
    }
});
// $('document').ready(function () {
    // for (var i = 1; i < panels.length; i++) {
        // $('#' + panels[i]).load(panels[i] + '.html');
    // }
// });