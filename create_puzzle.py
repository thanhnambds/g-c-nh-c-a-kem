from PIL import Image, ImageOps, ImageChops, ImageFilter
import random
import json
import sys

def create_diffs(input_path, output_path):
    img = Image.open(input_path).convert('RGB')
    w, h = img.size
    
    # Create the duplicate for the right side
    right = img.copy()
    
    diffs = []
    
    for i in range(5):
        # Choose a random spot, avoiding edges
        rx = random.randint(int(w*0.1), int(w*0.9))
        ry = random.randint(int(h*0.1), int(h*0.9))
        size = random.randint(30, 60)
        
        # Region box
        box = (rx - size, ry - size, rx + size, ry + size)
        region = right.crop(box)
        
        # Apply a modification
        mod_type = random.choice(['hue', 'blur', 'flip', 'inverse', 'bright'])
        
        if mod_type == 'hue':
            # Subtle hue rotate using blend
            r, g, b = region.split()
            region = Image.merge('RGB', (g, b, r))
        elif mod_type == 'blur':
            region = region.filter(ImageFilter.GaussianBlur(radius=5))
        elif mod_type == 'flip':
            region = ImageOps.mirror(region)
        elif mod_type == 'inverse':
            region = ImageOps.invert(region)
        elif mod_type == 'bright':
            region = region.point(lambda p: p * 0.5) # Darken
            
        right.paste(region, box)
        
        # Save coordinate as percentage of WHOLE puzzle (Width = 2w)
        # x_puzzle = (w + rx) / (2w)
        # y_puzzle = ry / h
        diffs.append({"x": ((w + rx) / (2 * w)) * 100, "y": (ry / h) * 100, "rx": rx, "ry": ry})

    # Combine side by side
    combined = Image.new('RGB', (2 * w, h))
    combined.paste(img, (0, 0))
    combined.paste(right, (w, 0))
    
    combined.save(output_path)
    return diffs

res1 = create_diffs(sys.argv[1], 'assets/diff_puzzles/real_puzzle_1.png')
res2 = create_diffs(sys.argv[2], 'assets/diff_puzzles/real_puzzle_2.png')

print(json.dumps({"puzzle1": res1, "puzzle2": res2}))
