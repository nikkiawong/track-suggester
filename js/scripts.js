$(document).ready(function() {
  $('#helpLine').popover();

  $("form#quizForm").submit(function(event) {
    var worktype = $("input[name='worktype']:checked").val();
    var workplace = $("input[name='workplace']:checked").val();
    var databases = $("input[name='databases']:checked").val();
    var demand = $("input[name='demand']:checked").val();
    var interest = $("input[name='interest']:checked").val();

    var nameInput = $('input#studentName').val();

    $(".studentName").text(nameInput);

    $('#quizForm').hide();

    if (worktype === 'client-software' && workplace === 'large' && databases === 'alot' && demand === 'veryImportant' && interest === 'backend') {
      $('#net').fadeIn();
    } else if (worktype === 'interactive' && workplace === 'small' && databases === 'somewhat' && demand === 'somewhatImportant' && interest === 'backend') {
      $('#ruby').fadeIn();
    } else if (worktype === 'interactive' && workplace === 'large' && databases === 'alot' && demand === 'veryImportant' && interest === 'backend') {
      $('#ruby').fadeIn();
    } else if (worktype === 'client-software' && workplace === 'large' && databases === 'somewhat' && demand === 'somewhatImportant' && interest === 'backend') {
      $('#net').fadeIn();
    } else if (worktype === 'client-software' && workplace === 'small' && databases === 'alot' && demand === 'veryImportant' && interest === 'backend') {
      $('#net').fadeIn();
    } else if (worktype === 'design' && workplace === 'notsure' && databases === 'notatall' && demand === 'notImportant' && interest === 'frontend') {
      $('#react').fadeIn();
    } else {
      $('#react').fadeIn();
    }

      event.preventDefault();
    });

  $("#clickable1").click(function() {
    $("#show-info1").slideToggle();
    $("#clickable1").toggle();
    $("#hide1").show();
  })
  $("#hide1").click(function() {
    $("#show-info1").slideToggle();
    $("#hide1").toggle();
    $("#clickable1").show();
  })

  $("#clickable2").click(function() {
    $("#show-info2").slideToggle();
    $("#clickable2").toggle();
    $("#hide2").show();
  })
  $("#hide2").click(function() {
    $("#show-info2").slideToggle();
    $("#hide2").toggle();
    $("#clickable2").show();
  })

  $("#clickable3").click(function() {
    $("#show-info3").slideToggle();
    $("#clickable3").toggle();
    $("#hide3").show();
  })
  $("#hide3").click(function() {
    $("#show-info3").slideToggle();
    $("#hide3").toggle();
    $("#clickable3").show();
  });
});
