# Car-race
This is my first project bigger than 50 lines (almost 100 atm). In this project, 3 cars are compared by giving its name, speed gain per sec and max speed. after that, a function adds speed per sec to the current speed of the car in a 1 sec Interval. This is done for all 3 cars. Now, the time every car needs to get to its max. speed is compared. 

finished: 

1. Replacing the parameters used to determine the speed of each car. Instead of "speed gained per second", I want to use "Meters gained per sec". With this, I can find out how much km/h the car drives and use that to determine how much Time every car needs to get to a certain point (in meters).

2. Not limiting the max. racing participants to 3. Instead, doing a game loop which is left when a set variable is set to true; by the user. While this Variable is set to false; the game should ask for brand, speed and max. speed again and again. 

next steps will be:

3. a graphical user interface. I am currently not sure about the exact way I will display my game.

update: In the files Index.html and compare.js you can see that I managed to create a graphical interface. Now I am about to connect the logic with the graphic. Until now it is possible to determine color and speed of the car as well as distance of the race

4. making it possible to drive with several vehicles at the same time. My idea is to let the user enter speed etc. for each car. After all data has been processed in the background, all cars should be displayed in the graphical interface at the same time. 
