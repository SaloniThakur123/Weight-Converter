document.getElementById('output').style.visibility='hidden';
document.getElementById('lbsinput').addEventListener('input',function(e){
    document.getElementById('output').style.visibility='visible';
    let lbs=e.target.value;
    document.getElementById('gramsoutput').innerHTML=(lbs/0.0022046).toFixed(2);
    document.getElementById('kgoutput').innerHTML=(lbs/2.2046).toFixed(2);
    document.getElementById('ozoutput').innerHTML=(lbs*16).toFixed(2);

});