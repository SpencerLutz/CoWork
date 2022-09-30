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
    - Users can see what their friends are working on, their todo lists (if set to 'public' or 'friends only'), 

## Roadmap

The project is in its very early stages. Most of the work done so far has been on creating a scalable and efficient codebase that is set up to handle the dozens of features I would like to implement. Currently, the backend is complete (for now), and the frontend has the most important features of the todo list, including viewing, adding, and deleting assignments. Future work includes (roughly in order):

1. Finish individual task page
    - Menu options in heading to modify, share, and delete
    - Editable description and notes section
2. Allow starting/timing tasks
    - Start buttons in list and task pages
    - Pomodoro option
    - Task active functionality
    - Estimated work time for tasks, days, weeks
