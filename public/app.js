(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./donuts":2}],2:[function(require,module,exports){
// array of donuts
module.exports = [
    {
        type: 'Simpson Sprinkles',
        description: 'Delicious strawberry frosting with rainbow sprinkles',
        image: 'http://www.highgradelab.com/sage/donuts/wp-content/uploads/sites/31/2015/09/donut.png',
        cost: 1.99,
    },
    {
        type: 'Chocolate Sprinkles',
        description: 'Chocolate glazed donut with raiinbow sprinkles',
        image: 'http://nebula.wsimg.com/4376efebd9a2d4969cbd91b64577fd3a?AccessKeyId=0CBFB11C128D51FF4DF0&disposition=0&alloworigin=1',
        cost: 1.99,
    },
    {
        type: 'Glazed',
        description: 'Glazed donut',
        image: 'http://www.wpclipart.com/food/desserts_snacks/donut/glazed_donut_large.jpg',
        cost: 1.99,
    },
    {
        type: 'Rasberry Coconut',
        description: 'Rasberry frosting with coconut shavings',
        image: 'http://t1.ftcdn.net/jpg/00/67/64/60/240_F_67646000_pPQSxUSt7RvXn74K45nZ5DmnNTqfSw98.jpg',
        cost: 1.99,
    },
    {
        type: 'Chocolate Glazed',
        description: 'Chocolate Glazed donut',
        image: 'http://core0.staticworld.net/images/article/2013/06/dunkin-donuts-100041743-large.jpg',
        cost: 1.99,
    },
    {
        type: 'Zebra',
        description: 'Vanilla glazed donut with chocolate stripes',
        image: 'http://rlv.zcache.com/glazed_white_frosting_with_chocolate_stripes_donut_dinner_plate-r9e5b09cd74c94eaf85a7ac920f00ef81_ambb0_8byvr_324.jpg',
        cost: 1.99,
    },
];
},{}]},{},[1]);
