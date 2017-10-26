module iPanel {
	export module iScene {
		// export module iPanel {
			export class LootPanel extends iPanel.iCell.BasicCell {
				private beginX:number = 10;
				private beginY:number = 30;
				private gap:number = 18;
				private fontSize:number = 20;
				private gapX:number = 100;
				private money_c:iPanel.iCell.StringCell;
				private exp_c:iPanel.iCell.StringCell;
				private basic_c:iPanel.iCell.StringCell;
				private magic_c:iPanel.iCell.StringCell;
				private rare_c:iPanel.iCell.StringCell;
				private perfect_c:iPanel.iCell.StringCell;
				private epic_c:iPanel.iCell.StringCell;
				private legendary_c:iPanel.iCell.StringCell;
				public money:number = 0;
				public exp:number = 0;
				public basic:number = 0;
				public magic:number = 0;
				public rare:number = 0;
				public perfect:number = 0;
				public epic:number = 0;
				public legendary:number = 0;

				public constructor()
				{
					super(170,185);
					var _loc1_:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("当前地图掉落",150,24);
					this.addChild(_loc1_);
					_loc1_.x = 5;
					_loc1_.y = 5;
					_loc1_ = new iPanel.iCell.StringCell("<font color=\'#FFA640\'>$</font>",100,this.fontSize);
					this.addChild(_loc1_);
					_loc1_.x = this.beginX;
					_loc1_.y = this.beginY;
					_loc1_ = new iPanel.iCell.StringCell("<font color=\'#4a60d7\'>EXP",100,this.fontSize);
					this.addChild(_loc1_);
					_loc1_.x = this.beginX;
					_loc1_.y = this.beginY + this.gap;
					_loc1_ = new iPanel.iCell.StringCell("普通",100,this.fontSize);
					this.addChild(_loc1_);
					_loc1_.x = this.beginX;
					_loc1_.y = this.beginY + this.gap * 2;
					_loc1_ = new iPanel.iCell.StringCell("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>精品</font>",100,this.fontSize);
					this.addChild(_loc1_);
					_loc1_.x = this.beginX;
					_loc1_.y = this.beginY + this.gap * 3;
					_loc1_ = new iPanel.iCell.StringCell("<font color=\'" + iData.iItem.Equipment.BLUE + "\'>稀有</font>",100,this.fontSize);
					this.addChild(_loc1_);
					_loc1_.x = this.beginX;
					_loc1_.y = this.beginY + this.gap * 4;
					_loc1_ = new iPanel.iCell.StringCell("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>完美</font>",100,this.fontSize);
					this.addChild(_loc1_);
					_loc1_.x = this.beginX;
					_loc1_.y = this.beginY + this.gap * 5;
					_loc1_ = new iPanel.iCell.StringCell("<font color=\'" + iData.iItem.Equipment.ORANGE + "\'>史诗</font>",100,this.fontSize);
					this.addChild(_loc1_);
					_loc1_.x = this.beginX;
					_loc1_.y = this.beginY + this.gap * 6;
					_loc1_ = new iPanel.iCell.StringCell("<font color=\'" + iData.iItem.Equipment.PURPLE + "\'>传奇</font>",100,this.fontSize);
					this.addChild(_loc1_);
					_loc1_.x = this.beginX;
					_loc1_.y = this.beginY + this.gap * 7;
					this.money_c = new iPanel.iCell.StringCell("0",65,this.fontSize);
					this.addChild(this.money_c);
					this.money_c.x = this.beginX + this.gapX;
					this.money_c.y = this.beginY;
					this.exp_c = new iPanel.iCell.StringCell("0",65,this.fontSize);
					this.addChild(this.exp_c);
					this.exp_c.x = this.beginX + this.gapX;
					this.exp_c.y = this.beginY + this.gap * 1;
					this.basic_c = new iPanel.iCell.StringCell("0",65,this.fontSize);
					this.addChild(this.basic_c);
					this.basic_c.x = this.beginX + this.gapX;
					this.basic_c.y = this.beginY + this.gap * 2;
					this.magic_c = new iPanel.iCell.StringCell("0",65,this.fontSize);
					this.addChild(this.magic_c);
					this.magic_c.x = this.beginX + this.gapX;
					this.magic_c.y = this.beginY + this.gap * 3;
					this.rare_c = new iPanel.iCell.StringCell("0",65,this.fontSize);
					this.addChild(this.rare_c);
					this.rare_c.x = this.beginX + this.gapX;
					this.rare_c.y = this.beginY + this.gap * 4;
					this.perfect_c = new iPanel.iCell.StringCell("0",65,this.fontSize);
					this.addChild(this.perfect_c);
					this.perfect_c.x = this.beginX + this.gapX;
					this.perfect_c.y = this.beginY + this.gap * 5;
					this.epic_c = new iPanel.iCell.StringCell("0",65,this.fontSize);
					this.addChild(this.epic_c);
					this.epic_c.x = this.beginX + this.gapX;
					this.epic_c.y = this.beginY + this.gap * 6;
					this.legendary_c = new iPanel.iCell.StringCell("0",65,this.fontSize);
					this.addChild(this.legendary_c);
					this.legendary_c.x = this.beginX + this.gapX;
					this.legendary_c.y = this.beginY + this.gap * 7;
				}

				public reset():any
				{
					this.money = flash.checkInt(0);
					this.exp = flash.checkInt(0);
					this.basic = flash.checkInt(0);
					this.magic = flash.checkInt(0);
					this.rare = flash.checkInt(0);
					this.perfect = flash.checkInt(0);
					this.epic = flash.checkInt(0);
					this.legendary = flash.checkInt(0);
				}

				public update():any
				{
					this.money_c.setText(this.money + "");
					this.exp_c.setText(this.exp + "");
					this.basic_c.setText(this.basic + "");
					this.magic_c.setText(this.magic + "");
					this.rare_c.setText(this.rare + "");
					this.perfect_c.setText(this.perfect + "");
					this.epic_c.setText(this.epic + "");
					this.legendary_c.setText(this.legendary + "");
				}

			}
		}
	}
// }

// flash.extendsClass("iPanel.iScene.iPanel.LootPanel","iPanel.iCell.BasicCell")
