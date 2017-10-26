/* 点击左侧产品小图片切换大图 */
$(function(){
	$("#jnProitem ul.imgList li a").bind("click",function(){
		  var imgSrc = $(this).find("img").attr("src");
		  var i = imgSrc.lastIndexOf(".");
		  // alert(i);
		  var unit = imgSrc.substring(i);
		  // alert(unit);

		  imgSrc = imgSrc.substring(0,i);
		  // alert(imgSrc);
		  var imgSrc_big = imgSrc + "_big"+ unit;
		  $("#thickImg").attr("href" , imgSrc_big);
	});
});
