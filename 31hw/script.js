function addComment(name, comment) {
    const testimonials = document.getElementById('testimonials');
    const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

    const h3InsideItem = document.createElement('h3');
        h3InsideItem.textContent = name;
        
    const divInsideItem = document.createElement('div');
        divInsideItem.textContent = comment;
        
    itemDiv.appendChild(h3InsideItem);
    itemDiv.appendChild(divInsideItem);

    return testimonials.appendChild(itemDiv);
}

console.log(addComment('Владислав', 'Привіт я такий то такий то'));
console.log(addComment('Алла', 'function addComment() чудово працює '));
console.log(addComment('Поліна', 'Подобається)')); 