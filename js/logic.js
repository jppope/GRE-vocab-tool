
function newWordSet(){
	var randomNumber = 0;
	function word(){
	function getRandomArbitrary(min, max) {
	    return Math.floor(Math.random() * (max - min) + min);
		}
	console.log(getRandomArbitrary(0,data.length));	
	randomNumber = getRandomArbitrary(0, data.length);		
		}
	word();	
	$("#word").html("<div class='front text-center'><br><h1>" + data[randomNumber].word + "</h1></div>");
	$("#definition").html("<div class='back'><h3 style='color:darkgrey;'>" + data[randomNumber].definition_value + "</h3></div>");
	
}
	
	$('#new-word').on('click', function(event) {        
         newWordSet();           
        });
		$('#define').on('click', function(event) {        
             $('#definition').toggle('show');
        });
        
       

$('.button-next').on('click', function(event) { 
for(var i = 0; i < data.length; i++){
		var word = data[i].word;
		console.log(word);
		var definition = data[i].definition_value;
		var wordlink = data[i].word_link;
		var numbering = i + 1;
		$("#all").append( "<h3>"+ numbering + ". " + word + "</h3><p>" + definition + "<br>" + "<a href='" + wordlink + "' target='_blank'>Full Definition</a></p>");
	}
/* +*/

});

 






