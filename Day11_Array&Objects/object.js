const personOne={
    name: 'Hussein',
    age: 24,
    address: {
        city: 'Nairobi',
        status: 'Alhamdhulillah'
    }
}

const personTwo={
    name:'Galmo',
    age: 24,
    address:{
        city:'Marsabit',
        status:'Crush'
    }

}

const {name, age, ...rest} = personTwo;

console.log(name);
console.log(age);
console.log(rest);

