// Add your code here

const colors = ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#0000FF', '#A020F0', '#FFC0CB']

async function startColorChange() 
{
   let interval = document.getElementById("interval");

   document.getElementById("start").hidden = true;
   document.getElementById("stop").hidden = false;

   while(document.getElementById("stop").hidden == false)
   {
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * 8)];
        await sleep(interval.value);
   }
}

function stopColorChange() 
{
    document.getElementById("stop").hidden = true;
    document.getElementById("start").hidden = false;
}

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
  }