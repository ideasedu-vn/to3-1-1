function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YZKB1hhYXX":
        Script1();
        break;
      case "5Xbwk9Bg5oM":
        Script2();
        break;
      case "66VXYaSAyBU":
        Script3();
        break;
      case "6hmFMk1xyep":
        Script4();
        break;
      case "66gsNZUBxEg":
        Script5();
        break;
      case "6JafFTEL9TV":
        Script6();
        break;
      case "6hZqmCK9hTX":
        Script7();
        break;
      case "5zr6AEHOOT5":
        Script8();
        break;
      case "6TVZsEkvqHA":
        Script9();
        break;
      case "5hUvGpISLs8":
        Script10();
        break;
      case "659uD4Y4F4n":
        Script11();
        break;
      case "5oT2ZYwjsEB":
        Script12();
        break;
      case "6N2ztqpQtIo":
        Script13();
        break;
      case "5XyScoNlG30":
        Script14();
        break;
      case "6E9qmhzUOt2":
        Script15();
        break;
      case "5fTUuyyY1II":
        Script16();
        break;
      case "5zglL54KGZt":
        Script17();
        break;
      case "6YD1htBRjwC":
        Script18();
        break;
      case "6DZOUKcN7Vq":
        Script19();
        break;
      case "5mcnXyY0nio":
        Script20();
        break;
      case "6dDkHMTm1Az":
        Script21();
        break;
      case "6gruk4wLeNR":
        Script22();
        break;
      case "6YR2Xt5XB6l":
        Script23();
        break;
      case "6KMThjTpkIv":
        Script24();
        break;
      case "6anit7Usf6q":
        Script25();
        break;
      case "6DVQc9zQcVX":
        Script26();
        break;
      case "6Dkd8kOj1N9":
        Script27();
        break;
      case "6Z9pHi8Dd5r":
        Script28();
        break;
      case "6cXVvo4oeaO":
        Script29();
        break;
      case "6oFIT2nLUen":
        Script30();
        break;
      case "6D9tGU67Wo6":
        Script31();
        break;
      case "5ZR49MbJlKg":
        Script32();
        break;
      case "6mibWhvQjAp":
        Script33();
        break;
      case "6djtR9hUZnE":
        Script34();
        break;
      case "6oXSRqViKNC":
        Script35();
        break;
      case "6CXGgo9uTvw":
        Script36();
        break;
      case "673RBH0CdGT":
        Script37();
        break;
      case "6CGAzZ68RPj":
        Script38();
        break;
      case "68COG6oCD0s":
        Script39();
        break;
      case "6TsZlfav4cw":
        Script40();
        break;
      case "6WXNEZXWMnX":
        Script41();
        break;
      case "6ecxsqwtQQn":
        Script42();
        break;
      case "68PDya2CV1H":
        Script43();
        break;
      case "5pdY8TghU4R":
        Script44();
        break;
      case "5lug316uLrN":
        Script45();
        break;
      case "5hboIda2mhs":
        Script46();
        break;
      case "67pLoYBnrod":
        Script47();
        break;
      case "6CStqEUJ5SU":
        Script48();
        break;
      case "5fHMJzH1KiO":
        Script49();
        break;
      case "6RUo8TzcYcf":
        Script50();
        break;
      case "6VvbCBzo79M":
        Script51();
        break;
      case "69zckQSjoWu":
        Script52();
        break;
      case "6cOecPMwW3z":
        Script53();
        break;
      case "64whuBDPXOr":
        Script54();
        break;
      case "6hN0r6awAKW":
        Script55();
        break;
      case "5bdmOYa11MR":
        Script56();
        break;
      case "6GLkYyBYOLy":
        Script57();
        break;
      case "68EZ94toKkO":
        Script58();
        break;
      case "5iplyYTRnzx":
        Script59();
        break;
      case "5qw5M43ayha":
        Script60();
        break;
      case "6pBewvzQso4":
        Script61();
        break;
      case "687K1xWEEAr":
        Script62();
        break;
      case "6VZb31SdDvW":
        Script63();
        break;
      case "6IpbGiZ4uux":
        Script64();
        break;
      case "6X0Ib4MHcGU":
        Script65();
        break;
      case "5oR8LD0lFCJ":
        Script66();
        break;
      case "6Vl7xqg0uBq":
        Script67();
        break;
      case "6fJ5VQzVPm7":
        Script68();
        break;
      case "5mApnEuZxo9":
        Script69();
        break;
      case "6TKGoKX116V":
        Script70();
        break;
      case "5xqa2PfQJT1":
        Script71();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('a1').replace(/\s+/g, '');
var back = ans.replace(/\s*;\s*/g, '; ').trim().replace(/;$/, '');
var check = 3;

if (!back.includes('.') && !back.includes(',')) {
  var arr = back.split(";").map(Number).sort((a, b) => a - b);
  var S = [708, 780, 807, 870];

  if (arr.length < 4 && new Set(arr).size === arr.length && arr.every(num => S.includes(num))) {
    check = 2;
  } else if (arr.length === 4 && arr.every((num, index) => num === S[index])) {
    check = 1;
  }
}

player.SetVar('c1a_check', check);
player.SetVar('a1', back);

}

window.Script2 = function()
{
  var player = GetPlayer();
var ans = player.GetVar('a2');
var check = 3;

var ans = ans.replace(/\s+/g, ''); 
var back = ans.replace(/\s*;\s*/g, '; ').trim();
back = back.replace(/;$/, '');

var arr = back.split(";");
arr = arr.map(function(num) {
  return parseInt(num);
});

var S = [870, 807, 780, 708];

if (arr.length < 4 && new Set(arr).size === arr.length) {
  var allInS = arr.every(function(num) {
    return S.includes(num);
  });

  if (allInS) {
    check = 2;
  }
} else if (arr.length === 4) {
  var isMatch = arr.every(function(num, index) {
    return num === S[index];
  });

  if (isMatch) {
    check = 1;
  } else {
    check = 3;
  }
}

player.SetVar('c1b_check', check);
player.SetVar('a2', back);

}

window.Script3 = function()
{
  var player = GetPlayer();
var inp = "a3";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script4 = function()
{
  var player = GetPlayer();
var inp = "a4";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script5 = function()
{
  var player = GetPlayer();
var inp = "a5";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script6 = function()
{
  var player = GetPlayer();
var inp = "a6";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script7 = function()
{
  var player = GetPlayer();
var inp = "a7";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script8 = function()
{
  var player = GetPlayer();
var inp = "a8";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script9 = function()
{
  var player = GetPlayer();
var inp = "a9";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script10 = function()
{
  var player = GetPlayer();
var inp = "a10";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script11 = function()
{
  var player = GetPlayer();
var inp = "a11";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script12 = function()
{
  var player = GetPlayer();
var inp = "a12";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script13 = function()
{
  var player = GetPlayer();
var inp = "a13";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script14 = function()
{
  var player = GetPlayer();
var inp = "a14";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script15 = function()
{
  // Lấy đối tượng player
var player = GetPlayer();

// Lấy giá trị của các biến check1, check2, check3, check4
var check1 = player.GetVar("check1");
var check2 = player.GetVar("check2");
var check3 = player.GetVar("check3");
var check4 = player.GetVar("check4");

// Tạo một mảng chứa các giá trị của check1, check2, check3, check4
var checks = [check1, check2, check3, check4];

// Sắp xếp mảng theo thứ tự từ bé đến lớn
checks.sort(function(a, b) {
  return a - b;
});

// Tạo mảng đúng để so sánh
var correctArray = [1, 2, 3, 4];

// So sánh mảng đã sắp xếp với mảng đúng
var check_tong_value;
if (JSON.stringify(checks) === JSON.stringify(correctArray)) {
  check_tong_value = 1;
} else {
  check_tong_value = 2;
}

// Cập nhật giá trị của biến check_tong
player.SetVar("check_tong_1c", check_tong_value);
}

window.Script16 = function()
{
  var player = GetPlayer();
var inp = "d2_1";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script17 = function()
{
  var player = GetPlayer();
var inp = "d2_2";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script18 = function()
{
  var player = GetPlayer();
var inp = "d2_3";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script19 = function()
{
  var player = GetPlayer();
var inp = "d2_4";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script20 = function()
{
  var player = GetPlayer();
var inp = "d2_5";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script21 = function()
{
  var player = GetPlayer();
var inp = "d2_6";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script22 = function()
{
  var player = GetPlayer();
var inp = "d2_7";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script23 = function()
{
  var player = GetPlayer();
var inp = "d2_8";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script24 = function()
{
  var player = GetPlayer();
var inp = "d2_9";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script25 = function()
{
  var player = GetPlayer();
var inp = "d2_10";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script26 = function()
{
  var player = GetPlayer();
var inp = "d2_11";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script27 = function()
{
  var player = GetPlayer();
var inp = "d2_12";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script28 = function()
{
  var player = GetPlayer();
var inp = "d2_13";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script29 = function()
{
  var player = GetPlayer();
var inp = "d2_14";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script30 = function()
{
  var player = GetPlayer();
var inp = "d2_15";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script31 = function()
{
  var player = GetPlayer();
var inp = "d2_16";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script32 = function()
{
  var player = GetPlayer();
var inp = "d2_17";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script33 = function()
{
  var player = GetPlayer();
var inp = "d2_18";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script34 = function()
{
  var player = GetPlayer();
var inp = "d2_19";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script35 = function()
{
  var player = GetPlayer();
var inp = "d2_20";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script36 = function()
{
  var player = GetPlayer();
var inp = "d3_1";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script37 = function()
{
  var player = GetPlayer();
var inp = "d3_2";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script38 = function()
{
  var player = GetPlayer();
var inp = "d3_3";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script39 = function()
{
  var player = GetPlayer();
var inp = "d3_4";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script40 = function()
{
  var player = GetPlayer();
var inp = "d3_5";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script41 = function()
{
  var player = GetPlayer();
var inp = "d3_6";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script42 = function()
{
  var player = GetPlayer();
var inp = "d3_7";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script43 = function()
{
  var player = GetPlayer();
var inp = "d3_8";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script44 = function()
{
  var player = GetPlayer();
var inp = "d3_9";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script45 = function()
{
  var player = GetPlayer();
var inp = "d3_10";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script46 = function()
{
  var player = GetPlayer();
var inp = "d3_11";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script47 = function()
{
  var player = GetPlayer();
var inp = "d3_12";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script48 = function()
{
  var player = GetPlayer();
var inp = "d3_13";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script49 = function()
{
  var player = GetPlayer();
var inp = "d3_14";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script50 = function()
{
  var player = GetPlayer();
var inp = "d3_15";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script51 = function()
{
  var player = GetPlayer();
var inp = "d3_16";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script52 = function()
{
  var player = GetPlayer();
var inp = "d3_17";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script53 = function()
{
  var player = GetPlayer();
var inp = "d3_18";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script54 = function()
{
  var player = GetPlayer();
var inp = "d3_19";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script55 = function()
{
  var player = GetPlayer();
var inp = "d3_20";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);
var check = false;

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi, thay thế nhiều khoảng trắng bằng một khoảng trắng
ans = ans.trim();
ans = ans.replace(/\s+/g, '');
player.SetVar(inp, ans);

// Kiểm tra nếu chuỗi chứa ký tự chữ cái hoặc không thể chuyển đổi thành số
if (/[a-zA-Z]/.test(ans) || isNaN(ans.replace(/,/g, '.'))) {
    check = true;
} else {
    // Xử lý chuỗi để giữ nguyên số 0 đầu chuỗi
    function addSpaceSeparators(numberStr) {
        var parts = numberStr.split(',');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join(',');
    }

    // Thêm dấu cách phân cách hàng nghìn mà không làm mất số 0 đầu
    var formattedResult = addSpaceSeparators(ans);

    // Đặt giá trị đã định dạng vào biến
    player.SetVar(inp, formattedResult);
}

}

window.Script56 = function()
{
  var player = GetPlayer();

for (var i = 1; i <= 8; i++) {
    var inp = "c4_" + i;          // Tạo tên biến động
    var ans = player.GetVar(inp);             
    var check = false;
    
    ans = ans.trim();
    ans = ans.replace(/\s+/g, ' ');
    player.SetVar(inp, ans);                  

    if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
        check = true;
    } else {
        var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
        
        function addSpaceSeparators(number) {
            var parts = number.toString().split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            return parts.join('.');
        }
        
        var formattedResult = addSpaceSeparators(result);
        var Result1 = formattedResult.replace(/\./g, ','); // Thay dấu . thành ,
        player.SetVar(inp, Result1);             
    }
}

}

window.Script57 = function()
{
  var player = GetPlayer();
var newVar = player.GetVar("dien23");
newVar = newVar.replace(/d/g,'đ');
newVar = newVar.replace(/D/g,'Đ');
newVar = newVar.toUpperCase();
player.SetVar("dien23", newVar);
}

window.Script58 = function()
{
  var player = GetPlayer();
var newVar = player.GetVar("dien24");
newVar = newVar.replace(/d/g,'đ');
newVar = newVar.replace(/D/g,'Đ');
newVar = newVar.toUpperCase();
player.SetVar("dien24", newVar);
}

window.Script59 = function()
{
  var player = GetPlayer();
var newVar = player.GetVar("dien25");
newVar = newVar.replace(/d/g,'đ');
newVar = newVar.replace(/D/g,'Đ');
newVar = newVar.toUpperCase();
player.SetVar("dien25", newVar);
}

window.Script60 = function()
{
  var player = GetPlayer();
var newVar = player.GetVar("dien26");
newVar = newVar.replace(/d/g,'đ');
newVar = newVar.replace(/D/g,'Đ');
newVar = newVar.toUpperCase();
player.SetVar("dien26", newVar);
}

window.Script61 = function()
{
  var player = GetPlayer();
var newVar = player.GetVar("dien27");
newVar = newVar.replace(/d/g,'đ');
newVar = newVar.replace(/D/g,'Đ');
newVar = newVar.toUpperCase();
player.SetVar("dien27", newVar);
}

window.Script62 = function()
{
  var player = GetPlayer();
var newVar = player.GetVar("dien28");
newVar = newVar.replace(/d/g,'đ');
newVar = newVar.replace(/D/g,'Đ');
newVar = newVar.toUpperCase();
player.SetVar("dien28", newVar);
}

window.Script63 = function()
{
  var player = GetPlayer();
var inp = "dien23";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script64 = function()
{
  var player = GetPlayer();
var inp = "dien24";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script65 = function()
{
  var player = GetPlayer();
var inp = "dien25";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script66 = function()
{
  var player = GetPlayer();
var inp = "dien26";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script67 = function()
{
  var player = GetPlayer();
var inp = "dien27";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script68 = function()
{
  var player = GetPlayer();
var inp = "dien28";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script69 = function()
{
  var player = GetPlayer();
var inp = "dien11";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script70 = function()
{
  var player = GetPlayer();
var inp = "dien12";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

window.Script71 = function()
{
  var player = GetPlayer();
var inp = "dien13";          // Thay giá trị biến ở đây
var ans = player.GetVar(inp);             
var check = false;
ans = ans.trim();
ans = ans.replace(/\s+/g, ' ');
player.SetVar(inp, ans);                  
if (/[a-zA-Z]/.test(ans) || isNaN(parseFloat(ans.replace(/,/g, '.')))) {
    check = true;
} else {
    var result = parseFloat(ans.replace(/\s+/g, '').replace(/,/g, '.'));
    function addSpaceSeparators(number) {
        var parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    var formattedResult = addSpaceSeparators(result);
    var Result1 = formattedResult.replace(/\./g, ','); 
    player.SetVar(inp, Result1);             
}
}

};
