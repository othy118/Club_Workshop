//dom manipulation
const rootElement = document.getElementById('root');

const paragraph = document.createElement('p');

paragraph.textContent = 'This is a paragraph created using JavaScript DOM manipulation.';

rootElement.appendChild(paragraph);

const button = document.createElement('button');

button.textContent = 'Click me';

button.addEventListener('click', () => {
    alert('You clicked the button!');
});

rootElement.appendChild(button);

const targetElement = document.getElementById('targetElement');

        // Change the content using innerHTML
targetElement.innerHTML = '<strong>New Content</strong>';



//<div class="card" style="width: 18rem;">
  //<img src="..." class="card-img-top" alt="...">
  //<div class="card-body">
    //<h5 class="card-title">Card title</h5>
    //<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //<a href="#" class="btn btn-primary">Go somewhere</a>
  //</div>
//</div>