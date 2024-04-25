function calculatorAria(){
    
    // get triangle-base 
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBase.value;
    const baseValue = parseFloat(triangleBaseValue);
    console.log(baseValue);


    // get triangle-hight 
    const triangleHight = document.getElementById('triangle-hight');
    const triangleHightValue = triangleHight.value;
    const hightValue = parseFloat(triangleHightValue);
    console.log(hightValue);

    const Aria = 0.5 * baseValue * hightValue;
    console.log(Aria);

    // show area and calculate triangle
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = Aria;
    


}