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
            .waitForElementPresent('@logo', 7000)
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
    
}// exports