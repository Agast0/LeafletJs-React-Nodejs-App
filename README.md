### 🌍 Application Overview

This application allows users to save GPS coordinates by clicking on a map, view previously saved points, and download the saved points as a JSON file. It consists of both frontend and backend components, developed separately.

### ✨ Features

- **Map with Leaflet.js:** Displays an interactive map where users can click to save GPS coordinates.
- **Save Point Button:** Saves the GPS coordinates of the center point of the map along with the date when the "Save Point" button is clicked.
- **List of Saved Points:** Displays a list of previously saved points on the right side of the page. Clicking on a point in the list will display the marker on the relevant GPS coordinate.
- **Delete Saved Points:** Allows users to delete any saved point from the list if desired.
- **Download Button:** Enables users to download the saved points as a JSON file.
- **Popup for Save Point:** The "Save Point" button appears when users open the popup by clicking on the marker.

### 🖥️ Frontend Technologies

- **React:** Used to build the frontend user interface.
- **Leaflet.js:** Provides interactive maps on the frontend.

### 🛠️ Backend Technologies

- **Express:** Provides the backend server framework for handling HTTP requests.
- **Joi Validation:** Used for input validation in the backend.
- **Swagger UI:** Offers an interactive API documentation available at http://localhost:3001/api-docs/.
- **Custom Logger:** Logs server-side activities for debugging and monitoring purposes.
- **File Storage:** Saves the JSON data in a file instead of using a database.

### 🚀 Usage

1. **Start Backend Server:** Navigate to the backend directory and start the backend server first.
2. **Start Frontend Server:** Navigate to the frontend directory and start the frontend server.
3. **Access the Application:** Open your web browser and access the application to use its features.

### 🛠️ Build Instructions

For detailed instructions on how to build and run the frontend and backend separately, refer to the frontend and backend README files.
