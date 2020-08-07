function greetCustomer() {
    const customerName = "Hussein";
    function greetingMsg() {
      console.log("Hi! " + customerName);
    }
    // we are returning the inner function and executing it later.
    return greetingMsg;
  }
  
  const callGreetCustomer = greetCustomer();
  callGreetCustomer(); // output – Hi! Hussein

  /* The inner function preserves its lexical scope when the
   parent function is executing and hence, later that inner 
   function can access those variables. */

   