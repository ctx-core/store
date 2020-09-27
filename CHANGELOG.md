# @ctx-core/store

## 19.0.0

### Major Changes

- get: generic I extends Readable<unknown>: the value type is inferred from I

### Minor Changes

- feat: extract_readable_val_type

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
