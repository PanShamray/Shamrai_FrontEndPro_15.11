const emoji = ['😀', '🥰', '😑', '🤢', '🤮'];
const calc = new Array(emoji.length).fill(0);

const emoContainer = document.getElementById('em-container');
emoji.forEach(function(em, index) {
    const emoSpan = document.createElement('span');
    emoSpan.className = 'smile';
    emoSpan.textContent = em;

    emoSpan.addEventListener('click', function() {
        handleSmileyClick(index);
    });

    emoContainer.appendChild(emoSpan);

    const count = document.createElement('span');
    count.textContent = '0';
    emoContainer.appendChild(count);
});

function handleSmileyClick(index) {
    calc[index]++;
    reloadCalc();
}

function reloadCalc() {
    const countElem = document.querySelectorAll('.smile + span');
    countElem.forEach(function(count, index) {
        count.textContent = calc[index];
    });
}