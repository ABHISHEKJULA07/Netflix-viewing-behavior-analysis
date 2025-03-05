# Library Management System

A Library Management System (LMS) built using HTML, CSS, JavaScript, and MySQL to manage books, search for them, and display details with random author quotes and the current date.

## Features:
- View book details (Title, Author, etc.)
- Search books by title
- Display random author quotes
- Shows current day, date, and year

## Technologies Used:
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: MySQL for database storage
- **Database**: MySQL to store book information and quotes

## MySQL Setup:
1. **Create Database**: 
   - Open MySQL Workbench or any MySQL client.
   - Create a database using:
     ```sql
     CREATE DATABASE library_management;
     ```

2. **Create Tables**:
   - Book table to store book details:
     ```sql
     CREATE TABLE books (
         id INT AUTO_INCREMENT PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         author VARCHAR(255) NOT NULL
     );
     ```

   - Quotes table to store random quotes:
     ```sql
     CREATE TABLE quotes (
         id INT AUTO_INCREMENT PRIMARY KEY,
         quote TEXT NOT NULL,
         author VARCHAR(255) NOT NULL
     );
     ```

3. **Insert Data**:
   - Insert books:
     ```sql
     INSERT INTO books (title, author) VALUES
     ('JavaScript: The Good Parts', 'Douglas Crockford'),
     ('Clean Code', 'Robert C. Martin'),
     ('Introduction to Algorithms', 'Thomas H. Cormen'),
     ('The Pragmatic Programmer', 'Andrew Hunt');
     ```

   - Insert quotes:
     ```sql
     INSERT INTO quotes (quote, author) VALUES
     ('“The only way to do great work is to love what you do.”', 'Steve Jobs'),
     ('“Simplicity is the soul of efficiency.”', 'Austin Freeman'),
     ('“Code is like humor. When you have to explain it, it’s bad.”', 'Cory House');
     ```

4. **Connect Database**:
   - The JavaScript file (scripts.js) should be updated to fetch data from your MySQL database.

## How to Run:
1. Clone this repository.
2. Set up the MySQL database and tables as mentioned above.
3. Ensure your MySQL server is running.
4. Open `index.html` in a browser to view the Library Management System.

## License:
This project is licensed under the MIT License - see the LICENSE file for details.
