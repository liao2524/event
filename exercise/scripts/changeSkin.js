// //网站换肤
$(function () {
		var $li=$("#skin li");
		$li.click(function() {
			switchSkin(this.id);
		});
		var cookie_skin = $.cookie("MyCssSkin");
				if (cookie_skin) {
				switchSkin( cookie_skin );
			}
});
function switchSkin(skinName) {
		$("#"+skinName).addClass('selected')
					   .siblings().removeClass('selected');
		$("#cssfile").attr("href", "styles/skin/"+skinName+".css");
		// $("#cssfile").attr("href", "styles/skin/"+ skinName +".css"); //切换皮肤
		$.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 10 });				   
}
// $(function(){
// 		var $li =$("#skin li");
// 		$li.click(function(){
// 			switchSkin( this.id );
// 		});
// 		var cookie_skin = $.cookie("MyCssSkin");
// 		if (cookie_skin) {
// 			switchSkin( cookie_skin );
// 		}
// });

// function switchSkin(skinName){
// 		$("#"+skinName).addClass("selected")                //选中当前<li>元素
// 					   .siblings().removeClass("selected");  //去掉其他同辈<li>元素的选中
// 	    $("#cssfile").attr("href","styles/skin/"+ skinName +".css"); //切换皮肤
// 		$.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 10 });
// }