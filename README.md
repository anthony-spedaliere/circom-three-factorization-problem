# Three-Factor Multiplication Verification Circuit

This repository contains a Circom circuit implementation for verifying the product of three numbers. The circuit proves that a given number is the result of multiplying three specific factors together.

## Circuit Details

The circuit verifies that a number is the product of three given factors. Specifically, it checks that:

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
- Zero-knowledge proof that three numbers multiply to give a specific result

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

The circuit will verify that x4 equals the product of x1, x2, and x3. This is useful in scenarios where you need to prove that three numbers multiply to give a specific result, without revealing the individual factors.

## Example

```
Input:
x1 = 3
x2 = 4
x3 = 5

Output:
x4 = 60

The circuit verifies that 3 * 4 * 5 = 60
```

## License

MIT
