//  function loadJSON(callback) {   

//     var xobj = new XMLHttpRequest();
//         xobj.overrideMimeType("application/json");
//     xobj.open('GET', 'json.json', true); 
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
//  }



//  function init() {
//  loadJSON(function(response) {
//   // Parse JSON string into object
//     var actual_JSON = JSON.parse(response);

//  });
// }

(function () {
    var get_key, json;
    json = [
        {
            name: 'Ape',
            sales: 100,
            location: 'US'
        },
        {
            name: 'Bob',
            sales: 200,
            location: 'UK'
        },
        {
            name: 'Cat',
            sales: 120,
            location: 'Hell'
        }
    ];
    get_key = function (json, key) {
        var i, item, len, num, result;
        result = [];
        for (num = i = 0, len = json.length; i < len; num = ++i) {
            if (window.CP.shouldStopExecution(1)) {
                break;
            }
            item = json[num];
            if (key in item) {
                result.push(item[key]);
            }
        }
        window.CP.exitedLoop(1);
        return result;
    };
    $('#name').html(get_key(json, 'name').join(', '));
    $('#sales').html(get_key(json, 'sales').join(', '));
    $('#location').html(get_key(json, 'location').join(', '));
}.call(this));