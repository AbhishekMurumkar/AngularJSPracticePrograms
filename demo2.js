function palceroder(num){console.log("order num="+num);
    deliveredorder(function(){
        console.log("delivered food order"+num);
    });
}
function deliveredorder(callback){setTimeout(callback,5000);}
//
palceroder(1);
palceroder(2);
palceroder(3);
palceroder(4);
palceroder(5);
palceroder(6);
palceroder(7);
palceroder(8);
