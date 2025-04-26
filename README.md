# FocusBoard

![Image](https://github.com/user-attachments/assets/91122cfb-1959-42b2-a1d9-080edc7a7880)

A startpage for programmers to easily track their daily tasks.

[Demo](https://devanshu0x.github.io/FocusBoard/)

## Introduction
FocusBoard is a simple startpage with space based theme for your browser to easily track your activities through a integrated tasks manager where you can add/remove tasks, mark them as complete/incomplete. It uses localstorage to store tasks so you don't need any server/db to store them.
> Pitfall: Don't store sensitive information in tasks

Theres a stats board where you can see your codeforces and github stats by just providing your username. Its using public APIs for this, so no API keys are required.

## Usage
The easiest way to set it up is using the repositories demo with one of the many new tab override extensions like [this one for firefox](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/) or [this one for chrome](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna).

Install the extension and set `https://devanshu0x.github.io/FocusBoard/` as new tab url.

OR

You can clone this repo apply necessary changes(if you want) and host it somewhere (you can use gh-pages for free hosting) and just add that url to tab override extension
