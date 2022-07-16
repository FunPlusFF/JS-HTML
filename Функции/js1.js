function chess() {
  var count = 1;
  countPlus1 = 1;
  for (var j = 0; j < 8; j++) {
    document.writeln("<br>");
    if (j % 2 == 0) {
      for (var i = 0; i < 4; i++) {
        countPlus1 = parseInt(count + 1);
        // if (count < 10 || countPlus1 < 10) {
        //   if (count < 10) {
        //     count = parseInt(count);
        //     count = "0" + count;
        //   }
        //   if (countPlus1 < 10) {
        //     countPlus1 = parseInt(countPlus1);
        //     countPlus1 = "0" + countPlus1;
        //   }
        // }

        document.write(
          "<div style = 'display: inline-block;text-align: center; ; width:100px;    height:100px;    background-color:black; border: 1px solid white ;    color: yellow;'>" +
            count +
            "</div>" +
            "<div style = 'display: inline-block;text-align: center; width:100px;    height:100px;  color: yellow;   background-color:gainsboro; border: 1px solid white;   '>" +
            (count + 1) +
            "</div>"
        );
        count += 2;
      }
    } else {
      for (var i = 0; i < 4; i++) {
        countPlus1 = parseInt(count + 1);
        // if (count < 10 || countPlus1 < 10) {
        //   if (count < 10) {
        //     count = parseInt(count);
        //     count = "0" + count;
        //   }
        //   if (countPlus1 < 10) {
        //     countPlus1 = parseInt(countPlus1);
        //     countPlus1 = "0" + countPlus1;
        //   }

        document.write(
          "<div style = 'display: inline-block;text-align: center; width:100px;    height:100px;    color: yellow; background-color:gainsboro; border: 1px solid white;     '>" +
            count +
            "</div>" +
            "<div style = 'display: inline-block;text-align: center; width:100px;    height:100px;    background-color:black; border: 1px solid white;    color: yellow;'>" +
            (count + 1) +
            "</div>"
        );
        count += 2;
      }
    }
  }
}

function tableWithRandomNumber() {
  var rMin = +prompt("Введите минимальную границу диапазона");
  var rMax = +prompt("Введите максимальную границу диапазона");
  document.write("<table border='1px'><tr>");
  for (var i = 1; i < 11; i++) {
    document.write("<th> " + i + "</th>");
  }

  document.write("</tr>");
  for (var i = 1; i < 11; i++) {
    var r = parseInt(Math.random() * (rMax - rMin) + rMin);
    document.write("<th> " + r + "</th>");
  }
  document.write("</tr></table>");
}

function PowOfNumber() {
  var a = +prompt("Введите число, которое возведете в степень");
  var n = +prompt("Введите значение степени");

  var c = Math.pow(a, n);
  document.writeln("Число " + a + " в степени " + n + " Равно " + c);
  
}