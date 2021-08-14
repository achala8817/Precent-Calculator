var numfield1=document.getElementById('numfield1');
var numfield2=document.getElementById('numfield2');
var resultfield=document.getElementById('resultfield');
var form=document.getElementById('xy');

form.addEventListener('submit', function(event) {
 if(!numfield1.value || !numfield2.value)
  {
  alert("please enter the values in the field");

  }
 else{
  var x=parseFloat(numfield1.value);
  //convert string into float
  var y=parseFloat(numfield2.value);
  var result=x/y;
  var precent=result*100;
  resultfield.innerText="Answer: " + precent + "%";
  event.preventDefault();
 }
});
//here add event in function for prevent from default referece because in form deafult referce use so our data will referece befor operation or function perform so always in form we use event prevent default 
