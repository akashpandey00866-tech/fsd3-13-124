import{EventEmitter} from "node:events";
const task= new Evenemiiter();
const sayHi=(name)=>{
    console.log(' welcome to {name}');
};
const starts=() => {
    console.log('system is started');
}
task.on("greet",sayHii);//event and method binding

task.emit("greet","anil pandey");//anouncement