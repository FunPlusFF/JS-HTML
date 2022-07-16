function RndMassiv() {
  var countMas = +prompt("Введите размер массива");
  var MinD = +prompt("Введите минимальный диапазон чисел");
  var MaxD = +prompt("Введите потолок диапозона часил");

  document.write("<table border='1px'><tr>");
  for (var i = 0; i < countMas; i++) {
    document.write("<th> " + i + "</th>");
  }

  document.write("</tr>");
  var rNumber = [];
  for (var i = 0; i < countMas; i++) {
    r = parseInt(Math.random() * (MaxD - MinD) + MinD);
    rNumber.unshift(r);
  }
  function compare(MinD, MaxD) {
    return MinD - MaxD;
  }

  rNumber.sort(compare);
  for (var i = 0; i < rNumber.length; i++) {
    document.write("<th> " + rNumber[i] + "</th>");
  }
  document.write("</tr></table>");
}

function NumberOfWeek() {
  var numberWeek = +prompt("Введите номер дня недели");
  numberWeek = parseInt(numberWeek);
  if ((numberWeek) => 1 && numberWeek <= 7) {
    switch (numberWeek) {
      case 1:        document.write(
          "<div style = 'display: inline-block;text-align: center; width:100px;    height:100px; background-color:yellow; border: 1px solid white;     '> Понедельник       </div>"
        );
        break;
      case 2:
        document.write(
          "<div style = 'display: inline-block;text-align: center; width:100px;    height:100px; background-color:pink; border: 1px solid white;     '> Вторник       </div>"
        );
        break;
      case 3:
        document.write(
          "<div style = 'display: inline-block;text-align: center; width:100px;    height:100px; background-color:green; border: 1px solid white;     '> Среда       </div>"
        );
        break;
      case 4:
        document.write(
          "<div style = 'display: inline-block;text-align: center; width:100px;    height:100px; background-color:orange; border: 1px solid white;     '> Четверг       </div>"
        );
            break;
      case 5:
        document.write(
          "<div style = 'display: inline-block;text-align: center; width:100px;    height:100px; background-color:blue; border: 1px solid white;     '> Пятница       </div>"
        );
            break;
        case 6:
        document.write(
          "<div style = 'display: inline-block;text-align: center; width:100px;    height:100px; background-color:violet; border: 1px solid white;     '> Суббота       </div>"
        );
            break;
        case 7:
        document.write(
          "<div style = 'display: inline-block;text-align: center; width:100px;    height:100px; background-color:red; border: 1px solid white;     '> Воскресенье       </div>"
        );
        break;
        
      default:
        break;
    }
  }
}
