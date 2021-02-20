# Board

- Some kind of containing element
    - Tiles inside
    - Tiles are stateful:
        - light/dark
    - Center is important

# Players 

- Entity 
- Turn taking

# Pieces

- Sovereign
- Diplomat
- Consultant
- Contractor

# Towers 

- Stateful
    - How many "towers"
    - What level is it?

# Turn taking

- Manage this with a state machine
    - Construction phase
        - Number of towers (3rd, 2nd, 1st level)
        - Place the diplomat on the second level, sovereign on the third
        - Not yet on the board

## Placement
- Random start player
- Alternates between people
    - Placing towers
        - valid/invalid rules about where they can go
    - Placing pieces
        - valid/invalid rules 
    - Final tower placement 
        - one level, different set of valid placements

## Movement

- Movement rules
    - Different per piece
- Threat rules

## Capturing

- Pieces occupying the same place?

# Notation

- It exists!