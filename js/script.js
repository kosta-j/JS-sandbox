// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида;
// orderedQuantity - кол-во заказанных дроидов;
// customerCredits - сумма средств на счету клиента.
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку 'Недостаточно средств на счету!';
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: 'Вы купили <число> дроидов, на счету осталось <число> кредитов'.
// Тесты
// Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits).
// Вызов makeTransaction(3000, 5, 23000) возвращает 'Вы купили 5 дроидов, на счету осталось 8000 кредитов'.
// Вызов makeTransaction(1000, 3, 15000) возвращает 'Вы купили 3 дроидов, на счету осталось 12000 кредитов'.
// Вызов makeTransaction(5000, 10, 8000) возвращает 'Недостаточно средств на счету!'.
// Вызов makeTransaction(2000, 8, 10000) возвращает 'Недостаточно средств на счету!'.
// Вызов makeTransaction(500, 10, 5000) возвращает 'Вы купили 10 дроидов, на счету осталось 0 кредитов'.

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
//   //1 var
//   const totalPrice = pricePerDroid * orderedQuantity;
//   //2 add checker
//   if (totalPrice > customerCredits) {
//     message = 'Недостаточно средств на счету!';
//   } else {
//     message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${
//       customerCredits - totalPrice
//     } кредитов`;
//   }
//   //3 return message
//   // Пиши код выше этой строки
//   return message;
//   console.log(message);
// }

// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам 'pro' или 'vip', пользователь получит доступ. Результатом выражения проверки будет буль true или false.

// Тесты
// Объявлена функция checkIfCanAccessContent(subType).
// В выражении проверки использован оператор ||.
// Вызов checkIfCanAccessContent('pro') возвращает true.
// Вызов checkIfCanAccessContent('starter') возвращает false.
// Вызов checkIfCanAccessContent('vip') возвращает true.
// Вызов checkIfCanAccessContent('free') возвращает false.

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // дополни эту строку

//   return canAccessContent;
// }

// Задача: расчёт скидки
// Задание
// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Пиши код ниже этой строки
//   if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Пиши код выше этой строки
//   return discount;
// }

// Задача: доставка товара
// Задание
// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// Формат возвращаемой строки Доставка в <страна> будет стоить <цена> кредитов, где вместо <страна> и <цена> необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Ямайка - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку 'Извините, в вашу страну доставки нет'

// Тесты
// Объявлена функция getShippingCost(country).
// В теле функции использована инструкция switch.
// Вызов getShippingCost('Австралия') возвращает 'Доставка в Австралия будет стоить 170 кредитов'.
// Вызов getShippingCost('Германия') возвращает 'Извините, в вашу страну доставки нет'.
// Вызов getShippingCost('Китай') возвращает 'Доставка в Китай будет стоить 100 кредитов'.
// Вызов getShippingCost('Чили') возвращает 'Доставка в Чили будет стоить 250 кредитов'.
// Вызов getShippingCost('Ямайка') возвращает 'Доставка в Ямайка будет стоить 120 кредитов'.
// Вызов getShippingCost('Швеция') возвращает 'Извините, в вашу страну доставки нет'.
// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
//   switch (country) {
//     case 'Китай':
//       message = `Доставка в ${country} будет стоить 100 кредитов`;
//       break;
//     case 'Чили':
//       message = `Доставка в ${country} будет стоить 250 кредитов`;
//       break;

//     case 'Австралия':
//       message = `Доставка в ${country} будет стоить 170 кредитов`;
//       break;

//     case 'Ямайка':
//       message = `Доставка в ${country} будет стоить 120 кредитов`;
//       break;

//     default:
//       message = 'Извините, в вашу страну доставки нет';
//   }
//   // Пиши код выше этой строки
//   return message;
// }

// Задание
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.
// const courseTopic = 'JavaSript для начинающих';
// // Пиши код ниже этой строки

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[23];
// console.log(courseTopic, courseTopicLength, firstElement, lastElement);
// Пиши код выше этой строки

// Задание
// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

// Тесты
// Объявлена функция getSubstring(string, length).
// Вызов функции getSubstring('Привет мир', 3) возвращает 'При'.
// Вызов функции getSubstring('Привет мир', 6) возвращает 'Привет'.
// Вызов функции getSubstring('Привет мир', 8) возвращает 'Привет м'.
// Вызов функции getSubstring('Привет мир', 10) возвращает 'Привет мир'.
// Вызов функции getSubstring('Привет мир', 0) возвращает ''.
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Дополни эту строку

//   return substring;
// }

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// const value = 50;

// const add = function (num) {
//   const value = 10;
//   const innerValue = 5;

//   return num + value + innerValue;
// };
// console.log(value);
// console.log(add(20));

// const changeCase = function (string) {
//   const letters = string.split('');
//   let chagedString = '';

//   for (const letter of letters) {
//     if (letter === letter.toLowerCase()) {
//       chagedString += letter.toUpperCase();
//     } else {
//       chagedString += letter.toLowerCase();
//     }

//   }
//   return console.log(chagedString);
// };

// changeCase('qWeRtY');

// const mTable = function () {
//   for (i = 1; i <= 9; i += 1) {
//     console.log(`Result for ${i}`);
//     for (j = 1; j <= 9; j += 1) {
//       console.log(`${i} x ${j} = `, i * j);
//     }
//   }
// };

// mTable();

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
//   const totalPrice = message.split(' ').length * pricePerWord;

//   return console.log(totalPrice);
//   // Пиши код выше этой строки
// }

// calculateEngravingPrice('JavaScript у меня в крови', 10);
// calculateEngravingPrice('JavaScript у меня в крови', 20);
// calculateEngravingPrice('Веб-разработка это творческая работа', 40);
// calculateEngravingPrice('Веб-разработка это творческая работа', 20);

// Напиши функцию findLongestWord(string) которая принимает произвольную строку с
//остоящую только из слов разделённых пробелом(параметр string)
//и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   //разбиваем строку на массив слов
//   const words = string.split(' ');
//   //объявляем переменную
//   let largestWorld = words[0];
//   for (i = 1; i < words.length; i += 1) {
//     if (words[i].length > largestWorld.length) {
//       largestWorld = words[i];
//     }
//   }
//   return largestWorld;
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   for (i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Пиши код выше этой строки
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 3);

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   let filteredArray = [];
//   for (number of numbers) {
//     if (number > value) {
//       filteredArray.push(number);
//     }
//   }
//   return filteredArray;
// }
// filterArray([1, 2, 3, 4, 5], 3);

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   const array3 = [];
//   for (element of array1) {
//     if (array2.includes(element)) {
//       array3.push(element);
//     }
//     // return array3;
//   }
//   console.log(array3);

//   //перебираем элементы первого массива, сравниваем есть ли они во втором массиве
//   //если есть - добавляем их в новый массив

//   // Пиши код выше этой строки
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);

// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
//   const evenArray = [];
//   for (let i = start; i < end; i += 1) {
//     if (i % 2 === 0) {
//       evenArray.push(i);
//     }
//   }
//   console.log(evenArray);
//   //return evenArray;

//   // Пиши код выше этой строки
// }
// getEvenNumbers(2, 5);

// function includes(array, value) {
//   // Пиши код ниже этой строки
//   let isEqual = false;
//   for (number of array) {
//     if (number === value) {
//       isEqual = true;
//       return console.log(isEqual);
//     }
//     // console.log(true);
//   }
//   return console.log(isEqual);

//   // Пиши код выше этой строки
// }
// // includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер');
// includes([1, 2, 3, 4, 5], 3);
