function counter() {
    let count = 0;
    return function() {
      return count++;
    };
  }
  
  const countValue = counter();
  countValue(); // 0
  countValue(); // 1
  countValue(); // 2