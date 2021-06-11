
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

 let Addedlist=[];
function onDataReceived(text) {
  if (text === 'quit\n' || text==='exit\n') {
    quit();
  }
  else if(text === 'hello\n'  || text.startsWith('hello')){
    hello(text);
  }
  else if(text=== 'list\n'){
      List();
    }
  else if(text==='add\n'){
     console.log("error! Add the text")
  }
  else if(text.startsWith('add') ){
    Add(text);
   }
   else if(text==='remove\n'){
       RemovelAST();
   }
   else if (text.startsWith('remove')){
        RemoveAtPosition(text);
   }

  else  if(text==='help\n'){
      Help();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}
//list the content of the array
function List(){
  for( var i=0;i<Addedlist.length;i++){
    console.log(i+1  + "-" + " [ ] "+ Addedlist[i]);
  }

}
//add function
function Add(text){
      Addedlist.push(text.substring(3).trim());
      console.log(Addedlist);
    }
//function remove first element
// function RemovelAST(){
//    Addedlist.pop();
// }  
function RemoveAtPosition(text){
       text=text.substring(6);
       if(text>0 && text<=Addedlist.length){
        console.log(text);
        Addedlist.splice(text-1,1);
       }
       else{
          console.log("Error can't delete");
       } 
   }

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  text=text.trim("\n","");
  text=text.trim(" ");
  text=text+"!";
  console.log(text);
}
// help function lists all the available commands
function Help(){
  console.log("list all the commands");
  console.log("exit or quit : quits the application with goodbye ");
  console.log("hello: prints Hello!");
  console.log("hello world: Hello world!");
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Hajar Msheik")
