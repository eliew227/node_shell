var fs = require('fs');
var request = require('request');


module.exports = {
    pwd: function(file,done) {
        var output = process.cwd();
        done(output);
        
    },
    date: function(file,done) {
        var date = new Date();
        var output = date.toString();
        done(output);
    },
    ls: function(file,done) {
    	var output = "";
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
            	output += file.toString() + '\n';
            });
        done(output);
        });
    },
    echo: function(file,done) {
    	var output;
        if (file[0][0] === "$") {
        	output = process.env[file[0].slice(1)];
        } else {
        	output = file.join(" ");
        }
        done(output);
    },
    cat: function(file, done) {
        var count = 0;
        var output = "";
        file.forEach(function(eachFile) {
            fs.readFile(eachFile, (err, data) => {
                count++;
                if (err) throw err;
                output += data.toString() + '\n';
                if (count >= file.length) {
                    done(output);	
                }
            });
        });

    },
    head: function(file, done) {
        var output = "";
        fs.readFile(file[0], (err, data) => {
            if (err) throw err;
            var first_five = data.toString().split("\n").slice(0, 5).join("\n");
            output = first_five;
            done(output);
        });

    },
    tail: function(file, done) {
        var output = "";
        fs.readFile(file[0], (err, data) => {
            if (err) throw err;
            var last_five = data.toString().split("\n").slice(-6).join("\n");
            output = last_five;
            done(output);
        });
    },
    curl: function(website, done) {
        var output = "";
        request('http://' + website[0], function(error, response, body) {
            if (!error && response.statusCode == 200) {
                output += body; // Show the HTML for the Google homepage.
            }
            done(output);
        });
    },
    find: function(file,done){
    	var output = "";
        fs.readdir(file[0], function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
            	output += file.toString() + '\n';
            });
        });


    	if(thisdir has no subdirc)  this.ls] 
    	//[command]find()
    }
};













