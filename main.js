// Do while loop 1-1000

// let i = 0
// do {
//     i++
//     console.log(i)
//   } while (i < 1000);
  
  //Uncomment to run ^ 


  // Creating Object

  let person = {
      firstname: "Jane",
      lastName: "Doe",
      birthDate: "Jan 5, 1925",
      gender: "female"
  }

 // Function that Logs keys from object

  let LogKeys = (obj) => {
   for (const key in obj) {
       console.log(key)
       }
   }

  console.log('Log of keys from object: '); LogKeys(person)

  console.log('**********************************************************')

  // Function that logs keys and values using Object.entries()

  let LogKeysAndValues = (obj) => {
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
      }
  }

  console.log('Log of keys and values from object: '); LogKeysAndValues(person)

  console.log('**********************************************************')

  // Creating an array of objects

let arrayOfPersons = [
    {
        firstname: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    },
    {
        firstname: "John",
        lastName: "Rider",
        birthDate: "Feb 6, 1943",
        gender: "male"
    },
    {
        firstname: "David",
        lastName: "Castillo",
        birthDate: "Nov 21, 1245",
        gender: "male"
    }
]

// Function that logs birthdate if odd using for of and an if statement

let LogBday = (arr) => {
    for (const i of arr) {
        let bday = i.birthDate.split(' ')[2]
        if (bday % 2 != 0 ) {console.log(bday)}
    }
}

console.log('Log of all Odd birthdays: '); LogBday(arrayOfPersons)

console.log('**********************************************************')

// Using .map() to map over arrayOfPersons and console log them

console.log('Maped over arrayOfPersons: ')

let newArr = arrayOfPersons.map(e => {
    for (let [key, value] of Object.entries(e)) {
        console.log(`${key}: ${value}`);
      }
})

console.log('**********************************************************')

// Use .filter() to filter the persons array and console.log 0only males in the array

let males = arrayOfPersons.filter(e => e.gender == 'male');
console.log('Only male persons: ')
console.log(males)

console.log('**********************************************************')

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

let birthdaybefore = (obj) => {
    let birthyear = []
    for (const key in obj) {
        birthyear.push(obj[key].birthDate.split(' ')[2])
        } 
        birthyear.forEach(element => {
        if (element < 1990) {
            console.log(element)
        }
    });
}

console.log('Birthdays before 1990:')
birthdaybefore(arrayOfPersons)

console.log('**********************************************************')

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

console.log('People born before 1990: ')

let personlist = arrayOfPersons.filter(function (e) {
    let date = e.birthDate.split(' ')[2]
if (date < 1990) {console.log(date)}
});


