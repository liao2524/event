/*衣服颜色切换*/
$(function(){
	$(".color_change ul li img").click(function(){    
		  var cl= $(this).attr("class");
		  // alert(cl);
		
		  $(".imgList li").removeClass("hide").hide();
		  $(".imgList li").each(function() {
		  	// alert($(this).attr("class"));
		  	var list=$(this).attr("class");
		  	// alert(list);
		  	if (cl==list) {
		  		$(this).show();
		  	}
		  });

		  
		  
		  $(this).addClass("hover").parent().siblings().find("img").removeClass("hover");
		  // var val=$(".imgList li:first").attr("class");

		  // for (var i = 0; i <$li.length; i++) {
			
		  // 	var imgClass=$li[i].attr("alt");
		  	
		  // 	if (cl==imgClass) {
		  // 		show();
		  // 	}
		  // }
		  // $(".imgList li[class*=cl]").show();
		  				  // $(".imgList li").;
		   //  var a=$(".imgList li.imgC").attr("class");              
		   // alert(a);
		  // $(".imgList li[calss='imgClass']").removeClass("hide");
		  // var imgSrc = $(this).attr("src");
		  // var i = imgSrc.lastIndexOf(".");
		  // var unit = imgSrc.substring(i);
		  
		  //     imgSrc = imgSrc.substring(0,i);

		  // var imgSrc_small = imgSrc + "_one_small"+ unit;
		  // var imgSrc_big = imgSrc + "_one_big"+ unit;

		  // $("#bigImg").attr({"src": imgSrc_small });
		  // $("#thickImg").attr("href", imgSrc_big);

		  // var alt = $(this).attr("alt");

		  // $(".color_change strong").text(alt);

		  // var newImgSrc = imgSrc.replace("images/pro_img/","");
		  
		  // $("#jnProitem .imgList li").hide();
		  // $("#jnProitem .imgList").find(".imgList_"+newImgSrc).show();
		  // $("#jnProitem .imgList").find(".imgList_"+newImgSrc).eq(0).find("a").click();
	});
});