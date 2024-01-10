fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(res => reload(res))

let cont2 = document.querySelector('.container2')

function reload(arr) {
    cont2.innerHTML = ""

    for (let item of arr) {
        // create
        let medium_div = document.createElement('div')
        let box_block_div = document.createElement('div')
        let checkbox = document.createElement('input');
        let h1_big_text_div = document.createElement('div')
        let box_div = document.createElement('div')
        let p_age = document.createElement('div')
        let p_digit = document.createElement('div')

        // styling
        medium_div.classList.add('medium')
        box_block_div.classList.add('box_block')
        checkbox.type = 'checkbox';
        h1_big_text_div.classList.add('big_text')
        box_div.classList.add('box')
        p_age.classList.add('age')
        p_digit.classList.add('digit')

        h1_big_text_div.innerHTML = item.id
        p_age.innerHTML = item.title
        p_digit.innerHTML = item.userId

        if (item.completed) {
            checkbox.checked = true;
        }

        // append
        cont2.append(medium_div)
        medium_div.append(box_block_div)
        box_block_div.append(checkbox, h1_big_text_div, box_div)
        box_div.append(p_age, p_digit)
    }
}
