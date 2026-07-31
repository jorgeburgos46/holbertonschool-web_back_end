#!/usr/bin/env python3
"""Module that provides a type-annotated make_multiplier function."""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by multiplier."""
    def multiplier_fn(value: float) -> float:
        """Multiply value by the enclosing multiplier."""
        return value * multiplier
    return multiplier_fn
