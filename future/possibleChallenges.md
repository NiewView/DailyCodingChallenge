# Possible Challenges

1. A city planner wants to plan her city such that parks are close to peoples' homes. Given an N by N matrix representing the city, where each coordinate can either be a (home), W (water), or 'E' (empty), place K parks, 'P', in the empty parts of the city such that they are close to peoples' homes. Specifically, minimize the sum of the Manhattan distances from peoples' homes to the nearest park. People can't swim across the water.
2. Given a stack of integers, sort it without using any additional data structures other than one extra stack.
3. An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding a next, and prey fields, It holds a both which Is an XOR of the next node and the previous node. Implement an XOR linked list; It has an add(element) which adds the element to the end, and a get(index) which returns the node at index.
4. A full binary tree is either a node with no children (a leaf) or a node with two children that are full binary trees. Given a pre-order traversal of a full binary tree's values, e.g. 3, —, 2, 51, reconstruct the original tree.

# Daily Coding Problem

This problem was asked by Google.

Given the root to a binary tree, implement `serialize(root)`, which serializes the tree into a string, and `deserialize(s)`, which deserializes the string back into the tree.

For example, given the following `Node` class

```
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

The following test should pass:

```
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
```

Upgrade to premium and get in-depth solutions to every problem, including this one.