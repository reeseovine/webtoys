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

\* = not in DevToys but good to have

### features

- [ ] tools
  - [x] converters
    - [x] json to yaml
    - [x] number base
      - ~~Bug: Doesn't support fractional numbers due to using `parseInt()`.~~ Fixed with `shared/tools.ts/parseFloat()`
  - [ ] encoders & decoders
    - [x] html entities
    - [x] url
    - [x] base 64
    - [ ] gzip
    - [x] json web token
  - [ ] formatters
    - [x] pretty print\*
    - [ ] minify\*
    - ~~[ ] json~~
    - ~~[ ] sql~~
    - ~~[ ] xml~~
  - [x] generators
    - [x] hash
    - [x] uuid
    - [x] lorem ipsum
    - [x] checksum
    - [ ] QR code\*
    - [ ] random number\*
  - [ ] text
    - [x] inspector / case converter
    - [x] regex tester
    - [x] text diff
    - [x] markdown preview
    - [ ] escape and unescape
  - [ ] graphic
    - [x] color blindness simulator
    - [ ] lossless image optimizer (probably not possible with just the browser)
    - [x] image converter
- [x] responsive navigation drawer
- [x] syntax highlighting and line numbering for code-related tools
- [x] automatically saves preferences in localStorage
- [ ] search
- [ ] translations
- [ ] help dialog for each tool

### code maintenance

- [x] generalize components like buttons and sections for quick reusability
- [x] make `className`s easier to read
- [x] write type declarations where needed so that it can build
  - [x] component props
  - [x] helper functions
- [ ] standardize wording used in descriptions, etc.
- [ ] remove unused imports (mdi icon paths, for example)
- [ ] ensure responsiveness on every component
- [ ] ensure accessibility on every component
- [ ] ensure everything looks good in light and dark mode
- [x] test PWA and make sure it works offline

## issues

WebToys relies on several relatively modern browser APIs for some things to work. If something seems broken, make sure you're using the latest version of Firefox or Chrome.

If it's still broken across multiple browsers then I would greatly appreciate if you opened an issue!
