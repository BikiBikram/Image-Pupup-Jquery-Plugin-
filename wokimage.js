$(document).ready(function(){

   $("img").click(function(){

    
      var src=$(this).attr("src");

        $("#p").attr("src",src);

        $(".modal").modal({backdrop: "static"});
      

  });
});