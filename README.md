# Wild ToDo

![Welcome to Wild ToDo!](https://raw.githubusercontent.com/Arrief/wild-todo/main/public/images/wtd-landing.png)

## <a href="https://wild-todo.netlify.app/" target="_blank">Live Demo ▶</a>

## Table of Contents

- [Wild ToDo](#wild-todo)
  1. [Live demo](#-live-demo)
  2. [Introduction](#-introduction)
  3. [Features](#-features)
  4. [Installation](#-installation)
  5. [Development info](#-development-info)
  6. [Created with](#-created-with)

## Introduction

**Wild ToDo** is an online note-taking application, allowing you to keep track of your daily tasks in form of to-do notes. Organize your notes into different categories and use the filter tool to focus on tasks from a certain category, e.g. your household chores, first. No matter if you are on PC, tablet or phone, Wild ToDo is here to help you organize your day and get stuff done - let's get to work!

## Features

- Add and delete to-do notes to keep track of your daily tasks
- Optionally choose from a range of categories to label your notes
- Filter by category to select which notes are displayed
- Fully responsive for a great user experience on desktop, laptop, tablet and mobile devices

![Overview of daily tasks](https://raw.githubusercontent.com/Arrief/wild-todo/main/public/images/wtd-tasks.png)

## Installation

After cloning this repository from Github, use the terminal to cd into the folder, then run `npm install`.

After that, run `npm start` and keep your terminal window open and running while using the application locally.

## Development info

To-do lists are a tried and tested way to introduce learners to **React state management** and demonstrate the power and usefulness of **React single-page applications**. This one started out as such a lesson when React was first covered in Wild Code School's bootcamp. Initially a very simple application with almost no styling and only the ability to add new paragraphs of user input to a list, the lesson impressed me and sparked my curiosity.

I decided to recreate the code from the lesson to deepen my understanding, then added a landing "page", which in reality is just a **component conditionally displayed based on state**. To challenge myself even further, I extended the core functionality of the app, adding a **list of categories** which the user can choose from and assign one of them as a label for each of their tasks. From here the next step was to add a state based **filter option**, allowing the user to display only tasks of a specific category.

All of this proved to be a very valuable lesson in React state management, handling multiple different state updates at the same time and making sure all components render correctly, as well as in applying the **Javascript methods filter, findIndex and slice**. Lastly I worked on a **responsive, distinct UI design** with CSS that fits the theme of to-do notes and references Wild Code School in name and theme color.

## Created with

- React v18.0
- JavaScript
- HTML & CSS

### Background image source

<a href="https://static8.depositphotos.com/1570716/1049/i/950/depositphotos_10495668-stock-photo-cork-board-background.jpg" target="_blank">Depositphotos.com</a>
