from PIL import Image, ImageChops
import sys
import os

def crop_image(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # Strategy: Find "White" pixels (the trees)
        # We assume the trees are significantly lighter than the blue background
        
        # Convert to grayscale
        gray = img.convert("L")
        
        # Threshold to find white pixels (trees)
        # Any pixel lighter than 200 is considered part of the tree
        # Adjust this if the trees aren't pure white
        threshold = 200
        mask = gray.point(lambda x: 255 if x > threshold else 0)
        
        # Get the bounding box of the white regions
        bbox = mask.getbbox()
        
        if bbox:
            # Get dimensions of the content (trees)
            left, top, right, bottom = bbox
            w = right - left
            h = bottom - top
            
            # We want a square crop that includes the trees
            # Determine the size of the square (max dimension + padding)
            # Add small padding relative to content size
            padding_ratio = 0.1
            content_max = max(w, h)
            square_size = int(content_max * (1 + 2 * padding_ratio))
            
            # Find center of the content
            center_x = left + w // 2
            center_y = top + h // 2
            
            # Calculate crop coordinates
            crop_half = square_size // 2
            crop_left = center_x - crop_half
            crop_top = center_y - crop_half
            crop_right = crop_left + square_size
            crop_bottom = crop_top + square_size
            
            # Ensure we don't go out of bounds of the original image
            # If we do, we might have to settle for the edge, or fill (which risks the seam again)
            # For now, let's clamp and maybe center-fill if strictly needed, 
            # but usually shifting the crop window slightly to stay in bounds is better than padding 
            
            img_w, img_h = img.size
            
            # Shift if out of bounds
            if crop_left < 0:
                diff = -crop_left
                crop_left += diff
                crop_right += diff
            if crop_top < 0:
                diff = -crop_top
                crop_top += diff
                crop_bottom += diff
            if crop_right > img_w:
                diff = crop_right - img_w
                crop_left -= diff
                crop_right -= diff
            if crop_bottom > img_h:
                diff = crop_bottom - img_h
                crop_top -= diff
                crop_bottom -= diff
                
            # Final Check: If image is too small to fit the square (unlikely given it's 2000px),
            # we just crop what we can.
            crop_left = max(0, int(crop_left))
            crop_top = max(0, int(crop_top))
            crop_right = min(img_w, int(crop_right))
            crop_bottom = min(img_h, int(crop_bottom))
            
            cropped_square = img.crop((crop_left, crop_top, crop_right, crop_bottom))
            cropped_square.save(output_path)
            
            print(f"Successfully cropped square from source (size: {cropped_square.size}) and saved to {output_path}")
        else:
            print("Could not detect distinct content from background.")
            # If fail, just copy and resize original if needed, or error out
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python crop_favicon.py <input> <output>")
    else:
        crop_image(sys.argv[1], sys.argv[2])
