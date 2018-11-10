$(document).ready(function() {



    window.onload = function() {
        trivia.w1();
        


     };



     var trivia = {
         correctANS: 0,
         incorrectANS: 0,
         unansweredQS: 0,
         hasBeenClicked:false,         
         Q: ["<h2>Primer pelicula de Stanley Kubrick</h2>"],
         OP:['<ul class="list-group"><li id="ops1"></li><li id="ops2"></li><li id="ops3"></li></ul></ul>'],  
         opciones1: ["<p>Eyes Wide Shut</p>", "<p>The Shining</p>","<p>Fear and Desire</p>"],      
         o: ["#0", "#1", "#2"],
         ANS:[0,0,0],
         contador0: 0,
         contador1: 0,


         w1: function (){
             let r= $('<input type="button" value="Start"/>');
             $("#1").html(r);

             if (trivia.contador0 == 0) {
                 trivia.contador0++;
                $("#1").click(function () {
                    trivia.hasBeenClicked = true;
                    trivia.w2(0,0,1,2);
                });
             }

             
         },

         w2: function (z,a,b,c){ //(z pregunta, abc opciones

             if (trivia.hasBeenClicked == true) {

                 let r = $(trivia.Q[z]); // pregunta array 0
                 let h = $(trivia.OP[0]); // asigna la lista de opciones
                 $("#0").html(r); // asigna la pregunta
                 $("#1").html(h); // asigna la lista de opciones 

                 let j = $(trivia.opciones1[a]);
                 let k = $(trivia.opciones1[b]);
                 let l = $(trivia.opciones1[c]);
                 $("#ops1").html(j);
                 $("#ops2").html(k);
                 $("#ops3").html(l);

                 if (trivia.contador1 == 0){  
                    
                    trivia.contador1++;                   

                    $("#ops1").click(function () {                        
                      trivia.ANS[0] = 0;
                      
                    });
                    $("#ops2").click(function () {
                      trivia.ANS[1] = 0;
                    });
                    $("#ops3").click(function () {
                      //alert("hola");
                      trivia.ANS[2] = 1;
                    });
  
                    
                }  
                if (trivia.ANS[2] == 1) {
                    this.correctANS++;
                    alert("felicidades")
                    $("#0").append("<p>Correctas: "+this.correctANS+"</p>")
                }            
             }
         },

         


     };





});
