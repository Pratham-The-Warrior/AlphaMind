import {Button} from "@/components/ui/button";
import TradingViewWidget from "@/components/TradingViewWidgets";
import {HEATMAP_WIDGET_CONFIG} from "@/lib/constants";
import {TOP_STORIES_WIDGET_CONFIG} from "@/lib/constants";
import {MARKET_DATA_WIDGET_CONFIG} from "@/lib/constants";
import {MARKET_OVERVIEW_WIDGET_CONFIG} from "@/lib/constants";

const ScriptUrl = "https://s3.tradingview.com/external-embedding/embed-widget-";

const Home = () => {
    return (
        <div className="flex min-h-screen home-wrapper">
            <section className={"grid w-full gap-8 home-section"}>
                <div className="md:col-span-1 xl:col-span-1">
                    <TradingViewWidget
                        title={"Market Overview"}
                        scriptUrl={`${ScriptUrl}market-overview.js`}
                        config={MARKET_OVERVIEW_WIDGET_CONFIG}
                        className={"custom-chart"}
                        height={600}
                    />
                </div>
                <div className={"md:col-span-1 xl:col-span-2"}>
                    <TradingViewWidget
                        title={"Stock Heatmap"}
                        scriptUrl={`${ScriptUrl}stock-heatmap.js`}
                        config={HEATMAP_WIDGET_CONFIG}

                        height={600}
                    />
                </div>
            </section>
            <section className={"grid w-full gap-8 home-section"}>
                <div className="h-full md:col-span-1 xl:col-span-1">
                    <TradingViewWidget
                        title={"Market Overview"}
                        scriptUrl={`${ScriptUrl}timeline.js`}
                        config={TOP_STORIES_WIDGET_CONFIG}
                        className={"custom-chart"}
                        height={600}
                    />
                </div>
                <div className={"h-full md:col-span-1 xl:col-span-2"}>
                    <TradingViewWidget
                        title={"Stock Heatmap"}
                        scriptUrl={`${ScriptUrl}market-quotes.js`}
                        config={MARKET_DATA_WIDGET_CONFIG}

                        height={600}
                    />
                </div>
            </section>

        </div>
    )
}
export default Home
