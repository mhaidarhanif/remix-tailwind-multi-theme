# Remix Tailwind Multi-Theme

This sample shows the multi-theme plugin from [@simonswiss](https://twitter.com/simonswiss) excellent email tutorials at https://www.protailwind.com/

This includes a ☀️ Light/🌙 Dark Mode Selector and 🌈 Theme Selector.

The plugin also generates the classes entirely dynamically. No hard-coded strings.

Simply add the plugin, and pass in your `themes` configuration object.

```js
module.exports = {
  content: ['./**/*.tsx'],
  darkMode: 'class',
  plugins: [
    require('./tailwind/plugin/multi-theme-plugin')({
      themes: require('./app/styles/themes.js'),
    }),
  ],
}
```

The plugin looks at the keys in your theme object, so you can configure colors beyond `text` and `bg`. Just add `border-base`, etc.
