function onDangKi(){ // Nhấn tab đăng ký
    // ẩn phần đăng nhập
    // hiển thị div_dangki
    // đổi màu thẻ a
    var divDki = document.getElementById("div_dangki");
    var divDnhap = document.getElementById("div_dangnhap");
    var Dki = document.getElementById("dangki");
    var Dnhap = document.getElementById("dangnhap");

    divDki.style.display = "block";
    Dki.style.background = "#d4b948";
    divDnhap.style.display = "none";
    Dnhap.style.background = "#e0e0e0"
}

function onDangNhap(){ // Nhấn tab đăng nhập
    // ẩn phần đăng kí
    // hiển thị div_dangnhap
    // đổi màu thẻ a
    var divDki = document.getElementById("div_dangki");
    var divDnhap = document.getElementById("div_dangnhap");
    var Dki = document.getElementById("dangki");
    var Dnhap = document.getElementById("dangnhap");

    divDnhap.style.display = "block";
    Dnhap.style.background = "#d4b948"
    divDki.style.display = "none";
    Dki.style.background = "#e0e0e0"
}


function CheckNhapBatBuocDangKi(idTag){ // ko để trống
    // var Tag = document.getElementById(idTag);
    var pthongbao = document.getElementById("p_thongbao");
    if(idTag.value == ""){
        idTag.style.borderBlockColor = "red";
        pthongbao.style.display = "block";
        pthongbao.innerHTML = "Bạn cần nhập đầy đủ các trường";
        return false;
    }
    else{
        idTag.style.borderBlockColor = "#767676";
        pthongbao.style.display = "none";
        return true;
    }
}

function CheckTenDangNhap(){
    var inputTendangnhap = document.getElementById("txt_tendangnhap");
    var pthongbao = document.getElementById("p_thongbao");
    if(inputTendangnhap.value.length > 30){

        inputTendangnhap.style.borderBlockColor = "red";
        pthongbao.style.display = "block";
        pthongbao.innerHTML = "Nhập tối đa 30 kí tự"
        return false;
    }
    else{
        
        inputTendangnhap.style.borderBlockColor = "#767676";
        pthongbao.style.display = "none";
        if(!CheckNhapBatBuocDangKi(inputTendangnhap)){return false;}
        return true;
    }
}

function CheckMatKhau(){
    var inputMatKhau = document.getElementById("txt_matkhau");
    if(!CheckNhapBatBuocDangKi(inputMatKhau)){return false;}
    return true;
}

function checkEmail(){
    var inputEmail = document.getElementById("txt_email");
    var mailformat = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/; //
    var pthongbao = document.getElementById("p_thongbao");
    if(inputEmail.value.match(mailformat)){

        inputEmail.style.borderBlockColor = "#767676";
        pthongbao.style.display = "none";
        return true;
    }
    else{
        inputEmail.style.borderBlockColor = "red";
        pthongbao.style.display = "block";
        pthongbao.innerHTML = "Email không hợp lệ"
        return false;
    }
}

function checkTuoi(){
    var inputTuoi = document.getElementById("txt_age");
    var pthongbao = document.getElementById("p_thongbao");
    var numbers = /^[0-9]+$/; //
    if (inputTuoi.value.match(numbers)){

        if (!CheckNhapBatBuocDangKi(inputTuoi)){return false;}
        if (inputTuoi.value < 18 || inputTuoi.value > 40){
            inputTuoi.style.borderBlockColor = "red";
            pthongbao.style.display = "block";
            pthongbao.innerHTML = "Số tuổi không hợp lệ";
            return false;
        }
        inputTuoi.style.borderBlockColor = "#767676";
        pthongbao.style.display = "none";
        return true;
    }
    else{
        inputTuoi.style.borderBlockColor = "red";
        pthongbao.style.display = "block";
        pthongbao.innerHTML = "Bạn cần nhập số"
        return false;
        }

}