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
        }
    );
});