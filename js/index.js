function addItem() {
  let btn = document.querySelector('.add');

  btn.addEventListener( 'click', ( event ) => {
    event.preventDefault();

    let input = document.querySelector('.item');

    if (input.value.length > 0) {
      let results = document.querySelector('.results > ul');
      let newItem = document.createElement('li');
      newItem.innerHTML += 
      `
        <div class="box"><i>
      ` + input.value + 
      `   </i><br><button class="check">
            Check
          </button>
          <button class="delete">
            Delete
          </button>
        </div>
      `;
      results.appendChild(newItem);
      input.value = '';
    } else {
      console.log('ingresa algo')
    }

    let list = document.querySelectorAll('.results > ul > li');
    list.forEach((listItem) => {
      let btnCheck = listItem.querySelector('.box > .check');
      btnCheck.addEventListener('click', ( event ) => {
        event.preventDefault();
        if (listItem.matches('.checked')) {
          listItem.classList.remove('checked');
        } else {
          listItem.classList.add('checked');
        }
      });

      let btnDel = listItem.querySelector('.box > .delete');
      btnDel.addEventListener('click', ( event ) => {
        event.preventDefault();
        listItem.parentNode.removeChild(listItem);
      });
    });
  });

}

function init() {
  addItem();
}

init()