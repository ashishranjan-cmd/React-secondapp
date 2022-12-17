const myname = "Ashish Ranjan";
const y = 10;

function fn(){
    return "this is test function"
}
function fn2(){
    return "this is second function"
}

export default myname; // to share this variable with other file
export { fn, fn2};