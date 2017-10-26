module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iSkill {
					export class PassiveInnerPanel extends iPanel.InnerPanel {
						private Gap:number = 50;
						private listSprite:egret.Sprite;

						public constructor()
						{
							super();
							var _loc3_:iPanel.iScene.iPanel.iWindow.iSkill.SkillCell = <any>null;
							this.listSprite = new egret.Sprite();
							this.addChild(this.listSprite);
							var _loc1_:number = flash.checkInt(0);
							var _loc2_:number = flash.checkInt(0);
							while(_loc2_ < iGlobal.Player.skillList.length)
							{
								if(flash.As3is(iGlobal.Player.skillList[_loc2_],iData.iSkill.PassiveSkill))
								{
									_loc3_ = new iPanel.iScene.iPanel.iWindow.iSkill.SkillCell(iGlobal.Player.skillList[_loc2_]);
									this.listSprite.addChild(_loc3_);
									_loc3_.y = this.Gap * _loc1_;
									_loc1_++;
								}
								_loc2_++;
							}
						}

						public update():any
						{
							var _loc1_:number = flash.checkInt(0);
							while(_loc1_ < this.listSprite.numChildren)
							{
								(flash.As3As(this.listSprite.getChildAt(_loc1_),iPanel.iScene.iPanel.iWindow.iSkill.SkillCell)).update();
								_loc1_++;
							}
							this.addCell();
						}

						public addCell():any
						{
							var _loc3_:iPanel.iScene.iPanel.iWindow.iSkill.SkillCell = <any>null;
							var _loc1_:number = flash.checkInt(0);
							var _loc2_:number = flash.checkInt(0);
							while(_loc2_ < iGlobal.Player.skillList.length)
							{
								if(flash.As3is(iGlobal.Player.skillList[_loc2_],iData.iSkill.PassiveSkill))
								{
									_loc1_++;
									if(_loc1_ > this.listSprite.numChildren)
									{
										_loc3_ = new iPanel.iScene.iPanel.iWindow.iSkill.SkillCell(iGlobal.Player.skillList[_loc2_]);
										this.listSprite.addChild(_loc3_);
										_loc3_.y = this.Gap * (_loc1_ - 1);
									}
								}
								_loc2_++;
							}
						}

					}
				// }
			}
		}
	}
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSkill.PassiveInnerPanel","iPanel.InnerPanel")
