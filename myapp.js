var page = tabris.create("Page", {
    title: "Test Pushbot",
    topLevel: true
});

if (PushbotsPlugin.isAndroid()) {
    PushbotsPlugin.initializeAndroid("55802c4117795971628b4567", "421100931770");
}

var myTextView = tabris.create("TextView", {
    layoutData: {centerX: 0, centerY: 0},
    text: "Hello Pushbot"
}).appendTo(page);

page.open();

      