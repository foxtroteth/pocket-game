# Spy & Mr. White

Party word game for 3+ players. Roles: Civilians (shared word), Spy (similar word), Mr. White (no word).

- `index.html`: online mode. Each player joins a room on their own phone; turns and votes sync through a free public MQTT broker (broker.emqx.io, fallback broker.hivemq.com). The host's phone runs the game.
- `local.html`: pass-and-play on one phone.
- `words.js`: word pairs by category, English and Bahasa Indonesia.

Live: https://foxtroteth.github.io/pocket-game/

Run locally: `python3 -m http.server` and open http://localhost:8000.
