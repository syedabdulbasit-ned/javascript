// Asynchronous function
async function getData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

    try {
        const response = await fetch(apiUrl); // Fetch data
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json(); // Convert to JSON
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Finished fetching data.");
    }
}

getData();
