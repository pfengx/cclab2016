    $(document).ready(function(){
      var i = ["ActionScript","AppleScript","Asp","BASIC","C","C++","Clojure","COBOL","ColdFusion","Erlang","Fortran","jQuery","Haskell","Java","JavaScript","Lisp","Perl","PHP","Python","Ruby","Scala","Scheme"];
      $( "#autocomplete" ).autocomplete({
        source: i
      });
      $("#datepicker").datepicker({
        minDate:0,
        maxDate:'10/31/2016'
      });
    });



    $(document).ready(function(){
      // binds form submission and fields to the validation engine
      jQuery("#formId").validationEngine();
    });





    // //keeps calling for JQuery
    // jQuery(document).ready(function(){
    //   // binds form submission and fields to the validation engine
    //   jQuery("#formId").validationEngine();
    // });
    // alert(done!);




   