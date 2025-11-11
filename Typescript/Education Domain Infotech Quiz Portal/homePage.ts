const founders: Array<string> = [" Bruce Wayne ", " Barry Allen ", " Diana Prince "];

class introduction {
    private manager: string = "Clark Kent";

    public intro() {
        let fun = (): string => {
            let founderNames: string = founders.join(", ");
            return founderNames;
        };

        let content = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Infotech Quiz Portal or  better known as IQP is a fully operational web application for people, who are looking for a way to test their knowledge on different programming languages. It is over a decade old and the core members are
        ${fun()}. The Admin of this awesome endeavor is ${founders[0]} and the web manager is ${this.manager}.`;

        document.getElementById("intro").innerHTML = content;
    }
}

function introFun() {
    let introObj = new introduction();
    introObj.intro();
}