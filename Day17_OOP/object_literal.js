/* Defining object */

let person = {
first_name:'Liam',
last_name: 'Summaya',

/* method */

getFunction : function(){
return (`The name of the person is
${person.first_name} ${person.last_name}`)
},

/* object within object */

phone_number : {
mobile:'12345',
landline:'6789'
}
}
console.log(person.getFunction());
console.log(person.phone_number.landline);