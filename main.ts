pins.onKeyboardEvent(function (zeichenCode, zeichenText, isASCII) {
    textZeile = "" + textZeile + zeichenText
    matrix.writeTextCharset(3, 0, textZeile)
    matrix.displayMatrix()
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    matrix.line(64, 32, 90, 80)
    matrix.rectangle(0, 0, 127, 127)
    matrix.displayMatrix()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    matrix.writeClock(30, 100, 24, 14, 6)
    matrix.displayMatrix()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    matrix.rasterCircle(64, 64, 20)
    matrix.rasterCircle(64, 64, 40)
    matrix.displayMatrix()
})
function Konfiguration () {
    matrix.comment("calliope-net/kb-matrix1-63")
    matrix.comment("Erweiterungen")
    matrix.comment("calliope-net/pins")
    matrix.comment("calliope-net/matrix")
}
let textZeile = ""
matrix.init(matrix.ePages.y128)
matrix.writeTextCharset(0, 0, matrix.matrix_text("kb-matrix1-63"))
matrix.writeTextCharset(15, 7, matrix.matrix_text("(128,128)"))
matrix.displayMatrix()
loops.everyInterval(200, function () {
    matrix.comment("Block ist in Pins - Tastaturen")
    pins.raiseKeyboardEvent(true)
})
