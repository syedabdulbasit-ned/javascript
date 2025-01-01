
function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "Alice" });
            } else {
                reject("User not found.");
            }
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "Post 1" },
                { id: 2, title: "Post 2" },
            ]);
        }, 1000);
    });
}

// Chaining Promises
getUser(1)
    .then((user) => {
        console.log("User:", user);
        return getPosts(user.id);
    })
    .then((posts) => {
        console.log("Posts:", posts);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


    

