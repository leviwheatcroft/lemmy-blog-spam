options appear in the following locations:

## templates/lbs-demo.js

 - properties, declare all editable values as properties
 - constructor, declare initially shown values
 - _replaceLbsContainer, pass input values
 - render, show values and inputs

## templates/lbs-container.js

 - properties
 - attributeChangedCallback
 - firstUpdated, in resolveOptions call

## index.html

 - lbs-container element, initial values, only required options

## src/resolveOptions.js

 - resolveOptions, assemble options from defaults and inputs, validate options

## defaults.js

 - defaults, all non-required options