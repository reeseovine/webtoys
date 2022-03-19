<div align="center">
	<img src="logo/logo-circle-128.png" alt="WebToys logo">
	<h1>WebToys</h1>
</div>

A handy and easy-to-use collection of tools every developer needs at one point or another. It's a web-based clone of [DevToys](https://github.com/veler/DevToys) built with Next.js.

## why?

Because not everyone is a Windows user :)

## status

WebToys is in the very early stages of development and most tools are not yet implemented. I am aiming for 1:1 feature parity with DevToys eventually, wherever that's feasible.

Below is a list of things to do. Feel free to contribute if any of them appeal to you and don't be afraid to ask for help! Make sure to read through [`contributing.md`](contributing.md) first before getting in too deep.

### features

- [ ] tools
  - [x] converters
    - [x] json to yaml
    - [x] number base
  - [ ] encoders & decoders
    - [x] html entities
    - [x] url
    - [x] base 64
    - [ ] gzip
    - [x] json web token
  - [ ] formatters
    - [x] json
    - [ ] sql
    - [ ] xml
  - [ ] generators
    - [x] hash
    - [ ] uuid
    - [x] lorem ipsum
    - [ ] checksum
  - [ ] text
    - [ ] inspector / case converter
    - [ ] regex tester
    - [ ] text diff
    - [x] markdown preview
  - [ ] graphic
    - [x] color blindness simulator
    - [ ] lossless image optimizer (probably not possible with just the browser)
    - [x] image converter
- [x] responsive navigation drawer
- [x] syntax highlighting and line numbering for code-related tools
- [ ] search
- [ ] translations
- [x] automatically saves preferences in localStorage

### code maintenance

- [x] generalize components like buttons and sections for quick reusability
- [x] make `className`s easier to read
- [ ] standardize language used in help text
- [x] write type declarations where needed so that it can build
  - [x] component props
  - [x] helper functions
- [ ] remove unused imports (mdi icon paths, for example)
- [ ] ensure responsiveness on every component
- [ ] ensure accessibility on every component
- [ ] ensure everything looks good in light and dark mode
- [ ] test PWA and make sure it works offline
