//Business End

//User End

$(document).ready(function(){
  $("#blank").submit(function(event){



    event.preventDefault();

    $(".hide-me").hide();


    var q1Input = $("input:radio[name=question1]:checked").val();
    var q2Input = $("input:radio[name=question2]:checked").val();
    var q3Input = $("input:radio[name=question3]:checked").val();
    var q4Input = $("input:radio[name=question4]:checked").val();
    var q5Input = $("input:radio[name=question5]:checked").val();
    var guesser = (q1Input, q2Input, q3Input, q4Input, q5Input);

    $("#output").text(guesser);


      if(q1Input === "bigcompany" && q5Input === ("csharpnet")) {
        $("#CSharp").fadeIn();
      } else if(q1Input==="startup" || q4Input=== "no" && q5Input==="rubyrails") {
        $("#Ruby").fadeIn();
      } else if(q3Input==="yes" || q4Input==="yes" && q5Input==="javaandroid" ) {
        $("#Java").fadeIn();
      } else {

      };


  });


});
