
//function strtemplate()
//{
    
    var strtempllate = function(templateString, context) // function starts here
	{
        var placehoders = [];
        var result = templateString.replace("",""); 
        var placehoders = templateString.match(/{{\w*}}/gi);
        console.log(placehoders);
        for( var i in placehoders ){
            var keyregexToReplace = placehoders[i];   
            var key = keyregexToReplace.replace("{{","").replace("}}","");
            result = result.replace(keyregexToReplace,context[key] || '');

        }
        return result;
        

    };
    strtempllate('<tr> <td>{{customerName}}</td> <td><button onclick = "readProfile({{customerNumber}})">Get Full Details </button></td></tr>',{customerName:'sasa', customerNumber: '123'});
//}






// https://stackoverflow.com/questions/24468459/sending-a-json-to-server-and-retrieving-a-json-in-return-without-jquery