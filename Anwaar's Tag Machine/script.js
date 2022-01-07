let totalTags = 0;


function start() {
	let tigs = document.getElementById('allTags').value;
	let allTags = tigs.split(', ');   
	totalTags = allTags.length;

	if (allTags.length > 50) {
		for (var i = allTags.length; i >= 50; i--) {
			allTags.splice(i , 1);
    console.log('yess');
		}
    } 

	document.getElementById('allTags').value='';

    if (totalTags<50){document.getElementById('bootSentence').innerHTML='Top '+totalTags+' Tags selected from '+ totalTags +' tags.'}
    else{document.getElementById('bootSentence').innerHTML='Top 50 Tags selected from '+ totalTags +' tags.'}

	let newTags = [...new Set(allTags)];

	let newerTags = newTags.toString();
	let newestTags = newerTags.replace(/,/g, ", ");

	document.getElementById('output').innerHTML = newestTags;
}