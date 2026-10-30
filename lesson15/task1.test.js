const axios = require('axios');
const baseUrl = 'https://jsonplaceholder.typicode.com/';

describe("Task 1 - check status code for wrong url", () => {
    test("Check status code for wrong url", async () => {
        try {
            const response = await axios.get(`${baseUrl}/wrong-url`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        } catch (error) {
            console.log(error.response.status);
            expect(error.response.status).toEqual(404);
        }
    })
});