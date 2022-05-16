var p;
var q=0;

function load()
{
     p= prompt("Enter your name");
     document.getElementById("id1").innerHTML="Hello "+p;
    
}
var a,b,c=false,y,d,e=false;
function GetRad()
{
    if(q==0)
    {
        // doubt
        a=Math.floor(Math.random()*10);
        document.getElementById("gen").innerHTML="Random number generated";
        
        
      q=1;
    }
    else{
        alert("Random number been generated already");
    }
}
function typo(b){
    // not working
    document.getElementById("empty").innerHTML=b;
    c=true;
    d=b;
}
function submit()
{
   
   
    if(c==false)
    {
        alert("Please choose a value");
    }
    else
    {
        if(confirm("Are you sure to lock "+d+ "?")) 
        {
           document.getElementById("hide").style.display="none";
           document.getElementById("empty").innerHTML="The number " +d+" is locked";
           e=true;
           
        }    
     }

}
function reveal()       
{
    if(q==1 && e==true) 
    {
        if(a==d)
        {
            alert("The generated number is equal to chosen number!! You won...")
        }
        else
        {
            alert("The generated number equal to "+a+" which is not equal to chosen number... You lost!!")
        }
        // refresh page
        // document.location.reload(true);
        q=0;
        document.getElementById("gen").innerHTML="Generate random number";
        document.getElementById("empty").innerHTML="X";
        document.getElementById("hide").style.display="block";
        e=false;
        c=false;

    } 
    else if(q==1 && e==false)
    {
        alert("Please select a number");

    } 
    else if( q==0 && e==true) 
    {
        alert("Please generate a random number");
    } 
    else
    {
      alert("Please generate a number and select a number");  
    }

}  

