export class Pusher {
    constructor(description) {
        this._description = description;
    }

    static httpPusher(url, appId, pushkey, data) {
        return new Pusher({
            kind: "http",
            data: Object.assign({}, data, {url}),
            pushkey,
            app_id: appId,
            app_display_name: "Hydrogen",
            device_display_name: "Hydrogen",
            lang: "en-US"
        });
    }

    enablePusher(hsApi) {
        return hsApi.setPusher(this._description);
    }
}
