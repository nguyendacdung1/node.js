var readline = require("readline"),
    rl = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt("^.^");
rl.prompt();

var toDolist = [];
var commands = {
    ls:function(){
        console.log(toDolist);
    },
    add:function(item){
        toDolist.push(item);
    },
    rm:function(item){
        console.log("I want to remove", item, "!!");
    }
}

rl.on('line', function(line){
    // console.log("You said: ", line);

    // toDolist.push(line); //Xuất vào từng mảng
    // console.log(toDolist);

    var words = line.split(' ');
        // command = words[0];
        command = words.shift();
        argsStr = words.join(' ');

        commands[command](argsStr);

        // if(command === 'ls'){
        //     console.log(toDolist);
        // }
        // if(command === 'add'){
        //     // words.join(' ');
        //     // toDolist.push(item);
        //     var item = words.join(' ');
        //     toDolist.push(item);
        // }
        
    // console.log('the command is ', command);
    // console.log(words);
    rl.prompt();
});