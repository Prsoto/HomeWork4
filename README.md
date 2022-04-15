# 04 Web APIs: Code Quiz
Repo for HomeWork Activity 4

## Task of the HomeWork 

this week’s homework requires to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

## Mock-Up

The following image shows the web application's appearance and functionality for reference that I followed :

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](04-web-apis-homework-demo.gif)



Code Quiz
This is a timed coding quiz with multiple-choice questions. This app is written from scratch.




## Guidance

  In order to generate the code I focused on the following premises
  
  1. First an HTML file was built to represent 4 main Divs and a Nav Bar where HihgScores buttons and Timer will be display
  2. Learned how to use style.display:"none" to hide and show the divs depending the needs.
  3. Look for all Questions& Answer and define as an Array of questions in the JS  ( 12) in total 
  4. Then Set up a Timer based on SetInterval Function and its variables and eventListener Buttons to start the Quiz. Set 
  5. Definition fo the Main Functions such as 
  6. 
  7. There is a main Function called questions that relays of a variable name **control** which ends the cycle when all conditions for inputs are made based on a Do / While cycle 
  8. Inside the function there is another variable **BuildPass** that enables the user to break the functions in case the password is not generated so it does not loop forever.
  9. Inside the function question it is set the conditionals for the password requirements such the required lenght , and the ability to include at least one Special/Lower&Upper Case letter / special character to the password
  10. The is a function to generate password which is a combination of a usage of **for** and pushing element of the arrays to create a new password
  11. Also is important the usage of the RAMDOM function math.random to generate the ramdom character to be added.
  12. Finally a writefunction linked to the html with the interactive buttom based on click.
  13. Most of the code is being pulled and adapted from activities performed in classes as background to be applied

### Links 

     **Repository Link**:   https://github.com/Prsoto/HomeWork4
     
     **Live Link**:         https://prsoto.github.io/HomeWork4/
     
     
Installation
Download or clone repository
Open the main page (index.html) on your browser to view webpage
Use a text editor to view all coding, Visual Studio Coding is recommended.
Instructions
Click "Start Quiz"

Timer on the top right will start to run
Total time is 150 second with 12 questions in total
The "View High Scores" link on the top left will direct the user to view all current high scores
A series of questions are presented with multiple choice answers

If the question is answered wrong, 10 seconds will be deducted to the timer
If the question is answered correctly, will add 1 to the score
After a question is answered, it will show on the bottom whether it is answered correctly or wrong. If wrong, will also show the correct answer.
When all questions are answered or the timer reaches 0, game is over

When game is over, the user can enter initial and score, click "Submit" to save to high scores to local storage

Then it will show a list of saved high scores

The user then will have the option to click on "Go Back" to start quiz again, or "Clear High Scores" to clear saved scores


