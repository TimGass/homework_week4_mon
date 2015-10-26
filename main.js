var view = $("#view");
  $(document).ready(function(){
    $(".operators").on("click", 'input', function(){
      if($(this).val() === "="){
        view.val(
          eval(view.val())
        );
      }
      else{
      view.val(view.val() + $(this).val());
    }
    });

    $("#clear").click(function(){  view.val("");  });

    view.on('keypress', function(event){
      if (event.keyCode === 13) {
        $(this).val(
          eval($(this).val())
        );
      }
    })
  });
