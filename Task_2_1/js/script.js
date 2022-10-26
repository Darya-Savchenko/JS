window.onload = function() {
    const button = document.querySelector('#input_button_bg_change');
    const backgroundColorName = document.querySelector('#backgroundColorName');
    const body = document.body;
    button.addEventListener("click", onChangeBackgroundColor);
    function onChangeBackgroundColor(){
        const backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8);
        body.style.backgroundColor = backgroundColor;
        backgroundColorName.innerHTML = backgroundColor;
    }
};