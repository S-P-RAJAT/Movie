var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");


app.get("/",function (req, res){
	//var query = req.query.search;
	var url = "https://learnwebcode.github.io/json-example/pets-data.json";
	request(url,function(error,response,body){
		if(!error && response.statusCode == 200){
			var parsedData = JSON.parse(body);
			var obj = parsedData["pets"];
			var str = "";
			function func(item) {
				str += "<div>  Name:" + item["name"];
				str += "<br> Birth Year :" + item["favFoods"];
				//str += "<br>Type :" + item["Type"];
				//str += "<br><img style=\"align: right;\" src = \"" + item["Poster"]+"\"></div>";
			}
			for(var i =0;obj[i]!=undefined;i++){
				func(obj[i]);
			}
			res.send(str);
		}
	});
});

app.listen(3000,"localhost",function () {
	console.log("Movie App has started"); 
})