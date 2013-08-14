ps:1.菜单插件兼容IE 8 以上的IE浏览器（已经测试），同时兼容firefox，chrome,sougou
   
   2.插件menus-Plusing.js为源代码库，menus-Plusing-compress.js为压缩库，两个只选择一个引入html（jsp/asp/php）即可（建议引入后者压缩过）
	
   3.引入js文件后page配置如下即可，其中有默认配置

	<script type="text/javascript">
		
		$(function(){
	
			$().myPlusing({
				MenusOneLevel:"Hello,world,blog,Que,Aswer",	//one level menus 
				MenusTwoLevel:"Hello1,Hello2,Hello3,Hello4,Hello5|world1,world2,world3,world4|blog1,blog2|Que1,Que2|Aswer1,Aswer2", //two level menus
				LinkAddress:"Hello1.html,Hello2.html,Hello3.html,Hello4.html,Hello5.html|world1.html,world2.html,world3.html,world4.html|blog1.html,blog2.html|Que1.html,Que2.html|Aswer1.html,Aswer2.html",//two level link
				Top:50,					//顶部距离，默认50px
				Height:100,				//菜单高度
				Width:65,				//距左右的宽度	
				Scroll:true,				//设置菜单是否滚动
				twoLevelMenusSpaceOneLevelTitleTop:50,
				oneLevelBackgroundColoer:"#099", 	//一级菜单背景颜色
				twoLevelBackgroundColoer:"#008B8B",	//二级菜单背景颜色
				menusShowSpeed:'slow',			//二级菜单显示速度
				menusHideSpeed:'fast',			//二级菜单隐藏速度
				oneLevelFontSize:3,			//一级标题字体尺寸
				oneLevelFontFace:'Times',		//一级标题字体样式
				twoLevelFontSize:3,			//二级标题文字大小
				twoLevelFontFace:'Times'		//二级标题文字样式
				
				});
			})
	
	</script>

   