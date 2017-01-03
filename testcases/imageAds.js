urls = ["http://www.nytimes.com/",
"https://www.reddit.com/",
"http://www.si.com/",
"http://www.yahoo.com/",
"https://www.theguardian.com/international",
"http://www.huffingtonpost.com/",
"http://www.wsj.com/",
"http://www.w3schools.com/cssref/css3_pr_all.asp",
"http://www.dictionary.com/",
"http://www.answers.com/"
];

module.exports = {
    
    "Setting Page": function(client) {
        //ID might changes
        client.url("chrome-extension://kkendhmcacabobepidajpejenjinojhp/options.html")// go to options.html instead of dashboard, Can't get access into the iframe
              .click(".subgroup .switch label[for=hidingAds]")
              .click("ul li label[for=clickingAds]")
              .click("ul li label[for=blockingMalware]")
              .pause(1000);
    },

     "Simple Image Ad tests": function(client) {
        client.url("https://rednoise.org/adntest/simple.html")
              .assert.hidden("#adunit")
              .pause(1000);

    },

    "Popular sites tests": function(client) {
         urls.forEach(function(site) {
                client.url(site)
                    .waitForElementVisible('body', 5000, false)
                    .verify.elementPresent('body', "Pass:" + site)

            });

    },

    "Cosmetic iframe tests": function(client) {

        client.url("https://rednoise.org/adntest/iframe-cosm.html")
        .assert.hidden("#ad-container")
        .pause(1000);

     },

    "Dynamic iframe tests": function(client) {
        
        client.url("http://rednoise.org/adntest/dynamic_iframe.html")
        .waitForElementVisible("iframe", 3000)
        // give time to the iframe to be available
        .frame(0)
        .pause(1000)
        .waitForElementVisible("body", 1000)
        .assert.hidden("#adunit")
        .pause(1000)
        .end();

    }


      
};

