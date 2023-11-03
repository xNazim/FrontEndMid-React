# Todo List Web Application

This is a simple Todo List web application built using React. It allows users to add, update, and delete tasks. The application provides a clean and intuitive user interface for managing your daily tasks.

![Alt text](/screenshots/front1.png?raw=true)

## Features

- **Add Todo:** Add new tasks to your list.
- **Update Todo:** Edit existing tasks to modify their content.
- **Delete Todo:** Remove tasks from the list.
- **Dynamic Styling:**  Input field borders change dynamically for a visually appealing experience.
- **Intuitive UI:**  Clean and intuitive interface for efficient task management.

## Directory Structure

- **`components/`**: Contains React components.
- **`images/`**: Stores application images.
- **`App.css`**: Stylesheet for the application.
- **`App.js`**: Main application file rendering the `TodoList` component.
- **`index.css`**: Root stylesheet for the application.
- **`index.js`**: JavaScript file rendering the React app into the DOM.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## How to Run the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/xNazim/FrontEndMid-React.git
   cd FrontEndMid-React

## Usage

- To add a new task, type your task in the input field and click the "Add todo" button.
- To edit a task, click the edit icon next to the task. Make your changes in the textarea and click "Update todo."
- To delete a task, click the delete icon next to the task.

## Deployment

This application is configured for deployment using GitHub Actions and AWS services. The deployment workflow includes the following steps:

- **Install AWS CLI v2:** Installs the AWS Command Line Interface version 2.
- **Node.js Setup:** Sets up Node.js version 20.x.
- **Install Dependencies:** Installs the project dependencies using npm.
- **Build Application:** Builds the React application for production.
- **Upload App to S3 Bucket:** Syncs the build files with the specified S3 bucket.
- **Create CloudFront Cache Invalidation:** Invalidates the CloudFront cache to ensure the latest version of the application is served to users.

The deployment workflow can be triggered manually using the GitHub Actions workflow_dispatch event or automatically upon pushing changes to the `main` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
