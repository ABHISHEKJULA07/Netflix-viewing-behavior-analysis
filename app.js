const books = [
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
    { title: 'Clean Code', author: 'Robert C. Martin' },
    { title: 'Introduction to Algorithms', author: 'Thomas H. Cormen' },
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
    { title: 'The Clean Coder', author: 'Robert C. Martin' },
    { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma' },
    { title: 'The Mythical Man-Month', author: 'Frederick P. Brooks' },
    { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler' },
    { title: 'The Art of Computer Programming', author: 'Donald E. Knuth' },
    { title: 'Structure and Interpretation of Computer Programs', author: 'Harold Abelson' },
    { title: 'Python Crash Course', author: 'Eric Matthes' },
    { title: 'Learning Python', author: 'Mark Lutz' },
    { title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell' },
    { title: 'The Road to React', author: 'Robin Wieruch' },
    { title: 'Head First Java', author: 'Kathy Sierra' },
    { title: 'The C Programming Language', author: 'Brian W. Kernighan' },
    { title: 'HTML and CSS: Design and Build Websites', author: 'Jon Duckett' },
    { title: 'JavaScript & JQuery: Interactive Front-End Web Development', author: 'Jon Duckett' },
    { title: 'Database System Concepts', author: 'Abraham Silberschatz' },
    { title: 'SQL for Smarties', author: 'Joe Celko' },
    { title: 'Data Science for Business', author: 'Foster Provost' },
    { title: 'The Data Warehouse Toolkit', author: 'Ralph Kimball' },
    { title: 'Big Data: A Revolution That Will Transform How We Live, Work, and Think', author: 'Viktor Mayer-Schönberger' },
    { title: 'Data-Driven: Creating a Data Culture', author: 'Hilary Mason' },
    { title: 'The DevOps Handbook', author: 'Gene Kim' },
    { title: 'Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation', author: 'Jez Humble' },
    { title: 'Clean Architecture', author: 'Robert C. Martin' },
    { title: 'Microservices Patterns: With Examples in Java', author: 'Chris Richardson' },
    { title: 'Cloud Native Java', author: 'Josh Long' },
    { title: 'Building Microservices', author: 'Sam Newman' },
    { title: 'Docker Deep Dive', author: 'Nigel Poulton' },
    { title: 'Kubernetes Up & Running', author: 'Kelsey Hightower' },
    { title: 'Learning GraphQL', author: 'Eve Porcello' },
    { title: 'Clojure for the Brave and True', author: 'Daniel Higginbotham' },
    { title: 'The Phoenix Project', author: 'Gene Kim' },
    { title: 'The Docker Book', author: 'James Turnbull' },
    { title: 'Test-Driven Development: By Example', author: 'Kent Beck' },
    { title: 'Extreme Programming Explained', author: 'Kent Beck' },
    { title: 'The Pragmatic Programmer: 20th Anniversary Edition', author: 'Andrew Hunt' },
    { title: 'The Linux Command Line', author: 'William Shotts' },
    { title: 'Unix Power Tools', author: 'Jerry Peek' },
    { title: 'Learning React', author: 'Alex Banks' },
    { title: 'React Up & Running', author: 'Stoyan Stefanov' },
    { title: 'Vue.js Up & Running', author: 'Callum Macrae' },
    { title: 'Angular Up & Running', author: 'Shyam Seshadri' },
    { title: 'Node.js Design Patterns', author: 'Mario Casciaro' },
    { title: 'Effective Java', author: 'Joshua Bloch' },
    { title: 'Pro Git', author: 'Scott Chacon' },
    { title: 'Learning SQL', author: 'Alan Beaulieu' },
    { title: 'SQL Queries for Mere Mortals', author: 'John L. Viescas' },
    { title: 'The SQL Programming Language', author: 'Joe Celko' },
    { title: 'Web Development with Node and Express', author: 'Ethan Brown' },
    { title: 'Python Data Science Handbook', author: 'Jake VanderPlas' },
    { title: 'Data Science from Scratch', author: 'Joel Grus' },
    { title: 'Deep Learning', author: 'Ian Goodfellow' },
    { title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow', author: 'Aurélien Géron' },
    { title: 'Natural Language Processing with Python', author: 'Steven Bird' },
    { title: 'Machine Learning Yearning', author: 'Andrew Ng' },
    { title: 'Neural Networks and Deep Learning', author: 'Michael Nielsen' },
    { title: 'The Hundred-Page Machine Learning Book', author: 'Andriy Burkov' },
    { title: 'Introduction to Machine Learning with Python', author: 'Andreas C. Müller' },
    { title: 'Hands-On AI with TensorFlow', author: 'Valliappa Lakshmanan' },
    { title: 'Machine Learning: A Probabilistic Perspective', author: 'Kevin P. Murphy' },
    { title: 'Bayesian Reasoning and Machine Learning', author: 'David Barber' },
    { title: 'Grokking Algorithms', author: 'Aditya Bhargava' },
    { title: 'Cracking the Coding Interview', author: 'Gayle Laakmann McDowell' },
    { title: 'Elements of Programming Interviews', author: 'Adnan Aziz' },
    { title: 'Algorithm Design Manual', author: 'Steven S. Skiena' },
    { title: 'Competitive Programming', author: 'Steven Halim' },
    { title: 'The Art of Computer Programming Vol 1', author: 'Donald E. Knuth' },
    { title: 'Artificial Intelligence: Foundations of Computational Agents', author: 'David L. Poole' },
    { title: 'Programming Pearls', author: 'Jon Bentley' }
];

// Array of quotes
const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" }
];

// Function to display current date
function displayDate() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-indexed
    const year = now.getFullYear();
    document.getElementById("date").innerHTML = `${day}, ${month}/${date}/${year}`;
}

// Function to display a random quote
function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex].quote;
    const author = quotes[randomIndex].author;
    document.getElementById("quote").innerHTML = `"${quote}" <br><strong>- ${author}</strong>`;
}

// Call the functions on page load
window.onload = function() {
    displayDate();
    displayQuote();
};

// Filter books based on user input and display results
document.getElementById("search").addEventListener("input", function() {
    const searchQuery = this.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchQuery));

    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear previous results

    filteredBooks.forEach(book => {
        const li = document.createElement("li");
        li.classList.add("book-item");
        li.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
    });
});
