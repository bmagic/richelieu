from LSBSteg import LSBSteg
import cv2


steg = LSBSteg(cv2.imread("image.png"))
binary = steg.decode_binary()
with open("recovered.bin", "rb") as f:
    f.write(data)
