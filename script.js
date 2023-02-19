const getColor = () =>{
    const randomNumer = Math.floor( Math.random()*16777215);
    const randomCode = "#" + randomNumer.toString(16);
    console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('colorcode').innerText = randomCode;
}


document.getElementById('btn').addEventListener(
    'click',getColor
)

