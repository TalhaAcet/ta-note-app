import './App.css';
import React from 'react'
function App() {

  return (
    <div className='App'>
      <h2>Dönem sonu not hesaplama uygulaması</h2>
      <form>
        <input type="number" id='1-note' name="1_note" placeholder='1.Notunuzu giriniz.' min="1" max="100"/>
        <input type="number" id='2-note' name="2_note" placeholder='2.Notunuzu giriniz.' min="1" max="100"/>
        <input type="number" id='3-note' name="3_note" placeholder='3.Notunuzu giriniz.' min="1" max="100"/>
        <button type='button' onClick={calculate} id='btnCalculate'>Hesapla</button>
      </form>
      <div className='span-wrapper'>
        <span id="conclusion" className='result'></span>
      </div>
    </div>
  );
    

  function calculate(){
  
    let firstNote = document.getElementById("1-note").value;
    let secondtNote = document.getElementById("2-note").value;
    let thridNote = document.getElementById("3-note").value;

    // console testing
    // console.log(firstNote,secondtNote,thridNote);


    let conclusion = firstNote * (3/10) + secondtNote * (3/10) + thridNote *(4/10)
    let result = document.getElementById("conclusion")

    

    if(conclusion >= 84.5 && conclusion <= 100)
      result.innerHTML="Ortalama : " + conclusion + " => AA";

    else if(conclusion >= 69.5 && conclusion < 84.5)
      result.innerHTML="Ortalama : " + conclusion + " => AA";

    else if(conclusion >= 59.5 && conclusion < 69.5)
      result.innerHTML="Ortalama : " + conclusion  + " => CC";

    else if(conclusion >= 49.5 && conclusion < 59.5)
      result.innerHTML="Ortalama : " + conclusion  + " => DD";

    else if(conclusion > 100)
      result.innerHTML="Ortalama : " + conclusion + "=> Hatalı sayı"

    else
     result.innerHTML="Ortalama : " + conclusion  + " => FF";

      

    }  

};

export default App; 
