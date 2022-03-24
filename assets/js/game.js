

var playerName = window.prompt ("what is your robot's name?");
var playerHealth = 100;
var playerAttack=10;
var playerMoney = 10;

//you can also log multiple values at once like this
console.log (playerName, playerAttack, playerHealth);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]
var enemy1 = "Roborto";
var enemy2 = "Amy Android";
var enemy3 = "Robo Trumble"
var enemyHealth= 50;
var enemyAttack =12;



 
var fight = function(enemyName) {
    //alert players that they are starting the round

    

     //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyhealth' variable

     
     //log a resulting message to the console so we know that it worked.
     //subtract the value of the 'enemyAttack' from the value from the value of 'playerHealth' variable
     //log a resulting message to the console so that we know that it worked.

}

window.alert ("Welcome to Robot Gladiators"); 
var promptFight =window.prompt ("Would you like to FIGHT or SKIP this?")

//if player choses to fight, then fight
    if (promptFight==="fight"|| promptFight=== "FIGHT") {
        //renoce enemy's health bu subtracting the amount set in the playerAttack variable
    
        
    enemyHealth = enemyHealth - playerAttack;
    console.log (
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has "+ enemyHealth + "health remaining"
     );

     playerHealth = playerHealth - enemyAttack;
     
     console.log (
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "health remaining"
     );

     

     console.log (
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has "+ enemyHealth + "health remaining"
     );

     playerHealth = playerHealth - enemyAttack;
     
     console.log (
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "health remaining"
     );

     var playerHealth= 100;
     //check to see if the value of the playerHealth variable is greater than 0 
     if (playerHealth > 0) {
        console.log ("Your player is still alive!");
     }

     var playerHealth = 10;

     if (playerHealth === 0) {
         console.log (" This will not run");
         }else {console.log (" This will run instead")}
         
    console.log (
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has "+ enemyHealth + "health remaining"
         );
         //check enemy's health
         if (enemyHealth <= 0) {
             window.alert (enemyNames + " has died! ");
         }
         else {
             window.alert (enemyNames + " still has " + enemyHealth + "health left.");
         }

         //check player's health
         if (playerHealth <= 0) {
            window.alert (playerName + " has died! ");
        }
        else {
            window.alert (playerName + " still has " + playerHealth + "health left.");
        }
        //if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip =window.confirm ("are you sure you'd like to quit?")

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert (playerName + "has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2; 
    }        
     // if no (false), ask question afgain hu running fight () again
     else{
         fight();
     }
        window.alert (playerName + " has choses to skip the fight!");
    } else {
        window.alert( "You need to choose a valid option. Try again!")
    }
for (var i=0; i < enemyNames.length; i++) {
    console.log (enemyNames[i]);
    console.log(i);
    console.log(enemyNames [i] + " is at " + i + (" index"));

   for (var i=0; i < enemyNames.length; i++) {
       fight(enemyNames[i]);
   }}
