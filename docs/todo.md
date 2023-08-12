## v1

### [x] default options

move to root folder ?

### [x] loader for lbs-container

this will require some way for getComments to indicate progress

easiest way will be to pass a function to getComments

### [x] remove handlebars

 - templates
 - packages
 - webpack

### [x] layout for mobile

### [x] readme

### [ ] readme - download link

### [x] review production build

### [x] include marked

include marked in bundle to minimise effort required to add lbs to a page

### [x] implement hideDepth

max_depth is buggy, can't be implemented now, so hideDepth seems appropriate.

should be recursive. So if you set hideDepth of 3, when you expand a comment with depth=3, it only shows comments down to depth=6

### [ ] link to lazy loader docs

## v2

### [ ] downvotes disabled

don't show downvotes for instances on which it is disabled

### [ ] limit param

when limit param is passed, all comments are downloaded.

### [ ] styles

allow custom styles somehow

### [ ] better comment collapse

### [ ] implement totalLimit

depends on limit param

params.limit is per request. totalLimit would guard against posts with too many replies. include a warning saying "n comments hidden" which links to lemmy post

### [ ] parent missing

why are some comments missing parents ?

## v?

### [ ] implement params.max_depth

Multiple issues, limit doesn't work with maxDepth, so 