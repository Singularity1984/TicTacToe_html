let turn=1;
let way=0;
function TicTacToe(id){
 if(turn==1){
    if(document.getElementById(id).classList.contains('cross')||document.getElementById(id).classList.contains('zero')){
        alert('ERROR');
    }
    else{
            document.getElementById(id).classList.add("cross")
            turn=0;
            document.getElementById('body').classList.remove("based")
            document.getElementById('body').classList.add("alt")
            way++;
        }
    }
 else if(turn==0){
    if(document.getElementById(id).classList.contains('cross')||document.getElementById(id).classList.contains('zero')){
        alert('ERROR');
    }
    else{
            document.getElementById(id).classList.add("zero")
            turn=1;
            document.getElementById('body').classList.remove("alt")
            document.getElementById('body').classList.add("based")
            way++;
        }
 }
if(document.getElementById('left_top').classList.contains('cross') && document.getElementById('center_top').classList.contains('cross')&&document.getElementById('right_top').classList.contains('cross')
    ||document.getElementById('left').classList.contains('cross') && document.getElementById('center').classList.contains('cross')&&document.getElementById('right').classList.contains('cross')
    ||document.getElementById('left_bottom').classList.contains('cross') && document.getElementById('center_bottom').classList.contains('cross')&&document.getElementById('right_bottom').classList.contains('cross')
    ||document.getElementById('left_bottom').classList.contains('cross') && document.getElementById('left').classList.contains('cross')&&document.getElementById('left_top').classList.contains('cross')
    ||document.getElementById('center_bottom').classList.contains('cross') && document.getElementById('center').classList.contains('cross')&&document.getElementById('center_top').classList.contains('cross')
    ||document.getElementById('right_bottom').classList.contains('cross') && document.getElementById('right').classList.contains('cross')&&document.getElementById('right_top').classList.contains('cross')
    ||document.getElementById('right_bottom').classList.contains('cross') && document.getElementById('center').classList.contains('cross')&&document.getElementById('left_top').classList.contains('cross')
    ||document.getElementById('left_bottom').classList.contains('cross') && document.getElementById('center').classList.contains('cross')&&document.getElementById('right_top').classList.contains('cross')
){
    alert('win blue player')
    setTimeout(function(){ location.reload(); }, 500);
}
if(document.getElementById('left_top').classList.contains('zero') && document.getElementById('center_top').classList.contains('zero')&&document.getElementById('right_top').classList.contains('zero')
    ||document.getElementById('left').classList.contains('zero') && document.getElementById('center').classList.contains('zero')&&document.getElementById('right').classList.contains('zero')
    ||document.getElementById('left_bottom').classList.contains('zero') && document.getElementById('center_bottom').classList.contains('zero')&&document.getElementById('right_bottom').classList.contains('zero')
    ||document.getElementById('left_bottom').classList.contains('zero') && document.getElementById('left').classList.contains('zero')&&document.getElementById('left_top').classList.contains('zero')
    ||document.getElementById('center_bottom').classList.contains('zero') && document.getElementById('center').classList.contains('zero')&&document.getElementById('center_top').classList.contains('zero')
    ||document.getElementById('right_bottom').classList.contains('zero') && document.getElementById('right').classList.contains('zero')&&document.getElementById('right_top').classList.contains('zero')
    ||document.getElementById('right_bottom').classList.contains('zero') && document.getElementById('center').classList.contains('zero')&&document.getElementById('left_top').classList.contains('zero')
    ||document.getElementById('left_bottom').classList.contains('zero') && document.getElementById('center').classList.contains('zero')&&document.getElementById('right_top').classList.contains('zero')
){
    alert('win red player')
    setTimeout(function(){ location.reload(); }, 500);}

else if(way==9){
    alert('idk, 9999IQ gameplay')
    setTimeout(function(){ location.reload(); }, 500);}
}