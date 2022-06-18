// Add new Todo
$('input').keypress(function (e) {
    if (e.which === 13) {
        const todoText = $(this).val();
        $('#list').append(`<li><span>X</span> ${todoText}</li>`);
        $(this).val("");
    }
});

// Mark completed
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

// Delete Todo 
$('ul').on('click', 'span', function (event) {
    event.stopPropagation(); //to stop event bubbling
    $(this).parent().fadeOut(600, function () {
        $(this).remove();
    });
});

// Toggle Input
$('#plus').click(function () {
    $('input').fadeToggle();
});