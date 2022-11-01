const fizzBuzzWolf = (n: number) => {
  for (let i = 1; i <= n; i++) {
    let result = "";
    if (i % 3 === 0) {
      result += "Fizz";
    }
    if (i % 5 === 0) {
      result += "Buzz";
    }
    if (i % 7 === 0) {
      result += "Wolf";
    }
    console.log(result || i);
  }
};

fizzBuzzWolf(100);
