__author__ = 'Eduardo Shanahan'

import zmq

context = zmq.Context()
socket = context.socket(zmq.SUB)
socket.connect('tcp://127.0.0.1:5001')
socket.setsockopt(zmq.SUBSCRIBE, 'beta')
socket.setsockopt(zmq.SUBSCRIBE, 'gamma')

while True:
    print socket.recv()