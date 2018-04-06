craeting a util function for handling ajax calls.
the function recieves json data in this format 
                     {
                        method: "GET",
                        url: "php/getData.php",
                        queryParams: 
                                  {
                                    id: "",
                                    divClass: "loading-bar",
                                    divID: "loading-spinner",
                                    appendto: "maincontainer",
                                    
                                  }
                      }
                      
and genetartes the responce according to the http state of the ajax call
