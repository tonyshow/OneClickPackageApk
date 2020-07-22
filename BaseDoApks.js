var async = require('async');
class BaseDoApks
{
    constructor()
    {
        this.cfg = null;
        this.needReplaceParams = null;
        this.needReplaceFiles = null;
    };
    // 替换文件参数
    replaceFile(callBack)
    {
        console.log("需要替换参数:" + JSON.stringify(this.needReplaceParams))
        console.log("需要替换文件:" + JSON.stringify(this.needReplaceFiles))
        callBack(null);
    }
    doApk(callBack)
    {
        console.log("制作apk包")
        callBack(null);
    }
    do()
    {
        async.waterfall([this.replaceFile.bind(this), this.doApk.bind(this)], (err, resule) =>
        {
            if (err)
            {
                console.error("异步终止:" + err)
                return;
            }
            console.log("全部执行完成")

        })
    }
}
module.exports = BaseDoApks;