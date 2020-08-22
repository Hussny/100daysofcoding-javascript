let response = fetch("https://regres.in/api/users")


.then(Response => console.log(Response))


/*fetch('https://regres.in/api/users')
//.then (res => console.log(res))
.then(res => res.json())
.then (res=> {
    if(res.ok){
        console.log('Success');
    } else{
        console.log('Not Successful');
    }
})
*/