module iPanel {
	export module iScene {
	
			export module iAllInfo {
				export class AllInfoInnerPanel extends iPanel.InnerPanel {
					public list:Array<iPanel.iCell.StringCell>;
					public listSprite:egret.Sprite;
					private bg:egret.Sprite;

					public constructor()
					{
						super();
						this.init();
					}

					private init():any
					{
						this.list = new Array<iPanel.iCell.StringCell>();
						this.listSprite = new egret.Sprite();
						this.bg = new egret.Sprite();
						this.addChild(this.bg);
						this.addChild(this.listSprite);
					}

					public addText(param1:string):any
					{
						var _loc2_:iPanel.iCell.StringCell = new iPanel.iCell.StringCell(this.getTime() + param1,385,16);
						if(this.list.length > 100)
						{
							this.listSprite.removeChild(this.list.shift());
						}
						this.list.push(_loc2_);
						this.listSprite.addChild(_loc2_);
						this.tidy();
					}

					private tidy():any
					{
						var _loc1_:number = flash.checkInt(this.list.length);
						var _loc2_:number = flash.checkInt(0);
						while(_loc2_ < this.list.length)
						{
							this.list[_loc2_].y = _loc2_ * 20;
							this.list[_loc2_].x = 10;
							_loc2_++;
						}
						if(this.height > 360 && this.list.length < 100)
						{
							this.y = this.y - 20;
						}
						this.drawBg();
					}

					private getTime():string
					{
						var _loc1_:flash.As3Date = new flash.As3Date();
						var _loc2_:any = <any>"[" + _loc1_.getHours() + ":" + _loc1_.getMinutes() + ":" + _loc1_.getSeconds() + "]";
						return _loc2_;
					}

					private drawBg():any
					{
						this.bg.graphics.clear();
						this.bg.graphics.beginFill(16777215,0);
						this.bg.graphics.drawRect(0,0,400,this.height);
						this.bg.graphics.endFill();
					}

				}
			
		}
	}
}

flash.extendsClass("iPanel.iScene.iPanel.iAllInfo.AllInfoInnerPanel","iPanel.InnerPanel")
