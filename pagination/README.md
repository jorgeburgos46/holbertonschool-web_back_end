# Pagination

This project explores different techniques to paginate a dataset:

- Simple pagination with `page` and `page_size` parameters
- Pagination with hypermedia metadata
- Deletion-resilient pagination

## Requirements

- Ubuntu 20.04 LTS, python3 (version 3.9)
- All files end with a new line
- First line of all files: `#!/usr/bin/env python3`
- Code follows the pycodestyle style (version 2.5.*)
- All modules, classes and functions are documented
- All functions and coroutines are type-annotated

## Tasks

### 0. Simple helper function

`0-simple_helper_function.py` contains `index_range`, which takes `page`
and `page_size` and returns a tuple `(start_index, end_index)` for the
corresponding pagination range.
