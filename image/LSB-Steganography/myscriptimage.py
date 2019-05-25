from LSBSteg import LSBSteg
import cv2


steg = LSBSteg("image.png")
orig_im = steg.decode_image()
cv.SaveImage("recovered.png", orig_im)

