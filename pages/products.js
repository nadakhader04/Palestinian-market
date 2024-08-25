let card = document.querySelector('.card');
let products = [
    {
        id : 1,
        name : 'نظارات شمسية نسائية',
        price : 40+"₪",
        images : '../image/07.jpg',
        quantity:1
    },

    {
        id : 2,
        name : 'قبعة للرجال والنساء',
        price : 20+"₪",
        images : '../image/09.jpg',
        quantity:1
    },

    {
        id : 3,
        name : 'عطر رجالي',
        price : 90+"₪",
        images : '../image/012.jpg',
        quantity:1
    },

    {
        id : 4,
        name : 'ساعة رجالية',
        price : 80+"₪",
        images : '../image/014.jpg',
        quantity:1
    },

    {
        id : 5,
        name : 'كعك العيد الفلسطيني',
        price : 15+"₪",
        images : '../image/016.jpg',
        quantity:1
    },

    {
        id : 6,
        name : 'صنظارة نسائية',
        price : 50+"₪",
        images : '../image/08.jpg',
        quantity:1
    },

    {
        id : 7,
        name : 'عطر رجالي',
        price : 120+"₪",
        images : '../image/011.jpg',
        quantity:1
    },


    {
        id : 8,
        name : 'صنية هريسة',
        price : 20+"₪",
        images : '../image/015.jpg',
        quantity:1
    },

    {
        id : 9,
        name : 'قبعة للرجال والنساء',
        price : 20+"₪",
        images : '../image/010.jpg',
        quantity:1
    },

    {
        id : 10,
        name : 'ساعة يد نسائية',
        price : 35+"₪",
        images : '../image/013.jpg',
        quantity:1
    },

    {
        id : 11,
        name : 'حلبة فلسطينية',
        price : 30+"₪",
        images : '../image/017.jpg',
        quantity:1
    },
     
]

function productsShow(){
    products.forEach((value, key) => {

        let newDiv = document.createElement('div')
        newDiv.classList.add('item');
        newDiv.innerHTML=`
        <img src='${value.images}'>
        <div> ${value.name} </div>
        <div> ${value.price} </div>
        <button id="openBut" onclick="addToCard(${key})"> اضف الى السلة </button>
        `
        card.appendChild(newDiv)
    })
}

productsShow();


let openPyment = document.querySelectorAll('#openBut');

let closePyment = document.querySelector('.close');

let payment = document.querySelector('.payment')

openPyment.forEach((button) => {
    button.addEventListener('click', () => {
    payment.style.display = 'flex'; 
    payment.style.top = button.style.top; // هذا السطر اجتهاد شخصي لمحاولتي معرفة موقع الزر واظهار شاشة الدفع فوقها وهو خطأ للاسف
    })
});

closePyment.addEventListener('click', () => {
    payment.style.display = 'none'; 
});