const btn = document.querySelector("button");
const p = document.querySelector("#p");
       const section=document.querySelector("section");
  const pre= document.querySelector("pre");

let counts =0;
btn.addEventListener('click',()=>{
counts++;

        btn.textContent=`you clicked it ${counts} times`;
p.textContent=`Total treats :${counts}/10`;

if (counts===1){
    pre.textContent="";
}else if(counts===10){
   pre.textContent='yayyy!'
   section.appendChild(pre);
       counts=0;

};
});