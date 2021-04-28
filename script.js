let colors = new Array('red','blue','yellow','lightgrey',
'darkorchid','black','orange','deeppink','green','purple', 
'saddlebrown','lightseagreen','deepskyblue','firebrick','crimson');

var no = Math.floor(Math.random() * colors.length);

$("#btn").on('click',function(){

    var ele = $("<div class='ball'></div>");
    var pos = Math.floor(Math.random()*colors.length)
    ele.css("backgroundColor", colors[pos]);
    $(".container").append(ele);

})