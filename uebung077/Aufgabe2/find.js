const fs = require('fs');

let path = (process.argv.length === 3) ? process.argv[2] : "./";
if (! path.endsWith("/")) { path += "/";}

function listDir(path) {
    fs.readdirSync(path).forEach(item => {
        if (fs.statSync(path+item).isDirectory()) {
            listDir(path + item + "/");
        } else {
            console.log(path+item);
        }
    });
}


if (fs.existsSync(path)) {
    //console.log(fs.readdirSync(PATH, { withFileTypes: true }));
    listDir(path);
} else {
    console.error(`Der angegebene Pfad »${path}« existiert nicht.`)
    process.exit(1);
}
