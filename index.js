const http=require("http");
const fs=require("fs");
const args=require("minimist")(process.argv.slice(2));
//read file from local folder
/*fs.readFile("home.html",(err,home)=>{
    console.log(home.toString());
});*/

/*fs.readFile("home.html",(err,home)=>{
    if(err){
        throw err;
    }
    http
     .createServer((request,response)=>{
        response.writeHeader(200,{"Content-Type":"text/html"});
        response.write(home);
        response.end();
     })
     .listen(3000);
});*/

let homeCxt="";
let projectCxt="";
let regCxt="";
fs.readFile("home.html",(err,home)=>{
    if(err){
        throw err;
    }
    homeCxt=home;
});

fs.readFile("project.html",(err,project)=>{
    if(err){
        throw err;
    }
    projectCxt=project;
});

fs.readFile("registration.html",(err,registration)=>{
    if(err){
        throw err;
    }
    regCxt=registration;
});

http
 .createServer((request,response)=>{
    let url=request.url;
    response.writeHeader(200,{"Content-Type":"text/html"});
    switch(url){
        case "/project":
            response.write(projectCxt);
            response.end();
            break;
        case "/registration":
            response.write(regCxt);
            response.end();
            break;
        default:
             response.write(homeCxt);
             response.end();
             break;
    }
 })
 .listen(args["port"]);