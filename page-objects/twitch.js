module.exports = {
    url: 'https://www.twitch.tv/',
    elements: {
        featured: 'p[class"tw-c-text-alt-2 tw-font-size-5"]',
        following: 'a[data-a-target="following-link"]',
        logo: 'svg[class="tw-svg__asset tw-svg__asset--logotwitch tw-svg__asset--inherit"]',
        logIn: 'button[data-a-target="login-button"]',
        userName: 'input[id="username"]',
        password: 'input[type="password"]',
        search: 'input[type="search"]',
        gameClick: 'h5[title="League of Legends"',
        streamerClick: 'img[alt="Shiphtur"]',
        account: 'p[class="tw-line-height-heading"]',
        channel: 'a[href="/drhyd"]',
        chat: 'textarea[placeholder="Send a message"]',
        type: 'div[class="chat-line__message"]',
        subscribe: 'button[data-a-target="subscribe-button"]',
        subscribeNum: 'span[class="tw-button__num-block"]',
        cardName: 'input[id="recurly-first-name"]',
        cardLastName: 'input[id="recurly-last-name"]',
        cardNumber:'div[class="recurly-hosted-field recurly-hosted-field-number"]',
        cvv:'input[id="recurly-hosted-field-input-number"]',
        complete:'button[class="tw-button"]',
        invalidCard:'div[class="tw-mg-y-2"]'
    }, // elements
}// exports