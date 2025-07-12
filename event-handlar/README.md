📘 React Posts App — 

This project is a fully functional React application that demonstrates how to fetch and display data from an external API using React’s core concepts such as useState, useEffect, and conditional rendering. It handles API calls gracefully with loading and error states, and includes pagination and performance optimization through dependency management.

Data State – to store the list of fetched posts.

Loading State – to show a loading indicator while the request is in progress.

Error State – to show a user-friendly error message if the request fails.

📌 Features Implemented:

A spinner or loading text appears while the data is being fetched.

If an error occurs during the request, an error message is displayed.

Once the data is successfully fetched, it is rendered as a list of post titles and bodies.

Previous Button:

Decreases the page count by 1.

Is disabled on the first page (page === 1).

Next Button:

Increases the page count by 1.

Is disabled if the current page is the last (based on total number of posts/pages).

The current page number is displayed between the navigation buttons.

video:
