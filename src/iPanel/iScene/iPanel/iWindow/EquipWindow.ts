module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export class EquipWindow extends iPanel.iScene.iPanel.iWindow.Window {
					private SC:number = 0.4;
					private SY:number = 100;
					private head:iPanel.iScene.iPanel.iWindow.iEquip.EquipCell;
					private feet:iPanel.iScene.iPanel.iWindow.iEquip.EquipCell;
					private body:iPanel.iScene.iPanel.iWindow.iEquip.EquipCell;
					private necklace:iPanel.iScene.iPanel.iWindow.iEquip.EquipCell;
					private ring:iPanel.iScene.iPanel.iWindow.iEquip.EquipCell;
					private leftHand:iPanel.iScene.iPanel.iWindow.iEquip.EquipCell;
					private rightHand:iPanel.iScene.iPanel.iWindow.iEquip.EquipCell;
					private pet:iPanel.iScene.iPanel.iWindow.iPet.PetIconCell;
					private bg2:egret.Sprite;
					private spList:Array<any>;
					private petSp:egret.Sprite;
					private petSkillSp:egret.Sprite;
					private _name:iPanel.iCell.StringCell;
					private attack:iPanel.iCell.StringCell;
					private hp:iPanel.iCell.StringCell;
					private mp:iPanel.iCell.StringCell;
					private balance:iPanel.iCell.StringCell;
					private cri:iPanel.iCell.StringCell;
					private cri_mul:iPanel.iCell.StringCell;
					private magatt:iPanel.iCell.StringCell;
					private def:iPanel.iCell.StringCell;
					private pro:iPanel.iCell.StringCell;

					public constructor()
					{
						super();
						var _loc1_:egret.Sprite = <any>new iPanel.iCell.BasicCell(200,540);
						this.addChild(_loc1_);
						var _loc2_:egret.Sprite = <any>new people_use1();
						this.addChild(_loc2_);
						_loc2_.scaleX = this.SC;
						_loc2_.scaleY = this.SC;
						_loc2_.y = this.SY;
						this.bg2 = new people_use2();
						this.addChild(this.bg2);
						this.bg2.scaleX = this.SC;
						this.bg2.scaleY = this.SC;
						this.bg2.y = this.SY;
						this.spList = new Array();
						this.update();
						this.addEventListener(egret.Event.ADDED_TO_STAGE,flash.bind(this.onAdd,this),null);
					}

					public update():any
					{
						var _self__:any = this;
						var i:number = flash.checkInt(0);
						i = flash.checkInt(this.spList.length);
						while(i > 0)
						{
							this.bg2.removeChild(this.spList.pop());
							i--;
						}
						var list:Array<any> = ["head","feet","body","necklace","ring","leftHand","rightHand"];
						i = flash.checkInt(0);
						while(i < list.length)
						{
							var equipDown:Function = <any>function ():any
							{
								this["setBefore"]();
								if(this["equip"])
								{
									if(iGlobal.Player.addItem(this["equip"]))
									{
										iGlobal.Player[this["position"]] = null;
										_self__.update();
										iGlobal.Player.updateAllInfo();
										iGlobal.Player.updateBattleSkillWindow();
									}
								}
							};
							this[list[i]] = new iPanel.iScene.iPanel.iWindow.iEquip.EquipCell(iGlobal.Player[list[i]],list[i]);
							this.bg2.addChild(this[list[i]]);
							this.spList.push(this[list[i]]);
							(flash.As3As(this[list[i]],iPanel.iScene.iPanel.iWindow.iEquip.EquipCell)).downFunction = equipDown;
							i++;
						}
						this.pet = new iPanel.iScene.iPanel.iWindow.iPet.PetIconCell(iGlobal.Player.pet);
						this.bg2.addChild(this.pet);
						this.spList.push(this.pet);
						this.pet.x = 60;
						this.pet.y = 620;
						this.head.x = 210;
						this.head.y = -50;
						this.feet.x = 210;
						this.feet.y = 480;
						this.body.x = 390;
						this.body.y = 300;
						this.necklace.x = 380;
						this.necklace.y = 100;
						this.ring.x = 10;
						this.ring.y = 120;
						this.leftHand.x = 5;
						this.leftHand.y = 230;
						this.rightHand.x = 415;
						this.rightHand.y = 220;
						this.setPetInfo();
					}

					private onAdd(param1:egret.Event)
					{
						tool.Effect.gradientInOutsideFirst(this.bg2,20,800,250,250);
					}

					private setPetInfo():any
					{
						if(this.petSp)
						{
							if(this.contains(this.petSp))
							{
								this.removeChild(this.petSp);
							}
						}
						if(this.petSkillSp)
						{
							if(this.contains(this.petSkillSp))
							{
								this.removeChild(this.petSkillSp);
							}
						}
						var _loc1_:number = flash.checkInt(20);
						var _loc2_:number = flash.checkInt(380);
						var _loc3_:number = flash.checkInt(35);
						var _loc4_:number = flash.checkInt(100);
						var _loc5_:number = flash.checkInt(20);
						this.petSp = new egret.Sprite();
						this.petSp.x = _loc1_;
						this.petSp.y = _loc2_;
						this.addChild(this.petSp);
						var _loc6_:Array<any> = new Array();
						var _loc7_:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("宠物",100,16);
						_loc6_.push(_loc7_);
						this._name = new iPanel.iCell.StringCell("Fox",150);
						_loc6_.push(this._name);
						_loc6_.push(new iPanel.iCell.StringCell("Hp"));
						_loc6_.push(this.hp = new iPanel.iCell.StringCell("100"));
						_loc6_.push(new iPanel.iCell.StringCell("Mp"));
						_loc6_.push(this.mp = new iPanel.iCell.StringCell("100"));
						_loc6_.push(new iPanel.iCell.StringCell("攻击"));
						_loc6_.push(this.attack = new iPanel.iCell.StringCell("20~30",65));
						_loc6_.push(new iPanel.iCell.StringCell("平衡"));
						_loc6_.push(this.balance = new iPanel.iCell.StringCell("50"));
						_loc6_.push(new iPanel.iCell.StringCell("暴击"));
						_loc6_.push(this.cri = new iPanel.iCell.StringCell("50"));
						_loc6_.push(new iPanel.iCell.StringCell("暴倍"));
						_loc6_.push(this.cri_mul = new iPanel.iCell.StringCell("200%"));
						_loc6_.push(new iPanel.iCell.StringCell("防御"));
						_loc6_.push(this.def = new iPanel.iCell.StringCell("10"));
						_loc6_.push(new iPanel.iCell.StringCell("护甲"));
						_loc6_.push(this.pro = new iPanel.iCell.StringCell("10"));
						_loc6_.push(new iPanel.iCell.StringCell("魔攻"));
						_loc6_.push(this.magatt = new iPanel.iCell.StringCell("100%"));
						var _loc8_:number = flash.checkInt(_loc6_.length);
						var _loc9_:number = flash.checkInt(0);
						while(_loc9_ < _loc8_)
						{
							this.petSp.addChild(_loc6_[_loc9_]);
							_loc6_[_loc9_].x = _loc3_ * (_loc9_ % 2) + _loc4_ * (_loc9_ / 10 >> 0);
							_loc6_[_loc9_].y = _loc5_ + _loc5_ * (_loc9_ % 10 / 2 >> 0);
							_loc9_++;
						}
						this.petSkillSp = new egret.Sprite();
						this.petSkillSp.x = 10;
						this.petSkillSp.y = 500;
						this.addChild(this.petSkillSp);
						this.updatePetInfo();
					}

					public updatePetInfo():any
					{
						var _loc1_:number = flash.checkInt(0);
						var _loc2_:iPanel.iScene.iPanel.iWindow.iPet.PetSkillCell = <any>null;
						if(<any>!iGlobal.Player.pet)
						{
							this.petSp.visible = false;
							this.petSkillSp.visible = false;
							return ;
						}
						this.petSp.visible = true;
						this.petSkillSp.visible = true;
						this._name.setText(iGlobal.Player.pet.realName);
						this.hp.setText(iGlobal.Player.pet.hp + "");
						this.mp.setText(iGlobal.Player.pet.mp + "");
						this.attack.setText(iGlobal.Player.pet.attmin + "~" + iGlobal.Player.pet.attmax + "");
						this.balance.setText(iGlobal.Player.pet.balance + "");
						this.cri.setText(iGlobal.Player.pet.cri + "");
						this.def.setText(iGlobal.Player.pet.defence + "");
						this.pro.setText(iGlobal.Player.pet.pro + "");
						this.magatt.setText(iGlobal.Player.pet.magicatt + "%");
						this.cri_mul.setText(iGlobal.Player.pet.crimul + "%");
						_loc1_ = flash.checkInt(this.petSkillSp.numChildren - 1);
						while(_loc1_ >= 0)
						{
							this.petSkillSp.removeChildAt(_loc1_);
							_loc1_--;
						}
						_loc1_ = flash.checkInt(0);
						while(_loc1_ < iGlobal.Player.pet.skillList.length)
						{
							_loc2_ = new iPanel.iScene.iPanel.iWindow.iPet.PetSkillCell(iGlobal.Player.pet.skillList[_loc1_]);
							this.petSkillSp.addChild(_loc2_);
							_loc2_.x = _loc1_ * 30 + 2 + _loc1_ * 10;
							_loc1_++;
						}
					}

				}
			}
		}
	// }
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.EquipWindow","iPanel.iScene.iPanel.iWindow.Window")
