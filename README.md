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
  3. Look for all Questions& Answer and define as an Array of questions in the JS  ( 12 questions) in total 
  4. Then Set up a Timer based on SetInterval Function and its variables and eventListener Buttons to start the Quiz. Set timer in 60 seconds
  5. Definition fo the Main Functions such as newQuiz in which is used the SetInterval for timer and the invoke of the starQuiz function
  6. Added the eventlistener for click on buttons related to specific selection function for options to be selected by the user.
  7. Create a validateAnswer function If the question is answered wrong, 10 seconds will be deducted to the timer, If the question is answered correctly, will add 1 to   the score in a counter for correct answer. Also display the Wrong or Correct message in the div based on the selection
  8. when timer reaches to 0 the quiz gives you the score
  9. Ask for initials, if is not provided an alert will request it
  10. Once the initials are given, with the scores it is created a function to store it in a localResources, if console opens it can be display
  11. the HighScore list also can be shown accesing in the highScore button in the Nav Bar, and also is added a reset button.
  

### Links 

     **Repository Link**:   https://github.com/Prsoto/HomeWork4
     
     **Live Link**:         https://prsoto.github.io/HomeWork4/
     
     

