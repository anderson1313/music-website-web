function foo() {
    //创建要轮播的图片列表，元素为图片地址
    let imgList = ['img/1.png','img/2.png','img/3.png'];
    //找到要轮播图片的img标签,通过id寻找
    let imgTable = document.getElementById("i1");
    let imgTable2=document.getElementById("i2");
    //获取当前img标签的src，
    let img_src = imgTable.getAttribute('src');
    //获取当前src在图片列表中的索引，如果该索引加一小于等于列表长度，即可索引加1，修改src播放下一张图片
    let img_index = imgList.indexOf(img_src) + 1;
    let img_href=["folklore.html","vampire.html","blue.html"];

    if (img_index < imgList.length) {
        imgTable.setAttribute('src', imgList[img_index]);
        imgTable2.setAttribute('href', img_href[img_index])
    } else {
        imgTable.setAttribute('src', imgList[0]);
        imgTable2.setAttribute('href', img_href[0]);

    }
}



