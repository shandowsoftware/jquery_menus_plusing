/**
 *menus plusing
 *
 *author by___Beyond-Bit
 *
 *All Rights Reserved
 *
 */
(function($){
		//init plusing
		$.fn.myPlusing=function(options){
			var opts = $.extend({}, $.fn.myPlusing.defualts, options);
			$.fn.setList(opts);
		}
		
		//plugin defaults values
		$.fn.myPlusing.defualts ={
			MenusOneLevel:"Hello,world,blog,Que,Aswer",	//one level menus 
			MenusTwoLevel:"Hello1,Hello2,Hello3,Hello4,Hello5|world1,world2,world3,world4|blog1,blog2|Que1,Que2|Aswer1,Aswer2", //two level menus
			LinkAddress:"Hello1.html,Hello2.html,Hello3.html,Hello4.html,Hello5.html|world1.html,world2.html,world3.html,world4.html|blog1.html,blog2.html|Que1.html,Que2.html|Aswer1.html,Aswer2.html",//two level link
			Top:50,								//�������룬Ĭ��50px
			Height:100,							//�˵��߶�
			Width:65,							//�����ҵĿ��	
			Scroll:true,						//���ò˵��Ƿ����
			TwoLevelMenusSpaceOneLevelTitleTop:50,
			OneLevelBackgroundColoer:"#099", 	//һ���˵�������ɫ
			TwoLevelBackgroundColoer:"#008B8B",	//�����˵�������ɫ
			MenusShowSpeed:'slow',				//�����˵���ʾ�ٶ�
			MenusHideSpeed:'fast',				//�����˵������ٶ�
			OneLevelFontSize:3,					//һ����������ߴ�
			OneLevelFontFace:'Times',			//һ������������ʽ
			TwoLevelFontSize:3,					//�����������ִ�С
			TwoLevelFontFace:'Times'			//��������������ʽ
			
		}
		
		//menus container div
		$.fn.containerDiv={
			bigContainer:function(opts,showType){
				var bigContainerValue='<div style="position:'+showType+';top:'+opts.Top+'%;width:100%;height:'+opts.Height
									+'px;margin:0px 0px 0px -8px; padding:0; background:'+opts.OneLevelBackgroundColoer+';text-align:center;">'+
								 '<div id="twoMenusDiv" style="width:'+opts.Width+'%;float:right;clear:right;"></div></div>';
								return bigContainerValue;
			}
		}
		//init menus tag
		$.fn.setList=function(opts){
			//alert(opts.MenusOneLevel);
			var bigContainerHtml="";
			if(opts.Scroll){
				bigContainerHtml=$.fn.containerDiv.bigContainer(opts,"fixed");
				
			}else{
				bigContainerHtml=$.fn.containerDiv.bigContainer(opts,"absolute");
				
			}
			//alert($.fn.containerDiv.bigContainer(opts));
			
			$("body").append(bigContainerHtml);
			
			//$("body").append(BigContainer);
			
			var levelMenusOne=opts.MenusOneLevel;			//��ȡһ�����������
			var levelMenusOneValues=levelMenusOne.split(",");
		
			var	levelMenusTwo=opts.MenusTwoLevel;			//��ȡ�����˵�����
			var levelMenusTwoStr=levelMenusTwo.split("|");
			
			var levelMenusLink = opts.LinkAddress;			//��ȡ���ӽ��������ӵ�ַ
			var levelMenusTwoLink=levelMenusLink.split("|");
			
			for(var i =0;i<levelMenusOneValues.length;i++){
				var oneLevelContainer='<div style="height:70px;width:100px;float:left;padding:30px 0 0 0px" class="menus" id="oneLevelId'+i
									+'" name="'+levelMenusOneValues[i]+'"><font size="'+opts.OneLevelFontSize+'" face="'+opts.OneLevelFontFace+'"><a href="#">'+
									levelMenusOneValues[i]+'</font></a></div>';
				$("#twoMenusDiv").append(oneLevelContainer);
			}
			
			for(var j =0;j<levelMenusTwoStr.length;j++){
				var twoLevelContainer='<div style="margin:'+opts.TwoLevelMenusSpaceOneLevelTitleTop+'% 30px 0px 0px;height:220px;width:480px;background:'+
								opts.TwoLevelBackgroundColoer+';float:left;" class="child" id="twoLevelId'+j+'"><ul id="ulId'+j+'"></ul></div>';
				$("#oneLevelId"+j+"").append(twoLevelContainer);
					var levelMenusTwoValues=levelMenusTwoStr[j].split(",");
					var levelMenusTwoLinked=levelMenusTwoLink[j].split(",");
					for(var k =0;k<levelMenusTwoValues.length;k++){
						var liHTML="<li><font size='"+opts.TwoLevelFontSize+"' face='"+
							opts.TwoLevelFontFace+"'><a href='"+levelMenusTwoLinked[k]+"'>"+levelMenusTwoValues[k]+"</font></a></li>";
						$("#ulId"+j+"").append(liHTML);
					}
					//alert(twoLevelContainer);
			}
			$(".child").hide();
			$('.menus').hover(function(){
				//$(this).addClass('bgImg').siblings().removeClass("bgImg");
				var name=$(this).attr("name");
				for(var l= 0;l<levelMenusOneValues.length;l++){
					var levelName=levelMenusOneValues[l];
					if(name==levelName){
						$("#oneLevelId"+l+"").addClass('bgImg').siblings().removeClass("bgImg");
						$("#twoLevelId"+l+"").show(opts.MenusShowSpeed);
					}else{
						$("#twoLevelId"+l+"").hide(opts.MenusHideSpeed);
					}	
				}
				
			},function(){
				$(".menus").removeClass("bgImg");
				$(".child").hide();
			})

			$("li").hover(function(){
				//$(this).addClass('menusBgImg').siblings().removeClass("menusBgImg");
				$(this).addClass('menusBgImg');
				//$(this).show();
			},function(){
				$(this).removeClass('menusBgImg');
			})	
		}
	})(jQuery); 
	