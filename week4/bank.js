function emivalidate(){
            var A=document.getElementById("amount").value;
            var Interest=document.getElementById("roi").value;
            var years=document.getElementById("tenure").value;
            Interest=Number(Interest);
            if(Interest === 0 || Interest === 1){
                alert("ROI should not be 0 or 1");
                return false;
    }
            var months=years*12;
            var R=(Interest/12)*100;
            var emi=(A*R*Math.pow(1+R,years))/(Math.pow(1+R,years)-1);
            document.getElementById("result").innerHTML="<h2>Your emi is:</h2>"+emi.toFixed(2);
}
