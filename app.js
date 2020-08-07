const fs = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');


var fullname = yargs.argv._[0];
global.file_exist = false;
var data = "You are awesome"
if(fullname == undefined){
    console.log(chalk.red("Please enter the file name in txt format"));
}
else{
    console.log("sucess");
    var splitname = fullname.split('.');
    var mainname = splitname[0];
    // console.log(splitname[0]);
    var readme = fs.readFileSync('./files_names.txt','utf8').split(/\r?\n/);
    // console.log(readme);
    readme.forEach(element => {
        // console.log(element);
        // console.log(fullname);
        if(element == fullname){
            file_exist = true;
        }
    });
    if(file_exist == true){
        console.log(chalk.red("The file name you entered already exists\nPlease enter the new file name"));
    }
    else{
        var filenames = fullname +'\n';
        fs.appendFile('./files_names.txt',filenames,function(err,data){
                if(err)console.log(err);
                else{
                    console.log(chalk.green("Data appended sucessfully"));
                }
            })
            fs.writeFile(fullname,data,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(chalk.green("Data written sucessfully"));
                }
            });
    }
    //    console.log(file_exist); 
}