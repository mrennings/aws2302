#!/bin/bash

for i in $(seq 100) ;
do
    curl ec2-35-158-97-11.eu-central-1.compute.amazonaws.com
    sleep 30
done
