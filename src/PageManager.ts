
// author: baldwin
// date: 20180602


class PageManager {
    public constructor() {
        this._startPage = new StartPage();
    }

    public SetMain(main: Main) {
        this._main = main;
    }

    public static GetInstance(): PageManager {
        if (PageManager._obj == null) {
            PageManager._obj = new PageManager()
        }
        return PageManager._obj;
    }

    public Handle(t: PageHandleType, param: PageHandleParameters): void {
        switch (t) {
            case PageHandleType.START_GAME: {
                this._main.addChild(this._startPage)
                break;
            }
            case PageHandleType.START_GAME_TO_MAIN_SECENE: {
                if (param == null || param == undefined) {
                    return
                }
                this._main.removeChild(this._startPage)
                this._mainSecene = new MainScene(param.stageWidth, param.stageHeight, param.level, param._totalTime);
                this._main.addChild(this._mainSecene)
                break;
            }
            case PageHandleType.MAIN_SECENE_TO_START_PAGE: {
                this._main.removeChild(this._mainSecene)
                this._main.addChild(this._startPage)
                break;
            }
            case PageHandleType.MAIN_SECENE_TO_SUCCESS_SETTLEMENT: {
                this._main.removeChild(this._mainSecene)
                this._successSettlement = new SuccessSettlement(param.stageWidth, param.stageHeight, param._useTime);
                this._main.addChild(this._successSettlement)
                break;
            }
            case PageHandleType.MAIN_SECENE_TO_FAIL_SETTLEMENT: {
                this._main.removeChild(this._mainSecene)
                this._failSettlement = new FailSettlement(param.stageWidth, param.stageHeight);
                this._main.addChild(this._failSettlement)
                break;
            }
            case PageHandleType.SETTLEMENT_TO_START_PAGE: {
                if (param._success2startpage) {
                    this._main.removeChild(this._successSettlement)
                } else {
                    this._main.removeChild(this._failSettlement)
                }

                this._main.addChild(this._startPage)
                break;
            }
        }
    }

    private _startPage: StartPage;
    private _mainSecene: MainScene;
    private _successSettlement: SuccessSettlement;
    private _failSettlement: FailSettlement;
    private _main: Main;

    private static _obj: PageManager = null;
}

class PageHandleParameters {
    public stageWidth: number;
    public stageHeight: number;
    public level: GameLevel;
    public _totalTime: number;
    public _useTime: number;
    public _success2startpage: boolean = true;
}

enum PageHandleType {
    START_GAME,
    START_GAME_TO_MAIN_SECENE,
    MAIN_SECENE_TO_START_PAGE,
    MAIN_SECENE_TO_SUCCESS_SETTLEMENT,
    MAIN_SECENE_TO_FAIL_SETTLEMENT,
    SETTLEMENT_TO_START_PAGE,
};