//keypressEvent

var myRover = {
  position: [0,0],
  positionx: 0,
  positiony: 0,
  direction: 'N',
  roverready: false,
  obstacles: [
              [2,3],
              [7,2],
              [3,6],
            ]
};

var myRoverine = {
  position: [9,9],
  positionx: 900,
  positiony: 900,
  direction: 'S',
  roverready: false,
  obstacles: [
              [2,3],
              [7,2],
              [3,6],
            ]
};

var svgrover;
var roverinput;

document.addEventListener("DOMContentLoaded", function(event)
{
    console.log("DOM fully loaded and parsed");
    //ROVER
    roverinput=document.getElementById("rover-commands");
    console.log(roverinput);

    roverinput.addEventListener('keypress', function(event){
        myRover.roverready=true;
        myRoverine.roverready=false;
        roverinput.value="";

    });
    roverinput.addEventListener('keyup', function(event){
        var input=event.target.value;
        var rovergender="male";
        console.log(input);
        checkCommand(input, rovergender);

    });
    //ROVERINE
    roverineinput=document.getElementById("roverine-commands");
    console.log(roverineinput);
    roverineinput.addEventListener('keypress', function(event){
        myRoverine.roverready=true;
        myRover.roverready=false;
        roverineinput.value="";

    });
    roverineinput.addEventListener('keyup', function(event){
        var input=event.target.value;
        console.log(input);
        var rovergender="female";
        checkCommand(input,rovergender);

    });
    //MY ROVER IMAGE
    svgmyRover=document.getElementById("myroversvg");
    console.log(svgmyRover);
    svgmyRover.setAttribute("class","rotate270");

    var alertalien=document.getElementById('alertalien');
    alertalien.addEventListener("click",function(){
      alertalien.setAttribute("style","display: none;");
      if(myRover.roverready){
        roverinput.focus();
      }
      else if(myRoverine.roverready){
        roverineinput.focus();
      }
    });
    //MY ROVERINE IMAGE
    svgmyRoverine=document.getElementById("myroverinesvg");
    console.log(svgmyRoverine);
    svgmyRoverine.setAttribute("class","rotate90");


});




function goForward(rover) {
  var currentRover;
  if(rover===myRover){
    currentRover="svg-wrapper";
  }
  else if(rover===myRoverine){
    currentRover="svgroverine-wrapper";
  }


  switch(rover.direction) {
    case 'N':
      var roverpred=rover.position[1]+1;
      // !!!!! if I do this var roverpred=rover.position[1]++ it will increase number in original object MyRover!
      console.log(rover.position[1]);
      console.log("alien" + rover.obstacles[0][0],rover.obstacles[0][1]);
      if (rover.position[1]===9){

          console.log("cannot move further North");

      }

      else if ((roverpred===rover.obstacles[0][1])&&(rover.position[0]===rover.obstacles[0][0])
              ||
              (roverpred===rover.obstacles[1][1])&&(rover.position[0]===rover.obstacles[1][0])
              ||
              (roverpred===rover.obstacles[2][1])&&(rover.position[0]===rover.obstacles[2][0]))
              {

            console.log("Aargh Alien!!");
            alertalien.setAttribute("style","display: block;");

      }
      else if ((myRover.roverready)&&(roverpred===myRoverine.position[1])&&(myRover.position[0]===myRoverine.position[0])
              ||
              (myRoverine.roverready)&&(roverpred===myRover.position[1])&&(myRoverine.position[0]===myRover.position[0]))
      {
        alert("something here");
      }
      else{
        rover.position[1]++;
        var posx=rover.positionx;
        var posy=rover.positiony+100 + "px";
        rover.positiony+=100;
        console.log(rover.positiony);
        console.log(posx, posy);
        document.getElementById(currentRover).setAttribute(
        "style", "position: absolute; bottom:"+ posy +"; left:" + posx +";");
      }
      break;
    case 'E':
      var roverpred=rover.position[0]+1;
      console.log("roverpred",roverpred);
      console.log(myRover.roverready);
      console.log("myRoverine.positionx",myRoverine.position[0]);
      console.log("myRoverine.positiony",myRoverine.position[1]);
      if (rover.position[0]===9){
        console.log("cannot move further East");
      }
      else if ((roverpred===rover.obstacles[0][0])&&(rover.position[1]===rover.obstacles[0][1])
              ||
              (roverpred===rover.obstacles[1][0])&&(rover.position[1]===rover.obstacles[1][1])
              ||
              (roverpred===rover.obstacles[2][0])&&(rover.position[1]===rover.obstacles[2][1]))
              {

            console.log("Aargh Alien!!");
            alertalien.setAttribute("style","display: block;");
      }
      else if ((myRover.roverready)&&(roverpred===myRoverine.position[0])&&(myRover.position[1]===myRoverine.position[1])
              ||
              (myRoverine.roverready)&&(roverpred===myRover.position[0])&&(myRoverine.position[1]===myRover.position[1]))
      {
        alert("something here");
      }
      else{
        rover.position[0]++;
        var posx=rover.positionx+100 + "px";
        var posy=rover.positiony;
        rover.positionx+=100;
        document.getElementById(currentRover).setAttribute(
        "style", "position: absolute; bottom:"+ posy +"; left:" + posx +";");
      }
      break;
    case 'S':
      var roverpred=rover.position[1]-1;
      if (rover.position[1]===0){
        console.log("cannot move further South");
      }
      else if ((roverpred===rover.obstacles[0][1])&&(rover.position[0]===rover.obstacles[0][0])
              ||
              (roverpred===rover.obstacles[1][1])&&(rover.position[0]===rover.obstacles[1][0])
              ||
              (roverpred===rover.obstacles[2][1])&&(rover.position[0]===rover.obstacles[2][0]))
              {

            console.log("Aargh Alien!!");
            alertalien.setAttribute("style","display: block;");
      }
      else if ((myRover.roverready)&&(roverpred===myRoverine.position[1])&&(myRover.position[0]===myRoverine.position[0])
              ||
              (myRoverine.roverready)&&(roverpred===myRover.position[1])&&(myRoverine.position[0]===myRover.position[0]))
      {
        alert("something here");
      }

      else{
        rover.position[1]--;
        var posx=rover.positionx;
        var posy=rover.positiony-100 + "px";
        rover.positiony-=100;
        document.getElementById(currentRover).setAttribute(
        "style", "position: absolute; bottom:"+ posy +"; left:" + posx +";");
      }
      break;
    case 'W':

      var roverpred=rover.position[0]-1;
      console.log("roverpred",roverpred)
      console.log("myRoverine.positionx",myRoverine.position[0]);
      if (rover.position[0]===0){
        console.log("cannot move further West");
      }
      else if ((roverpred===rover.obstacles[0][0])&&(rover.position[1]===rover.obstacles[0][1])
              ||
              (roverpred===rover.obstacles[1][0])&&(rover.position[1]===rover.obstacles[1][1])
              ||
              (roverpred===rover.obstacles[2][0])&&(rover.position[1]===rover.obstacles[2][1]))
              {
            console.log("Aargh Alien!!");
            //var alertalien=document.getElementById('alertalien');
            alertalien.setAttribute("style","display: block;");
            //alertalien.addEventListener("click",function(){
            //  alertalien.setAttribute("style","display: none;");
            //  roverinput.focus();

            //})

          }
      else if ((myRover.roverready)&&(roverpred===myRoverine.position[0])&&(myRover.position[1]===myRoverine.position[1])
              ||
              (myRoverine.roverready)&&(roverpred===myRover.position[0])&&(myRoverine.position[1]===myRover.position[1]))
      {
        alert("something here");
      }

      else{
        rover.position[0]--;
        var posx=rover.positionx-100 + "px";
        var posy=rover.positiony;
        rover.positionx-=100;
        document.getElementById(currentRover).setAttribute(
        "style", "position: absolute; bottom:"+ posy +"; left:" + posx +";");
      }
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


/*function checkCommand(input){
  console.log("inside checkCommand");


  console.log(myRover);
  console.log(input);
  if(input === "f"){
    goForward(myRover);

  }
  else if(input === "b"){
    goBackward(myRover);

  }
  else if(input === "r"){
    setNewDirection("r", myRover);

  }
  else if(input==="l"){

    setNewDirection("l", myRover);
  }

}*/

  function setNewDirection(newdirection,rover){
    console.log(rover,newdirection);
    var currentRover;
    if(rover===myRover){
      currentRover=svgmyRover;
    }
    else if(rover===myRoverine){
      currentRover=svgmyRoverine;

    }
    console.log(currentRover);
    switch(rover.direction){
      case 'N':

        if(newdirection==='l'){
          console.log("turns left and new direction will be East");
          currentRover.setAttribute("class","rotate180");
          rover.direction='W';
        }
        else if(newdirection==='r'){
          currentRover.setAttribute("class","rotate0");
          rover.direction='E';
        }
        break;
      case 'S':
        if(newdirection==='l'){
          currentRover.setAttribute("class","rotate0");
          rover.direction='E';
        }
        else if(newdirection==='r'){
          currentRover.setAttribute("class","rotate180");
          rover.direction='W';
        }
        break;
      case 'E':
        if(newdirection==='l'){
          currentRover.setAttribute("class","rotate270");
          rover.direction='N';
        }
        else if(newdirection==='r'){
          currentRover.setAttribute("class","rotate90");
          rover.direction='S';
        }
        break;
      case 'W':
        if(newdirection==='l'){
          currentRover.setAttribute("class","rotate90");
          rover.direction='S';
        }
        else if(newdirection==='r'){
          currentRover.setAttribute("class","rotate270");
          rover.direction='N';
        }
        break;

    };
    //myRover.roverready=true;

    console.log("New Rover Direction: " +[ rover.direction ])

  }

  /*function goForward(rover) {
    switch(rover.direction) {
      case 'N':
        var roverpred=rover.position[1]+1;
        // !!!!! if I do this var roverpred=rover.position[1]++ it will increase number in original object MyRover!
        console.log(rover.position[1]);
        console.log("alien" + rover.obstacles[0][0],rover.obstacles[0][1]);
        if (rover.position[1]===9){

            console.log("cannot move further North");

        }

        else if ((roverpred===rover.obstacles[0][1])&&(rover.position[0]===rover.obstacles[0][0])
                ||
                (roverpred===rover.obstacles[1][1])&&(rover.position[0]===rover.obstacles[1][0])
                ||
                (roverpred===rover.obstacles[2][1])&&(rover.position[0]===rover.obstacles[2][0]))
                {

              console.log("Aargh Alien!!");
              alertalien.setAttribute("style","display: block;");

        }

        else{
          rover.position[1]++;
          var posx=rover.positionx;
          var posy=rover.positiony+100 + "px";
          rover.positiony+=100;
          console.log(rover.positiony);
          console.log(posx, posy);
          document.getElementById("svg-wrapper").setAttribute(
          "style", "position: absolute; bottom:"+ posy +"; left:" + posx +";");
        }
        break;
      case 'E':
        var roverpred=rover.position[0]+1;
        if (rover.position[0]===9){
          console.log("cannot move further East");
        }
        else if ((roverpred===rover.obstacles[0][0])&&(rover.position[1]===rover.obstacles[0][1])
                ||
                (roverpred===rover.obstacles[1][0])&&(rover.position[1]===rover.obstacles[1][1])
                ||
                (roverpred===rover.obstacles[2][0])&&(rover.position[1]===rover.obstacles[2][1]))
                {

              console.log("Aargh Alien!!");
              alertalien.setAttribute("style","display: block;");
        }
        else{
          rover.position[0]++;
          var posx=rover.positionx+100 + "px";
          var posy=rover.positiony;
          rover.positionx+=100;
          document.getElementById("svg-wrapper").setAttribute(
          "style", "position: absolute; bottom:"+ posy +"; left:" + posx +";");
        }
        break;
      case 'S':
        var roverpred=rover.position[1]-1;
        if (rover.position[1]===0){
          console.log("cannot move further South");
        }
        else if ((roverpred===rover.obstacles[0][1])&&(rover.position[0]===rover.obstacles[0][0])
                ||
                (roverpred===rover.obstacles[1][1])&&(rover.position[0]===rover.obstacles[1][0])
                ||
                (roverpred===rover.obstacles[2][1])&&(rover.position[0]===rover.obstacles[2][0]))
                {

              console.log("Aargh Alien!!");
              alertalien.setAttribute("style","display: block;");


        }
        else{
          rover.position[1]--;
          var posx=rover.positionx;
          var posy=rover.positiony-100 + "px";
          rover.positiony-=100;
          document.getElementById("svg-wrapper").setAttribute(
          "style", "position: absolute; bottom:"+ posy +"; left:" + posx +";");
        }
        break;
      case 'W':
        var roverpred=rover.position[0]-1;
        if (rover.position[0]===0){
          console.log("cannot move further West");
        }
        else if ((roverpred===rover.obstacles[0][0])&&(rover.position[1]===rover.obstacles[0][1])
                ||
                (roverpred===rover.obstacles[1][0])&&(rover.position[1]===rover.obstacles[1][1])
                ||
                (roverpred===rover.obstacles[2][0])&&(rover.position[1]===rover.obstacles[2][1]))
                {

              console.log("Aargh Alien!!");
              //var alertalien=document.getElementById('alertalien');
              alertalien.setAttribute("style","display: block;");
              //alertalien.addEventListener("click",function(){
              //  alertalien.setAttribute("style","display: none;");
              //  roverinput.focus();

              //})

        }

        else{
          rover.position[0]--;
          var posx=rover.positionx-100 + "px";
          var posy=rover.positiony;
          rover.positionx-=100;
          document.getElementById("svg-wrapper").setAttribute(
          "style", "position: absolute; bottom:"+ posy +"; left:" + posx +";");
        }
        break;
    };

    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
  }*/


  function checkCommand(input,rovergender){
    var rover;
    console.log("inside checkCommand");


    console.log(myRover);
    console.log(input);

    if(rovergender==="male"){
      rover=myRover;

    }
    else if(rovergender==="female"){
      rover=myRoverine;

    }

    if(input === "f"){
      goForward(rover);

    }
    else if(input === "b"){
      goBackward(rover);

    }
    else if(input === "r"){
      setNewDirection("r", rover);

    }
    else if(input==="l"){

      setNewDirection("l", rover);
    }

  }


    function goBackward(rover) {
      var currentRover;
      if(rover===myRover){
        currentRover="svg-wrapper";
      }
      else if(rover===myRoverine){
        currentRover="svgroverine-wrapper";
      }

      switch(rover.direction) {
        case 'N':
          var roverpred=rover.position[1]-1;
          // !!!!! if I do this var roverpred=rover.position[1]++ it will increase number in original object MyRover!
          console.log(rover.position[1]);
          console.log("alien" + rover.obstacles[0][0],rover.obstacles[0][1]);
          if (rover.position[1]===0){

              console.log("cannot move further South");

          }

          else if ((roverpred===rover.obstacles[0][1])&&(rover.position[0]===rover.obstacles[0][0])
                  ||
                  (roverpred===rover.obstacles[1][1])&&(rover.position[0]===rover.obstacles[1][0])
                  ||
                  (roverpred===rover.obstacles[2][1])&&(rover.position[0]===rover.obstacles[2][0]))
                  {

                console.log("Aargh Alien!!");
                alertalien.setAttribute("style","display: block;");

          }
          else if ((myRover.roverready)&&(roverpred===myRoverine.position[1])&&(myRover.position[0]===myRoverine.position[0])
                  ||
                  (myRoverine.roverready)&&(roverpred===myRover.position[1])&&(myRoverine.position[0]===myRover.position[0]))
          {
            alert("something here");
          }

          else{
            rover.position[1]--;
            var posx=rover.positionx;
            var posy=rover.positiony-100 + "px";
            rover.positiony-=100;
            console.log(rover.positiony);
            console.log(posx, posy);
            document.getElementById(currentRover).setAttribute(
            "style", "position: absolute; bottom:"+ posy +"; left:" + posx +";");
          }
          break;
        case 'E':
          var roverpred=rover.position[0]-1;
          if (rover.position[0]===0){
            console.log("cannot move further East");
          }
          else if ((roverpred===rover.obstacles[0][0])&&(rover.position[1]===rover.obstacles[0][1])
                  ||
                  (roverpred===rover.obstacles[1][0])&&(rover.position[1]===rover.obstacles[1][1])
                  ||
                  (roverpred===rover.obstacles[2][0])&&(rover.position[1]===rover.obstacles[2][1]))
                  {

                console.log("Aargh Alien!!");
                alertalien.setAttribute("style","display: block;");
          }
          else if ((myRover.roverready)&&(roverpred===myRoverine.position[0])&&(myRover.position[1]===myRoverine.position[1])
                  ||
                  (myRoverine.roverready)&&(roverpred===myRover.position[0])&&(myRoverine.position[1]===myRover.position[1]))
          {
            alert("something here");
          }

          else{
            rover.position[0]--;
            var posx=rover.positionx-100 + "px";
            var posy=rover.positiony;
            rover.positionx-=100;
            document.getElementById(currentRover).setAttribute(
            "style", "position: absolute; bottom:"+ posy +"; left:" + posx +";");
          }
          break;
        case 'S':
          var roverpred=rover.position[1]+1;
          if (rover.position[1]===9){
            console.log("cannot move further North");
          }
          else if ((roverpred===rover.obstacles[0][1])&&(rover.position[0]===rover.obstacles[0][0])
                  ||
                  (roverpred===rover.obstacles[1][1])&&(rover.position[0]===rover.obstacles[1][0])
                  ||
                  (roverpred===rover.obstacles[2][1])&&(rover.position[0]===rover.obstacles[2][0]))
                  {

                console.log("Aargh Alien!!");
                alertalien.setAttribute("style","display: block;");


          }
          else if ((myRover.roverready)&&(roverpred===myRoverine.position[1])&&(myRover.position[0]===myRoverine.position[0])
                  ||
                  (myRoverine.roverready)&&(roverpred===myRover.position[1])&&(myRoverine.position[0]===myRover.position[0]))
          {
            alert("something here");
          }

          else{
            rover.position[1]++;
            var posx=rover.positionx;
            var posy=rover.positiony+100 + "px";
            rover.positiony+=100;
            document.getElementById(currentRover).setAttribute(
            "style", "position: absolute; bottom:"+ posy +"; left:" + posx +";");
          }
          break;
        case 'W':
          var roverpred=rover.position[0]+1;
          if (rover.position[0]===9){
            console.log("cannot move further West");
          }
          else if ((roverpred===rover.obstacles[0][0])&&(rover.position[1]===rover.obstacles[0][1])
                  ||
                  (roverpred===rover.obstacles[1][0])&&(rover.position[1]===rover.obstacles[1][1])
                  ||
                  (roverpred===rover.obstacles[2][0])&&(rover.position[1]===rover.obstacles[2][1]))
                  {

                console.log("Aargh Alien!!");
                //var alertalien=document.getElementById('alertalien');
                alertalien.setAttribute("style","display: block;");
                //alertalien.addEventListener("click",function(){
                //  alertalien.setAttribute("style","display: none;");
                //  roverinput.focus();

                //})

          }
          else if ((myRover.roverready)&&(roverpred===myRoverine.position[0])&&(myRover.position[1]===myRoverine.position[1])
                  ||
                  (myRoverine.roverready)&&(roverpred===myRover.position[0])&&(myRoverine.position[1]===myRover.position[1]))
          {
            alert("something here");
          }

          else{
            rover.position[0]++;
            var posx=rover.positionx+100 + "px";
            var posy=rover.positiony;
            rover.positionx+=100;
            document.getElementById(currentRover).setAttribute(
            "style", "position: absolute; bottom:"+ posy +"; left:" + posx +";");
          }
          break;
      };

      console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
    }



//1) Create an object to represent the rover that has position and direction attributes
//2) Create a grid using arrays (hint: do a google search for two-dimensional arrays).
//3) Write functions for the various commands
//4) Try to call some of those functions and display the new position of the rover.

//commands should be go forward, backward etc  f for go forward
//b for go back
//r for turn right*
//l for turn left*
//So we should be able to tell the rover, for example, ‘fffrfflfffbb’ and it would execute those movements and provide us with its new position.

//Furthermore, we need to make sure that the rover never goes off the grid but rather, wraps from one edge of the grid to another (planets are spheres after all)
