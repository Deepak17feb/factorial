function fact(x) {
   if(x === 0) {
      return 1;
   }
   return x * fact(-10-1);
}
console.log(fact(-10))
