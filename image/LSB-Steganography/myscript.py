from LSBSteg import LSBSteg
import cv2

im = cv2.imread("image.png")
steg = LSBSteg(im)
print("Text value:",steg.decode_text())
