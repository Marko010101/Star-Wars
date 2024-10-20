# Star Wars Website

### Technologies

In this project, I used React for the frontend, styled-components for styling, and react-router-dom for routing. I aimed to write as much of the project by hand as possible and chose not to use Tanstack Query, even though it could have been helpful for fetching, caching, and pagination.

### Main Page & Search Functionality

The main page displays a list of characters, and I implemented live search with debouncing. I chose live search because sending multiple HTTP requests for only 82 characters doesn’t significantly impact performance.

### Pagination

I created a button for each page of results—since there are only 9 pages for the 82 characters, it's manageable to show all the buttons. Additionally, there are previous and next buttons to make navigation easier. I could have saved the page number in the URL as a query parameter to retain the page on refresh, but I kept it simpler for now.

### Details Page & Hidden Info

On each character's details page, I initially display only essential information. Below this, there are four buttons for additional hidden details (films, species, starships, and vehicles). Clicking these buttons toggles the corresponding data, but the button without data will not be clickable. I send new HTTP requests for each button click and display only the relevant information. If the same button is clicked again, the info is hidden. I created separate files for each hidden detail component, but they share the same styles to optimize performance (I couldn’t reuse a single file because the data structures are different).

### Project Timeline

I completed the main requirements for this project in two days including paggination and implemented responsiveness on the third day.

### Check out the live version of my project here : https://sstarwarss.netlify.app/

### How to Launch the Project

You need to have Node.js installed on your computer. After that, clone this repository using the command line or GitHub Desktop.
1.Use the following command to clone the repository:git clone https://github.com/Marko010101/Star-Wars.git

2. Navigate to the project folder: cd Star-Wars

3.Install the dependencies: npm install

4.Run the development server: npm run dev

Follow the link provided in the terminal by pressing CTRL + left-click, or copy and paste the link into your browser's address bar.

