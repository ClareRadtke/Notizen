# Notizen

Keep track of your notes with [Notizen]("https://clareradtke.github.io/Notizen/)

![Video walkthrough of how to use Notizen]("./public/assets/images/walkthough.gif")

## User Story
AS A small business owner  
I WANT to be able to write and save notes  
SO THAT I can organize my thoughts and keep track of tasks I need to complete  

## Acceptance Criteria
GIVEN a note-taking application  
WHEN I open the Note Taker  
THEN I am presented with a landing page with a link to a notes page  
WHEN I click on the link to the notes page  
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column  
WHEN I enter a new note title and the note’s text  
THEN a Save icon appears in the navigation at the top of the page  
WHEN I click on the Save icon  
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes  
WHEN I click on an existing note in the list in the left-hand column  
THEN that note appears in the right-hand column  
WHEN I click on the Write icon in the navigation at the top of the page  
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column  

## Requirements:
  - [x] Application should have a db.json file
  - [x] The following HTML routes should be created:
    - [x] `GET /notes` should return the `notes.html` file
    - [x] `GET *` should return the `index.html` file
  - [x] The following API routes should be created:
    - [x] `GET /api/notes` should read the `db.json` file and return all saved notes as JSON
    - [x] `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client

  - [x] Application front end must connect to an Express.js back end
  - [x] Application back end must store notes with unique IDs in a JSON file
  - [ ] Application must be deployed to Heroku