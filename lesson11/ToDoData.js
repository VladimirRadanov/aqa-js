export default class ToDoData {
    
    constructor(data) {
        this.userId = data.userId || null;
        this.id = data.id || null;
        this.title = data.title || '';
        this.completed = data.completed || false;
    }
}

async function loadData() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rawData = await response.json();
        console.log('\nTo Do Constructor Data:', rawData);
        const toDoData = new ToDoData(rawData);
        console.log('\nTo Do Data:', toDoData);
    } catch (error) {
        console.error('Error fetching To Do data:', error);
    }
}

loadData();