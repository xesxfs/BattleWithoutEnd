module iPanel {
	export module iScene {
		export class SaveScene extends egret.Sprite {
			public static slot:string;
			private Gap:number = 130;
			private startX:number = 100;
			private startY:number = 50;
			private sharedObject:flash.SharedObject;

			public constructor()
			{
				super();
				this.drawSave(1);
				this.drawSave(2);
				this.drawSave(3);
				this.drawSave(4);
			}

			private drawManualButton():any
			{
				var _this:any = undefined;
				var manualDown:Function = <any>null;
				manualDown = function ():any
				{
					var file:flash.net.FileReference = <any>null;
					var selected:Function = <any>null;
					var on_loaded:Function = <any>null;
					selected = function (param1:egret.Event)
					{
						file["load"]();
						file["addEventListener"](egret.Event.COMPLETE,on_loaded);
					};
					on_loaded = function (param1:egret.Event)
					{
						var next:Function = <any>null;
						var e:egret.Event = param1;
						next = function ():any
						{
							var _loc1_:iPanel.iScene.MainScene = new iPanel.iScene.MainScene();
							iGlobal.Global.mainScene = _loc1_;
							iGlobal.Global.stage.addChild(_loc1_);
							tool.Effect.fadeIn(_loc1_);
						};
						iGlobal.Player.manualLoad(e.target["data"]);
						tool.Effect.fadeOut(_this,10,next);
					};
					file = new FileReference();
					file["browse"]();
					file["addEventListener"](flash.Event.SELECT,selected);
					this["setBefore"]();
				};
				var manualLoad:iPanel.iScene.FlickerButton = new iPanel.iScene.FlickerButton("Manual Load",100,50,20);
				this.addChild(manualLoad);
				manualLoad.x = 680;
				manualLoad.y = -5;
				manualLoad.downFunction = manualDown;
				_this = this;
			}

			private drawSave(param1:number):any
			{
				param1 = flash.checkInt(param1);
				this.sharedObject = flash.SharedObject.getLocal("slot" + param1);
				if(this.sharedObject.data["userName"])
				{
					this.drawOld(param1);
				}
				else
				{
					this.drawNew(param1);
					this.sharedObject.clear();
				}
			}

			private drawNew(param1:number):any
			{
				param1 = flash.checkInt(param1);
				var text:flash.TextField = <any>null;
				var start:iPanel.iScene.FlickerButton = <any>null;
				var onIn:Function = <any>null;
				var _this:any = undefined;
				var down:Function = <any>null;
				var num:number = flash.checkInt(param1);
				onIn = function (param1:egret.Event):any
				{
					var _loc2_:flash.TextField = flash.As3As(param1.target,flash.TextField);
					if(_loc2_.text != "")
					{
						start.visible = true;
					}
					else
					{
						start.visible = false;
					}
				};
				down = function ():any
				{
					if(iPanel.iScene.SaveScene.slot == "")
					{
						var next:Function = <any>function ():any
						{
							var _loc1_:iPanel.iScene.RaceScene = new iPanel.iScene.RaceScene();
							iGlobal.Global.stage.addChild(_loc1_);
							tool.Effect.fadeIn(_loc1_);
						};
						iPanel.iScene.SaveScene.slot = "slot" + num;
						iGlobal.Player.playerName = text.text;
						tool.Effect.fadeOut(_this,10,next);
						_this.parent.removeChild(_this);
					}
				};
				var sp:egret.MovieClip = new egret.MovieClip();
				sp.graphics.lineStyle(2,7631988,1);
				sp.graphics.drawRect(0,0,600,100);
				this.addChild(sp);
				sp.x = this.startX;
				sp.y = this.startY + (num - 1) * this.Gap;
				sp["num"] = num;
				var name:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("角色",150,32);
				sp.addChild(name);
				name.x = 20;
				name.y = 10;
				text = iGlobal.Global.getTextField();
				text["selectable"] = true;
				text.type = egret.TextFieldType.INPUT;
				text.border = 2;
				text.borderColor = flash.checkUint(7631988);
				sp.addChild(text);
				text.x = 100;
				text.y = 10;
				start = new iPanel.iScene.FlickerButton("新建",100,50);
				sp.addChild(start);
				start.x = 480;
				start.y = 5;
				start.visible = false;
				text.addEventListener(egret.Event.CHANGE,onIn,null);
				start.downFunction = down;
				_this = this;
			}

			private drawOld(param1:number):any
			{
				param1 = flash.checkInt(param1);
				var _self__:any = this;
				var sp:egret.MovieClip = <any>null;
				var _this:any = undefined;
				var down:Function = <any>null;
				var se:iPanel.iScene.iPanel.ComfirmScene = <any>null;
				var deDown:Function = <any>null;
				var deleDown:Function = <any>null;
				var num:number = flash.checkInt(param1);
				down = function ():any
				{
					if(iPanel.iScene.SaveScene.slot == "")
					{
						var next:Function = <any>function ():any
						{
							var _loc1_:iPanel.iScene.MainScene = new iPanel.iScene.MainScene();
							iGlobal.Global.mainScene = _loc1_;
							iGlobal.Global.stage.addChild(_loc1_);
							tool.Effect.fadeIn(_loc1_);
						};
						iPanel.iScene.SaveScene.slot = "slot" + num;
						iGlobal.Player.load();
						tool.Effect.fadeOut(_this,10,next);
					}
					this["setBefore"]();
				};
				deDown = function ():any
				{
					_this.addChild(se);
					se.x = 250;
					se.y = 150;
					this["setBefore"]();
				};
				deleDown = function ():any
				{
					_self__.sharedObject = flash.SharedObject.getLocal("slot" + num);
					_self__.sharedObject.clear();
					_this.removeChild(sp);
					_this.drawSave(num);
					_this.removeChild(se);
				};
				sp = new egret.MovieClip();
				sp.graphics.lineStyle(2,7631988,1);
				sp.graphics.drawRect(0,0,600,100);
				this.addChild(sp);
				sp.x = this.startX;
				sp.y = this.startY + (num - 1) * this.Gap;
				sp["num"] = num;
				var name:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("角色",150,32);
				sp.addChild(name);
				name.x = 20;
				name.y = 10;
				var text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell(this.sharedObject.data["userName"],300,32);
				sp.addChild(text);
				text.x = 100;
				text.y = 10;
				var time:iPanel.iCell.StringCell = new iPanel.iCell.StringCell(this.sharedObject.data["time"],200,32);
				sp.addChild(time);
				time.x = 200;
				time.y = 50;
				var load:iPanel.iScene.FlickerButton = new iPanel.iScene.FlickerButton("读取",100,40);
				sp.addChild(load);
				load.x = 480;
				load.y = 5;
				load.downFunction = down;
				_this = this;
				var dele:iPanel.iScene.FlickerButton = new iPanel.iScene.FlickerButton("删除",50,20,16);
				sp.addChild(dele);
				dele.x = 540;
				dele.y = 65;
				dele.downFunction = deDown;
				se = new iPanel.iScene.iPanel.ComfirmScene("确定删除?",deleDown);
				_this = this;
			}

		}
	}
}

iPanel.iScene.SaveScene.slot = "";
flash.extendsClass("iPanel.iScene.SaveScene","egret.Sprite")
