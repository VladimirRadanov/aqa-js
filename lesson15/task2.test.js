const axios = require('axios');
const baseUrl = 'https://jsonplaceholder.typicode.com/';

const test_param = {postId: 1};
const test_header = {'Content-Type': 'application/json'};

describe("Task 2 - check header and params", () => {
    test("Check header and params", async () => {
        const response = await axios.get(`${baseUrl}/comments`, {
            params: test_param, headers: test_header
        });
        console.log(response.data.forEach(comment => {
            console.log(JSON.stringify(comment).split(',')[0]);
        }));
        console.log(response.data.length);
        console.log(response.status);
        console.log(response.headers['content-type']);
        
        expect(response.status).toEqual(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
        response.data.forEach(comment => {
            expect(comment.postId).toEqual(test_param.postId);
        });
    })
});