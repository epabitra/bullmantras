import { useState } from "react";

const tab_title: string[] = ["Overview", "Curriculum"]

const Reviews = () => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };
   
   const topics: string[] = [
        "Candlestick Patterns",
        "Candle Sticks Patterns Advanced",
        "Wick vs Body",
        "OHLC",
        "Tools",
        "Time frames",
        "Market structure",
        "15 Minutes Candle vs 5 Minutes Candle",
        "Chart Patterns",
        "Support & Resistance",
        "Identifying Trends",
        "Breakouts | Reversals | Retests | Traps",
        "Indicators & Oscillators",
        "Intraday Super Setups for Higher Winning Rate",
        "Nifty/Bank-Nifty Trading Setups",
        "Swing Trading Super Setups",
        "Gap Theory",
        "Bull/Bear Trap",
        "Investment Strategies",
        "Multiple Timeframe Analysis",
        "Broker Terminal Explained",
        "Multiple Entry & Exit Strategies",
        "Stock Selection Process",
        "Forex Trading Setup",
        "World Markets Correlation",
        "Forex & Commodities Basics",
        "Watchlist Setup",
        "Risk Management",
        "Trader's Journaling",
        "Trading System",
        "FUTURES & OPTIONS",
        "Options Trading Deep Dive",
        "Choosing Correct Strike Prices",
        "Choosing Correct Position Sizing in Options Trading",
        "Option Chain Analysis Overview",
      ];

   return (
      <div className="row">
         <div className="col-12">
            <div className="product-desc-wrap mt-0 mb-100">
               <ul className="nav nav-tabs" id="myTab2" role="tablist">
                  {tab_title.map((tab, index) => (
                     <li key={index} onClick={() => handleTabClick(index)} className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
                     </li>
                  ))}
               </ul>
               <div className="tab-content" id="myTabContent2">
                  <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="description-tab-pane" role="tabpanel" aria-labelledby="description-tab">
                     <h3>The Most High-Powered Yet Simplified Trading Program by Pratyush Ranjan Padhy</h3>
                     <p>Transform your trading journey with a program designed to make complex strategies
                         easy to understand and implement. Led by Pratyush Ranjan Padhy, this program empowers
                          you with powerful tools and techniques for success in the markets.
                          Get ready to elevate your trading skills to the next level!
                     </p>
                     <h6 className="my-2">
                        **Attend Our 3-Day Money-Back Guarantee Class for Just ₹3,000!**
                     </h6>
                     <p>
                        Join us for a risk-free experience—attend our 3-day class, and if you're not
                         satisfied, simply request a refund. You can choose to continue your learning
                         or take a refund.
                     </p>
                     <p>
                     In today’s era of unlimited data connectivity and the ability to work from anywhere,
                         life has become much easier. With the right skill set and management, 
                         you can progress in your work while focusing on other things. Why not use this to earn 
                         and achieve the lifestyle you dream of? Put in the effort and discipline, and you could 
                         be on your way to purchasing the luxuries you've always wanted—all while earning the 
                         capital you invested in making that dream a reality.
                     </p>
                     <h6 className="my-2">
                        **What is the TRADING WITH Data Analytics Program – Online?**
                     </h6>
                     <p>
                        Data analytics has become an essential skill for success in the world of trading. 
                        Our **Data Analytics Program** is designed to equip you with the knowledge and tools 
                        to leverage data to make informed trading decisions. This comprehensive and well-organized 
                        program is perfect for those looking to learn the stock market from scratch, 
                        using simplified data-driven strategies.
                     </p>
                     <p>
                        This program is crafted to help you become a proficient trader with expert knowledge of analyzing 
                        market data and knowing **how and when to enter/exit trades** to consistently book profits. 
                        Upon completing the program, you’ll have the skills to analyze financial markets with precision 
                        and generate consistent profits by following a proven, data-backed approach.
                     </p>
                  </div>
                  <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab">
                     <div className="product-desc-review">
                        <div className="product-desc-review-title mb-15">
                           <h5 className="title">Curriculam</h5>
                        </div>
                        <ol>
                           <li>Basics to advanced - Stock Market Trading</li>
                           <li>Basics of Stock Market</li>
                           <li>Fundamental Analysis Basics</li>
                           <li>TRADING VIEW TUTORIAL</li>
                           <li>Types of Traders & Trading styles</li>
                        </ol>
                        <div className="product-desc-review-title mb-15">
                           <h5 className="title">Technicals</h5>
                        </div>
                        <ol>
                           {topics.map((topic, index) => (
                              <li key={index}>{topic}</li>
                           ))}
                        </ol>
                     </div>
                     <div className="ms-4">
                        Options Buying for traders with trading capital : 1 Lakh <br/>
                        Options Selling for traders with trading capital : 5 Lakhs <br/>
                        Options Hedging for traders with trading capital : 10 Lakhs <br/>
                        Futures - Open Interest Explained <br/>
                        Long Build Up, Short Build Up, Long Unwinding, Short Covering….. <br/>
                        Etc etc 
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Reviews
