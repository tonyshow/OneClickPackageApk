var _ = require("underscore");
class BaseConfig
{
    // 应用包名
    getAppPackageName()
    {
        //子类自己实现
        return "com.xx.xx";
    };
    getAppName()
    {
        //子类自己实现
        return "你的游戏名字"
    };
    // 需要替换的文件
    getNeedReplaceFiles()
    {
        return ["base/base.file"];
    };
    //需要替换的参数
    getNeedParmsList()
    {
        return [
        {
            key: "-appPackageName-",
            value: this.getAppPackageName()
        }];
    };
    // 合并需要替换的参数 将a覆盖到b
    mergeReplaceParams(a, b)
    {
        var list = {};
        _.each(b, (info) =>
        {
            list[info.key] = info.value
        });
        _.each(a, (info) =>
        {
            list[info.key] = info.value
        });
        return list;
    };
    mergeReplaceFile(a, b)
    {
        var list = [];
        _.each(b, (info) =>
        {
            list.push(info)
        });
        _.each(a, (info) =>
        {
            list.push(info)
        });
        return list;
    }
}
module.exports = BaseConfig;