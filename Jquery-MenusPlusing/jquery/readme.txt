ps:1.�˵��������IE 8 ���ϵ�IE��������Ѿ����ԣ���ͬʱ����firefox��chrome,sougou
   
   2.���menus-Plusing.jsΪԴ����⣬menus-Plusing-compress.jsΪѹ���⣬����ֻѡ��һ������html��jsp/asp/php�����ɣ������������ѹ������
	
   3.����js�ļ���page�������¼��ɣ�������Ĭ������

	<script type="text/javascript">
		
		$(function(){
	
			$().myPlusing({
				MenusOneLevel:"Hello,world,blog,Que,Aswer",	//one level menus 
				MenusTwoLevel:"Hello1,Hello2,Hello3,Hello4,Hello5|world1,world2,world3,world4|blog1,blog2|Que1,Que2|Aswer1,Aswer2", //two level menus
				LinkAddress:"Hello1.html,Hello2.html,Hello3.html,Hello4.html,Hello5.html|world1.html,world2.html,world3.html,world4.html|blog1.html,blog2.html|Que1.html,Que2.html|Aswer1.html,Aswer2.html",//two level link
				Top:50,					//�������룬Ĭ��50px
				Height:100,				//�˵��߶�
				Width:65,				//�����ҵĿ��	
				Scroll:true,				//���ò˵��Ƿ����
				twoLevelMenusSpaceOneLevelTitleTop:50,
				oneLevelBackgroundColoer:"#099", 	//һ���˵�������ɫ
				twoLevelBackgroundColoer:"#008B8B",	//�����˵�������ɫ
				menusShowSpeed:'slow',			//�����˵���ʾ�ٶ�
				menusHideSpeed:'fast',			//�����˵������ٶ�
				oneLevelFontSize:3,			//һ����������ߴ�
				oneLevelFontFace:'Times',		//һ������������ʽ
				twoLevelFontSize:3,			//�����������ִ�С
				twoLevelFontFace:'Times'		//��������������ʽ
				
				});
			})
	
	</script>

   