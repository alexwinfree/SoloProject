var pageObject = {}
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.twitch()
        pageObject
            .navigate()
        //browser.url('twitch.tv')
    },// before
    after: browser => {
        browser.end()
    },// after
    'Page Load': browser => {
        pageObject
            .waitForElementPresent('@logo', 3000)
        //https://dmutah.atlassian.net/browse/QA5A-47
    },// page load
    'Search for a game/select a streamer': browser => {
        pageObject
            .click('@search')
            .setValue('@search', 'League of Legends')
            .waitForElementPresent('@gameClick', 4000)
            .click('@gameClick')
            .waitForElementPresent('@streamerClick', 4000)
            .click('@streamerClick')
            //.waitForElementPresent('span[data-a-target="stream-title"]',8000)
        //https://dmutah.atlassian.net/browse/QA5A-51
    },// search a game and select a streamer  
    'Subscribe': browser => {
       browser.url('https://www.twitch.tv/the_happy_hob')
        pageObject
            .waitForElementPresent('@subscribe', 4000)
            .click('@subscribe')
            .waitForElementPresent('@subscribeNum', 8000)
            .click('@subscribeNum')
            browser.pause(60000)
            pageObject
            //.waitForElementPresent('img[alt="Credit Card"]', 6000)
            .setValue('@cardName','steve')
            .setValue('@cardLastName','buscemi')
            .click('@complete')
            .verify.containsText('@invalidCard','Payment not processed')
    },// Subscribe
}// exports