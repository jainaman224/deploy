var a,b,c,d,i;
function ankita(){
	var ran=Math.floor(Math.random()*32+1);
	switch (ran){
		case 1:
		a="K R R I S H 3 ";
		break;
		
		case 2:
		a="Y U V A ";
		break;

		case 3:
		a="W A J O O D "		
		break;

		case 4:
		a="D R O N A "
		break;

		case 5:
		a="I S H Q I Y A "
		break;

		case 6:
		a="Y U V R A J "
		break;

		case 7:
		a="D A C A I T"
		break;

		case 8:
		a="W A Z I R "
		break;

		case 9:
		a="B A A Z I "
		break;

		case 10:
		a="Y U D H "
		break;

		case 11:
		a="B E W A F A "
		break;

		case 12:
		a="W A Q T "
		break;

		case 13:
		a="B A A Z I G A R "
		break;

		case 14:
		a="B E W A K O O F I Y A A N "
		break;

		case 15:
		a="C H H A Y A ";
		break;

		case 16:
		a="C H A L B A A Z ";
		break;

		case 17:
		a="C H I N G A R I ";
		break;

		case 18:
		a="C H O C O L A T E ";
		break;

		case 19:
		a="C H U D A I L ";
		break;

		case 20:
		a="F A R E B ";
		break;

		case 21:
		a="F U G L Y ";
		break;

		case 22:
		a="F U N 2 S S H ";
		break;

		case 23:
		a="G A B A N ";
		break;

		case 24:
		a="G A N D H I ";
		break;

		case 25:
		a="G A R V ";
		break;

		case 26:
		a="G A Y A B ";
		break;

		case 27:
		a="G U N D A Y ";
		break;

		case 28:
		a="S U N D A Y ";
		break;

		case 29:
		a="G U P T ";
		break;

		case 30:
		a="G U Z A A R I S H ";
		break;

		case 31:
		a="W A J A H H ";
		break;

		case 32:
		a="F U K R E Y ";
		break;
	}
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