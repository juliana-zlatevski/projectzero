# Project Zero

Project Zero is a modern and virtual take on tamagotchi pets via a web browser. Any user with an internet connection can play without the creation of an account.

## User Story

The user will first be greeted with a pop-up message and will have the option to pick their own name for their pet alien, which will initiate the game.

The pet alien will be initiated at age 0 with full health.

The goal of the game is to continue interacting with your pet based on which health stats are depleting so that he makes it to age 1000 (age will increase by 40 yrs per second for 25 second total game time.) 

Health metrics will increase as follows:

Hunger - 1 pt per 3 seconds\
Boredom - 2 pts per 3 seconds\
Sleepiness - 2.5 pts per 6 seconds

Users can feed their pet alien, initiate a nap, or send the alien to play video games. Health metrics will be boosted as follows:

Feeding: -1pt per click\
Playing: -1pt per click\
Sleeping: -1pt per click

As time progresses, the alien will grow in age and its physical appearance will begin to change from vibrant to dull. If any of the health levels reach 7 or higher, the alien will begin to flash on the screen. Once any health levels reach 10, the alien will “beam up” and out of view, ending the game.

Users have the option to replay as often as they like using the retry icon on the top right. If a user forgets the rules, they may open them up at any time by clicking on the question mark icon on the top right.

## Wireframes
![Alt text](imgs/welcome.png?raw=true "Welcome")
![Alt text](imgs/gamestart.png?raw=true "Game Start")

## Technologies
HTML, CSS, JS