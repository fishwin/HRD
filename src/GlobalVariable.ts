

class GlobalVariable {
    public static _DEBUG: boolean = false;  // 调式开关
    public static _WITHAD: boolean = false; // 广告开关
    public static _stageWidth: number = 640; //egret.MainContext.instance.stage.stageWidth ; // 舞台宽度
    public static _stageHeight: number = 1136; //egret.MainContext.instance.stage.stageHeight; // 舞台高度
    public static _GeneralFontColor: number = 0xA0522D;
    public static _ButtonColor: number = 0xA0522D;
    public static _ButtonHighlightColor: number = 0xCD00CD;
    public static _ButtonFontColor: number = 0xffffff;
    public static _threeLevelTotalTime = 60;
    public static _fourLevelTotalTime = 120;
    public static _fiveLevelTotalTime = 180;
}

enum GameLevel { THREE, FOUR, FIVE };