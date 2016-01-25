var a,b,c,d,i;
var x = ["1 6   D E C E M B E R ","2   S T A T E S ","3   B A C H E L O R S ","3 G ","3   I D I O T S ","A A K R O S H ","A A N D H I ","A A R A K S H A N ","A A S H A Y E I N ","A A S H I Q ","A A S H I Q U I ","A B D U L L A H ","A B H I L A S H A ","A B H I M A A N ","A B H I N E T R I ","A G N E E P A T H ","A G Y A A T ","A I T B A A R ","A I T R A A Z ","A I Y Y A A ","A F S A N A ","A N D A Z ","A N G O O R ","A U R A N G Z E B ","A Z A A D ","B A A Z I ","B A A Z I G A R ","B E W A F A ","B E W A K O O F I Y A A N ","C H A L B A A Z ","C H H A Y A ","C H I N G A R I ","C H O C O L A T E ","C H U D A I L ","D A C A I T ",/*"D E L H I   B E L L Y ","D E S I   B O Y Z ",*/"D I L W A L E ","D R O N A ","F A R E B ","F U G L Y ","F U K R E Y ","F U N 2 S S H ","G A B A N ","G A N D H I ","G A R V ","G A Y A B ","G U N D A Y ","G U P T ","G U Z A A R I S H ","I S H Q I Y A ","K R R I S H 3 ","P K ","Q A I D I ","Q A Y A M A T ","Q U R B A N I ","Q A T I L ","S U N D A Y ","T E V A R ","U L J H A N ","U N D E R T R I A L ","U N G L I ","U T S A V ","V A A D A ","V A A S T A V ","V A D H ","V A N S H ","V A R D I ","V I C T O R Y ","V I D H A A N ","V I D H A A T A ","V I J A Y ","V I J A Y P A T H ","V I J E T A ","V I K A L P ","V I N A S H A K ","V I R A S A T ","V I R U D D H ","V I S H W A S ","V I S H W A T M A ","V I S H W A N A T H ","V I V A H ","W A A R I S ","W A F A A ","W A J A H H ","W A J O O D ","W A N T E D ","W A R N I N G ","W A R R A N T ","W A T E R ","W A Q T ","W A Z I R ","W E L C O M E ","Y A A D E I N ","Y A A D G A A R ","Y A A R A N A ","Y A A R I Y A N ","Y A K E E N ","Y A L G A A R ","Y A S M E E N ","Y O D H A ","Y O U N G I S T A N ","Y U D H ","Y U D H P A T H ","Y U G P U R U S H ","Y U V A ","Y U V V R A A J ","Z A B A R D A S T ","Z A L Z A L A ","Z A M E E R ","Z A N J E E R ","Z E B A K ","Z E E N A T ","Z E H E R ","Z I D D I ","Z I N D A G I ","Z U B E I D A A "]
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
