module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iSkill {
					export class ActiveSkillCell extends iPanel.iScene.iPanel.iWindow.iSkill.SkillCell {

						public constructor(param1:iData.iSkill.Skill)
						{
							super(param1);
							this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.onMouseDown,this),null);
						}

						private onMouseDown(param1:flash.MouseEvent)
						{
							if(flash.As3is(param1.target,doubleCircle) || flash.As3is(param1.target,mc_lvup))
							{
								return ;
							}
							if(iGlobal.Player.isSkillEquiped(this.skill))
							{
								iGlobal.Player.unequipSkill(this.skill);
							}
							else
							{
								iGlobal.Player.equipSkill(this.skill);
							}
							this.updateEquip();
						}

						public updateEquip():any
						{
							if(iGlobal.Player.isSkillEquiped(this.skill))
							{
								this.bg["transform"].colorTransform = new flash.ColorTransform(0.9,0.7,0,1,0,0,0,0);
								this.mc["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
								this.text["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
							}
							else
							{
								this.bg["transform"].colorTransform = new flash.ColorTransform();
								this.mc["transform"].colorTransform = new flash.ColorTransform();
								this.text["transform"].colorTransform = new flash.ColorTransform();
							}
						}

					// }
				}
			}
		}
	}
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSkill.ActiveSkillCell","iPanel.iScene.iPanel.iWindow.iSkill.SkillCell")
