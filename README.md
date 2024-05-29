# React.js with Tailwind CSS Starter

This repository contains a basic setup for a React.js project with Tailwind CSS.

## Installation

Before proceeding with the installation, make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone <repository-url>

2. Install Dependencies
Navigate to the project directory and install the required dependencies by running:

cd <project-directory>
npm install


### 2. Install and initialize tailwindcss in the the project 

npx create-react-app my-project
cd my-project

### 3.Configure the tailwindconfig file: 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


### 4. Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

@tailwind base;
@tailwind components;
@tailwind utilities;


### 5. Start your build process

npm run start

