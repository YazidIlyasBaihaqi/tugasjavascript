function cekLogin() {
    //tangkap request form
    let frm = window.document.getElementById("formulir");
    let uname = frm.username.value;
    let pwd = frm.password.value;
    if (uname == "mimin" && pwd == "mimin123") {
        alert("Selamat Datang Mimin, Anda Administrator")
    }
    else if (uname == "budi" && pwd == "budi123") {
        alert("Selamat Datang Budi, Anda Operator")
    }
    else {
        alert("Login salah")
    }
}

function kosongin1() {
    //tangkap request form
    let frm = window.document.getElementById("formulir");
    frm.username.value = "";
}

function kosongin2() {
    //tangkap request form
    let frm = window.document.getElementById("formulir");
    frm.password.value = "";
}