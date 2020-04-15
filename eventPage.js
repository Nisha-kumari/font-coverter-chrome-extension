document.addEventListener("DOMContentLoaded", function(){
    var changeFontBtn = document.getElementById("changeFont");
    changeFontBtn.addEventListener("click", function() {
        function modifyDOM() {
            return document.body.style.fontFamily = "cursive"
        }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
        chrome.tabs.executeScript({
            code: '(' + modifyDOM + ')()'   //argument here is a string but function.toString() returns function's code. Code to inject, as a text string
        }, (res) => {
            //Here we have just the innerHTML and not DOM structure
            console.log("res2", res[0])
        })
    })
})


//executeScript: Injects JavaScript code into a page.

