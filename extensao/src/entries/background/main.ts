import { badOrigins } from "~/badOrigins"

chrome.webNavigation.onCompleted.addListener(async (details) => {
    console.log(details)
    const frame = await chrome.webNavigation.getFrame({
        frameId: details.frameId,
        tabId: details.tabId
    })

    if (frame) {
        const url = new URL(frame.url)
        const isBad = badOrigins.some(o => url.origin.includes(o))
        if (isBad) {
            
        }
    }
})

chrome.runtime.onInstalled.addListener(() => {
    console.log('installed')
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {
                            hostContains: badOrigins[0]
                        }
                    })
                ],
                actions: [
                    new chrome.declarativeContent.ShowAction()
                ]
            }
        ])
    })
})