


var urlbase = "http://api.wordnik.com:80/v4/word.json/";
var urlFinish = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
var numErrors = 0;



for (var i = 0; i < data.length; i++) {
    var word = data[i].word;
    var urlSynonyms = urlbase + word + urlFinish;

	//var throttleIt = _.throttle(getSynonyms, 100);
	 
    function getSynonyms(word) {
        
        $.get(urlSynonyms, function(wordIter, status) {
            var synonymsArray = _.findWhere(wordIter, {
                relationshipType: "synonym"
            });
			if (synonymsArray === undefined){
				return false;
			}
			else{
	            var synonymsString = synonymsArray.words.join(", ");
	            console.log(synonymsString);
	        	return synonymsString;
			}
            
            
        });
    }   
    var syn = getSynonyms();
    if (syn){
	    data[i].synonyms = syn;
	    //data[i].synonyms = throttleIt(word); 
	    console.log("word:" + data[i].synonyms);
    }
    else{
	    console.warn(syn);
	    data[i].synonyms = "No Notable Synonyms for " + word;
    }
}


console.log(numErrors);
// var synonymsString = synonymsArray.words.join(", "); // this line is occassionally erroring with "words" no clue wtf but whatevs 
// issue?
// are try and catch actual keywords? that I've just missed somehow? wtf
// Yeah - they exist - and so does this model - in most languages


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
	$("#definition").html("<div class='back'><h3 style='color:darkgrey;'>" + data[randomNumber].definition_value + "<br><small>" + data[randomNumber].synonyms + "</small></h3></div>");
	
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
		var wordSyns = data[i].synonyms;
		var numbering = i + 1;
		$("#all").append( "<h3>"+ numbering + ". " + word + "</h3><p>" + definition + "<br>" +  wordSyns +"<br>" + "<a href='" + wordlink + "' target='_blank'>Full Definition</a></p>");
	}
/* +*/

});

