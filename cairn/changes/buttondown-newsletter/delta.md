---
cairn: delta
change: buttondown-newsletter
---

# Delta

## ADDED Requirements

None.

## MODIFIED Requirements

- `structure` / Outward links in one place: the subscribe form gates on the
  Buttondown account username, not on a listmonk endpoint + list UUID.
- `publishing` / Newsletter mirrors new posts → Newsletter follows the feed:
  the newsletter is Buttondown RSS-to-email automation polling `/feed.xml`;
  the publish workflow no longer talks to any newsletter service.

## REMOVED Requirements

None.
