//Business End










var question1Input = $("input:radio[name=question1]:checked").val();
var question2Input = $("input:radio[name=question2]:checked").val();
var question3Input = $("input:radio[name=question3]:checked").val();
var question4Input = $("input:radio[name=question4]:checked").val();
var question5Input = $("input:radio[name=question5]:checked").val();


if(question1Input === "bigcompany" || question5Input === ("csharpnet")) {
  $("outputCSharp").slidein();
} else if(question1Input==="startup" && question2Input==="yes" || question5Input==="rubyrails") {
  $("outputRuby").slidein();
} else if(question3Input==="yes" || )


}
















//User End

$(document).ready(function(){
  $("#blank").submit(function(event){
    var question1Input = $("input:radio[name=question1]:checked").val();
    var question2Input = $("input:radio[name=question2]:checked").val();
    var question3Input = $("input:radio[name=question3]:checked").val();
    var question4Input = $("input:radio[name=question4]:checked").val();
    var question5Input = $("input:radio[name=question5]:checked").val();

    event.preventDefault();

  });

});
