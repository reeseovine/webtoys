# Contributing

So you want to help develop WebToys? Great! This document is here to guide you through the process.

## Language

WebToys is written with Typescript. Even if you aren't familiar with it you can use plain Javascript and I'll help you add type definitions later. I'm still learning it too so there's no pressure for you to have perfect code.

## What needs to be done?

Take a look at [the checklist](readme.md#features) to see the current status. Anything that's checked is done but could still maybe use some reviewing and bug squashing.

## How do I create a tool?

If you want to add a tool that's unchecked on the list, follow these steps:

- Double-check that it's not already being worked on. I would encourage you to look in [Discussions](https://github.com/katacarbix/webtoys/discussions) and make a post to let people know. If it is being worked on you should reach out and offer help!
- Copy one of the pages from `pages/**/*` to `pages/[category]/[id].tsx` as a starting point. `[category]` and `[id]` can be found in the entry for the tool you want to make in [`tools.ts`](shared/tools.ts).
  - I would like to make everything from the original DevToys first before adding new ones, but a case can be made if you think it would be useful.
- The main component for the page is `const Tool`. This is where the main layout and states should go, and any secondary components can go above this one. Take a look through the other tools as well to understand which components do what.
  - I've been basing them off of the [screenshots of DevToys](https://github.com/veler/DevToys/tree/main/assets/screenshots/Dark) that are available in its repo. If there isn't one for the tool you want to make you should either install DevToys and look for yourself or, if you can't, just use your best judgement.
- Try to keep external dependencies to a minimum because with 20+ tools they can add up quick. If you *need* to import a node module for the tool to work, please try to find one that does only what you need it to do with no or few extra frills.
- Open a pull request. It doesn't have to be 100% finished; I can help you test it and add finishing touches.
