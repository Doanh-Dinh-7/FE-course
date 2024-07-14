function CreateTable(){
    var divId = document.getElementById("container");
    var soDongId = document.getElementById("txt_row");
    var  soCotId = document.getElementById("txt_col");

    // Lấy số dòng và số cột
    var sodong = parseInt(soDongId.value);
    var socot = parseInt(soCotId.value);

    // Tạo thẻ Table
    var tagTable = document.createElement('table');
    tagTable.border = 1; // Thêm viền cho bảng
    tagTable.style.padding = "10px";

    for (i = 1; i <= sodong; i++){
        // Tạo dòng
        var tagTR = document.createElement("tr");
        tagTable.appendChild(tagTR);

        // Tạo cột
        for (j = 1; j <= socot; j++){
            var tagTD = document.createElement("td");
            var textNode = document.createTextNode(i+" x "+j+" = "+(i*j));
            tagTD.appendChild(textNode);
            tagTR.appendChild(tagTD);
        }
    }
    divId.appendChild(tagTable);
}


