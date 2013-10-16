__author__ = 'eduardoshanahan'

import zmq

context = zmq.Context()
socket = context.socket(zmq.REQ)
socket.connect('tcp://localhost:5000')

for i in range(10):
    msg = 'msg %s' % i
    socket.send(msg)
    print ('sending', msg)
    msg_in = socket.recv()
    print ('received', msg_in)