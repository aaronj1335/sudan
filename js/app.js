/*global $,google*/
$(function() {
    // var map, maps = google.maps,
    //     LatLng = maps.LatLng,
    //     Map = maps.Map,
    //     MapTypeId = maps.MapTypeId;

    $('a.expander').on('click', function() {
        $(this).closest('.row').next().toggle('fast');
    });

    // map = new Map(document.getElementById("map_canvas"), {
    //     center: new LatLng(-34.397, 150.644),
    //     zoom: 8,
    //     mapTypeId: MapTypeId.ROADMAP
    // });

});
