const tagEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }), 10

        randomselect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()!== '').map(tag => tag.trim())

    tagEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagEl.appendChild(tagEl)
    })
    
}

function randomselect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)

        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag

            highlightTag(randomTag)
        }, 100)

    }, times + 100)
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}


function unhighlightTag(tag) {
    tag.classList.add('highlight')
}

