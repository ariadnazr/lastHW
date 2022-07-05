let pURL = "https://my-json-server.typicode.com/ariadnazr/repo/planes";

fetch(pURL)
    .then(response => response.json())
    .then(json =>{

        let tablaGym = document.querySelector("#gym");

        let txtGym = "<tbody>";

        if (json.length < 1){
            txtGym = txtGym + "<tr><td colspan='6'> N/A </td></tr>";
        } else{
            json.forEach(element => {
                txtGym = txtGym + "<tr><td>"+ element.id +"</td>"+
                                    "<td>"+ element.nombre +"</td>"+
                                    "<td>"+ element.time +"</td>"+
                                    "<td>"+ element.costo +"</td>"+ 
                                    "<td>"+ element.beneficios +"</td>"+
                                    "<td>" + element.otros+ "</td></tr>";
            });
        }

        txtGym = txtGym + "</tbody>"

        tablaGym.innerHTML = txtGym;
    })
    .catch(error => console.log(error));

