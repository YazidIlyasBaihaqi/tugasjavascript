function checkInput1() {
    let frm = window.document.getElementById("angka1");
    let value = frm.value
    if (Number.isInteger(parseInt(value))) {
        console.log(value)
    } else {
        console.log("bukan")
    }
}

function checkInput2() {
    let frm = window.document.getElementById("angka2");
    let value = frm.value
    if (Number.isInteger(parseInt(value))) {
        console.log(value)
    } else {
        console.log("bukan")
    }
}

function calcHasil() {
    let frm = window.document.getElementById("kalkulator");
    let angka1 = parseInt(frm.angka1.value);
    let angka2 = parseInt(frm.angka2.value);
    if (!angka1 || !angka2) {
        alert("Tolong masukan angka");
        return;
    }
    var hasil;
    console.log(frm.operator.value)
    switch (frm.operator.value) {
        case "+":
            hasil = angka1 + angka2;
            break;
        case "-":
            hasil = angka1 - angka2;
            break;
        case "/":
            hasil = angka1 / angka2;
            break;
        case "*":
            hasil = angka1 * angka2;
            break;
        case "^":
            hasil = angka1 ^ angka2;
            break;
    }
    frm.hasil.value = hasil;
}