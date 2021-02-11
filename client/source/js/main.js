const addFile = (fileName="") =>{

    var imported = document.createElement('script');
    imported.src = `./source/js/${fileName}`; 
    document.head.appendChild(imported);

}

const loadLocalFiles = () =>{

    addFile("io.js");
    addFile("loop.js");
    addFile("controles.js");
}

window.onload = loadLocalFiles;
