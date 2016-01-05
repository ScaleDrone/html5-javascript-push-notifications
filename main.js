if (!Notification) {
    alert('Your browser does not support notifications');
} else {
    getPermission(function () {
        // Connect to ScaleDrone at channel dIVCxD01G4x1sDtC
        var drone = new ScaleDrone('dIVCxD01G4x1sDtC');

        drone.on('open', function (error) {
            if (error) return console.error(error);
            // Join a room called notifications
            var room = drone.subscribe('notifications');
            room.on('open', function (error) {
                if (error) console.error(error);
            });
            room.on('data', function (data) {
                // Create a new notification from incoming data
                var notification = new Notification(data.msg);
                // Hide it after 4 seconds
                setTimeout(function () {
                    notification.close();
                }, 4000);
            });
        });

        drone.on('close', function (event) {
            console.log('Connection was closed', event);
        });

        drone.on('error', function (error) {
            console.error(error);
        });
    });
}

/**
 * Ask the user for desktop notification permissions (if needed)
 */
function getPermission(callback) {
    if (Notification.permission === 'granted') {
        callback();
    } else {
        Notification.requestPermission(function (permission) {
            if (permission === 'granted') {
                callback();
            } else {
                alert('Unable to get permission');
            }
        });
    }
}