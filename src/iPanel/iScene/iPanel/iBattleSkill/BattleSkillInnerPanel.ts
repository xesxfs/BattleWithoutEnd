module iPanel {
	export module iScene {

			export module iBattleSkill {
				export class BattleSkillInnerPanel extends iPanel.InnerPanel {
					private att:iPanel.iCell.StringCell;
					private def:iPanel.iCell.StringCell;
					private GAP:number = 20;
					private yStart:number = -5;
					private xStart1:number = 5;
					private xStart2:number = 10;
					private attPanel:egret.Sprite;
					private defPanel:egret.Sprite;
					private panel:egret.Sprite;
					private bg:egret.Sprite;

					public constructor()
					{
						super();
						this.att = new iPanel.iCell.StringCell("攻击",100,24);
						this.def = new iPanel.iCell.StringCell("防御",100,24);
						this.bg = new egret.Sprite();
						this.addChild(this.bg);
						this.panel = new egret.Sprite();
						this.attPanel = new egret.Sprite();
						this.defPanel = new egret.Sprite();
						this.addChild(this.panel);
						this.update();
					}

					public update():any
					{
						var _loc3_:number = flash.checkInt(0);
						var _loc4_:number = flash.checkInt(0);
						var _loc5_:iPanel.iCell.StringCell = <any>null;
						this.remove();
						var _loc1_:Array<iData.iSkill.ActiveSkill> = iGlobal.Player.attackSkillList;
						var _loc2_:number = flash.checkInt(_loc1_.length);
						if(_loc2_ > 0)
						{
							this.panel.addChild(this.att);
							this.att.x = this.xStart1;
							this.att.y = this.yStart;
							_loc3_ = flash.checkInt(iGlobal.Player.spellChance + 20 + _loc2_ * 5);
							if(_loc3_ > 95)
							{
								_loc3_ = flash.checkInt(95);
							}
							_loc4_ = flash.checkInt(0);
							while(_loc4_ < _loc2_)
							{
								_loc5_ = new iPanel.iCell.StringCell(_loc1_[_loc4_].skillData.realName + "  " + (_loc3_ / _loc2_ * 100 >> 0) / 100 + "%",160);
								this.attPanel.addChild(_loc5_);
								_loc5_.y = this.GAP * _loc4_;
								_loc4_++;
							}
							this.panel.addChild(this.attPanel);
							this.attPanel.x = this.xStart2;
							this.attPanel.y = this.yStart + 30;
						}
						_loc1_ = iGlobal.Player.defenceSkillList;
						_loc2_ = flash.checkInt(_loc1_.length);
						if(_loc2_ > 0)
						{
							this.panel.addChild(this.def);
							this.def.x = this.xStart1;
							this.def.y = this.attPanel.y + this.attPanel.height;
							_loc3_ = flash.checkInt(iGlobal.Player.spellChance + _loc2_ * 20);
							if(_loc3_ > 95)
							{
								_loc3_ = flash.checkInt(95);
							}
							_loc4_ = flash.checkInt(0);
							while(_loc4_ < _loc2_)
							{
								_loc5_ = new iPanel.iCell.StringCell(_loc1_[_loc4_].skillData.realName + "  " + (_loc3_ / _loc2_ * 100 >> 0) / 100 + "%",160);
								this.defPanel.addChild(_loc5_);
								_loc5_.y = this.GAP * _loc4_;
								_loc4_++;
							}
							this.panel.addChild(this.defPanel);
							this.defPanel.x = this.xStart2;
							this.defPanel.y = this.def.y + 30;
						}
						this.drawBg();
					}

					private remove():any
					{
						var _loc1_:number = flash.checkInt(0);
						if(this.panel.contains(this.att))
						{
							this.panel.removeChild(this.att);
						}
						if(this.panel.contains(this.def))
						{
							this.panel.removeChild(this.def);
						}
						_loc1_ = flash.checkInt(this.attPanel.numChildren - 1);
						while(_loc1_ >= 0)
						{
							this.attPanel.removeChildAt(_loc1_);
							_loc1_--;
						}
						_loc1_ = flash.checkInt(this.defPanel.numChildren - 1);
						while(_loc1_ >= 0)
						{
							this.defPanel.removeChildAt(_loc1_);
							_loc1_--;
						}
					}

					private drawBg():any
					{
						this.bg.graphics.clear();
						this.bg.graphics.beginFill(16777215,0);
						this.bg.graphics.drawRect(0,0,170,this.height);
						this.bg.graphics.endFill();
					}

				}
			
		}
	}
}

flash.extendsClass("iPanel.iScene.iPanel.iBattleSkill.BattleSkillInnerPanel","iPanel.InnerPanel")
