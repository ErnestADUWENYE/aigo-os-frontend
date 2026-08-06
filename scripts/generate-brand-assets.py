from pathlib import Path

from PIL import Image, ImageFilter


ROOT = Path.cwd()
SOURCE = ROOT / "public" / "branding" / "aigo-os-master.png"
OUTPUT = ROOT / "public" / "branding"

image = Image.open(SOURCE).convert("RGBA")


def remove_white_background(source: Image.Image) -> Image.Image:
    pixels = source.load()
    width, height = source.size

    for y in range(height):
        for x in range(width):
            red, green, blue, _ = pixels[x, y]
            distance = max(
                255 - red,
                255 - green,
                255 - blue,
            )

            if distance <= 4:
                alpha = 0
            elif distance >= 24:
                alpha = 255
            else:
                alpha = int((distance - 4) / 20 * 255)

            pixels[x, y] = (
                red,
                green,
                blue,
                alpha,
            )

    return source


def crop_visible(source: Image.Image, padding: int = 24) -> Image.Image:
    alpha = source.getchannel("A")
    box = alpha.getbbox()

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


transparent = remove_white_background(image.copy())
full_logo = crop_visible(transparent, 30)

mark = transparent.crop((470, 125, 1045, 665))
mark = crop_visible(mark, 20)

wordmark = transparent.crop((260, 650, 1265, 850))
wordmark = crop_visible(wordmark, 20)

full_logo.save(OUTPUT / "aigo-os-logo.png")
mark.save(OUTPUT / "aigo-os-mark.png")
wordmark.save(OUTPUT / "aigo-os-wordmark.png")

for size in (16, 32, 48, 180, 192, 256, 512):
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))

    fitted = mark.copy()
    fitted.thumbnail(
        (int(size * 0.82), int(size * 0.82)),
        Image.Resampling.LANCZOS,
    )

    x = (size - fitted.width) // 2
    y = (size - fitted.height) // 2

    canvas.alpha_composite(fitted, (x, y))
    canvas.save(OUTPUT / f"aigo-os-icon-{size}.png")

(OUTPUT / "aigo-os-icon-180.png").replace(
    ROOT / "app" / "apple-icon.png"
)

Image.open(
    OUTPUT / "aigo-os-icon-512.png"
).save(ROOT / "app" / "icon.png")

print("AIGO-OS branding assets created")
