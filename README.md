# CoWork

## Overview

CoWork is a (work in progress) web app that focuses on fostering an environment for students to work together on assignments. The completed site will allow students to share schedules and todo lists, see what their classmates are working on, compare their progress against their peers, and share tips and study guides.

## Key Features

The goal of CoWork is to allow students to collaborate more easily in classes and introduce a social motivator for productivity. Key features include:

- Personal todo list for each user listing assignments for each class
    - Users will be able to add and remove their own personal tasks as well
- Productivity timer that will allow users to keep track of their work
    - App will use data on how long users spend on tasks in order to give an estimate of how long a given assignment will take, allowing for users to more accurately plan their workloads
    - Users can customize the timer system with time-management options like [Pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique)
- Class environments that users can subscribe to in order to automatically recieve assignments in their todo list
    - Users can find friends in their classes, schedule study sessions, and communicate about assignments
    - Students can see how many people in the class have completed an assignment or are currently working on it to gague their progress
- Social system allowing users to add friends
    - Users can see what their friends are working on currently and their todo lists
    - Users' tasks can be set to 'public', 'friends only', or 'private' to customize visibility
    - Users can earn achievements and streaks which they can advertise on their profile
    - Study together sessions allow users to hold each other accountable
    - Users can share assignment 'templates', their friends can use these to create their own assignments with custom descriptions, notes, etc.
- Calendar for time-blocking
    - Calendar will display assignment due dates and events
    - Users can [time-block](https://en.wikipedia.org/wiki/Timeblocking) their assignments and study sessions, informed by the estimated time calculated by the app
    - Users can share calendars with friends and sync with other calendar applications like Google Calendar or Apple's calendar app

## Roadmap

The project is in its very early stages. Most of the work done so far has been on creating a scalable and efficient codebase that is set up to handle the dozens of features I would like to implement. Currently, the backend is complete (for now), and the frontend has the most important features of the todo list, including viewing, adding, and deleting assignments. There is no login functionality; every client accesses the same user. Future work includes (roughly in order):

1. Finish individual task page
    - Menu options in heading to modify, share, and delete
    - Editable description and notes section
2. Allow starting/timing tasks
    - Start buttons in list and task pages
    - Pomodoro option
    - Task active functionality
    - Estimated work time for tasks, days, weeks
3. User functionality
    - Login/logout and authentication
    - User settings and profile page
    - Visibility settings for tasks
4. Social features
    - Add/remove friends
    - Sharing tasks/templates
    - View friends' activity in side panel
    - Study together sessions
5. Class features
    - Create/join/leave classes
    - Subscribe to class assignments
    - Progress sharing
6. Calendar page
    - Sync assignments and courses with calendar
    - Time-blocking feature
    - Sync with external calendars
7. Chat functionality (group chats and direct messages)

## Technologies

CoWork uses the MERN Stack: [React](https://reactjs.org/) and [Redux](https://redux.js.org/) for the frontend, [Express](https://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend, and [MongoDB](https://www.mongodb.com/) as a database. To tie these together, I use [Axios](https://axios-http.com/docs/intro) and [Mongoose](https://mongoosejs.com/).
    
