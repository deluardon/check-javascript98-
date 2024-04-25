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
    


    // rectangle area 



}

function rectangleArea(){
    const rectangleArea = document.getElementById('rectangle-withe')
    const rectangleWitheValue = rectangleArea.value;
    const witheValue = parseFloat(rectangleWitheValue);
    console.log(witheValue);
   


    const rectangleHeight = document.getElementById('rectangle-hight')
    const rectangleHeightValue = rectangleHeight.value;
    const heightValue = parseFloat(rectangleHeightValue);
    console.log(heightValue);

    const rectangleAria = witheValue * heightValue;
    console.log(rectangleAria);

    const RectangleArea = document.getElementById('rectangle-area');
    RectangleArea.innerText = rectangleAria;

}

function parallelogram(){
    const parallelogramBase = document.getElementById('parallelogram-base')
    const parallelogramBaseValue = parallelogramBase.value;
    const baseValue = parseFloat(parallelogramBaseValue);
    console.log(baseValue);


    const parallelogramHight = document.getElementById('parallelogram-hight')
    const parallelogramHightValue = parallelogramHight.value;
    const hightValue = parseFloat(parallelogramHightValue);
    console.log(hightValue);
}