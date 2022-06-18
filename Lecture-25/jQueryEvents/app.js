$('h1').click(function () {
    console.log('someone clicked me!!');
});

$('input').keypress(function (e) {
    if (e.which === 13) {
        console.log('You pressed the Enter Key!!')
    }
})