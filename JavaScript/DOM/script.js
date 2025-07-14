/* example 1 */
document.getElementById("changeTextButton").addEventListener('click',()=>{
    let paragraph =document.getElementById('myParagraph');
    paragraph.textContent="the paragraph is changed"
})

/* Example 2 */

document.getElementById("highlightFirstCity").addEventListener('click',function(){
    let citiesList=document.getElementById('citiesList');
    console.log(citiesList);
    
    citiesList.firstElementChild.classList.add('highlight')
})

/* Example 3 */
document.getElementById("changeOrder").addEventListener("click",()=>{
   let a= document.getElementById("coffeeType")
   a.textContent=" Espresso"
   a.style.backgroundColor="red"
   a.style.padding="5px"
})

document.getElementById("addNewItem").addEventListener('click',function () {
    let newItem =document.createElement('li');
    newItem.textContent="Eggs"
    document.getElementById("shoppingList").appendChild(newItem);
})

/* Example 5 */
document.getElementById("removeLastTask").addEventListener("click",()=>{
   let taskList= document.getElementById("taskList")
   taskList.lastElementChild.remove();
})

/* Example 6 */

document.getElementById("clickMeButton").addEventListener('click',()=>{
    let ex= document.getElementById("example-6")
    ex.style.backgroundColor ="brown"
    ex.style.textBox;
    ex.style.fontFamily ="Courier New', Courier, monospace";
    ex.style.fontSize="38px"
    ex.style.textEmphasisColor ="white"
})

/* Example 7 */

document.getElementById("teaList").addEventListener('click',function(event){
    if(event.target && event.target.matches('.teaItem')){
        alert("You selected"+event.target.textContent)
    }
})
/* Example 8 */
document.getElementById('feedbackForm').addEventListener("submit",function(event){
    event.preventDefault();
    let feedback =document.getElementById("feedbackInput").value;
    console.log(feedback)
    document.getElementById("feedbackDisplay").textContent=`Feedback is: ${feedback}`
    let a=document.getElementById("feedbackDisplay");
    a.style.backgroundColor ="green"
    a.style.fontSize ="20px"
})