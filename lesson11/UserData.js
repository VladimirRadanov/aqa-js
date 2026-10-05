export default class UserData {

    constructor(data) {
        this.id = data.id || null;
        this.name = data.name || '';
        this.username = data.username || '';
        this.email = data.email || '';
        this.address = data.address || {};
        this.phone = data.phone || '';
        this.website = data.website || '';
        this.company = data.company || {};
    }

}

async function loadData() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rawData = await response.json();
        console.log('\nUser Constructor Data:', rawData);
        const userData = new UserData(rawData);
        console.log('\nUser Data:', userData);
    } catch (error) {
        console.error('Error fetching User data:', error);
    }
}

loadData();