export const CHANGELOG = [
    {
        version: "1.1.7",
        date: "04.06.2020",
        entries: ["HOTFIX: Fix savegames not showing up on the standalone version"],
    },
    {
        version: "1.1.6",
        date: "04.06.2020",
        entries: [
            "The steam release will happen on the <strong>7th of June</strong> - Be sure to add it to your wishlist! <a href='https://steam.shapez.io' target='blank'>View on steam</a>",
            "Fixed level complete dialog being blurred when the shop was opened before",
            "Standalone: Increased icon visibility for windows builds",
            "Web version: Fixed firefox not loading the game when browsing in private mode",
        ],
    },

    {
        version: "1.1.5",
        date: "03.06.2020",
        entries: ["Added weekly contests!"],
    },
    {
        version: "1.1.4",
        date: "01.06.2020",
        entries: ["Add 'interactive' tutorial for the first level to improve onboarding experience"],
    },
    {
        version: "1.1.3",
        date: "01.06.2020",
        entries: [
            "Added setting to configure zoom / mouse wheel / touchpad sensitivity",
            "Fix belts being too slow when copied via blueprint (by Dimava)",
            "Allow binding mouse buttons to actions (by Dimava)",
            "Increase readability of certain HUD elements",
        ],
    },
    {
        version: "1.1.2",
        date: "30.05.2020",
        entries: [
            "The official trailer is now ready! Check it out <a href='https://www.youtube.com/watch?v=KyorY1uIqiQ' target='_blank'>here</a>!",
            "The <a href='https://steam.shapez.io' target='_blank'>steam page</a> is now live!",
            "Experimental linux builds are now available! Please give me feedback on them in the discord",
            "Allow hovering pinned shapes to enlarge them",
            "Allow deselecting blueprints with right click and 'Q'",
            "Move default key for deleting from 'X' to 'DEL'",
            "Show confirmation when deleting more than 100 buildings",
            "Reintroduce 'SPACE' keybinding to center on map",
            "Improved keybinding hints",
            "Fixed some keybindings showing as 'undefined'",
        ],
    },
    {
        version: "1.1.1",
        date: "28.05.2020",
        entries: ["Fix crash when 'Show Hints' setting was turned off"],
    },
    {
        version: "1.1.0",
        date: "28.05.2020",
        entries: [
            "BLUEPRINTS! They are unlocked at level 12 and cost a special shape to build.",
            "MAP MARKERS! Press 'M' to create a waypoint and be able to jump to it",
            "Savegame levels are now shown in the main menu. For existing games, save them again to make the level show up.",
            "Allow holding SHIFT to rotate counter clockwise",
            "Added confirmation when deleting more than 500 buildings at a time",
            "Added background to toolbar to increase contrast",
            "Further decerase requirements of first levels",
            "Pinned shapes now are saved",
            "Allow placing extractors anywhere again, but they don't work at all if not placed on a resource",
            "Show dialog explaining some keybindings after completing level 4",
            "Fix keys being stuck when opening a dialog",
            "Swapped shape order for painting upgrades",
            "Allow changing all keybindings, including CTRL, ALT and SHIFT (by Dimava)",
            "Fix cycling through keybindings selecting locked buildings as well (by Dimava)",
            "There is now a github action, checking all pull requests with eslint. (by mrHedgehog)",
        ],
    },
    {
        version: "1.0.4",
        date: "26.05.2020",
        entries: [
            "Reduce cost of first painting upgrade, and change 'Shape Processing' to 'Cutting, Rotating & Stacking'",
            "Add dialog after completing level 2 to check out the upgrades tab.",
            "Allow changing the keybindings in the demo version",
        ],
    },
    {
        version: "1.0.3",
        date: "24.05.2020",
        entries: [
            "Reduced the amount of shapes required for the first 5 levels to make it easier to get into the game.",
        ],
    },
    {
        version: "1.0.2",
        date: "23.05.2020",
        entries: [
            "Introduced changelog",
            "Removed 'early access' label because the game isn't actually early access - its in a pretty good state already! (No worries, a lot more updates will follow!)",
            "Added a 'Show hint' button which shows a small video for almost all levels to help out",
            "Now showing proper descriptions when completing levels, with instructions on what the gained reward does.",
            "Show a landing page on mobile devices about the game not being ready to be played on mobile yet",
            "Fix painters and mixers being affected by the shape processors upgrade and not the painter one",
            "Added 'multiplace' setting which is equivalent to holding SHIFT all the time",
            "Added keybindings to zoom in / zoom out",
            "Tunnels now also show connection lines to tunnel exits, instead of just tunnel entries",
            "Lots of minor fixes and improvements",
        ],
    },
    {
        version: "1.0.1",
        date: "21.05.2020",
        entries: ["Initial release!"],
    },
];
