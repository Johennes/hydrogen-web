export class Pusher {
    constructor(description) {
        this._description = description;
    }

    static httpPusher(host, appId, pushkey, data) {
        return new Pusher({
            kind: "http",
            data: Object.assign({}, data, {url: host + "/_matrix/push/v1/notify"}),
            pushkey,
            app_id: appId,
            app_display_name: "Hydrogen",
            device_display_name: "Hydrogen",
            lang: "en-US"
        });
    }

    setSessionId(sessionId) {
        this._description.data["session_id"] = sessionId;
    }

    enable(hsApi, log) {
        log.set("description", this._description);
        return hsApi.setPusher(this._description, {log}).response();
    }
}
