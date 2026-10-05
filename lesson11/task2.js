let todoData, userData;

function getToDoObject() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
}

function getUserObject() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
}

Promise.all([getToDoObject(), getUserObject()])
    .then( responses => responses.map(response => response.json()) )
    .then( data => {data = Promise.all(data); return data; })
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
    .then(response => response.json())
    .then(data => {
        console.log('\nRace Result:', data);
    })
    .catch(error => {
        console.error('Error in race:', error);
    });