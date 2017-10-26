module iPanel {
	export module iScene {
		export class RaceScene extends egret.Sprite {
			public background:egret.Sprite;
			public human:iPanel.iScene.RaceButton;
			public elf:iPanel.iScene.RaceButton;
			public giant:iPanel.iScene.RaceButton;
			public dwarf:iPanel.iScene.RaceButton;
			public undeath:iPanel.iScene.RaceButton;
			private agePanel:egret.Sprite;
			private infoPanel:egret.Sprite;
			private ageText:flash.TextField;
			private initialText:flash.TextField;
			private ageGrowText:flash.TextField;
			private chosenRace:iData.Race;
			private chosenAge:number = 10;
			private px:number = 100;
			private py:number = 150;
			private pg:number = 80;

			public constructor()
			{
				super();
				this.background = new egret.Sprite();
				this.human = new iPanel.iScene.RaceButton("before_human","after_human",iData.RaceList.HUMAN);
				this.elf = new iPanel.iScene.RaceButton("before_elf","after_elf",iData.RaceList.ELF);
				this.giant = new iPanel.iScene.RaceButton("before_giant","after_giant",iData.RaceList.GIANT);
				this.dwarf = new iPanel.iScene.RaceButton("before_dwarf","after_dwarf",iData.RaceList.DWARF);
				this.undeath = new iPanel.iScene.RaceButton("before_undeath","after_undeath",iData.RaceList.UNDEATH);
				this.background.graphics.beginFill(16777215,1);
				this.background.graphics.drawRect(0,0,800,600);
				this.background.graphics.endFill();
				this.addChild(this.background);
				var _loc1_:egret.MovieClip = <any>new caption_mc();
				this.addChild(_loc1_);
				_loc1_.x = 150;
				_loc1_.y = -30;
				this.setRaceButtons();
				this.setAgeButtons();
				this.setInfoPanel();
			}

			private setRaceButtons()
			{
				var _self__:any = this;
				var aa:Function = <any>null;
				aa = function ()
				{
					if(_self__.agePanel.visible == false)
					{
						_self__.agePanel.visible = true;
						tool.Effect.fadeIn(_self__.agePanel,10);
					}
					_self__.chosenRace = this["race"];
					_self__.updataInfo();
				};
				this.addChild(this.human);
				this.human.x = this.px;
				this.human.y = this.py;
				this.human.downFunction = aa;
				this.addChild(this.elf);
				this.elf.x = this.px;
				this.elf.y = this.py + this.pg;
				this.elf.downFunction = aa;
				this.addChild(this.giant);
				this.giant.x = this.px;
				this.giant.y = this.py + this.pg * 2;
				this.giant.downFunction = aa;
				this.addChild(this.undeath);
				this.undeath.x = this.px;
				this.undeath.y = this.py + this.pg * 3;
				this.undeath.downFunction = aa;
				this.addChild(this.dwarf);
				this.dwarf.x = this.px;
				this.dwarf.y = this.py + this.pg * 4;
				this.dwarf.downFunction = aa;
				var buttonGroup:iPanel.iCell.ButtonGroup = new iPanel.iCell.ButtonGroup();
				buttonGroup.addButton(this.human);
				buttonGroup.addButton(this.elf);
				buttonGroup.addButton(this.giant);
				buttonGroup.addButton(this.dwarf);
				buttonGroup.addButton(this.undeath);
			}

			private setAgeButtons()
			{
				var _self__:any = this;
				var p:iPanel.iScene.PeopleModel = <any>null;
				this.agePanel = new egret.Sprite();
				this.addChild(this.agePanel);
				this.agePanel.y = 200;
				this.agePanel.x = 380;
				var buttonGroup2:iPanel.iCell.ButtonGroup = new iPanel.iCell.ButtonGroup();
				var i:number = flash.checkInt(0);
				while(i < 8)
				{
					var aa:Function = <any>function ()
					{
						if(_self__.infoPanel.visible == false)
						{
							_self__.infoPanel.visible = true;
							tool.Effect.fadeIn(_self__.infoPanel,10);
						}
						_self__.chosenAge = flash.checkInt(this["age"]);
						_self__.updataInfo();
					};
					p = new iPanel.iScene.PeopleModel(10 + i);
					this.agePanel.addChild(p);
					p.y = 0;
					p.x = i * 50;
					buttonGroup2.addButton(p);
					p.downFunction = aa;
					i++;
				}
				this.agePanel.visible = false;
			}

			private setInfoPanel()
			{
				var _self__:any = this;
				var _this:any = undefined;
				var okDown:Function = <any>null;
				okDown = function ()
				{
					var addMain:Function = <any>null;
					addMain = function ():any
					{
						var _loc1_:iPanel.iScene.MainScene = <any>null;
						if(iGlobal.Global.sound_toggle)
						{
							iGlobal.Global.soundOut();
						}
						if(iGlobal.Global.mainScene)
						{
							iGlobal.Global.mainScene.visible = true;
							tool.Effect.fadeIn(iGlobal.Global.mainScene);
						}
						else
						{
							_loc1_ = new iPanel.iScene.MainScene();
							iGlobal.Global.mainScene = _loc1_;
							iGlobal.Global.stage.addChild(_loc1_);
							tool.Effect.fadeIn(_loc1_);
						}
					};
					tool.Effect.explodeOut(_this,2,4294967295,addMain);
					iGlobal.Player.burn(_self__.chosenAge,_self__.chosenRace);
					if(iGlobal.Global.sound_toggle)
					{
						iGlobal.Global.playSound();
					}
					if(iGlobal.Global.mainScene)
					{
						iGlobal.Global.mainScene.visible = false;
					}
				};
				this.infoPanel = new egret.Sprite();
				this.addChild(this.infoPanel);
				this.infoPanel.x = 380;
				this.infoPanel.y = 150;
				this.ageText = iGlobal.Global.getTextField();
				this.ageText.text = "年龄:10";
				this.infoPanel.addChild(this.ageText);
				this.initialText = iGlobal.Global.getTextField();
				this.initialText.text = "初始属性:";
				this.initialText.width = 420;
				this.infoPanel.addChild(this.initialText);
				this.initialText.y = 170;
				this.ageGrowText = iGlobal.Global.getTextField();
				this.ageGrowText.text = "年龄成长:";
				this.ageGrowText.width = 400;
				this.infoPanel.addChild(this.ageGrowText);
				this.ageGrowText.y = 220;
				var mention:flash.TextField = iGlobal.Global.getTextField(16);
				mention.width = 300;
				mention.text = "(升级时增长属性是当前年龄增长的1/4)";
				this.infoPanel.addChild(mention);
				mention.x = 100;
				mention.y = 260;
				var okButton:iPanel.iScene.FlickerButton = new iPanel.iScene.FlickerButton("确定",250,50);
				this.infoPanel.addChild(okButton);
				okButton.x = 100;
				okButton.y = 300;
				okButton.downFunction = okDown;
				_this = this;
				this.infoPanel.visible = false;
			}

			private updataInfo()
			{
				this.ageText.text = "年龄:" + this.chosenAge;
				var _loc1_:iData.BasicStatus = this.chosenRace.caculateStat(this.chosenAge);
				this.initialText.text = "初始属性:   力量 " + _loc1_.str + " 敏捷 " + _loc1_.dex + " 智力 " + _loc1_.intelligence + " 意志 " + _loc1_.will + " 幸运 " + _loc1_.luck;
				_loc1_ = this.chosenRace.ageupList[this.chosenAge - 10];
				this.ageGrowText.text = "年龄增长:   力量+" + _loc1_.str + " 敏捷+" + _loc1_.dex + " 智力+" + _loc1_.intelligence + " 意志+" + _loc1_.will + " 幸运+" + _loc1_.luck;
			}

		}
	}
}

flash.extendsClass("iPanel.iScene.RaceScene","egret.Sprite")
