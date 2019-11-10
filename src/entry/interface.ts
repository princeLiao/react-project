/**
 *
 *
 * @template T
 * @param {T} arg
 * @returns {T}
 */
function identify<T>(arg:T):T{
    return arg;
}
let output=identify<string>("hello world");


function identifyArray<T>(arg:T[]):T[]{
    const len=arg.length;
    return arg;
}
//泛型类型函数
let identifyArrayFun:<T>(arg:T[])=>T[]=identifyArray;


function test(arg:string):string{
    return arg;
}
//对象字面量定义函数
// let newTest:{(arg:string):string}=test;



let newTest:(arg:string)=>string=test;

console.log(newTest("lww"));

function identity<T>(arg:T):T{
    return arg ;
}

//泛型接口  
//方式一
interface  GenericIdentityFn{
    <T>(arg:T):T
}
//方式二

interface  GenericIdentityFn2<T>{
    (arg:T):T
}

let myIdentity: GenericIdentityFn2<number> = identity;

console.log(myIdentity(12))

//泛型类
class GenericNumber<T,Y> {
    zeroValue: Y;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number,string>();
myGenericNumber.zeroValue = "0";
myGenericNumber.add = function(x, y) { return x + y; };


//泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length,arg);  // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity({length:3})


class BeeKeeper {
    hasMask: boolean=true;
}

class ZooKeeper {
    nameTag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    console.log(c);
    return new c();
}

// console.log(typeof  createInstance(Lion).keeper.nameTag);  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!


 enum Enum {
    A = 1,
    B,
    C = 2
}
console.log(Enum,Enum[2])