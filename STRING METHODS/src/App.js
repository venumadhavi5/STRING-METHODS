
import './App.css';

function App() {
  return (
    <div className="App">
      <button type="button" onClick={()=>{
        let data = "god is great";
        console.log(data.toUpperCase());
        console.log(data.toLowerCase());
      }}>toUpperCase/toLowerCase</button>

      <button type="button" onClick={()=>{
        let fn = "Venu";
        let ln = "Madhavi";
        let fullName = fn.concat(ln);
        console.log(fullName);
      }}>concat</button>
      <button type="button" onClick={()=>{
        let quote = "    Nature is Gods Gift   ";
        console.log(`---${quote.trim()}---`);
        console.log(`---${quote.trimStart()}---`);
        console.log(`---${quote.trimEnd()}---`);
      }}>trim/trimStart/trimEnd</button>
      <button type="button" onClick={()=>{
        let quote = "Nature is Gods Gift!";
        console.log(quote.padStart(50,"N"));
        console.log(quote.padEnd(50,"!"));
        
      }}>padStart/padEnd</button>

      <button type="button" onClick={()=>{
        let slokan = "jai Shri Krishna";
        console.log(slokan.repeat(108));
      }}>repeat</button>

      <button type="button" onClick={()=>{
        let quote = "India is my Country, All Indians are my brothers and sisters ";
        console.log(quote.replace("India","Bharath"));
        console.log(quote.replaceAll("India","Bharath"));

      }}>replace/replaceAll</button>

      <button type="button" onClick={()=>{
        let quote = "India is my Country, All Indians are my brothers and sisters";
        console.log(quote.split("a"));
        console.log(quote.split(" "));
    }}>split</button>
    <button type='button' onClick={()=>{
      let alphabets ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(alphabets.length);
    }}>length</button>

    <button type='button' onClick={()=>{
      let alphabets ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(alphabets.charAt(0));
      console.log(alphabets.at(5));
      console.log(alphabets[10]);
   }}>charAt/at</button>
   <button type='button' onClick={()=>{
    let alphabets ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(alphabets.slice(5,10));
    console.log(alphabets.substring(5,10));
    console.log(alphabets.substr(5,10));
 }}>slice/subString/substr</button>
 <button type='button' onClick={()=>{
let alphabets ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(let i=0;i<alphabets.length;i++){
console.log(`${alphabets.charAt(i)}--${alphabets.charCodeAt(i)}`)
}
let alphabets1="अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरऱलवशषसहक्षत्रज्ञ";
for(let m=0;m<alphabets1.length;m++){
  console.log(`${alphabets1.charAt(m)}--${alphabets1.charCodeAt(m)}`)
  }
 }}>charCodeAt</button>

 <button type='button' onClick={()=>{
  for(let k=2309;k<3090;k++){
    console.log(String.fromCharCode(k))
  }
 }}>fromCharCode</button>
 



    </div>
  );
}

export default App;
