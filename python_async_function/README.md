# Python - Async Function

## Description
This project covers asynchronous programming in Python:

- `async` and `await` syntax
- How to execute an async program with `asyncio`
- How to run concurrent coroutines
- How to create `asyncio` tasks
- How to use the `random` module

## Requirements
- Editors: `vi`, `vim`, `emacs`
- Ubuntu 20.04 LTS, `python3` (version 3.8)
- All files end with a new line
- First line of all files: `#!/usr/bin/env python3`
- Code follows `pycodestyle` (version 2.5.x)
- All files must be executable
- All functions and coroutines must be type-annotated
- All modules and functions must have documentation

## Tasks

| Task | File | Description |
| ---- | ---- | ----------- |
| 0 | `0-basic_async_syntax.py` | Asynchronous coroutine `wait_random` that waits for a random delay between 0 and `max_delay` seconds and returns it |
| 1 | `1-concurrent_coroutines.py` | Coroutine `wait_n` that spawns `wait_random` n times and returns the delays in ascending order |
| 2 | `2-measure_runtime.py` | Function `measure_time` that measures the average execution time of `wait_n(n, max_delay)` |
| 3 | `3-tasks.py` | Function `task_wait_random` that creates an `asyncio.Task` from `wait_random` |
| 4 | `4-tasks.py` | Coroutine `task_wait_n` that spawns `task_wait_random` n times and returns the delays in ascending order |
