---
cairn: delta
change: manual-newsletter
---

# Delta

## ADDED Requirements

None.

## MODIFIED Requirements

- `publishing` / Newsletter follows the feed → Newsletter sent manually from
  the markdown source: Buttondown RSS automation (paid) is not relied on; the
  newsletter helper script prints a paste-ready markdown email per post, and
  neither CI nor the site talks to the newsletter service.

## REMOVED Requirements

None.
