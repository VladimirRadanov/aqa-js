const axios = require('axios');
const baseUrl = 'https://jsonplaceholder.typicode.com/';

describe("API Tests", () => {
    // 1. Test to get a post
    test("Get a post", async () => {
    const response = await axios.get(`${baseUrl}/posts/1`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    // console.log(response.data);
    expect(response.status).toEqual(200);
    })

    // 2. Test to create a post
    test("Create a post", async () => {
    const postData = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    const response = await axios.post(`${baseUrl}/posts`, postData, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    // console.log(response.data);
    expect(response.status).toEqual(201);
    expect(response.data).toMatchObject(postData);
    })

    // 3. Get comments for a post
    test("Get comments for a post", async () => {
    const response = await axios.get(`${baseUrl}/posts/1/comments`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    // console.log(response.data);
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    })

    //4. Get all posts by a user
    test("Get all posts by a user", async () => {
    const response = await axios.get(`${baseUrl}/users/1/posts`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    })

    //5. Create a user
    test("Create a user", async () => {
    const userData = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'john.doe@example.com',
        address: {
            street: "Kulas Light"
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    };
    const response = await axios.post(`${baseUrl}/users`, userData, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    //console.log(response.data);
    expect(response.status).toEqual(201);
    expect(response.data).toMatchObject(userData);
    })

});
