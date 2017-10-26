module iPanel {
	export module iCell {
		export class ButtonCell extends egret.Sprite {
			protected before:egret.Sprite;
			protected after:egret.Sprite;
			public buttonGroup:iPanel.iCell.ButtonGroup;
			protected buttonDown:boolean = false;
			public downFunction:Function;

			public constructor(param1:string,param2:string)
			{
				super();
				this.before = new (<any>egret.getDefinitionByName(param1))();
				this.after = new (<any>egret.getDefinitionByName(param2))();
				this.addChild(this.before);
				this.addChild(this.after);
				this.after.visible = false;
				// this.addEventListener(flash.MouseEvent.MOUSE_OVER,flash.bind(this.onMouseOver,this),null);
				// this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,flash.bind(this.onMouseOut,this),null);
				// this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.onMouseDown,this),null);
			}

			// public onMouseOver(param1:flash.MouseEvent)
			// {
			// 	if(<any>!this.buttonDown)
			// 	{
			// 		this.setAfter();
			// 	}
			// }

			// public onMouseOut(param1:flash.MouseEvent)
			// {
			// 	if(<any>!this.buttonDown)
			// 	{
			// 		this.setBefore();
			// 	}
			// }

			// public onMouseDown(param1:flash.MouseEvent)
			// {
			// 	if(this.buttonGroup)
			// 	{
			// 		this.buttonGroup.setDown(this);
			// 	}
			// 	else
			// 	{
			// 		this.setDown();
			// 	}
			// }

			public setAfter()
			{
				this.after.visible = true;
			}

			public setBefore()
			{
				this.after.visible = false;
				this.buttonDown = false;
			}

			public setDown()
			{
				if(<any>!this.buttonDown)
				{
					this.buttonDown = true;
					if(this.downFunction)
					{
						this.downFunction();
					}
				}
				else
				{
					this.buttonDown = false;
					this.setBefore();
				}
			}

		}
	}
}

flash.extendsClass("iPanel.iCell.ButtonCell","egret.Sprite")
