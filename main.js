Push.config({
  serviceWorker: './bower_components/push.js/bin/serviceWorker.min.js',
});

getPermission(function() {
  var drone = new ScaleDrone('KtJ2qzn3CF3svSFe');

  drone.on('open', function(error) {
    if (error) return console.error(error);
    // Join a room called notifications
    var room = drone.subscribe('notifications');
    room.on('open', function(error) {
      if (error) {
        console.error(error);
      }
    });
    room.on('data', function(data) {
      Push.create(data.title, {
        body: data.body,
        icon: data.icon,
        timeout: 4000,
        onClick: function() {
          this.close();
        }
      });
    });
  });

  drone.on('close', function(event) {
    console.log('Connection was closed', event);
  });

  drone.on('error', function(error) {
    console.error(error);
  });
});

/**
 * Ask the user for desktop notification permissions (if needed)
 */
function getPermission(onGranted) {
  if (!Notification) {
    alert('Notifications are not supported');
  }
  if (Push.Permission.has()) {
    onGranted();
  } else {
    Push.Permission.request(onGranted, function() {
      alert('Permission denied');
    });
  }
}
