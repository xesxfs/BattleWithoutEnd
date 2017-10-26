// module com {
// 	export module spikything {
// 		export module utils {
// 			export class MouseWheelTrap extends egret.HashObject {
// 				public static JAVASCRIPT:string;
// 				public static JS_METHOD:string;
// 				public static _browserScrollEnabled:boolean;
// 				public static _mouseWheelTrapped:boolean;
// 				private INSTANTIATION_ERROR:string = "Don\'t instantiate com.spikything.utils.MouseWheelTrap directly. Just call MouseWheelTrap.setup(stage);";
// 				public constructor()
// 				{
// 					super();
// 					super();
// 					throw new flash.IllegalOperationError(this.INSTANTIATION_ERROR).message;
// 				}
// 				public static setup(param1:egret.Stage)
// 				{
// 					var stage:egret.Stage = param1;
// 					stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,function (param1:any = null)
// 					{
// 						com.spikything.utils.MouseWheelTrap.allowBrowserScroll(false);
// 					},null);
// 					stage.addEventListener(flash.Event.MOUSE_LEAVE,function (param1:any = null)
// 					{
// 						com.spikything.utils.MouseWheelTrap.allowBrowserScroll(true);
// 					},null);
// 				}
// 				private static allowBrowserScroll(param1:boolean)
// 				{
// 					com.spikything.utils.MouseWheelTrap.createMouseWheelTrap();
// 					if(param1 == com.spikything.utils.MouseWheelTrap._browserScrollEnabled)
// 					{
// 						return ;
// 					}
// 					com.spikything.utils.MouseWheelTrap._browserScrollEnabled = param1;
// 					if(flash.ExternalInterface.available)
// 					{
// 						flash.ExternalInterface.call(com.spikything.utils.MouseWheelTrap.JS_METHOD,com.spikything.utils.MouseWheelTrap._browserScrollEnabled);
// 						return ;
// 					}
// 				}
// 				private static createMouseWheelTrap()
// 				{
// 					if(com.spikything.utils.MouseWheelTrap._mouseWheelTrapped)
// 					{
// 						return ;
// 					}
// 					com.spikything.utils.MouseWheelTrap._mouseWheelTrapped = true;
// 					if(flash.ExternalInterface.available)
// 					{
// 						flash.ExternalInterface.call("eval",com.spikything.utils.MouseWheelTrap.JAVASCRIPT);
// 						return ;
// 					}
// 				}
// 			}
// 		}
// 	}
// }
// com.spikything.utils.MouseWheelTrap.JAVASCRIPT = "var browserScrolling;function allowBrowserScroll(value){browserScrolling=value;}function handle(delta){if(!browserScrolling){return false;}return true;}function wheel(event){var delta=0;if(!event){event=window.event;}if(event.wheelDelta){delta=event.wheelDelta/120;if(window.opera){delta=-delta;}}else if(event.detail){delta=-event.detail/3;}if(delta){handle(delta);}if(!browserScrolling){if(event.preventDefault){event.preventDefault();}event.returnValue=false;}}if(window.addEventListener){window.addEventListener(\'DOMMouseScroll\',wheel,false);}window.onmousewheel=document.onmousewheel=wheel;allowBrowserScroll(true);";
// com.spikything.utils.MouseWheelTrap.JS_METHOD = "allowBrowserScroll";
// com.spikything.utils.MouseWheelTrap._browserScrollEnabled = true;
// com.spikything.utils.MouseWheelTrap._mouseWheelTrapped = false;
//# sourceMappingURL=MouseWheelTrap.js.map