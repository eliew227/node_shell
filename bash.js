// Output a prompt
var command = require('./commands');
//console.log(process.env);
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
    var cmd = data.toString().trim(); // remove the newline
    // process.echstdout.write('You typed: ' + cmd);
	var cmd_func = cmd.split(" ")[0];  //get the command
	var file = cmd.split(" ").slice(1); 

    command[cmd_func](file,done);  

});


var done = function(output){
	process.stdout.write(output);
	process.stdout.write("\nprompt > ");
}