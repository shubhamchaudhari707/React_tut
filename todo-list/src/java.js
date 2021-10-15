var x = 0
var y1 = "Welcome to  my channel"
console.log(x)

function f1() {
    var localvar = "susbcribe to my channel"
    var y2 = "check this oit y2 inside f1()"

    console.log(x)

    function f2() {
        var localvar1 = "like this video"
        var y3 = "check this oit y3 inside f1()"
        console.log(x)

        function f3() {
            var localvar2 = "like this video shubham"
            var y4 = "check this oit y4 inside f1()"
            console.log(x)

            console.log(y4)
            console.log(y3)
            console.log(y2)
            console.log(y1)
        }
        f3()
    }
    f2()
}

f1()







