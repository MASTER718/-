pragma solidity ^0.8.0;

contract Counter{

   uint counter;

   constructor() public {

    counter = 0;

   }
   function count() public {

  counter = counter +1;


   }
   function get() public view returns (uint) {
   return counter ;
  
   }


}