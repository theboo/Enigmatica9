ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:expert/occultism/ritual/';
    const recipes = [
        /*
        Custom Summons
        Custom Summon Rituals make use of a dummy item which, 
        when spawned in world is immediately removed, triggering an actual summon. 
        Define the summon in constants/custom_spawns.js

        These should always use the 'occultism:craft' ritual_type
        */
    ];

    /*
        Ingredient Display in JEI
            inputs: [
                 '12 o'clock' ,
                 '3 o'clock' ,
                 '6 o'clock' ,
                 '9 o'clock' ,

                 '1 o'clock',
                 '2 o'clock' ,
                 '7 o'clock' ,
                 '8 o'clock' ,

                 '11 o'clock' ,
                 '4 o'clock' ,
                 '5 o'clock' ,
                 '10 o'clock',
            ],
    */
    let gateways = [
        { type: 'blaze', input: 'minecraft:blaze_rod' },
        { type: 'creeper', input: 'minecraft:gunpowder' },
        { type: 'enderman', input: 'minecraft:ender_pearl' },
        { type: 'ghast', input: 'minecraft:ghast_tear' },
        { type: 'magma_cube', input: 'minecraft:magma_cream' },
        { type: 'shulker', input: 'minecraft:shulker_shell' },
        { type: 'skeleton', input: 'minecraft:bone' },
        { type: 'slime', input: 'minecraft:slime_ball' },
        { type: 'spider', input: 'minecraft:spider_eye' },
        { type: 'witch', input: 'minecraft:glowstone_dust' },
        { type: 'zombie', input: 'minecraft:rotten_flesh' }
    ];

    // Helper for generating lang entries. Leave disabled normally.
    // Static entries generated to facilitate translation.
    // Copy Paste results into assets/kubejs/lang/en_us.json
    /* 
    gateways.forEach((gateway) => {
        let lang_entries = {};
        let formatted_type = toTitleCase(gateway.type.replace(/_/g, ' '));

        let ritual = `ritual.enigmatica.occultism/ritual/${gateway.type}_gate_small`;
        lang_entries[`${ritual}.started`] = `Started Opening Small ${formatted_type} Gateway`;
        lang_entries[`${ritual}.finished`] = `Small ${formatted_type} Gateway Opened`;
        lang_entries[`${ritual}.interrupted`] = `Small ${formatted_type} Gateway Interrupted`;
        lang_entries[`${ritual}.conditions`] = `Not all requirements for this ritual are met.`;

        ritual = `ritual.enigmatica.occultism/ritual/${gateway.type}_gate`;
        lang_entries[`${ritual}.started`] = `Started Opening ${formatted_type} Gateway`;
        lang_entries[`${ritual}.finished`] = `${formatted_type} Gateway Opened`;
        lang_entries[`${ritual}.interrupted`] = `${formatted_type} Gateway Interrupted`;
        lang_entries[`${ritual}.conditions`] = `Not all requirements for this ritual are met.`;

        ritual = `ritual.enigmatica.occultism/ritual/${gateway.type}_gate_large`;
        lang_entries[`${ritual}.started`] = `Started Opening Large ${formatted_type} Gateway`;
        lang_entries[`${ritual}.finished`] = `Large ${formatted_type} Gateway Opened`;
        lang_entries[`${ritual}.interrupted`] = `Large ${formatted_type} Gateway Interrupted`;
        lang_entries[`${ritual}.conditions`] = `Not all requirements for this ritual are met.`;

        console.log(JSON.stringify(lang_entries));
    });
    */

    gateways.forEach((gateway) => {
        recipes.push(
            {
                output: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate_small"}`),
                activation_item: 'minecraft:ender_pearl',
                inputs: [gateway.input, gateway.input, gateway.input, gateway.input],
                ritual_dummy: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate_small"}`),
                ritual_type: 'occultism:craft',
                pentacle_id: 'occultism:possess_foliot',
                duration: 10,
                id: `${id_prefix}${gateway.type}_gate_small`
            },
            {
                output: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate"}`),
                activation_item: 'minecraft:ender_eye',
                inputs: [
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input
                ],
                ritual_dummy: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate"}`),
                ritual_type: 'occultism:craft',
                pentacle_id: 'occultism:summon_wild_greater_spirit',
                duration: 10,
                id: `${id_prefix}${gateway.type}_gate`
            },
            {
                output: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate_large"}`),
                activation_item: 'minecraft:nether_star',
                inputs: [
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input,
                    gateway.input
                ],
                ritual_dummy: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate_large"}`),
                ritual_type: 'occultism:craft',
                pentacle_id: 'occultism:summon_wild_afrit',
                duration: 10,
                id: `${id_prefix}${gateway.type}_gate_large`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';

        // activation_item: { item: 'occultism:book_of_binding_bound_marid' },
        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();

        if (recipe.item_to_use) {
            // item_to_use: { item: 'minecraft:egg' },
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }

        // ritual_dummy: { item: 'occultism:ritual_dummy/craft_stabilizer_tier4' },
        recipe.ritual_dummy = Item.of(recipe.ritual_dummy).toJson();

        // ingredients: [{ item: 'occultism:storage_stabilizer_tier3' }, { tag: 'forge:storage_blocks/iesnium' }],
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());

        // result: { item: 'occultism:storage_stabilizer_tier4' }
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
