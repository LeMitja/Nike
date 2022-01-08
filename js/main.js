
    var canvas = document.getElementById("bezier");
        var context = document.getElementById("bezier").getContext("2d");
        context.beginPath();
        context.moveTo(353/4, 393/4);
        context.bezierCurveTo(586/4, 436/4, 1044/4, 198/4, 1905/4, 18/4);
        context.bezierCurveTo(617/4, 530/4, 348/4, 777/4, 114/4, 644/4);
        context.bezierCurveTo(-31.5, 464/4, 183/4, 123/4, 290/4, 8/4);
        context.bezierCurveTo(181/4, 197/4, 202/4, 359/4, 353/4, 393/4);
        context.strokeStyle = '#ffffff';
        context.stroke();
        context.fillStyle = '#ffffff';
        context.fill();


    var can = document.getElementById("notes");
        var cnt = document.getElementById("notes").getContext("2d");
        cnt.beginPath();
        cnt.moveTo(10,0);
        cnt.lineTo(10, 399.7);
        cnt.lineWidth = 5;
        cnt.strokeStyle = '#ffffff';
        cnt.stroke();

        cnt.moveTo(0,66.666666);
        cnt.lineTo(1250,66.666666);
        cnt.moveTo(0,133.333333);
        cnt.lineTo(1250,133.333333);
        cnt.moveTo(0,200);
        cnt.lineTo(1250,200);
        cnt.moveTo(0,266.666666);
        cnt.lineTo(1250,266.666666);
        cnt.moveTo(0,333.333333);
        cnt.lineTo(1250,333.333333);
        cnt.lineWidth = 1;
        cnt.strokeStyle = '#ffffff';
        cnt.stroke();

        cnt.beginPath();
        cnt.moveTo(150, 133.3333);
        cnt.lineTo(150, 355);
        cnt.moveTo(237, 44);
        cnt.lineTo(237, 259);
        cnt.moveTo(357, 170);
        cnt.lineTo(357, 355);
        // cnt.moveTo(463, 70);
        // cnt.lineTo(463, 335);
        cnt.moveTo(497, 210);
        cnt.lineTo(497, 320);//prva mihna spod K
        cnt.moveTo(550, 260);
        cnt.lineTo(550, 333.3333);//druga mihna spod K
        cnt.moveTo(603, 310);
        cnt.lineTo(603, 345);//tretja mihna spod K
        cnt.moveTo(497, 211);
        cnt.lineTo(603, 311);//spodnja poševna K
        cnt.moveTo(497, 110);
        cnt.lineTo(497, 210);//prva mihna zgor K
        cnt.moveTo(550, 66.6666);
        cnt.lineTo(550, 168);//druga mihna zgor K
        cnt.moveTo(603, 55);
        cnt.lineTo(603, 129);//tretja mihna zgor K
        cnt.moveTo(497, 205);
        cnt.lineTo(603, 128);//zgornja poševna K
        cnt.moveTo(712, 235);
        cnt.lineTo(712, 350);
        cnt.moveTo(748, 55);
        cnt.lineTo(748, 170);
        cnt.moveTo(760, 200);
        cnt.lineTo(820, 200);
        cnt.lineWidth = 4;
        cnt.strokeStyle = '#ffffff';
        cnt.stroke();

        cnt.beginPath();
        cnt.arc(132,355,18,0,2*Math.PI);
        cnt.moveTo(255,44);
        cnt.arc(255,44,18,0,2*Math.PI);
        cnt.moveTo(375,170);
        cnt.arc(375,170,18,0,2*Math.PI);
        // cnt.moveTo(445,333.3333);
        // cnt.arc(445,333.3333,18,0,2*Math.PI);
        // cnt.moveTo(445,235);
        // cnt.arc(445,235,18,0,2*Math.PI);
        cnt.moveTo(487,320);
        cnt.arc(487,320,10,0,2*Math.PI);
        cnt.moveTo(540,333.3333);
        cnt.arc(540,333.3333,10,0,2*Math.PI);
        cnt.moveTo(593,347);
        cnt.arc(593,347,10,0,2*Math.PI);
        cnt.moveTo(507,110);
        cnt.arc(507,110,10,0,2*Math.PI);
        cnt.moveTo(560,66.6666);
        cnt.arc(560,66.6666,10,0,2*Math.PI);
        cnt.moveTo(613,55);
        cnt.arc(613,55,10,0,2*Math.PI);
        cnt.moveTo(730,170);
        cnt.arc(730,170,18,0,2*Math.PI);
        cnt.moveTo(730,235);
        cnt.arc(730,235,18,0,2*Math.PI);
        cnt.strokeStyle = '#ffffff';
        cnt.stroke();
        cnt.fillStyle = '#ffffff';
        cnt.fill();

        cnt.beginPath();
        cnt.moveTo(150,133.3333);
        cnt.bezierCurveTo(228, 186, 227, 264, 239, 260);
        cnt.moveTo(712, 348);
        cnt.bezierCurveTo(728, 361, 855, 346, 841, 288);
        cnt.moveTo(748, 57);
        cnt.bezierCurveTo(841, 33, 897, 114, 842, 139);
        cnt.lineWidth = 4;
        cnt.strokeStyle = '#ffffff';
        cnt.stroke();

        
        
        
