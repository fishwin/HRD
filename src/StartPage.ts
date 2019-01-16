
// 游戏开始界面
// author: Baldwin
// date: 20180601

class StartPage extends egret.Sprite {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
    }

    private onAddedToStage(event: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
        this._stateWidth = GlobalVariable._stageWidth;
        this._stageHeight = GlobalVariable._stageHeight;
        this.drawBackGround();
    }


    private drawBackGround(): void {
        this._backGround = Functions.createBitmapByName("bg_jpg");
        this._backGround.width = this._stateWidth;
        this._backGround.height = this._stageHeight;
        this.addChild(this._backGround);


        this._appNameText = new egret.TextField();
        this._appNameText.width = this._stateWidth * 9 / 11;
        this._appNameText.x = this._stateWidth / 11;
        this._appNameText.y = this._stageHeight / 6;
        this._appNameText.textColor = GlobalVariable._GeneralFontColor;
        this._appNameText.text = "决战华容道";
        this._appNameText.size = 100;
        this._appNameText.bold = true;
        this._appNameText.italic = true;
        this._appNameText.fontFamily = "微软雅黑";
        this._appNameText.textAlign = egret.HorizontalAlign.CENTER;
        this._appNameText.strokeColor = 0xEEEE00;
        this._appNameText.stroke = 2;
        // this._appNameText.textFlow = <Array<egret.ITextElement>>[
        //     { text: "决", style: { "textColor": 0xCD2626 } }
        //     , { text: "战", style: { "textColor": 0x8B6914 } }
        //     , { text: "华", style: { "textColor": 0x8B008B } }
        //     , { text: "容", style: { "textColor": 0x4B0082 } }
        //     , { text: "道", style: { "textColor": 0x218868 } }
        // ];
        this.addChild(this._appNameText);

        let x = this._stateWidth / 4;
        let y = this._appNameText.y + this._stageHeight / 6;
        let w = this._stateWidth / 2;
        let h = this._stageHeight / 10;
        let ew = 50;
        let eh = 50;

        console.log("111 this._stateWidth, this._stageHeight, x, y, w, h, ew, eh : ", this._stateWidth, this._stageHeight, x, y, w, h, ew, eh);

        this._threeButton = new egret.Shape();
        this._threeButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
        this._threeButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
        this._threeButton.graphics.endFill();
        this.addChild(this._threeButton);
        this._threeButton.touchEnabled = true;

        this._threeButtonText = new egret.TextField();
        this._threeButtonText.text = "3 X 3";
        this._threeButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._threeButtonText.fontFamily = "楷体";
        this._threeButtonText.x = x + w / 4;
        this._threeButtonText.y = y + h / 4;
        this._threeButtonText.size = 70;
        this._threeButtonText.bold = true;
        this.addChild(this._threeButtonText);

        y += this._stageHeight / 8
        this._fourButton = new egret.Shape();
        this._fourButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
        this._fourButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
        this._fourButton.graphics.endFill();
        this.addChild(this._fourButton);
        this._fourButton.touchEnabled = true;

        this._fourButtonText = new egret.TextField();
        this._fourButtonText.text = "4 X 4";
        this._fourButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._fourButtonText.fontFamily = "楷体";
        this._fourButtonText.x = x + w / 4;
        this._fourButtonText.y = y + h / 4;
        this._fourButtonText.size = 70;
        this._fourButtonText.bold = true;
        this.addChild(this._fourButtonText);

        y += this._stageHeight / 8
        this._fiveButton = new egret.Shape();
        this._fiveButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
        this._fiveButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
        this._fiveButton.graphics.endFill();
        this.addChild(this._fiveButton);
        this._fiveButton.touchEnabled = true;

        this._fiveButtonText = new egret.TextField();
        this._fiveButtonText.text = "5 X 5";
        this._fiveButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._fiveButtonText.fontFamily = "楷体";
        this._fiveButtonText.x = x + w / 4;
        this._fiveButtonText.y = y + h / 4;
        this._fiveButtonText.size = 70;
        this._fiveButtonText.bold = true;
        this.addChild(this._fiveButtonText);

        y += this._stageHeight / 8
        this._ranklistButton = new egret.Shape();
        this._ranklistButton.graphics.beginFill(this._ranklistButtonColor, 1);
        this._ranklistButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
        this._ranklistButton.graphics.endFill();
        this.addChild(this._ranklistButton);
        this._ranklistButton.touchEnabled = true;

        this._ranklistButtonText = new egret.TextField();
        this._ranklistButtonText.text = "排行榜";
        this._ranklistButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._ranklistButtonText.fontFamily = "楷体";
        this._ranklistButtonText.x = x + w / 5;
        this._ranklistButtonText.y = y + h / 4;
        this._ranklistButtonText.size = 60;
        this._ranklistButtonText.bold = true;
        this.addChild(this._ranklistButtonText);

        this._threeButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);
        this._fourButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);
        this._fiveButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);
        this._ranklistButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);

        this._threeButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);
        this._fourButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);
        this._fiveButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);
        this._ranklistButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);

    }

    private ThreeButtonClick(): void {
        console.log("three button click")
    }

    private ButtonTouchBegin(event: egret.TouchEvent) {
        let x = this._stateWidth / 4;
        let y = this._appNameText.y + this._stageHeight / 6;
        let w = this._stateWidth / 2;
        let h = this._stageHeight / 10;
        let ew = 50;
        let eh = 50;
        let fourButtonY = y + this._stageHeight / 8
        let fiveButtonY = y + this._stageHeight * 2 / 8
        let ranklistButtonY = y + this._stageHeight * 3 / 8

        switch (event.target) {
            case this._threeButton: {
                this._threeButton.graphics.clear();
                this._threeButton.graphics.beginFill(GlobalVariable._ButtonColor, 0.5);
                this._threeButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
                this._threeButton.graphics.endFill();
                break;
            }
            case this._fourButton: {
                this._fourButton.graphics.clear()
                this._fourButton.graphics.beginFill(GlobalVariable._ButtonColor, 0.5);
                this._fourButton.graphics.drawRoundRect(x, fourButtonY, w, h, ew, eh)
                this._fourButton.graphics.endFill();
                break;
            }
            case this._fiveButton: {
                this._fiveButton.graphics.clear()
                this._fiveButton.graphics.beginFill(GlobalVariable._ButtonColor, 0.5);
                this._fiveButton.graphics.drawRoundRect(x, fiveButtonY, w, h, ew, eh)
                this._fiveButton.graphics.endFill();
                break;
            }
            case this._ranklistButton: {
                this._ranklistButton.graphics.clear();
                this._ranklistButton.graphics.beginFill(this._ranklistButtonColor, 0.5);
                this._ranklistButton.graphics.drawRoundRect(x, ranklistButtonY, w, h, ew, eh)
                this._ranklistButton.graphics.endFill();
                console.log("ranlist button click begin");
                break;
            }
        }
    }

    private ButtonClick(event: egret.TouchEvent) {
        let x = this._stateWidth / 4;
        let y = this._appNameText.y + this._stageHeight / 6;
        let w = this._stateWidth / 2;
        let h = this._stageHeight / 10;
        let ew = 50;
        let eh = 50;
        let fourButtonY = y + this._stageHeight / 8
        let fiveButtonY = y + this._stageHeight * 2 / 8
        let ranklistButtonY = y + this._stageHeight * 3 / 8

        let param = new PageHandleParameters;
        param.stageWidth = this._stateWidth;
        param.stageHeight = this._stageHeight;

        switch (event.target) {
            case this._threeButton: {
                this._threeButton.graphics.clear();
                this._threeButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
                this._threeButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
                this._threeButton.graphics.endFill();

                console.log("_threeButton button click");

                param.level = GameLevel.THREE
                param._totalTime = GlobalVariable._threeLevelTotalTime;
                PageManager.GetInstance().Handle(PageHandleType.START_GAME_TO_MAIN_SECENE, param)

                break;
            }
            case this._fourButton: {
                this._fourButton.graphics.clear();
                this._fourButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
                this._fourButton.graphics.drawRoundRect(x, fourButtonY, w, h, ew, eh)
                this._fourButton.graphics.endFill();

                console.log("_fourButton button click");

                param.level = GameLevel.FOUR
                param._totalTime = GlobalVariable._fourLevelTotalTime;
                PageManager.GetInstance().Handle(PageHandleType.START_GAME_TO_MAIN_SECENE, param)
                break;
            }
            case this._fiveButton: {
                this._fiveButton.graphics.clear();
                this._fiveButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
                this._fiveButton.graphics.drawRoundRect(x, fiveButtonY, w, h, ew, eh)
                this._fiveButton.graphics.endFill();

                console.log("_fiveButton button click");

                param.level = GameLevel.FIVE
                param._totalTime = GlobalVariable._fiveLevelTotalTime;
                PageManager.GetInstance().Handle(PageHandleType.START_GAME_TO_MAIN_SECENE, param)
                break;
            }
            case this._ranklistButton: {
                this._ranklistButton.graphics.clear();
                this._ranklistButton.graphics.beginFill(this._ranklistButtonColor, 1);
                this._ranklistButton.graphics.drawRoundRect(x, ranklistButtonY, w, h, ew, eh)
                this._ranklistButton.graphics.endFill();

                console.log("ranlist button click");

                param.level = GameLevel.THREE
                PageManager.GetInstance().Handle(PageHandleType.START_GAME_TO_MAIN_SECENE, param)
                break;
            }
        }
    }

    private _stateWidth: number;
    private _stageHeight: number;

    private _backGround: egret.Bitmap;
    private _appNameText: egret.TextField;

    private _threeButton: egret.Shape;
    private _threeButtonText: egret.TextField;

    private _fourButton: egret.Shape;
    private _fourButtonText: egret.TextField;

    private _fiveButton: egret.Shape;
    private _fiveButtonText: egret.TextField;

    private _ranklistButton: egret.Shape;
    private _ranklistButtonText: egret.TextField;
    private _ranklistButtonColor: number = 0xA020F0;
}