    
		
	         // AJAX UTILITY FUNCTION
	var reqAjax = function(Data, onComplete, onError)
	{
		var responcemessage;
		if(!Data.method == "")
		{
			if(Data.method == "POST"){
				postAjax(Data);
			}
			else if(Data.method == "GET")
			{
						 if(!Data.url == "")
				           {
							      var xmlhttp;    
								  xmlhttp = new XMLHttpRequest();
								  xmlhttp.onreadystatechange = function(){
									// create spinner div
									var sloading = document.createElement('div');
									sloading.id = Data.queryParams.divID;
									sloading.className = Data.queryParams.divClass;
									document.getElementById(Data.queryParams.appendto).appendChild(sloading);
									
									if(this.readyState == 1)
									{
										document.getElementById(sloading.id).style.display = "block";  
									}
									if (this.readyState == 4)
									{
										document.getElementById(sloading.id).style.display = "none";
									   
									}

									if (this.readyState == 4 && this.status == 200) 
									{
									   resp = this.responseText;
									   var data = JSON.parse(resp);
									   onComplete(data);
									   
									}
								};
								  xmlhttp.open(Data.method, Data.url+"?customerid="+Data.queryParams.id, true);
								  xmlhttp.send();
						    
						   }
						else
							{
						    responcemessage = "Please enter a valid url in the configuration";
							onError(responcemessage);
							}
				           
				
			}
			else{
				responcemessage = "Please enter a valid method in the configuration";
				 onError(responcemessage);
			}
		}
		else if(Data.method == "undefined"){}
		else{}
	}	
	
	
     
    		
		
	
	
	
	
	
	
	
	
	
	
	
	// MAIN CODE
    
    //    reqAjax(Data, function(responseData)
	//	{
    //	var Div0 = document.createElement('div');
	//	Div0.id = 'maincontainer';
	//	Div0.className = 'container';
	//	document.getElementsByTagName('body')[0].appendChild(Div0);
	//	Div0.innerHTML = responseData.map(generate);
    	
    //    }, function(respdata){
	//		alert(respdata);
	//	});
		
	//    function generate(rawData)
	//			{
	//			document.write('<h4>'+rawData.customerName+': '+rawData.customerNumber+'</h4>');
	//			}
	
	
 
	