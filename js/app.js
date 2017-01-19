let donutList = require('./donuts')

window.addEventListener('load', function () {
    addDonuts();

    // query selects buttons
    let navList = document.querySelector('#showList');
    let navAdd = document.querySelector('#showAdd');

    // query selects where food list will be shown
    let viewList = document.querySelector('#foodBox');
    // query selects where add menu will be shown 
    let viewAdd = document.querySelector('#addView');

    // query selects input box
    let searchBox = document.querySelector('#search');

    // when navList is clicked, show list of food 
    navList.addEventListener('click', function () {
        viewList.classList.remove('hidden');
        viewAdd.classList.add('hidden');
    });
    //when navAdd is clicked, show add menu 
    navAdd.addEventListener('click', function () {
        viewList.classList.add('hidden');
        viewAdd.classList.remove('hidden');
    });

    searchBox.addEventListener('keyup', function () {
        console.log(searchBox.value);

        let keepers = [];

        for (let i = 0; i < donutList.length; i++) {
            let donutName = donutList[i].type.toLowerCase();
            let searchTerm = searchBox.value.toLowerCase();

            if (donutName.includes(searchTerm)) {
                keepers.push(donutList[i]);
            }
        }
        donutMenu(keepers);
    });
    donutMenu(donutList);
});

// show donut menu
function donutMenu (arr) {
    let parent = document.querySelector('#foodBox')
    parent.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let child = document.createElement('li');

        child.innerHTML = Mustache.render(
            document.querySelector('#dough').innerHTML,
            donutList[i]
        ); 
        parent.appendChild(child);

    } console.log('menu update')
}



// get textContent of add donut and add to array to be displayed.
let newDonuts = [];
function addDonuts () {
let nameOfDonut = document.querySelector('#donutName');
let descriptionOfDonut = document.querySelector('#donutDescription');
let priceOfdonut = document.querySelector('#donutPrice');

let submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function () {
    console.log('donut click');
    console.log(nameOfDonut.value);
    donutList.push(
        {
            type: nameOfDonut.value,
            description: descriptionOfDonut.value,
            cost: priceOfdonut.value,
        });
    console.log(donutList);
    clearBoxValue(nameOfDonut);
    clearBoxValue(descriptionOfDonut);
    clearBoxValue(priceOfdonut);
 });
}

function clearBoxValue (name) {
    name.value='';
}
