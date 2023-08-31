const div = document.getElementById('div1');

div.addEventListener('click', function(event) {
    if (event.target !== document.getElementById('div1')) {
        return
    } else {
        return alert('Hola! Soy el div')
    }
});

