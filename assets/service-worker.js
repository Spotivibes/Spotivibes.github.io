self.addEventListener("push", e => {
    const data = e.data.json();
    self.registration.showNotification(
        data.title, // title of the notification
        {
            body: data.body,
            //icon: "https://res.cloudinary.com/drdjhioyy/image/upload/v1683281091/spotivibes-6060_huakdn.png",
            icon: data.icon, 
            image: data.image,
            badge: data.badge,
            tag: data.tag,
            dir: data.dir,
            lang: data.lang,
            actions: data.actions,
            data: data.data,
            requireInteraction: data.requireInteraction,
            vibrate: data.vibrate,
            renotify: data.renotify,
            silent: data.silent,
            sound: data.sound,
            timestamp: data.timestamp,
        }
    );
});