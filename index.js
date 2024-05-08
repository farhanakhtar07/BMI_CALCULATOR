const form=document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let height=parseInt(document.querySelector("#height").value);
    let weight=parseInt(document.querySelector("#weight").value);
    let result=document.querySelector("#result");
    
    if(height===""|| height<0 || isNaN(height)){
        result.innerHTML='Enter valid height';
    }
    else if(weight===""|| weight<0 || isNaN(weight)){
        result.innerHTML='Enter valid weight';
    }
    else{
        const BMI=(weight/(height*height))*10000;
        result.innerHTML=BMI;
    }
})