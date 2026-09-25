const users = [
    {email: "john.doe@example.com", age: 30},
    {name: "Jane Smith", age: 25},
    {name: "Bob Johnson", email: "bob.johnson@example.com"}
]

for (const user of users) {
    console.log(`Name: ${user?.name}, 
        Email: ${user?.email}, 
        Age: ${user?.age}`)
}

console.log ('--------------------')

for (const user of users) {
   const {name, email, age} = user
   console.log(
    `Name: ${user?.name}, 
    Email: ${user?.email}, 
    Age: ${user?.age}`)
}