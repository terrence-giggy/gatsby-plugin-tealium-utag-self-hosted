const React = require("react");
const { oneLineTrim } = require("common-tags");

export const onRenderBody = (
  { setHeadComponents, setPreBodyComponents },
  {
    utagUrl,
    utagSyncUrl,
    disableInitialTracking = false
  }
) => {
  if (utagSyncUrl) {
    setHeadComponents([
      React.createElement("script", {
        key: "plugin-tealium-utag-sync",
        src: utagSyncUrl
      })
    ]);
  }

  setPreBodyComponents([
    React.createElement("script", {
      key: "plugin-tealium-utag",
      dangerouslySetInnerHTML: {
        __html: oneLineTrim`
          ${
            disableInitialTracking
              ? `
            window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
            window.utag_cfg_ovrd.noview = true;
          `
              : ""
          }
          (function(a,b,c,d){
            a='${utagUrl}';
            b=document;c='script';d=b.createElement(c);
            d.onload=function() { b.dispatchEvent(new Event("utag-loaded")); };
            d.src=a;d.type='text/java'+c;d.async=true;
            a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a)
          })();
        `
      }
    })
  ]);
};
