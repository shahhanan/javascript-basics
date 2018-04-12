
	         // AJAX UTILITY FUNCTION
	var reqAjax = function(Data, onComplete, onError) // function starts here
	{
		var responcemessage;
		var method = ["GET", "POST", "PUT", "DELETE"];
		
		
			
			 if(method.indexOf(Data.method) > -1) // data method check condition
			{
				switch (Data.method) 
				{
					case "GET":
									var xmlhttp;    
									xmlhttp = new XMLHttpRequest();
									xmlhttp.onreadystatechange = function(){
									// create spinner div
									var sloading = document.createElement('div');
										sloading.id = Data.payload.divID;
										sloading.className = Data.payload.divClass;
										document.getElementById(Data.payload.appendto).appendChild(sloading);
									
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

										if(this.readyState == 4 && this.status >= 400 )
										{
											resp = this.responseText;
											onError(resp);
										}
							
									};
									xmlhttp.open(Data.method, Data.url+"?customerid="+Data.payload.id, true);
									xmlhttp.send();
						break;

					case "POST":
									var sendInfo = JSON.stringify(Data.payload);
									var xmlhttp;    
									xmlhttp = new XMLHttpRequest();
									xmlhttp.onreadystatechange = function(){
									// create spinner div
									var sploading = document.createElement('div');
										sploading.id = Data.divID;
										sploading.className = Data.divClass;
										document.getElementById(Data.appendto).appendChild(sploading);
									
									if(this.readyState == 1)
									{
										
										document.getElementById(sploading.id).style.display = "block";  
									}
									if (this.readyState == 4)
									{
										document.getElementById(sploading.id).style.display = "none";
									
									}

									if (this.readyState == 4 && this.status == 200) 
									{
									resp = this.responseText;
								//	var data = JSON.parse(resp);
									onComplete(resp);
									
									}

										if(this.readyState == 4 && this.status >= 400 )
										{
											resp = this.responseText;
											onError(resp);
										}
							
									};
									xmlhttp.open(Data.method, Data.url, true);
									xmlhttp.setRequestHeader("Content-type", "application/json");
									xmlhttp.send(sendInfo);
						break;
						
					case "PUT":
						day = "Tuesday";
						break;
					case "DELETE":
						day = "Wednesday";
						break;
				}
							        	
			} // data method check condition ends here
			else // data method check condition else here
			{
				responcemessage = "Please enter a valid method in the configuration";
				 onError(responcemessage);
			}
		 
		
		
	}	// function ends here
	
	
 
	