module tool {
	export class MyEvent extends egret.Event {
		public static Change:string;
		public static Update:string;
		public static MyScroll:string;

		public constructor(param1:string)
		{
			super(param1);
		}

	}
}

tool.MyEvent.Change = "change";
tool.MyEvent.Update = "myupdate";
tool.MyEvent.MyScroll = "myScroll";
flash.extendsClass("tool.MyEvent","egret.Event")
