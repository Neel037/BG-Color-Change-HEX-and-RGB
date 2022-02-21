/**
 * Project Requirements:
 * --- Change the background colorby generating random Hex and RGB color by clicking a Button and display the hex code in a field
 */

// Step 1: Create onLoad handler
// Step 2: Random Color Generator Function
// Step 3: Collect all necessary references
// Step 4: Handle the click event

window.onload = () =>{
    main();
}



function main(){

    const root = document.getElementById('root');
    const btn = document.getElementById('cng-btn');
    const output = document.getElementById('output');
    const output2 = document.getElementById('output2');
    const copyBtn1 = document.getElementById('copy-btn1');
    const copyBtn2 = document.getElementById('copy-btn2');

    btn.addEventListener('click', function(){
        const bgColor = generateHEX();
        rgbColor = bgColor[0];
        hexColor = bgColor[1];


        root.style.backgroundColor = rgbColor;
        output.value = hexColor;
        output2.value = rgbColor;
    });

    copyBtn1.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value);

    });
    copyBtn2.addEventListener('click', function(){
        navigator.clipboard.writeText(output2.value);

    });

}




function generateHEX(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);



    return [`rgb(${red}, ${green}, ${blue})`, `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`];
}
