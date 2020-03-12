function hello(){
    var div = document.createElement("div");
    var textNode  = document.createTextNode(greeting)
    div.appendChild(textNode)
    document.body.appendChild(div)
    // document.write(`Hello, ${document.getElementById("name").value}, nice to meet you!`)

}

function check(){
    var name = document.getElementById("name").value
    if(name.length <= 3){
        greeting = `Hello, ${name}, nice to meet you... short name`
        hello()
    } else if (name.length >=4 & name.length <= 8){
        greeting = `Hello, ${name}, nice to meet you... medium name`
        hello()
    } else if (name.length > 8){
        greeting = `Hello, ${name}, nice to meet you... long name`
        hello()
    }
}

function styleCheck(){
    var name = document.getElementById("name").value
    var newDiv = document.createElement("div")
    if(name.length <= 3){
        newDiv.innerText = `Hello, ${name}, nice to meet you... short name (${name.length} characters).`
        newDiv.style.color="red"
    } else if (name.length >=4 & name.length <= 8){
        newDiv.innerText = `Hello, ${name}, nice to meet you... medium name (${name.length} characters).`
        newDiv.style.color="orange"
    } else if (name.length > 8){
        newDiv.innerText = `Hello, ${name}, nice to meet you... long name (${name.length} characters).`
        newDiv.style.color="green"
    }
    document.getElementById("addDiv").appendChild(newDiv)
}