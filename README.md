# Attendee Reg

## Prerequisites

- Node 18
- TypeScript
- ts-node

## Running

Run with

```bash
npx ts-node ./test.ts # or whatever you create
```

## Know issues and missing features

- Limited Preferences (no hotel section preference, no floor preference etc.)
- "Stay With" Preference assigns weights if and only if the target Attendee is already in a Room; changing this to "target Attendee is in the Room or the Room has at least one free space" doesn't work, as it then chooses Rooms with free spaces as often as Rooms with the preferred target Attendee, which obviously isn't correct. Possible fixes:
  - Use the "free space rule" only for calculations for others, not for choosing the Room via a conditional
  - Consider both current and target Attendee when dealing with "Stay With" Preference
    - Harder to implement, but should allow to create "Attendee groups" and consider them as a whole as well
