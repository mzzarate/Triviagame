$(document).ready(function () {
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var timeRemaining = ''
    var count = 60;
    
    $('.hide').hide();
    
    $('.start').on('click',function () {
        $('.hide').show();
        //$('.time-remaining').html(counter);
        $('.time-remaining').html(timeRemaining);

        function run () {
            clearInterval(timeRemaining);
            timeRemaining = setInterval(countDown,1000);
        }

        function countDown () {
            count--
            $(".time-remaining").html(count);

            if(count === 0) {
                stop();
                $('.hide').hide();
            }
        }

        function stop () {
            clearInterval(timeRemaining);
        }
        
        $('Bogota').on('click',function () {
            if($('#Bogota').is(':checked')) {
                console.log($('#Bogota').val());
            }
        })

        run()

        $('#Wasington DC').on('click',function () {
            if($('#Washington DC').is(':checked')) {
                console.log($('#Wasington DC').val());      
            }
        })

        $('#San Juan').on('click',function () {
            if($('#San Juan').is(':checked')) {
                console.log($('#San Juan').val());
            }
        
        })

    });
      
}) 