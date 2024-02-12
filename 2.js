"use strict";
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы,
// но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить
// некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером,
// где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина
// введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами,
// а не заменять их.

const initialData = [
    {
    product: "Apple iPhone 13",
    reviews: [
            {
            id: "1",
            text: "Отличный телефон! Батарея держится долго.",
            },
            {
            id: "2",
            text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
            {
            id: "3",
            text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
    product: "Sony PlayStation 5",
    reviews: [
            {
            id: "4",
            text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const mainDiv = document.querySelector('.app_review');

let idProduct = 0;

initialData.forEach(element => {

  const product = document.createElement('p');
  product.textContent += element.product;
  mainDiv.appendChild(product);


  const reviews = document.createElement("ol");
  element.reviews.forEach(element => {
    idProduct = element.id;
    reviews.innerHTML += `<li>${element.text} (ID ${idProduct})</li>`;
  })
  mainDiv.appendChild(reviews);

  const inputText = document.createElement("input");
  mainDiv.appendChild(inputText);

  const btn = document.createElement("button");
  btn.textContent = "Отправить";
  btn.addEventListener("click", () => {
    if (inputText.value.length >= 50 && inputText.value.length <= 500) {
      idProduct++;
      reviews.innerHTML += `<li>${inputText.value} (ID ${idProduct})</li>`;
      errorMessage.textContent = "";
      inputText.value = "";
    } else {
      errorMessage.textContent = "Комментарий должен быть длинной не менее 50 и не более 500 символов";
    }
  });
  mainDiv.appendChild(btn);
 

  const errorMessage = document.createElement("p");
  errorMessage.style.color = "RED";
  mainDiv.appendChild(errorMessage);
})