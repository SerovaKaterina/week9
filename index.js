/*  Задача 1 */
let cleaner = 40000;
let teacher = 22000;
console.log(cleaner + teacher);

/* Задача 2 */
let city = "Владивосток";
let year = 2000;
console.log(city + " " + year);

/* Задача 3 */
let messenger = 128;
let like = 254;
let read = 137;
let see = 201;
let hour = 60;
console.log( ( messenger + like + read + see) / hour );

/* Задача 4 */
console.log( 2 ** 5);

/* Задача 5 */
let string = "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!";
console.log(string);

/* Задача 6 */
const greetings = "Привет";
const name = "Кот";
console.log(`${greetings}, ${name}`);
console.log(greetings + "," + " " + name);

/* Задача 7 */
let time;
time = 34;
console.log("Старт поездки. Осталось минут: " + time);

time -= 15;
console.log("Немного сториз в соцсетях. Осталось минут: " + time);

time -= 10;
console.log("Немного не новостей, но событий. Осталось минут: " +time);

time = 0;
console.log("Вы приехали. Добро пожаловать в Москву");

/* Задача 8 */
let fahrenheit = 451;
let celsius = (fahrenheit - 32) / 1.8;
console.log(`${fahrenheit} градуса по Фаренгейту - это ${celsius} градуса по Цельсию.`);
