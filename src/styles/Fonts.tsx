import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
   
      @font-face {
        font-family: "SF Pro Text"; 
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.eot"); 
        src: url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.eot?#iefix") 
        format("embedded-opentype"), url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.woff2") 
        format("woff2"), url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.woff") 
        format("woff"), url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.ttf") 
        format("truetype"), url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.svg#SF Pro Text")
        format("svg"); 
      }

      @font-face {
        font-family: "SF Pro Text"; 
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url("//db.onlinewebfonts.com/t/28adc6c6fd652123c3e173389a8be17f.eot"); 
        src: url("//db.onlinewebfonts.com/t/28adc6c6fd652123c3e173389a8be17f.eot?#iefix") 
        format("embedded-opentype"), url("//db.onlinewebfonts.com/t/28adc6c6fd652123c3e173389a8be17f.woff2") 
        format("woff2"), url("//db.onlinewebfonts.com/t/28adc6c6fd652123c3e173389a8be17f.woff") 
        format("woff"), url("//db.onlinewebfonts.com/t/28adc6c6fd652123c3e173389a8be17f.ttf") 
        format("truetype"), url("//db.onlinewebfonts.com/t/28adc6c6fd652123c3e173389a8be17f.svg#SF Pro Text") 
        format("svg"); 
      }

      @font-face {
        font-family: "SF Pro Display"; 
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("//db.onlinewebfonts.com/t/0b51833ff62e4af8acb5fd3e2bf59e97.eot"); 
        src: url("//db.onlinewebfonts.com/t/0b51833ff62e4af8acb5fd3e2bf59e97.eot?#iefix") 
        format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0b51833ff62e4af8acb5fd3e2bf59e97.woff2") 
        format("woff2"), url("//db.onlinewebfonts.com/t/0b51833ff62e4af8acb5fd3e2bf59e97.woff") 
        format("woff"), url("//db.onlinewebfonts.com/t/0b51833ff62e4af8acb5fd3e2bf59e97.ttf")
        format("truetype"), url("//db.onlinewebfonts.com/t/0b51833ff62e4af8acb5fd3e2bf59e97.svg#SF Pro Display") 
        format("svg"); 
      }

      @font-face {
        font-family: "SF Pro Display";
        font-style: medium;
        font-weight: 500;
        font-display: swap;
        src: url("//db.onlinewebfonts.com/t/64a2cfb57c4a5df1013e4f2e5bf3eff3.eot"); 
        src: url("//db.onlinewebfonts.com/t/64a2cfb57c4a5df1013e4f2e5bf3eff3.eot?#iefix") 
        format("embedded-opentype"), url("//db.onlinewebfonts.com/t/64a2cfb57c4a5df1013e4f2e5bf3eff3.woff2") 
        format("woff2"), url("//db.onlinewebfonts.com/t/64a2cfb57c4a5df1013e4f2e5bf3eff3.woff") 
        format("woff"), url("//db.onlinewebfonts.com/t/64a2cfb57c4a5df1013e4f2e5bf3eff3.ttf") 
        format("truetype"), url("//db.onlinewebfonts.com/t/64a2cfb57c4a5df1013e4f2e5bf3eff3.svg#SF Pro Display") 
        format("svg"); 
      }

      @font-face {
        font-family: "SF Pro Display";
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/SF Pro Display/sf-pd-bold/sf-pd-bold.woff2') format('woff2'), 
             url('/fonts/SF Pro Display/sf-pd-bold/sf-pd-bold.woff') format('woff'),
             url('/fonts/SF Pro Display/sf-pd-bold/sf-pd-bold.ttf') format('truetype');
      }

      @font-face {
        font-family: "SF Pro Display"; 
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url("//db.onlinewebfonts.com/t/3cff9206b4c8d578245ef1aaeeaf9e84.eot"); 
        src: url("//db.onlinewebfonts.com/t/3cff9206b4c8d578245ef1aaeeaf9e84.eot?#iefix") 
        format("embedded-opentype"), url("//db.onlinewebfonts.com/t/3cff9206b4c8d578245ef1aaeeaf9e84.woff2") 
        format("woff2"), url("//db.onlinewebfonts.com/t/3cff9206b4c8d578245ef1aaeeaf9e84.woff") 
        format("woff"), url("//db.onlinewebfonts.com/t/3cff9206b4c8d578245ef1aaeeaf9e84.ttf") 
        format("truetype"), url("//db.onlinewebfonts.com/t/3cff9206b4c8d578245ef1aaeeaf9e84.svg#SF Pro Display") 
        format("svg");
      }
     
    `}
  />
);
export default Fonts;
