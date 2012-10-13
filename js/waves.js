/* main */
    var dbg = 0; 

    window.onload = init;

/* subs */


    function debug (o)
    {
        if ( dbg == 1 )
        {
            if ( typeof o == 'object' )
            {
                console.log('debug:');
                console.log(o);
            }
            else
            {
                console.log('debug: ' + o);
            }
        }
    }

     function init()
     {
        // Call the sineWave() function repeatedly every 1 microseconds
        //setInterval(function() {sineWave()}, 5000)

        sineWave();
        debug('in init');
     }


    function sineWave()
    {
        var x = 0;

        debug('in function sineWave()');

        var mycanvas = document.getElementById('mycanvas');

        
        if ( mycanvas && mycanvas.getContext )
        {
            debug('created canvas');
            var ctx = mycanvas.getContext("2d");
        }
        else
        {
            debug('no context created');
            return 'exit';
        }
        debug('created ctx');

        var interval_1 = setInterval( function(){ drawSine() }, 1 );


        function drawSine ()
        {
            debug('in writeCoordinates(x = ' + x + ')');
            x += 1;

            // Find the sine of the angle
            var y = Math.sin( x * Math.PI/90 );
            //var y = Math.sin( x * Math.PI/ Math.floor((Math.random()*10)+1) );

            // If the sine value is positive, map it above y = 100 and change the colour to blue

            if( y >=0 )
            {
               y = 100 - y * 50;
               ctx.fillStyle = "blue";
            }

            // If the sine value is negative, map it below y = 100 and change the colour to red
            if( y < 0 )
            {
               y = 250 + (0-y) * 50;
               ctx.fillStyle = "red";
            }

            // We will use the fillRect method to draw the actual wave. The length and breath of the 
            ctx.fillRect(
               x, 
               y, 
               Math.sin
                  ( x * Math.PI/180 ) * 5,
               Math.sin
                   (x * Math.PI/180 * 5)
             );

            // Increment the angle.
            //x += 1;

            // When the angle reaches 1040, stop the animation.
            var angle = 1040;
            if( x > angle )
            {
                clearInterval (interval_1);
            }
        }
     }
