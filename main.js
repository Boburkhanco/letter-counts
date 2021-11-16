// var text = 'aaaabbccccccdjjjjkkka';

var submit = document.getElementById('submit')


submit.addEventListener('click' , e => {
    var input = document.getElementById('input');
    var characters = (input.value).split('');
    var letterCounts = { };
    var info = document.getElementById('info')


    for (var i = 0; i < characters.length; i++)  {
        if (letterCounts [characters[i]] == undefined)
            letterCounts[characters[i]] = 0;
            letterCounts[characters[i]]++; 
    }

    for (var i in letterCounts) {
        console.log(i + " = " + letterCounts[i]);
        info.textContent = (i + " = " + letterCounts[i])
    }
})
