ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/shaped/';
    const recipes = [
        {
            output: 'powah:energy_cell_basic',
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: '#forge:gems/moonstone',
                B: 'powah:capacitor_basic_large',
                C: 'thermal:energy_cell_frame',
                D: 'ae2:fluix_block'
            },
            id: `powah:crafting/energy_cell_basic`
        },
        {
            output: Item.of('powah:capacitor_basic_large', 2),
            pattern: [' AB', 'ACA', 'BA '],
            key: {
                A: '#forge:dusts/fluix',
                B: 'powah:dielectric_paste',
                C: '#forge:gems/moonstone'
            },
            id: `powah:crafting/capacitor_basic_large`
        },
        {
            output: Item.of('powah:energy_cable_basic', 12),
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
                A: 'powah:dielectric_rod_horizontal',
                B: 'powah:capacitor_basic_large'
            },
            id: `powah:crafting/cable_basic`
        },
        {
            output: 'powah:energizing_rod_basic',
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#forge:gems/moonstone',
                B: 'powah:dielectric_rod',
                C: 'powah:capacitor_basic_large'
            },
            id: `${id_prefix}energizing_rod/basic`
        },
        {
            output: 'powah:energizing_orb',
            pattern: ['AAA', 'ACA', 'BBB'],
            key: {
                A: 'pneumaticcraft:pressure_chamber_glass',
                B: 'pneumaticcraft:pressure_chamber_wall',
                C: '#forge:essences/fire'
            },
            id: `powah:crafting/energizing_orb`
        },
        {
            output: 'powah:energy_hopper_basic',
            pattern: ['A A', 'BCB', ' B '],
            key: {
                A: 'powah:dielectric_rod',
                B: 'powah:capacitor_basic_large',
                C: 'thermal:energy_cell_frame'
            },
            id: `powah:crafting/energy_hopper_basic`
        },
        {
            output: 'powah:energy_hopper_niotic',
            pattern: ['ABA', ' A '],
            key: {
                A: 'powah:capacitor_niotic',
                B: 'powah:energy_hopper_basic'
            },
            id: `powah:crafting/energy_hopper_niotic`
        },
        {
            output: 'powah:energy_hopper_spirited',
            pattern: ['ABA', ' A '],
            key: {
                A: 'powah:capacitor_spirited',
                B: 'powah:energy_hopper_niotic'
            },
            id: `powah:crafting/energy_hopper_spirited`
        },
        {
            output: 'powah:energy_hopper_nitro',
            pattern: ['ABA', ' A '],
            key: {
                A: 'powah:capacitor_nitro',
                B: 'powah:energy_hopper_spirited'
            },
            id: `powah:crafting/energy_hopper_nitro`
        },
        {
            output: 'powah:ender_cell_basic',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:obsidian',
                B: '#forge:gems/moonstone',
                C: 'occultism:stable_wormhole'
            },
            id: `powah:crafting/ender_cell_basic`
        },
        {
            output: 'powah:player_transmitter_basic',
            pattern: [' A ', 'BCB', 'BDB'],
            key: {
                A: 'ae2:fluix_pearl',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_rod',
                D: 'ars_nouveau:arcane_core'
            },
            id: `${id_prefix}player_transmitter_basic`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
