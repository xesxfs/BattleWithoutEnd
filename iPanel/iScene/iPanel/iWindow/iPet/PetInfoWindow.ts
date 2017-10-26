module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iPet {
					export class PetInfoWindow extends iPanel.iCell.InfoWindow {
						private pet:iData.iPet.Pet;
						private xp:iPanel.iBar.Bar;
						private skillMcList:egret.Sprite;
						private textTitle:flash.TextField;

						public constructor(param1:iData.iPet.Pet)
						{
							super(0,0);
							this.textTitle = iGlobal.Global.getTextField(24);
							this.textTitle.multiline = true;
							this.addChild(this.textTitle);
							this.pet = param1;
							this.touchEnabled = true;
							this.touchChildren = true;
						}

						public draw(param1:number,param2:number):any
						{
							param1 = flash.checkInt(param1);
							param2 = flash.checkInt(param2);
							this.graphics.clear();
							this.textTitle.width = 130;
							this.textTitle.htmlText = this.petInfo();
							this.setSkill();
							super.draw(130,this.textTitle.textHeight + 5 + 40);
						}

						private getType():string
						{
							switch(this.pet.type)
							{
							case iData.iPet.PetType.ATTACK :
								return "攻击型";
							case iData.iPet.PetType.BALANCE :
								return "平衡型";
							case iData.iPet.PetType.DEFENCE :
								return "防御型";
							case iData.iPet.PetType.MAGIC :
								return "魔法型";
							default :
								return this.pet.type;
							}
						}

						public petInfo():string
						{
							var _loc1_:any = <any>"<p align=\'center\'>" + this.pet.realName + " Lv." + this.pet.level + "</p>";
							_loc1_ = _loc1_ + ("<p align=\'center\'><font size=\'20\'>" + this.getType() + "</font></p>");
							_loc1_ = _loc1_ + "<font size=\'16\'>";
							_loc1_ = _loc1_ + ("  Hp\t" + this.pet.hp + "<br/>");
							_loc1_ = _loc1_ + ("  Mp\t" + this.pet.mp + "<br/>");
							_loc1_ = _loc1_ + ("  攻击\t" + this.pet.attmin + "~" + this.pet.attmax + "<br/>");
							_loc1_ = _loc1_ + ("  平衡\t" + this.pet.balance + "<br/>");
							_loc1_ = _loc1_ + ("  暴击率\t" + this.pet.cri + "%<br/>");
							_loc1_ = _loc1_ + ("  暴击倍数\t" + this.pet.crimul + "%<br/>");
							_loc1_ = _loc1_ + ("  防御\t" + this.pet.defence + "<br/>");
							_loc1_ = _loc1_ + ("  护甲\t" + this.pet.pro + "<br/>");
							_loc1_ = _loc1_ + ("  魔法攻击\t" + this.pet.magicatt + "%<br/>");
							_loc1_ = _loc1_ + "</font>";
							return _loc1_;
						}

						private setSkill():any
						{
							var _loc2_:iPanel.iScene.iPanel.iWindow.iPet.PetSkillCell = <any>null;
							var _loc1_:number = flash.checkInt(0);
							while(_loc1_ < this.pet.skillList.length)
							{
								_loc2_ = new iPanel.iScene.iPanel.iWindow.iPet.PetSkillCell(this.pet.skillList[_loc1_]);
								this.addChild(_loc2_);
								_loc2_.x = _loc1_ * 30 + 2 + _loc1_ * 2;
								_loc2_.y = this.textTitle.textHeight + 5;
								_loc1_++;
							}
						}

					// }
				}
			}
		}
	}
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iPet.PetInfoWindow","iPanel.iCell.InfoWindow")
