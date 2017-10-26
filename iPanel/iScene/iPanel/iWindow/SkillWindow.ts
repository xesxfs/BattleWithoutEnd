module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export class SkillWindow extends iPanel.iScene.iPanel.iWindow.Window {
					public panel:iPanel.OutterPanel;
					private combatPanel:iPanel.iScene.iPanel.iWindow.iSkill.CombatOutterPanel;
					private magicPanel:iPanel.iScene.iPanel.iWindow.iSkill.MagicOutterPanel;
					private passivePanel:iPanel.iScene.iPanel.iWindow.iSkill.PassiveOutterPanel;

					public constructor()
					{
						super(						var _self__:any = this;
);
						var passive:iPanel.iScene.iPanel.iWindow.iSkill.StringButton = <any>null;
						var _this:any = undefined;
						var combatDown:Function = <any>null;
						var magicDown:Function = <any>null;
						var passiveDown:Function = <any>null;
						combatDown = function ()
						{
							removePanel();
							_self__.panel = _self__.combatPanel;
							_this.addChild(_self__.panel);
							_self__.panel.y = 25;
						};
						magicDown = function ()
						{
							removePanel();
							_self__.panel = _self__.magicPanel;
							_this.addChild(_self__.panel);
							_self__.panel.y = 25;
						};
						passiveDown = function ()
						{
							removePanel();
							_self__.panel = _self__.passivePanel;
							_this.addChild(_self__.panel);
							_self__.panel.y = 25;
						};
						var removePanel:Function = <any>function ():any
						{
							if(_this.panel)
							{
								_this.removeChild(_self__.panel);
							}
						};
						var buttonSprite:egret.Sprite = new egret.Sprite();
						this.addChild(buttonSprite);
						var combat:iPanel.iScene.iPanel.iWindow.iSkill.StringButton = new iPanel.iScene.iPanel.iWindow.iSkill.StringButton("战斗",iGlobal.Global.RED);
						buttonSprite.addChild(combat);
						var magic:iPanel.iScene.iPanel.iWindow.iSkill.StringButton = new iPanel.iScene.iPanel.iWindow.iSkill.StringButton("魔法",iGlobal.Global.BLUE);
						buttonSprite.addChild(magic);
						magic.x = 67;
						passive = new iPanel.iScene.iPanel.iWindow.iSkill.StringButton("被动",iGlobal.Global.YELLOW);
						buttonSprite.addChild(passive);
						passive.x = 134;
						var buttonGroup:iPanel.iCell.ButtonGroup = new iPanel.iCell.ButtonGroup();
						buttonGroup.addButton(combat);
						buttonGroup.addButton(magic);
						buttonGroup.addButton(passive);
						this.combatPanel = new iPanel.iScene.iPanel.iWindow.iSkill.CombatOutterPanel();
						this.magicPanel = new iPanel.iScene.iPanel.iWindow.iSkill.MagicOutterPanel();
						this.passivePanel = new iPanel.iScene.iPanel.iWindow.iSkill.PassiveOutterPanel();
						this.addEventListener(tool.MyEvent.Update,flash.bind(this.onUpdate,this),null,true);
						combat.downFunction = combatDown;
						_this = this;
						magic.downFunction = magicDown;
						passive.downFunction = passiveDown;
					}

					public onUpdate(param1:egret.Event = null):any
					{
						(flash.As3As(this.combatPanel.innerPanel,iPanel.iScene.iPanel.iWindow.iSkill.CombatInnerPanel)).update();
						(flash.As3As(this.magicPanel.innerPanel,iPanel.iScene.iPanel.iWindow.iSkill.MagicInnerPanel)).update();
						(flash.As3As(this.passivePanel.innerPanel,iPanel.iScene.iPanel.iWindow.iSkill.PassiveInnerPanel)).update();
						iGlobal.Player.updateSkillInfo();
					}

				}
			}
		}
	}
// }

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.SkillWindow","iPanel.iScene.iPanel.iWindow.Window")
