# Running Ghost in Vagrant

To run the scripts I am using Python Fabric. If you don't have it, here is a script to deploy it in Ubuntu
```
#!bash
sudo ./install_fabric.sh
```
I am trying this script in Ubuntu 13.04. If you don't have that vagrant box in your machine, the first step should be:
```
#!bash
vagrant box add raring64 http://goo.gl/ceHWg
```
From then on, your machine will have the box available to fire a fresh instance on demand.

I already setup a Vagrant file, doing
```
#!bash
vagrant init raring64
```
Now the real thing. Get the machine ready
```
#!bash
vagrant up
```
Make sure that all is in the right place:
```
#!bash
fab vagrant server_update update_virtualbox fix_vagrant_guest_additions
```
Now go with Ghost:
```
#!bash
fab vagrant install_tools
fab vagrant install_ghost
fab vagrant server_reboot
```
