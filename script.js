function abc(){
    const p=prompt("Enter your name :");
    console.log(p);
    document.querySelector('h1').innerText="Welcome "+p;
    document.querySelector('h1').style.color="black";
}

