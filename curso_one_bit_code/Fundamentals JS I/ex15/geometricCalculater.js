// variable declaration

let option = 0;
let height = 0;
let side = 0;
let base = 0;
let biggerBase = 0;
let minorBase = 0;
let radius = 0;
let area = 0;

// calculetion functions

function triangleArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

function rectangleArea(base, height) {
  let area = base * height;
  return area;
}

function squareArea(side) {
  let area = side ** 2;
  return area;
}

function trapezeArea(biggerBase, minorBase, height) {
  let area = ((biggerBase + minorBase) * height) / 2;
  return area;
}

function circleArea(radius) {
  let area = 3.14 * radius ** 2;
  return area;
}

// interface

do {
  //option menu

  option = parseInt(
    prompt(
      "Geo Calculator\n\n" +
        "Opitions:\n" +
        "-1 Triangle area.\n" +
        "-2 Rectangle area.\n" +
        "-3 Square area.\n" +
        "-4 Trapeze area.\n" +
        "-5 Circle area.\n" +
        "-6 [EXIT]."
    )
  );

  //options results

  switch (option) {
    case 1:
      base = parseFloat(
        prompt(
          "Triangle Area:\n\n" +
            "Base: \n" +
            "Height: \n" +
            "what is the base of the triangle?"
        )
      );

      while (isNaN(base)) {
        base = parseFloat(
          prompt(
            "[ERRO]: Invalid input. Please enter a valid number for the base of the triangle:"
          )
        );
      }

      height = parseFloat(
        prompt(
          "Triangle Area:\n\n" +
            `Base: ${base}\n` +
            "Height: \n" +
            "what is the height of the triangle?"
        )
      );

      while (isNaN(height)) {
        height = parseFloat(
          prompt(
            "[ERRO]: Invalid input. Please enter a valid number for the base of the triangle:"
          )
        );
      }

      area = triangleArea(base, height);

      alert(
        "Triangle Area:\n\n" +
          `Base: ${base}\n` +
          `Height: ${height}\n` +
          `The area of this triangle is: ${area}`
      );
      break;
    case 2:
      base = parseFloat(
        prompt(
          "Rectangle Area:\n\n" +
            "Base: \n" +
            "Height: \n" +
            "what is the base of the Rectangle?"
        )
      );

      while (isNaN(base)) {
        base = parseFloat(
          prompt(
            "[ERRO]: Invalid input. Please enter a valid number for the base of the triangle:"
          )
        );
      }

      height = parseFloat(
        prompt(
          "Rectangle Area:\n\n" +
            `Base: ${base}\n` +
            "Height: \n" +
            "what is the height of the Rectangle?"
        )
      );

      while (isNaN(height)) {
        height = parseFloat(
          prompt(
            "[ERRO]: Invalid input. Please enter a valid number for the base of the triangle:"
          )
        );
      }

      area = rectangleArea(base, height);

      alert(
        "Rectangle Area:\n\n" +
          `Base: ${base}\n` +
          `Height: ${height}\n` +
          `The area of this Rectangle is: ${area}`
      );
      break;
    case 3:
      side = parseFloat(
        prompt(
          "Square side:\n\n" + "side: \n" + "what is the side of the Square?"
        )
      );

      while (isNaN(side)) {
        side = parseFloat(
          prompt(
            "[ERRO]: Invalid input. Please enter a valid number for the base of the triangle:"
          )
        );
      }

      area = squareArea(side);

      alert(
        "Rectangle Area:\n\n" +
          `side: ${side}\n` +
          `The area of this Square is: ${area}`
      );
      break;
    case 4:
      biggerBase = parseFloat(
        prompt(
          "Trapeze Area:\n\n" +
            "Bigger Base: \n" +
            "Minor Base: \n" +
            "Height: \n" +
            "what is the Bigger Base of the Trapeze?"
        )
      );

      while (isNaN(biggerBase)) {
        biggerBase = parseFloat(
          prompt(
            "[ERRO]: Invalid input. Please enter a valid number for the base of the triangle:"
          )
        );
      }

      minorBase = parseFloat(
        prompt(
          "Trapeze Area:\n\n" +
            `Bigger Base: ${biggerBase}\n` +
            "Minor Base: \n" +
            "Height: \n" +
            "what is the Minor Base of the Trapeze?"
        )
      );

      while (isNaN(minorBase)) {
        minorBase = parseFloat(
          prompt(
            "[ERRO]: Invalid input. Please enter a valid number for the base of the triangle:"
          )
        );
      }

      height = parseFloat(
        prompt(
          "Trapeze Area:\n\n" +
            `Bigger Base: ${biggerBase}\n` +
            `Minor Base: ${minorBase}\n` +
            "Height: \n" +
            "what is the height of the Trapeze?"
        )
      );

      while (isNaN(height)) {
        height = parseFloat(
          prompt(
            "[ERRO]: Invalid input. Please enter a valid number for the base of the triangle:"
          )
        );
      }

      area = trapezeArea(biggerBase, minorBase, height);

      alert(
        "Trapeze Area:\n\n" +
          `Bigger Base: ${biggerBase}\n` +
          `Minor Base: ${minorBase}\n` +
          `Height: ${height}\n` +
          `The area of this Trapeze is: ${area}`
      );
      break;
    case 5:
      radius = parseFloat(
        prompt(
          "Circle Area:\n\n" +
            "Radius: \n" +
            "what is the radius of the Circle?"
        )
      );

      while (isNaN(radius)) {
        radius = parseFloat(
          prompt(
            "[ERRO]: Invalid input. Please enter a valid number for the base of the triangle:"
          )
        );
      }

      area = circleArea(radius);

      alert(
        "Circle Area:\n\n" +
          `Radius: ${radius}\n` +
          `The area of this Circle is: ${area}`
      );
      break;
    case 6:
      alert("closing...");
      break;
    default:
      alert("[ERRO]: invalid option.");
  }
} while (option !== 6);
