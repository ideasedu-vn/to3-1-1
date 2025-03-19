function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61F6qlkSLBb":
        Script1();
        break;
      case "6XawrO12oPv":
        Script2();
        break;
      case "6N5RUXCdhBX":
        Script3();
        break;
      case "6XZ9iVxxcJv":
        Script4();
        break;
      case "6f4BLDVJ9Gc":
        Script5();
        break;
      case "5d9iLX1xgaj":
        Script6();
        break;
      case "5xgxxdY0Qq4":
        Script7();
        break;
      case "5ZJWoQfjm73":
        Script8();
        break;
      case "60bOiktyLez":
        Script9();
        break;
      case "5vNMlmRCF99":
        Script10();
        break;
      case "6LWOA8iQKjf":
        Script11();
        break;
      case "6PVKT5FxCvx":
        Script12();
        break;
      case "5lDPjytq7bo":
        Script13();
        break;
      case "6nWpS103G01":
        Script14();
        break;
      case "5Vzbl5jwhlX":
        Script15();
        break;
      case "6TReW3ThJgI":
        Script16();
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

window.Script2 = function()
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

window.Script3 = function()
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

window.Script4 = function()
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

window.Script5 = function()
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

window.Script6 = function()
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

window.Script7 = function()
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

window.Script8 = function()
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

window.Script9 = function()
{
  var player = GetPlayer();
var inp = "d6_1";          // Thay giá trị biến ở đây
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

window.Script10 = function()
{
  var player = GetPlayer();
var inp = "d6_2";          // Thay giá trị biến ở đây
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

window.Script11 = function()
{
  var player = GetPlayer();
var inp = "d6_3";          // Thay giá trị biến ở đây
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

window.Script12 = function()
{
  var player = GetPlayer();
var inp = "d6_4";          // Thay giá trị biến ở đây
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

window.Script13 = function()
{
  var player = GetPlayer();
var inp = "d6_5";          // Thay giá trị biến ở đây
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

window.Script14 = function()
{
  var player = GetPlayer();
var inp = "d6_6";          // Thay giá trị biến ở đây
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

window.Script15 = function()
{
  var player = GetPlayer();
var inp = "d6_7";          // Thay giá trị biến ở đây
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

window.Script16 = function()
{
  var player = GetPlayer();
var inp = "d6_8";          // Thay giá trị biến ở đây
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

};
