
// author: baldwin
// date: 20180604

class SuccessSettlement extends egret.Sprite {
    public constructor(stageWidth: number, stageHeight: number, useTime: number) {
        super();

        this._stageWidth = stageWidth;
        this._stageHeight = stageHeight;
        this._useTime = useTime;
        this.width = this._stageWidth;
        this.height = this._stageHeight;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
    }

    private onAddedToStage(event: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
        this.drawBackGround();
    }

    private drawBackGround(): void {
        this._backGround = Functions.createBitmapByName("bg_jpg");
        this._backGround.width = this._stageWidth;
        this._backGround.height = this._stageHeight;
        this.addChild(this._backGround);

        let x = this._stageWidth / 4;
        let y = this._stageHeight / 10;
        let w = this._stageWidth / 2;
        let h = this._stageHeight / 10;
        let ew = 50;
        let eh = 50;

        this._resultText = new egret.TextField();
        this._resultText.text = "挑战成功";
        this._resultText.textColor = GlobalVariable._GeneralFontColor;
        this._resultText.fontFamily = "微软雅黑";
        this._resultText.x = x;
        this._resultText.y = y + this._stageHeight / 15;
        this._resultText.width = w;
        this._resultText.height = h;
        this._resultText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this._resultText.textAlign = egret.HorizontalAlign.CENTER;
        this._resultText.size = 70;
        this._resultText.bold = true;
        this._resultText.strokeColor = 0xEEEE00;
        this._resultText.stroke = 2;
        this.addChild(this._resultText);

        y += this._stageHeight / 8;

        this._useTimeText = new egret.TextField();
        this._useTimeText.text = "用时: " + this._useTime.toString() + " s";
        this._useTimeText.textColor = GlobalVariable._GeneralFontColor;
        this._useTimeText.fontFamily = "微软雅黑";
        this._useTimeText.x = x;
        this._useTimeText.y = y + this._stageHeight / 30;
        this._useTimeText.width = w;
        this._useTimeText.height = h;
        this._useTimeText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this._useTimeText.textAlign = egret.HorizontalAlign.CENTER;
        this._useTimeText.size = 50;
        this._useTimeText.bold = true;
        this._useTimeText.strokeColor = 0xEEEE00;
        this._useTimeText.stroke = 2;
        this.addChild(this._useTimeText);

        y += this._stageHeight / 8;
        this._ShareButton = new egret.Shape();
        this._ShareButton.graphics.beginFill(GlobalVariable._ButtonHighlightColor, 1);
        this._ShareButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
        this._ShareButton.graphics.endFill();
        this.addChild(this._ShareButton);
        this._ShareButton.touchEnabled = true;

        this._ShareButtonText = new egret.TextField();
        this._ShareButtonText.text = "发起挑战";
        this._ShareButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._ShareButtonText.fontFamily = "楷体";
        this._ShareButtonText.x = x;
        this._ShareButtonText.y = y;
        this._ShareButtonText.width = w;
        this._ShareButtonText.height = h;
        this._ShareButtonText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this._ShareButtonText.textAlign = egret.HorizontalAlign.CENTER;
        this._ShareButtonText.size = 50;
        this._ShareButtonText.bold = true;
        this.addChild(this._ShareButtonText);


        this._ShareButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);
        this._ShareButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);


        y += this._stageHeight / 8;
        this._HomeButton = new egret.Shape();
        this._HomeButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
        this._HomeButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
        this._HomeButton.graphics.endFill();
        this.addChild(this._HomeButton);
        this._HomeButton.touchEnabled = true;

        this._HomeButtonText = new egret.TextField();
        this._HomeButtonText.text = "主界面";
        this._HomeButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._HomeButtonText.fontFamily = "楷体";
        this._HomeButtonText.x = x;
        this._HomeButtonText.y = y;
        this._HomeButtonText.width = w;
        this._HomeButtonText.height = h;
        this._HomeButtonText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this._HomeButtonText.textAlign = egret.HorizontalAlign.CENTER;
        this._HomeButtonText.size = 50;
        this._HomeButtonText.bold = true;
        this.addChild(this._HomeButtonText);


        this._HomeButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);
        this._HomeButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);

        y += this._stageHeight / 8;
        this._ReplayButton = new egret.Shape();
        this._ReplayButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
        this._ReplayButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
        this._ReplayButton.graphics.endFill();
        this.addChild(this._ReplayButton);
        this._ReplayButton.touchEnabled = true;

        this._ReplayButtonText = new egret.TextField();
        this._ReplayButtonText.text = "重玩";
        this._ReplayButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._ReplayButtonText.fontFamily = "楷体";
        this._ReplayButtonText.x = x;
        this._ReplayButtonText.y = y;
        this._ReplayButtonText.width = w;
        this._ReplayButtonText.height = h;
        this._ReplayButtonText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this._ReplayButtonText.textAlign = egret.HorizontalAlign.CENTER;
        this._ReplayButtonText.size = 50;
        this._ReplayButtonText.bold = true;
        this.addChild(this._ReplayButtonText);


        this._ReplayButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);
        this._ReplayButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);

        y += this._stageHeight / 8;
        this._NextPassButton = new egret.Shape();
        this._NextPassButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
        this._NextPassButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
        this._NextPassButton.graphics.endFill();
        this.addChild(this._NextPassButton);
        this._NextPassButton.touchEnabled = true;

        this._NextPassButtonText = new egret.TextField();
        this._NextPassButtonText.text = "下一关";
        this._NextPassButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._NextPassButtonText.fontFamily = "楷体";
        this._NextPassButtonText.x = x;
        this._NextPassButtonText.y = y;
        this._NextPassButtonText.width = w;
        this._NextPassButtonText.height = h;
        this._NextPassButtonText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this._NextPassButtonText.textAlign = egret.HorizontalAlign.CENTER;
        this._NextPassButtonText.size = 50;
        this._NextPassButtonText.bold = true;
        this.addChild(this._NextPassButtonText);


        this._NextPassButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);
        this._NextPassButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);

    }

    private ButtonTouchBegin(event: egret.TouchEvent) {
        console.log("ButtonTouchBegin...")
    }

    private ButtonClick(event: egret.TouchEvent) {
        console.log("ButtonClick...")
        switch(event.target) {
            case this._HomeButton: {
                let param = new PageHandleParameters;
                param._success2startpage = true;
                PageManager.GetInstance().Handle(PageHandleType.SETTLEMENT_TO_START_PAGE, param)
                break;
            }
        }
    }

    private _stageWidth: number;
    private _stageHeight: number;
    private _useTime: number;

    private _backGround: egret.Bitmap;

    private _resultText: egret.TextField;

    private _staticUseTimeText: egret.TextField;
    private _useTimeText: egret.TextField;

    private _ShareButton: egret.Shape;
    private _ShareButtonText: egret.TextField;

    private _HomeButton: egret.Shape;
    private _HomeButtonText: egret.TextField;

    private _ReplayButton: egret.Shape;
    private _ReplayButtonText: egret.TextField;

    private _NextPassButton: egret.Shape;
    private _NextPassButtonText: egret.TextField;
}