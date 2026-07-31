#!/usr/bin/env python3
"""Module that provides a type-annotated to_kv function."""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple of the key and the square of the value as a float."""
    return (k, v ** 2)
