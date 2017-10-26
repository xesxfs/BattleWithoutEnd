module iPanel {
	export module iScene {
		export module iPanel {
			export class MonsterInfoPanel extends iPanel.iCell.BasicCell {
				private beginX:number = 10;
				private beginY:number = 10;
				private yGap:number = 50;
				private sXGap:number = 50;
				private _name:iPanel.iCell.StringCell;
				private title:iPanel.iCell.StringInfoCell;
				private hp:iPanel.iBar.Bar;
				private cp:iPanel.iCell.StringCell;
				private buffSprite:egret.Sprite;
				private bossIcon:egret.Sprite;
				public RED:string = "#ff4040";
				public BLUE:string = "#4a60d7";
				public YELLOW:string = "#FFA640";
				public GREEN:string = "#7AEE3C";
				public BROWN:string = "#bf7130";
				public PURPLE:string = "#BC38d3";
				public PINK:string = "#EE6b9c";

				public constructor()
				{
					super(185,135);
					this.setPosition();
				}

				private setPosition():any
				{
					var _loc1_:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("怪物");
					this.addChild(_loc1_);
					_loc1_.x = this.beginX;
					_loc1_.y = this.beginY;
					this._name = new iPanel.iCell.StringCell("Boss Red Fox",120,16);
					this.addChild(this._name);
					this._name.x = this.beginX + this.sXGap;
					this._name.y = this.beginY;
					this.bossIcon = new boss_icon();
					this.addChild(this.bossIcon);
					this.bossIcon.x = this.beginX + 30;
					this.bossIcon.y = this.beginY + 22;
					this.bossIcon.width = 15;
					this.bossIcon.height = 15;
					this.title = new iPanel.iCell.StringInfoCell("the Tanker","Default",120);
					this.addChild(this.title);
					this.title.x = this.beginX + this.sXGap;
					this.title.y = this.beginY + 20;
					var _loc2_:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("HP");
					this.addChild(_loc2_);
					_loc2_.x = this.beginX;
					_loc2_.y = this.beginY + this.yGap + 30;
					this.hp = new iPanel.iBar.Bar(100,100,12522257);
					this.addChild(this.hp);
					this.hp.x = this.beginX + 25;
					this.hp.y = this.beginY + this.yGap + 43;
					var _loc3_:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("战斗力");
					this.addChild(_loc3_);
					_loc3_.x = this.beginX;
					_loc3_.y = this.beginY + this.yGap * 2;
					this.cp = new iPanel.iCell.StringCell("100");
					this.addChild(this.cp);
					this.cp.x = this.beginX + this.sXGap;
					this.cp.y = this.beginY + this.yGap * 2;
					this.buffSprite = new egret.Sprite();
				}

				public update()
				{
					this.setCpRatioTitleAndName();
					this.setTitle();
					this.cp.setText(iPanel.iScene.MainScene.battle["monster"].CP + "");
					this.updateHp();
					this.updateBuff();
					this.updateBoss();
				}

				private updateBoss():any
				{
					if(flash.As3is(iPanel.iScene.MainScene.battle["monster"],iData.iMonster.Boss))
					{
						this.bossIcon.visible = true;
						return ;
					}
					this.bossIcon.visible = false;
				}

				public updateHp()
				{
					this.hp.Max = iPanel.iScene.MainScene.battle["monster"].hp;
					this.hp.Value = iPanel.iScene.MainScene.battle["monsterHp"];
				}

				private setCpRatioTitleAndName():any
				{
					var _loc2_:string = <any>null;
					var _loc3_:string = <any>null;
					var _loc1_:number = iPanel.iScene.MainScene.battle["monster"].CP / iGlobal.Player.combatPower;
					if(_loc1_ < 0.8)
					{
						_loc2_ = this.PINK;
						_loc3_ = "非常弱小的";
					}
					else if(_loc1_ < 1)
					{
						_loc2_ = this.PURPLE;
						_loc3_ = "弱小的";
					}
					else if(_loc1_ < 1.4)
					{
						_loc2_ = this.BROWN;
						_loc3_ = "普通的";
					}
					else if(_loc1_ < 2)
					{
						_loc2_ = this.GREEN;
						_loc3_ = "强大的";
					}
					else if(_loc1_ < 3)
					{
						_loc2_ = this.YELLOW;
						_loc3_ = "厉害的";
					}
					else
					{
						_loc2_ = this.RED;
						_loc3_ = "BOSS";
					}
					var _loc4_:string = "<font color=\'" + _loc2_ + "\'>" + _loc3_ + "</font> " + iPanel.iScene.MainScene.battle["monster"].data.realName;
					this._name.setText(_loc4_);
				}

				private setTitle():any
				{
					if(iPanel.iScene.MainScene.battle["monster"].title)
					{
						this.title.setText(iPanel.iScene.MainScene.battle["monster"].title.name);
						this.title.setInfo(iPanel.iScene.MainScene.battle["monster"].title.description);
						this.title.visible = true;
					}
					else
					{
						this.title.setText("");
						this.title.visible = false;
					}
				}

				public updateBuff():any
				{
					var _loc3_:egret.Sprite = <any>null;
					if(this.contains(this.buffSprite))
					{
						this.removeChild(this.buffSprite);
					}
					this.buffSprite = new egret.Sprite();
					this.addChild(this.buffSprite);
					this.buffSprite.x = this.beginX;
					this.buffSprite.y = this.beginY + 50;
					var _loc1_:Array<iData.iSkill.iBuff.Buff> = <any>iPanel.iScene.MainScene.battle["monster"].buffList;
					var _loc2_:number = flash.checkInt(0);
					while(_loc2_ < _loc1_.length)
					{
						_loc3_ = new (<any>flash.getDefinitionByName("buff_" + _loc1_[_loc2_].name))();
						_loc3_.width = 30;
						_loc3_.height = 30;
						this.buffSprite.addChild(_loc3_);
						_loc3_.x = _loc2_ * 40;
						_loc2_++;
					}
				}

			}
		}
	}
}

flash.extendsClass("iPanel.iScene.iPanel.MonsterInfoPanel","iPanel.iCell.BasicCell")
