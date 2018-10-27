$(document).ready(function(){
            function getRecords(route){
                let port = 3000, 
                    url = `http://localhost:${port}/api/${route}`,
                    tablesDIV = $(".table-records"),
                    reserveDIV = $(".reserve-records"),
                    counter = 0; 
        
                $.ajax({
                    url: url,
                    method: 'GET',
                    }).then(function(data){
                        console.log(data);
                        jQuery.each(data, function( i, obj ){

                            if(route === "tables"){
                                tablesDIV.append(`<div class="div-group-item">
                                                <h2>Table #${(counter+1)}</h2><hr>
                                                <h2>ID: ${obj.id}</h2><br>
                                                <h2>Name: ${obj.name}</h2><br>
                                                <h2>Email: ${obj.email}</h2><br>
                                                <h2>Phone: ${obj.phone}</h2><br>
                                            </div>`);
                            }else if(route === "reservations"){
                                reserveDIV.append(`<div class="div-group-item">
                                                <h2>Table #${(counter+1)}</h2><hr>
                                                <h2>ID: ${obj.id}</h2><br>
                                                <h2>Name: ${obj.name}</h2><br>
                                                <h2>Email: ${obj.email}</h2><br>
                                                <h2>Phone: ${obj.phone}</h2><br>
                                            </div>`);
                            }
                            
                            counter++;
                    });
                })
            }

            getRecords("tables");
            getRecords("reservations");
        });