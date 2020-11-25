# @ctx-core/store

## 23.1.0

### Minor Changes

- interface instead of type

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/array@19.1.0
  - @ctx-core/object@13.1.0
  - @ctx-core/store@23.1.0

## 23.0.15

### Patch Changes

- svelte: 3.29.7 -> 3.30.0
- Updated dependencies [undefined]
  - @ctx-core/store@23.0.15

## 23.0.14

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/object@13.0.3
  - @ctx-core/array@19.0.24
  - @ctx-core/store@23.0.14

## 23.0.13

### Patch Changes

- typescript: ^4.0.5 -> ^4.1.2
- Updated dependencies [undefined]
  - @ctx-core/array@19.0.23
  - @ctx-core/combinators@5.0.4
  - @ctx-core/function@16.1.3
  - @ctx-core/object@13.0.2
  - @ctx-core/store@23.0.13

## 23.0.12

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/array@19.0.22
  - @ctx-core/store@23.0.12

## 23.0.11

### Patch Changes

- svelte: 3.29.6 -> 3.29.7
- Updated dependencies [undefined]
  - @ctx-core/store@23.0.11

## 23.0.10

### Patch Changes

- svelte: 3.29.4 -> 3.29.6
- Updated dependencies [undefined]
  - @ctx-core/store@23.0.10

## 23.0.9

### Patch Changes

- typescript: ^4.0.3 -> ^4.0.5
- Updated dependencies [undefined]
  - @ctx-core/array@19.0.21
  - @ctx-core/combinators@5.0.3
  - @ctx-core/function@16.1.2
  - @ctx-core/object@13.0.1
  - @ctx-core/store@23.0.9

## 23.0.8

### Patch Changes

- svelte: 3.29.3 -> 3.29.4
- Updated dependencies [undefined]
  - @ctx-core/store@23.0.8

## 23.0.7

### Patch Changes

- fix: get: one generic param instead of two: updated to svelte api
- Updated dependencies [undefined]
  - @ctx-core/store@23.0.7

## 23.0.6

### Patch Changes

- svelte: 3.29.0 -> 3.29.3
- Updated dependencies [undefined]
  - @ctx-core/store@23.0.6

## 23.0.5

### Patch Changes

- fix: asyc_derived: circular dependency
- Updated dependencies [undefined]
  - @ctx-core/store@23.0.5

## 23.0.4

### Patch Changes

- fix: derived: Maximum call stack size exceeded issue: referencing svelte/store derived
- Updated dependencies [undefined]
  - @ctx-core/store@23.0.4

## 23.0.3

### Patch Changes

- fix: derived: in_fn: inferred set function
- fix: tsc build issues
- Updated dependencies [undefined]
- Updated dependencies [undefined]
  - @ctx-core/store@23.0.3

## 23.0.2

### Patch Changes

- svelte: 3.28.0 -> 3.29.0

## 23.0.1

### Patch Changes

- fix: subscribe_wait_for: type inference for intersection types

## 23.0.0

### Major Changes

- BREAKING CHANGE: subscribe_wait_for: generic S extends Readable<unknown> instead of representing value type

### Minor Changes

- feat: subscribe_wait_for: return type inferred by Readable store argument

### Patch Changes

- fix: readable_infer_type

## 22.0.0

### Major Changes

- BREAKING CHANGE: subscribe_wait_for: generic S extends Readable<unknown> instead of representing value type

### Minor Changes

- feat: subscribe_wait_for: return type inferred by Readable store argument

### Patch Changes

- fix: readable_infer_type

## 21.1.0

### Minor Changes

- feat: WritableOrReadable

## 21.0.1

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/object@13.0.0
  - @ctx-core/array@19.0.20

## 21.0.0

### Major Changes

- extracted readable,writable modules from lib

## 20.1.0

### Minor Changes

- derived_in_fn_type, derived_return_in_fn_type, derived_set_in_fn_type, set_derived_type

### Patch Changes

- fix: derived: type inference when the setter fn has an arity of 1 with the return value setting the derived store

## 20.0.2

### Patch Changes

- derived_in_fn_type

## 20.0.1

### Patch Changes

- fix: index: exports derived, readable_stores_val_type, StoresValues

## 20.0.0

### Major Changes

- BREAKING CHANGE: ExtractReadableValue instead of extract_readable_val_type

### Minor Changes

- StoresValues: copy & export of svelte's StoresValues type
- ExtractStoresValues: StoreValues that supports intersection types: Extract Readable<unknown>
- ExtractReadableValue: generics argument E: else type
- feat: derived: fn values infers intersection types: using ExtractStoresValues

## 19.0.0

### Major Changes

- get: generic I extends Readable<unknown>: the value type is inferred from I

### Minor Changes

- feat: ExtractReadableValue

## 18.1.12

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/object@12.0.13
  - @ctx-core/array@19.0.19

## 18.1.11

### Patch Changes

- svelte: 3.27.0 -> 3.28.0

## 18.1.10

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/object@12.0.12
  - @ctx-core/array@19.0.18

## 18.1.9

### Patch Changes

- svelte: 3.26.0 -> 3.27.0

## 18.1.8

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/object@12.0.11
  - @ctx-core/array@19.0.17

## 18.1.7

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/object@12.0.10
  - @ctx-core/array@19.0.16

## 18.1.6

### Patch Changes

- Updated dependencies [undefined]
- Updated dependencies [undefined]
  - @ctx-core/array@19.0.15

## 18.1.5

### Patch Changes

- fix: subscribe_wait_for: condition_fn is expected to return a boolean

## 18.1.4

### Patch Changes

- explicitly setting B types when \_b is invoked
- Updated dependencies [undefined]
- Updated dependencies [undefined]
  - @ctx-core/object@12.0.9
  - @ctx-core/array@19.0.14

## 18.1.3

### Patch Changes

- default generic types
- Updated dependencies [undefined]
  - @ctx-core/array@19.0.13
  - @ctx-core/function@16.1.1
  - @ctx-core/object@12.0.8

## 18.1.2

### Patch Changes

- fix: inferred type issue
- Updated dependencies [undefined]
  - @ctx-core/object@12.0.7
  - @ctx-core/array@19.0.12

## 18.1.1

### Patch Changes

- c8839e951: fix: multi_subscribe: generic J defaults to Readable<any>

## 18.1.0

### Minor Changes

- set: second generic type to set the store type
- multi_subscribe: second generic type for the stores base argument

## 18.0.2

### Patch Changes

- fix: multi_subscribe: invalid type error with store_a1: accept an array of Readable<any>

## 18.0.1

### Patch Changes

- multi_subscribe: setting type for fn argument array

## 18.0.0

### Major Changes

- clear_store,\_clear_store: generic takes an unknown instead of a Writable<unknown>

### Minor Changes

- feat: stores_infer_type
- spread_derived aliased by derived\_\_spread
- debug_subscribe aliased by subscribe\_\_debug
- multi_subscribe aliased by subscribe\_\_multi
- subscribe_noinit aliased by subscribe\_\_noinit
- feat: async_derived aliased by derived\_\_async
- feat: readable_infer_type
- \_clear_store aliased by \_store**clear, clear_store aliased by store**clear

## 17.2.3

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/object@12.0.6
  - @ctx-core/array@19.0.11

## 17.2.2

### Patch Changes

- @ctx-core/array@19.0.10

## 17.2.1

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/object@12.0.5
  - @ctx-core/array@19.0.9

## 17.2.0

### Minor Changes

- feat: \_readable_set_ctx

## 17.1.4

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/object@12.0.4
  - @ctx-core/array@19.0.8

## 17.1.3

### Patch Changes

- svelte: ~3.25.1 -> 3.26.0

## 17.1.2

### Patch Changes

- fix: \_readable_set_a1: explicitly setting store type to avoid any type being returned

## 17.1.1

### Patch Changes

- \_readable_set_a1_set_type<I extends unknown = unknown> uses Subscriber<I> instead of custom type

## 17.1.0

### Minor Changes

- - Invalidator, StartStopNotifier, Subscriber, Updater

  More explicit generic types

## 17.0.8

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/array@19.0.7

## 17.0.7

### Patch Changes

- fix: export type Readable, Writable: typescript issue with --isolated-modules

## 17.0.6

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/array@19.0.6

## 17.0.5

### Patch Changes

- stricter type checking of generics
- Updated dependencies [undefined]
- Updated dependencies [undefined]
  - @ctx-core/function@16.1.0
  - @ctx-core/array@19.0.5
  - @ctx-core/object@12.0.3

## 17.0.4

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/object@12.0.2
  - @ctx-core/array@19.0.4

## 17.0.3

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/combinators@5.0.2
  - @ctx-core/array@19.0.3

## 17.0.2

### Patch Changes

- fix: install issues: using explicit workspace: versioning
- Updated dependencies [undefined]
  - @ctx-core/array@19.0.2
  - @ctx-core/object@12.0.1

## 17.0.1

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/combinators@5.0.1
  - @ctx-core/array@19.0.1

## 17.0.0

### Major Changes

- Typescript strict checking

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/array@19.0.0
  - @ctx-core/combinators@5.0.0
  - @ctx-core/function@16.0.0
  - @ctx-core/object@12.0.0

## 16.2.11

### Patch Changes

- fix: npm run compile: path to tsc
- Updated dependencies [undefined]
  - @ctx-core/array@18.0.1
  - @ctx-core/combinators@4.2.27
  - @ctx-core/function@15.0.1
  - @ctx-core/object@11.0.1

## 16.2.10

### Patch Changes

- typescript updates
- Updated dependencies [undefined]
- Updated dependencies [undefined]
- Updated dependencies [undefined]
  - @ctx-core/array@18.0.0
  - @ctx-core/function@15.0.0
  - @ctx-core/object@11.0.0
