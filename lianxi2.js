var box = document.getElementById('box');
var k1 = box.getElementsByClassName('k1');
function fn1(){
    var lw = k1[0].offsetWidth;
    var ls = Math.floor(document.documentElement.clientWidth / lw);
    var h = [];
    box.style.width = lw *ls +'px';
    box.style.marginLeft = 'auto';
    box.style.marginRight = 'auto';
    for(var i = 0; i<k1.length;i++){
        if(i<ls){
            h[i] = k1[i].offsetHeight;
        }else {
            var lmin = Math.min.apply(null,h);
            var count = fn2(lmin,h);
            k1[i].style.position = 'absolute';
            k1[i].style.top = lmin + 'px';
            k1[i].style.left = k1[count].offsetLeft + 'px';
            h[count] += k1[i].offsetHeight;
        }
    }
}
fn1();
function fn2(num,num1){
    for(var x in num1){
        if(num1[x] == num){
            return x;
        }
    }
}
window.onscroll = function(){
    var h1 = document.body.scrollTop;
    var h2 = document.documentElement.clientHeight;
    var h3 = k1[k1.length - 1].offsetTop;
    var photo={"data":[{"src":'i1/18.jpg'},{"src":'i1/21.jpg'},{"src":'i1/11.jpg'},{"src":'i1/4.jpg'},{"src":'i1/1.jpg'},{"src":'i1/2.jpg'},{"src":'i1/3.jpg'},{"src":'i1/4.jpg'}]};
    if(h3 <h1+h2 ){
        for (var i = 0; i < photo.data.length; i++) {
            path= photo.data[i].src;
            var div = document.createElement('div');
            box.appendChild(div);
            div.className = 'k1';
            div.innerHTML = '<img src="'+path+'">';
        }
        fn1();
    }
}
window.onresize = function(){
    window.location.reload();
    fn1();
}
function t(){
    window.location.reload();
    setTimeout(t,1000);
}