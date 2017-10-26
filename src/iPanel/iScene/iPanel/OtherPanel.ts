module iPanel {
	export module iScene {
		export module iPanel {
			export class OtherPanel extends egret.Sprite {
				private window:iPanel.iScene.iPanel.iWindow.Window;
				private array:Array<any>;
				public itemWindow:iPanel.iScene.iPanel.iWindow.ItemWindow;
				public equipWindow:iPanel.iScene.iPanel.iWindow.EquipWindow;
				public petWindow:iPanel.iScene.iPanel.iWindow.PetWindow;
				public skillWindow:iPanel.iScene.iPanel.iWindow.SkillWindow;
				public titleWindow:iPanel.iScene.iPanel.iWindow.TitleWindow;
				public systemWindow:iPanel.iScene.iPanel.iWindow.SystemWindow;
				public otherWindow:iPanel.iScene.iPanel.iWindow.OtherWindow;

				public constructor()
				{
					super();
					var bSprite:egret.Sprite = <any>null;
					var count:number = flash.checkInt(0);
					var max:number = flash.checkInt(0);
					var b:number = flash.checkInt(0);
					var left:iPanel.iCell.ButtonCell = <any>null;
					var leftDown:Function = <any>null;
					var right:iPanel.iCell.ButtonCell = <any>null;
					var rightDown:Function = <any>null;
					var onEnterFrame:Function = <any>null;
					var cell:iPanel.iCell.ButtonCell = <any>null;
					leftDown = function ():any
					{
						right.visible = true;
						this["setBefore"]();
						count++;
						b = flash.checkInt(count * 40);
						bSprite.addEventListener(egret.Event.ENTER_FRAME,onEnterFrame,null);
						if(count == 0)
						{
							left.visible = false;
						}
					};
					rightDown = function ():any
					{
						left.visible = true;
						this["setBefore"]();
						count--;
						b = flash.checkInt(count * 40);
						bSprite.addEventListener(egret.Event.ENTER_FRAME,onEnterFrame,null);
						if(max + count == 5)
						{
							right.visible = false;
						}
					};
					onEnterFrame = function (param1:egret.Event):any
					{
						bSprite.x = bSprite.x + (b - bSprite.x) * 0.5;
						if(Math.abs(bSprite.x - b) < 1)
						{
							bSprite.x = b;
							bSprite.removeEventListener(egret.Event.ENTER_FRAME,onEnterFrame,null);
						}
					};
					this.array = new Array();
					bSprite = new egret.Sprite();
					this.addChild(bSprite);
					var cover:egret.Sprite = new egret.Sprite();
					cover.graphics.beginFill(0,1);
					cover.graphics.drawRect(0,-20,200,60);
					cover.graphics.endFill();
					this.addChild(cover);
					bSprite.mask = cover;
					var buttonGroup:iPanel.iCell.ButtonGroup = new iPanel.iCell.ButtonGroup();
					var list:Array<any> = ["item","equip","pet","skill","title","system","info"];
					var list2:Array<any> = ["背包","装备","宠物","技能","称号","设置","其他"];
					var i:number = flash.checkInt(0);
					while(i < list.length)
					{
						cell = new iPanel.iCell.MenuButton("before_" + list[i],"after_" + list[i],list2[i]);
						cell.x = i * 40;
						bSprite.addChild(cell);
						buttonGroup.addButton(cell);
						this.array.push(cell);
						i++;
					}
					count = flash.checkInt(0);
					max = flash.checkInt(list.length);
					left = new iPanel.iCell.MenuButton("before_arrow_left","after_arrow_left","向左");
					this.addChild(left);
					left.visible = false;
					left.downFunction = leftDown;
					right = new iPanel.iCell.MenuButton("before_arrow_right","after_arrow_right","向右");
					this.addChild(right);
					right.x = 160;
					right.downFunction = rightDown;
					this.init();
					this.setFunction();
				}

				private init():any
				{
					this.itemWindow = new iPanel.iScene.iPanel.iWindow.ItemWindow();
					this.equipWindow = new iPanel.iScene.iPanel.iWindow.EquipWindow();
					this.petWindow = new iPanel.iScene.iPanel.iWindow.PetWindow();
					this.skillWindow = new iPanel.iScene.iPanel.iWindow.SkillWindow();
					this.titleWindow = new iPanel.iScene.iPanel.iWindow.TitleWindow();
					this.systemWindow = new iPanel.iScene.iPanel.iWindow.SystemWindow();
					this.otherWindow = new iPanel.iScene.iPanel.iWindow.OtherWindow();
				}

				private setFunction()
				{
					var _self__:any = this;
					var _this:any = undefined;
					var addWindow0:Function = <any>null;
					var addWindow1:Function = <any>null;
					var addWindow2:Function = <any>null;
					var addWindow3:Function = <any>null;
					var addWindow4:Function = <any>null;
					var addWindow5:Function = <any>null;
					var addWindow6:Function = <any>null;
					addWindow0 = function ():any
					{
						removeWindow();
						_this.window = _self__.itemWindow;
						addWindow();
					};
					addWindow1 = function ():any
					{
						removeWindow();
						_this.window = _self__.equipWindow;
						addWindow();
					};
					addWindow2 = function ():any
					{
						removeWindow();
						_this.window = _self__.petWindow;
						addWindow();
					};
					addWindow3 = function ():any
					{
						removeWindow();
						_this.window = _self__.skillWindow;
						addWindow();
					};
					addWindow4 = function ():any
					{
						removeWindow();
						_this.window = _self__.titleWindow;
						addWindow();
					};
					addWindow5 = function ():any
					{
						removeWindow();
						_this.window = _self__.systemWindow;
						addWindow();
					};
					addWindow6 = function ():any
					{
						removeWindow();
						_this.window = _self__.otherWindow;
						addWindow();
					};
					var removeWindow:Function = <any>function ():any
					{
						if(_this.window)
						{
							_this.removeChild(_this.window);
						}
					};
					var addWindow:Function = <any>function ():any
					{
						_this.addChild(_this.window);
						_this.window.y = 40;
					};
					_this = this;
					this.array[0].downFunction = addWindow0;
					this.array[1].downFunction = addWindow1;
					this.array[2].downFunction = addWindow2;
					this.array[3].downFunction = addWindow3;
					this.array[4].downFunction = addWindow4;
					this.array[5].downFunction = addWindow5;
					this.array[6].downFunction = addWindow6;
				}

			}
		}
	}
}

flash.extendsClass("iPanel.iScene.iPanel.OtherPanel","egret.Sprite")
