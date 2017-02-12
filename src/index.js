class Watchable {

    //TODO: name should throw eror as well
    constructor(name = Watchable.error("noName"), {
        value = null,
        type = "any"
    } = {}) {
        this._type = this.setType(type);
        this.value = this.setInitialVal(value);
        this.callbacks = [];
        Watchable.watchables.push(name);
    }

    set(value) {
        // TODO: type checking
        if (this.value === value) return;
        // Do nothing, do not fire listeners if value has not changed

        this.value = value;

        if (this.callbacks.length) {
            this.callbacks.forEach( callback => callback());
        }
        this.link();
        return this;
    }

    setInitialVal(value) {

        if (this._type === "any") {
            return value;
        }

        if (typeof this._type !== typeof value) {
            throw new Error(Watchable.error("typeMismatch"));
        }

    }

    subscribe(callback){
        if(typeof callback !== "function"){
            return;
        }

        if(this.callbacks.indexOf(callback) == -1){
            this.callbacks.push(callback);
        }

    }

    setType(type) {

        switch (type) {

            case "string":
                type = "string";
                break;

            case "number":
                type = 1;
                break;

            case "boolean":
                type = true;
                break;

            default:
                break;
        }

        return type;
    }

    static error(type) {
        let message;

        switch (type) {

            case ("typeMismatch"):
                message = "value of Watchable should match its type.\
            \nIf you do not want strict typing then omit 'type' argument";
                break;

            case ("noName"):
                message = "watchable's name should be provided as a first argument.\
            \nUsing watchable 'name' argument same as variable name is a good practice."

            default:
                break;
        }
        console && console.warn("%c Watchable error: %c " + message, "color: white; background-color: navy", "");
    }

    static render(el) {
        return el.innerHTML = eval(el.getAttribute('watchable') + '.value');
    }

    link() {
        Watchable.watchables.map(watchable => {
            const list = [...document.querySelectorAll(`[watchable=${watchable}]`)];
            list.forEach(el => Watchable.render(el))
        })
    }
}

Watchable.watchables = [];