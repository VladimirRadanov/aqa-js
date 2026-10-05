let todoData, userData;

async function getToDoObject() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
}

async function getUserObject() {
    return await fetch('https://jsonplaceholder.typicode.com/users/1')
}

Promise.all([getToDoObject(), getUserObject()])
    .then( responses => responses.map(async response => await response.json()) )
    .then( async (data) => {data = await Promise.all(data); return data; })
    .then( data => {
        todoData = data[0];
        userData = data[1];
        console.log('\nToDo Data:', todoData);
        console.log('\nUser Data:', userData);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

Promise.race([getToDoObject(), getUserObject()])
    .then(async (response) => await response.json())
    .then(data => {
        console.log('\nRace Result:', data);
    })
    .catch(error => {
        console.error('Error in race:', error);
    });