const fs = require("node:fs");
const path = require("node:path");
const readline = require("node:readline");

const pathNotes = path.join(path.resolve(), "notes");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// validation file
function validationFile(fileName) {
  if (fs.existsSync(path.join(pathNotes, fileName + ".txt"))) {
    return true;
  } else {
    return false;
  }
}

// create a note
function createNote(title, content) {
  const note = `Title: ${title}\nContent: ${content}`;
  fs.writeFileSync(
    path.join(pathNotes, title.toLowerCase() + ".txt"),
    note,
    "utf8"
  );
  console.log(`Created file: ${title.toLowerCase()}.txt`);
}

// delete a note
function deleteNote(title) {
  if (validationFile(title)) {
    pathFile = path.join(pathNotes, title.toLowerCase() + ".txt");
    fs.unlinkSync(pathFile);
    console.log(`File deleted: ${title.toLowerCase()}.txt`);
  } else {
    console.log(`File not found: ${title.toLowerCase()}.txt`);
  }
}

// list notes
function listNotes() {
  const notes = fs.readdirSync(pathNotes);
  let listNotes = "Notes:\n";
  let i = 1;

  if (notes.length > 0) {
    notes.forEach((file) => {
      listNotes = listNotes + `${i}) ${file}\n`;
      i++;
    });
    console.log(listNotes);
  } else {
    console.log("Not a note.");
  }
}

// read note
function readNote(title) {
  if (validationFile(title)) {
    const note = fs.readFileSync(
      path.join(pathNotes, title.toLowerCase() + ".txt"),
      "utf8"
    );
    const rows = note.split("\n");
    rows.shift();
    const content = rows.join("\n");

    const strNote = `Title: ${title}\n${content}`;
    console.log(strNote);
  } else {
    console.log(`File not found: ${title}.txt`);
  }
}

// exit
function exit() {
  rl.close();
  process.exit(0);
}

//menu
function menu() {
  const menuText =
    "====================\n" +
    "Notes:\n" +
    "1) Create a note.\n" +
    "2) Delete a note.\n" +
    "3) List notes.\n" +
    "4) Read a note.\n" +
    "5) Exit.\n" +
    "====================\n" +
    "Enter your choice: ";

  rl.question(menuText, (answer) => {
    switch (answer.trim()) {
      case "1":
        rl.question("Title: ", (title) => {
          if (!validationFile(title)) {
            rl.question("Content: ", (content) => {
              createNote(title, content);
              menu();
            });
          } else {
            console.log(`There is already a file with that name: ${title}.txt`);
          }
        });
        break;
      case "2":
        rl.question("Title: ", (title) => {
          if (validationFile(title)) {
            console.log("====================");
            readNote(title);
            console.log("====================");
            rl.question(`Delete ${title} (y/n): `, (answer) => {
              if (answer.toLowerCase() === "y") {
                deleteNote(title);
              } else if (answer.toLowerCase() === "n") {
                console.log("File not deleted, returning to menu.");
              } else {
                console.log("invalid input returning to menu.");
              }
              menu();
            });
          } else {
            console.log(`File not fund: ${title.toLowerCase()}.txt`);
            menu();
          }
        });
        break;
      case "3":
        listNotes();
        menu();
        break;
      case "4":
        rl.question("Title: ", (answer) => {
          console.log(answer);
          if (validationFile(answer.toLowerCase())) {
            readNote(answer);
          } else {
            console.log(`File not found: ${answer.toLowerCase()}.txt`);
          }
          menu();
        });
        break;
      case "5":
        rl.question("Close program (y/n): ", (answer) => {
          if (answer.toLowerCase() === "y") {
            console.log("Closed terminal.");
            exit();
          } else if (answer.toLowerCase() === "n") {
            menu();
          } else {
            console.log("Option invalid.");
            menu();
          }
        });
        break;
      default:
        console.log("Invalid  opition.");
        menu();
    }
  });
}

menu();