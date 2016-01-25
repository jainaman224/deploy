var a,b,c,d,i;
var x = ["A A N D H I ","A A S H I Q ","A A S H I Q U I ","A B D U L L A H ","A B H I L A S H A ","A B H I M A A N ","A B H I N E T R I ","A I T B A A R ","A I T R A A Z ","A F S A N A ","A N D A Z ","A Z A A D ","B A A Z I ","B A A Z I G A R ","B E W A F A ","B E W A K O O F I Y A A N ","C H A L B A A Z ","C H H A Y A ","C H I N G A R I ","C H O C O L A T E ","C H U D A I L ","D A C A I T ","D R O N A ","F A R E B ","F U G L Y ","F U K R E Y ","F U N 2 S S H ","G A B A N ","G A N D H I ","G A R V ","G A Y A B ","G U N D A Y ","G U P T ","G U Z A A R I S H ","I S H Q I Y A ","K R R I S H 3 ","S U N D A Y ","W A J A H H ","W A J O O D ","W A Q T ","W A Z I R ","Y U D H ","Y U V A ","Y U V V R A A J "]
function ankita(){
	var ran=Math.floor(Math.random()*x.length);
	a=x[ran];
}
od();
function aman(x,y) {
	document.getElementById(y).disabled = true;
	i=0;
	var t=0;
	while(i < a.length){
		if(a[i]==x){
			b=b.slice(0,(i))+x+b.slice(i+1,(a.length));
			t=1;
		}
		document.getElementById("a").innerHTML = b;
		i+=2;
	}
	if(t==0){
		c+=x+" ";
		document.getElementById("c").innerHTML=c;
		d=d.slice(2,d.length);
		document.getElementById("d").innerHTML=d;
	}
	if(d.length==0){
		document.getElementById("e").innerHTML="YOU LOSE";
		document.getElementById("a").innerHTML = a;
		yask();
	}
	else if(a==b){
		document.getElementById("e").innerHTML="YOU WON";
		yask();
	}
}

function od() {
	ankita();
	neha();
	i=0;
	b="";
	while(i < a.length){
		if (a[i]=='A' || a[i]=='E' || a[i]=='I' || a[i]=='O' || a[i]=='U' || a[i]==' '){
			b+=a[i]+" ";
		}
		else{
			b+="_ ";
		}
		i+=2;
	}
	document.getElementById("a").innerHTML = b;
	c="";
	document.getElementById("c").innerHTML = c;
	d="B O L L Y W O O D"
	document.getElementById("d").innerHTML=d;
	document.getElementById("e").innerHTML="";
}

function yask(){
	$('#PLAY').show();
	$('.vicky').prop('disabled',true);
}

function neha(){
	$('#PLAY').hide();
	$('.vicky').prop('disabled',false);
}
