const mockData = [
    { title: "Introduction to Programming", content: "Programming is the process of creating software." },
    { title: "Understanding HTML", content: "HTML stands for HyperText Markup Language." },
    { title: "CSS Basics", content: "CSS is used to style HTML documents." },
    // Add more mock data as needed
];

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    if (searchTerm) {
        const filteredResults = mockData.filter(item =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.content.toLowerCase().includes(searchTerm)
        );
        displayResults(filteredResults);
    } else {
        searchResults.style.display = 'none';
    }
});

function displayResults(results) {
    searchResults.innerHTML = "";
    if (results.length > 0) {
        results.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result-item');
            resultDiv.innerHTML = `<h3>${result.title}</h3><p>${result.content}</p>`;
            searchResults.appendChild(resultDiv);
        });
    } else {
        searchResults.innerHTML = "<p>No results found.</p>";
    }
    searchResults.style.display = 'block';
}
