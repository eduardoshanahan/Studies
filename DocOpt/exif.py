# -*- coding: utf-8 -*-

"""Exif

Usage:
  exif.py --format=<fmt> <ext> <dir_orig> <dir_dest>
  exif.py (-h | --help)

Options:
  -h --help          Show this screen.
  --format=<fmt>     1: Algo /2 : Otra cosa [default:1]

"""


from docopt import docopt


if _name_ == "__main__":
    arguments= docopt(__doc__)

    print arguments
