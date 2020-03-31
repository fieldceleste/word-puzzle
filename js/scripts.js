$(document).ready(function() {
  $(".sentence").submit(function(event) {
    var wordsEnteredhere = $("input.wordsEntered").val();
    var finalSentence =[];
    event.preventDefault();
      $(".sentence").hide();
      $("#game").show();

      for (var index=0; wordsEnteredhere.length > index; index +=1 ) {
        var letter = wordsEnteredhere[index];
        if (letter=== 'a' || letter=== 'e' || letter=== 'i' ||  letter === 'o' || letter === 'u') {
          finalSentence[index]='-';

        }  else {
            finalSentence[index]=letter;
        } if (index === wordsEnteredhere.length-1)  {
          $("#answer1").text(finalSentence.join(''));
        }
      }

    $("#back").click(function(){
      $("#game").hide();
      $(".sentence").show();
    });
  });
});



































// $(document).ready(function() {
//   $(".sentence").submit(function(event) {
//     var words = $("input.word").val();
//     var answer =[];
//     event.preventDefault();
//       $(".sentence").hide();
//       $("#game").show();

//       for (var index=0; words.length > index; index +=1 ) {
//         var letter = words[index];
//         if (letter=== 'a' || letter === 'e' || letter === 'i' ||  letter === 'o' || letter === 'u') {
//           answer[index]='-';

//         }  else {
//             answer[index]=letter;
//         } if (index === word.length-1)  {
//           $("#answer1").text(answer.join(''));
//         }
//       }

//     $("#back").click(function(){
//       $("#game").hide();
//       $(".sentence").show();
//     });
//   });
// });