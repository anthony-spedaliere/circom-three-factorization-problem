# Three Factorization Circuit

This repository contains a Circom circuit implementation for verifying the factorization of a number into three factors.

## Circuit Details

The circuit verifies that a number can be expressed as the product of three factors. Specifically, it checks that:

```
x4 = x1 * x2 * x3
```

where:

- x1, x2, x3 are the input factors
- x4 is the output product to verify

## Features

- Three-factor multiplication verification circuit
- Implemented in Circom 2.2.2
- Uses basic multiplier components for verification

## Requirements

- Circom 2.2.2 or later
- Node.js (for development)

## Usage

The circuit takes three inputs:

- x1: First factor
- x2: Second factor
- x3: Third factor

And produces one output:

- x4: Product of the three factors

The circuit will verify that x4 equals the product of x1, x2, and x3.

## License

MIT
