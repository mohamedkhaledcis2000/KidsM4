function menu(){
  var x = document.getElementById("nav-bar");
  if(x.style.display=== 'block'){
      x.style.display='none';
  }
      else{
          x.style.display='block';
      }
  
}



function demo1(){
    var demo1 = document.getElementById("demo1");
    var demo2 = document.getElementById("demo2");

    if(demo1.style.display=== 'block'){
        demo1.style.display='none';
    }
        else{
            demo1.style.display='block';
            demo2.style.display='none';
        }
    
  }

  
function demo2(){
    var demo1 =document.getElementById("demo1");
    var demo2 = document.getElementById("demo2");
    if(demo2.style.display=== 'block'){
        demo2.style.display='none';
    }
        else{
            demo2.style.display='block';
            demo1.style.display='none';
        }
    
  }

  function remo1(){
    var remo1=document.getElementById('photo-1');
    var remo2=document.getElementById('photo-2');
    var remo3=document.getElementById('photo-3');

        remo1.style.display='block';
        remo2.style.display='none';
        remo3.style.display='none';
    
  }

  function remo2(){
    var remo1=document.getElementById('photo-1');
    var remo2=document.getElementById('photo-2');
    var remo3=document.getElementById('photo-3');

        remo2.style.display='block';
        remo3.style.display='none';
        remo1.style.display='none'
    

  }

  function remo3(){
    var remo1=document.getElementById('photo-1');
    var remo2=document.getElementById('photo-2');
    var remo3=document.getElementById('photo-3');
      
    remo3.style.display='block';

        remo2.style.display='none';
        remo1.style.display='none'
  }














