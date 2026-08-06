from pathlib import Path

from PIL import Image


ROOT = Path.cwd()
BRANDING = ROOT / "public" / "branding"
SOURCE = BRANDING / "aigo-os-master.png"

image = Image.open(SOURCE).convert("RGBA")


def remove_white_background(source: Image.Image) -> Image.Image:
    pixels = source.load()

    for y in range(source.height):
        for x in range(source.width):
            red, green, blue, _ = pixels[x, y]
            distance = max(255 - red, 255 - green, 255 - blue)

            if distance <= 4:
                alpha = 0
            elif distance >= 24:
                alpha = 255
            else:
                alpha = int((distance - 4) / 20 * 255)

            pixels[x, y] = (red, green, blue, alpha)

    return source


def crop_visible(source: Image.Image, padding: int = 20) -> Image.Image:
    box = source.getchannel("A").getbbox()

    if box is None:
        raise RuntimeError("No visible logo content found")

    left, top, right, bottom = box

    return source.crop(
        (
            max(0, left - padding),
            max(0, top - padding),
            min(source.width, right + padding),
            min(source.height, bottom + padding),
        )
    )


transparent = remove_white_background(image)
compact = crop_visible(transparent, 24)

compact.thumbnail((420, 240), Image.Resampling.LANCZOS)
compact.save(BRANDING / "aigo-os-sidebar-logo.png")

print("Created public/branding/aigo-os-sidebar-logo.png")
