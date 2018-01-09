## Scaledrone's cURL JavaScript Desktop Notifications

This is a very simple example of how to use the HTML5 Desktop Notifications API to send notifications from your server.
Beware that HTML5 Notifications are not supported by all browsers yet, you can get the latest list of supported browsers from [here](http://caniuse.com/#feat=notifications).

To send your own notifications create a new free account at [scaledrone.com](https://www.scaledrone.com/).

### Example

[https://scaledrone.github.io/html5-javascript-push-notifications/](https://scaledrone.github.io/html5-javascript-push-notifications/)

### Running

Clone this repository and run it using your favorite http server.

You can push a notification from Terminal using `cURL`:
```
curl -H "Content-Type: application/json" \
     -X POST \
     -d '{"title":"Important!", "body":"Dogecoin is going to the moon!", "icon":"logo.png"}' \
     https://api2.scaledrone.com/KtJ2qzn3CF3svSFe/notifications/publish
```
