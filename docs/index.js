let kanyeButton = document.getElementById('kanye-quote')
kanyeButton.addEventListener("click", evt => {
    let quotesDiv = document.getElementById('quotes')
    fetch('https://ca3-kanyewest-cat.herokuapp.com/kanye')
        .then(res => res.json())
        .then(quote => {
            quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
        });
})

let catButton = document.getElementById('give-cat')

catButton.addEventListener("click", evt => {
    let catDiv = document.getElementById('cat-pic')

    fetch('https://ca3-kanyewest-cat.herokuapp.com/cat')
        .then(res => res.json())
        .then(cats => {
            cats.forEach(cat => {
                catDiv.innerHTML = `<h3>Here is this cat wishing you the bestest day</h3>
            <img src="${cat.url}" alt="kitty"/>`
            });
        })

})

