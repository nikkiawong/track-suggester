$(document).ready(function() {
  $("form#quizForm").submit(function(event) {
      var worktype = $("input[name='worktype']:checked").val();
      var workplace = $("input[name='workplace']:checked").val();
      var databases = $("input[name='databases']:checked").val();
      var demand = $("input[name='demand']:checked").val();
      var interest = $("input[name='interest']:checked").val();

      if (worktype === 'client-software' && workplace === 'large' && databases === 'alot' && demand === 'veryImportant' && interest === 'backend') {
        $('#net').show();
      } else if (worktype === 'interactive' && workplace === 'small' && databases === 'somewhat' && demand === 'somewhatImportant' && interest === 'backend') {
        $('#ruby').show();
      } else if (worktype === 'interactive' && workplace === 'large' && databases === 'alot' && demand === 'veryImportant' && interest === 'backend') {
        $('#ruby').show();
      } else if (worktype === 'design' && workplace === 'notsure' && databases === 'notatall' && demand === 'notImportant' && interest === 'frontend') {
        $('#react').show();
      } else if (worktype === 'client-software' && workplace === 'large' && databases === 'somewhat' && demand === 'somewhatImportant' && interest === 'backend') {
        $('#net').show();
      } else {
        $('#react').show();
      }


      event.preventDefault();
    });
  });
