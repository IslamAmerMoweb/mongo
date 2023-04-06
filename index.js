const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url)
const dbName = 'myProject';
async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    // the following code examples can be pasted here...

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());



const todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    }
]

try {
    const res = await db.collection('todo').insertmany(todos)
    console.log(res);
    client.close()
} catch (err) {
    console.log(err);
    client.close()
}

// try {
//     const res = await db.collection('todo').find({completed:false, id:9}).toArray()
//     console.log(res);
//     client.close()
// } catch (err) {
//     console.log(err);
//     client.close()
// }

try {
    const res = await db.collection('todo').find($or[{ completed: false, id: 9 }]).toArray()
    console.log(res);
    client.close()
} catch (er) {
    console.log(res);
    client.close()
}