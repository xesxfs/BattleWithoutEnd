module iPanel {
	export module iScene {
		export module iPanel {
			export class PetInfoPanel extends iPanel.iCell.BasicCell {
				private beginX:number = 10;
				private beginY:number = 10;
				private yGap:number = 20;
				private sXGap:number = 50;
				private _name:iPanel.iCell.StringCell;
				private lv:iPanel.iCell.StringCell;
				private hp:iPanel.iBar.Bar;
				private exp:iPanel.iBar.Bar;

				public constructor()
				{
					super(185,80);
					this.init();
				}

				private init():any
				{
					var _loc1_:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("宠物");
					this.addChild(_loc1_);
					_loc1_.x = this.beginX;
					_loc1_.y = this.beginY;
					this._name = new iPanel.iCell.StringCell("",120);
					this.addChild(this._name);
					this._name.x = this.beginX + this.sXGap;
					this._name.y = this.beginY;
					var _loc2_:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("Lv");
					this.addChild(_loc2_);
					_loc2_.x = this.beginX;
					_loc2_.y = this.beginY + this.yGap;
					this.lv = new iPanel.iCell.StringCell("");
					this.addChild(this.lv);
					this.lv.x = this.beginX + this.sXGap - 30;
					this.lv.y = this.beginY + this.yGap;
					var _loc3_:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("Exp");
					this.addChild(_loc3_);
					_loc3_.x = this.beginX + 50;
					_loc3_.y = this.beginY + this.yGap;
					this.exp = new iPanel.iBar.Bar(50,100,7932074);
					this.addChild(this.exp);
					this.exp.x = this.beginX + 80;
					this.exp.y = this.beginY + this.yGap + 13;
					var _loc4_:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("HP");
					this.addChild(_loc4_);
					_loc4_.x = this.beginX;
					_loc4_.y = this.beginY + this.yGap * 2;
					this.hp = new iPanel.iBar.Bar(100,100,12522257);
					this.addChild(this.hp);
					this.hp.x = this.beginX + 25;
					this.hp.y = this.beginY + this.yGap * 2 + 13;
				}

				public update():any
				{
					if(iPanel.iScene.MainScene.battle["pet"])
					{
						this._name.setText(iPanel.iScene.MainScene.battle["pet"].realName);
						this.updateLv();
						this.updateHp();
						this.updateExp();
					}
					else
					{
						this._name.setText("");
						this.lv.setText("");
						this.hp.Value = 0;
						this.hp.Max = 1;
						this.exp.Value = 0;
						this.exp.Max = 1;
					}
				}

				public updateHp():any
				{
					if(iPanel.iScene.MainScene.battle["pet"])
					{
						this.hp.Value = iPanel.iScene.MainScene.battle["petHp"];
						this.hp.Max = iPanel.iScene.MainScene.battle["pet"].hp;
					}
				}

				public updateExp():any
				{
					if(iPanel.iScene.MainScene.battle["pet"])
					{
						this.exp.Value = iPanel.iScene.MainScene.battle["pet"].exp;
						this.exp.Max = iPanel.iScene.MainScene.battle["pet"].getLevelExp();
					}
				}

				public updateLv():any
				{
					if(iPanel.iScene.MainScene.battle["pet"])
					{
						this.lv.setText(iPanel.iScene.MainScene.battle["pet"].level + "");
					}
				}

			}
		}
	}
}

flash.extendsClass("iPanel.iScene.iPanel.PetInfoPanel","iPanel.iCell.BasicCell")
