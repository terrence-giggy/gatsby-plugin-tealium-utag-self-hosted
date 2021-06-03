# gatsby-plugin-tealium-utag-self-hosted

This plugin inserts [Tealium's utag](https://docs.tealium.com/platforms/javascript/install/#universal-tag-utag-js) to the `<body>` of Gatsby pages.  Since Tealium can be [self hosted](https://community.tealiumiq.com/t5/iQ-Tag-Management/Self-Hosting-utag-js/ta-p/10135), this plugin assumes a full url is provided for scripts.

Forked from [https://github.com/moroshko/gatsby-plugin-tealium-utag](https://github.com/moroshko/gatsby-plugin-tealium-utag)

## Install

```shell
npm install --save gatsby-plugin-tealium-utag-self-hosted
```

## How to use

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-tealium-utag-self-hosted",
      options: {
        utagUrl: "YOUR_SELF_HOSTED_TEALIUM_SCRIPT",
        utagUrl: "YOUR_SELF_HOSTED_TEALIUM_SCRIPT",
        disableInitialTracking: true
      }
    }
  ]
};
```

## Required Options

### `utagUrl`

Tealium can be [self hosted](https://community.tealiumiq.com/t5/iQ-Tag-Management/Self-Hosting-utag-js/ta-p/10135).  .

## Optional Options

### `utagSyncUrl`

Tealium can be [self hosted](https://community.tealiumiq.com/t5/iQ-Tag-Management/Self-Hosting-utag-js/ta-p/10135).  .

### `disableInitialTracking`

Defaults to `false`.

When set to `true`, [`utag.view()` won't be called automatically on page load.](https://docs.tealium.com/platforms/javascript/settings/#noview) Usually, that's what you want in Single Page Applications.

## Notes

- This plugin just adds the utag script to the page. It's up to you to call [`utag.view()`](https://docs.tealium.com/platforms/javascript/page-tracking/#utag-view) and [`utag.link()`](https://docs.tealium.com/platforms/javascript/event-tracking/#utag-link) in your app.
- `utag.js` loads asynchronously. To know when it finished loading, listen to the `"utag-loaded"` event on the `document`:

```js
document.addEventListener("utag-loaded", () => {
  console.log("utag is ready:", utag);
});
```

## Related

- [tealium-tracker](https://github.com/moroshko/tealium-tracker) - Easily integrate with [Tealium](https://tealium.com/)
- [react-event-tracker](https://github.com/moroshko/react-event-tracker) - Easily track events in your React application.
