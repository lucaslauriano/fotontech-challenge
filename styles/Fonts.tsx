import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    /*
    www.OnlineWebFonts.Com 
    You must credit the author Copy this link on your web 
    <div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>
    OR
    <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>
    */
    @font-face {font-family: "SF Pro Display";
      src: url("http://db.onlinewebfonts.com/t/0b51833ff62e4af8acb5fd3e2bf59e97.eot"); /* IE9*/
      src: url("http://db.onlinewebfonts.com/t/0b51833ff62e4af8acb5fd3e2bf59e97.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
      url("http://db.onlinewebfonts.com/t/0b51833ff62e4af8acb5fd3e2bf59e97.woff2") format("woff2"), /* chrome firefox */
      url("http://db.onlinewebfonts.com/t/0b51833ff62e4af8acb5fd3e2bf59e97.woff") format("woff"), /* chrome firefox */
      url("http://db.onlinewebfonts.com/t/0b51833ff62e4af8acb5fd3e2bf59e97.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
      url("http://db.onlinewebfonts.com/t/0b51833ff62e4af8acb5fd3e2bf59e97.svg#SF Pro Display") format("svg"); /* iOS 4.1- */
    }
      `}
  />
);
export default Fonts;
