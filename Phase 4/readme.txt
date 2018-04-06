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
                      
and genetartes the responce if the ajax call is success else returns a custom message about the error.
the responce generated is a json array of objects.
