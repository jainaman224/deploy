$('#e').hide();

i = -1;
str=[];
str1=[];

function c(val)
{
if (val == ""){i=0;}
document.getElementById("d").value=val;
document.getElementById("e").value=val;
}

function v(val, valu)
{
i+= 1;
str[i]=val;
document.getElementById("d").value+=str[i];
str1[i]=valu;
document.getElementById("e").value+=str1[i];
}

function aman()
{
if (i>0){
i-=1;
document.getElementById("d").value="";
document.getElementById("e").value="";
for (var j=0; j<=i; j+=1)
document.getElementById("d").value+=str[j];
document.getElementById("e").value+=str1[j];
}
else if (i==0){
i-=1;
document.getElementById("d").value="";
document.getElementById("e").value="";
}
}

function pi()
{
var x = Math.PI;
v('pi', x);
}

function e() 
{ 
try 
{ 
  val=eval(document.getElementById("e").value);
  i=0;
  str[i]=val;
  str1[i]=val;
  c(val);
} 
catch(e) 
{
  i=0;
  c('Error');
} 
}