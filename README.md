# Phase 4 Project

This project was developed as a project at Flatiron's Flex program.  Phase 4 covers the use of Rails.

# Getting Started

After cloning the repository, be sure to start at the root directory, ph-4-project-exercise.  There, enter the following below into the terminal to install all the Gemfiles.  

```
bundle install
```
Afterwards, enter 'cd client' at the terminal to enter the following: 

```
npm install
```
Once all has been install return to the exercise directory and enter to open the app at the browser.

```
foreman start -f Procfile.dev
```

# About The Project

This project is a simple exercise app tracker which allows users to log in all exercises done on that day.  After the user creates an account, the user clicks on the "Start Exercise" button to begin.  There, the user selects the muscle targeted, then the exercises below.  After selecting the exercise, the user head on to the bottom of the screen, where one inputs the weight and targeted repetition.

While some exercises require equipment such as barbell, dumbbells, cables, etc., other exercises are calisthenics (also known as bodyweight).  These exercises provide the option to be either solely bodyweight or added weight (such as a weighted vest).  If BW (bodyweight) is selected, the user may proceed after entering the targeted repetitions.

Additionally, the app contains isometric exercises where a user hold a certain position for a period of time.  A timer is provided and tracked for user progression.

Because this app does not monitor specific sets for exercises, every submission is considered one set.  When the user selects the same exercise again, the previous values of weight and targeted repeitions are already provided.  If the user would like to change it, that person may do so on either field, or click the clear button to reset the fields.

User can head on to the Progression page where all exercises were performed on that day.  Click on the button to see all the exercises performed.

To get the most out of this app, do not remove exercises just because it is incomplete.  To be able to track incompleted sets allow consistency and accurate progression.  The user may delete only the last set submitted in case of accidental input values.

# Phase-Related Features 

One of the big aspects of this project is validations.  When a user enter insufficient data at the input field, the frontend will return an error below an prevent faulty data at the database.  Four links where error handling occurs are Signup, Login, Start Exercise, and Profile.

Additionally, another aspect is the login and signup page, where user creates an account (signup) to login.  This covers authentication and authorization, respectfully.  You may take a look at the behind-the-scenes at the users controllers, application controller, and session controller, (and their models), as well as the application.rb in the config file.

Versions used:
Rails: 7.0.5
React: 8.18.0
React Router Dom: 5.3.0
