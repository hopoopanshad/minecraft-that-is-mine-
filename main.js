canvas = new fabric.Canvas("myCanvas")
px = 20
py = 20
bw = 30
bh = 30
po = ""
bo = ""

function pupdet() {
    fabric.Image.fromURL("player.png", function (Img) {
        po = Img
        po.scaleToWidth(150)
        po.scaleToHeight(145)
        po.set({
            top: py,
            left: px

        });
        canvas.add(po)
    });
}

function updet(newimg) {
    fabric.Image.fromURL(newimg, function (Img) {
        bo = Img
        bo.scaleToWidth(bw)
        bo.scaleToHeight(bh)
        bo.set({
            top: py,
            left: px

        });
        canvas.add(bo)
    });
}
window.addEventListener("keydown", my_keedown)

function my_keedown(e) {
    kkeeyypprreesseedd = e.keyCode
    console.log(kkeeyypprreesseedd)
    if (e.shiftKey == true && kkeeyypprreesseedd == "80") {
        console.log("shift and p are pressed together")
        bw += 10
        bh += 10
        document.getElementById('cw').innerHTML = bw
        document.getElementById('cuhe').innerHTML = bh
    }
    if (e.shiftKey == true && kkeeyypprreesseedd == "77") {
        console.log("shift and m are pressed together")
        bw -= 10
        bh -= 10
        document.getElementById('cw').innerHTML = bw
        document.getElementById('cuhe').innerHTML = bh
    }
if(kkeeyypprreesseedd=='37')
{
    moveleft()
}
if(kkeeyypprreesseedd=='39')
{
    moveright()
}
if(kkeeyypprreesseedd=='38')
{
    moveup()
}
if(kkeeyypprreesseedd=='40')
{
    movedown()
}
if(kkeeyypprreesseedd=='67')
{
    updet('cloud.jpg')
}
if(kkeeyypprreesseedd=='68')
{
    updet('dark_green.png')
}
if(kkeeyypprreesseedd=='71')
{
    updet('ground.png')
}
if(kkeeyypprreesseedd=='76')
{
    updet('light_green.png')
}
if(kkeeyypprreesseedd=='82')
{
    updet('roof.jpg')
}
if(kkeeyypprreesseedd=='84')
{
    updet('trunk.jpg')
}
if(kkeeyypprreesseedd=='85')
{
    updet('unique.png')
}
if(kkeeyypprreesseedd=='87')
{
    updet('wall.jpg')
}
if(kkeeyypprreesseedd=='89')
{
    updet('yellow_wall.png')
}
}

function moveup()
{
    if(py>=0)
    {
        py=py-bh
console.log("newpla-y"+py)
canvas.remove(po)
pupdet()
    }
}
function movedown()
{
    if(py<=700)
    {
        py=py+bh
console.log("newpla-y"+py)
canvas.remove(po)
pupdet()
    }
}
function moveleft()
{
    if(px>=0)
    {
        px=px-bw
console.log("newpla-x"-px)
canvas.remove(po)
pupdet()
    }
}
function moveright()
{
    if(px<=820)
    {
        px=px+bh
console.log("newpla-x"+px)
canvas.remove(po)
pupdet()
    }
}