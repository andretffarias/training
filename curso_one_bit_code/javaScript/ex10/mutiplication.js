var num = parseFloat(prompt("enter a number:"))
var multiple = 1
var res
var frame = ""
var str = ""
for( ; multiple <= 20; multiple++){
    res = num * multiple
    frame = num + " x " + multiple + " = " + res + "\n"
    str = str + frame
}

alert(
    "Table:\n" + str
)