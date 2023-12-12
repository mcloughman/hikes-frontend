# MERN Hikes Front End

## This is the frontend of a MERN app based on the Net Ninja YouTube series. While the Net Ninja uses a simple single page workout buddy as the subject, this app pertains to hikes.
- Authentication and Authorization incorporated on the backend using Bcrypt along with JSON Web Token. While the series required authorization to access all routes, this app only protects the NON GET routes
- This app incorporates the useParams hook from React so the user can click on a single hike to see more details. The thought being that all of the data is imported when the hikes are initially loaded. There's no need to make another API call to see the details.
- A CSS grid is used to render the hikes evenly and responsively.
- The hike photos that are rendered are stored in Cloudinary.
