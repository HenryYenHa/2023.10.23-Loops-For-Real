let content = "";

for (let i = 1; i <= 100; i++) {
  //Attempted Switch variant
  switch (true) {
    case i % 15 === 0:
      content += "<li>FizzBuzz</li>";
      // console.log("Fizzbuzz");
      break;
    case i % 3 === 0:
      content += "<li>Fizz</li>";
      //      console.log("Fizz");
      break;
    case i % 5 === 0:
      content += "<li>Buzz</li>";
      //console.log("Buzz");
      break;
    default:
      content += `<li>${i}</li>`;
    //console.log(i + "!");
  }
}

const container = document.querySelector(".gallery");

console.log(content);

container.innerHTML = `<ol>${content}</ol>`;
