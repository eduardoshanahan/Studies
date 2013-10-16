__author__ = 'Eduardo Shanahan'
import zmq
from random import choice

context = zmq.Context()
socket = context.socket(zmq.PUB)
socket.bind('tcp://127.0.0.1:5001')

case = ['alpha', 'beta', 'gamma']
events = ['one', 'two', 'three']

while True:
    msg = choice(case) + ' ' + choice(events)
    print '->', msg
    socket.send(msg)