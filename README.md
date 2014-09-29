## ScaleDrone's cURL JavaScript Desktop Notifications

This is a very simple example of how to use the HTML5 Desktop Notifications API to send notifications from your server.
Beware that HTML5 Notifications are not supported by all browsers yet, you can get the latest list of supported browsers from [here](http://caniuse.com/#feat=notifications).

Create a new free channel at [ScaleDrone.com](https://www.scaledrone.com/) or use the one from the example for testing.

### Running

Clone this repository and run it using your favorite http server.

You can push a notification from Terminal using `cURL`:
```
curl --include \
     --request POST \
     --data-binary 'Buy cheese and bread for breakfast.' \
     https://api2.scaledrone.com/dIVCxD01G4x1sDtC/notifications/publish
```
