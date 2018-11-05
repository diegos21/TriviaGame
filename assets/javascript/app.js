$(document).ready(function() {



    window.onload = function() {
        trivia.w1();
        var t =trivia.random();


     };



     var trivia = {
         correctANS: 0,
         incorrectANS: 0,
         unansweredQS: 0,
         hasBeenClicked:false,
         hasBeenClicked2:false,
         Q: ["<h2>Hello wWorld</h2>"],
         OP:['<ul class="list-group"><li id="ops1"></li><li id="ops2"></li><li id="ops3"></li></ul></ul>'],
         u: ["#ops1"],
         o: ["#0", "#1", "#2"],
         ANS:[0,0,0],


         w1: function (){
             let r= $('<input type="button" value="Start"/>');
             $(trivia.o[1]).html(r);

             $(trivia.o[1]).click(function () {
                trivia.hasBeenClicked = true;
                trivia.w2(trivia.o[0],trivia.o[1], 0);
             });
         },

         w2: function (x,y,z){ //(x pregunta... y opciones)ubicacion----- z preguntas

             if (trivia.hasBeenClicked == true) {

                 let r = $(trivia.Q[z]);
                 let h = $(trivia.OP[z]);
                 $(x).html(r);
                 $(y).html(h);
                 //let u = "#ops1";
                 $(trivia.u[0]).html("helloworld");

                  $(trivia.u[0]).click(function () {
                    trivia.hasBeenClicked2 = true;
                    trivia.ANS[0] = 1;
                  });
                  $("#ops2").click(function () {
                    trivia.hasBeenClicked2 = true;
                    trivia.ANS[1] = 1;
                  });
                  $("#ops3").click(function () {
                    trivia.hasBeenClicked2 = true;
                    trivia.ANS[2] = 1;
                  });

                  if (trivia.ANS[0] == 1) {
                      alert("sii");
                  }
             }

         },

         random: function (){

            let x = Math.floor((Math.random() * 3) + 1);
            let y = x-1;
            return y;
         },


     };





});
