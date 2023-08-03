# Course Selling App - README

Welcome to the Course Selling App! This is a web application designed to allow users to buy and sell courses online. This README file will guide you through the setup and usage of the app.
## Demo
<iframe width="688" height="387" src="https://www.youtube.com/embed/qSP23P9KFjQ" title="example" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Frontend Installation](#frontend-installation)
4. [Backend Installation](#backend-installation)
5. [Usage](#usage)
6. [Frontend Dependencies](#frontend-dependencies)
7. [Backend Dependencies](#backend-dependencies)

## Introduction

The Course Selling App is built using modern web technologies. It has a frontend, which is responsible for the user interface and interactions, and a backend, which handles data management and communication with databases and external services.

## Features

- Browse and search for available courses.
- View course details, including the instructor, price, and curriculum.
- Add courses to the shopping cart for purchase.
- Checkout and complete the purchase process.
- Sellers can create accounts and list their courses for sale.
- Admin panel to manage users, courses, and transactions.

## Frontend Installation

To get started with the frontend of the Course Selling App, you need to have Node.js installed on your system. Clone the repository from the provided source and navigate to the root directory of the frontend.

1. Open the terminal and navigate to the `client` directory.
2. Run the following command to install the required dependencies:

```bash
npm install
```

## Backend Installation

To get started with the backend of the Course Selling App, you need to have Node.js and MongoDB installed on your system. Clone the repository from the provided source and navigate to the root directory of the backend.

1. Open the terminal and navigate to the `server` directory.
2. Run the following command to install the required dependencies:

```bash
npm install
```

## Usage

To run the Course Selling App locally, you need to start both the frontend and backend servers.

### Frontend Usage:

1. Navigate to the `client` directory in the terminal.
2. Run the following command to start the development server:

```bash
npm run dev
```

This will launch the frontend on a local development server, accessible at `http://localhost:3000`.

### Backend Usage:

1. Ensure that MongoDB is running on your system or set up a MongoDB connection URI in a `.env` file in the `server` directory.

```
MONGODB_URI=your_mongodb_uri_here
```

2. Navigate to the `server` directory in the terminal.
3. Run the following command to start the backend server:

```bash
npm start
```

The backend will start and be available at `http://localhost:8000`.

Ensure that both the frontend and backend are running simultaneously for the full functionality of the app.

## Frontend Dependencies

The frontend of the Course Selling App relies on the following dependencies:

- @emotion/react: ^11.11.1
- @emotion/styled: ^11.11.0
- @mui/icons-material: ^5.14.0
- @mui/material: ^5.14.0
- axios: ^1.4.0
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.14.2
- recoil: ^0.7.7

## Backend Dependencies

The backend of the Course Selling App relies on the following dependencies:

- cors: ^2.8.5
- dotenv: ^16.3.1
- express: ^4.18.2
- jsonwebtoken: ^9.0.1
- mongoose: ^7.3.4
