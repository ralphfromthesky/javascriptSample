$(document).ready(function () {
    $('p').click(function () {
        $('#try').hide()
    })

    // $('input').focus(function () {
    //     $(this).css('background-color', 'red')
    //     $('.now').css('background-color', 'yellow')
    // })
    $('h1').click(function () {
        $(this).css('color', 'red')
        $('.ralph').css('color', 'yellow')

    })
    $('#clickbtn').click(function () {
        $('#phar').toggle()
    })

    $('#fade').click(function () {
        $('#1').fadeIn()
        $('#2').fadeIn('slow')
        $('#3').fadeIn(3000)
    })
    $('#fadeOut').click(function () {
        $('#4').fadeOut()
        $('#5').fadeOut('slow')
        $('#6').fadeOut(3000)
    })
    $('#slideDown').click(function () {
        $('#panel').slideToggle()
    })
    $('#anim').click(function () {
        $('#divAnimate').animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px',
            fontSize: '150px'
            // can add multiple properties for more animation
        })
    })

    $('#moreAnimate').click(function () {
        var div = $('#moreAnim');
        div.animate({ height: '300px', opacity: '0.4' }, "slow");
        div.animate({ width: '300px', opacity: '0.8' }, "slow");
        div.animate({ height: '100px', opacity: '0.4' }, "slow");
        div.animate({ width: '100px', opacity: '0.8' }, "slow");

    })
    $('#callback').click(function () {
        $(this).hide(2000, () => {
            alert('hide with callback function')
        })
    })
    $('#nocallback').click(function () {
        $(this).hide(2000);
        alert('no call back function')
    })
    $('#newP').click(function () {
        $(this).html('<h1>ralph santolorin</h1>')
    })

    $('#forms').submit(function (e) {
        e.preventDefault();
        var formData = {
            name: $('#email').val().trim(),
            password: $('#password').val().trim()
        }
        $('#email, #password').css('background-color', '');

        if (formData.name === '') {
            alert('no empty');
            $('#email').css('background-color', 'red').focus()
            return;
        }
        if (formData.password === '') {
            alert('no empty please');
            $('#password').css('background-color', 'yellow').focus()
            return;
        }
        console.log(formData.name + formData.password)
    })
    console.log("Button clicked");
    $('#textbutton').click(() => {
        var newText = $('#thisText').text()
        $('#thisText2').text(newText)
        console.log(newText);
    })
    // $('#tryFocus').click(() =>{
    //     alert('nowFocus')
    // })
    const tryFocus = document.getElementById('tryFocus')
    const onFocus = () => {
        alert('nowFocus')
    }
    tryFocus.addEventListener('click', onFocus)



})