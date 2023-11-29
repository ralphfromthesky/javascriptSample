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
        $('#4').fadeOut(.6)
        $('#5').fadeOut('slow')
        $('#6').fadeOut(3000)
    })
    $('#slideDown').hover(() => {
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

    $('#forms').submit((e) => {
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


    $('#fetchDaTa').submit((e) => {
        e.preventDefault()
        if ($('#cityName').val().trim() === '') {
            alert('please input city');
            return;
        }
        const api_key = 'b110708d82c794716886b2921d982e96';
        const city = $('#cityName').val()
        const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        $.ajax({
            url: api_url,
            method: 'GET',
            success: (data) => {
                console.log(data)
                const cityName = data.name;
                const temp = data.main.temp
                const weather = data.weather[0].main
                $('#ct').text(`${cityName}`)
                $('#wt').text(`${weather}`)
                $('#tmp').text(`${temp}`)
                console.log(cityName + temp + weather)


            },
            error: (xhr, status, error) => {
                console.log(`error: ${error} - stattus: ${status} - xhr: ${xhr}`);
            }
        })
        $('#cityName').val('')
    })

    const letter = ['a', 'b', 'c', 'd', 'e'];
    for (let i = 0; i < 2; i++) {
        console.log(letter[i])
    }
    letter.forEach((x) => {
        console.log(x.toUpperCase())
    })

    $('#sampleData').data('key', { name: 'ralph', age: 25 })
    var newData = $('#sampleData').data('key');
    console.log(newData)


    $('.tab2').hide();
    $('.tab3').hide();
    $('#b').click(() => {
        $('.tab2').show()
        $('.tab1').hide()
        $('.tab3').hide()

    })
    $('#a').click(() => {
        $('.tab2').hide()
        $('.tab1').show()
        $('.tab3').hide()

    })
    $('#c').click(() => {
        $('.tab3').show()
        $('.tab1').hide()
        $('.tab2').hide()

    })

    // var names = ['alan', 'james', 'angela'];
    // $('#search').submit((e) => {
    //     e.preventDefault()
    //      performSearch()
    // })

    // const performSearch = () => {
    //     var searchInput = $('#searchName').val().trim();
    //     var $results = $('#results');
    //     $results.empty();

    //     if (searchInput === '') {
    //         alert('!!!!!!!')
    //         searchInput.focus()
    //         return
    //     }
    //     if (searchInput !== '') {
    //         var matchNames = names.filter((name) => {
    //             return name.includes(searchInput)
    //         })
    //         if (matchNames.length > 0) {
    //             matchNames.forEach((match) => {
    //                 $results.append(`<li> ${match}</li>`)
    //             })
    //         }
    //         else {
    //             $results.append('no names')
    //         }
    //     }

    // }
        var names = ['alan', 'james', 'angela'];
        const search = document.getElementById('search')
        const searhInput = document.getElementById('searchName');
        const result = document.getElementById('results')

        search.addEventListener('submit', (e) => {
            e.preventDefault()
            searchName();
        })
        const searchName = () => {
            var searchValue = searhInput.value.trim();
            if (searchValue === '') {
                alert('hey input!')
                return;
            }
            else if (searchValue !== '') {
                result.textContent = ''
                var matchName = names.filter((x) => {
                    return x.includes(searchValue);
                })
                if (matchName.length > 0) {
                    matchName.forEach((name) => {
                        result.textContent = `name found: ${name}`;
                    })
                }
                else {
                    result.textContent ='no names found!';
            }


        }
    }










})