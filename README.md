# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Blog App (Version 1.0.0)

## Author's Note:

Hello! This blog app started as a web app to learn more about using EJS, Node.js, and styling with HTML and CSS. Now, I've decided to turn it into a React app to make it more complex and scalable.

This is a five-stage build! Currently, it is in version 1.0.0. Here is a peek at what's to come

### Version 1.0.0: Single-user using local storage
 - Transformd Node application into a React application.
 - Includes Home, Feed, and Create pages
 - Includes post creation, modification, and deletion functionality.
 - Stores posts in localStorage
### Version 1.1.0: Single-user using remote storage (MongoDB connection)
 - Posts will be stored in a MongoDB database instead of localStorage
### Version 1.2.0: Filter/sort functionality, post tags
 - Users will be able to add tags to posts
 - Users will be able to filter posts by tags or dates, search for keywords, and sort posts by date, title, or tags
### Version 2.0.0: Multiple user support and user page functionality
 - Add user account creation/modification
 - Add user profile page
 - User profile name will be included in post creation
 - Ability to View other profiles
 - Store user information in MongoDB
### Version 2.1.0: User account security features
 - Implement salted and hashed password storage for security

Stay tuned!