# MERN Hikes Frontend

This repository contains the frontend of a MERN app focused on hikes. It is based on the Net Ninja YouTube series, adapting the concept from a simple single-page workout buddy to a hikes application.

## Features

- **Authentication and Authorization:** Backend authentication and authorization are implemented using Bcrypt and JSON Web Token. Unlike the original series, this app secures only the non-GET routes, providing a balance between security and accessibility.

- **Dynamic Hike Details:** The app utilizes the `useParams` hook from React to allow users to click on a single hike and view more details. All necessary data is initially loaded with the hikes, eliminating the need for additional API calls when exploring hike details.

- **Responsive Layout with CSS Grid:** A responsive CSS grid is employed to render hikes evenly across various screen sizes, ensuring a consistent and visually appealing layout.

- **Cloudinary Integration for Hike Photos:** Hike photos are stored in Cloudinary, enhancing the app's performance and ensuring a seamless user experience.

## Deployment

The backend of this MERN app is hosted on Heroku, while the frontend is deployed on Netlify.

## Getting Started

To run the app locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.

## Technologies Used

- React
- Bcrypt (for authentication)
- JSON Web Token (for authorization)
- CSS Grid
- Cloudinary (for image storage)


