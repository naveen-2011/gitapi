function fetchDetails(){
    const username=document.getElementById("username").value;
    const url=`https://api.github.com/users/${username}/repos`
    fetch(url).then((response)=>{return response.json()}).then(data=>{
         fetchdata(data);
        }).catch(err=>console.log(err))
    function fetchdata(d){
        document.write("<table border='1'>");
        document.write("<tr><td>Name</td><td>Description</td></tr>")
        d.forEach(x => {
            document.write(`<tr><td>${x.name}</td><td>${x.description}</td></tr>`)
        });
        document.write("</table>")
    }
}
