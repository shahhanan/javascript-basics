


var trTemplate = '<tr> <td>{{name}}</td> <td><button onclick = "readProfile({{id}})">Get Full Details </button></td></tr>';



var strtempllate = function(templateString, context) // function starts here
	{
        var placehoders = [];
        var result = templateString.replace("",""); 
        var placehoders = templateString.match(/{{\w*}}/gi);console.log(placehoders);
        for( var i in placehoders ){
            var keyregexToReplace = placehoders[i];   
            var key = keyregexToReplace.replace("{{","").replace("}}","");
            result = result.replace(keyregexToReplace,context[key] || '');

        }
        return result;
        

    };



