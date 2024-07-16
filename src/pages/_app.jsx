import FooterOne from "@/components/footers/FooterOne";
import HeaderOne from "@/components/navigations/HeaderOne";
import "@/styles/app.css";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "photoswipe/dist/photoswipe.css";
import AnimatedCursor from "react-animated-cursor";

export default function App({ Component, pageProps }) {
    return (
        <div className="w-full max-w-[1440px] mx-auto font-bricolage bg-main">
            <HeaderOne />
            <Component {...pageProps} />
            <FooterOne />

            <AnimatedCursor
                innerSize={12}
                outerSize={36}
                innerScale={1.5}
                outerScale={1.5}
                innerStyle={{
                    backgroundColor: "#5536F5",
                    zIndex: 9999999999,
                }}
                outerStyle={{
                    border: "1px solid #5536F5",
                    backgroundColor: "transparent",
                    zIndex: 9999999999,
                }}
            />
        </div>
    );
}
