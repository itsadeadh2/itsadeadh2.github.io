/*
//	Made with <3 by Marcus Bizal
//	github.com/marcbizal
//	linkedin.com/in/marcbizal
*/

$(document).ready(function() {
    "use strict";

    // UTILITY
    function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
    }
    // END UTILITY

    // COMMANDS
    function clear() {
            terminal.text("");
    }

    function help() {
            terminal.append(`about: learn a little about me
node: see NodeJs projects developed by me
docker: see docker images created by me
gamedev: see my attempts at gamedev
contact: get in touch with me
thegame: you lost
`);
    }

    function echo(args) {
            var str = args.join(" ");
            terminal.append(str + "\n");
    }

    function about() {
        terminal.append(`Hello.
My name is Thiago Barbosa and I'm a JavaScript Back-End developer!
I currently work in the nother area of Brazil developing API's for ROVEMA.
I love the NodeJs environment and have been working with it since 2017.
I also have experience with Python and C# altough I haven't worked with them in a while.
`)
    }

    function docker() {
        terminal.append(`Docker projects:

<a href="https://github.com/itsadeadh2/ecr-deployer" target="_blank">ecr-deployer</a>: A simple docker in docker image pre-configured with the necessary tools to push images to ecr.

`)
    }

    function node() {
        terminal.append(`NodeJs projects:

<a href="https://github.com/itsadeadh2/Marcellus" target="_blank">Marcellus</a>: Create nodejs/express apis and routes with a simple command!

<a href="https://github.com/itsadeadh2/IkarosBot" target="_blank">IkarosBot</a>: Twitch bot that allows followers to type GTA cheats during gameplay.

<a href="https://github.com/itsadeadh2/vanilla_the_cat" target="_blank">Vanilla The Cat</a>: Receive gitlab notifications in Telegram!

`)
    }

    function gamedev() {
        terminal.append(`To see some of my work as an aspiring gamedev access my <a href="https://itsadeadh2.itch.io/" target="_blank">itch.io</a> page!
`)
    }

    function contact() {
        terminal.append(`Contact info:
e-mail: itsadeadh2@gmail.com
phone: +55 (69) 99221-9034
twitter: @itsadeadh2
telegram: @itsadeadh2
`)
    }

    function thegame() {
            terminal.append(`Yes, you lost. I lost, everybody lost.
`);
    }
    // END COMMANDS

    var title = $(".title");
    var terminal = $(".terminal");
    var prompt = "➜";
    var path = "~";

    var commandHistory = [];
    var historyIndex = 0;

    var command = "";
    var commands = [{
                    "name": "clear",
                    "function": clear
            }, {
                    "name": "help",
                    "function": help
            }, {
                    "name": "node",
                    "function": node
            }, {
                    "name": "docker",
                    "function": docker
            }, {
                    "name": "gamedev",
                    "function": gamedev
            },  {
                    "name": "contact",
                    "function": contact
            }, {
                    "name": "about",
                    "function": about
            }, {
                    "name": "thegame",
                    "function": thegame
            }, {
                    "name": "echo",
                    "function": echo
            }];

function processCommand() {
    var isValid = false;

    // Create args list by splitting the command
    // by space characters and then shift off the
    // actual command.

    var args = command.split(" ");
    var cmd = args[0];
    args.shift();

    // Iterate through the available commands to find a match.
    // Then call that command and pass in any arguments.
    for (var i = 0; i < commands.length; i++) {
            if (cmd === commands[i].name) {
                    commands[i].function(args);
                    isValid = true;
                    break;
            }
    }

    // No match was found...
    if (!isValid) {
            terminal.append("zsh: command not found: " + command + "\n");
    }

    // Add to command history and clean up.
    commandHistory.push(command);
    historyIndex = commandHistory.length;
    command = "";
}

function displayPrompt() {
    terminal.append("<span class=\"prompt\">" + prompt + "</span> ");
    terminal.append("<span class=\"path\">" + path + "</span> ");            
}

// Delete n number of characters from the end of our output
function erase(n) {
    command = command.slice(0, -n);
    terminal.html(terminal.html().slice(0, -n));
}

function clearCommand() {
    if (command.length > 0) {
            erase(command.length);
    }
}

function appendCommand(str) {
    terminal.append(str);
    command += str;
}

/*
//	Keypress doesn't catch special keys,
//	so we catch the backspace here and
//	prevent it from navigating to the previous
//	page. We also handle arrow keys for command history.
*/

$(document).keydown(function(e) {
    e = e || window.event;
    var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

    // BACKSPACE
    if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
            e.preventDefault();
            if (command !== "") {
                    erase(1);
            }
    }

    // UP or DOWN
    if (keyCode === 38 || keyCode === 40) {
            // Move up or down the history
            if (keyCode === 38) {
                    // UP
                    historyIndex--;
                    if (historyIndex < 0) {
                            historyIndex++;
                    }
            } else if (keyCode === 40) {
                    // DOWN
                    historyIndex++;
                    if (historyIndex > commandHistory.length - 1) {
                            historyIndex--;
                    }
            }

            // Get command
            var cmd = commandHistory[historyIndex];
            if (cmd !== undefined) {
                    clearCommand();
                    appendCommand(cmd);
            }
    }
});

$(document).keypress(function(e) {
    // Make sure we get the right event
    e = e || window.event;
    var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

    // Which key was pressed?
    switch (keyCode) {
            // ENTER
            case 13:
                    {
                            terminal.append("\n");

                            processCommand();
                            displayPrompt();
                            break;
                    }
            default:
                    {
                            appendCommand(String.fromCharCode(keyCode));
                    }
    }
});

// Set the window title
title.text("1. you@thiagobarbosa: ~ (zsh)");

// Get the date for our fake last-login
var date = new Date().toString(); date = date.substr(0, date.indexOf("GMT") - 1);

// Display last-login and promt
terminal.append("Last login: " + date + " on ttys000\n"); displayPrompt();
appendCommand('help');
terminal.append("\n");
processCommand();
displayPrompt();
});