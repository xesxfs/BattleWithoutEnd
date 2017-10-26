module iPanel {
	export class InnerPanel extends egret.Sprite {

		public constructor() {
			super();
		}

		public set positionY(param1: number) {

			this.y = param1;
		}

		public get positionY(): number {
			return this.y;
		}

	}
}

// flash.extendsClass("iPanel.InnerPanel","egret.Sprite")
