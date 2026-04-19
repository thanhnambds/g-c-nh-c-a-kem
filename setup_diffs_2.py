from PIL import Image
import json
import os

data = []

def find_diffs(img_path):
    try:
        im = Image.open(img_path).convert('RGB')
        w, h = im.size
        # image is side by side
        lw = w // 2
        diffs = []
        # brute force find different regions
        # check every 10x10 block
        step = 10
        for y in range(0, h, step):
            for x in range(0, lw, step):
                # max diff in this block
                block_diff = 0
                for dy in range(step):
                    for dx in range(step):
                        if y+dy < h and x+dx < lw:
                            p1 = im.getpixel((x+dx, y+dy))
                            p2 = im.getpixel((x+dx + lw, y+dy))
                            d = sum(abs(a-b) for a,b in zip(p1, p2))
                            if d > 50:
                                block_diff += 1
                if block_diff > 10:
                    diffs.append((x, y))
                    
        # cluster diff blocks into centers
        clusters = []
        for x, y in diffs:
            found = False
            for c in clusters:
                cx, cy, count = c
                if abs(cx/count - x) < 50 and abs(cy/count - y) < 50:
                    c[0] += x
                    c[1] += y
                    c[2] += 1
                    found = True
                    break
            if not found:
                clusters.append([x, y, 1])
                
        boxes = []
        for c in clusters:
            cx = int(c[0]/c[2] + step/2)
            cy = int(c[1]/c[2] + step/2)
            # percentage based for overlay!
            px = (cx / lw) * 100
            py = (cy / h) * 100
            boxes.append({"x": px, "y": py})
            
        return boxes
    except Exception as e:
        print(e)
        return []

boxes1 = find_diffs('assets/diff_real_1.png')
boxes2 = find_diffs('assets/diff_real_2.png')

print("B1", json.dumps(boxes1))
print("B2", json.dumps(boxes2))

