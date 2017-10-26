module iData {
	export module iSkill {
		export class Skill {
			public level: number = 0;
			public skillData: iData.iSkill.SkillData;

			public constructor(param1: iData.iSkill.SkillData) {

				this.skillData = param1;
				this.level = 0;
			}

			public static load(param1: string): iData.iSkill.Skill {
				var _loc3_: iData.iSkill.Skill = <any>null;
				var _loc2_: Array<any> = param1.split("#");
				var _loc4_: number = 0;
				while (_loc4_ < iData.iSkill.SkillDataList.list.length) {
					if (iData.iSkill.SkillDataList.list[_loc4_].name == _loc2_[1]) {
						//这里
						if (iData.iSkill.SkillDataList.list[_loc4_] instanceof iData.iSkill.PassiveSkillData) {
							//这里
							_loc3_ = new iData.iSkill.PassiveSkill(iData.iSkill.SkillDataList.list[_loc4_] as iData.iSkill.PassiveSkillData);
						}
						else {
							//这里
							_loc3_ = new iData.iSkill.ActiveSkill(iData.iSkill.SkillDataList.list[_loc4_] as iData.iSkill.ActiveSkillData);
						}
						break;
					}
					_loc4_++;
				}
				_loc3_.level = _loc2_[0];
				return _loc3_;
			}

			public getDescription(): string {
				if (this.skillData.desFunction) {
					return this.skillData.desFunction(this);
				}
				return "no function";
			}

			public levelup() {
				iGlobal.Player.addAp(-this.skillData.lvupCostList[this.level + 1]);
				this.level++;
				iPanel.iScene.MainScene.allInfoPanel.addText("<font color=\'#FF4040\'>Skill " + this.skillData.name + " level up to " + (15 - this.level).toString(16).toUpperCase() + "!</font>.");
				if (this.level == 14) {
					iData.iPlayer.TitleList.updateTitleInfo(this.skillData.name);
				}
			}

			public canLevelup(): boolean {
				if (this.level >= 14) {
					return false;
				}
				if (this.skillData.lvupCostList[this.level + 1] > iGlobal.Player.ap) {
					return false;
				}
				return true;
			}

			public save(): string {
				var _loc1_: string = "";
				_loc1_ = _loc1_ + (this.level + "#" + this.skillData.name);
				return _loc1_;
			}

		}
	}
}

