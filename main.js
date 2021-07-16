var mouseEvent="empty";
var lastposition_x , lastposition_y;
canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
Color = "black";
Width_line = 1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    Color = document.getElementById("Color").value;
    Width_line = document.getElementById("Width_line").value;
    mouseEvent = "mouseDown";  
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUp";  
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";  
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
   currentposition_x = e.clientX-canvas.offsetLeft;
   currentposition_y = e.clientY-canvas.offsetTop; 

   if(mouseEvent == "mouseDown")
   {
       ctx.beginPath();
       ctx.strokeStyle = Color;
       ctx.lineWidth = Width_line;
       console.log("last position of x & y coordinates = ");
       console.log("x = " + lastposition_x + "y = " + lastposition_y);
       ctx.moveTo(lastposition_x , lastposition_y);

       console.log("current position of x & y coordinates = ");
       console.log("x = " + currentposition_x + "y = " + currentposition_y);
       ctx.lineTo(currentposition_x , currentposition_y);
       ctx.stroke();
   }
   lastposition_x = currentposition_x;
   lastposition_y = currentposition_y;
}
function Clear_area()
{
ctx.clearRect(0 , 0 , canvas.width , canvas.height);
}