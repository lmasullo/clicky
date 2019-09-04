(window.webpackJsonpclicky=window.webpackJsonpclicky||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(7),o=a.n(n),i=(a(14),a(8)),c=a(1),l=a(2),d=a(4),m=a(3),p=a(5),u={backgroundColor:"#5133a4",height:"80px",color:"white",fontSize:"28px",paddingLeft:"150px",paddingRight:"70px"},g=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar fixed-top",style:u},s.a.createElement("div",null,"Clicky Game"),s.a.createElement("div",{id:"message"},this.props.message),s.a.createElement("div",null,"Score: ",this.props.score," | Topscore: ",this.props.topscore))}}]),t}(s.a.Component),f={backgroundImage:"url(./images/squares.svg)",height:"380px",color:"white",display:"flex",flexDirection:"column",justifyContent:"center"},h={textAlign:"center"},k={fontSize:"4rem",fontWeight:"bold",paddingBottom:"25px"},C=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:f},s.a.createElement("div",{style:h},s.a.createElement("div",{style:k},"Clicky Game!"),s.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!")))}}]),t}(s.a.Component),y=(a(15),{height:"170px",width:"170px",margin:"20px"}),b={display:"flex",flexWrap:"wrap",justifyContent:"center"},v={display:"flex",flexWrap:"wrap",width:"1000px",justifyContent:"center"};var j={score:0,topscore:0},O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).handleClick=function(e){var t=e.currentTarget.id,r=e.currentTarget.dataset.isclicked,s={isClicked:r,id:t};"false"===r?(console.log("Image Clicked (cards.js) - Clicked status is False"),s.isClicked=!0,a.props.updateClicked(s),j.score++,j.score>j.topscore&&j.topscore++,a.props.updateScore(j),a.props.updateMessage("You Guessed Correctly!"),function(){var e=document.getElementById("message");e.classList.add("correct"),setTimeout(function(){e.classList.remove("correct")},300)}(),12===j.score&&(console.log("Got all Correct"),a.props.updateMessage("You Guessed All Correctly, You Win!!"),function(){for(var e=document.querySelectorAll(".img-thumbnail"),t=0;t<e.length;t++)e[t].classList.add("zoom");setTimeout(function(){for(var t=0;t<e.length;t++)e[t].classList.remove("zoom")},1e3)}())):(console.log("Image Clicked (cards.js) - Its True"),function(){for(var e=document.querySelectorAll(".img-thumbnail"),t=0;t<e.length;t++)e[t].classList.add("shake");setTimeout(function(){for(var t=0;t<e.length;t++)e[t].classList.remove("shake")},500)}(),j.score=0,a.props.updateScore(j),a.props.resetClicked(),a.props.updateMessage("You Guessed Incorrectly!"),function(){var e=document.getElementById("message");e.classList.add("incorrect"),setTimeout(function(){e.classList.remove("incorrect")},300)}()),a.props.shuffle()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.arrCards;return s.a.createElement("div",{style:b},s.a.createElement("div",{style:v},t.map(function(a,r){return s.a.createElement("img",{key:r,id:t[r].id,alt:t[r].name,src:t[r].image,"data-isclicked":t[r].isClicked,className:"img-thumbnail",style:y,onClick:function(t){return e.handleClick(t)}})})))}}]),t}(s.a.Component),w={backgroundColor:"#6956af",height:"100px",color:"white"},x={backgroundColor:"#5133a4",height:"40px",width:"100%",color:"white",fontWeight:"bold",fontSize:"16px",position:"absolute",bottom:"0",paddingTop:"10px",paddingLeft:"10px"},E=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"footer fixed-bottom",style:w},s.a.createElement("div",{style:x},"Clicky Game!",s.a.createElement("img",{className:"pl-1 pb-1",alt:"React Clicky Game",src:"./images/react.svg",height:"20px",width:"20px"})))}}]),t}(s.a.Component);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var L=[{id:1,name:"beth",image:"./images/beth.png",isClicked:!1},{id:2,name:"birdperson",image:"./images/birdperson.png",isClicked:!1},{id:3,name:"evilmorty",image:"./images/evilmorty.png",isClicked:!1},{id:4,name:"gianthead",image:"./images/gianthead.png",isClicked:!1},{id:5,name:"goldenford",image:"./images/goldenford.png",isClicked:!1},{id:6,name:"jerry",image:"./images/jerry.png",isClicked:!1},{id:7,name:"jessica",image:"./images/jessica.png",isClicked:!1},{id:8,name:"meeseeks",image:"./images/meeseeks.png",isClicked:!1},{id:9,name:"morty",image:"./images/morty.png",isClicked:!1},{id:10,name:"mr",image:"./images/mr.png",isClicked:!1},{id:11,name:"rick",image:"./images/rick.png",isClicked:!1},{id:12,name:"summer",image:"./images/summer.png",isClicked:!1}],A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={score:0,topscore:0,message:"Click an Image to Begin",arrCards:L},a.updateScore=function(e){console.log("Update score");var t=I({},a.state.score),r=I({},a.state.topscore);t=e.score,r=e.topscore,a.setState({score:t,topscore:r})},a.updateClicked=function(e){console.log("Update Clicked - App.js");var t=parseInt(e.id);console.log("Clicked Image ID: ".concat(t));var r=e.isClicked;console.log("Clicked Image Clicked Status: ".concat(r));var s=a.state.arrCards;console.log(a.state.arrCards);for(var n=0;n<s.length;n++)console.log(s[n]),s[n].id===t&&(console.log("Match in for loop"),s[n].isClicked=!0,a.setState({arrCards:s}))},a.resetClicked=function(e){console.log("Reset");for(var t=0;t<L.length;t++)L[t].isClicked=!1},a.updateMessage=function(e){console.log("Update Message");var t=I({},a.state.message);t=e,a.setState({message:t})},a.shuffle=function(e){console.log("Shuffle Array");var t=a.state.arrCards;t.sort(function(){return Math.random()-.5}),a.setState({arrCards:t})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(g,{score:this.state.score,topscore:this.state.topscore,message:this.state.message}),s.a.createElement(C,null),s.a.createElement(O,{message:this.state.message,arrCards:this.state.arrCards,updateScore:this.updateScore,updateClicked:this.updateClicked,resetClicked:this.resetClicked,updateMessage:this.updateMessage,shuffle:this.shuffle}),s.a.createElement(E,null))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.2cbc1244.chunk.js.map