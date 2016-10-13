

function GameResult (){
  var score1= parseInt($('#score1').val());
  var score2= parseInt($('#score2').val());
  
  if (score1 >=4 || score2 >=4){
      if(Math.abs(score1-score2) >= 2) {
         getWinner(score1,score2);
      }else if(score1 >=3 && score2 >=3){
          if(score1==score2) {
              InfoAlert("deuce");
          } else if(score1 == score2+1){
              InfoAlert("Advantage For "+ $('#Player1').val());
          }else if(score2 == score1+1){
            InfoAlert("Advantage For "+ $('#Player2').val());
          }
      }
    
  }else {
    if (score1==score2){
         InfoAlert(getScoreMeaning(score1));
    }else {
        InfoAlert(getScoreMeaning(score1) +"/"+getScoreMeaning(score2));
    }
    
  }
  
}

function getWinner(score1,score2){
  if(score1 > score2){
        InfoAlert('The Winner is ' + $('#Player1').val());
  }else {
     InfoAlert('The Winner is ' + $('#Player2').val());
  }
}


 function getScoreMeaning(score) {
   switch (score) {
    case 0:
        text = "love";
        break;
    case 1:
        text = "fifteen";
        break;
    case 2:
        text = "thirty";
        break;
    case 3:
        text = "forty";
    }
   return text;
 }

function InfoAlert(message) {
	$('#showResult').html(message);
	$('.alert-info').show().delay(5000).fadeOut();
	scrollPageTop();
}

$("#getResult").click(function(){
   GameResult ();
});

