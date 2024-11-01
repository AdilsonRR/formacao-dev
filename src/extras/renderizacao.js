function a(){
    let v = 10;
    setTimeout(()=>{
        console.log(`o valor de v era ${v}`);
        v=100;
        console.log(`o valor de v agora é ${v}`);
    },2000)
    return v;
}
console.log(a());
