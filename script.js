
function AddMe() {
    var value = document.getElementById("input").value
    if (value) {
        console.log(value)
        var list = document.getElementById("list")
        var newList = document.createElement("li")
        newList.innerHTML = value
        newList.classList.add("lorem")
        list.appendChild(newList)
    }
}
function RemoveMe() {
    var question = confirm("are you sure, you want to remove this item?")
    if (question) {
        var list = document.getElementById("list")
        var newItem = document.getElementsByClassName('lorem')
        list.removeChild(newItem[newItem.length - 1])
    }
    
}