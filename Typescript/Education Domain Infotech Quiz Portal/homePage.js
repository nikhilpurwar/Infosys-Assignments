var founders = [" Bruce Wayne ", " Barry Allen ", " Diana Prince "];
var introduction = /** @class */ (function () {
    function introduction() {
        this.manager = "Clark Kent";
    }
    introduction.prototype.intro = function () {
        var fun = function () {
            var founderNames = founders.join(", ");
            return founderNames;
        };
        var content = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Infotech Quiz Portal or  better known as IQP is a fully operational web application for people, who are looking for a way to test their knowledge on different programming languages. It is over a decade old and the core members are\n        ".concat(fun(), ". The Admin of this awesome endeavor is ").concat(founders[0], " and the web manager is ").concat(this.manager, ".");
        document.getElementById("intro").innerHTML = content;
    };
    return introduction;
}());
function introFun() {
    var introObj = new introduction();
    introObj.intro();
}
