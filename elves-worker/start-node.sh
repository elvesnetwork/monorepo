#!/bin/bash

# Get the IP address of the Ray head node
RAY_HEAD_IP=$1

# Start the Ray worker node and connect to the Ray head node
ray start --address=$RAY_HEAD_IP:6379

# Keep the container running
tail -f /dev/null