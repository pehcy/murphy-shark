#bin/bash

ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f main -N ""