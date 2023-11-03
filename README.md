# Todo List Web Application

This is a simple Todo List web application built using React. It allows users to add, update, and delete tasks. The application provides a clean and intuitive user interface for managing your daily tasks.

## Features

- **Add Todo:** Add new tasks to your list.
- **Update Todo:** Edit existing tasks to modify their content.
- **Delete Todo:** Remove tasks from the list.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Getting Started

1. **Clone the repository:**

2. **Install Dependencies:**

3. **Run the Application:**

This will start the development server and you can view the application in your browser at `http://localhost:3000`.

## Usage

- To add a new task, type your task in the input field and click the "Add todo" button.
- To edit a task, click the edit icon next to the task. Make your changes in the textarea and click "Update todo."
- To mark a task as complete or incomplete, click on the task text.
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
