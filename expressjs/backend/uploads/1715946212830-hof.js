function higherOrder2() {
    return function() {
      return "Do something";
    }
  }      
  var x = higherOrder2();
  console.log( x());
  console.log('this is demo')  

var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
     
}
       
var getName = obj.getName;
       
var obj2 = {name:"akshay", getName };
obj2.getName();


var obj1 = {
    address : "Mumbai,India",
    getAdd: function(){
    console.log(this.address); 
  }
}
   
var getAddress = obj1.getAdd;
var obj2 = {name:"akshay",getAddress};
obj2.getAddress();    

var getAddress = obj1.getAdd.bind(obj1);
var obj2 = { name: "akshay", getAddress };
obj2.getAddress(); 