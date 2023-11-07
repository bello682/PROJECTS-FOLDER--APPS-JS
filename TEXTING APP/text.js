// const formEl = document.getElementById("myForm");
// const buttonEl = document.getElementById("myBtn");

// formEl.addEventListener("submit", (e) => {
// 	e.preventDefault();

// 	let firstName = document.getElementById("firstname").value;
// 	let middleName = document.getElementById("middlename").value;
// 	let lastName = document.getElementById("lastname").value;

// 	let formDAta = {
// 		first: firstName,
// 		middle: middleName,
// 		last: lastName,
// 	};

// 	let stringData = JSON.stringify(formDAta);

// 	localStorage.setItem("formDAta", stringData);

// 	console.log(`form info re: `, formDAta);
// });

// //  function onRegisterSubmit(){
// //     const user = {
// //         a: this.a,
// //         b: this.b,
// //         c: this.c,
// //     //   id: Date.now()
// //     }

// //     let consversionOfArrayToString = JSON.stringify(user);

// //     localStorage.setItem('formEl', consversionOfArrayToString);

// //     const iWantMyStringData = localStorage.getItem('formEl');

// //     const nowRetriveData = JSON.parse(iWantMyStringData);

// //     console.log(nowRetriveData);
// //     console.log(formEl);

// //    var abc = [];
// //    var get =  JSON.parse(localStorage.getItem('user'));
// //    abc = [get];
// //    abc.push(user);

// //    localStorage.setItem('user', JSON.stringify(abc));

// //    console.log(JSON.stringify(abc));
// //    console.log(get);

// // }


const formEl = document.getElementById("myForm");
const buttonEl = document.getElementById("myBtn");
let first = document.getElementById("firstname");
let middle = document.getElementById("middlename");
let last = document.getElementById("lastname");


// Storing data in localStorage
localStorage.setItem('firstname', first.value);
localStorage.setItem('middlename', middle.value);
localStorage.setItem('lastname', last.value);


// Retrieving data from localStorage
let firstname = localStorage.getItem('firstname');
let middlename = localStorage.getItem('middlename');
let lastname = localStorage.getItem('lastname');

first = firstname;
middle = middlename;
last = lastname;

console.log(firstname);  // Output: John
console.log(middlename);   // Output: 30
console.log(lastname);  // Output: New York


// Fetching all data from localStorage

buttonEl.addEventListener('submit', (e) => {
	e.preventDefault();
alert('stop')
	// function fetchLocalStorageData() {
	// 	const data = {};
	  
	// 	for (let i = 0; i < localStorage.length; i++) {
	// 	  const key = localStorage.key(i);
	// 	  const value = localStorage.getItem(key);
	// 	  data[key] = value;
	// 	}
	  
	// 	return data;
	//   }

	//   const localStorageData = fetchLocalStorageData();
	//   console.log(localStorageData);
});

  

  