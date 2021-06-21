let addItemsButton = document.getElementById('addItems');
let itemsContainer = document.getElementById('itemsContainer');
let inputField = document.getElementById('inputField');

addItemsButton.addEventListener('click', function(){
    let itemsBox = document.createElement('div');
    itemsBox.classList.add('itemsBox');
    itemsContainer.appendChild(itemsBox);

    let pgrf = document.createElement('p');
    pgrf.classList.add('items-style');
    pgrf.innerText = inputField.value;
    itemsBox.appendChild(pgrf);
    inputField.value = "";

    let removeItemsBtn = document.createElement('button');
    removeItemsBtn.classList.add('removeItemsBtn');
    itemsBox.appendChild(removeItemsBtn);

    removeItemsBtn.addEventListener('click', function(){
        itemsContainer.removeChild(itemsBox);
    })
    
    
})



