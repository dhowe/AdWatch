var keyword = "credit+card";

//STEP 1: Go to the search page
//STEP 2: Wait for loading
//STEP 3: HIDE: Check whether the ads are hidden: whether hidden attribute is added to the div
//STEP 4: PARSE: Check how many ads are collected - TODO


module.exports = {
    
    //Can't do first-run Page, the Selenium browser will be closed when clicking confirm & close button
    "Setting Page": function(client) {
        //ID might changes
        client.url("chrome-extension://kkendhmcacabobepidajpejenjinojhp/options.html")// go to options.html instead of dashboard, avoid iframe
              .click(".subgroup .switch label[for=hidingAds]")
              .click("ul li label[for=clickingAds]")
              .click("ul li label[for=blockingMalware]")
              .pause(1000);
        //TODO: DNT Settings
    },

    "Google test": function(client) {
        client.url("https://www.google.com.hk/?#safe=strict&q=" + keyword)
              .pause(1000)
              .assert.hidden('li.ads-ad')
              .pause(1000);
        //3-6 Ads
    },

    "Bing test": function(client) {
        client.url("https://www.bing.com/search?q=" + keyword)
              .pause(1000)
              .assert.hidden('li.b_ad')
              .pause(1000);
        //9 Ads
    },

    "Yahoo test": function(client) {
        client.url("https://search.yahoo.com/search?p=" + keyword)
              .waitForElementVisible('#results', 3000)
              // .assert.hidden('.dd[style="cursor: pointer;"]') //can't find the coresponding div
              .pause(1000);
        //6 Ads
    },
    
    //DNT Site !
    "Duckduckgo test": function(client) {
        client.url("https://duckduckgo.com/?q=" + keyword)
              .pause(2000)
              .assert.hidden('div[class*="result__body"]')
              .pause(1000);
        //2 Ads
     },

    "AOL test": function(client) {
        client.url("http://search.aol.com/aol/search?q=" + keyword)
              .pause(4000)
              .assert.hidden('.ad')
              .pause(1000);
        //10 Ads
     },

     //Need Chinese Filters to be on, seperate test file?
     // "Baidu test": function(client) {
     //    client.url("https://www.baidu.com/s?wd=%E5%8C%96%E5%A6%86%E5%93%81")
     //          .waitForElementVisible('div[style*="important"]', 3000)
     //          .pause(1000);
     //    //at least 4 ads
     // },

    "GoogleAds test": function(client) {
        client.url("http://www.bbc.com/news")
              .pause(5000)
              .assert.hidden('.bbccom_adsense_container')
              .pause(1000);
        //3 Ads
     }

};

