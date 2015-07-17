/*
	
*/	
var urlbase = "http://api.wordnik.com:80/v4/word.json/";
var urlFinish = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";	
	
for(var i = 0; i < data.length; i++){
	var word = data[i].word;
	var urlSynonyms= urlbase + word + urlFinish;
	function getSynonyms(word){
	    $.get(urlSynonyms, function(word, status){
	        var synonymsArray = _.findWhere(word, {relationshipType: "synonym"});
	        var synonymsString = synonymsArray.words.join(", ");
	        console.log(synonymsString);
	        return synonymsString;
	    });
	}
	data[i].synonyms = getSynonyms(word);
	console.log(data[i].synonyms);
	
}	





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



/*
function getAndIterateData() {					
		_.each(data, function(datum){ 
		    input = datum.word; 	   
			return input;
	    });  
	}

*/

