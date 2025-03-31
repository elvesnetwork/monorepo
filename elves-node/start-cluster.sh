#!/bin/bash

# Start the Ray cluster head node
ray start --head --port=6379

# Keep the container running
tail -f /dev/null