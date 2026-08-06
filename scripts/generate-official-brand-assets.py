from pathlib import Path

from PIL import Image


ROOT = Path.cwd()
SOURCE = ROOT / "public" / "branding" / "aigo-os-master.png"
OUTPUT = ROOT / "public" / "branding"

if not SOURCE.exists():
    raise FileNotFoundError(
        "Missing public/branding/aigo-os-master.png"
    )


def transparent_background(image: Image.Image) -> Image.Image:
    result = image.convert("RGBA")
    pixels = result.load()

    for y in range(result.height):
        for x in range(result.width):
            red, green, blue, alpha = pixels[x, y]

            minimum = min(red, green, blue)

            if minimum >= 246:
                pixels[x, y] = (red, green, blue, 0)
            elif minimum >= 225:
                transparency = int(
                    255 * (246 - minimum) / 21
                )
                pixels[x, y] = (
                    red,
                    green,
                    blue,
                    min(alpha, transparency),
                )

    return result


def convert_navy_to_white(image: Image.Image) -> Image.Image:
    result = image.copy()
    pixels = result.load()

    for y in range(result.height):
        for x in range(result.width):
            red, green, blue, alpha = pixels[x, y]

            if alpha == 0:
                continue

            maximum = max(red, green, blue)
            minimum = min(red, green, blue)

            is_dark_navy = (
                maximum < 155
                and blue >= red
                and blue >= green
            )

            is_dark_neutral = (
                maximum < 105
                and maximum - minimum < 55
            )

            if is_dark_navy or is_dark_neutral:
                pixels[x, y] = (
                    255,
                    255,
                    255,
                    alpha,
                )

    return result


def crop_visible(
    image: Image.Image,
    padding: int = 20,
) -> Image.Image:
    box = image.getchannel("A").getbbox()

    if box is None:
        raise RuntimeError("No visible logo content found")

    left, top, right, bottom = box

    return image.crop(
        (
            max(0, left - padding),
            max(0, top - padding),
            min(image.width, right + padding),
            min(image.height, bottom + padding),
        )
    )


master = Image.open(SOURCE).convert("RGBA")
transparent = transparent_background(master)

light_logo = crop_visible(transparent, 30)
dark_logo = crop_visible(
    convert_navy_to_white(transparent),
    30,
)

light_logo.save(
    OUTPUT / "aigo-os-logo-light.png"
)

dark_logo.save(
    OUTPUT / "aigo-os-logo-dark.png"
)

dark_logo.thumbnail(
    (600, 600),
    Image.Resampling.LANCZOS,
)

dark_logo.save(
    OUTPUT / "aigo-os-sidebar-logo.png"
)

print("Created:")
print("public/branding/aigo-os-logo-light.png")
print("public/branding/aigo-os-logo-dark.png")
print("public/branding/aigo-os-sidebar-logo.png")
