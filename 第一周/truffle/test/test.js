var Counter = artifacts.requre("Counter");

contract("Counter",function(accounts){
    var counterinstance;
    it("Counter",function(){

          return Counter.deployed().then(function(instance){
           counterinstance = instance;
           return counterinstance.count();
          }).then(function(){
              return counterinstance.counter();
          }).then(function(count){

            assert.equal(count,1);
          });
    });
     

});