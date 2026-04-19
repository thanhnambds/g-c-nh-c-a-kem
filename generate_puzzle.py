from PIL import Image, ImageOps
import sys, json

def build_puzzle():
    try:
        bg_path = '/Users/nam/.gemini/antigravity/brain/e9ab7ff4-087a-4860-b30c-a05f963a15c7/clean_beach_bg_1776520394532.png'
        bg = Image.open(bg_path).convert('RGBA').resize((1024, 1024))
        
        # Load assets
        dino = Image.open('assets/cute_dinosaur.png').convert('RGBA').resize((200, 200))
        kitty = Image.open('assets/cute_kitty.png').convert('RGBA').resize((180, 180))
        princess = Image.open('assets/cute_princess.png').convert('RGBA').resize((220, 220))
        elsa = Image.open('assets/elsa-icon.png').convert('RGBA').resize((120, 120))
        
        # Make left side
        left = bg.copy()
        left.alpha_composite(dino, (150, 700))
        left.alpha_composite(kitty, (400, 750))
        left.alpha_composite(princess, (700, 680))
        left.alpha_composite(elsa, (850, 500))
        left.alpha_composite(elsa.resize((80, 80)), (200, 450)) # flying elsa
        
        # Make right side with differences
        right = bg.copy()
        
        # Diff 1: flipped dinosaur
        dino_flipped = ImageOps.mirror(dino)
        right.alpha_composite(dino_flipped, (150, 700))
        
        # Diff 2: kitty moved right
        right.alpha_composite(kitty, (500, 750))
        
        # Diff 3: princess scaled down
        princess_small = princess.resize((150, 150))
        right.alpha_composite(princess_small, (735, 750))
        
        # Diff 4: elsa head missing! 
        # (do not paste elsa at 850,500)
        
        # Diff 5: flying elsa colored red? or just swapped with kitty head
        kitty_head = Image.open('assets/kitty-icon.png').convert('RGBA').resize((80, 80))
        right.alpha_composite(kitty_head, (200, 450))
        
        # Combine
        combined = Image.new('RGB', (2048, 1024))
        combined.paste(left.convert('RGB'), (0, 0))
        combined.paste(right.convert('RGB'), (1024, 0))
        
        out_path = 'assets/diff_puzzles/ai_puzzle_3.png'
        combined.save(out_path, format='PNG')
        print("Created puzzle at", out_path)
    except Exception as e:
        print("Error:", e)

build_puzzle()
