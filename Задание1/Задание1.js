//aaaaaaaaaaaaaaaaaaaaaaaa
function qwerty() {
  var day = +prompt("Введите день (цифры)");
  if (day > 31 || day < 1) {
    alert("Неверный ввод!");
  }
  var mon = +prompt("Введите месяц (цифры)");
  if (mon > 12 || mon < 1) {
    alert("Неверный ввод!");
    return;
  }
  var month = "";
  var dayweek = +prompt("Введмте день недели");
  if (dayweek > 7 || dayweek < 1) {
    alert("не верный ввод");
    return;
  }
  switch (mon) {
    case 1:
      month = "Января";
      break;
    case 2:
      month = "Февраля";
      break;
    case 3:
      month = "Март";
      break;
    case 4:
      month = "Апрель";
      break;
    case 5:
      month = "Май";
      break;
    case 6:
      month = "Июнь";
      break;
    case 7:
      month = "Июль";
      break;
    case 8:
      month = "Август";
      break;
    case 9:
      month = "Сентябрь";
      break;
    case 10:
      month = "Ноябрь";
      break;
    case 11:
      month = "Октябрь";
      break;
    case 12:
      month = "Декабрь";
      break;
  }
  switch (dayweek) {
    case 1:
      dayweek = "Понедельник";
      break;
    case 2:
      dayweek = "Вторник";
      break;
    case 3:
      dayweek = "Среда";
      break;
    case 4:
      dayweek = "Четверг";
      break;
    case 5:
      datweek = "Пятница";
      break;
    case 6:
      dayweek = "Суббота";
      break;
    case 7:
      dayweek = "Воскресение";
      break;
  }
  document.writeln(
    "Ваши цифры соответсвуют " + day + " " + month + ", " + dayweek
  );
}
// function dayMonthYear() {
//
// }
function sumFiveNumber() {
  count = +prompt("Введите пятизначное число число");
  count = parseInt(count);
  if (count >= 10000 && count < 100000) {
    var exCount = 0;
    var sum = 0;
    // var c = new Array();
    for (var i = 0; i < 6; i++) {
      exCount = count;
      exCount = exCount % Math.pow(10, i);
      exCount = exCount / Math.pow(10, i - 1);
      exCount = parseInt(exCount);
      sum = sum + exCount;
    }
    document.writeln(sum);
  } else {
    document.writeln("ошибка");
  }
}
function randomNumber() {
  var bg = +prompt("Введите начальное число");
  var end = +prompt("Введите конечное число");
  if (bg > end) {
    var c = +end;
    end = +bg;
    bg = +c;
  }
  //var ranNam = randomInteger(bg, end);

  document.writeln("Ваше число " + Math.floor(Math.random() * (end - bg) + bg));
  document.writeln("qq");
}
function sumEven() {
  var bg = +prompt("Введите начальное число");
  var end = +prompt("Введите конечное число");
  var sum = 0;
  // if(bg == null || end == null) alert("Вы ввели пустое или неверное значение ")
  if (bg > end) {
    //Поменять вестами если первое сисло больше второго
    var c = end;
    end = bg;
    bg = c;
  }
  for (var i = bg; i < end; i++) {
    if (i % 2 == 0) continue;
    else sum += i;
  }
  document.writeln(sum);
}

function outEven() {
  var a = +prompt("Введите первое число");
  var b = +prompt("Введите второе число");

  if (a > b) {
    //Поменять вестами если первое число больше второго
    var c = b;
    b = a;
    a = c;
  }

  for (var i = a; i <= b; i++) {
    if (i % 2 == 0) {
      if (i == b || i == b - 1) {
        document.writeln(i);
        continue;
      }
      document.writeln(i + ",");
    }
  }
}
function sumRand() {
  var sum = 0;
  for (i = 0; i < 4; i++) {
    var rand = parseInt(Math.random() * 10000);
    sum += rand;
  }
  document.write(sum);
}
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
