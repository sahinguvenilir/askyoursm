/**
 * 
 */

//var newcompany = 'gde';
//var formercompany = 'enginef';
//console.log(('newcompany'+' formercompany').length);


//console.log(rand);
//console.log(Math.floor(Math.random()*family.length))



function  coachsays() {
	
	
	
	
	var enhancer = function (x) {
		
		var quote = ['Did you bring this question to them?','Do they have to finish it all?','Does it have an impact on the sprint goal?',
			'Do they understand the business requirements?','Are they multi-tasking?','Do they know their past performance?','Is it a new team?','Do they understand empirical process control theory?','Are they showing attention to tech debt?',
			'Do they spend enough time for refinement?','Do they do context switching for emergent requirements?','Is there an alignment around DoD?','Do they visualise their work?'];
		var rand = quote[Math.floor(Math.random() * quote.length)];
		
		return '<b>Scrum Master says:</b> ' +'"'+rand + '"'; }
	
	var x = x;
	var y = y;
	var ws = document.getElementById("coachsays");
	//var ya = document.getElementById("youask");
	var ftxt = document.getElementById("freetext").value;
	//ya.innerHTML = ftxt
	
	if (ftxt !== "") {
		ws.innerHTML =  enhancer(x)
	}
	else if (ftxt == "") {
		alert("Please ask something =(")
		return false;
	}

}
