#!/usr/bin/env python3
"""Module that provides a coroutine to run wait_random concurrently."""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn wait_random n times and return delays in ascending order."""
    delays = [wait_random(max_delay) for _ in range(n)]
    return [await task for task in asyncio.as_completed(delays)]
