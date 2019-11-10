const path = require("path");
const fs = require("fs");
const argv=process.argv;
let newDirName;
if(argv.length<=2){
    throw "请输入需要新建模板的名字";
}
else if(argv.length==3){
    newDirName=argv[2];
}
else {
    throw "请输入正确格式: node .\node.js [name]" ;
}
const sourceDir = "./src/template/entryTemp";
const desPath = "./src/entry";

const copyDirFun = (from, to, newDirName) => {
    fs.readdir(from, (err, files) => {
        if (err) {
            throw err;
        }
        //新建目标目录
        fs.mkdir(path.join(desPath, newDirName), (err) => {
            if (err) throw err;
            console.log("新建文件夹%s成功：",newDirName);
        })
        files.map(item => {
            let fPath = path.join(from, item);
            fs.readFile(fPath, (err, data) => {
                let dataString = data.toString();
                dataString = dataString.replace(/entryTemp/gi, newDirName);
                item = item.replace(/entryTemp/gi, newDirName);
                fs.writeFile(path.join(desPath, newDirName, item), dataString, (err) => {
                   if(err) throw err ;
                })
            })

        })
    })
}


copyDirFun(sourceDir, desPath, newDirName);