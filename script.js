$(document).ready(function() {$("#egg_tomato").draggable(); })
$(document).ready(function() {$("#egg_tomato").hide(); })

$(document).ready(function() {$("#egg1").draggable(); })
$(document).ready(function() {$("#egg2").draggable(); })
$(document).ready(function() {$("#egg3").draggable(); })

$(document).ready(function() {$("#tomato1").draggable(); })
$(document).ready(function() {$("#tomato2").draggable(); })
$(document).ready(function() {$("#tomato3").draggable(); })

$(document).ready(function() {
    $("#pan").click(function(){
        $("#tomato1").hide(); 
        $("#tomato2").hide();
        $("#tomato3").hide();
        $("#egg1").hide();
        $("#egg2").hide();
        $("#egg3").hide();
        $("#egg_tomato").show();});})